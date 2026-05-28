(function () {
    'use strict';

    // ==========================================
    // 🛡️ 0. 环境防御阻断层
    // ==========================================
    const Environment = {
        ignoredDomains: [
            'web-pixels',
            'checkout.shopify.com',
            'pay.google.com',
            'js.stripe.com',
            'paypal.com',
        ],
        shouldIgnore() {
            try {
                const url = window.location.href;
                const hostname = window.location.hostname;
                if (!url || url === 'about:blank') return true;
                if (this.ignoredDomains.some(domain => hostname.includes(domain) || url.includes(domain))) return true;
                if (window.self !== window.top) return true;
                return false;
            } catch (e) {
                return true;
            }
        }
    };
    if (Environment.shouldIgnore()) return;

    // ==========================================
    // ⚙️ 1. 全局配置层 (Config)
    // ==========================================
    const CONFIG = {
        consentOptions: [
            { id: 'preferences', label: 'Preferences' },
            { id: 'analytics', label: 'Analytics' },
            { id: 'marketing', label: 'Marketing' },
            { id: 'sale_of_data', label: 'SaleOfData' }
        ],
        // 表头与数据列配置
        tableCols: [
            { key: 'event', label: 'Event', width: '60px' },
            { key: 'geo', label: 'Region & Law', width: '75px' },
            { key: 'preferences', label: 'Preferences', width: '65px' },
            { key: 'analytics', label: 'Analytics', width: '65px' },
            { key: 'marketing', label: 'Marketing', width: '65px' },
            { key: 'saleOfData', label: 'SaleOfData', width: '65px' },
            { key: 'cvConsent', label: 'CurrentVisitorConsent', width: 'auto' }
        ]
    };

    // ==========================================
    // 📦 2. 数据访问层 (Shopify API)
    // ==========================================
    const ShopifyAPI = {
        get cp() { return window.Shopify?.customerPrivacy; },
        get isBaseLoaded() { return !!(window.Shopify || document.querySelector('script[src*="/shopify/"]')); },
        get isCPLoaded() { return !!this.cp; },
        get canLoadAPI() { return !!(window.Shopify?.loadFeatures && !this.cp); },

        loadConsentAPI(cb) {
            if (this.canLoadAPI) window.Shopify.loadFeatures([{ name: 'consent-tracking-api', version: '0.1' }], cb);
        },

        getGlobalState() {
            return {
                shouldShowBanner: this.cp?.shouldShowBanner?.() ?? 'N/A',
                userCanBeTracked: this.cp?.userCanBeTracked?.() ?? 'N/A'
            };
        },

        getSnapshotData(eventType) {
            if (!this.isCPLoaded) return null;
            return {
                time: new Date().toLocaleTimeString([], { hour12: false }),
                type: eventType,
                region: this.cp.getRegion?.() || 'Unknown',
                law: this.cp.getRegulation?.() || '-',
                preferences: this.cp.preferencesProcessingAllowed?.() ?? 'N/A',
                analytics: this.cp.analyticsProcessingAllowed?.() ?? 'N/A',
                marketing: this.cp.marketingAllowed?.() ?? 'N/A',
                saleOfData: this.cp.saleOfDataAllowed?.() ?? 'N/A',
                cvConsent: this.cp.currentVisitorConsent?.() || {}
            };
        },

        setConsent(payload, cb) {
            if (typeof this.cp?.setTrackingConsent === 'function') {
                this.cp.setTrackingConsent(payload, cb);
            }
        }
    };

    // ==========================================
    // 🗄️ 3. 状态管理层 (DataStore)
    // ==========================================
    const DataStore = {
        records: [],
        globalState: { shouldShowBanner: 'N/A', userCanBeTracked: 'N/A' },
        listeners: [],

        addRecord(record) {
            if (!record) return;
            this.records.unshift(record);
            this.notify();
        },
        updateGlobalState(state) {
            this.globalState = state;
            this.notify();
        },
        subscribe(listener) { this.listeners.push(listener); },
        notify() { this.listeners.forEach(fn => fn(this.records, this.globalState)); }
    };

    // ==========================================
    // 🎨 4. 视图渲染层 (UI)
    // ==========================================
    const UI = {
        host: null,
        shadow: null,

        init() {
            this.host = document.createElement('div');
            this.host.id = 'jx-shopify-cp-inspector';
            this.host.style.cssText = `position: fixed; top: 20px; right: 20px; z-index: 2147483647;`;
            document.body.appendChild(this.host);
            this.shadow = this.host.attachShadow({ mode: 'open' });
            this.renderLayout();
            this.bindDrag();
        },

        renderLayout() {
            const tableHeaders = CONFIG.tableCols.map(c => `<th style="width: ${c.width};">${c.label}</th>`).join('');
            const consentCheckboxes = CONFIG.consentOptions.map(opt =>
                `<label><input type="checkbox" id="chk-${opt.id}"> ${opt.label}</label>`
            ).join('');

            this.shadow.innerHTML = `
                <style>
                    :host { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; -webkit-font-smoothing: antialiased; }
                    .root-container { position: relative; }

                    /* Components */
                    .trigger-btn {
                        width: 48px; height: 48px; border-radius: 14px; background: #fff;
                        display: flex; align-items: center; justify-content: center; cursor: move;
                        box-shadow: 0 6px 16px rgba(0,0,0,0.12); border: 1px solid rgba(0,0,0,0.05);
                        user-select: none; transition: transform 0.2s ease;
                    }
                    .trigger-btn:active { transform: scale(0.95); }

                    .panel {
                        display: none; position: absolute; right: 0; top: 60px; width: 720px;
                        background: rgba(255, 255, 255, 0.95); backdrop-filter: saturate(180%) blur(16px);
                        border-radius: 12px; border: 1px solid rgba(0,0,0,0.08);
                        box-shadow: 0 20px 40px rgba(0,0,0,0.15); padding: 16px; cursor: default;
                    }

                    /* Header & Actions */
                    .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; user-select: none; cursor: move; }
                    .header-title { font-weight: 700; color: #111; font-size: 15px; letter-spacing: -0.3px; }
                    .btn { background: #fff; border: 1px solid #d2d5d8; padding: 5px 12px; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: 600; color: #333; transition: all 0.2s ease; }
                    .btn:hover { background: #f8f9fa; border-color: #b0b4b8; }
                    .btn-primary { background: #000; color: #fff; border: none; }
                    .btn-primary:hover { background: #333; }

                    /* Status & Cards */
                    .global-stats { display: flex; gap: 20px; margin-bottom: 8px; font-size: 12px; font-weight: 600; color: #555; padding: 12px; background: rgba(0,0,0,0.02); border-radius: 8px; }
                    .consent-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 8px 16px; margin-bottom: 8px; }
                    .consent-card-header { font-size: 11px; font-weight: 700; color: #888; text-transform: uppercase; margin-bottom: 6px; letter-spacing: 0.5px; }
                    .consent-controls { display: flex; align-items: center; justify-content: space-between; }
                    .consent-checkboxes { display: flex; gap: 16px; flex-wrap: wrap; }
                    .consent-checkboxes label { display: flex; align-items: center; gap: 6px; cursor: pointer; font-size: 13px; color: #333; font-weight: 500;}
                    .consent-checkboxes input[type="checkbox"] { accent-color: #000; cursor: pointer; width: 14px; height: 14px; margin: 0; }

                    /* Table */
                    .table-wrapper { max-height: 420px; overflow-y: auto; border-radius: 8px; border: 1px solid #e5e7eb; background: #fff; }
                    .table-wrapper::-webkit-scrollbar { width: 6px; height: 6px; }
                    .table-wrapper::-webkit-scrollbar-thumb { background: #ccc; border-radius: 3px; }
                    table { width: 100%; border-collapse: collapse !important; table-layout: fixed !important; }
                    thead { position: sticky; top: 0; background: #f8f9fa !important; z-index: 2; box-shadow: 0 1px 0 #e5e7eb; }
                    th { padding: 10px 12px !important; font-size: 11px !important; text-align: left !important; color: #666; font-weight: 600 !important; }
                    td { padding: 10px 12px !important; font-size: 12px !important; vertical-align: top !important; border-top: 1px solid #f3f4f6 !important; }

                    /* Badges & Text Formatting */
                    .badge-true { color: #059669; background: #d1fae5; padding: 2px 6px; border-radius: 4px; font-weight: 700; font-size: 10px;}
                    .badge-false { color: #dc2626; background: #fee2e2; padding: 2px 6px; border-radius: 4px; font-weight: 700; font-size: 10px;}
                    .badge-neutral { color: #4b5563; background: #f3f4f6; padding: 2px 6px; border-radius: 4px; font-weight: 700; font-size: 10px;}

                    .geo-box { display: flex; flex-direction: column; gap: 4px; }
                    .geo-region { font-weight: 600; color: #111; font-size: 12px; }
                    .geo-law { font-size: 10px; padding: 2px 6px; background: #f3f4f6; color: #4b5563; border-radius: 4px; font-weight: 600; align-self: flex-start;}

                    details summary { cursor: pointer; color: #2563eb; outline: none; font-weight: 500; font-size: 12px;}
                    pre { background: #f4f6f8; color: #333333; padding: 10px; border-radius: 6px; overflow: auto; max-height: 120px; margin: 6px 0 0; font-size: 11px; font-family: ui-monospace, monospace; }
                </style>
                <div class="root-container">
                    <div class="trigger-btn" id="btn-toggle">
                        <img src="https://www.google.com/s2/favicons?domain=shopify.com&sz=64" width="24" height="24" style="pointer-events: none;"/>
                    </div>
                    <div class="panel" id="main-panel">
                        <div class="header" id="panel-header">
                            <span class="header-title">Shopify CustomerPrivacy Inspector</span>
                            <div class="actions">
                                <button id="btn-load-api" class="btn" style="display:none;">Load Consent API</button>
                                <button id="btn-query" class="btn btn-primary">Query</button>
                            </div>
                        </div>

                        <div class="global-stats" id="global-stats"></div>

                        <div class="consent-card">
                            <div class="consent-card-header">Manual Set Consent</div>
                            <div class="consent-controls">
                                <div class="consent-checkboxes">${consentCheckboxes}</div>
                                <button id="btn-submit-consent" class="btn btn-primary">Update</button>
                            </div>
                        </div>

                        <div class="table-wrapper">
                            <table>
                                <thead><tr>${tableHeaders}</tr></thead>
                                <tbody id="table-body"></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            `;
        },

        bindDrag() {
            const el = this.host;
            const panel = this.shadow.querySelector('#main-panel');
            let isDragging = false, offset = { x: 0, y: 0 }, clickTime;

            const start = (e) => {
                isDragging = true;
                const event = e.type.includes('touch') ? e.touches[0] : e;
                const rect = el.getBoundingClientRect();
                offset = { x: event.clientX - rect.left, y: event.clientY - rect.top };
            };

            const move = (e) => {
                if (!isDragging) return;
                e.preventDefault();
                const event = e.type.includes('touch') ? e.touches[0] : e;
                const x = Math.max(0, Math.min(event.clientX - offset.x, window.innerWidth - el.offsetWidth));
                const y = Math.max(0, Math.min(event.clientY - offset.y, window.innerHeight - el.offsetHeight));
                el.style.left = `${x}px`;
                el.style.top = `${y}px`;
                el.style.right = 'auto';
            };

            const stop = () => { isDragging = false; };

            this.shadow.querySelectorAll('#btn-toggle, #panel-header').forEach(handle => {
                handle.addEventListener('mousedown', start);
                handle.addEventListener('touchstart', start, { passive: false });
            });

            document.addEventListener('mousemove', move);
            document.addEventListener('touchmove', move, { passive: false });
            document.addEventListener('mouseup', stop);
            document.addEventListener('touchend', stop);

            const toggleBtn = this.shadow.querySelector('#btn-toggle');
            toggleBtn.onmousedown = () => { clickTime = Date.now(); };
            toggleBtn.onmouseup = () => {
                if (Date.now() - clickTime < 200) {
                    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
                }
            };
        },

        updateView(records, globalState) {
            const getBadge = (val) => `<span class="badge-${val === true ? 'true' : (val === false ? 'false' : 'neutral')}">${String(val).toUpperCase()}</span>`;

            this.shadow.querySelector('#global-stats').innerHTML = `
                <div>shouldShowBanner: ${getBadge(globalState.shouldShowBanner)}</div>
                <div>userCanBeTracked: ${getBadge(globalState.userCanBeTracked)}</div>
            `;

            this.shadow.querySelector('#table-body').innerHTML = records.map(r => `
                <tr>${CONFIG.tableCols.map(col => {
                    const val = r[col.key];
                    if (col.key === 'event') return `<td><div style="font-size:11px;font-weight:600;color:#111;">${r.time}</div><div style="padding:0 1px;font-size:10px;font-weight:600;color:#888;text-transform:uppercase;">${r.type}</div></td>`;
                    if (col.key === 'geo') return `<td><div class="geo-box"><span class="geo-region">${r.region}</span>${r.law ? `<span class="geo-law">${r.law}</span>` : ''}</div></td>`;
                    if (col.key === 'cvConsent') return `<td><details open><summary>Details</summary><pre>${JSON.stringify(val, null, 2)}</pre></details></td>`;
                    return `<td>${getBadge(val)}</td>`;
                }).join('')}</tr>
            `).join('');

            this.shadow.querySelector('#btn-load-api').style.display = ShopifyAPI.canLoadAPI ? 'inline-block' : 'none';
        },

        getConsentFormData() {
            // JS 动态收集选中的复选框状态
            return CONFIG.consentOptions.reduce((acc, opt) => {
                acc[opt.id] = this.shadow.querySelector(`#chk-${opt.id}`).checked;
                return acc;
            }, {});
        }
    };

    // ==========================================
    // ⚙️ 5. 应用控制器 (AppController)
    // ==========================================
    const AppController = {
        init() {
            let attempts = 0;
            const timer = setInterval(() => {
                if (ShopifyAPI.isBaseLoaded) {
                    clearInterval(timer);
                    this.start();
                } else if (++attempts > 10) clearInterval(timer);
            }, 1000);
        },

        start() {
            UI.init();
            DataStore.subscribe((records, state) => UI.updateView(records, state));
            this.bindEvents();
            this.watchShopifyCP();
        },

        bindEvents() {
            const $ = selector => UI.shadow.querySelector(selector);

            $('#btn-query').onclick = () => this.recordSnapshot('query');
            $('#btn-load-api').onclick = () => ShopifyAPI.loadConsentAPI(err => !err && this.recordSnapshot('load'));
            $('#btn-submit-consent').onclick = () => ShopifyAPI.setConsent(UI.getConsentFormData(), () => {});

            document.addEventListener('visitorConsentCollected', () => {
                setTimeout(() => this.recordSnapshot('update'), 100);
            });
        },

        recordSnapshot(eventType) {
            DataStore.updateGlobalState(ShopifyAPI.getGlobalState());
            DataStore.addRecord(ShopifyAPI.getSnapshotData(eventType));
        },

        watchShopifyCP() {
            const timer = setInterval(() => {
                if (ShopifyAPI.isCPLoaded) {
                    this.recordSnapshot('init');
                    clearInterval(timer);
                } else if (ShopifyAPI.canLoadAPI) {
                    UI.updateView(DataStore.records, DataStore.globalState);
                }
            }, 500);
        }
    };

    AppController.init();
})();
