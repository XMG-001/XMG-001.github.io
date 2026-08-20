(function () {
    'use strict';

    // ==========================================
    // 🛡️ 0. 环境感知与防御层
    // ==========================================
    const ENV = {
        extensionName: 'JX - 隐私检测器',
        ignoreURL: ['checkout.shopify.com', 'pay.google.com', 'js.stripe.com', 'paypal.com'],
        sandboxURL: ['web-pixels'],
        isTop: window.self === window.top,
        isSameOrigin() {
            if (this.isTop) return true;
            const host = (() => { try { return window.top.location.hostname } catch { return new URL(document.referrer || '').hostname } })();
            return host === window.location.hostname;
        },
        isSandbox() { return !this.isTop && this.sandboxURL.some(d => window.location.href.includes(d)); },
        logLoaded(mode) {
            console.log(
                `%c${this.extensionName || 'JX - 插件'} %c${mode || '已加载'} ▶`,
                'background:linear-gradient(90deg, #00d2ff, #3a7bd5); color:#fff; padding:4px 8px; border-radius:4px 0 0 4px; font-weight:bold;',
                'background:linear-gradient(90deg, #3a7bd5, #6a11cb); color:#fff; padding:4px 8px; border-radius:0 4px 4px 0; font-weight:bold;'
            );
        },
        check() {
            if (this.isTop) this.logLoaded();
            const { href, hostname } = window.location;
            if (!href || href === 'about:blank' || this.ignoreURL.some(d => hostname.includes(d) || href.includes(d))) return false;
            const valid = this.isTop;
            return valid;
        }
    };
    if (!ENV.check()) return;

    // ==========================================
    // ⚙️ 1. 全局配置层 (Config)
    // ==========================================
    const CONFIG = {
        shopifyOptions: [
            { id: 'preferences', label: 'Preferences' },
            { id: 'analytics', label: 'Analytics' },
            { id: 'marketing', label: 'Marketing' },
            { id: 'sale_of_data', label: 'SaleOfData' }
        ],
        googleOptions: [
            { id: 'ad_storage', label: 'ad_storage' },
            { id: 'analytics_storage', label: 'analytics_storage' },
            { id: 'ad_user_data', label: 'ad_user_data' },
            { id: 'ad_personalization', label: 'ad_personalization' },
            { id: 'functionality_storage', label: 'functionality_storage' },
            { id: 'personalization_storage', label: 'personalization_storage' },
            { id: 'security_storage', label: 'security_storage' }
        ],
        shopifyCols: [
            { key: 'event', label: 'Event', width: '60px' },
            { key: 'geo', label: 'Region & Law', width: '75px' },
            { key: 'state', label: 'Consent State', width: '120px' },
            { key: 'details', label: 'CurrentVisitorConsent', width: 'auto' }
        ],
        googleCols: [
            { key: 'time', label: 'Time', width: '60px' },
            { key: 'action', label: 'Action', width: '60px' },
            { key: 'diff', label: 'Consent State Diff', width: '235px' },
            { key: 'dataLayer', label: 'DataLayer', width: 'auto' }
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
        getSnapshotData() {
            if (!this.isCPLoaded) return null;
            const cp = this.cp;
            return {
                preferences: cp.preferencesProcessingAllowed?.() ?? 'N/A',
                analytics: cp.analyticsProcessingAllowed?.() ?? 'N/A',
                marketing: cp.marketingAllowed?.() ?? 'N/A',
                saleOfData: cp.saleOfDataAllowed?.() ?? 'N/A',
                cvConsent: cp.currentVisitorConsent?.() || {},
                region: cp.getRegion?.() || '-',
                law: cp.getRegulation?.() || '-'
            };
        },
        setConsent(payload, cb) {
            if (payload && Object.keys(payload).length > 0 && typeof this.cp?.setTrackingConsent === 'function') {
                this.cp.setTrackingConsent(payload, cb);
            }
        }
    };

    // ==========================================
    // 🎯 3. 数据访问层 (Google Consent API)
    // ==========================================
    const GoogleConsentAPI = {
        currentState: {},
        lastIndex: 0,
        timer: null,
        onChange: null,

        init(callback) {
            this.onChange = callback;
            this.timer = setInterval(() => this.pollDataLayer(), 200);
        },
        pollDataLayer() {
            const dl = window.dataLayer;
            if (!Array.isArray(dl)) return;

            const len = dl.length;
            if (len < this.lastIndex) this.lastIndex = 0;
            if (len === this.lastIndex) return; // 无变化时直接退出，避免无效循环

            for (let i = this.lastIndex; i < len; i++) {
                this.processItem(dl[i]);
            }
            this.lastIndex = len;
        },
        processItem(item) {
            if (!item) return;
            // 优化 Arguments 转换逻辑，减少不必要的 Array.from 对象创建
            const arr = Object.prototype.toString.call(item) === '[object Arguments]' 
                ? Array.prototype.slice.call(item) 
                : (Array.isArray(item) ? item : null);

            if (!arr || arr[0] !== 'consent') return;
            const [_, action, payload] = arr;

            if (payload && typeof payload === 'object') {
                let isChanged = false;
                const previous = { ...this.currentState };

                for (const opt of CONFIG.googleOptions) {
                    if (payload[opt.id] !== undefined) {
                        this.currentState[opt.id] = payload[opt.id];
                        isChanged = true;
                    }
                }
                if (isChanged && this.onChange) {
                    this.onChange(action, payload, previous);
                }
            }
        },
        setConsent(action, payload) {
            if (!payload || Object.keys(payload).length === 0) return;
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
            window.gtag('consent', action, payload);
            this.pollDataLayer(); // 立即触发加速响应
        }
    };

    // ==========================================
    // 🗄️ 4. 状态管理层 (DataStore)
    // ==========================================
    const DataStore = {
        shopifyRecords: [],
        googleRecords: [],
        shopifyGlobal: { shouldShowBanner: 'N/A', userCanBeTracked: 'N/A' },
        listeners: [],

        addShopifyRecord(record) {
            if (!record || !record.state) return; // 边界处理：空数据不记录
            this.shopifyRecords.unshift(record);
            this.notify();
        },
        addGoogleRecord(record) {
            if (!record || !record.payload) return;
            this.googleRecords.unshift(record);
            this.notify();
        },
        updateShopifyGlobal(state) {
            if (!state) return;
            this.shopifyGlobal = state;
            this.notify();
        },
        subscribe(listener) { this.listeners.push(listener); },
        notify() { this.listeners.forEach(fn => fn(this.shopifyRecords, this.googleRecords, this.shopifyGlobal)); }
    };

    // ==========================================
    // 🎨 5. 视图渲染层 (UI)
    // ==========================================
    const UI = {
        host: null,
        shadow: null,
        dom: {}, // DOM 缓存对象，避免重复查询

        init() {
            this.host = document.createElement('div');
            this.host.id = 'jx-privacy-inspector-v2';
            this.host.style.cssText = `position: fixed; top: 20px; right: 20px; z-index: 2147483647;`;
            this.shadow = this.host.attachShadow({ mode: 'open' });
            
            const inject = () => document.body ? document.body.appendChild(this.host) : false;
            if (!inject()) {
                new MutationObserver((_, obs) => inject() && obs.disconnect()).observe(document.documentElement, { childList: true });
            }
            
            this.renderLayout();
            this.cacheDOM();
            this.bindDrag();
        },
        cacheDOM() {
            this.dom = {
                panel: this.shadow.querySelector('#main-panel'),
                shopifyStats: this.shadow.querySelector('#shopify-stats'),
                btnLoadApi: this.shadow.querySelector('#btn-load-api'),
                shopifyTbody: this.shadow.querySelector('#shopify-tbody'),
                googleTbody: this.shadow.querySelector('#google-tbody'),
                toggleBtn: this.shadow.querySelector('#btn-toggle')
            };
        },
        renderLayout() {
            const renderCheckboxes = (opts, prefix) => opts.map(opt =>
                `<label><input type="checkbox" id="${prefix}-${opt.id}" ${prefix === 'gchk' ? 'checked' : ''}> ${opt.label}</label>`
            ).join('');

            this.shadow.innerHTML = `
                <style>
                    :host { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; -webkit-font-smoothing: antialiased; }
                    .root-container { position: relative; letter-spacing: normal; line-height: normal; }
                    .trigger-btn { width: 40px; height: 40px; border-radius: 15px; background: #fff; display: flex; align-items: center; justify-content: center; cursor: move; box-shadow: 0 6px 16px rgba(0,0,0,0.12); user-select: none; transition: transform 0.2s ease; position: relative; }
                    .trigger-btn:active { transform: scale(0.95); }
                    .panel { display: none; position: absolute; right: 0; top: 50px; width: 1200px; background: rgba(255, 255, 255, 0.95); backdrop-filter: saturate(180%) blur(16px); border-radius: 12px; border: 1px solid rgba(0,0,0,0.08); box-shadow: 0 20px 40px rgba(0,0,0,0.15); padding: 16px; cursor: default; }
                    .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; user-select: none; cursor: move; }
                    .header-title { font-weight: 700; color: #111; font-size: 15px; }
                    .btn { background: #fff; border: 1px solid #d2d5d8; padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: 600; color: #333; transition: all 0.2s ease; }
                    .btn:hover { background: #f8f9fa; border-color: #b0b4b8; }
                    .btn-primary { background: #000; color: #fff; border: none; }
                    .btn-primary:hover { background: #333; }
                    .btn-google { background: linear-gradient(135deg, #1a73e8, #7c3aed); color: #fff; border: none; }
                    .btn-google:hover { background: linear-gradient(135deg, #1557b0, #6d28d9); }
                    .split-layout { display: flex; gap: 16px; width: 100%; }
                    .col { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 12px; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 10px; padding: 12px; }
                    .col-header { display: flex; align-items: center; justify-content: space-between; font-size: 13px; font-weight: 700; color: #374151; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px;}
                    .col-header img { margin-right: 6px; vertical-align: middle; }
                    .control-box { background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 10px; }
                    .chk-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px; margin-bottom: 10px; }
                    .chk-grid label { font-size: 12px; color: #4b5563; font-weight: 500; display: flex; align-items: center; gap: 4px; cursor: pointer;}
                    .chk-grid input { accent-color: #000; width: 12px; height: 12px; margin: 0; cursor: pointer;}
                    .action-row { display: flex; gap: 8px; }
                    .global-stats { display: flex; gap: 12px; font-size: 12px; font-weight: 600; color: #4b5563; padding: 8px 10px; background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; }
                    .table-wrapper { max-height: 350px; overflow-y: auto; border-radius: 6px; border: 1px solid #e5e7eb; background: #fff; }
                    .table-wrapper::-webkit-scrollbar { width: 4px; }
                    .table-wrapper::-webkit-scrollbar-thumb { background: #ccc; border-radius: 2px; }
                    table { width: 100%; border-collapse: collapse !important; table-layout: fixed !important; }
                    thead { position: sticky; top: 0; background: #f3f4f6 !important; z-index: 2; box-shadow: 0 1px 0 #e5e7eb; }
                    th { padding: 6px 8px !important; font-size: 11px !important; text-align: left !important; color: #666666; font-weight: 600 !important; }
                    td { padding: 8px !important; font-size: 12px !important; vertical-align: top !important; border-top: 1px solid #f3f4f6 !important; }
                    .inline-flex-box { display: inline-flex; align-items: center; flex-direction: column;}
                    .badge { padding: 2px 4px; border-radius: 4px; font-weight: 700; font-size: 10px; line-height: 1; display: inline-block; text-transform: uppercase; }
                    .b-true { color: #059669; background: #d1fae5; }
                    .b-false { color: #dc2626; background: #fee2e2; }
                    .b-neu { color: #4b5563; background: #f3f4f6; }
                    .b-purp { color: #6b21a8; background: #f3e8ff; }
                    .b-blue { color: #1e40af; background: #dbeafe; }
                    .mini-status { display: flex; flex-direction: column; gap: 5px; }
                    .mini-status span { font-size: 10px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed #eee; padding-bottom: 2px;}
                    .diff-item { font-size: 11px; margin-bottom: 5px; color: #374151;}
                    .diff-arrow { color: #9ca3af; margin: 0 4px; }
                    details summary { cursor: pointer; color: #2563eb; font-weight: 600; font-size: 10px; outline: none; }
                    pre { background: #f4f6f8; color: #333; padding: 6px; border-radius: 4px; overflow: auto; max-height: 100px; margin: 4px 0 0; font-size: 10px; font-family: monospace; white-space: pre-wrap; word-break: break-all; }
                </style>
                <div class="root-container">
                    <div class="trigger-btn" id="btn-toggle">
                        <img src="https://www.google.com/s2/favicons?domain=shopify.com&sz=64" width="20" height="20" style="position: absolute; left: 4px; z-index: 2;pointer-events: none;" />
                        <img src="https://www.google.com/s2/favicons?domain=google.com&sz=64" width="20" height="20" style="position: absolute; right: 2px; z-index: 1;pointer-events: none;" />
                    </div>
                    <div class="panel" id="main-panel">
                        <div class="header" id="panel-header">
                            <span class="header-title">Privacy & Consent Inspector</span>
                        </div>
                        <div class="split-layout">
                            <div class="col">
                                <div class="col-header">
                                    <span><img src="https://www.google.com/s2/favicons?domain=shopify.com&sz=64" width="16" height="16"/> Shopify Customer Privacy</span>
                                    <button id="btn-load-api" class="btn" style="display:none; padding: 2px 6px;">Load Consent API</button>
                                    <button id="btn-query-all" class="btn">Query</button>
                                </div>
                                <div class="global-stats" id="shopify-stats"></div>
                                <div class="control-box">
                                    <div class="chk-grid">${renderCheckboxes(CONFIG.shopifyOptions, 'chk')}</div>
                                    <div class="action-row">
                                        <button id="btn-submit-shopify" class="btn btn-primary" style="flex:1;">Manual Set Consent</button>
                                    </div>
                                </div>
                                <div class="table-wrapper">
                                    <table>
                                        <thead><tr>${CONFIG.shopifyCols.map(c => `<th style="width:${c.width}">${c.label}</th>`).join('')}</tr></thead>
                                        <tbody id="shopify-tbody"></tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="col" style="flex: 1.35;">
                                <div class="col-header">
                                    <span><img src="https://www.google.com/s2/favicons?domain=google.com&sz=64" width="16" height="16"/> Google Consent Mode</span>
                                </div>
                                <div class="control-box">
                                    <div class="chk-grid">${renderCheckboxes(CONFIG.googleOptions, 'gchk')}</div>
                                    <div class="action-row">
                                        <button id="btn-g-default" class="btn" style="flex:1;">Set Default</button>
                                        <button id="btn-g-update" class="btn btn-google" style="flex:1;">Update Consent</button>
                                    </div>
                                </div>
                                <div class="table-wrapper">
                                    <table>
                                        <thead><tr>${CONFIG.googleCols.map(c => `<th style="width:${c.width}">${c.label}</th>`).join('')}</tr></thead>
                                        <tbody id="google-tbody"></tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },
        bindDrag() {
            const el = this.host;
            let isDragging = false, offset = { x: 0, y: 0 }, clickTime, rAF;
            
            const start = (e) => {
                isDragging = true;
                const rect = el.getBoundingClientRect();
                offset = { x: e.clientX - rect.left, y: e.clientY - rect.top };
            };
            const move = (e) => {
                if (!isDragging) return;
                e.preventDefault();
                if (rAF) cancelAnimationFrame(rAF);
                rAF = requestAnimationFrame(() => {
                    const x = Math.max(0, Math.min(e.clientX - offset.x, window.innerWidth - el.offsetWidth));
                    const y = Math.max(0, Math.min(e.clientY - offset.y, window.innerHeight - el.offsetHeight));
                    el.style.left = `${x}px`;
                    el.style.top = `${y}px`;
                    el.style.right = 'auto';
                });
            };
            const stop = () => { isDragging = false; if (rAF) cancelAnimationFrame(rAF); };

            this.shadow.querySelectorAll('#btn-toggle, #panel-header').forEach(handle => {
                handle.style.touchAction = 'none';
                handle.addEventListener('pointerdown', start);
            });
            document.addEventListener('pointermove', move, { passive: false });
            document.addEventListener('pointerup', stop);
            document.addEventListener('pointercancel', stop);

            this.dom.toggleBtn.addEventListener('pointerdown', () => { clickTime = Date.now(); });
            this.dom.toggleBtn.addEventListener('pointerup', () => {
                if (Date.now() - clickTime < 200) {
                    this.dom.panel.style.display = this.dom.panel.style.display === 'none' ? 'block' : 'none';
                }
            });
        },
        getBadge(val) {
            if (val === true || val === 'granted') return `<span class="badge b-true">${val === true ? 'TRUE' : 'GRANT'}</span>`;
            if (val === false || val === 'denied') return `<span class="badge b-false">${val === false ? 'FALSE' : 'DENY'}</span>`;
            return `<span class="badge b-neu">${String(val || '-').toUpperCase().substring(0, 5)}</span>`;
        },
        updateView(shopifyRecords, googleRecords, shopifyGlobal) {
            // 通过缓存 DOM 减少重复重绘
            this.dom.shopifyStats.innerHTML = `
                <div>shouldShowBanner: ${this.getBadge(shopifyGlobal.shouldShowBanner)}</div>
                <div>userCanBeTracked: ${this.getBadge(shopifyGlobal.userCanBeTracked)}</div>
            `;
            this.dom.btnLoadApi.style.display = ShopifyAPI.canLoadAPI ? 'inline-block' : 'none';

            this.dom.shopifyTbody.innerHTML = shopifyRecords.map(r => `
                <tr>
                    <td><div class="inline-flex-box"><span style="font-size:12px;font-weight:600;color:#111;">${r.time}</span><span class="badge b-purp">${r.event}</span></div></td>
                    <td><div class="inline-flex-box"><span style="font-size:12px;font-weight:600;color:#111;">${r.state?.region}</span><span class="badge b-neu">${r.state?.law}</span></div></td>
                    <td>
                        <div class="mini-status">
                            <span>Preferences: ${this.getBadge(r.state?.preferences)}</span>
                            <span>Analytics: ${this.getBadge(r.state?.analytics)}</span>
                            <span>Marketing: ${this.getBadge(r.state?.marketing)}</span>
                            <span>SaleOfData: ${this.getBadge(r.state?.saleOfData)}</span>
                        </div>
                    </td>
                    <td><details open><summary>Details</summary><pre>${JSON.stringify(r.state?.cvConsent, null, 2)}</pre></details></td>
                </tr>
            `).join('');

            this.dom.googleTbody.innerHTML = googleRecords.map(r => {
                const diffHtml = Object.entries(r.diff || {}).map(([k, v]) => {
                    return `<div class="diff-item"><b>${k}:</b> ${this.getBadge(v.old)} <span class="diff-arrow">➞</span> ${this.getBadge(v.new)}</div>`;
                }).join('');

                return `
                <tr>
                    <td><div class="inline-flex-box"><span style="font-size:12px;font-weight:600;color:#111;">${r.time}</span></div></td>
                    <td><div class="inline-flex-box"><span class="badge ${r.action === 'default' ? 'b-neu' : 'b-blue'}">${r.action}</span></div></td>
                    <td>${diffHtml || '<span style="color:#9ca3af;font-size:10px;">No changes</span>'}</td>
                    <td><details><summary>Details</summary><pre>${JSON.stringify(r.payload, null, 2)}</pre></details></td>
                </tr>
            `}).join('');
        },
        getFormData(type) {
            const options = type === 'shopify' ? CONFIG.shopifyOptions : CONFIG.googleOptions;
            const prefix = type === 'shopify' ? 'chk' : 'gchk';
            return options.reduce((acc, opt) => {
                const el = this.shadow.querySelector(`#${prefix}-${opt.id}`);
                if (el) acc[opt.id] = type === 'shopify' ? el.checked : (el.checked ? 'granted' : 'denied');
                return acc;
            }, {});
        }
    };

    // ==========================================
    // ⚙️ 6. 应用控制器 (AppController)
    // ==========================================
    const AppController = {
        init() {
            let attempts = 0;
            const timer = setInterval(() => {
                if (ShopifyAPI.isBaseLoaded || window.dataLayer?.length > 0) {
                    clearInterval(timer);
                    this.start();
                } else if (++attempts > 30) {
                    clearInterval(timer);
                }
            }, 1000);
        },
        start() {
            UI.init();
            DataStore.subscribe((sRec, gRec, sGlobal) => UI.updateView(sRec, gRec, sGlobal));
            this.bindEvents();

            GoogleConsentAPI.init((action, payload, previous) => {
                const diff = this.calculateDiff(previous, GoogleConsentAPI.currentState);
                this.recordGoogle(action, payload, diff);
            });

            this.watchShopifyCP();
        },
        bindEvents() {
            const $ = selector => UI.shadow.querySelector(selector);
            
            $('#btn-query-all').onclick = () => this.recordShopify('query');
            $('#btn-load-api').onclick = () => ShopifyAPI.loadConsentAPI(err => !err && this.recordShopify('load_api'));
            $('#btn-submit-shopify').onclick = () => ShopifyAPI.setConsent(UI.getFormData('shopify'), () => {});
            $('#btn-g-default').onclick = () => GoogleConsentAPI.setConsent('default', UI.getFormData('google'));
            $('#btn-g-update').onclick = () => GoogleConsentAPI.setConsent('update', UI.getFormData('google'));
            
            document.addEventListener('visitorConsentCollected', () => {
                setTimeout(() => this.recordShopify('update'), 100);
            });
        },
        calculateDiff(prev, curr) {
            const diff = {};
            let hasDiff = false;
            for (const opt of CONFIG.googleOptions) {
                const k = opt.id;
                if (curr[k] !== undefined && prev[k] !== curr[k]) {
                    diff[k] = { old: prev[k] || 'none', new: curr[k] };
                    hasDiff = true;
                }
            }
            return hasDiff ? diff : null; // 空数据返回 null，拦截无效记录
        },
        recordShopify(eventName) {
            const state = ShopifyAPI.getSnapshotData();
            if (eventName === 'query' && !state) return; // 边界：无有效状态数据则不生成记录
            
            DataStore.updateShopifyGlobal(ShopifyAPI.getGlobalState());
            DataStore.addShopifyRecord({
                time: new Date().toLocaleTimeString([], { hour12: false }),
                event: eventName,
                state: state
            });
        },
        recordGoogle(action, payload, diff) {
            // 边界：没有实质性变化且非主动查询更新时，减少无意义 UI 渲染
            if (!diff && action !== 'default' && action !== 'update') return; 
            
            DataStore.addGoogleRecord({
                time: new Date().toLocaleTimeString([], { hour12: false }),
                action: action,
                payload: payload,
                diff: diff || {}
            });
        },
        watchShopifyCP() {
            const timer = setInterval(() => {
                if (ShopifyAPI.isCPLoaded && !this.cpLoadedLogged) {
                    this.cpLoadedLogged = true;
                    this.recordShopify('init');
                    clearInterval(timer);
                } else if (ShopifyAPI.canLoadAPI) {
                    UI.updateView(DataStore.shopifyRecords, DataStore.googleRecords, DataStore.shopifyGlobal);
                }
            }, 500);
        }
    };

    AppController.init();
})();
