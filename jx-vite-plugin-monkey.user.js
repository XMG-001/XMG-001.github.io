// ==UserScript==
// @name       JX Work Assistant
// @namespace  npm/vite-plugin-monkey
// @version    0.0.0
// @author     JaysonJin
// @icon       https://vitejs.dev/logo.svg
// @match      *://*/*
// @require    https://cdn.jsdelivr.net/npm/vue@3.5.44/dist/vue.global.prod.js
// @require    data:application/javascript,window.Vue%20%3D%20Vue
// @require    https://cdn.jsdelivr.net/npm/dayjs@1.11.23/dayjs.min.js
// @require    https://cdn.jsdelivr.net/npm/dayjs@1.11.23/plugin/advancedFormat.js
// @require    https://cdn.jsdelivr.net/npm/dayjs@1.11.23/plugin/customParseFormat.js
// @require    https://cdn.jsdelivr.net/npm/dayjs@1.11.23/plugin/localeData.js
// @require    https://cdn.jsdelivr.net/npm/dayjs@1.11.23/plugin/quarterOfYear.js
// @require    https://cdn.jsdelivr.net/npm/dayjs@1.11.23/plugin/weekOfYear.js
// @require    https://cdn.jsdelivr.net/npm/dayjs@1.11.23/plugin/weekYear.js
// @require    https://cdn.jsdelivr.net/npm/dayjs@1.11.23/plugin/weekday.js
// @require    data:application/javascript,window.dayjs%20%3D%20dayjs%3Bwindow.dayjs_plugin_advancedFormat%20%3D%20dayjs_plugin_advancedFormat%3Bwindow.dayjs_plugin_customParseFormat%20%3D%20dayjs_plugin_customParseFormat%3Bwindow.dayjs_plugin_localeData%20%3D%20dayjs_plugin_localeData%3Bwindow.dayjs_plugin_quarterOfYear%20%3D%20dayjs_plugin_quarterOfYear%3Bwindow.dayjs_plugin_weekOfYear%20%3D%20dayjs_plugin_weekOfYear%3Bwindow.dayjs_plugin_weekYear%20%3D%20dayjs_plugin_weekYear%3Bwindow.dayjs_plugin_weekday%20%3D%20dayjs_plugin_weekday
// @require    https://cdn.jsdelivr.net/npm/ant-design-vue@4.2.6/dist/antd.min.js
// @grant      GM_getValue
// @grant      GM_registerMenuCommand
// @grant      GM_setValue
// @run-at     document-start
// ==/UserScript==

(function(vue, ant_design_vue) {
	"use strict";
	var s = new Set();
	var _css = async (t) => {
		if (s.has(t)) return;
		s.add(t);
		((css) => {
			const pageDocument = globalThis.document;
			let host = pageDocument.querySelector("#jx-work-assistant");
			if (!host) {
				host = pageDocument.createElement("div");
				host.id = "jx-work-assistant";
				host.innerHTML = "<i hidden></i>";
				(pageDocument.body ?? pageDocument.documentElement).append(host);
			}
			const shadowRoot = host.shadowRoot ?? host.attachShadow({ mode: "open" });
			const style = pageDocument.createElement("style");
			style.textContent = css;
			shadowRoot.append(style);
		})(t);
	};
	_css(" .url-rule-editor[data-v-ec03e8d3]{gap:8px;margin-top:8px;display:grid}label[data-v-ec03e8d3]{color:#374151;gap:4px;font-size:11px;font-weight:500;display:grid}.tip-text[data-v-ec03e8d3]{color:#9ca3af;font-size:10px;font-weight:400}.modern-textarea[data-v-ec03e8d3]{border-radius:6px;font-size:12px}.section-title[data-v-ec09f86a]{color:#374151;border-top:1px solid #f0f0f2;margin:14px 0 8px;padding-top:10px;font-size:13px;font-weight:600}.style-title[data-v-ec09f86a]{margin-top:12px}.config-grid[data-v-ec09f86a]{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px 10px;display:grid}.meta-grid[data-v-ec09f86a]{margin-bottom:10px}.wide[data-v-ec09f86a]{grid-column:1/-1}label[data-v-ec09f86a]{color:#6b7280;flex-direction:column;gap:4px;min-width:0;font-size:11px;display:flex}.config-grid[data-v-ec09f86a] .ant-input-number,.config-grid[data-v-ec09f86a] .ant-input,.config-grid[data-v-ec09f86a] .ant-select{width:100%}.behavior-grid[data-v-ec09f86a]{margin-top:9px}.base-options[data-v-ec09f86a]{margin-top:8px}.switch-row[data-v-ec09f86a]{box-sizing:border-box;color:#374151;border:1px solid #eef0f2;border-radius:6px;flex-direction:row;justify-content:space-between;align-items:center;min-height:34px;padding:6px 8px}.advanced-style[data-v-ec09f86a]{color:#4b5563;background:#fafbfc;border-radius:6px;margin-top:8px;padding:8px;font-size:11px}.advanced-style p[data-v-ec09f86a]{color:#8b9098;margin:5px 0}.custom-row[data-v-ec09f86a]{grid-template-columns:1fr 1fr auto;gap:5px;margin:5px 0;display:grid}.add-custom[data-v-ec09f86a]{color:#1677ff;cursor:pointer;background:0 0;border:0}.update-manager[data-v-cbb4ed5d]{display:inline-flex}.trigger-entry[data-v-cbb4ed5d]{color:#525252;cursor:pointer;-webkit-user-select:none;user-select:none;background:#fff;border:1px solid #e5e5e5;border-radius:99px;align-items:center;gap:3px;padding:1px 8px;font-size:11px;font-weight:500;transition:all .2s cubic-bezier(.4,0,.2,1);display:flex}.trigger-entry[data-v-cbb4ed5d]:hover{color:#171717;border-color:#171717}.status-dot[data-v-cbb4ed5d]{background:#a3a3a3;border-radius:50%;width:3px;height:3px;transition:background .2s}.trigger-entry.has-update[data-v-cbb4ed5d]{color:#fff;background:#171717;border-color:#171717}.trigger-entry.has-update .status-dot[data-v-cbb4ed5d]{background:#fff;box-shadow:0 0 6px #fff9}.popover-panel[data-v-cbb4ed5d]{color:#171717;width:210px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:12px}.panel-header[data-v-cbb4ed5d]{border-bottom:1px solid #f4f4f5;justify-content:space-between;align-items:center;margin-bottom:4px;padding-bottom:8px;display:flex}.panel-title[data-v-cbb4ed5d]{letter-spacing:-.01em;font-size:12px;font-weight:600}.icon-refresh[data-v-cbb4ed5d]{cursor:pointer;color:#a3a3a3;background:0 0;border:none;padding:2px;font-size:13px;line-height:1;transition:color .15s}.icon-refresh[data-v-cbb4ed5d]:hover{color:#171717}.icon-refresh.spinning[data-v-cbb4ed5d]{animation:.8s linear infinite spin-cbb4ed5d}.panel-empty[data-v-cbb4ed5d]{text-align:center;padding:12px 0 6px}.status-text[data-v-cbb4ed5d]{color:#737373;margin:0;font-size:11px}.version-tag[data-v-cbb4ed5d]{color:#a3a3a3;margin-top:4px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:10px;display:inline-block}.panel-body[data-v-cbb4ed5d]{padding-top:2px}.update-item[data-v-cbb4ed5d]{border-bottom:1px solid #fafafa;padding:6px 0}.update-item[data-v-cbb4ed5d]:last-child{border-bottom:none}.item-head[data-v-cbb4ed5d]{justify-content:space-between;align-items:center;gap:8px;display:flex}.item-head .name[data-v-cbb4ed5d]{color:#171717;font-weight:500}.ver-change[data-v-cbb4ed5d]{color:#737373;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:10px}.notes[data-v-cbb4ed5d]{color:#737373;white-space:pre-wrap;margin:3px 0 0;font-size:11px;line-height:1.4}.update-btn[data-v-cbb4ed5d]{color:#fff;letter-spacing:.02em;background:#171717;border-radius:6px;justify-content:center;align-items:center;margin-top:10px;padding:6px 0;font-size:11px;font-weight:500;text-decoration:none;transition:background .15s;display:flex}.update-btn[data-v-cbb4ed5d]:hover{color:#fff;background:#333}@keyframes spin-cbb4ed5d{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.monochrome-popover .ant-popover-inner{border:1px solid #e5e5e5;border-radius:8px;padding:10px 12px;box-shadow:0 10px 15px -3px #0000000d,0 4px 6px -4px #0000000d}.plugin-icon[data-v-807a1c8c]{vertical-align:middle;flex:none;justify-content:center;align-items:center;width:1em;height:1em;line-height:1;display:inline-flex}img[data-v-807a1c8c]{object-fit:contain;width:100%;height:100%;display:block}.drawer-header[data-v-48e2f2d1]{justify-content:space-between;align-items:center;width:100%;display:flex}.drawer-title-group[data-v-48e2f2d1]{align-items:center;gap:8px;display:flex}.main-title[data-v-48e2f2d1]{color:#1f2329;font-size:14px;font-weight:600}.status-badge[data-v-48e2f2d1]{border-radius:10px;padding:1px 6px;font-size:10px;font-weight:500;line-height:1.3}.status-badge.warning[data-v-48e2f2d1]{color:#b45309;background-color:#fef3c7}.icon-btn-close[data-v-48e2f2d1]{color:#86909c;cursor:pointer;background:0 0;border:none;border-radius:4px;justify-content:center;align-items:center;width:24px;height:24px;transition:all .2s;display:flex}.icon-btn-close[data-v-48e2f2d1]:hover{color:#1f2329;background-color:#f2f3f5}.list-summary-bar[data-v-48e2f2d1]{justify-content:space-between;align-items:center;margin-bottom:8px;padding:0 2px;display:flex}.count-text[data-v-48e2f2d1],.toggle-hidden-btn[data-v-48e2f2d1]{color:#86909c;font-size:12px}.toggle-hidden-btn[data-v-48e2f2d1]{padding:0}.dot[data-v-48e2f2d1]{border-radius:50%;flex-shrink:0;width:6px;height:6px;display:inline-block}.dot-success[data-v-48e2f2d1]{background-color:#52c41a}.dot-error[data-v-48e2f2d1]{background-color:#ff4d4f}.dot-warning[data-v-48e2f2d1]{background-color:#faad14}.plugin-list[data-v-48e2f2d1]{flex-direction:column;gap:8px;display:flex}.plugin-card[data-v-48e2f2d1]{background:#fff;border:1px solid #e5e6eb;border-radius:6px;padding:8px 10px;transition:border-color .2s}.plugin-card[data-v-48e2f2d1]:hover{border-color:#c9cdd4}.plugin-card.is-disabled[data-v-48e2f2d1]{opacity:.6}.plugin-summary[data-v-48e2f2d1]{cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;gap:8px;display:flex}.expand-icon-btn[data-v-48e2f2d1]{color:#4e5969;cursor:pointer;background:#f2f3f5;border:none;border-radius:4px;justify-content:center;align-items:center;width:18px;height:18px;padding:0;transition:transform .2s,background .2s;display:flex}.expand-icon-btn.expanded[data-v-48e2f2d1]{transform:rotate(90deg)}.expand-icon-btn[data-v-48e2f2d1]:hover{background-color:#e5e6eb}.plugin-icon[data-v-48e2f2d1]{align-items:center;font-size:16px;display:flex}.summary-info[data-v-48e2f2d1]{flex-wrap:wrap;flex:1;align-items:center;gap:4px 6px;min-width:0;display:flex}.plugin-name[data-v-48e2f2d1]{color:#1f2329;font-size:13px;font-weight:600;line-height:1.2}.version-tag[data-v-48e2f2d1]{color:#86909c;background-color:#f2f3f5;border-radius:3px;padding:0 4px;font-family:monospace;font-size:10px;line-height:1.4}.plugin-desc[data-v-48e2f2d1]{color:#86909c;white-space:nowrap;text-overflow:ellipsis;width:100%;margin:0;font-size:11px;overflow:hidden}.runtime-tag[data-v-48e2f2d1]{margin-right:0;font-size:10px}.switch-wrapper[data-v-48e2f2d1]{align-items:center;display:flex}.plugin-details[data-v-48e2f2d1]{border-top:1px solid #e5e6eb;margin-top:8px;padding-top:8px}.plugin-meta-bar[data-v-48e2f2d1]{align-items:center;gap:6px;margin-bottom:6px;display:flex}.open-plugin-btn[data-v-48e2f2d1]{margin-left:auto;padding:0;font-size:11px}.runtime-snapshot-row[data-v-48e2f2d1]{background:#f7f8fa;border:1px solid #e5e6eb;border-radius:4px;flex:1;align-items:center;gap:6px;padding:4px 8px;font-size:11px;display:flex}.snapshot-tag[data-v-48e2f2d1]{color:#4e5969;background:#fff;border:1px solid #e5e6eb;border-radius:3px;padding:0 4px;font-size:10px;font-weight:600}.snapshot-desc[data-v-48e2f2d1]{color:#4e5969;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.section-divider[data-v-48e2f2d1]{color:#86909c;text-transform:uppercase;letter-spacing:.3px;align-items:center;margin:8px 0 6px;font-size:11px;font-weight:600;display:flex}.section-divider[data-v-48e2f2d1]:after{content:\"\";background-color:#e5e6eb;flex:1;height:1px;margin-left:6px}.match-context-card[data-v-48e2f2d1]{background:#fafafa;border:1px solid #e5e6eb;border-radius:4px;margin-bottom:6px;padding:6px 8px}.context-row[data-v-48e2f2d1]{justify-content:space-between;align-items:center;font-size:11px;display:flex}.context-left[data-v-48e2f2d1]{align-items:center;gap:6px;display:flex}.context-left strong[data-v-48e2f2d1]{color:#1f2329}.context-hint[data-v-48e2f2d1]{color:#86909c;font-size:10px}.context-right-status[data-v-48e2f2d1]{align-items:center;gap:5px;max-width:220px;display:flex}.reason-text[data-v-48e2f2d1]{color:#4e5969;white-space:nowrap;text-overflow:ellipsis;font-size:11px;overflow:hidden}.context-disabled-tip[data-v-48e2f2d1]{color:#86909c;font-size:10px;font-style:italic}.context-editor-wrap[data-v-48e2f2d1]{border-top:1px dashed #e5e6eb;margin-top:6px;padding-top:6px}.drawer-footer-content[data-v-48e2f2d1]{justify-content:space-between;align-items:center;width:100%;display:flex}.status-indicator[data-v-48e2f2d1]{align-items:center;gap:6px;font-size:11px;display:flex}.pending-text[data-v-48e2f2d1]{color:#d97706}.saved-text[data-v-48e2f2d1]{color:#86909c}.footer-actions[data-v-48e2f2d1]{gap:6px;display:flex}.btn-action[data-v-48e2f2d1]{border-radius:4px;font-size:11px}.jx-fab-container[data-v-16984016]{--fab-size:36px;--fab-radius-dock-right:50% 0 0 50%;--fab-radius-dock-left:0 50% 50% 0;--fab-radius-dragging:50%;z-index:var(--jx-floating-z-index,2147480000);width:var(--fab-size);height:var(--fab-size);cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none;position:fixed}.jx-fab-container.is-dragging[data-v-16984016]{cursor:grabbing}.jx-fab-backdrop[data-v-16984016]{-webkit-backdrop-filter:blur(14px);background:#ffffffa6;transition:border-radius .3s cubic-bezier(.16,1,.3,1),background .2s;position:absolute;inset:0;overflow:hidden;box-shadow:0 2px 16px #0000001f}.jx-fab-container.side-right:not(.is-dragging) .jx-fab-backdrop[data-v-16984016]{border-radius:var(--fab-radius-dock-right)}.jx-fab-container.side-left:not(.is-dragging) .jx-fab-backdrop[data-v-16984016]{border-radius:var(--fab-radius-dock-left)}.jx-fab-container.is-dragging .jx-fab-backdrop[data-v-16984016],.jx-fab-container:hover:not(.is-dragging) .jx-fab-backdrop[data-v-16984016]{border-radius:var(--fab-radius-dragging);background:#ffffffd9}.jx-fab-content[data-v-16984016]{color:#111;pointer-events:none;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%;display:flex}.jx-fab-icon[data-v-16984016]{width:12px;height:12px}.jx-fab-text[data-v-16984016]{letter-spacing:-.5px;font-size:10px;font-weight:800}.jx-recall-list[data-v-16984016]{z-index:var(--jx-floating-list-z-index,2147480000);opacity:0;visibility:hidden;-webkit-backdrop-filter:blur(16px);border-radius:12px;flex-direction:column;justify-content:center;align-items:center;gap:4px;width:36px;max-height:calc(100vh - 16px);transition:opacity .2s cubic-bezier(.16,1,.3,1),visibility .2s cubic-bezier(.16,1,.3,1),transform .2s cubic-bezier(.16,1,.3,1);display:flex;position:fixed;overflow:auto;transform:scale(.95);box-shadow:0 10px 30px -5px #0000001a,0 4px 12px -2px #0000000d}.jx-recall-list[data-v-16984016]::-webkit-scrollbar{width:4px}.jx-recall-list[data-v-16984016]::-webkit-scrollbar-thumb{background:#00000026;border-radius:4px}.jx-fab-container:hover~.jx-recall-list[data-v-16984016],.jx-recall-list[data-v-16984016]:hover{opacity:1;visibility:visible;transform:scale(1)}.jx-recall-item[data-v-16984016]{color:#262626;cursor:pointer;width:36px;height:36px;font:inherit;background:0 0;border:1px solid #0000;border-radius:10px;justify-content:center;align-items:center;padding:0;transition:all .2s cubic-bezier(.16,1,.3,1);display:flex;position:relative}.jx-recall-icon[data-v-16984016]{justify-content:center;align-items:center;font-size:16px;line-height:1;transition:transform .2s;display:flex}.jx-recall-item[data-v-16984016]:hover:not(:disabled){background:#ffffffe6;border-color:#0000000f;transform:translateY(-1px);box-shadow:0 4px 12px #00000014}.jx-recall-item:hover:not(:disabled) .jx-recall-icon[data-v-16984016]{transform:scale(1.1)}.jx-recall-item[data-v-16984016]:active:not(:disabled){transform:translateY(0)scale(.96)}.jx-recall-item[data-v-16984016]:disabled{opacity:.4;cursor:not-allowed}@media (prefers-color-scheme:dark){.jx-recall-list[data-v-16984016]{background:#1e1e1ecc;border:1px solid #ffffff14;box-shadow:0 10px 30px -5px #0006}.jx-recall-list[data-v-16984016]::-webkit-scrollbar-thumb{background:#fff3}.jx-recall-item[data-v-16984016]{color:#f3f4f6}.jx-recall-item[data-v-16984016]:hover:not(:disabled){background:#ffffff1a;border-color:#ffffff14}.jx-fab-backdrop[data-v-16984016]{background:#1a1a1aa6}.jx-fab-container.is-dragging .jx-fab-backdrop[data-v-16984016],.jx-fab-container:hover:not(.is-dragging) .jx-fab-backdrop[data-v-16984016]{background:#262626d9}.jx-fab-content[data-v-16984016]{color:#f3f4f6}}.example-plugin p[data-v-2f64fac3],.example-plugin p[data-v-2461ab84]{color:#555;margin:0 0 14px}.split-layout[data-v-1446c496]{gap:16px;width:100%;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;display:flex;line-height:1.25!important}.col[data-v-1446c496]{box-sizing:border-box;background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;flex-direction:column;flex:1;gap:12px;min-width:0;padding:12px;display:flex}.col-header[data-v-1446c496]{color:#374151;border-bottom:1px solid #e5e7eb;justify-content:space-between;align-items:center;padding-bottom:8px;font-size:13px;font-weight:700;display:flex}.col-header img[data-v-1446c496]{vertical-align:middle;margin-right:6px}.control-box[data-v-1446c496]{background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:10px}.split-control[data-v-1446c496]{gap:12px;display:flex}.split-left[data-v-1446c496]{flex-direction:column;flex:1;justify-content:space-between;display:flex}.split-right[data-v-1446c496]{border-left:1px dashed #e5e7eb;flex-direction:column;flex:.9;padding-left:12px;display:flex}.current-consent-title[data-v-1446c496]{color:#6b7280;margin-bottom:6px;font-size:11px;font-weight:700}.current-consent-item[data-v-1446c496]{border-bottom:1px dashed #eee;justify-content:space-between;align-items:center;margin-bottom:2px;padding-bottom:2px;font-size:11px;display:flex}.chk-grid[data-v-1446c496]{grid-template-columns:repeat(2,1fr);gap:6px;margin-bottom:10px;display:grid}.chk-grid label[data-v-1446c496]{color:#4b5563;cursor:pointer;align-items:center;gap:4px;font-size:12px;font-weight:500;display:flex}.chk-grid input[data-v-1446c496]{accent-color:#000;cursor:pointer;width:12px;height:12px;margin:0}.action-row[data-v-1446c496]{gap:8px;display:flex}.global-stats[data-v-1446c496]{color:#4b5563;background:#fff;border:1px solid #e5e7eb;border-radius:8px;gap:12px;padding:8px 10px;font-size:12px;font-weight:600;display:flex}.table-wrapper[data-v-1446c496]{background:#fff;border:1px solid #e5e7eb;border-radius:6px;max-height:350px;overflow-y:auto}.table-wrapper[data-v-1446c496]::-webkit-scrollbar{width:4px}.table-wrapper[data-v-1446c496]::-webkit-scrollbar-thumb{background:#ccc;border-radius:2px}table[data-v-1446c496]{border-collapse:collapse;table-layout:fixed;width:100%}thead[data-v-1446c496]{z-index:2;background:#f3f4f6;position:sticky;top:0;box-shadow:0 1px #e5e7eb}th[data-v-1446c496]{text-align:left;color:#666;padding:6px 8px;font-size:11px;font-weight:600}td[data-v-1446c496]{vertical-align:top;word-break:break-all;border-top:1px solid #f3f4f6;padding:8px;font-size:12px}.inline-flex-box[data-v-1446c496]{align-items:center;display:inline-flex}.inline-flex-box-column[data-v-1446c496]{flex-direction:column;align-items:flex-start;display:inline-flex}.btn[data-v-1446c496]{cursor:pointer;color:#333;background:#fff;border:1px solid #d2d5d8;border-radius:6px;padding:6px 12px;font-size:12px;font-weight:600;transition:all .2s}.btn[data-v-1446c496]:hover{background:#f8f9fa;border-color:#b0b4b8}.btn[data-v-1446c496]:disabled{opacity:.5;cursor:not-allowed}.sm-btn[data-v-1446c496]{margin-left:4px;padding:2px 6px;font-size:11px}.btn-primary[data-v-1446c496]{color:#fff;background:#000;border:none}.btn-primary[data-v-1446c496]:hover{background:#333}.btn-google[data-v-1446c496]{color:#fff;background:linear-gradient(135deg,#1a73e8,#7c3aed);border:none}.btn-google[data-v-1446c496]:hover{background:linear-gradient(135deg,#1557b0,#6d28d9)}.badge[data-v-1446c496]{text-transform:uppercase;border-radius:4px;padding:3px 5px;font-size:10px;font-weight:700;line-height:1;display:inline-block}.b-true[data-v-1446c496]{color:#059669;background:#d1fae5;padding:2px 3px}.b-false[data-v-1446c496]{color:#dc2626;background:#fee2e2;padding:2px 3px}.b-neu[data-v-1446c496]{color:#4b5563;background:#f3f4f6}.b-purp[data-v-1446c496]{color:#6b21a8;background:#f3e8ff}.b-blue[data-v-1446c496]{color:#1e40af;background:#dbeafe}.timestamp[data-v-1446c496]{color:#5d5d5d;font-variant-numeric:tabular-nums;margin-top:4px;font-size:11px;font-weight:500}.mini-status[data-v-1446c496]{border-bottom:1px dashed #eee;justify-content:space-between;margin-bottom:2px;padding-bottom:2px;font-size:11px;display:flex}.diff-item[data-v-1446c496]{color:#374151;justify-content:space-between;margin-bottom:2px;font-size:11px;display:flex}details summary[data-v-1446c496]{cursor:pointer;color:#2563eb;outline:none;font-size:10px;font-weight:600}pre[data-v-1446c496]{color:#333;white-space:pre-wrap;background:#f4f6f8;border-radius:4px;max-height:100px;margin:4px 0 0;padding:6px;font-family:monospace;font-size:10px;overflow:auto}.jx-intercept-container[data-v-721985c9]{font-family:PingFang SC,Microsoft YaHei,sans-serif}.jx-modal-desc[data-v-721985c9]{color:#666;word-break:break-all;text-align:left;background:#f5f5f7;border-radius:8px;margin-top:8px;padding:12px;font-size:14px;line-height:1.6}.jx-modal-option[data-v-721985c9]{justify-content:flex-end;margin-top:12px;font-size:13px;display:flex}.dialog-title[data-v-c651460e]{cursor:move;-webkit-user-select:none;user-select:none;touch-action:none;justify-content:space-between;align-items:center;gap:10px;display:flex}.main-title[data-v-c651460e]{flex-shrink:0;align-items:center;gap:8px;display:flex}.custom-header[data-v-c651460e]{flex:1;min-width:0}.header-extra[data-v-c651460e]{align-items:center;gap:6px;display:flex}.plugin-icon[data-v-c651460e]{font-size:18px}.drawer-title[data-v-1f830925]{align-items:center;gap:10px;display:flex}.main-title[data-v-1f830925]{flex-shrink:0;align-items:center;gap:8px;display:flex}.custom-header[data-v-1f830925]{flex:1;min-width:0}.header-extra[data-v-1f830925]{align-items:center;gap:6px;display:flex}.plugin-icon[data-v-1f830925]{font-size:18px}.jx-assistant-root{color:#171717;font-family:Inter,system-ui,sans-serif}.jx-fab-container,.jx-recall-list{pointer-events:auto}\n/*$vite$:1*/ ");
	var __defProp = Object.defineProperty;
	var __exportAll = (all, no_symbols) => {
		let target = {};
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
		if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
		return target;
	};
	var style_default = ":host{all:initial!important;z-index:var(--jx-root-z-index,2147480000)!important;pointer-events:none!important;isolation:isolate!important;position:fixed!important;inset:0!important}:is(#jx-app-root,#jx-popup-root){all:initial;z-index:var(--jx-root-z-index,2147480000);isolation:isolate;pointer-events:none;color:#171717;font-synthesis:none;text-rendering:optimizelegibility;-webkit-font-smoothing:antialiased;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;font-size:14px;line-height:1.5;display:block;position:fixed;inset:0}:is(#jx-app-root,#jx-popup-root),:is(#jx-app-root,#jx-popup-root) *,:is(#jx-app-root,#jx-popup-root) :before,:is(#jx-app-root,#jx-popup-root) :after{box-sizing:border-box}:is(#jx-app-root,#jx-popup-root) .ant-message,:is(#jx-app-root,#jx-popup-root) .ant-tooltip{pointer-events:none}:is(#jx-app-root,#jx-popup-root) .ant-notification,:is(#jx-app-root,#jx-popup-root) .ant-popover,:is(#jx-app-root,#jx-popup-root) .ant-dropdown,:is(#jx-app-root,#jx-popup-root) .ant-select-dropdown,:is(#jx-app-root,#jx-popup-root) .ant-picker-dropdown,:is(#jx-app-root,#jx-popup-root) .ant-cascader-dropdown,:is(#jx-app-root,#jx-popup-root) .ant-tree-select-dropdown{pointer-events:auto}:is(#jx-app-root,#jx-popup-root) .ant-message,:is(#jx-app-root,#jx-popup-root) .ant-notification{z-index:var(--jx-overlay-z-index,2147480000)!important}:is(#jx-app-root,#jx-popup-root) :where(a,ul,dl,div,section,article,p,h1,h2,h3,h4,h5,h6):empty{display:revert}";
	var _GM_getValue = (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
	var _GM_registerMenuCommand = (() => typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
	var _GM_setValue = (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
	var _hoisted_1$12 = { class: "url-rule-editor" };
	var MatchContextEditor_vue_vue_type_script_setup_true_lang_default = (0, vue.defineComponent)({
		__name: "MatchContextEditor",
		props: { rules: {} },
		emits: ["update:rules"],
		setup(__props, { emit: __emit }) {
			const props = __props;
			const emit = __emit;
			function update(kind, text) {
				emit("update:rules", {
					...props.rules,
					[kind]: text.split(/\r\n|\n|\r/)
				});
			}
			return (_ctx, _cache) => {
				return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_1$12, [(0, vue.createElementVNode)("label", null, [_cache[2] || (_cache[2] = (0, vue.createElementVNode)("span", null, [(0, vue.createTextVNode)("Include "), (0, vue.createElementVNode)("small", { class: "tip-text" }, "（至少一行；`*` 匹配所有 URL，多条规则为任意命中）")], -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Input).TextArea, {
					value: (props.rules.include ?? []).join("\n"),
					"auto-size": {
						minRows: 3,
						maxRows: 8
					},
					placeholder: "*checkout*\nhttps://example.com/account/*",
					"onUpdate:value": _cache[0] || (_cache[0] = ($event) => update("include", $event)),
					class: "modern-textarea"
				}, null, 8, ["value"])]), (0, vue.createElementVNode)("label", null, [_cache[3] || (_cache[3] = (0, vue.createElementVNode)("span", null, [(0, vue.createTextVNode)("Exclude "), (0, vue.createElementVNode)("small", { class: "tip-text" }, "（任意一条命中都会阻止运行）")], -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Input).TextArea, {
					value: (props.rules.exclude ?? []).join("\n"),
					"auto-size": {
						minRows: 2,
						maxRows: 6
					},
					placeholder: "*payment*",
					"onUpdate:value": _cache[1] || (_cache[1] = ($event) => update("exclude", $event)),
					class: "modern-textarea"
				}, null, 8, ["value"])])]);
			};
		}
	});
	var _plugin_vue_export_helper_default = (sfc, props) => {
		const target = sfc.__vccOpts || sfc;
		for (const [key, val] of props) target[key] = val;
		return target;
	};
	var MatchContextEditor_default = _plugin_vue_export_helper_default(MatchContextEditor_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-ec03e8d3"]]);
	function isRecord(value) {
		return !!value && typeof value === "object" && !Array.isArray(value);
	}
	function cloneConfig(value) {
		if (Array.isArray(value)) return value.map(cloneConfig);
		if (isRecord(value)) return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, cloneConfig(item)]));
		return value;
	}
	function deepMerge(base, override) {
		if (Array.isArray(override)) return cloneConfig(override);
		if (override === void 0) return cloneConfig(base);
		if (!isRecord(base) || !isRecord(override)) return override;
		const result = Object.fromEntries(Object.entries(base).map(([key, value]) => [key, cloneConfig(value)]));
		for (const [key, value] of Object.entries(override)) result[key] = value === void 0 ? result[key] : isRecord(value) && isRecord(result[key]) ? deepMerge(result[key], value) : Array.isArray(value) ? cloneConfig(value) : value;
		return result;
	}
	function configOverrides(defaults, current) {
		if (Array.isArray(current)) return JSON.stringify(defaults) === JSON.stringify(current) ? void 0 : [...current];
		if (!isRecord(current)) return Object.is(defaults, current) ? void 0 : current;
		const baseline = isRecord(defaults) ? defaults : {};
		const changes = {};
		for (const [key, value] of Object.entries(current)) {
			const difference = configOverrides(baseline[key], value);
			if (difference !== void 0) changes[key] = difference;
		}
		return Object.keys(changes).length ? changes : void 0;
	}
	function mergePluginMatch(defaults, override) {
		if (!override?.contexts) return deepMerge(defaults, override);
		const contexts = {};
		for (const context of ["top", "iframe"]) {
			if (!(context in override.contexts)) continue;
			contexts[context] = deepMerge(defaults.contexts?.[context] ?? {}, override.contexts[context] ?? {});
		}
		return {
			...deepMerge(defaults, {}),
			contexts
		};
	}
	async function persistBeforeCommit(value, persist, commit) {
		await persist(value);
		commit(value);
	}
	async function afterSuccessfulSave(save, afterSave) {
		if (!await save()) return false;
		afterSave();
		return true;
	}
	var STYLE_FIELDS = [
		{
			key: "width",
			label: "宽度",
			group: "尺寸",
			defaultValue: "600px"
		},
		{
			key: "height",
			label: "高度",
			group: "尺寸",
			defaultValue: "480px"
		},
		{
			key: "minWidth",
			label: "最小宽度",
			group: "尺寸"
		},
		{
			key: "maxWidth",
			label: "最大宽度",
			group: "尺寸",
			defaultValue: "1200px"
		},
		{
			key: "minHeight",
			label: "最小高度",
			group: "尺寸"
		},
		{
			key: "maxHeight",
			label: "最大高度",
			group: "尺寸",
			defaultValue: "900px"
		},
		{
			key: "padding",
			label: "内边距",
			group: "间距"
		},
		{
			key: "margin",
			label: "外边距",
			group: "间距"
		}
	];
	var DEFAULT_STYLE = Object.fromEntries(STYLE_FIELDS.filter((field) => field.defaultValue !== void 0).map(({ key, defaultValue }) => [key, defaultValue]));
	var layoutStyle = () => ({ ...DEFAULT_STYLE });
	var DEFAULT_PLUGIN_CONFIG = {
		isEnable: true,
		env: {},
		ui: {
			currentLayout: "dialog",
			title: "Plugin",
			icon: "🧩",
			rememberPosition: true,
			showInHost: true,
			layout: {
				dialog: {
					draggable: true,
					showModal: true,
					defaultCollapsed: false,
					style: layoutStyle()
				},
				drawer: {
					placement: "right",
					showModal: false,
					defaultCollapsed: false,
					style: layoutStyle()
				}
			}
		},
		business: {}
	};
	function resolvePluginConfig(manifest, user) {
		const defaults = deepMerge(DEFAULT_PLUGIN_CONFIG, manifest.config);
		return {
			...deepMerge(defaults, user),
			env: mergePluginMatch(defaults.env, user?.env)
		};
	}
	function resolveActivePluginUI(ui) {
		const currentLayout = ui.currentLayout;
		const options = currentLayout === "drawer" ? ui.layout.drawer : currentLayout === "dialog" ? ui.layout.dialog : void 0;
		const styleConfig = options?.style ?? {};
		const style = {};
		for (const field of STYLE_FIELDS) {
			const value = styleConfig[field.key];
			if (typeof value === "string" && value !== "") style[field.key] = value;
		}
		for (const [key, value] of Object.entries(styleConfig.custom ?? {})) if (value.trim()) style[key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)] = value;
		const numeric = (value, fallback) => value && /^\d+(?:\.\d+)?px$/.test(value) ? Number.parseFloat(value) : fallback;
		return {
			layout: currentLayout,
			title: ui.title,
			icon: ui.icon,
			style,
			width: numeric(styleConfig.width, currentLayout === "drawer" ? 400 : 600),
			height: numeric(styleConfig.height, 480),
			placement: currentLayout === "drawer" ? ui.layout.drawer?.placement ?? "right" : "right",
			draggable: currentLayout === "dialog" && ui.layout.dialog?.draggable !== false,
			defaultCollapsed: options?.defaultCollapsed ?? false,
			rememberPosition: ui.rememberPosition,
			showModal: options?.showModal ?? false
		};
	}
	function getShadowRoot(triggerNode) {
		const root = triggerNode?.getRootNode();
		if (root instanceof ShadowRoot) return root;
		return document.querySelector("#jx-work-assistant")?.shadowRoot ?? null;
	}
	function getPopupContainer(triggerNode) {
		const container = getShadowRoot(triggerNode)?.querySelector("#jx-popup-root") ?? document.querySelector("#jx-popup-root") ?? document.body;
		if (container) return container;
		throw new Error("JX Work Assistant popup root is not initialized");
	}
	var _hoisted_1$11 = { ref: "containerRef" };
	var _hoisted_2$9 = { class: "config-grid meta-grid" };
	var _hoisted_3$7 = { class: "wide" };
	var _hoisted_4$5 = { class: "config-grid behavior-grid base-options" };
	var _hoisted_5$3 = { class: "switch-row" };
	var _hoisted_6$3 = { class: "switch-row" };
	var _hoisted_7$3 = {
		key: 0,
		class: "config-grid behavior-grid"
	};
	var _hoisted_8$3 = { class: "switch-row" };
	var _hoisted_9$3 = { class: "switch-row" };
	var _hoisted_10$3 = { class: "wide" };
	var _hoisted_11$3 = {
		key: 1,
		class: "config-grid behavior-grid"
	};
	var _hoisted_12$3 = { class: "switch-row" };
	var _hoisted_13$3 = { class: "switch-row" };
	var _hoisted_14$2 = { class: "switch-row" };
	var _hoisted_15$2 = {
		key: 2,
		class: "style-groups"
	};
	var _hoisted_16$2 = { class: "config-grid" };
	var _hoisted_17$2 = ["title"];
	var _hoisted_18$2 = { class: "advanced-style" };
	var UiSettings_default = _plugin_vue_export_helper_default((0, vue.defineComponent)({
		__name: "UiSettings",
		props: {
			ui: {},
			availableLayouts: {}
		},
		emits: ["update"],
		setup(__props, { emit: __emit }) {
			const props = __props;
			const emit = __emit;
			function set(path, value) {
				emit("update", {
					path,
					value
				});
			}
			function renameCustom(oldKey, newKey) {
				const key = newKey.trim();
				if (!key || key === oldKey) return;
				const custom = { ...activeStyle.value.custom ?? {} };
				custom[key] = custom[oldKey] ?? "";
				delete custom[oldKey];
				emit("update", {
					path: `layout.${props.ui.currentLayout}.style.custom`,
					value: custom
				});
			}
			const activeLayout = (0, vue.computed)(() => props.ui.currentLayout === "dialog" || props.ui.currentLayout === "drawer" ? props.ui.layout[props.ui.currentLayout] : void 0);
			const activeStyle = (0, vue.computed)(() => activeLayout.value?.style ?? {});
			const stylePath = (key) => `layout.${props.ui.currentLayout}.style.${key}`;
			function removeCustom(key) {
				const custom = { ...activeStyle.value.custom ?? {} };
				delete custom[key];
				set(stylePath("custom"), custom);
			}
			return (_ctx, _cache) => {
				return (0, vue.openBlock)(), (0, vue.createElementBlock)("section", _hoisted_1$11, [
					_cache[27] || (_cache[27] = (0, vue.createElementVNode)("h3", { class: "section-title" }, "插件基础配置", -1)),
					(0, vue.createElementVNode)("div", _hoisted_2$9, [
						(0, vue.createElementVNode)("label", null, [_cache[12] || (_cache[12] = (0, vue.createElementVNode)("span", null, "窗口类型", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Select), {
							value: props.ui.currentLayout,
							options: props.availableLayouts,
							"get-popup-container": (0, vue.unref)(getPopupContainer),
							"onUpdate:value": _cache[0] || (_cache[0] = ($event) => set("currentLayout", $event))
						}, null, 8, [
							"value",
							"options",
							"get-popup-container"
						])]),
						(0, vue.createElementVNode)("label", null, [_cache[13] || (_cache[13] = (0, vue.createElementVNode)("span", null, "图标", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Input), {
							value: props.ui.icon,
							"onUpdate:value": _cache[1] || (_cache[1] = ($event) => set("icon", $event))
						}, null, 8, ["value"])]),
						(0, vue.createElementVNode)("label", _hoisted_3$7, [_cache[14] || (_cache[14] = (0, vue.createElementVNode)("span", null, "标题", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Input), {
							value: props.ui.title,
							"onUpdate:value": _cache[2] || (_cache[2] = ($event) => set("title", $event))
						}, null, 8, ["value"])])
					]),
					(0, vue.createElementVNode)("div", _hoisted_4$5, [(0, vue.createElementVNode)("label", _hoisted_5$3, [_cache[15] || (_cache[15] = (0, vue.createElementVNode)("span", null, "记住位置", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Switch), {
						checked: props.ui.rememberPosition,
						size: "small",
						"onUpdate:checked": _cache[3] || (_cache[3] = ($event) => set("rememberPosition", $event))
					}, null, 8, ["checked"])]), (0, vue.createElementVNode)("label", _hoisted_6$3, [_cache[16] || (_cache[16] = (0, vue.createElementVNode)("span", null, "显示在控制中心", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Switch), {
						checked: props.ui.showInHost,
						size: "small",
						"onUpdate:checked": _cache[4] || (_cache[4] = ($event) => set("showInHost", $event))
					}, null, 8, ["checked"])])]),
					props.ui.currentLayout === "drawer" ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_7$3, [
						(0, vue.createElementVNode)("label", _hoisted_8$3, [_cache[17] || (_cache[17] = (0, vue.createElementVNode)("span", null, "默认收起", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Switch), {
							checked: props.ui.layout.drawer?.defaultCollapsed,
							size: "small",
							"onUpdate:checked": _cache[5] || (_cache[5] = ($event) => set("layout.drawer.defaultCollapsed", $event))
						}, null, 8, ["checked"])]),
						(0, vue.createElementVNode)("label", _hoisted_9$3, [_cache[18] || (_cache[18] = (0, vue.createElementVNode)("span", null, "显示背景遮罩", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Switch), {
							checked: props.ui.layout.drawer?.showModal,
							size: "small",
							"onUpdate:checked": _cache[6] || (_cache[6] = ($event) => set("layout.drawer.showModal", $event))
						}, null, 8, ["checked"])]),
						(0, vue.createElementVNode)("label", _hoisted_10$3, [_cache[19] || (_cache[19] = (0, vue.createElementVNode)("span", null, "展开方向", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Select), {
							value: props.ui.layout.drawer?.placement,
							options: [{
								label: "右侧",
								value: "right"
							}, {
								label: "左侧",
								value: "left"
							}],
							"get-popup-container": (0, vue.unref)(getPopupContainer),
							"onUpdate:value": _cache[7] || (_cache[7] = ($event) => set("layout.drawer.placement", $event))
						}, null, 8, ["value", "get-popup-container"])])
					])) : props.ui.currentLayout === "dialog" ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_11$3, [
						(0, vue.createElementVNode)("label", _hoisted_12$3, [_cache[20] || (_cache[20] = (0, vue.createElementVNode)("span", null, "默认收起", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Switch), {
							checked: props.ui.layout.dialog?.defaultCollapsed,
							size: "small",
							"onUpdate:checked": _cache[8] || (_cache[8] = ($event) => set("layout.dialog.defaultCollapsed", $event))
						}, null, 8, ["checked"])]),
						(0, vue.createElementVNode)("label", _hoisted_13$3, [_cache[21] || (_cache[21] = (0, vue.createElementVNode)("span", null, "允许拖动窗口", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Switch), {
							checked: props.ui.layout.dialog?.draggable,
							size: "small",
							"onUpdate:checked": _cache[9] || (_cache[9] = ($event) => set("layout.dialog.draggable", $event))
						}, null, 8, ["checked"])]),
						(0, vue.createElementVNode)("label", _hoisted_14$2, [_cache[22] || (_cache[22] = (0, vue.createElementVNode)("span", null, "显示背景遮罩", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Switch), {
							checked: props.ui.layout.dialog?.showModal,
							size: "small",
							"onUpdate:checked": _cache[10] || (_cache[10] = ($event) => set("layout.dialog.showModal", $event))
						}, null, 8, ["checked"])])
					])) : (0, vue.createCommentVNode)("", true),
					props.ui.currentLayout !== "none" ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_15$2, [
						_cache[26] || (_cache[26] = (0, vue.createElementVNode)("h3", { class: "section-title style-title" }, "布局 Style", -1)),
						(0, vue.createElementVNode)("div", _hoisted_16$2, [((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)((0, vue.unref)(STYLE_FIELDS), (field) => {
							return (0, vue.openBlock)(), (0, vue.createElementBlock)("label", {
								key: field.key,
								title: field.group
							}, [(0, vue.createElementVNode)("span", null, (0, vue.toDisplayString)(field.label), 1), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Input), {
								value: activeStyle.value[field.key],
								placeholder: "CSS 值，如 80vw、auto、1rem",
								"onUpdate:value": ($event) => set(stylePath(String(field.key)), $event)
							}, null, 8, ["value", "onUpdate:value"])], 8, _hoisted_17$2);
						}), 128))]),
						(0, vue.createElementVNode)("details", _hoisted_18$2, [
							_cache[24] || (_cache[24] = (0, vue.createElementVNode)("summary", null, "高级自定义 CSS", -1)),
							_cache[25] || (_cache[25] = (0, vue.createElementVNode)("p", null, "仅作用于此插件窗口的根容器。属性名使用 CSS 写法，如 display、align-items。", -1)),
							((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(activeStyle.value.custom || {}, (value, key) => {
								return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", {
									key,
									class: "custom-row"
								}, [
									(0, vue.createVNode)((0, vue.unref)(ant_design_vue.Input), {
										value: key,
										placeholder: "属性名",
										onChange: ($event) => renameCustom(String(key), $event.target.value)
									}, null, 8, ["value", "onChange"]),
									(0, vue.createVNode)((0, vue.unref)(ant_design_vue.Input), {
										value,
										placeholder: "CSS 值",
										"onUpdate:value": ($event) => set(`${stylePath("custom")}.${key}`, $event)
									}, null, 8, ["value", "onUpdate:value"]),
									(0, vue.createVNode)((0, vue.unref)(ant_design_vue.Button), {
										danger: "",
										type: "link",
										onClick: ($event) => removeCustom(String(key))
									}, {
										default: (0, vue.withCtx)(() => [..._cache[23] || (_cache[23] = [(0, vue.createTextVNode)("删除", -1)])]),
										_: 1
									}, 8, ["onClick"])
								]);
							}), 128)),
							(0, vue.createElementVNode)("button", {
								type: "button",
								class: "add-custom",
								onClick: _cache[11] || (_cache[11] = ($event) => set(`${stylePath("custom")}.custom-${Date.now()}`, ""))
							}, "+ 添加属性")
						])
					])) : (0, vue.createCommentVNode)("", true)
				], 512);
			};
		}
	}), [["__scopeId", "data-v-ec09f86a"]]);
	var STORAGE_PREFIX = "jx-work-assistant";
	var STORAGE_KEYS = {
		settings: (version) => `${STORAGE_PREFIX}:settings:v${version}`,
		updateState: (version) => `${STORAGE_PREFIX}:state:update:v${version}`,
		windowState: (id, version) => `${STORAGE_PREFIX}:window:${id}:v${version}`
	};
	var SETTINGS_KEY = STORAGE_KEYS.settings(2);
	var UPDATE_STATE_KEY = STORAGE_KEYS.updateState(1);
	STORAGE_KEYS.settings(1);
	var updateBaseUrl = "https://xmg-001.github.io";
	var scriptFileName = "jx-vite-plugin-monkey.user.js";
	var versionFileName = "jx-vite-plugin-monkey.version.json";
	var UPDATE_CONFIG = {
		versionFileName,
		scriptFileName,
		remoteVersionUrl: `${updateBaseUrl.replace(/\/$/, "")}/${versionFileName}`,
		scriptUpdateUrl: `${updateBaseUrl.replace(/\/$/, "")}/${scriptFileName}`,
		autoCheck: true,
		checkIntervalMs: 216e5
	};
	var UI_LAYERS = {
		root: 2147483e3,
		plugin: 2147483100,
		activePlugin: 2147483200,
		floatingBall: 2147483300,
		floatingList: 2147483301,
		host: 2147483600,
		overlay: 2147483700
	};
	var NAME = "JX Work Assistant";
	var HOST_CONFIG = {
		id: "jx-work-assistant",
		name: NAME,
		version: "0.0.3",
		releaseNotes: "版本0.0.3：基础架构完善",
		zIndex: UI_LAYERS,
		ui: {
			title: NAME,
			icon: "🧩"
		}
	};
	var storage = {
		get(key, fallback) {
			return _GM_getValue(key, fallback);
		},
		async set(key, value) {
			await _GM_setValue(key, value);
		}
	};
	function getUpdateCheckState() {
		return storage.get(UPDATE_STATE_KEY, {}) ?? {};
	}
	async function saveUpdateCheckState(state) {
		await storage.set(UPDATE_STATE_KEY, state);
	}
	var _hoisted_1$10 = { class: "update-manager" };
	var _hoisted_2$8 = { class: "popover-panel" };
	var _hoisted_3$6 = { class: "panel-header" };
	var _hoisted_4$4 = { class: "panel-title" };
	var _hoisted_5$2 = {
		key: 0,
		class: "panel-empty"
	};
	var _hoisted_6$2 = { class: "version-tag" };
	var _hoisted_7$2 = {
		key: 1,
		class: "panel-body"
	};
	var _hoisted_8$2 = { class: "item-head" };
	var _hoisted_9$2 = { class: "name" };
	var _hoisted_10$2 = { class: "ver-change" };
	var _hoisted_11$2 = { class: "notes" };
	var _hoisted_12$2 = ["href"];
	var _hoisted_13$2 = { class: "trigger-text" };
	var UpdateManager_default = _plugin_vue_export_helper_default((0, vue.defineComponent)({
		__name: "UpdateManager",
		props: { modules: {} },
		setup(__props) {
			const state = (0, vue.ref)(getUpdateCheckState());
			const checking = (0, vue.ref)(false);
			const updates = (0, vue.computed)(() => state.value.updates ?? []);
			function compareVersions(a, b) {
				const left = a.split(/[.+-]/).map((part) => Number(part) || 0);
				const right = b.split(/[.+-]/).map((part) => Number(part) || 0);
				for (let i = 0; i < Math.max(left.length, right.length); i++) {
					const difference = (left[i] ?? 0) - (right[i] ?? 0);
					if (difference) return difference;
				}
				return 0;
			}
			async function check(force = false) {
				if (checking.value) return;
				if (!force && state.value.checkedAt && Date.now() - state.value.checkedAt < UPDATE_CONFIG.checkIntervalMs) return;
				checking.value = true;
				try {
					const response = await fetch(UPDATE_CONFIG.remoteVersionUrl, { cache: "no-store" });
					if (!response.ok) throw new Error(`HTTP ${response.status}`);
					const data = await response.json();
					if (!Array.isArray(data.modules)) throw new Error("版本文件格式无效");
					const local = new Map([[HOST_CONFIG.id, {
						name: HOST_CONFIG.name,
						version: HOST_CONFIG.version
					}]]);
					for (const item of props.modules) local.set(item.id, item);
					const found = data.modules.flatMap((remote) => {
						const current = local.get(remote.id);
						return current && compareVersions(remote.version, current.version) > 0 ? [{
							id: remote.id,
							name: current.name,
							currentVersion: current.version,
							latestVersion: remote.version,
							releaseNotes: remote.releaseNotes || "性能优化与细节改进"
						}] : [];
					});
					state.value = {
						checkedAt: Date.now(),
						updates: found
					};
					await saveUpdateCheckState(state.value);
					if (force) ant_design_vue.message.success(found.length ? `发现 ${found.length} 个可用更新` : "已是最新版本");
				} catch (error) {
					console.warn("[JX Work Assistant] update check failed", error);
					if (force) ant_design_vue.message.warning("检查更新失败，请稍后重试");
				} finally {
					checking.value = false;
				}
			}
			const props = __props;
			(0, vue.onMounted)(() => {
				if (UPDATE_CONFIG.autoCheck) check();
			});
			return (_ctx, _cache) => {
				return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_1$10, [(0, vue.createVNode)((0, vue.unref)(ant_design_vue.Popover), {
					placement: "bottomRight",
					trigger: "click",
					"overlay-class-name": "monochrome-popover"
				}, {
					content: (0, vue.withCtx)(() => [(0, vue.createElementVNode)("div", _hoisted_2$8, [(0, vue.createElementVNode)("div", _hoisted_3$6, [(0, vue.createElementVNode)("span", _hoisted_4$4, (0, vue.toDisplayString)(updates.value.length ? `发现 ${updates.value.length} 个新版本` : "版本信息"), 1), (0, vue.createElementVNode)("button", {
						class: (0, vue.normalizeClass)(["icon-refresh", { spinning: checking.value }]),
						title: "检查更新",
						onClick: _cache[0] || (_cache[0] = ($event) => check(true))
					}, " ↻ ", 2)]), !updates.value.length ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_5$2, [_cache[1] || (_cache[1] = (0, vue.createElementVNode)("p", { class: "status-text" }, "已是最新状态", -1)), (0, vue.createElementVNode)("span", _hoisted_6$2, (0, vue.toDisplayString)((0, vue.unref)(HOST_CONFIG).version), 1)])) : ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_7$2, [((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(updates.value, (item) => {
						return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", {
							key: item.id,
							class: "update-item"
						}, [(0, vue.createElementVNode)("div", _hoisted_8$2, [(0, vue.createElementVNode)("span", _hoisted_9$2, (0, vue.toDisplayString)(item.name), 1), (0, vue.createElementVNode)("span", _hoisted_10$2, (0, vue.toDisplayString)(item.currentVersion) + " → " + (0, vue.toDisplayString)(item.latestVersion), 1)]), (0, vue.createElementVNode)("p", _hoisted_11$2, (0, vue.toDisplayString)(item.releaseNotes), 1)]);
					}), 128)), (0, vue.createElementVNode)("a", {
						class: "update-btn",
						href: (0, vue.unref)(UPDATE_CONFIG).scriptUpdateUrl,
						target: "_blank",
						rel: "noreferrer"
					}, " 立即更新 ↗ ", 8, _hoisted_12$2)]))])]),
					default: (0, vue.withCtx)(() => [(0, vue.createElementVNode)("div", { class: (0, vue.normalizeClass)(["trigger-entry", { "has-update": updates.value.length }]) }, [_cache[2] || (_cache[2] = (0, vue.createElementVNode)("span", { class: "status-dot" }, null, -1)), (0, vue.createElementVNode)("span", _hoisted_13$2, (0, vue.toDisplayString)(updates.value.length ? "发现新版本" : `${(0, vue.unref)(HOST_CONFIG).version}`), 1)], 2)]),
					_: 1
				})]);
			};
		}
	}), [["__scopeId", "data-v-cbb4ed5d"]]);
	var _hoisted_1$9 = {
		class: "plugin-icon",
		"aria-hidden": "true"
	};
	var _hoisted_2$7 = ["src"];
	var PluginIcon_default = _plugin_vue_export_helper_default((0, vue.defineComponent)({
		__name: "PluginIcon",
		props: {
			config: {},
			icon: {},
			title: {}
		},
		setup(__props) {
			const props = __props;
			const iconValue = (0, vue.computed)(() => props.icon ?? props.config?.icon ?? "");
			const titleValue = (0, vue.computed)(() => props.title ?? props.config?.title ?? "");
			const imageUrl = (0, vue.computed)(() => /^(https?:)?\/\//i.test(iconValue.value.trim()) ? iconValue.value.trim() : "");
			const character = (0, vue.computed)(() => iconValue.value.trim() || Array.from(titleValue.value.trim())[0] || "◇");
			return (_ctx, _cache) => {
				return (0, vue.openBlock)(), (0, vue.createElementBlock)("span", _hoisted_1$9, [imageUrl.value ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("img", {
					key: 0,
					src: imageUrl.value,
					alt: ""
				}, null, 8, _hoisted_2$7)) : ((0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, { key: 1 }, [(0, vue.createTextVNode)((0, vue.toDisplayString)(character.value), 1)], 64))]);
			};
		}
	}), [["__scopeId", "data-v-807a1c8c"]]);
	function getEnvironment() {
		return {
			type: window.top === window.self ? "top" : "iframe",
			href: window.location.href
		};
	}
	function wildcardRegex(pattern) {
		const value = pattern.trim();
		if (!value) return void 0;
		const escaped = value.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*");
		try {
			return new RegExp(`^${escaped}$`);
		} catch {
			return;
		}
	}
	function matchesWildcard(value, pattern) {
		const regex = wildcardRegex(pattern);
		return regex ? regex.test(value) : false;
	}
	function containsAny(value, patterns) {
		return (patterns ?? []).some((pattern) => pattern.trim().length > 0 && matchesWildcard(value, pattern));
	}
	function validRules(value) {
		if (!isRecord(value)) return false;
		return ["include", "exclude"].every((key) => value[key] === void 0 || Array.isArray(value[key]) && value[key].every((item) => typeof item === "string"));
	}
	function evaluateMatch(config, page) {
		const rawContexts = config?.contexts;
		if (rawContexts !== void 0 && !isRecord(rawContexts)) return {
			matched: false,
			reason: ["contexts 配置无效"]
		};
		const contexts = rawContexts;
		const rawRules = contexts === void 0 ? page.type === "top" ? { include: ["*"] } : void 0 : contexts[page.type];
		if (rawRules === void 0 || !isRecord(rawRules)) return {
			matched: false,
			reason: [`未配置 ${page.type === "top" ? "Top Window" : "iframe"} 运行规则`]
		};
		if (!validRules(rawRules)) return {
			matched: false,
			reason: ["URL 规则格式无效"]
		};
		const rules = rawRules;
		if (containsAny(page.href, rules.exclude)) return {
			matched: false,
			reason: ["URL 命中排除规则"]
		};
		const include = (rules.include ?? []).filter((pattern) => pattern.trim().length > 0);
		if (!include.length) return {
			matched: false,
			reason: ["URL Include 规则为空"]
		};
		if (!containsAny(page.href, include)) return {
			matched: false,
			reason: ["URL 未命中 Include 规则"]
		};
		return {
			matched: true,
			reason: []
		};
	}
	var EMPTY_SETTINGS = { plugins: {} };
	var settingsMigrationBlocked = false;
	function loadSettings() {
		const current = storage.get(SETTINGS_KEY);
		if (isRecord(current) && isRecord(current.plugins) && !("version" in current)) return current;
		settingsMigrationBlocked = current !== void 0;
		return EMPTY_SETTINGS;
	}
	var settings = (0, vue.reactive)(loadSettings());
	function getUserConfig(id) {
		return settings.plugins[id];
	}
	function getPluginConfig(manifest) {
		return resolvePluginConfig(manifest, getUserConfig(manifest.id));
	}
	function getActivePluginUI(manifest) {
		return resolveActivePluginUI(getPluginConfig(manifest).ui);
	}
	function saveSettings(next) {
		if (settingsMigrationBlocked) return Promise.reject(new Error("现有配置版本无法识别，已保留原始数据；请先升级到兼容版本后再保存。"));
		return persistBeforeCommit(JSON.parse(JSON.stringify(next)), (value) => storage.set(SETTINGS_KEY, value), (value) => {
			Object.assign(settings, value);
		});
	}
	function getWindowState(id) {
		const key = STORAGE_KEYS.windowState(id, 2);
		const current = storage.get(key);
		return isRecord(current) ? current : {};
	}
	async function setWindowState(id, state) {
		await storage.set(STORAGE_KEYS.windowState(id, 2), state);
	}
	function settingsSnapshot() {
		return JSON.parse(JSON.stringify(settings));
	}
	function clone(value) {
		return JSON.parse(JSON.stringify(value));
	}
	function usePluginSettings(getEntries) {
		const draft = (0, vue.ref)(settingsSnapshot());
		const matchDraft = (0, vue.ref)({});
		const expanded = (0, vue.ref)({});
		const showHiddenPlugins = (0, vue.ref)(false);
		const savedSnapshot = (0, vue.ref)("");
		const contexts = ["top", "iframe"];
		const environment = getEnvironment();
		const pluginConfig = (entry) => getPluginConfig(entry.manifest);
		const draftUi = (entry) => draft.value.plugins[entry.manifest.id]?.ui;
		function availableLayouts(entry) {
			return [{
				value: "none",
				label: "无"
			}, ...Object.keys(entry.manifest.config.ui?.layout ?? {}).map((value) => ({
				value,
				label: value[0].toUpperCase() + value.slice(1)
			}))];
		}
		function stateString() {
			return JSON.stringify({
				draft: draft.value,
				matchDraft: matchDraft.value
			});
		}
		const hasPendingChanges = (0, vue.computed)(() => stateString() !== savedSnapshot.value);
		const hiddenPluginCount = (0, vue.computed)(() => getEntries().filter((entry) => (draft.value.plugins[entry.manifest.id]?.ui?.showInHost ?? pluginConfig(entry).ui.showInHost) === false).length);
		function emptyRules() {
			return {
				include: [],
				exclude: []
			};
		}
		function resetDraft() {
			const next = settingsSnapshot();
			const nextMatches = {};
			for (const entry of getEntries()) {
				const id = entry.manifest.id;
				const old = next.plugins[id];
				const effective = getPluginConfig(entry.manifest);
				next.plugins[id] = {
					isEnable: old?.isEnable ?? effective.isEnable,
					ui: clone(effective.ui),
					env: clone(effective.env),
					business: clone(effective.business)
				};
				const configuredContexts = effective.env.contexts;
				const toContext = (context) => ({
					enabled: configuredContexts === void 0 ? context === "top" : configuredContexts[context] != null,
					rules: configuredContexts === void 0 && context === "top" ? {
						include: ["*"],
						exclude: []
					} : {
						...emptyRules(),
						...configuredContexts?.[context] ? clone(configuredContexts[context]) : {}
					}
				});
				nextMatches[id] = {
					top: toContext("top"),
					iframe: toContext("iframe")
				};
			}
			draft.value = next;
			matchDraft.value = nextMatches;
			expanded.value = {};
			showHiddenPlugins.value = false;
			savedSnapshot.value = stateString();
		}
		function setContextRules(id, context, rules) {
			matchDraft.value[id][context].rules = rules;
		}
		function makeMatch(id) {
			const editor = matchDraft.value[id];
			const result = {};
			for (const context of ["top", "iframe"]) {
				const source = editor[context];
				if (!source.enabled) continue;
				result[context] = {
					include: (source.rules.include ?? []).map((item) => item.trim()).filter(Boolean),
					exclude: (source.rules.exclude ?? []).map((item) => item.trim()).filter(Boolean)
				};
			}
			return { contexts: result };
		}
		function rulePreview(id, context) {
			return evaluateMatch(makeMatch(id), {
				type: context,
				href: getEnvironment().href
			});
		}
		function updateUi(id, path, value) {
			const ui = draft.value.plugins[id]?.ui;
			if (!ui) return;
			const keys = path.split(".");
			let target = ui;
			for (const key of keys.slice(0, -1)) {
				const child = target[key];
				if (!child || typeof child !== "object" || Array.isArray(child)) target[key] = {};
				target = target[key];
			}
			target[keys[keys.length - 1]] = value;
		}
		async function saveDraft() {
			const next = settingsSnapshot();
			for (const entry of getEntries()) {
				const id = entry.manifest.id;
				const user = clone(draft.value.plugins[id]);
				user.ui = user.ui;
				const matchDefaults = entry.manifest.config.env ?? {};
				const desiredMatch = makeMatch(id);
				const storedUser = {
					isEnable: user.isEnable,
					...user.business ? { business: user.business } : {}
				};
				const uiDefaults = resolvePluginConfig(entry.manifest).ui;
				const uiOverrides = configOverrides(uiDefaults, user.ui);
				const matchOverrides = JSON.stringify(matchDefaults) === JSON.stringify(desiredMatch) ? void 0 : desiredMatch;
				if (uiOverrides) storedUser.ui = uiOverrides;
				if (matchOverrides) storedUser.env = matchOverrides;
				next.plugins[id] = storedUser;
			}
			const savedState = stateString();
			await saveSettings(next);
			savedSnapshot.value = savedState;
		}
		return {
			draft,
			matchDraft,
			expanded,
			showHiddenPlugins,
			contexts,
			environment,
			pluginConfig,
			draftUi,
			availableLayouts,
			hasPendingChanges,
			hiddenPluginCount,
			resetDraft,
			setContextRules,
			rulePreview,
			updateUi,
			saveDraft
		};
	}
	var _hoisted_1$8 = { class: "drawer-header" };
	var _hoisted_2$6 = { class: "drawer-title-group" };
	var _hoisted_3$5 = { class: "main-title" };
	var _hoisted_4$3 = {
		key: 0,
		class: "status-badge warning"
	};
	var _hoisted_5$1 = { class: "list-summary-bar" };
	var _hoisted_6$1 = { class: "count-text" };
	var _hoisted_7$1 = { class: "plugin-list" };
	var _hoisted_8$1 = ["onClick"];
	var _hoisted_9$1 = ["aria-expanded", "aria-label"];
	var _hoisted_10$1 = { class: "summary-info" };
	var _hoisted_11$1 = { class: "plugin-name" };
	var _hoisted_12$1 = { class: "version-tag" };
	var _hoisted_13$1 = { class: "plugin-desc" };
	var _hoisted_14$1 = {
		key: 0,
		class: "plugin-details"
	};
	var _hoisted_15$1 = { class: "plugin-meta-bar" };
	var _hoisted_16$1 = { class: "runtime-snapshot-row" };
	var _hoisted_17$1 = { class: "snapshot-tag" };
	var _hoisted_18$1 = { class: "snapshot-desc" };
	var _hoisted_19$1 = { class: "context-row" };
	var _hoisted_20$1 = { class: "context-left" };
	var _hoisted_21$1 = { class: "context-hint" };
	var _hoisted_22$1 = {
		key: 0,
		class: "context-right-status"
	};
	var _hoisted_23$1 = { class: "reason-text" };
	var _hoisted_24$1 = {
		key: 1,
		class: "context-disabled-tip"
	};
	var _hoisted_25$1 = {
		key: 0,
		class: "context-editor-wrap"
	};
	var _hoisted_26$1 = { class: "drawer-footer-content" };
	var _hoisted_27$1 = { class: "status-indicator" };
	var _hoisted_28$1 = { class: "footer-actions" };
	var host_default = _plugin_vue_export_helper_default((0, vue.defineComponent)({
		__name: "index",
		props: {
			open: { type: Boolean },
			entries: {}
		},
		emits: ["update:open", "open-plugin"],
		setup(__props, { emit: __emit }) {
			const props = __props;
			const emit = __emit;
			const { draft, matchDraft, expanded, showHiddenPlugins, contexts, environment, pluginConfig, draftUi, availableLayouts, hasPendingChanges, hiddenPluginCount, resetDraft, setContextRules, rulePreview, updateUi, saveDraft } = usePluginSettings(() => props.entries);
			(0, vue.watch)(() => props.open, (open) => {
				if (open) resetDraft();
			});
			function close() {
				if (hasPendingChanges.value && !window.confirm("配置尚未保存，确定关闭并丢弃修改吗？")) return;
				emit("update:open", false);
			}
			async function save() {
				try {
					await saveDraft();
					ant_design_vue.message.success("配置已保存，刷新页面后生效。");
					return true;
				} catch (error) {
					console.error("[JX Work Assistant] settings save failed", error);
					ant_design_vue.message.error(`配置保存失败：${error instanceof Error ? error.message : "请检查存储权限后重试。"}`);
					return false;
				}
			}
			async function saveAndRefresh() {
				await afterSuccessfulSave(save, () => window.location.reload());
			}
			function openPlugin(id) {
				if (!hasPendingChanges.value) emit("open-plugin", id);
				else ant_design_vue.message.info("请先保存或关闭待保存修改，再打开插件。");
			}
			return (_ctx, _cache) => {
				return (0, vue.openBlock)(), (0, vue.createBlock)((0, vue.unref)(ant_design_vue.Drawer), {
					open: props.open,
					"get-container": (0, vue.unref)(getPopupContainer),
					placement: "right",
					width: 520,
					closable: false,
					class: "modern-host-drawer",
					"z-index": (0, vue.unref)(UI_LAYERS).host,
					mask: true,
					"mask-closable": true,
					onClose: close
				}, {
					title: (0, vue.withCtx)(() => [(0, vue.createElementVNode)("div", _hoisted_1$8, [(0, vue.createElementVNode)("div", _hoisted_2$6, [
						(0, vue.createVNode)(PluginIcon_default, { config: { icon: (0, vue.unref)(HOST_CONFIG).ui?.icon } }, null, 8, ["config"]),
						(0, vue.createElementVNode)("span", _hoisted_3$5, (0, vue.toDisplayString)((0, vue.unref)(HOST_CONFIG).ui?.title || (0, vue.unref)(HOST_CONFIG).name), 1),
						(0, vue.createVNode)(UpdateManager_default, { modules: __props.entries.map(({ manifest }) => ({
							id: manifest.id,
							name: manifest.name,
							version: manifest.version || "0.0.0"
						})) }, null, 8, ["modules"]),
						(0, vue.unref)(hasPendingChanges) ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("span", _hoisted_4$3, "待保存")) : (0, vue.createCommentVNode)("", true)
					]), (0, vue.createElementVNode)("button", {
						class: "icon-btn-close",
						"aria-label": "关闭控制中心",
						onClick: close
					}, [..._cache[2] || (_cache[2] = [(0, vue.createElementVNode)("svg", {
						viewBox: "0 0 24 24",
						width: "16",
						height: "16",
						stroke: "currentColor",
						"stroke-width": "2",
						fill: "none"
					}, [(0, vue.createElementVNode)("path", { d: "M18 6L6 18M6 6l12 12" })], -1)])])])]),
					footer: (0, vue.withCtx)(() => [(0, vue.createElementVNode)("div", _hoisted_26$1, [(0, vue.createElementVNode)("div", _hoisted_27$1, [(0, vue.createElementVNode)("span", { class: (0, vue.normalizeClass)(["dot", (0, vue.unref)(hasPendingChanges) ? "dot-warning" : "dot-success"]) }, null, 2), (0, vue.createElementVNode)("span", { class: (0, vue.normalizeClass)((0, vue.unref)(hasPendingChanges) ? "pending-text" : "saved-text") }, (0, vue.toDisplayString)((0, vue.unref)(hasPendingChanges) ? "存在未保存更改" : "配置已实时同步"), 3)]), (0, vue.createElementVNode)("div", _hoisted_28$1, [(0, vue.createVNode)((0, vue.unref)(ant_design_vue.Button), {
						disabled: !(0, vue.unref)(hasPendingChanges),
						class: "btn-action",
						size: "small",
						onClick: save
					}, {
						default: (0, vue.withCtx)(() => [..._cache[6] || (_cache[6] = [(0, vue.createTextVNode)("仅保存", -1)])]),
						_: 1
					}, 8, ["disabled"]), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Button), {
						type: "primary",
						disabled: !(0, vue.unref)(hasPendingChanges),
						class: "btn-action",
						size: "small",
						onClick: saveAndRefresh
					}, {
						default: (0, vue.withCtx)(() => [..._cache[7] || (_cache[7] = [(0, vue.createTextVNode)("保存并刷新", -1)])]),
						_: 1
					}, 8, ["disabled"])])])]),
					default: (0, vue.withCtx)(() => [(0, vue.createElementVNode)("div", _hoisted_5$1, [(0, vue.createElementVNode)("span", _hoisted_6$1, "共 " + (0, vue.toDisplayString)(__props.entries.length) + " 款插件", 1), (0, vue.unref)(hiddenPluginCount) ? ((0, vue.openBlock)(), (0, vue.createBlock)((0, vue.unref)(ant_design_vue.Button), {
						key: 0,
						type: "link",
						size: "small",
						class: "toggle-hidden-btn",
						onClick: _cache[0] || (_cache[0] = ($event) => showHiddenPlugins.value = !(0, vue.unref)(showHiddenPlugins))
					}, {
						default: (0, vue.withCtx)(() => [(0, vue.createTextVNode)((0, vue.toDisplayString)((0, vue.unref)(showHiddenPlugins) ? "隐藏" : "显示") + "已隐藏插件（" + (0, vue.toDisplayString)((0, vue.unref)(hiddenPluginCount)) + "） ", 1)]),
						_: 1
					})) : (0, vue.createCommentVNode)("", true)]), (0, vue.createElementVNode)("div", _hoisted_7$1, [((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(__props.entries, (entry) => {
						return (0, vue.withDirectives)(((0, vue.openBlock)(), (0, vue.createElementBlock)("section", {
							key: entry.manifest.id,
							class: (0, vue.normalizeClass)(["plugin-card", {
								"is-expanded": (0, vue.unref)(expanded)[entry.manifest.id],
								"is-disabled": !(0, vue.unref)(draft).plugins[entry.manifest.id]?.isEnable
							}])
						}, [(0, vue.unref)(draft).plugins[entry.manifest.id] ? ((0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, { key: 0 }, [(0, vue.createElementVNode)("div", {
							class: "plugin-summary",
							onClick: ($event) => (0, vue.unref)(expanded)[entry.manifest.id] = !(0, vue.unref)(expanded)[entry.manifest.id]
						}, [
							(0, vue.createElementVNode)("button", {
								class: (0, vue.normalizeClass)(["expand-icon-btn", { "expanded": (0, vue.unref)(expanded)[entry.manifest.id] }]),
								"aria-expanded": Boolean((0, vue.unref)(expanded)[entry.manifest.id]),
								"aria-label": (0, vue.unref)(expanded)[entry.manifest.id] ? "折叠插件配置" : "展开插件配置"
							}, [..._cache[3] || (_cache[3] = [(0, vue.createElementVNode)("svg", {
								viewBox: "0 0 24 24",
								width: "14",
								height: "14",
								fill: "currentColor"
							}, [(0, vue.createElementVNode)("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })], -1)])], 10, _hoisted_9$1),
							(0, vue.createVNode)(PluginIcon_default, {
								class: "plugin-icon",
								config: {
									icon: (0, vue.unref)(draft).plugins[entry.manifest.id].ui?.icon || (0, vue.unref)(pluginConfig)(entry).ui.icon,
									title: (0, vue.unref)(draft).plugins[entry.manifest.id].ui?.title || (0, vue.unref)(pluginConfig)(entry).ui.title
								}
							}, null, 8, ["config"]),
							(0, vue.createElementVNode)("div", _hoisted_10$1, [
								(0, vue.createElementVNode)("span", _hoisted_11$1, (0, vue.toDisplayString)((0, vue.unref)(draft).plugins[entry.manifest.id].ui?.title || (0, vue.unref)(pluginConfig)(entry).ui.title), 1),
								(0, vue.createElementVNode)("span", _hoisted_12$1, (0, vue.toDisplayString)(entry.manifest.version || "1.0.0"), 1),
								(0, vue.createElementVNode)("p", _hoisted_13$1, (0, vue.toDisplayString)(entry.manifest.description || "暂无描述"), 1)
							]),
							(0, vue.createVNode)((0, vue.unref)(ant_design_vue.Tag), {
								color: entry.isRunning ? "success" : "default",
								bordered: false,
								class: "runtime-tag"
							}, {
								default: (0, vue.withCtx)(() => [(0, vue.createTextVNode)((0, vue.toDisplayString)(entry.isRunning ? (0, vue.unref)(draft).plugins[entry.manifest.id].isEnable ? "" : "运行中 · 刷新停用" : !(0, vue.unref)(draft).plugins[entry.manifest.id].isEnable ? "已停用" : entry.isMatched ? "已启用 · 刷新生效" : "页面未匹配"), 1)]),
								_: 2
							}, 1032, ["color"]),
							(0, vue.createElementVNode)("div", {
								class: "switch-wrapper",
								onClick: _cache[1] || (_cache[1] = (0, vue.withModifiers)(() => {}, ["stop"]))
							}, [(0, vue.createVNode)((0, vue.unref)(ant_design_vue.Switch), {
								checked: (0, vue.unref)(draft).plugins[entry.manifest.id].isEnable,
								"onUpdate:checked": ($event) => (0, vue.unref)(draft).plugins[entry.manifest.id].isEnable = $event,
								size: "small"
							}, null, 8, ["checked", "onUpdate:checked"])])
						], 8, _hoisted_8$1), (0, vue.unref)(expanded)[entry.manifest.id] ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_14$1, [
							(0, vue.createElementVNode)("div", _hoisted_15$1, [(0, vue.createElementVNode)("div", _hoisted_16$1, [
								(0, vue.createElementVNode)("span", _hoisted_17$1, "快照 (" + (0, vue.toDisplayString)((0, vue.unref)(environment).type === "top" ? "Top" : "iframe") + ")", 1),
								(0, vue.createElementVNode)("span", { class: (0, vue.normalizeClass)(["dot", entry.isMatched ? "dot-success" : "dot-error"]) }, null, 2),
								(0, vue.createElementVNode)("span", _hoisted_18$1, (0, vue.toDisplayString)(entry.isMatched ? "匹配通过" : entry.matchReason.join("；") || "规则未通过"), 1)
							]), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Button), {
								type: "link",
								size: "small",
								class: "open-plugin-btn",
								disabled: !entry.isRunning || !(0, vue.unref)(draft).plugins[entry.manifest.id].isEnable,
								onClick: (0, vue.withModifiers)(($event) => openPlugin(entry.manifest.id), ["stop"])
							}, {
								default: (0, vue.withCtx)(() => [..._cache[4] || (_cache[4] = [(0, vue.createTextVNode)(" 打开插件 ", -1)])]),
								_: 1
							}, 8, ["disabled", "onClick"])]),
							_cache[5] || (_cache[5] = (0, vue.createElementVNode)("div", { class: "section-divider" }, "运行环境与 URL 匹配", -1)),
							((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)((0, vue.unref)(contexts), (context) => {
								return (0, vue.openBlock)(), (0, vue.createElementBlock)("section", {
									key: context,
									class: "match-context-card"
								}, [(0, vue.createElementVNode)("div", _hoisted_19$1, [(0, vue.createElementVNode)("div", _hoisted_20$1, [
									(0, vue.createElementVNode)("strong", null, (0, vue.toDisplayString)(context === "top" ? "Top Window" : "iframe"), 1),
									(0, vue.createVNode)((0, vue.unref)(ant_design_vue.Switch), {
										checked: (0, vue.unref)(matchDraft)[entry.manifest.id][context].enabled,
										"onUpdate:checked": ($event) => (0, vue.unref)(matchDraft)[entry.manifest.id][context].enabled = $event,
										size: "small"
									}, null, 8, ["checked", "onUpdate:checked"]),
									(0, vue.createElementVNode)("span", _hoisted_21$1, "(" + (0, vue.toDisplayString)((0, vue.unref)(environment).type === context ? "当前环境" : "按当前 URL 预览") + ")", 1)
								]), (0, vue.unref)(matchDraft)[entry.manifest.id][context].enabled ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_22$1, [(0, vue.createElementVNode)("span", { class: (0, vue.normalizeClass)(["dot", (0, vue.unref)(rulePreview)(entry.manifest.id, context).matched ? "dot-success" : "dot-error"]) }, null, 2), (0, vue.createElementVNode)("span", _hoisted_23$1, (0, vue.toDisplayString)((0, vue.unref)(rulePreview)(entry.manifest.id, context).matched ? "匹配通过" : (0, vue.unref)(rulePreview)(entry.manifest.id, context).reason.join("；") || "未通过"), 1)])) : ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_24$1, "规则已禁用"))]), (0, vue.unref)(matchDraft)[entry.manifest.id][context].enabled ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_25$1, [(0, vue.createVNode)(MatchContextEditor_default, {
									rules: (0, vue.unref)(matchDraft)[entry.manifest.id][context].rules,
									"onUpdate:rules": ($event) => (0, vue.unref)(setContextRules)(entry.manifest.id, context, $event)
								}, null, 8, ["rules", "onUpdate:rules"])])) : (0, vue.createCommentVNode)("", true)]);
							}), 128)),
							(0, vue.createVNode)(UiSettings_default, {
								ui: (0, vue.unref)(draftUi)(entry),
								"available-layouts": (0, vue.unref)(availableLayouts)(entry),
								onUpdate: ($event) => (0, vue.unref)(updateUi)(entry.manifest.id, $event.path, $event.value)
							}, null, 8, [
								"ui",
								"available-layouts",
								"onUpdate"
							])
						])) : (0, vue.createCommentVNode)("", true)], 64)) : (0, vue.createCommentVNode)("", true)], 2)), [[vue.vShow, (0, vue.unref)(showHiddenPlugins) || ((0, vue.unref)(draft).plugins[entry.manifest.id]?.ui?.showInHost ?? (0, vue.unref)(pluginConfig)(entry).ui.showInHost) !== false]]);
					}), 128))])]),
					_: 1
				}, 8, [
					"open",
					"get-container",
					"z-index"
				]);
			};
		}
	}), [["__scopeId", "data-v-48e2f2d1"]]);
	var _hoisted_1$7 = { class: "jx-fab-backdrop" };
	var _hoisted_2$5 = { class: "jx-fab-content" };
	var _hoisted_3$4 = [
		"disabled",
		"aria-label",
		"onClick"
	];
	var _hoisted_4$2 = { class: "jx-recall-icon" };
	var DEFAULT_BALL_SIZE = 36;
	var ITEM_LIST_WIDTH = 36;
	var ITEM_LIST_HEIGHT = 36;
	var ITEM_GAP = 4;
	var VIEWPORT_PADDING = 0;
	var FloatingBall_default = _plugin_vue_export_helper_default((0, vue.defineComponent)({
		__name: "FloatingBall",
		props: {
			hostConfig: {},
			plugins: {},
			tooltips: {
				type: Boolean,
				default: true
			}
		},
		emits: ["click", "activate-plugin"],
		setup(__props, { emit: __emit }) {
			const props = __props;
			const emit = __emit;
			const containerRef = (0, vue.ref)(null);
			const listStyle = (0, vue.ref)({});
			const ballSize = (0, vue.ref)(DEFAULT_BALL_SIZE);
			const isDragging = (0, vue.ref)(false);
			const currentSide = (0, vue.ref)("right");
			const hostPosition = (0, vue.ref)({
				left: 0,
				top: 0
			});
			let hostDrag;
			let suppressHostClick = false;
			const getBoundedPosition = (pos) => {
				const size = ballSize.value;
				return {
					left: Math.min(Math.max(0, pos.left), Math.max(0, window.innerWidth - size)),
					top: Math.min(Math.max(0, pos.top), Math.max(0, window.innerHeight - size))
				};
			};
			function hostPointerDown(event) {
				const rect = event.currentTarget.getBoundingClientRect();
				event.currentTarget.setPointerCapture(event.pointerId);
				isDragging.value = true;
				hostDrag = {
					pointerId: event.pointerId,
					x: event.clientX,
					y: event.clientY,
					left: rect.left,
					top: rect.top,
					moved: false
				};
			}
			function hostPointerMove(event) {
				if (!hostDrag || hostDrag.pointerId !== event.pointerId) return;
				if (Math.abs(event.clientX - hostDrag.x) + Math.abs(event.clientY - hostDrag.y) > 3) hostDrag.moved = true;
				hostPosition.value = getBoundedPosition({
					left: hostDrag.left + (event.clientX - hostDrag.x),
					top: hostDrag.top + (event.clientY - hostDrag.y)
				});
				updateListPosition();
			}
			function hostPointerUp() {
				if (!hostDrag) return;
				suppressHostClick = hostDrag.moved;
				isDragging.value = false;
				const size = ballSize.value;
				const onLeft = hostPosition.value.left + size / 2 < window.innerWidth / 2;
				currentSide.value = onLeft ? "left" : "right";
				hostPosition.value = getBoundedPosition({
					left: onLeft ? 0 : window.innerWidth - size,
					top: hostPosition.value.top
				});
				updateListPosition();
				hostDrag = void 0;
				setWindowState("host-floating-ball", { position: hostPosition.value });
			}
			function handleClick() {
				if (suppressHostClick) {
					suppressHostClick = false;
					return;
				}
				emit("click");
			}
			function handleResize() {
				hostPosition.value = getBoundedPosition(hostPosition.value);
				updateListPosition();
			}
			function updateListPosition() {
				const count = props.plugins.length;
				if (!count) return;
				const size = ballSize.value;
				const { left: hostLeft, top: hostTop } = hostPosition.value;
				const naturalHeight = count * ITEM_LIST_HEIGHT + (count - 1) * ITEM_GAP;
				const maxHeight = window.innerHeight - VIEWPORT_PADDING;
				const listHeight = Math.min(naturalHeight, Math.max(0, maxHeight));
				const belowSpace = window.innerHeight - (hostTop + size);
				const listAbove = belowSpace < listHeight + 12 && hostTop > belowSpace;
				const maxLeft = Math.max(0, window.innerWidth - ITEM_LIST_WIDTH - 0);
				const offsetLeft = currentSide.value === "right" ? size - ITEM_LIST_WIDTH : 0;
				const left = Math.min(Math.max(0, hostLeft + offsetLeft), maxLeft);
				const top = listAbove ? Math.max(0, hostTop - (listHeight + ITEM_GAP)) : Math.min(window.innerHeight - (listHeight + ITEM_GAP), hostTop + size + ITEM_GAP);
				listStyle.value = {
					left: `${left}px`,
					top: `${top}px`
				};
			}
			(0, vue.onMounted)(() => {
				if (containerRef.value) {
					const parsedSize = parseInt(getComputedStyle(containerRef.value).getPropertyValue("--fab-size"), 10);
					if (!isNaN(parsedSize) && parsedSize > 0) ballSize.value = parsedSize;
				}
				const savedPosition = getWindowState("host-floating-ball")?.position;
				hostPosition.value = getBoundedPosition(savedPosition ?? {
					left: window.innerWidth - ballSize.value,
					top: Math.round(window.innerHeight * .74)
				});
				currentSide.value = hostPosition.value.left + ballSize.value / 2 < window.innerWidth / 2 ? "left" : "right";
				window.addEventListener("resize", handleResize);
				updateListPosition();
			});
			(0, vue.onUnmounted)(() => window.removeEventListener("resize", handleResize));
			const containerStyle = (0, vue.computed)(() => ({
				left: `${hostPosition.value.left}px`,
				top: `${hostPosition.value.top}px`
			}));
			(0, vue.watch)(() => props.plugins.length, updateListPosition);
			return (_ctx, _cache) => {
				return (0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, null, [(0, vue.createElementVNode)("div", {
					ref_key: "containerRef",
					ref: containerRef,
					class: (0, vue.normalizeClass)(["jx-fab-container", {
						"is-dragging": isDragging.value,
						[`side-${currentSide.value}`]: true
					}]),
					style: (0, vue.normalizeStyle)(containerStyle.value),
					onPointerdown: hostPointerDown,
					onPointermove: hostPointerMove,
					onPointerup: hostPointerUp,
					onPointercancel: hostPointerUp,
					onClick: handleClick,
					onMouseenter: updateListPosition,
					role: "button"
				}, [(0, vue.createVNode)((0, vue.unref)(ant_design_vue.Tooltip), {
					title: "插件配置中心",
					placement: currentSide.value === "right" ? "left" : "right"
				}, {
					default: (0, vue.withCtx)(() => [(0, vue.createElementVNode)("div", _hoisted_1$7, [(0, vue.createElementVNode)("div", _hoisted_2$5, [(0, vue.createVNode)(PluginIcon_default, { config: {
						icon: __props.hostConfig.ui?.icon,
						title: __props.hostConfig.ui?.title || __props.hostConfig.name
					} }, null, 8, ["config"])])])]),
					_: 1
				}, 8, ["placement"])], 38), props.plugins.length ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", {
					key: 0,
					class: "jx-recall-list",
					style: (0, vue.normalizeStyle)(listStyle.value),
					role: "menu",
					"aria-label": "子插件快捷入口"
				}, [((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(props.plugins, (plugin) => {
					return (0, vue.openBlock)(), (0, vue.createBlock)((0, vue.unref)(ant_design_vue.Tooltip), {
						key: plugin.id,
						title: props.tooltips ? plugin.name : "",
						placement: currentSide.value === "right" ? "left" : "right"
					}, {
						default: (0, vue.withCtx)(() => [(0, vue.createElementVNode)("button", {
							class: "jx-recall-item",
							disabled: plugin.disabled,
							"aria-label": plugin.name,
							role: "menuitem",
							onClick: ($event) => _ctx.$emit("activate-plugin", plugin.id)
						}, [(0, vue.createElementVNode)("span", _hoisted_4$2, [(0, vue.createVNode)(PluginIcon_default, { config: {
							icon: plugin.icon,
							title: plugin.name
						} }, null, 8, ["config"])])], 8, _hoisted_3$4)]),
						_: 2
					}, 1032, ["title", "placement"]);
				}), 128))], 4)) : (0, vue.createCommentVNode)("", true)], 64);
			};
		}
	}), [["__scopeId", "data-v-16984016"]]);
	var _hoisted_1$6 = { class: "example-plugin" };
	var example_default = _plugin_vue_export_helper_default((0, vue.defineComponent)({
		name: "example",
		__name: "index",
		setup(__props) {
			return (_ctx, _cache) => {
				return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_1$6, [..._cache[0] || (_cache[0] = [(0, vue.createElementVNode)("p", null, "窗口类型和交互由 Manifest 与控制中心配置。", -1)])]);
			};
		}
	}), [["__scopeId", "data-v-2f64fac3"]]);
	var config_exports$3 = __exportAll({ default: () => plugin$3 });
	var plugin$3 = {
		id: "example",
		name: "JX - 示例插件1",
		description: "用于验证插件自动注册、运行规则和窗口容器。",
		version: "0.0.1",
		releaseNotes: "初始版本。",
		component: (0, vue.markRaw)(example_default),
		config: {
			isEnable: true,
			env: { contexts: { top: { include: ["*"] } } },
			ui: {
				title: "示例插件1",
				icon: "💡",
				showInHost: true,
				currentLayout: "dialog",
				rememberPosition: true,
				layout: {
					dialog: {
						draggable: true,
						showModal: false,
						defaultCollapsed: true,
						style: {
							width: "600px",
							height: "480px",
							maxWidth: "1200px",
							maxHeight: "900px"
						}
					},
					drawer: {
						placement: "right",
						showModal: false,
						defaultCollapsed: true,
						style: {
							width: "600px",
							height: "480px",
							maxWidth: "1200px",
							maxHeight: "900px"
						}
					}
				}
			}
		}
	};
	var _hoisted_1$5 = { class: "example-plugin" };
	var example2_default = _plugin_vue_export_helper_default((0, vue.defineComponent)({
		name: "example",
		__name: "index",
		setup(__props) {
			return (_ctx, _cache) => {
				return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_1$5, [..._cache[0] || (_cache[0] = [(0, vue.createElementVNode)("p", null, "窗口类型和交互由 Manifest 与控制中心配置。", -1)])]);
			};
		}
	}), [["__scopeId", "data-v-2461ab84"]]);
	var config_exports$2 = __exportAll({ default: () => plugin$2 });
	var plugin$2 = {
		id: "example2",
		name: "JX - 示例插件2",
		description: "用于验证插件抽屉窗口容器的功能。",
		version: "0.0.2",
		releaseNotes: "初始版本。",
		component: (0, vue.markRaw)(example2_default),
		config: {
			isEnable: true,
			env: { contexts: { top: { include: ["*"] } } },
			ui: {
				title: "示例插件2",
				icon: "📦",
				showInHost: true,
				currentLayout: "drawer",
				rememberPosition: true,
				layout: {
					dialog: {
						draggable: true,
						showModal: false,
						defaultCollapsed: true,
						style: {
							width: "400px",
							height: "480px",
							maxWidth: "1200px",
							maxHeight: "900px"
						}
					},
					drawer: {
						placement: "right",
						showModal: false,
						defaultCollapsed: true,
						style: {
							width: "400px",
							height: "480px",
							maxWidth: "1200px",
							maxHeight: "900px"
						}
					}
				}
			}
		}
	};
	var _hoisted_1$4 = { class: "split-layout" };
	var _hoisted_2$4 = { class: "col" };
	var _hoisted_3$3 = { class: "col-header" };
	var _hoisted_4$1 = ["disabled"];
	var _hoisted_5 = {
		key: 0,
		class: "global-stats"
	};
	var _hoisted_6 = { class: "control-box" };
	var _hoisted_7 = { class: "chk-grid" };
	var _hoisted_8 = ["onUpdate:modelValue"];
	var _hoisted_9 = ["disabled"];
	var _hoisted_10 = { class: "table-wrapper" };
	var _hoisted_11 = { class: "inline-flex-box-column" };
	var _hoisted_12 = { class: "badge b-purp" };
	var _hoisted_13 = { class: "timestamp" };
	var _hoisted_14 = { class: "inline-flex-box-column" };
	var _hoisted_15 = { class: "badge b-neu" };
	var _hoisted_16 = { open: "" };
	var _hoisted_17 = {
		class: "col",
		style: { "flex": "1.35" }
	};
	var _hoisted_18 = { class: "control-box split-control" };
	var _hoisted_19 = { class: "split-left" };
	var _hoisted_20 = { class: "chk-grid" };
	var _hoisted_21 = ["onUpdate:modelValue"];
	var _hoisted_22 = { class: "action-row" };
	var _hoisted_23 = { class: "split-right" };
	var _hoisted_24 = { class: "current-consent-title" };
	var _hoisted_25 = { style: { "color": "#2563eb" } };
	var _hoisted_26 = {
		key: 0,
		style: {
			"color": "#5d5d5d",
			"font-family": "monospace"
		}
	};
	var _hoisted_27 = { class: "table-wrapper" };
	var _hoisted_28 = { class: "inline-flex-box-column" };
	var _hoisted_29 = { class: "timestamp" };
	var _hoisted_30 = {
		key: 1,
		style: {
			"color": "#9ca3af",
			"font-size": "10px"
		}
	};
	var jxConsentInspector_default = _plugin_vue_export_helper_default((0, vue.defineComponent)({
		__name: "index",
		setup(__props) {
			const shopifyOptions = [
				{
					id: "preferences",
					label: "Preferences"
				},
				{
					id: "analytics",
					label: "Analytics"
				},
				{
					id: "marketing",
					label: "Marketing"
				},
				{
					id: "sale_of_data",
					label: "SaleOfData"
				}
			];
			const googleOptions = [
				"ad_storage",
				"analytics_storage",
				"ad_user_data",
				"ad_personalization",
				"functionality_storage",
				"personalization_storage",
				"security_storage"
			].map((id) => ({
				id,
				label: id
			}));
			const shopifyCols = [
				{
					key: "event",
					label: "Event",
					width: "90px"
				},
				{
					key: "geo",
					label: "Region & Law",
					width: "90px"
				},
				{
					key: "state",
					label: "Consent State",
					width: "125px"
				},
				{
					key: "details",
					label: "CurrentVisitorConsent",
					width: "auto"
				}
			];
			const googleCols = [
				{
					key: "action",
					label: "Action",
					width: "120px"
				},
				{
					key: "diff",
					label: "Consent State Diff",
					width: "250px"
				},
				{
					key: "info",
					label: "Info",
					width: "auto"
				}
			];
			const shopifyGlobal = (0, vue.reactive)({
				shouldShowBanner: "-",
				userCanBeTracked: "-"
			});
			const shopifyRecords = (0, vue.ref)([]);
			const shopifyApiLoaded = (0, vue.ref)(false);
			const shopifyCanLoad = (0, vue.ref)(false);
			const shopifyLoading = (0, vue.ref)(false);
			const googleRecords = (0, vue.ref)([]);
			const currentGoogleConsent = (0, vue.reactive)({});
			const currentGoogleSource = (0, vue.ref)("dataLayer");
			const googleEntriesAvailable = (0, vue.ref)(false);
			const shopifyForm = (0, vue.reactive)({
				preferences: false,
				analytics: false,
				marketing: false,
				sale_of_data: false
			});
			const googleForm = (0, vue.reactive)(Object.fromEntries(googleOptions.map((o) => [o.id, true])));
			const googleConsentState = (0, vue.reactive)({});
			let entriesProcessQueued = false;
			const cleanups = [];
			const normalizeBoolean = (v) => {
				if (v === true || v === "granted") return true;
				if (v === false || v === "denied") return false;
				return null;
			};
			const getBadge = (value) => {
				if (value === true || value === "granted") return {
					text: "GRANT",
					cls: "b-true"
				};
				if (value === false || value === "denied") return {
					text: "DENY",
					cls: "b-false"
				};
				return {
					text: String(value || "-").toUpperCase(),
					cls: "b-neu"
				};
			};
			const getTime = () => {
				const now = new Date();
				return `${now.toLocaleTimeString([], { hour12: false })}.${String(now.getMilliseconds()).padStart(3, "0")}`;
			};
			const cloneData = (data) => {
				try {
					return JSON.parse(JSON.stringify(data));
				} catch {
					return String(data);
				}
			};
			const getShopifyPrivacy = () => window.Shopify?.customerPrivacy;
			const refreshShopifyApiState = () => {
				const win = window, cp = getShopifyPrivacy();
				shopifyApiLoaded.value = !!cp;
				shopifyCanLoad.value = !!win.Shopify?.loadFeatures && !cp;
				if (cp) {
					shopifyGlobal.shouldShowBanner = cp.shouldShowBanner?.() ?? "-";
					shopifyGlobal.userCanBeTracked = cp.userCanBeTracked?.() ?? "-";
				}
			};
			const recordShopify = (eventName) => {
				const cp = getShopifyPrivacy();
				if (!cp && eventName === "query") return;
				refreshShopifyApiState();
				shopifyRecords.value.unshift({
					time: getTime(),
					event: eventName,
					state: cp ? {
						preferences: cp.preferencesProcessingAllowed?.() ?? "-",
						analytics: cp.analyticsProcessingAllowed?.() ?? "-",
						marketing: cp.marketingAllowed?.() ?? "-",
						sale_of_data: cp.saleOfDataAllowed?.() ?? "-",
						cvConsent: cp.currentVisitorConsent?.() || {},
						region: cp.getRegion?.() || "-",
						law: cp.getRegulation?.() || "-"
					} : null
				});
			};
			const handleLoadShopifyApi = () => {
				const shopify = window.Shopify;
				if (!shopify?.loadFeatures || shopifyLoading.value) return;
				shopifyLoading.value = true;
				shopify.loadFeatures([{
					name: "consent-tracking-api",
					version: "0.2"
				}], () => {
					shopifyLoading.value = false;
					refreshShopifyApiState();
					if (getShopifyPrivacy()) recordShopify("load_api");
				});
			};
			const handleManualSetShopify = () => {
				getShopifyPrivacy()?.setTrackingConsent?.({ ...shopifyForm }, () => {});
			};
			const syncCurrentGoogleConsent = () => {
				currentGoogleSource.value = googleEntriesAvailable.value ? "google_tag_data.ics.entries" : "dataLayer";
				googleOptions.forEach(({ id }) => {
					const item = googleConsentState[id];
					currentGoogleConsent[id] = item ? item.v ? "granted" : "denied" : "-";
				});
			};
			const recordDataLayerCommand = (item) => {
				const cmd = Array.isArray(item) ? item : Object.prototype.toString.call(item) === "[object Arguments]" ? Array.prototype.slice.call(item) : null;
				if (!cmd || cmd[0] !== "consent" || !cmd[2] || typeof cmd[2] !== "object") return;
				const action = String(cmd[1] || "unknown");
				const previousValues = {};
				googleOptions.forEach(({ id }) => {
					if (googleConsentState[id] !== void 0) previousValues[id] = googleConsentState[id].v;
				});
				const newValues = {};
				googleOptions.forEach(({ id }) => {
					const val = normalizeBoolean(cmd[2][id]);
					if (val !== null) {
						newValues[id] = val;
						googleConsentState[id] = {
							v: val,
							s: "dataLayer"
						};
					}
				});
				syncCurrentGoogleConsent();
				const diff = {};
				googleOptions.forEach(({ id }) => {
					const newV = newValues[id];
					if (newV !== void 0) {
						const oldV = previousValues[id];
						if (oldV !== newV) diff[id] = {
							old: oldV !== void 0 ? oldV ? "granted" : "denied" : "none",
							new: newV ? "granted" : "denied"
						};
					}
				});
				googleRecords.value.unshift({
					time: getTime(),
					action,
					payload: {
						source: "dataLayer",
						data: { ...cmd }
					},
					diff: Object.keys(diff).length ? diff : {}
				});
			};
			const observedDataLayers = new WeakSet();
			const observeDataLayerArray = (dataLayer) => {
				if (!Array.isArray(dataLayer) || observedDataLayers.has(dataLayer)) return;
				observedDataLayers.add(dataLayer);
				dataLayer.forEach(recordDataLayerCommand);
				const originalPush = dataLayer.push;
				const wrappedPush = function(...items) {
					const res = originalPush.apply(this, items);
					items.forEach(recordDataLayerCommand);
					return res;
				};
				try {
					dataLayer.push = wrappedPush;
				} catch {
					return;
				}
				cleanups.push(() => {
					if (dataLayer.push === wrappedPush) dataLayer.push = originalPush;
				});
			};
			const observedProperties = new WeakMap();
			const observeProperty = (target, key, onChange) => {
				if (!target || typeof target !== "object") return target?.[key];
				let keys = observedProperties.get(target);
				if (!keys) {
					keys = new Set();
					observedProperties.set(target, keys);
				}
				if (keys.has(key)) return target[key];
				const desc = Object.getOwnPropertyDescriptor(target, key);
				if (desc?.configurable === false || desc && "value" in desc && desc.writable === false) return target[key];
				let val = desc && "value" in desc ? desc.value : desc?.get?.call(target);
				const getter = () => desc?.get ? desc.get.call(target) : val;
				const setter = function(next) {
					const prev = getter();
					if (desc?.set) desc.set.call(this, next);
					else val = next;
					const curr = getter();
					if (curr !== prev) onChange(curr);
				};
				try {
					Object.defineProperty(target, key, {
						configurable: true,
						enumerable: desc?.enumerable ?? true,
						get: getter,
						set: setter
					});
					keys.add(key);
					cleanups.push(() => {
						if (Object.getOwnPropertyDescriptor(target, key)?.get === getter) desc ? Object.defineProperty(target, key, desc) : delete target[key];
					});
				} catch {
					return target[key];
				}
				return getter();
			};
			const googleEntriesActionPriorities = [
				"update",
				"default",
				"implicit"
			];
			const scheduleEntriesRead = () => {
				if (entriesProcessQueued) return;
				entriesProcessQueued = true;
				Promise.resolve().then(() => {
					entriesProcessQueued = false;
					readEntriesState();
				});
			};
			const observeConsentEntry = (entry) => {
				if (!entry || typeof entry !== "object") return;
				googleEntriesActionPriorities.forEach((a) => observeProperty(entry, a, scheduleEntriesRead));
			};
			const observeEntriesObject = (entries) => {
				if (!entries || typeof entries !== "object") return;
				googleEntriesAvailable.value = true;
				googleOptions.forEach(({ id }) => {
					observeProperty(entries, id, () => {
						observeConsentEntry(entries[id]);
						scheduleEntriesRead();
					});
					observeConsentEntry(entries[id]);
				});
				scheduleEntriesRead();
			};
			const readEntriesState = () => {
				const entries = window.google_tag_data?.ics?.entries;
				googleEntriesAvailable.value = !!entries;
				if (!entries || typeof entries !== "object") {
					syncCurrentGoogleConsent();
					return;
				}
				const internalDiff = {};
				let triggeredAction = "";
				let maxPriority = -1;
				googleOptions.forEach(({ id }) => {
					const entry = entries[id];
					if (!entry || typeof entry !== "object") return;
					const action = googleEntriesActionPriorities.find((k) => entry[k] !== void 0);
					if (!action) return;
					const rawVal = entry[action];
					if (rawVal === void 0) return;
					const newVal = normalizeBoolean(rawVal);
					if (newVal === null) return;
					const actionSource = `internal:${action}`;
					const oldState = googleConsentState[id];
					if (oldState?.s === "dataLayer" && oldState.v !== newVal) {
						internalDiff[id] = {
							old: oldState.v ? "granted" : "denied",
							new: newVal ? "granted" : "denied"
						};
						const pri = googleEntriesActionPriorities.indexOf(action);
						if (pri > maxPriority) {
							maxPriority = pri;
							triggeredAction = action;
						}
					}
					googleConsentState[id] = {
						v: newVal,
						s: actionSource
					};
				});
				syncCurrentGoogleConsent();
				if (Object.keys(internalDiff).length > 0) googleRecords.value.unshift({
					time: getTime(),
					action: `internal:${triggeredAction || "change"}`,
					payload: {
						source: "google_tag_data.ics.entries",
						data: cloneData(entries)
					},
					diff: internalDiff
				});
			};
			const observeGoogleSources = () => {
				const win = window;
				observeProperty(win, "dataLayer", observeDataLayerArray);
				if (win.dataLayer) observeDataLayerArray(win.dataLayer);
				const observeGoogleTagData = (gtd) => {
					if (!gtd || typeof gtd !== "object") return;
					const setupIcs = (ics) => {
						if (!ics || typeof ics !== "object") return;
						observeProperty(ics, "entries", observeEntriesObject);
						if (ics.entries) observeEntriesObject(ics.entries);
					};
					observeProperty(gtd, "ics", setupIcs);
					if (gtd.ics) setupIcs(gtd.ics);
				};
				observeProperty(win, "google_tag_data", observeGoogleTagData);
				if (win.google_tag_data) observeGoogleTagData(win.google_tag_data);
				syncCurrentGoogleConsent();
			};
			const handleGoogleConsent = (action) => {
				const win = window;
				win.dataLayer = win.dataLayer || [];
				win.gtag = win.gtag || function() {
					win.dataLayer.push(arguments);
				};
				win.gtag("consent", action, Object.fromEntries(Object.entries(googleForm).map(([k, v]) => [k, typeof v === "boolean" ? v ? "granted" : "denied" : v])));
			};
			let shopifyTimer;
			let shopifyUpdateTimer;
			const handleVisitorConsentCollected = () => {
				if (shopifyUpdateTimer) clearTimeout(shopifyUpdateTimer);
				shopifyUpdateTimer = setTimeout(() => recordShopify("update"), 100);
			};
			(0, vue.onMounted)(() => {
				let initRecorded = false;
				const recordInit = () => {
					if (initRecorded || !shopifyApiLoaded.value) return;
					initRecorded = true;
					recordShopify("init");
				};
				refreshShopifyApiState();
				recordInit();
				const observeShopifyObj = (shopifyObj) => {
					if (shopifyObj) observeProperty(shopifyObj, "customerPrivacy", () => {
						refreshShopifyApiState();
						recordInit();
					});
				};
				observeProperty(window, "Shopify", observeShopifyObj);
				if (window.Shopify) observeShopifyObj(window.Shopify);
				shopifyTimer = setInterval(() => {
					refreshShopifyApiState();
					if (shopifyApiLoaded.value) {
						recordInit();
						clearInterval(shopifyTimer);
						shopifyTimer = void 0;
					}
				}, 200);
				document.addEventListener("visitorConsentCollected", handleVisitorConsentCollected);
				observeGoogleSources();
			});
			(0, vue.onUnmounted)(() => {
				if (shopifyTimer) clearInterval(shopifyTimer);
				if (shopifyUpdateTimer) clearTimeout(shopifyUpdateTimer);
				document.removeEventListener("visitorConsentCollected", handleVisitorConsentCollected);
				cleanups.reverse().forEach((fn) => fn());
			});
			return (_ctx, _cache) => {
				return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_1$4, [(0, vue.createElementVNode)("div", _hoisted_2$4, [
					(0, vue.createElementVNode)("div", _hoisted_3$3, [_cache[3] || (_cache[3] = (0, vue.createElementVNode)("span", { class: "inline-flex-box" }, [(0, vue.createElementVNode)("img", {
						src: "https://www.google.com/s2/favicons?domain=shopify.com&sz=64",
						width: "16",
						height: "16"
					}), (0, vue.createTextVNode)(" Shopify Customer Privacy ")], -1)), (0, vue.createElementVNode)("div", null, [shopifyCanLoad.value ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("button", {
						key: 0,
						class: "btn sm-btn",
						disabled: shopifyLoading.value,
						onClick: handleLoadShopifyApi
					}, (0, vue.toDisplayString)(shopifyLoading.value ? "Loading..." : "Load API"), 9, _hoisted_4$1)) : (0, vue.createCommentVNode)("", true), shopifyApiLoaded.value ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("button", {
						key: 1,
						class: "btn sm-btn",
						onClick: _cache[0] || (_cache[0] = ($event) => recordShopify("query"))
					}, "Query")) : (0, vue.createCommentVNode)("", true)])]),
					shopifyApiLoaded.value ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_5, [(0, vue.createElementVNode)("div", null, [_cache[4] || (_cache[4] = (0, vue.createTextVNode)("shouldShowBanner: ", -1)), (0, vue.createElementVNode)("span", { class: (0, vue.normalizeClass)(["badge", getBadge(shopifyGlobal.shouldShowBanner).cls]) }, (0, vue.toDisplayString)(getBadge(shopifyGlobal.shouldShowBanner).text), 3)]), (0, vue.createElementVNode)("div", null, [_cache[5] || (_cache[5] = (0, vue.createTextVNode)("userCanBeTracked: ", -1)), (0, vue.createElementVNode)("span", { class: (0, vue.normalizeClass)(["badge", getBadge(shopifyGlobal.userCanBeTracked).cls]) }, (0, vue.toDisplayString)(getBadge(shopifyGlobal.userCanBeTracked).text), 3)])])) : (0, vue.createCommentVNode)("", true),
					(0, vue.createElementVNode)("div", _hoisted_6, [(0, vue.createElementVNode)("div", _hoisted_7, [((0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(shopifyOptions, (opt) => {
						return (0, vue.createElementVNode)("label", { key: opt.id }, [(0, vue.withDirectives)((0, vue.createElementVNode)("input", {
							type: "checkbox",
							"onUpdate:modelValue": ($event) => shopifyForm[opt.id] = $event
						}, null, 8, _hoisted_8), [[vue.vModelCheckbox, shopifyForm[opt.id]]]), (0, vue.createTextVNode)(" " + (0, vue.toDisplayString)(opt.label), 1)]);
					}), 64))]), (0, vue.createElementVNode)("button", {
						class: "btn btn-primary",
						style: { "width": "100%" },
						disabled: !shopifyApiLoaded.value,
						onClick: handleManualSetShopify
					}, " Manual Set Consent ", 8, _hoisted_9)]),
					(0, vue.createElementVNode)("div", _hoisted_10, [(0, vue.createElementVNode)("table", null, [(0, vue.createElementVNode)("thead", null, [(0, vue.createElementVNode)("tr", null, [((0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(shopifyCols, (c) => {
						return (0, vue.createElementVNode)("th", {
							key: c.key,
							style: (0, vue.normalizeStyle)({ width: c.width })
						}, (0, vue.toDisplayString)(c.label), 5);
					}), 64))])]), (0, vue.createElementVNode)("tbody", null, [((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(shopifyRecords.value, (r, idx) => {
						return (0, vue.openBlock)(), (0, vue.createElementBlock)("tr", { key: idx }, [
							(0, vue.createElementVNode)("td", null, [(0, vue.createElementVNode)("div", _hoisted_11, [(0, vue.createElementVNode)("span", _hoisted_12, (0, vue.toDisplayString)(r.event), 1), (0, vue.createElementVNode)("span", _hoisted_13, (0, vue.toDisplayString)(r.time), 1)])]),
							(0, vue.createElementVNode)("td", null, [(0, vue.createElementVNode)("div", _hoisted_14, [(0, vue.createElementVNode)("b", null, (0, vue.toDisplayString)(r.state?.region), 1), (0, vue.createElementVNode)("span", _hoisted_15, (0, vue.toDisplayString)(r.state?.law), 1)])]),
							(0, vue.createElementVNode)("td", null, [((0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(shopifyOptions, (opt) => {
								return (0, vue.createElementVNode)("div", {
									class: "mini-status",
									key: opt.id
								}, [(0, vue.createElementVNode)("b", null, (0, vue.toDisplayString)(opt.label), 1), (0, vue.createElementVNode)("span", { class: (0, vue.normalizeClass)(["badge", getBadge(r.state?.[opt.id]).cls]) }, (0, vue.toDisplayString)(getBadge(r.state?.[opt.id]).text), 3)]);
							}), 64))]),
							(0, vue.createElementVNode)("td", null, [(0, vue.createElementVNode)("details", _hoisted_16, [_cache[6] || (_cache[6] = (0, vue.createElementVNode)("summary", null, "Details", -1)), (0, vue.createElementVNode)("pre", null, (0, vue.toDisplayString)(JSON.stringify(r.state?.cvConsent, null, 2)), 1)])])
						]);
					}), 128))])])])
				]), (0, vue.createElementVNode)("div", _hoisted_17, [
					_cache[9] || (_cache[9] = (0, vue.createElementVNode)("div", { class: "col-header" }, [(0, vue.createElementVNode)("span", { class: "inline-flex-box" }, [(0, vue.createElementVNode)("img", {
						src: "https://www.google.com/s2/favicons?domain=google.com&sz=64",
						width: "16",
						height: "16"
					}), (0, vue.createTextVNode)(" Google Consent Mode ")])], -1)),
					(0, vue.createElementVNode)("div", _hoisted_18, [(0, vue.createElementVNode)("div", _hoisted_19, [(0, vue.createElementVNode)("div", _hoisted_20, [((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)((0, vue.unref)(googleOptions), (opt) => {
						return (0, vue.openBlock)(), (0, vue.createElementBlock)("label", { key: opt.id }, [(0, vue.withDirectives)((0, vue.createElementVNode)("input", {
							type: "checkbox",
							"onUpdate:modelValue": ($event) => googleForm[opt.id] = $event
						}, null, 8, _hoisted_21), [[vue.vModelCheckbox, googleForm[opt.id]]]), (0, vue.createTextVNode)(" " + (0, vue.toDisplayString)(opt.label), 1)]);
					}), 128))]), (0, vue.createElementVNode)("div", _hoisted_22, [(0, vue.createElementVNode)("button", {
						class: "btn",
						style: { "flex": "1" },
						onClick: _cache[1] || (_cache[1] = ($event) => handleGoogleConsent("default"))
					}, "Set Default"), (0, vue.createElementVNode)("button", {
						class: "btn btn-google",
						style: { "flex": "1" },
						onClick: _cache[2] || (_cache[2] = ($event) => handleGoogleConsent("update"))
					}, "Update")])]), (0, vue.createElementVNode)("div", _hoisted_23, [(0, vue.createElementVNode)("div", _hoisted_24, [_cache[7] || (_cache[7] = (0, vue.createTextVNode)("Source: ", -1)), (0, vue.createElementVNode)("span", _hoisted_25, (0, vue.toDisplayString)(currentGoogleSource.value), 1)]), ((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)((0, vue.unref)(googleOptions), (opt) => {
						return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", {
							key: opt.id,
							class: "current-consent-item"
						}, [(0, vue.createElementVNode)("div", null, [(0, vue.createElementVNode)("b", null, (0, vue.toDisplayString)(opt.label), 1), googleConsentState[opt.id]?.s ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("span", _hoisted_26, (0, vue.toDisplayString)("(" + googleConsentState[opt.id]?.s + ")"), 1)) : (0, vue.createCommentVNode)("", true)]), (0, vue.createElementVNode)("span", { class: (0, vue.normalizeClass)(["badge", getBadge(googleConsentState[opt.id]?.v).cls]) }, (0, vue.toDisplayString)(getBadge(googleConsentState[opt.id]?.v).text), 3)]);
					}), 128))])]),
					(0, vue.createElementVNode)("div", _hoisted_27, [(0, vue.createElementVNode)("table", null, [(0, vue.createElementVNode)("thead", null, [(0, vue.createElementVNode)("tr", null, [((0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(googleCols, (c) => {
						return (0, vue.createElementVNode)("th", {
							key: c.key,
							style: (0, vue.normalizeStyle)({ width: c.width })
						}, (0, vue.toDisplayString)(c.label), 5);
					}), 64))])]), (0, vue.createElementVNode)("tbody", null, [((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(googleRecords.value, (r, idx) => {
						return (0, vue.openBlock)(), (0, vue.createElementBlock)("tr", { key: idx }, [
							(0, vue.createElementVNode)("td", null, [(0, vue.createElementVNode)("div", _hoisted_28, [(0, vue.createElementVNode)("span", { class: (0, vue.normalizeClass)(["badge", r.action === "update" ? "b-blue" : "b-neu"]) }, (0, vue.toDisplayString)(r.action), 3), (0, vue.createElementVNode)("span", _hoisted_29, (0, vue.toDisplayString)(r.time), 1)])]),
							(0, vue.createElementVNode)("td", null, [Object.keys(r.diff || {}).length ? ((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, { key: 0 }, (0, vue.renderList)(r.diff, (v, k) => {
								return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", {
									key: k,
									class: "diff-item"
								}, [(0, vue.createElementVNode)("b", null, (0, vue.toDisplayString)(k) + ":", 1), (0, vue.createElementVNode)("div", null, [
									(0, vue.createElementVNode)("span", { class: (0, vue.normalizeClass)(["badge", getBadge(v.old).cls]) }, (0, vue.toDisplayString)(getBadge(v.old).text), 3),
									_cache[8] || (_cache[8] = (0, vue.createTextVNode)(" ➔ ", -1)),
									(0, vue.createElementVNode)("span", { class: (0, vue.normalizeClass)(["badge", getBadge(v.new).cls]) }, (0, vue.toDisplayString)(getBadge(v.new).text), 3)
								])]);
							}), 128)) : ((0, vue.openBlock)(), (0, vue.createElementBlock)("span", _hoisted_30, "No changes"))]),
							(0, vue.createElementVNode)("td", null, [(0, vue.createElementVNode)("details", null, [(0, vue.createElementVNode)("summary", null, (0, vue.toDisplayString)(r.payload?.source || "Details"), 1), (0, vue.createElementVNode)("pre", null, (0, vue.toDisplayString)(JSON.stringify(r.payload?.data, null, 2)), 1)])])
						]);
					}), 128))])])])
				])]);
			};
		}
	}), [["__scopeId", "data-v-1446c496"]]);
	var config_exports$1 = __exportAll({ default: () => plugin$1 });
	var plugin$1 = {
		id: "jx-consent-inspector",
		name: "JX - 同意状态监测器",
		description: "用于验证插件自动注册、运行规则和窗口容器。",
		version: "26.11.7",
		releaseNotes: "正式版本，优化了获取内部同意状态的逻辑。",
		component: (0, vue.markRaw)(jxConsentInspector_default),
		config: {
			isEnable: true,
			env: { contexts: { top: { include: ["*"] } } },
			ui: {
				title: "Consent Inspector",
				icon: "👀",
				showInHost: true,
				currentLayout: "dialog",
				rememberPosition: true,
				layout: {
					dialog: {
						draggable: true,
						showModal: false,
						defaultCollapsed: true,
						style: {
							width: "1300px",
							height: "fit-content",
							maxWidth: "95vw",
							maxHeight: "90vh"
						}
					},
					drawer: {
						placement: "right",
						showModal: false,
						defaultCollapsed: true,
						style: {
							width: "1300px",
							height: "580px",
							maxWidth: "95vw",
							maxHeight: "90vh"
						}
					}
				}
			}
		}
	};
	var _hoisted_1$3 = { class: "jx-intercept-container" };
	var _hoisted_2$3 = { class: "jx-modal-desc" };
	var _hoisted_3$2 = { class: "jx-modal-option" };
	var jxNavBlocker_default = _plugin_vue_export_helper_default((0, vue.defineComponent)({
		__name: "index",
		setup(__props) {
			let isExecutingNavigation = false;
			let navigationTimer = null;
			const modalState = (0, vue.reactive)({
				visible: false,
				title: "",
				url: "",
				isNewTab: false,
				resolveFn: null
			});
			const showConfirm = (title, url) => {
				return new Promise((resolve) => {
					Object.assign(modalState, {
						title,
						url,
						visible: true,
						resolveFn: resolve
					});
				});
			};
			const resolveAndClose = (confirmed) => {
				modalState.resolveFn?.(confirmed);
				modalState.visible = false;
				modalState.resolveFn = null;
			};
			const handleConfirm = () => resolveAndClose(true);
			const handleCancel = () => resolveAndClose(false);
			const triggerNavigation = (action) => {
				isExecutingNavigation = true;
				if (navigationTimer) clearTimeout(navigationTimer);
				navigationTimer = window.setTimeout(() => {
					isExecutingNavigation = false;
				}, 50);
				action();
			};
			const handleLinkClick = async (e) => {
				const link = e.target?.closest("a");
				if (!link?.href || link.href.startsWith("#") || link.href.startsWith("javascript:")) return;
				if (e.ctrlKey || e.metaKey) return;
				e.preventDefault();
				if (await showConfirm("确认跳转", link.href)) triggerNavigation(() => {
					modalState.isNewTab ? window.open(link.href, "_blank") : window.location.href = link.href;
				});
			};
			const handleFormSubmit = async (e) => {
				e.preventDefault();
				const form = e.target;
				if (!form) return;
				if (await showConfirm("确认提交表单", form.action || window.location.href)) triggerNavigation(() => {
					if (modalState.isNewTab) form.target = "_blank";
					form.submit();
				});
			};
			const handleBeforeUnload = (e) => {
				if (isExecutingNavigation) return;
				e.preventDefault();
			};
			(0, vue.onMounted)(() => {
				document.addEventListener("click", handleLinkClick, true);
				document.addEventListener("submit", handleFormSubmit, true);
				window.addEventListener("beforeunload", handleBeforeUnload);
			});
			(0, vue.onUnmounted)(() => {
				document.removeEventListener("click", handleLinkClick, true);
				document.removeEventListener("submit", handleFormSubmit, true);
				window.removeEventListener("beforeunload", handleBeforeUnload);
				if (navigationTimer) clearTimeout(navigationTimer);
			});
			return (_ctx, _cache) => {
				return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_1$3, [(0, vue.createVNode)((0, vue.unref)(ant_design_vue.Modal), {
					open: modalState.visible,
					"onUpdate:open": _cache[1] || (_cache[1] = ($event) => modalState.visible = $event),
					centered: true,
					"z-index": (0, vue.unref)(UI_LAYERS).activePlugin,
					title: modalState.title,
					"ok-text": "确认",
					"cancel-text": "取消",
					onOk: handleConfirm,
					onCancel: handleCancel,
					onKeydown: (0, vue.withKeys)((0, vue.withModifiers)(handleConfirm, ["prevent"]), ["enter"])
				}, {
					default: (0, vue.withCtx)(() => [(0, vue.createElementVNode)("div", _hoisted_2$3, [
						_cache[2] || (_cache[2] = (0, vue.createTextVNode)(" 即将离开当前页面前往：", -1)),
						_cache[3] || (_cache[3] = (0, vue.createElementVNode)("br", null, null, -1)),
						(0, vue.createElementVNode)("strong", null, (0, vue.toDisplayString)(modalState.url), 1)
					]), (0, vue.createElementVNode)("div", _hoisted_3$2, [(0, vue.createVNode)((0, vue.unref)(ant_design_vue.Checkbox), {
						checked: modalState.isNewTab,
						"onUpdate:checked": _cache[0] || (_cache[0] = ($event) => modalState.isNewTab = $event)
					}, {
						default: (0, vue.withCtx)(() => [..._cache[4] || (_cache[4] = [(0, vue.createTextVNode)(" 新标签页打开 ", -1)])]),
						_: 1
					}, 8, ["checked"])])]),
					_: 1
				}, 8, [
					"open",
					"z-index",
					"title",
					"onKeydown"
				])]);
			};
		}
	}), [["__scopeId", "data-v-721985c9"]]);
	var config_exports = __exportAll({ default: () => plugin });
	var plugin = {
		id: "jx-nav-blocker",
		name: "JX - 页面跳转拦截器",
		description: "用于拦截和控制页面导航行为。",
		version: "26.11.6",
		releaseNotes: "初始版本。",
		component: (0, vue.markRaw)(jxNavBlocker_default),
		config: {
			isEnable: false,
			env: { contexts: { top: { include: ["*"] } } },
			ui: {
				title: "页面跳转拦截器",
				icon: "🧭",
				showInHost: true,
				currentLayout: "none",
				rememberPosition: true,
				layout: {
					dialog: {
						draggable: true,
						showModal: false,
						defaultCollapsed: true,
						style: {
							width: "600px",
							height: "480px",
							maxWidth: "1200px",
							maxHeight: "900px"
						}
					},
					drawer: {
						placement: "right",
						showModal: false,
						defaultCollapsed: true,
						style: {
							width: "600px",
							height: "480px",
							maxWidth: "1200px",
							maxHeight: "900px"
						}
					}
				}
			}
		}
	};
	var modules = Object.assign({
		"../plugins/example/config.ts": config_exports$3,
		"../plugins/example2/config.ts": config_exports$2,
		"../plugins/jxConsentInspector/config.ts": config_exports$1,
		"../plugins/jxNavBlocker/config.ts": config_exports
	});
	function discoverPlugins() {
		const manifests = Object.values(modules).map((module) => module.default);
		const ids = new Set();
		for (const manifest of manifests) {
			if (ids.has(manifest.id)) throw new Error(`Duplicate plugin id: ${manifest.id}`);
			ids.add(manifest.id);
		}
		return manifests;
	}
	function schedulePlugins(manifests, dependencies) {
		const env = dependencies.getEnvironment();
		return manifests.map((manifest) => {
			const entry = {
				manifest,
				isEnable: true,
				isMatched: false,
				matchReason: [],
				isRunning: false
			};
			const config = dependencies.getPluginConfig(manifest);
			const result = evaluateMatch(config.env, env);
			entry.isMatched = result.matched;
			entry.matchReason = result.reason;
			entry.isEnable = config.isEnable ?? true;
			entry.isRunning = entry.isEnable && entry.isMatched;
			return entry;
		});
	}
	function initializeCore(dependencies) {
		const entries = schedulePlugins(discoverPlugins(), dependencies);
		for (const entry of entries) {
			if (entry.isRunning) continue;
			try {
				console.debug(`[JX Work Assistant] skipped ${entry.manifest.id}`, {
					enabled: entry.isEnable,
					matched: entry.isMatched
				});
			} catch (error) {
				console.error("Plugin scheduling failed", error);
			}
		}
		return entries;
	}
	function usePointerDrag(options) {
		let active;
		let completedByDrag = false;
		function pointerdown(event) {
			if (!options.enabled()) return;
			const origin = options.origin(event);
			if (!origin) return;
			event.preventDefault();
			event.currentTarget.setPointerCapture(event.pointerId);
			active = {
				id: event.pointerId,
				x: event.clientX,
				y: event.clientY,
				origin,
				moved: false
			};
		}
		function pointermove(event) {
			if (!active || active.id !== event.pointerId) return;
			const dx = event.clientX - active.x;
			const dy = event.clientY - active.y;
			if (Math.abs(dx) + Math.abs(dy) > 3) active.moved = true;
			const bounds = options.bounds();
			options.onMove({
				left: Math.min(Math.max(0, active.origin.left + dx), Math.max(0, window.innerWidth - bounds.width)),
				top: Math.min(Math.max(0, active.origin.top + dy), Math.max(0, window.innerHeight - bounds.height))
			});
		}
		function pointerup(event) {
			if (!active || active.id !== event.pointerId) return;
			completedByDrag = active.moved;
			active = void 0;
			options.onEnd();
		}
		function consumeDraggedClick() {
			const wasDragged = completedByDrag;
			completedByDrag = false;
			return wasDragged;
		}
		return {
			pointerdown,
			pointermove,
			pointerup,
			pointercancel: pointerup,
			consumeDraggedClick
		};
	}
	var _hoisted_1$2 = { class: "main-title" };
	var _hoisted_2$2 = {
		key: 0,
		class: "custom-header"
	};
	var _hoisted_3$1 = {
		key: 1,
		class: "header-extra"
	};
	var Dialog_default = _plugin_vue_export_helper_default((0, vue.defineComponent)({
		__name: "Dialog",
		props: {
			pluginId: {},
			ui: {},
			collapsed: { type: Boolean },
			active: { type: Boolean }
		},
		emits: ["update:collapsed"],
		setup(__props, { emit: __emit }) {
			const props = __props;
			const emit = __emit;
			const saved = props.ui.rememberPosition ? getWindowState(props.pluginId) : {};
			const position = (0, vue.ref)(saved.position ?? {
				left: Math.max(16, (window.innerWidth - props.ui.width) / 2),
				top: 80
			});
			const modalStyle = (0, vue.computed)(() => ({
				position: "fixed",
				left: `${position.value.left}px`,
				top: `${position.value.top}px`,
				margin: 0
			}));
			(0, vue.watch)(() => props.collapsed, (collapsed) => {
				if (props.ui.rememberPosition) setWindowState(props.pluginId, {
					position: position.value,
					collapsed
				});
			});
			const drag = usePointerDrag({
				enabled: () => props.ui.draggable,
				origin: (event) => {
					if (event.target.closest("button, input, textarea, select, [data-no-drag]")) return;
					const rect = event.currentTarget.closest(".ant-modal")?.getBoundingClientRect() ?? event.currentTarget.getBoundingClientRect();
					return {
						left: rect.left,
						top: rect.top
					};
				},
				bounds: () => ({
					width: props.ui.width,
					height: (props.ui.height ?? 480) + 60
				}),
				onMove: (next) => {
					position.value = next;
				},
				onEnd: () => {
					if (props.ui.rememberPosition) setWindowState(props.pluginId, {
						position: position.value,
						collapsed: props.collapsed
					});
				}
			});
			function startHeaderDrag(event) {
				drag.pointerdown(event);
			}
			function minimize() {
				emit("update:collapsed", true);
			}
			return (_ctx, _cache) => {
				return (0, vue.openBlock)(), (0, vue.createBlock)((0, vue.unref)(ant_design_vue.Modal), {
					open: !props.collapsed,
					"get-container": (0, vue.unref)(getPopupContainer),
					"z-index": props.active ? (0, vue.unref)(UI_LAYERS).activePlugin : (0, vue.unref)(UI_LAYERS).plugin,
					footer: null,
					width: __props.ui.style.width || "600px",
					style: (0, vue.normalizeStyle)({
						...modalStyle.value,
						...__props.ui.style
					}),
					"body-style": {
						height: __props.ui.style.height || "480px",
						maxHeight: __props.ui.style.maxHeight,
						overflow: "auto"
					},
					closable: true,
					onCancel: minimize,
					"mask-closable": false,
					mask: __props.ui.showModal
				}, (0, vue.createSlots)({
					title: (0, vue.withCtx)(() => [(0, vue.createElementVNode)("div", {
						class: "dialog-title",
						onPointerdown: startHeaderDrag,
						onPointermove: _cache[0] || (_cache[0] = (...args) => (0, vue.unref)(drag).pointermove && (0, vue.unref)(drag).pointermove(...args)),
						onPointerup: _cache[1] || (_cache[1] = (...args) => (0, vue.unref)(drag).pointerup && (0, vue.unref)(drag).pointerup(...args)),
						onPointercancel: _cache[2] || (_cache[2] = (...args) => (0, vue.unref)(drag).pointercancel && (0, vue.unref)(drag).pointercancel(...args))
					}, [
						(0, vue.createElementVNode)("div", _hoisted_1$2, [(0, vue.createVNode)(PluginIcon_default, {
							class: "plugin-icon",
							config: __props.ui
						}, null, 8, ["config"]), (0, vue.createElementVNode)("span", null, (0, vue.toDisplayString)(__props.ui.title), 1)]),
						_ctx.$slots.header ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_2$2, [(0, vue.renderSlot)(_ctx.$slots, "header", {}, void 0, true)])) : (0, vue.createCommentVNode)("", true),
						_ctx.$slots.extra ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_3$1, [(0, vue.renderSlot)(_ctx.$slots, "extra", {}, void 0, true)])) : (0, vue.createCommentVNode)("", true)
					], 32)]),
					default: (0, vue.withCtx)(() => [(0, vue.renderSlot)(_ctx.$slots, "default", {}, void 0, true)]),
					_: 2
				}, [_ctx.$slots.footer ? {
					name: "footer",
					fn: (0, vue.withCtx)(() => [(0, vue.renderSlot)(_ctx.$slots, "footer", {}, void 0, true)]),
					key: "0"
				} : void 0]), 1032, [
					"open",
					"get-container",
					"z-index",
					"width",
					"style",
					"body-style",
					"mask"
				]);
			};
		}
	}), [["__scopeId", "data-v-c651460e"]]);
	var _hoisted_1$1 = { class: "drawer-title" };
	var _hoisted_2$1 = { class: "main-title" };
	var _hoisted_3 = {
		key: 0,
		class: "custom-header"
	};
	var _hoisted_4 = {
		key: 1,
		class: "header-extra"
	};
	var Drawer_default = _plugin_vue_export_helper_default((0, vue.defineComponent)({
		__name: "Drawer",
		props: {
			pluginId: {},
			ui: {},
			collapsed: { type: Boolean },
			active: { type: Boolean }
		},
		emits: ["update:collapsed"],
		setup(__props, { emit: __emit }) {
			const props = __props;
			const emit = __emit;
			(0, vue.watch)(() => props.collapsed, (collapsed) => {
				if (props.ui.rememberPosition) setWindowState(props.pluginId, { collapsed });
			});
			function minimize() {
				emit("update:collapsed", true);
			}
			return (_ctx, _cache) => {
				return (0, vue.openBlock)(), (0, vue.createBlock)((0, vue.unref)(ant_design_vue.Drawer), {
					open: !props.collapsed,
					"get-container": (0, vue.unref)(getPopupContainer),
					"z-index": props.active ? (0, vue.unref)(UI_LAYERS).activePlugin : (0, vue.unref)(UI_LAYERS).plugin,
					placement: __props.ui.placement,
					width: __props.ui.style.width || "400px",
					height: __props.ui.style.height,
					closable: true,
					onClose: minimize,
					"mask-closable": true,
					mask: __props.ui.showModal,
					"content-wrapper-style": __props.ui.style
				}, (0, vue.createSlots)({
					title: (0, vue.withCtx)(() => [(0, vue.createElementVNode)("div", _hoisted_1$1, [
						(0, vue.createElementVNode)("div", _hoisted_2$1, [(0, vue.createVNode)(PluginIcon_default, {
							class: "plugin-icon",
							config: __props.ui
						}, null, 8, ["config"]), (0, vue.createElementVNode)("span", null, (0, vue.toDisplayString)(__props.ui.title), 1)]),
						_ctx.$slots.header ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_3, [(0, vue.renderSlot)(_ctx.$slots, "header", {}, void 0, true)])) : (0, vue.createCommentVNode)("", true),
						_ctx.$slots.extra ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_4, [(0, vue.renderSlot)(_ctx.$slots, "extra", {}, void 0, true)])) : (0, vue.createCommentVNode)("", true)
					])]),
					default: (0, vue.withCtx)(() => [(0, vue.renderSlot)(_ctx.$slots, "default", {}, void 0, true)]),
					_: 2
				}, [_ctx.$slots.footer ? {
					name: "footer",
					fn: (0, vue.withCtx)(() => [(0, vue.renderSlot)(_ctx.$slots, "footer", {}, void 0, true)]),
					key: "0"
				} : void 0]), 1032, [
					"open",
					"get-container",
					"z-index",
					"placement",
					"width",
					"height",
					"mask",
					"content-wrapper-style"
				]);
			};
		}
	}), [["__scopeId", "data-v-1f830925"]]);
	var _hoisted_1 = { class: "jx-assistant-root" };
	var _hoisted_2 = ["plugin-id"];
	var App_default = (0, vue.defineComponent)({
		__name: "App",
		setup(__props) {
			const isDev = false;
			ant_design_vue.message.config({
				getContainer: () => getPopupContainer(),
				top: "24px"
			});
			const MessageContext = (0, vue.defineComponent)({
				name: "MessageContext",
				setup() {
					const [contextMessage, holder] = ant_design_vue.message.useMessage();
					Object.assign(ant_design_vue.message, contextMessage);
					return holder;
				}
			});
			function pluginUI(entry) {
				return getActivePluginUI(entry.manifest);
			}
			const hostOpen = (0, vue.ref)(false);
			const entries = (0, vue.ref)([]);
			const failedPlugins = new Set();
			const collapsedPlugins = (0, vue.ref)({});
			const activePluginId = (0, vue.ref)("");
			function openPlugin(id) {
				collapsedPlugins.value[id] = false;
				activePluginId.value = id;
			}
			function setPluginCollapsed(id, collapsed) {
				collapsedPlugins.value[id] = collapsed;
			}
			(0, vue.onMounted)(() => {
				entries.value = initializeCore({
					getEnvironment,
					getPluginConfig
				});
				for (const entry of entries.value) {
					const ui = pluginUI(entry);
					const saved = ui.rememberPosition ? getWindowState(entry.manifest.id) : {};
					collapsedPlugins.value[entry.manifest.id] = saved.collapsed ?? ui.defaultCollapsed;
				}
				_GM_registerMenuCommand(`打开插件配置中心`, () => {
					hostOpen.value = true;
				});
			});
			(0, vue.onErrorCaptured)((error, instance) => {
				let current = instance;
				let plugin;
				while (current && !plugin) {
					plugin = entries.value.find((entry) => entry.isRunning && current?.$options.name === entry.manifest.id);
					current = current.$parent;
				}
				if (plugin) {
					failedPlugins.add(plugin.manifest.id);
					plugin.isRunning = false;
				}
				console.error("[JX Work Assistant] isolated plugin error", error);
				return false;
			});
			return (_ctx, _cache) => {
				return (0, vue.openBlock)(), (0, vue.createBlock)((0, vue.unref)(ant_design_vue.StyleProvider), { container: (0, vue.unref)(isDev) ? void 0 : (0, vue.unref)(getShadowRoot)() }, {
					default: (0, vue.withCtx)(() => [(0, vue.createVNode)((0, vue.unref)(ant_design_vue.ConfigProvider), {
						"get-popup-container": (0, vue.unref)(getPopupContainer),
						theme: { token: {
							colorPrimary: "#111111",
							borderRadius: 8,
							fontFamily: "Inter, system-ui, sans-serif"
						} }
					}, {
						default: (0, vue.withCtx)(() => [(0, vue.createVNode)((0, vue.unref)(MessageContext)), (0, vue.createElementVNode)("div", _hoisted_1, [
							!hostOpen.value ? ((0, vue.openBlock)(), (0, vue.createBlock)(FloatingBall_default, {
								key: 0,
								onClick: _cache[0] || (_cache[0] = ($event) => hostOpen.value = true),
								"host-config": (0, vue.unref)(HOST_CONFIG),
								plugins: entries.value.map((entry) => ({
									id: entry.manifest.id,
									name: pluginUI(entry).title || entry.manifest.name,
									icon: pluginUI(entry).icon,
									disabled: !entry.isRunning || !entry.isEnable || pluginUI(entry).layout === "none"
								})),
								onActivatePlugin: openPlugin
							}, null, 8, ["host-config", "plugins"])) : (0, vue.createCommentVNode)("", true),
							(0, vue.createVNode)(host_default, {
								open: hostOpen.value,
								"onUpdate:open": _cache[1] || (_cache[1] = ($event) => hostOpen.value = $event),
								entries: entries.value,
								onOpenPlugin: openPlugin
							}, null, 8, ["open", "entries"]),
							((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(entries.value.filter((item) => item.isRunning && !(0, vue.unref)(failedPlugins).has(item.manifest.id)), (entry) => {
								return (0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, { key: entry.manifest.id }, [pluginUI(entry).layout === "dialog" ? ((0, vue.openBlock)(), (0, vue.createBlock)(Dialog_default, {
									key: 0,
									"plugin-id": entry.manifest.id,
									ui: pluginUI(entry),
									collapsed: collapsedPlugins.value[entry.manifest.id] ?? false,
									active: activePluginId.value === entry.manifest.id,
									"onUpdate:collapsed": ($event) => setPluginCollapsed(entry.manifest.id, $event)
								}, {
									default: (0, vue.withCtx)(() => [((0, vue.openBlock)(), (0, vue.createBlock)((0, vue.resolveDynamicComponent)(entry.manifest.component)))]),
									_: 2
								}, 1032, [
									"plugin-id",
									"ui",
									"collapsed",
									"active",
									"onUpdate:collapsed"
								])) : pluginUI(entry).layout === "drawer" ? ((0, vue.openBlock)(), (0, vue.createBlock)(Drawer_default, {
									key: 1,
									"plugin-id": entry.manifest.id,
									ui: pluginUI(entry),
									collapsed: collapsedPlugins.value[entry.manifest.id] ?? false,
									active: activePluginId.value === entry.manifest.id,
									"onUpdate:collapsed": ($event) => setPluginCollapsed(entry.manifest.id, $event)
								}, {
									default: (0, vue.withCtx)(() => [((0, vue.openBlock)(), (0, vue.createBlock)((0, vue.resolveDynamicComponent)(entry.manifest.component)))]),
									_: 2
								}, 1032, [
									"plugin-id",
									"ui",
									"collapsed",
									"active",
									"onUpdate:collapsed"
								])) : ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", {
									key: 2,
									style: { "display": "none" },
									"plugin-id": entry.manifest.id
								}, [((0, vue.openBlock)(), (0, vue.createBlock)((0, vue.resolveDynamicComponent)(entry.manifest.component)))], 8, _hoisted_2))], 64);
							}), 128))
						])]),
						_: 1
					}, 8, ["get-popup-container"])]),
					_: 1
				}, 8, ["container"]);
			};
		}
	});
	var host = document.querySelector("#jx-work-assistant") ?? document.createElement("div");
	host.id = "jx-work-assistant";
	host.innerHTML = "<i hidden></i>";
	host.style.setProperty("--jx-root-z-index", String(UI_LAYERS.root));
	host.style.setProperty("--jx-floating-z-index", String(UI_LAYERS.floatingBall));
	host.style.setProperty("--jx-floating-list-z-index", String(UI_LAYERS.floatingList));
	host.style.setProperty("--jx-overlay-z-index", String(UI_LAYERS.overlay));
	if (!host.isConnected) (document.body ?? document.documentElement).append(host);
	var envConfig = (() => {
		const shadowRoot = host.shadowRoot ?? host.attachShadow({ mode: "open" });
		return {
			appRootId: "jx-app-root",
			popupRootId: "jx-popup-root",
			styleTarget: shadowRoot,
			renderTarget: shadowRoot
		};
	})();
	var style = document.createElement("style");
	style.textContent = style_default;
	envConfig.styleTarget.append(style);
	var appRoot = document.createElement("div");
	appRoot.id = envConfig.appRootId;
	var popupRoot = document.createElement("div");
	popupRoot.id = envConfig.popupRootId;
	envConfig.renderTarget.append(appRoot, popupRoot);
	(0, vue.createApp)(App_default).mount(appRoot);
})(Vue, antd);
