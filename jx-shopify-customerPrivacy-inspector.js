// ==UserScript==
// @name         JX - Shopify隐私检测器(jx-shopify-customerPrivacy-inspector)
// @namespace    http://tampermonkey.net/
// @version      2026-02-03
// @description  可视化审计 Shopify customerPrivacy，Data 默认展开 (仅在检测到 Shopify 时激活)
// @author       JaysonJin
// @match        *://*/*
// @exclude      *://*/web-pixels*
// @exclude      *://*/*web-pixels*
// @grant        none
// ==/UserScript==

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

    // --- 1. Shopify 检测逻辑 ---
    function isShopify() {
        return !!(window.Shopify || document.querySelector('script[src*="/shopify/"]') || document.querySelector('link[href*="/shopify/"]'));
    }

    // 轮询检测（因为某些异步加载的网站 Shopify 对象可能稍晚出现）
    let checkCount = 0;
    const checkIsShopify = setInterval(() => {
        checkCount++;
        if (isShopify()) {
            clearInterval(checkIsShopify);
            initInspector(); // 检测成功，启动主逻辑
        }
        if (checkCount > 5) {
            clearInterval(checkIsShopify);
        }
    }, 1000);

    // --- 2. 主逻辑封装 ---
    function initInspector() {
        var records = [];

        function getSnapshot(type) {
            if (!window.Shopify || !window.Shopify.customerPrivacy) return null;
            const cp = window.Shopify.customerPrivacy;
            let consentObj = {};
            try {
                consentObj = cp.currentVisitorConsent ? cp.currentVisitorConsent() : {};
            } catch (e) { console.error("CP Inspector Error:", e); }

            return {
                time: new Date().toLocaleTimeString([], { hour12: false }),
                type: type,
                region: cp.getRegion ? cp.getRegion() : 'Unknown',
                analytics: cp.analyticsProcessingAllowed ? cp.analyticsProcessingAllowed() : 'N/A',
                marketing: cp.marketingAllowed ? cp.marketingAllowed() : 'N/A',
                raw: consentObj
            };
        }

        // --- 创建 Shadow Root ---
        const host = document.createElement('div');
        host.id = 'jx-shopify-cp-inspector';
        host.innerHTML = '<i hidden></i>'; // 避免shopify css判空不显示
        host.style.cssText = `position: fixed; top: 20px; right: 20px; z-index: 2147483647;`;
        document.body.appendChild(host);
        const shadow = host.attachShadow({ mode: 'open' });

        // --- 注入隔离样式 ---
        const style = document.createElement('style');
        style.textContent = `
        :host { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; user-select: none; }
        .root-container { position: relative; }
        .trigger-btn {
            width: 48px; height: 48px; border-radius: 12px; background: #fff;
            display: flex; align-items: center; justify-content: center; cursor: move;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15); border: 1px solid #e3e3e3;
        }
        .panel {
            display: none; position: absolute; right: 0; top: 60px; width: 550px;
            background: rgba(255, 255, 255, 0.98); backdrop-filter: blur(10px);
            border-radius: 12px; border: 1px solid #e3e3e3; box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            padding: 16px; cursor: default;
        }
        .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid #eee; padding-bottom: 8px; cursor: move; }
        .header-title { font-weight: 700; color: #202223; font-size: 14px; }
        .query-btn { background: #95bf47; color: white; border: none; padding: 4px 12px; border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: 600; }

        .table-wrapper { max-height: 500px; overflow-y: auto; border-radius: 8px; border: 1px solid #eee; background: #fff; }

        /* 彻底重置表格样式，防止继承 */
        table { width: 100%; border-collapse: collapse !important; border: none !important; margin: 0 !important; table-layout: fixed !important; background: #fff !important; }
        th, td { border: none !important; padding: 0 !important; margin: 0 !important; background: transparent !important; }

        thead { position: sticky; top: 0; background: #f6f6f7 !important; z-index: 2; }
        th { padding: 10px !important; font-size: 12px !important; text-align: left !important; font-weight: bold !important; border-bottom: 1px solid #eee !important; }
        tr { border-bottom: 1px solid #f1f1f1 !important; }
        td { padding: 8px 10px !important; font-size: 11px !important; vertical-align: top !important; line-height: 1.4 !important; }

        .badge-true { color: #008060; background: #e3f1df; padding: 2px 4px; border-radius: 4px; font-weight: bold; }
        .badge-false { color: #bf0711; background: #fff1f0; padding: 2px 4px; border-radius: 4px; font-weight: bold; }
        .badge-region { color: #5c5f62; background: #f1f0fa; padding: 2px 4px; border-radius: 4px; font-weight: bold; }

        details summary { cursor: pointer; color: #005bd3; margin-bottom: 4px; outline: none; }
        pre { background: #f4f6f8; padding: 6px; border-radius: 4px; overflow: auto; max-height: 120px; border: 1px solid #dfe3e8; margin: 0; white-space: pre-wrap; word-break: break-all; color: #454f5b; font-family: monospace; }
    `;
        shadow.appendChild(style);

        // --- 构建 UI ---
        const container = document.createElement('div');
        container.className = 'root-container';

        const button = document.createElement('div');
        button.className = 'trigger-btn';
        button.innerHTML = `<img src="https://www.google.com/s2/favicons?domain=shopify.com&sz=64" width="24" height="24" style="pointer-events: none;"/>`;

        const panel = document.createElement('div');
        panel.className = 'panel';

        const header = document.createElement('div');
        header.className = 'header';
        header.innerHTML = `
        <span class="header-title">Shopify Privacy Inspector</span>
        <button id="cp-query-btn" class="query-btn">Query</button>
    `;

        const tableWrapper = document.createElement('div');
        tableWrapper.className = 'table-wrapper';
        const table = document.createElement('table');

        tableWrapper.appendChild(table);
        panel.appendChild(header);
        panel.appendChild(tableWrapper);
        container.appendChild(button);
        container.appendChild(panel);
        shadow.appendChild(container);

        // --- 拖拽逻辑 ---
        let isDragging = false;
        let offsetX, offsetY;

        const startDrag = (e) => {
            isDragging = true;
            const event = e.type === 'touchstart' ? e.touches[0] : e;
            offsetX = event.clientX - host.getBoundingClientRect().left;
            offsetY = event.clientY - host.getBoundingClientRect().top;
        };

        const doDrag = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const event = e.type === 'touchmove' ? e.touches[0] : e;
            const rect = host.getBoundingClientRect();
            let x = event.clientX - offsetX;
            let y = event.clientY - offsetY;
            const maxX = window.innerWidth - rect.width;
            const maxY = window.innerHeight - rect.height;
            x = Math.max(0, Math.min(x, maxX));
            y = Math.max(0, Math.min(y, maxY));
            host.style.left = x + 'px';
            host.style.top = y + 'px';
            host.style.right = 'auto';
        };

        const stopDrag = () => { isDragging = false };

        [button, header].forEach(el => {
            el.addEventListener('mousedown', startDrag);
            el.addEventListener('touchstart', startDrag);
        });

        document.addEventListener('mousemove', doDrag);
        document.addEventListener('mouseup', stopDrag);

        // --- 交互逻辑 ---
        let clickTime;
        button.onmousedown = () => { clickTime = Date.now() };
        button.onmouseup = () => {
            if (Date.now() - clickTime < 200) {
                panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
            }
        };

        function addRecord(type) {
            const snap = getSnapshot(type);
            if (!snap) return;
            records.unshift(snap);
            renderTable();
        }

        function renderTable() {
            let html = `<thead><tr>
            <th style="width: 60px;">Event</th>
            <th style="width: 60px;">Region</th>
            <th style="width: 75px;">Analytics</th>
            <th style="width: 75px;">Marketing</th>
            <th>Consent Data</th>
        </tr></thead><tbody>`;

            records.forEach((r) => {
                const getStatusBadge = (val) => {
                    if (val === true || val === 'true') return `<span class="badge-true">TRUE</span>`;
                    if (val === false || val === 'false') return `<span class="badge-false">FALSE</span>`;
                    return `<span>${val}</span>`;
                };

                html += `<tr>
                <td>
                    <div style="font-weight: 600; color: #202223;">${r.time}</div>
                    <div style="font-size: 10px; color: #6d7175; text-transform: uppercase;">${r.type}</div>
                </td>
                <td><span class="badge-region">${r.region}</span></td>
                <td>${getStatusBadge(r.analytics)}</td>
                <td>${getStatusBadge(r.marketing)}</td>
                <td>
                    <details open>
                        <summary>Details</summary>
                        <pre>${JSON.stringify(r.raw, null, 2)}</pre>
                    </details>
                </td>
            </tr>`;
            });
            table.innerHTML = html + '</tbody>';
        }

        shadow.querySelector('#cp-query-btn').onclick = () => addRecord('query');

        const checkShopify = setInterval(() => {
            if (window.Shopify && window.Shopify.customerPrivacy) {
                addRecord('init');
                clearInterval(checkShopify);
            }
        }, 500);

        document.addEventListener('visitorConsentCollected', () => setTimeout(() => addRecord('update'), 100));
    }
})();