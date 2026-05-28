(function () {
    'use strict';

    // ==========================================
    // 🛡️ 0. 环境防御阻断层
    // ==========================================
    const ENV = {
        extensionName: 'JX - GA4请求监测器',
        ignoreURL: ['web-pixels', 'checkout.shopify.com', 'pay.google.com', 'js.stripe.com', 'paypal.com'],
        logLoaded() {
            console.log(
                `%c${this.extensionName || 'JX - 插件'} %c已加载 ▶`,
                'background:linear-gradient(90deg, #00d2ff, #3a7bd5); color:#fff; padding:4px 8px; border-radius:4px 0 0 4px; font-weight:bold;',
                'background:linear-gradient(90deg, #3a7bd5, #6a11cb); color:#fff; padding:4px 8px; border-radius:0 4px 4px 0; font-weight:bold;'
            );
        },
        check() {
            const { href, hostname } = window.location;
            const block = !href || href === 'about:blank' || window.self !== window.top || this.ignoreURL.some(d => hostname.includes(d) || href.includes(d));
            if (!block) this.logLoaded();
            return !block;
        }
    };
    if (!ENV.check()) return;

    // ==========================================
    // 📦 1. 数据持久层 (Storage) - 提前声明供配置使用
    // ==========================================
    const Storage = {
        get: (key, def) => sessionStorage.getItem(key) ?? def,
        set: (key, val) => { try { sessionStorage.setItem(key, val); } catch (e) { } },
        getCache: (key) => {
            try { return JSON.parse(sessionStorage.getItem(key)) || []; }
            catch (e) { return []; }
        },
        saveCache: (key, logs) => {
            try { sessionStorage.setItem(key, JSON.stringify(logs)); } catch (e) { }
        }
    };

    // ==========================================
    // ⚙️ 2. 全局配置 (Config)
    // ==========================================
    const KEYS = {
        CACHE: 'jx_ga4_monitor_logs',
        FILTER: 'jx_ga4_monitor_filter_tid',
        DOMAIN: 'jx_ga4_monitor_domain_match',
        PATH: 'jx_ga4_monitor_path_match',
        APPEND: 'jx_ga4_monitor_is_append'
    };

    const CONFIG = {
        MAX_LOGS: 200,
        IS_APPEND: Storage.get(KEYS.APPEND, 'false') === 'true', // 从 Storage 初始化
        FIELDS: [
            { key: 'tid', label: 'tid (衡量ID)', width: '15%', class: 'c-tid', color: false },
            { key: 'en', label: 'en (事件)', width: '25%', class: 'c-en', color: false },
            { key: 'gcs', label: 'gcs', width: '8%', class: 'c-gcs', color: true },
            { key: 'cid', label: 'cid (客户端ID)', width: '20%', class: 'c-mono', color: true },
            { key: 'sid', label: 'sid (会话)', width: '12%', class: 'c-mono', color: true },
            { key: 'tfd', label: 'tfd', width: '8%', class: '', color: false },
            { key: 'status', label: '返回状态码', width: '12%', class: 'c-status', color: false }
        ]
    };

    // ==========================================
    // 🛠️ 3. 工具类 (Utils)
    // ==========================================
    const Utils = {
        genId: (prefix) => `${prefix}_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        getHslColor: (str) => {
            if (!str || str === '-') return 'transparent';
            const hash = [...str].reduce((h, c) => c.charCodeAt(0) + ((h << 5) - h), 0);
            return `hsl(${Math.abs(hash) % 360}, 75%, 92%)`;
        },
        getStatusHtml: (status) => {
            if (!status || status === '-') return `<span style="color:#bbb;">-</span>`;
            if (status === 'Pending') return `<span class="status-badge status-pending">⏳ Pending</span>`;
            if (/(Fail|Blocked|Failed|Canceled)/.test(status)) {
                return `<span class="status-badge status-failed" title="${status}">✗ ${status}</span>`;
            }
            return `<span class="status-badge status-neutral">${status === 'Success' ? '200' : status}</span>`;
        }
    };

    // ==========================================
    // 🧠 4. 状态管理 (State)
    // ==========================================
    const LogState = {
        logs: [],
        knownTids: new Set(),
        init() {
            this.logs = Storage.getCache(KEYS.CACHE);
            this.handleNavigation();
        },
        handleNavigation() {
            const currentUrl = window.location.href;
            const referrerUrl = document.referrer;
            const navType = performance.getEntriesByType('navigation')[0]?.type || 'navigate';
            const lastLog = this.logs[this.logs.length - 1] || {};

            if (lastLog.to !== currentUrl || lastLog.from !== referrerUrl) {
                this.addLogs([{
                    _isNav: true, type: navType, from: referrerUrl || '', to: currentUrl, _capturedAtUrl: currentUrl
                }]);
            }
        },
        addLogs(newLogs) {
            this.logs.push(...newLogs);
            if (this.logs.length > CONFIG.MAX_LOGS) this.logs = this.logs.slice(-CONFIG.MAX_LOGS);
            Storage.saveCache(KEYS.CACHE, this.logs);
        },
        updateStatus(rowId, status) {
            let changed = false;
            this.logs.forEach(log => {
                if (log._rowId?.startsWith(rowId)) {
                    log.status = status;
                    changed = true;
                }
            });
            if (changed) Storage.saveCache(KEYS.CACHE, this.logs);
        },
        clear() {
            this.logs = [];
            this.knownTids.clear();
            Storage.saveCache(KEYS.CACHE, []);
        }
    };

    // ==========================================
    // 📡 5. 纯解析引擎 (GA4 Parser)
    // ==========================================
    const GA4Parser = {
        extract(url, body, rowId, defaultStatus, filters) {
            if (!url || typeof url !== 'string') return null;

            const { domain: targetDomain, path: targetPath } = filters;
            const bodyStr = typeof body === 'string' ? body : '';

            if (targetDomain && !url.includes(targetDomain)) return null;
            if (targetPath && !url.includes(targetPath) && !bodyStr.includes(targetPath)) return null;

            const urlQs = url.split('?')[1] || '';
            const baseParams = new URLSearchParams(urlQs);
            const extractedLogs = [];

            if (bodyStr.includes('\n')) {
                bodyStr.split('\n').map(l => l.trim()).filter(Boolean).forEach((line, index) => {
                    const lineParams = new URLSearchParams(line);
                    if (lineParams.has('en') || baseParams.has('en')) {
                        const record = this.buildRecord(lineParams, baseParams, `${rowId}_${index}`, defaultStatus, true);
                        if (record) extractedLogs.push(record);
                    }
                });
            } else {
                const qs = urlQs + (bodyStr ? (urlQs ? '&' : '') + bodyStr : '');
                const record = this.buildRecord(new URLSearchParams(qs), baseParams, rowId, defaultStatus, false);
                if (record) extractedLogs.push(record);
            }

            return extractedLogs.length ? extractedLogs : null;
        },

        buildRecord(primaryParams, fallbackParams, rowId, status, isBatch) {
            const data = { _capturedAtUrl: window.location.href, _rowId: rowId, status, _isBatch: isBatch };
            CONFIG.FIELDS.forEach(f => {
                if (f.key !== 'status') data[f.key] = primaryParams.get(f.key) || fallbackParams.get(f.key) || '-';
            });
            return (data.en === '-' && data.tid === '-') ? null : data;
        }
    };

    // ==========================================
    // 💻 6. 视图层渲染与交互 (UI)
    // ==========================================
    const UI = {
        host: null, shadow: null, els: {},

        mount() {
            this.host = document.createElement('div');
            this.host.id = 'jx-ga4-monitor';
            this.host.innerHTML = '<i hidden></i>'; // 避免shopify css判空不显示
            this.host.style.cssText = `position:fixed;top:20px;left:20px;z-index:2147483647;`;
            this.shadow = this.host.attachShadow({ mode: 'open' });

            const inject = () => document.body ? document.body.appendChild(this.host) : false;
            if (!inject()) new MutationObserver((_, obs) => inject() && obs.disconnect()).observe(document.documentElement, { childList: true });

            this.renderLayout();
            this.bindDOM();
            this.bindEvents();
            this.restoreFilters();
        },

        renderLayout() {
            const style = document.createElement('style');
            style.textContent = `
                /* CSS 精简并保留核心 UI */
                #ga4-box { letter-spacing: normal; line-height: normal; width: 920px; max-height: 650px; background: rgba(255,255,255,0.75); color: #1d1d1f; font-family: sans-serif; font-size: 12px;
                           border-radius: 14px; box-shadow: 0 20px 40px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.6); display: flex; flex-direction: column; overflow: hidden; backdrop-filter: blur(24px) saturate(180%); transition: width 0.3s, height 0.3s; }
                #ga4-box.mini { width: 180px; max-height: 45px!important; border: 1px solid rgba(230,81,0,0.3); }
                #ga4-box.mini #ga4-body, #ga4-box.mini .hide-on-mini { display: none; }
                #ga4-head { padding: 8px 12px; background: linear-gradient(135deg, rgba(255,149,0,0.85), rgba(255,59,48,0.85)); display: flex; gap: 8px; align-items: center; cursor: move; user-select: none; color: #fff; border-bottom: 1px solid rgba(0,0,0,0.05); }
                #ga4-title { font-weight: 600; flex: 1; font-size: 13px; text-shadow: 0 1px 2px rgba(0,0,0,0.1); }
                input.ga4-input { background: rgba(255,255,255,0.2); color: #fff; border: 1px solid rgba(255,255,255,0.3); border-radius: 6px; padding: 4px 8px; font-size: 11px; outline: none; width: 110px; transition: 0.2s; }
                input.ga4-input:focus { background: rgba(255,255,255,0.95); color: #1d1d1f; box-shadow: 0 0 0 3px rgba(255,149,0,0.3); }
                input.ga4-input::placeholder { color: rgba(255,255,255,0.7); }
                select.ga4-select { background: rgba(255,255,255,0.2); color: #fff; border: 1px solid rgba(255,255,255,0.3); border-radius: 6px; padding: 3px 6px; font-size: 11px; outline: none; cursor: pointer; }
                select.ga4-select option { color: #1d1d1f; background: #fff; }
                .ga4-btn { background: rgba(255,255,255,0.2); color: #fff; border: 1px solid rgba(255,255,255,0.3); padding: 4px 10px; border-radius: 6px; cursor: pointer; font-size: 11px; font-weight: 500; transition: 0.2s; }
                .ga4-btn:hover { background: #fff; color: #ff3b30; transform: translateY(-1px); }
                #ga4-body { flex: 1; overflow-y: auto; min-height: 50px; background: transparent; }
                #ga4-body::-webkit-scrollbar { width: 8px; }
                #ga4-body::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 10px; border: 2px solid transparent; background-clip: padding-box; }
                #ga4-table { width: 100%; border-collapse: separate; border-spacing: 0; }
                #ga4-table th { background: rgba(245,245,247,0.8); backdrop-filter: blur(10px); position: sticky; top: 0; padding: 10px 8px; color: #86868b; text-align: left; z-index: 2; font-size: 11px; }
                #ga4-table td { padding: 6px; border-bottom: 1px solid #f5f5f5; word-break: break-all; font-size: 11px; line-height: 1.2; }
                #ga4-table tbody tr:not(.ga4-empty):hover { background: #fff8f1; }
                .ga4-empty td { padding: 30px!important; text-align: center!important; color: #9e9e9e; font-style: italic; }
                .ga4-row-hidden { display: none!important; }
                .c-en { background: #fff3e0; color: #e65100; padding: 3px 8px; border-radius: 12px; font-weight: 600; border: 1px solid #ffe0b2; display: inline-block; }
                .c-tid { color: #bf360c; font-weight: 600; }
                .c-gcs { color: #616161; background: #f5f5f5; padding: 2px 6px; border-radius: 12px; border: 1px solid #e0e0e0; display: inline-block; font-size: 10px;}
                .c-mono { color: #1a252f; }
                .ga4-batch-tag { color: #f57c00; font-size: 10px; margin-left: 4px; font-style: italic; }
                .ga4-flash { animation: shadow-flash 0.4s ease-out; }
                @keyframes shadow-flash { 0% { background: #ffe0b2; } 100% { background: transparent; } }
                .ga4-row-nav { background: rgba(242, 242, 247, 0.6)!important; box-shadow: inset 0px 0px 3px 0px #ddd;}
                .nav-block { display: flex; align-items: center; gap: 10px; }
                .nav-paths { display: flex; flex-direction: column; gap: 2px; flex: 1; }
                .c-nav-tag { background: #8e8e93; color: #fff; padding: 2px 6px; border-radius: 4px; font-weight: 700; font-size: 10px; }
                .nav-line { font-size: 11px; color: #64748b; }
                .nav-line b { font-size: 10px; width: 35px; display: inline-block; }
                .status-badge { padding: 3px 8px; border-radius: 12px; font-weight: 600; font-size: 10px; display: inline-flex; border: 1px solid transparent; }
                .status-pending { background: #fff7ed; color: #c2410c; border-color: #ffedd5; }
                .status-failed { background: #fef2f2; color: #b91c1c; border-color: #fecaca; }
                .status-neutral { background: #f8fafc; color: #475569; border-color: #e2e8f0; }
            `;

            const box = document.createElement('div');
            box.id = 'ga4-box';
            box.className = 'mini';
            box.innerHTML = `
                <div id="ga4-head">
                    <button class="ga4-btn" id="ga4-toggle" style="padding: 4px 8px;">+</button>
                    <span id="ga4-title">GA4 请求监测 (<span id="ga4-count">0</span>)</span>
                    <input type="text" id="ga4-domain-match" class="ga4-input hide-on-mini" placeholder="域名(例:google)" title="匹配URL中的域名" />
                    <input type="text" id="ga4-path-match" class="ga4-input hide-on-mini" placeholder="路径(例:collect?v=2)" title="匹配URL或Body中的路径" />
                    <select id="ga4-filter-tid" class="ga4-select hide-on-mini"><option value="all">全部 TID</option></select>
                    <button class="ga4-btn hide-on-mini" id="ga4-append-toggle" title="↓ 底部追加 ｜ ↑ 顶部插入">${CONFIG.IS_APPEND ? '↓' : '↑'}</button>
                    <button class="ga4-btn hide-on-mini" id="ga4-clear">清空</button>
                </div>
                <div id="ga4-body">
                    <table id="ga4-table">
                        <colgroup>${CONFIG.FIELDS.map(f => `<col style="width:${f.width};">`).join('')}</colgroup>
                        <thead><tr>${CONFIG.FIELDS.map(f => `<th>${f.label}</th>`).join('')}</tr></thead>
                        <tbody id="ga4-tbody"><tr class="ga4-empty"><td colspan="${CONFIG.FIELDS.length}">等待 GA4 请求触发...</td></tr></tbody>
                    </table>
                </div>
            `;
            this.shadow.appendChild(style);
            this.shadow.appendChild(box);
        },

        bindDOM() {
            const $ = id => this.shadow.getElementById(id);
            this.els = {
                box: $('ga4-box'), tbody: $('ga4-tbody'), count: $('ga4-count'),
                toggleBtn: $('ga4-toggle'), domainInput: $('ga4-domain-match'), pathInput: $('ga4-path-match'),
                filterSelect: $('ga4-filter-tid'), clearBtn: $('ga4-clear'), head: $('ga4-head'),
                appendToggleBtn: $('ga4-append-toggle')
            };
        },

        restoreFilters() {
            this.els.domainInput.value = Storage.get(KEYS.DOMAIN, 'google');
            this.els.pathInput.value = Storage.get(KEYS.PATH, 'collect?v=2');
            this.els.filterSelect.value = Storage.get(KEYS.FILTER, 'all');
        },

        bindEvents() {
            const { els } = this;
            const saveInput = (el, key) => el.addEventListener('input', () => Storage.set(key, el.value.trim()));
            saveInput(els.domainInput, KEYS.DOMAIN);
            saveInput(els.pathInput, KEYS.PATH);

            els.clearBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                LogState.clear();
                els.tbody.innerHTML = `<tr class="ga4-empty"><td colspan="${CONFIG.FIELDS.length}">等待请求...</td></tr>`;
                els.count.innerText = 0;
                els.filterSelect.innerHTML = '<option value="all">全部 TID</option>';
                Storage.set(KEYS.FILTER, 'all');
            });

            // 动态切换正逆序渲染按钮逻辑
            els.appendToggleBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                CONFIG.IS_APPEND = !CONFIG.IS_APPEND;
                Storage.set(KEYS.APPEND, CONFIG.IS_APPEND);
                els.appendToggleBtn.innerText = CONFIG.IS_APPEND ? '↓' : '↑';

                // 切换后立即重绘 UI，隔离数据和视图的优势体现
                els.tbody.innerHTML = '';
                this.renderLogs([...LogState.logs], false);
                this.applyFilter();
            });

            els.filterSelect.addEventListener('change', () => {
                Storage.set(KEYS.FILTER, els.filterSelect.value);
                this.applyFilter();
            });

            els.toggleBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                els.box.classList.toggle('mini');
                els.toggleBtn.innerText = els.box.classList.contains('mini') ? '+' : '-';
            });

            // 拖拽
            els.head.addEventListener('mousedown', (e) => {
                if (['BUTTON', 'SELECT', 'INPUT'].includes(e.target.tagName)) return;
                e.preventDefault();
                const dx = e.clientX - this.host.offsetLeft, dy = e.clientY - this.host.offsetTop;
                this.host.style.right = this.host.style.bottom = 'auto';
                const onMove = ev => {
                    this.host.style.left = Math.max(0, Math.min(ev.clientX - dx, window.innerWidth - els.box.offsetWidth)) + 'px';
                    this.host.style.top = Math.max(0, Math.min(ev.clientY - dy, window.innerHeight - els.box.offsetHeight)) + 'px';
                };
                document.addEventListener('mousemove', onMove);
                document.addEventListener('mouseup', () => document.removeEventListener('mousemove', onMove), { once: true });
            });
        },

        getFilters() {
            return { domain: this.els.domainInput.value, path: this.els.pathInput.value };
        },

        applyFilter() {
            const val = this.els.filterSelect.value;
            this.els.tbody.querySelectorAll('tr[data-tid]').forEach(r => {
                r.classList.toggle('ga4-row-hidden', val !== 'all' && r.dataset.tid !== val);
            });
        },

        renderLogs(logs, isNewRequest = false) {
            logs.forEach(log => this.renderSingleRow(log, isNewRequest));

            this.els.count.innerText = LogState.logs.length;

            while (this.els.tbody.children.length > CONFIG.MAX_LOGS) {
                const targetNode = CONFIG.IS_APPEND ? this.els.tbody.firstChild : this.els.tbody.lastChild;
                targetNode?.remove();
            }
        },

        renderSingleRow(data, isNew) {
            this.els.tbody.querySelector('.ga4-empty')?.remove();

            if (data._rowId) {
                const existingTr = this.els.tbody.querySelector(`tr[data-row-id="${data._rowId}"]`);
                if (existingTr) {
                    existingTr.querySelector('.td-status').innerHTML = Utils.getStatusHtml(data.status);
                    return;
                }
            }

            const tr = document.createElement('tr');

            if (data._isNav) {
                tr.className = 'ga4-row-nav';
                tr.innerHTML = `
                    <td colspan="${CONFIG.FIELDS.length}">
                        <div class="nav-block">
                            <span class="c-nav-tag">${data.type === 'reload' ? 'RELOAD' : 'NAVIGATE'}</span>
                            <div class="nav-paths">
                                <div class="nav-line"><b>FROM:</b>${data.from || '(direct)'}</div>
                                <div class="nav-line" style="color:#ea580c;font-weight:500;"><b>TO:</b>${data.to}</div>
                            </div>
                        </div>
                    </td>`;
            } else {
                if (data.tid !== '-' && !LogState.knownTids.has(data.tid)) {
                    LogState.knownTids.add(data.tid);
                    this.els.filterSelect.add(new Option(data.tid, data.tid));
                }

                tr.dataset.tid = data.tid;
                if (data._rowId) tr.setAttribute('data-row-id', data._rowId);
                if (isNew) tr.classList.add('ga4-flash');

                if (this.els.filterSelect.value !== 'all' && data.tid !== this.els.filterSelect.value) {
                    tr.classList.add('ga4-row-hidden');
                }

                tr.innerHTML = CONFIG.FIELDS.map(f => {
                    const val = data[f.key] || '-';
                    if (f.key === 'status') return `<td class="td-status">${Utils.getStatusHtml(val)}</td>`;

                    const bg = f.color ? Utils.getHslColor(val) : 'transparent';
                    const style = bg !== 'transparent' ? `style="background:${bg};border-radius:2px;"` : '';

                    if (val === '-') return `<td ${style}><span style="color:#bbb;">-</span></td>`;
                    if (f.key === 'en') return `<td ${style}><span class="${f.class}">${val}</span>${data._isBatch ? `<span class="ga4-batch-tag">(Batch)</span>` : ''}</td>`;
                    return `<td ${style}><span class="${f.class}">${val}</span></td>`;
                }).join('');
            }

            // 执行挂载
            if (CONFIG.IS_APPEND) {
                this.els.tbody.appendChild(tr);
            } else {
                this.els.tbody.insertBefore(tr, this.els.tbody.firstChild);
            }
        },

        updateRowStatus(rowId, status) {
            this.els.tbody.querySelectorAll(`tr[data-row-id^="${rowId}"]`).forEach(tr => {
                const td = tr.querySelector('.td-status');
                if (td) td.innerHTML = Utils.getStatusHtml(status);
            });
        }
    };

    // ==========================================
    // 🌐 7. 网络拦截代理层 (Network Proxy)
    // ==========================================
    const NetworkProxy = {
        init({ onRequest, onResponse }) {
            if (window.fetch) {
                const nativeFetch = window.fetch;
                window.fetch = function (input, init) {
                    const url = (typeof input === 'string' ? input : input?.url) || '';
                    const rowId = Utils.genId('fetch');
                    const isMatched = onRequest(url, init?.body, rowId, 'Pending');
                    const promise = nativeFetch.apply(this, arguments);

                    if (isMatched) {
                        return promise.then(res => {
                            onResponse(rowId, res.type ? `${res.status} (${res.type})` : `${res.status}`);
                            return res;
                        }).catch(err => {
                            onResponse(rowId, err?.message?.includes('Failed to fetch') ? 'Failed' : (err?.message?.substring(0, 15) || 'Failed'));
                            throw err;
                        });
                    }
                    return promise;
                };
            }

            const nativeOpen = XMLHttpRequest.prototype.open;
            const nativeSend = XMLHttpRequest.prototype.send;
            XMLHttpRequest.prototype.open = function (method, url) {
                this._url = url;
                return nativeOpen.apply(this, arguments);
            };
            XMLHttpRequest.prototype.send = function (body) {
                try {
                    if (this._url) {
                        const rowId = Utils.genId('xhr');
                        if (onRequest(this._url, body, rowId, 'Pending')) {
                            const self = this;
                            const onStateChange = () => {
                                if (self.readyState === 4) onResponse(rowId, self.status === 0 ? 'Canceled' : `${self.status}`);
                            };
                            this.addEventListener ? this.addEventListener('readystatechange', onStateChange) :
                            (function(old) { self.onreadystatechange = function() { onStateChange(); old?.apply(this, arguments); }})(this.onreadystatechange);
                        }
                    }
                } catch (e) { }
                return nativeSend.apply(this, arguments);
            };

            if (navigator.sendBeacon) {
                const nativeBeacon = navigator.sendBeacon;
                navigator.sendBeacon = function (url, data) {
                    try { onRequest(url, data, Utils.genId('beacon'), '204 (Beacon)'); } catch (e) { }
                    return nativeBeacon.apply(this, arguments);
                };
            }
        }
    };

    // ==========================================
    // 🚀 8. 核心控制器 (App Orchestrator)
    // ==========================================
    const App = {
        init() {
            LogState.init();
            UI.mount();
            UI.renderLogs([...LogState.logs], false);
            UI.applyFilter();

            NetworkProxy.init({
                onRequest: (url, body, rowId, defaultStatus) => {
                    const logs = GA4Parser.extract(url, body, rowId, defaultStatus, UI.getFilters());
                    if (logs) {
                        LogState.addLogs(logs);
                        UI.renderLogs(logs, true);
                        return true;
                    }
                    return false;
                },
                onResponse: (rowId, status) => {
                    LogState.updateStatus(rowId, status);
                    UI.updateRowStatus(rowId, status);
                }
            });
        }
    };

    App.init();
})();
