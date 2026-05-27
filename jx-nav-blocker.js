// ==UserScript==
// @name         JX - 页面跳转拦截器(jx-nav-blocker)
// @namespace    http://tampermonkey.net/
// @version      2026-03-02
// @description  拦截所有跳转事件并弹出美化确认框，支持键盘快捷键及状态识别
// @author       JaysonJin
// @match        *://*.roborock.com/*
// @match        *://*.roborock.cn/*
// @match        *://*.racetopprint.ca/*
// @match        *://*.myshopify.com/*
// @match        *://*.ai5yue.com/*
// @match        *://*.dji.com/*
// @match        *://*.vesync.com/*
// @match        *://*.tealiumdemo.com/*
// @match        *://*.speediance.com/*
// @match        *://*.x-sense.com/*
// @match        *://*.navimow.com/*
// @match        *://*.xtool.com/*
// @exclude      *://*/web-pixels*
// @exclude      *://*/*web-pixels*
// @grant        none
// ==/UserScript==

(function() {
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

    // ---------------- 状态变量 ----------------
    let isDialogOpen = false;
    let isInternalNavigation = false;

    // 1. 注入 CSS 样式
    const injectStyles = () => {
        if (document.getElementById('jx-intercept-styles')) return;
        const style = document.createElement('style');
        style.id = 'jx-intercept-styles';
        style.innerHTML = `
            #jx-modal-overlay {
                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(0, 0, 0, 0.4); backdrop-filter: blur(4px);
                display: flex; align-items: center; justify-content: center;
                z-index: 2147483647; font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
            }
            .jx-modal-card {
                background: #ffffff; padding: 28px; border-radius: 16px;
                box-shadow: 0 12px 32px rgba(0,0,0,0.15); width: 400px;
                text-align: center; border: 1px solid #f0f0f0;
                animation: jx-fadeInUp 0.3s cubic-bezier(0.23, 1, 0.32, 1);
                margin-top: -10%;
            }
            @keyframes jx-fadeInUp {
                from { opacity: 0; transform: translateY(15px) scale(0.98); }
                to { opacity: 1; transform: translateY(0) scale(1); }
            }
            .jx-modal-title { font-size: 18px; font-weight: 600; color: #1d1d1f; margin-bottom: 12px; }
            .jx-modal-desc {
                font-size: 14px; color: #666666; margin-bottom: 24px;
                line-height: 1.6; word-break: break-all; text-align: left;
                background: #f5f5f7; padding: 12px 12px 6px 12px; border-radius: 8px;
            }
            .jx-modal-btns { display: flex; gap: 12px; }
            .jx-btn {
                flex: 1; padding: 10px 0; border-radius: 8px; border: none;
                font-size: 14px; font-weight: 500; cursor: pointer; transition: all 0.2s;
            }
            .jx-btn-cancel { background: #f5f5f7; color: #1d1d1f; }
            .jx-btn-cancel:hover { background: #e8e8ed; }
            .jx-btn-confirm { background: #0071e3; color: white; }
            .jx-btn-confirm:hover { background: #0077ed; transform: translateY(-1px); }
        `;
        document.head.appendChild(style);
    };

    // 2. 创建 Promise 化的模态对话框
    const showConfirm = (title, url) => {
        return new Promise((resolve) => {
            isDialogOpen = true; // 状态更新：弹窗已开启

            const overlay = document.createElement('div');
            overlay.id = 'jx-modal-overlay';
            overlay.innerHTML = `
                <div class="jx-modal-card">
                    <div class="jx-modal-title">${title}</div>
                    <div class="jx-modal-desc">即将离开当前页面前往：<br><strong>${url}</strong></div>
                    <div class="jx-modal-btns">
                        <button class="jx-btn jx-btn-cancel" id="jx-cancel-btn">取消</button>
                        <button class="jx-btn jx-btn-confirm" id="jx-confirm-btn">确认</button>
                    </div>
                </div>
            `;
            document.body.appendChild(overlay);

            const originalOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';

            const handleKeyDown = (e) => {
                if (e.key === 'Enter') { e.preventDefault(); close(true); }
                else if (e.key === 'Escape') { e.preventDefault(); close(false); }
            };

            const close = (result) => {
                document.removeEventListener('keydown', handleKeyDown);
                document.body.style.overflow = originalOverflow;
                overlay.remove();
                isDialogOpen = false; // 状态更新：弹窗已关闭
                resolve(result);
            };

            document.addEventListener('keydown', handleKeyDown);
            overlay.querySelector('#jx-confirm-btn').onclick = () => close(true);
            overlay.querySelector('#jx-cancel-btn').onclick = () => close(false);
            overlay.onclick = (e) => { if (e.target === overlay) close(false); };
        });
    };

    // 3. 核心拦截逻辑
    const initInterceptors = () => {
        // 拦截 A 标签点击
        document.addEventListener('click', async (e) => {
            const link = e.target.closest('a');
            if (link && link.href && !link.href.startsWith('#') && !link.href.startsWith('javascript:')) {
                // 如果是按住 Ctrl/Cmd 键打开新标签，通常不拦截，或者根据需求开启
                if (e.ctrlKey || e.metaKey) return;

                e.preventDefault();
                const confirmed = await showConfirm('确认跳转', link.href);
                if (confirmed) {
                    isInternalNavigation = true; // 状态更新：允许内部跳转
                    window.location.href = link.href;
                }
            }
        }, true);

        // 拦截表单提交
        document.addEventListener('submit', async (e) => {
            e.preventDefault();
            const actionUrl = e.target.action || '当前操作';
            const confirmed = await showConfirm('确认提交表单', actionUrl);
            if (confirmed) {
                isInternalNavigation = true; // 状态更新：允许内部跳转
                e.target.submit();
            }
        }, true);
    };

    // 4. 刷新/关闭 (动态屏蔽优化版)
    const interceptUnload = () => {
        window.addEventListener('beforeunload', (e) => {
            //if (isInternalNavigation) {
            //    return;
            //}
            //if (isDialogOpen) {
            //    return;
            //}
            e.preventDefault();
        });
    };

    // 5. 初始化入口
    const run = () => {
        injectStyles();
        initInterceptors();
        interceptUnload();

        const logStyle = 'background: linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%); color: white; padding: 4px 12px; border-radius: 4px; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.2);';
        console.log('%c[JX - 页面跳转拦截器]: 运行中▶', logStyle);
    };

    // 兼容 document-start 注入
    if (document.body) {
        run();
    } else {
        const observer = new MutationObserver(() => {
            if (document.body) {
                run();
                observer.disconnect();
            }
        });
        observer.observe(document.documentElement, { childList: true });
    }

})();