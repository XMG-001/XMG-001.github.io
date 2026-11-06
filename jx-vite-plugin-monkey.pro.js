// ==UserScript==
// @name       jx-vite-plugin-monkey
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
// @grant      GM_addStyle
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
		((c) => {
			if (typeof GM_addStyle === "function") GM_addStyle(c);
			else (document.head || document.documentElement).appendChild(document.createElement("style")).append(c);
		})(t);
	};
	_css(" .url-rule-editor[data-v-ec03e8d3]{gap:8px;margin-top:8px;display:grid}label[data-v-ec03e8d3]{color:#374151;gap:4px;font-size:11px;font-weight:500;display:grid}.tip-text[data-v-ec03e8d3]{color:#9ca3af;font-size:10px;font-weight:400}.modern-textarea[data-v-ec03e8d3]{border-radius:6px;font-size:12px}.section-title[data-v-aa3837de]{color:#374151;border-top:1px solid #f0f0f2;margin:18px 0 10px;padding-top:12px;font-size:13px;font-weight:600}.config-grid[data-v-aa3837de]{grid-template-columns:1fr 1fr;gap:10px 12px;display:grid}.wide[data-v-aa3837de]{grid-column:1/-1}label[data-v-aa3837de]{color:#6b7280;flex-direction:column;gap:5px;font-size:11px;display:flex}.config-grid[data-v-aa3837de] .ant-input-number,.config-grid[data-v-aa3837de] .ant-input,.config-grid[data-v-aa3837de] .ant-select{width:100%}.switch-grid[data-v-aa3837de]{grid-template-columns:1fr 1fr;gap:8px;display:grid}.switch-grid label[data-v-aa3837de]{color:#374151;background:#fafbfc;border:1px solid #eef0f2;border-radius:7px;flex-direction:row;justify-content:space-between;align-items:center;padding:9px 10px}.section-title[data-v-addb7241]{color:#374151;border-top:1px solid #f0f0f2;margin:18px 0 10px;padding-top:12px;font-size:13px;font-weight:600}.business-fields[data-v-addb7241]{flex-direction:column;gap:7px;display:flex}.business-field[data-v-addb7241]{color:#4b5563;background:#fafbfc;border:1px solid #eef0f2;border-radius:7px;flex-direction:column;gap:6px;padding:9px 10px;font-size:11px;font-weight:500;display:flex}.business-field[data-v-addb7241] .ant-input-number,.business-field[data-v-addb7241] .ant-input{width:100%}.update-manager[data-v-cbb4ed5d]{display:inline-flex}.trigger-entry[data-v-cbb4ed5d]{color:#525252;cursor:pointer;-webkit-user-select:none;user-select:none;background:#fff;border:1px solid #e5e5e5;border-radius:99px;align-items:center;gap:3px;padding:1px 8px;font-size:11px;font-weight:500;transition:all .2s cubic-bezier(.4,0,.2,1);display:flex}.trigger-entry[data-v-cbb4ed5d]:hover{color:#171717;border-color:#171717}.status-dot[data-v-cbb4ed5d]{background:#a3a3a3;border-radius:50%;width:3px;height:3px;transition:background .2s}.trigger-entry.has-update[data-v-cbb4ed5d]{color:#fff;background:#171717;border-color:#171717}.trigger-entry.has-update .status-dot[data-v-cbb4ed5d]{background:#fff;box-shadow:0 0 6px #fff9}.popover-panel[data-v-cbb4ed5d]{color:#171717;width:210px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:12px}.panel-header[data-v-cbb4ed5d]{border-bottom:1px solid #f4f4f5;justify-content:space-between;align-items:center;margin-bottom:4px;padding-bottom:8px;display:flex}.panel-title[data-v-cbb4ed5d]{letter-spacing:-.01em;font-size:12px;font-weight:600}.icon-refresh[data-v-cbb4ed5d]{cursor:pointer;color:#a3a3a3;background:0 0;border:none;padding:2px;font-size:13px;line-height:1;transition:color .15s}.icon-refresh[data-v-cbb4ed5d]:hover{color:#171717}.icon-refresh.spinning[data-v-cbb4ed5d]{animation:.8s linear infinite spin-cbb4ed5d}.panel-empty[data-v-cbb4ed5d]{text-align:center;padding:12px 0 6px}.status-text[data-v-cbb4ed5d]{color:#737373;margin:0;font-size:11px}.version-tag[data-v-cbb4ed5d]{color:#a3a3a3;margin-top:4px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:10px;display:inline-block}.panel-body[data-v-cbb4ed5d]{padding-top:2px}.update-item[data-v-cbb4ed5d]{border-bottom:1px solid #fafafa;padding:6px 0}.update-item[data-v-cbb4ed5d]:last-child{border-bottom:none}.item-head[data-v-cbb4ed5d]{justify-content:space-between;align-items:center;gap:8px;display:flex}.item-head .name[data-v-cbb4ed5d]{color:#171717;font-weight:500}.ver-change[data-v-cbb4ed5d]{color:#737373;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:10px}.notes[data-v-cbb4ed5d]{color:#737373;white-space:pre-wrap;margin:3px 0 0;font-size:11px;line-height:1.4}.update-btn[data-v-cbb4ed5d]{color:#fff;letter-spacing:.02em;background:#171717;border-radius:6px;justify-content:center;align-items:center;margin-top:10px;padding:6px 0;font-size:11px;font-weight:500;text-decoration:none;transition:background .15s;display:flex}.update-btn[data-v-cbb4ed5d]:hover{color:#fff;background:#333}@keyframes spin-cbb4ed5d{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.monochrome-popover .ant-popover-inner{border:1px solid #e5e5e5;border-radius:8px;padding:10px 12px;box-shadow:0 10px 15px -3px #0000000d,0 4px 6px -4px #0000000d}.plugin-icon[data-v-807a1c8c]{vertical-align:middle;flex:none;justify-content:center;align-items:center;width:1em;height:1em;line-height:1;display:inline-flex}img[data-v-807a1c8c]{object-fit:contain;width:100%;height:100%;display:block}.modern-host-drawer[data-v-3101e1ae]{--primary-color:#1677ff;--text-main:#1f2329;--text-regular:#4e5969;--text-muted:#86909c;--bg-page:#f7f8fa;--bg-card:#fff;--bg-subtle:#f2f3f5;--border-color:#e5e6eb;--radius-base:8px;--transition-fast:all .2s cubic-bezier(.4, 0, .2, 1)}.drawer-header[data-v-3101e1ae]{justify-content:space-between;align-items:center;width:100%;display:flex}.drawer-title-group[data-v-3101e1ae]{align-items:center;gap:8px;display:flex}.main-title[data-v-3101e1ae]{color:var(--text-main,#1f2329);letter-spacing:-.2px;font-size:15px;font-weight:600}.status-badge[data-v-3101e1ae]{border-radius:10px;padding:2px 8px;font-size:11px;font-weight:500;line-height:1.2}.status-badge.warning[data-v-3101e1ae]{color:#d97706;background-color:#fef3c7}.icon-btn-close[data-v-3101e1ae]{width:28px;height:28px;color:var(--text-muted,#86909c);cursor:pointer;transition:var(--transition-fast,all .2s);background:0 0;border:none;border-radius:6px;justify-content:center;align-items:center;display:inline-flex}.icon-btn-close[data-v-3101e1ae]:hover{background-color:var(--bg-subtle,#f2f3f5);color:var(--text-main,#1f2329)}.list-summary-bar[data-v-3101e1ae]{justify-content:space-between;align-items:center;margin-bottom:12px;padding:0 2px;display:flex}.count-text[data-v-3101e1ae]{color:var(--text-muted,#86909c);font-size:12px}.toggle-hidden-btn[data-v-3101e1ae]{padding:0;font-size:12px}.plugin-list[data-v-3101e1ae]{flex-direction:column;gap:10px;display:flex}.plugin-card[data-v-3101e1ae]{background:var(--bg-card,#fff);border:1px solid var(--border-color,#e5e6eb);border-radius:var(--radius-base,8px);transition:var(--transition-fast,all .2s);padding:12px}.plugin-card[data-v-3101e1ae]:hover{border-color:#c9cdd4;box-shadow:0 4px 12px #00000008}.plugin-card.is-disabled[data-v-3101e1ae]{opacity:.6}.plugin-summary[data-v-3101e1ae]{cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;gap:10px;display:flex}.expand-icon-btn[data-v-3101e1ae]{background:var(--bg-subtle,#f2f3f5);width:20px;height:20px;color:var(--text-regular,#4e5969);cursor:pointer;border:none;border-radius:4px;justify-content:center;align-items:center;padding:0;transition:transform .2s,background .2s;display:flex}.expand-icon-btn.expanded[data-v-3101e1ae]{transform:rotate(90deg)}.expand-icon-btn[data-v-3101e1ae]:hover{background-color:#e5e6eb}.plugin-icon[data-v-3101e1ae]{justify-content:center;align-items:center;font-size:18px;line-height:1;display:flex}.summary-info[data-v-3101e1ae]{flex:1;min-width:0}.plugin-name[data-v-3101e1ae]{color:var(--text-main,#1f2329);margin-right:6px;font-size:13px;font-weight:600;line-height:1.3}.plugin-desc[data-v-3101e1ae]{color:var(--text-muted,#86909c);white-space:nowrap;text-overflow:ellipsis;margin:2px 0 0;font-size:12px;overflow:hidden}.version-tag[data-v-3101e1ae]{color:#4b5563;background-color:#f3f4f6;border-radius:9999px;align-items:center;padding:2px 8px;font-family:monospace;font-size:12px;font-weight:500;line-height:1;display:inline-flex}.switch-wrapper[data-v-3101e1ae]{align-items:center;display:flex}.plugin-details[data-v-3101e1ae]{border-top:1px solid var(--border-color,#e5e6eb);margin-top:12px;padding-top:12px}.plugin-meta-bar[data-v-3101e1ae]{align-items:center;gap:6px;margin-bottom:10px;display:flex}.custom-tag[data-v-3101e1ae]{border-radius:4px;margin-right:0;font-size:11px}.open-plugin-btn[data-v-3101e1ae]{height:auto;margin-left:auto;padding:0;font-size:12px}.runtime-alert[data-v-3101e1ae]{color:var(--text-regular,#4e5969);background:var(--bg-subtle,#f2f3f5);border-radius:6px;margin-bottom:12px;padding:6px 10px;font-size:11px;line-height:1.4}.section-divider[data-v-3101e1ae]{color:var(--text-muted,#86909c);text-transform:uppercase;letter-spacing:.5px;align-items:center;margin:14px 0 8px;font-size:11px;font-weight:600;display:flex}.section-divider[data-v-3101e1ae]:after{content:\"\";background-color:var(--border-color,#e5e6eb);flex:1;height:1px;margin-left:8px}.match-context-card[data-v-3101e1ae]{border:1px solid var(--border-color,#e5e6eb);background:#fafafa;border-radius:6px;margin-bottom:8px;padding:10px}.context-header[data-v-3101e1ae]{justify-content:space-between;align-items:center;margin-bottom:8px;display:flex}.context-title[data-v-3101e1ae]{align-items:center;gap:8px;font-size:12px;display:flex}.context-title strong[data-v-3101e1ae]{color:var(--text-main,#1f2329)}.context-hint[data-v-3101e1ae]{color:var(--text-muted,#86909c);font-size:11px}.match-preview-result[data-v-3101e1ae]{align-items:center;gap:6px;margin-top:8px;font-size:11px;display:flex}.reason-text[data-v-3101e1ae]{color:var(--text-regular,#4e5969)}.context-disabled-tip[data-v-3101e1ae]{color:var(--text-muted,#86909c);font-size:11px}.drawer-footer-content[data-v-3101e1ae]{justify-content:space-between;align-items:center;width:100%;display:flex}.status-indicator[data-v-3101e1ae]{align-items:center;gap:6px;font-size:12px;display:flex}.status-dot[data-v-3101e1ae]{border-radius:50%;width:6px;height:6px}.status-dot.warning[data-v-3101e1ae]{background-color:#f59e0b}.status-dot.success[data-v-3101e1ae]{background-color:#10b981}.pending-text[data-v-3101e1ae]{color:#d97706}.saved-text[data-v-3101e1ae]{color:var(--text-muted,#86909c)}.footer-actions[data-v-3101e1ae]{gap:8px;display:flex}.btn-secondary[data-v-3101e1ae],.btn-primary[data-v-3101e1ae]{border-radius:6px;font-size:12px}.jx-fab-container[data-v-62d89bf2]{--fab-size:36px;--fab-radius-dock-right:50% 0 0 50%;--fab-radius-dock-left:0 50% 50% 0;--fab-radius-dragging:50%;z-index:var(--jx-floating-z-index,2147480000);width:var(--fab-size);height:var(--fab-size);cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none;position:fixed}.jx-fab-container.is-dragging[data-v-62d89bf2]{cursor:grabbing}.jx-fab-backdrop[data-v-62d89bf2]{-webkit-backdrop-filter:blur(14px);background:#ffffffa6;transition:border-radius .3s cubic-bezier(.16,1,.3,1),background .2s;position:absolute;inset:0;overflow:hidden;box-shadow:0 2px 16px #0000001f}.jx-fab-container.side-right:not(.is-dragging) .jx-fab-backdrop[data-v-62d89bf2]{border-radius:var(--fab-radius-dock-right)}.jx-fab-container.side-left:not(.is-dragging) .jx-fab-backdrop[data-v-62d89bf2]{border-radius:var(--fab-radius-dock-left)}.jx-fab-container.is-dragging .jx-fab-backdrop[data-v-62d89bf2],.jx-fab-container:hover:not(.is-dragging) .jx-fab-backdrop[data-v-62d89bf2]{border-radius:var(--fab-radius-dragging);background:#ffffffd9}.jx-fab-content[data-v-62d89bf2]{color:#111;pointer-events:none;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%;display:flex}.jx-fab-icon[data-v-62d89bf2]{width:12px;height:12px}.jx-fab-text[data-v-62d89bf2]{letter-spacing:-.5px;font-size:10px;font-weight:800}.jx-recall-list[data-v-62d89bf2]{z-index:var(--jx-floating-list-z-index,2147480000);opacity:0;visibility:hidden;-webkit-backdrop-filter:blur(16px);background:#fffc;border-radius:12px;flex-direction:column;justify-content:center;align-items:center;gap:8px;width:36px;max-height:calc(100vh - 16px);transition:opacity .2s cubic-bezier(.16,1,.3,1),visibility .2s cubic-bezier(.16,1,.3,1),transform .2s cubic-bezier(.16,1,.3,1);display:flex;position:fixed;overflow:auto;transform:scale(.95);box-shadow:0 10px 30px -5px #0000001a,0 4px 12px -2px #0000000d}.jx-recall-list[data-v-62d89bf2]::-webkit-scrollbar{width:4px}.jx-recall-list[data-v-62d89bf2]::-webkit-scrollbar-thumb{background:#00000026;border-radius:4px}.jx-fab-container:hover~.jx-recall-list[data-v-62d89bf2],.jx-recall-list[data-v-62d89bf2]:hover{opacity:1;visibility:visible;transform:scale(1)}.jx-recall-item[data-v-62d89bf2]{color:#262626;cursor:pointer;width:32px;height:32px;font:inherit;background:0 0;border:1px solid #0000;border-radius:10px;justify-content:center;align-items:center;padding:0;transition:all .2s cubic-bezier(.16,1,.3,1);display:flex;position:relative}.jx-recall-icon[data-v-62d89bf2]{justify-content:center;align-items:center;font-size:16px;line-height:1;transition:transform .2s;display:flex}.jx-recall-item[data-v-62d89bf2]:hover:not(:disabled){background:#ffffffe6;border-color:#0000000f;transform:translateY(-1px);box-shadow:0 4px 12px #00000014}.jx-recall-item:hover:not(:disabled) .jx-recall-icon[data-v-62d89bf2]{transform:scale(1.1)}.jx-recall-item[data-v-62d89bf2]:active:not(:disabled){transform:translateY(0)scale(.96)}.jx-recall-item[data-v-62d89bf2]:disabled{opacity:.4;cursor:not-allowed}@media (prefers-color-scheme:dark){.jx-recall-list[data-v-62d89bf2]{background:#1e1e1ecc;border:1px solid #ffffff14;box-shadow:0 10px 30px -5px #0006}.jx-recall-list[data-v-62d89bf2]::-webkit-scrollbar-thumb{background:#fff3}.jx-recall-item[data-v-62d89bf2]{color:#f3f4f6}.jx-recall-item[data-v-62d89bf2]:hover:not(:disabled){background:#ffffff1a;border-color:#ffffff14}.jx-fab-backdrop[data-v-62d89bf2]{background:#1a1a1aa6}.jx-fab-container.is-dragging .jx-fab-backdrop[data-v-62d89bf2],.jx-fab-container:hover:not(.is-dragging) .jx-fab-backdrop[data-v-62d89bf2]{background:#262626d9}.jx-fab-content[data-v-62d89bf2]{color:#f3f4f6}}.example-plugin p[data-v-bada61c7],.example-plugin p[data-v-8df22ec7]{color:#555;margin:0 0 14px}.split-layout[data-v-03f784d7]{gap:16px;width:100%;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;display:flex;line-height:1.2!important}.col[data-v-03f784d7]{box-sizing:border-box;background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;flex-direction:column;flex:1;gap:12px;min-width:0;padding:12px;display:flex}.col-header[data-v-03f784d7]{color:#374151;border-bottom:1px solid #e5e7eb;justify-content:space-between;align-items:center;padding-bottom:8px;font-size:13px;font-weight:700;display:flex}.col-header img[data-v-03f784d7]{vertical-align:middle;margin-right:6px}.control-box[data-v-03f784d7]{background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:10px}.split-control[data-v-03f784d7]{gap:12px;display:flex}.split-left[data-v-03f784d7]{flex-direction:column;flex:1;justify-content:space-between;display:flex}.split-right[data-v-03f784d7]{border-left:1px dashed #e5e7eb;flex-direction:column;flex:.9;padding-left:12px;display:flex}.current-consent-title[data-v-03f784d7]{color:#6b7280;margin-bottom:6px;font-size:11px;font-weight:700}.current-consent-item[data-v-03f784d7]{justify-content:space-between;align-items:center;margin-bottom:2px;font-size:11px;display:flex}.chk-grid[data-v-03f784d7]{grid-template-columns:repeat(2,1fr);gap:6px;margin-bottom:10px;display:grid}.chk-grid label[data-v-03f784d7]{color:#4b5563;cursor:pointer;align-items:center;gap:4px;font-size:12px;font-weight:500;display:flex}.chk-grid input[data-v-03f784d7]{accent-color:#000;cursor:pointer;width:12px;height:12px;margin:0}.action-row[data-v-03f784d7]{gap:8px;display:flex}.global-stats[data-v-03f784d7]{color:#4b5563;background:#fff;border:1px solid #e5e7eb;border-radius:8px;gap:12px;padding:8px 10px;font-size:12px;font-weight:600;display:flex}.table-wrapper[data-v-03f784d7]{background:#fff;border:1px solid #e5e7eb;border-radius:6px;max-height:350px;overflow-y:auto}.table-wrapper[data-v-03f784d7]::-webkit-scrollbar{width:4px}.table-wrapper[data-v-03f784d7]::-webkit-scrollbar-thumb{background:#ccc;border-radius:2px}table[data-v-03f784d7]{border-collapse:collapse;table-layout:fixed;width:100%}thead[data-v-03f784d7]{z-index:2;background:#f3f4f6;position:sticky;top:0;box-shadow:0 1px #e5e7eb}th[data-v-03f784d7]{text-align:left;color:#666;padding:6px 8px;font-size:11px;font-weight:600}td[data-v-03f784d7]{vertical-align:top;word-break:break-all;border-top:1px solid #f3f4f6;padding:8px;font-size:12px}.inline-flex-box[data-v-03f784d7]{align-items:center;display:inline-flex}.inline-flex-box-column[data-v-03f784d7]{flex-direction:column;align-items:flex-start;display:inline-flex}.btn[data-v-03f784d7]{cursor:pointer;color:#333;background:#fff;border:1px solid #d2d5d8;border-radius:6px;padding:6px 12px;font-size:12px;font-weight:600;transition:all .2s}.btn[data-v-03f784d7]:hover{background:#f8f9fa;border-color:#b0b4b8}.btn[data-v-03f784d7]:disabled{opacity:.5;cursor:not-allowed}.sm-btn[data-v-03f784d7]{margin-left:4px;padding:2px 6px;font-size:11px}.btn-primary[data-v-03f784d7]{color:#fff;background:#000;border:none}.btn-primary[data-v-03f784d7]:hover{background:#333}.btn-google[data-v-03f784d7]{color:#fff;background:linear-gradient(135deg,#1a73e8,#7c3aed);border:none}.btn-google[data-v-03f784d7]:hover{background:linear-gradient(135deg,#1557b0,#6d28d9)}.badge[data-v-03f784d7]{text-transform:uppercase;border-radius:4px;padding:2px 4px;font-size:10px;font-weight:700;line-height:1;display:inline-block}.b-true[data-v-03f784d7]{color:#059669;background:#d1fae5}.b-false[data-v-03f784d7]{color:#dc2626;background:#fee2e2}.b-neu[data-v-03f784d7]{color:#4b5563;background:#f3f4f6}.b-purp[data-v-03f784d7]{color:#6b21a8;background:#f3e8ff}.b-blue[data-v-03f784d7]{color:#1e40af;background:#dbeafe}.mini-status[data-v-03f784d7]{border-bottom:1px dashed #eee;justify-content:space-between;margin-bottom:2px;padding-bottom:2px;font-size:11px;display:flex}.diff-item[data-v-03f784d7]{color:#374151;margin-bottom:4px;font-size:11px}details summary[data-v-03f784d7]{cursor:pointer;color:#2563eb;outline:none;font-size:10px;font-weight:600}pre[data-v-03f784d7]{color:#333;white-space:pre-wrap;background:#f4f6f8;border-radius:4px;max-height:100px;margin:4px 0 0;padding:6px;font-family:monospace;font-size:10px;overflow:auto}.jx-intercept-container[data-v-721985c9]{font-family:PingFang SC,Microsoft YaHei,sans-serif}.jx-modal-desc[data-v-721985c9]{color:#666;word-break:break-all;text-align:left;background:#f5f5f7;border-radius:8px;margin-top:8px;padding:12px;font-size:14px;line-height:1.6}.jx-modal-option[data-v-721985c9]{justify-content:flex-end;margin-top:12px;font-size:13px;display:flex}.dialog-title[data-v-be854003]{cursor:move;-webkit-user-select:none;user-select:none;touch-action:none;justify-content:space-between;align-items:center;gap:10px;display:flex}.main-title[data-v-be854003]{flex-shrink:0;align-items:center;gap:8px;display:flex}.custom-header[data-v-be854003]{flex:1;min-width:0}.header-extra[data-v-be854003]{align-items:center;gap:6px;display:flex}.plugin-icon[data-v-be854003]{font-size:18px}.drawer-title[data-v-92d662b3]{align-items:center;gap:10px;display:flex}.main-title[data-v-92d662b3]{flex-shrink:0;align-items:center;gap:8px;display:flex}.custom-header[data-v-92d662b3]{flex:1;min-width:0}.header-extra[data-v-92d662b3]{align-items:center;gap:6px;display:flex}.plugin-icon[data-v-92d662b3]{font-size:18px}.jx-assistant-root{color:#171717;font-family:Inter,system-ui,sans-serif}.jx-fab-container,.jx-recall-list{pointer-events:auto}\n/*$vite$:1*/ ");
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
	var style_default = ":host{all:initial!important;z-index:var(--jx-root-z-index,2147480000)!important;pointer-events:none!important;isolation:isolate!important;position:fixed!important;inset:0!important}#jx-app-root{all:initial;z-index:var(--jx-root-z-index,2147480000);isolation:isolate;pointer-events:none;color:#171717;font-synthesis:none;text-rendering:optimizelegibility;-webkit-font-smoothing:antialiased;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;font-size:14px;line-height:1.5;display:block;position:fixed;inset:0}#jx-app-root,#jx-app-root *,#jx-app-root :before,#jx-app-root :after{box-sizing:border-box}#jx-app-root .ant-message,#jx-app-root .ant-tooltip{pointer-events:none}#jx-app-root .ant-notification,#jx-app-root .ant-popover,#jx-app-root .ant-dropdown,#jx-app-root .ant-select-dropdown,#jx-app-root .ant-picker-dropdown,#jx-app-root .ant-cascader-dropdown,#jx-app-root .ant-tree-select-dropdown{pointer-events:auto}#jx-app-root .ant-message,#jx-app-root .ant-notification{z-index:var(--jx-overlay-z-index,2147480000)!important}";
	var _GM_getValue = (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
	var _GM_registerMenuCommand = (() => typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
	var _GM_setValue = (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
	var _hoisted_1$13 = { class: "url-rule-editor" };
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
				return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_1$13, [(0, vue.createElementVNode)("label", null, [_cache[2] || (_cache[2] = (0, vue.createElementVNode)("span", null, [(0, vue.createTextVNode)("Include "), (0, vue.createElementVNode)("small", { class: "tip-text" }, "（至少一行；`*` 匹配所有 URL，多条规则为任意命中）")], -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Input).TextArea, {
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
	var _hoisted_1$12 = { class: "config-grid" };
	var _hoisted_2$9 = { class: "wide" };
	var _hoisted_3$6 = { key: 0 };
	var _hoisted_4$4 = { key: 1 };
	var _hoisted_5$3 = {
		key: 2,
		class: "wide"
	};
	var _hoisted_6$3 = { class: "switch-grid" };
	var _hoisted_7$3 = {
		key: 0,
		title: "页面加载时将插件收起到快捷入口。"
	};
	var _hoisted_8$3 = {
		key: 1,
		title: "显示模态遮罩。"
	};
	var _hoisted_9$3 = {
		key: 2,
		title: "显示模态遮罩。"
	};
	var _hoisted_10$3 = {
		key: 3,
		title: "允许拖动 Dialog 窗口调整位置。"
	};
	var _hoisted_11$3 = { title: "记住窗口位置和折叠状态。" };
	var _hoisted_12$3 = { title: "在插件列表中显示此插件。" };
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
			const active = () => props.ui.layout[props.ui.currentUi];
			const activePlacement = () => props.ui.currentUi === "drawer" ? props.ui.layout.drawer?.placement : void 0;
			const containerRef = (0, vue.ref)(null);
			const getPopupContainer = () => containerRef.value || document.body;
			return (_ctx, _cache) => {
				return (0, vue.openBlock)(), (0, vue.createElementBlock)("section", {
					ref_key: "containerRef",
					ref: containerRef
				}, [
					_cache[24] || (_cache[24] = (0, vue.createElementVNode)("h3", { class: "section-title" }, "窗口 UI", -1)),
					(0, vue.createElementVNode)("div", _hoisted_1$12, [
						(0, vue.createElementVNode)("label", null, [_cache[12] || (_cache[12] = (0, vue.createElementVNode)("span", null, "当前布局", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Select), {
							value: props.ui.currentUi,
							options: props.availableLayouts,
							"get-popup-container": getPopupContainer,
							"onUpdate:value": _cache[0] || (_cache[0] = ($event) => set("currentUi", $event))
						}, null, 8, ["value", "options"])]),
						(0, vue.createElementVNode)("label", null, [_cache[13] || (_cache[13] = (0, vue.createElementVNode)("span", null, "Icon", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Input), {
							value: props.ui.icon,
							"onUpdate:value": _cache[1] || (_cache[1] = ($event) => set("icon", $event))
						}, null, 8, ["value"])]),
						(0, vue.createElementVNode)("label", _hoisted_2$9, [_cache[14] || (_cache[14] = (0, vue.createElementVNode)("span", null, "标题", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Input), {
							value: props.ui.title,
							"onUpdate:value": _cache[2] || (_cache[2] = ($event) => set("title", $event))
						}, null, 8, ["value"])]),
						props.ui.currentUi !== "none" ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("label", _hoisted_3$6, [_cache[15] || (_cache[15] = (0, vue.createElementVNode)("span", null, "宽度", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.InputNumber), {
							value: active()?.width,
							min: 240,
							"onUpdate:value": _cache[3] || (_cache[3] = ($event) => set(`layout.${props.ui.currentUi}.width`, $event))
						}, null, 8, ["value"])])) : (0, vue.createCommentVNode)("", true),
						props.ui.currentUi === "dialog" ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("label", _hoisted_4$4, [_cache[16] || (_cache[16] = (0, vue.createElementVNode)("span", null, "高度", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.InputNumber), {
							value: props.ui.layout.dialog?.height,
							min: 160,
							"onUpdate:value": _cache[4] || (_cache[4] = ($event) => set("layout.dialog.height", $event))
						}, null, 8, ["value"])])) : (0, vue.createCommentVNode)("", true),
						props.ui.currentUi === "drawer" ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("label", _hoisted_5$3, [_cache[17] || (_cache[17] = (0, vue.createElementVNode)("span", null, "展开方向", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Select), {
							value: activePlacement(),
							options: [{
								label: "右侧",
								value: "right"
							}, {
								label: "左侧",
								value: "left"
							}],
							"get-popup-container": getPopupContainer,
							"onUpdate:value": _cache[5] || (_cache[5] = ($event) => set("layout.drawer.placement", $event))
						}, null, 8, ["value"])])) : (0, vue.createCommentVNode)("", true)
					]),
					_cache[25] || (_cache[25] = (0, vue.createElementVNode)("h3", { class: "section-title" }, "当前布局设置", -1)),
					(0, vue.createElementVNode)("div", _hoisted_6$3, [
						props.ui.currentUi !== "none" ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("label", _hoisted_7$3, [_cache[18] || (_cache[18] = (0, vue.createElementVNode)("span", null, "默认折叠", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Switch), {
							checked: active()?.defaultCollapsed,
							size: "small",
							"onUpdate:checked": _cache[6] || (_cache[6] = ($event) => set(`layout.${props.ui.currentUi}.defaultCollapsed`, $event))
						}, null, 8, ["checked"])])) : (0, vue.createCommentVNode)("", true),
						props.ui.currentUi === "dialog" ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("label", _hoisted_8$3, [_cache[19] || (_cache[19] = (0, vue.createElementVNode)("span", null, "显示模态层", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Switch), {
							checked: props.ui.layout.dialog?.showModal,
							size: "small",
							"onUpdate:checked": _cache[7] || (_cache[7] = ($event) => set("layout.dialog.showModal", $event))
						}, null, 8, ["checked"])])) : (0, vue.createCommentVNode)("", true),
						props.ui.currentUi === "drawer" ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("label", _hoisted_9$3, [_cache[20] || (_cache[20] = (0, vue.createElementVNode)("span", null, "显示模态层", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Switch), {
							checked: props.ui.layout.drawer?.showModal,
							size: "small",
							"onUpdate:checked": _cache[8] || (_cache[8] = ($event) => set("layout.drawer.showModal", $event))
						}, null, 8, ["checked"])])) : (0, vue.createCommentVNode)("", true),
						props.ui.currentUi === "dialog" ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("label", _hoisted_10$3, [_cache[21] || (_cache[21] = (0, vue.createElementVNode)("span", null, "允许拖拽", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Switch), {
							checked: props.ui.layout.dialog?.draggable,
							size: "small",
							"onUpdate:checked": _cache[9] || (_cache[9] = ($event) => set("layout.dialog.draggable", $event))
						}, null, 8, ["checked"])])) : (0, vue.createCommentVNode)("", true),
						(0, vue.createElementVNode)("label", _hoisted_11$3, [_cache[22] || (_cache[22] = (0, vue.createElementVNode)("span", null, "记住位置", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Switch), {
							checked: props.ui.rememberPosition,
							size: "small",
							"onUpdate:checked": _cache[10] || (_cache[10] = ($event) => set("rememberPosition", $event))
						}, null, 8, ["checked"])]),
						(0, vue.createElementVNode)("label", _hoisted_12$3, [_cache[23] || (_cache[23] = (0, vue.createElementVNode)("span", null, "显示在控制中心", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Switch), {
							checked: props.ui.showInHost,
							size: "small",
							"onUpdate:checked": _cache[11] || (_cache[11] = ($event) => set("showInHost", $event))
						}, null, 8, ["checked"])])
					])
				], 512);
			};
		}
	}), [["__scopeId", "data-v-aa3837de"]]);
	var _hoisted_1$11 = { class: "business-fields" };
	var BusinessConfig_default = _plugin_vue_export_helper_default((0, vue.defineComponent)({
		__name: "BusinessConfig",
		props: {
			config: {},
			text: {}
		},
		emits: ["update:value", "update:text"],
		setup(__props, { emit: __emit }) {
			const props = __props;
			const emit = __emit;
			return (_ctx, _cache) => {
				return (0, vue.openBlock)(), (0, vue.createElementBlock)("section", null, [_cache[0] || (_cache[0] = (0, vue.createElementVNode)("h3", { class: "section-title" }, "插件业务配置", -1)), (0, vue.createElementVNode)("div", _hoisted_1$11, [((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(props.config, (value, key) => {
					return (0, vue.openBlock)(), (0, vue.createElementBlock)("label", {
						key,
						class: "business-field"
					}, [(0, vue.createElementVNode)("span", null, (0, vue.toDisplayString)(key), 1), typeof value === "boolean" ? ((0, vue.openBlock)(), (0, vue.createBlock)((0, vue.unref)(ant_design_vue.Switch), {
						key: 0,
						checked: value,
						size: "small",
						"onUpdate:checked": ($event) => emit("update:value", {
							key: String(key),
							value: $event
						})
					}, null, 8, ["checked", "onUpdate:checked"])) : typeof value === "number" ? ((0, vue.openBlock)(), (0, vue.createBlock)((0, vue.unref)(ant_design_vue.InputNumber), {
						key: 1,
						value,
						"onUpdate:value": ($event) => emit("update:value", {
							key: String(key),
							value: $event
						})
					}, null, 8, ["value", "onUpdate:value"])) : value !== null && typeof value === "object" ? ((0, vue.openBlock)(), (0, vue.createBlock)((0, vue.unref)(ant_design_vue.Input), {
						key: 2,
						value: props.text[String(key)],
						"onUpdate:value": ($event) => emit("update:text", {
							key: String(key),
							value: $event
						})
					}, null, 8, ["value", "onUpdate:value"])) : ((0, vue.openBlock)(), (0, vue.createBlock)((0, vue.unref)(ant_design_vue.Input), {
						key: 3,
						value: String(value ?? ""),
						"onUpdate:value": ($event) => emit("update:value", {
							key: String(key),
							value: $event
						})
					}, null, 8, ["value", "onUpdate:value"]))]);
				}), 128))])]);
			};
		}
	}), [["__scopeId", "data-v-addb7241"]]);
	var SETTINGS_KEY = "jx-work-assistant:settings:v1";
	var WINDOW_STATE_PREFIX = "jx-work-assistant:v2:window:";
	var UPDATE_STATE_KEY = "jx-work-assistant:update-state:v1";
	var updateBaseUrl = "https://xmg-001.github.io";
	var scriptFileName = "jx-vite-plugin-monkey.pro.js";
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
	var HOST_CONFIG = {
		id: "jx-work-assistant",
		name: "JX Work Assistant",
		version: "0.0.1",
		releaseNotes: "Host 版本管理与更新检测功能。",
		zIndex: UI_LAYERS
	};
	function getUpdateCheckState() {
		return _GM_getValue(UPDATE_STATE_KEY, {});
	}
	async function saveUpdateCheckState(state) {
		await _GM_setValue(UPDATE_STATE_KEY, state);
	}
	var _hoisted_1$10 = { class: "update-manager" };
	var _hoisted_2$8 = { class: "popover-panel" };
	var _hoisted_3$5 = { class: "panel-header" };
	var _hoisted_4$3 = { class: "panel-title" };
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
					content: (0, vue.withCtx)(() => [(0, vue.createElementVNode)("div", _hoisted_2$8, [(0, vue.createElementVNode)("div", _hoisted_3$5, [(0, vue.createElementVNode)("span", _hoisted_4$3, (0, vue.toDisplayString)(updates.value.length ? `发现 ${updates.value.length} 个新版本` : "版本信息"), 1), (0, vue.createElementVNode)("button", {
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
	function migrateUserConfig(value) {
		return isRecord(value) ? { ...value } : {};
	}
	function mergeLegacyRunRule(defaults, legacy) {
		if (!isRecord(legacy)) return deepMerge(defaults, {});
		const hosts = Array.isArray(legacy.hosts) ? legacy.hosts.filter((item) => typeof item === "string" && item.trim().length > 0) : [];
		const paths = Array.isArray(legacy.pathIncludes) ? legacy.pathIncludes.filter((item) => typeof item === "string" && item.trim().length > 0) : [];
		if (!hosts.length) return deepMerge(defaults, {});
		const pathPatterns = paths.length ? paths.map((path) => `*${path.trim().replace(/^\/+|\/+$/g, "")}*`) : ["*"];
		const include = hosts.flatMap((rawHost) => {
			const host = rawHost.trim().replace(/^\*\./, "").replace(/^https?:\/\//, "").replace(/\/$/, "");
			if (!host) return [];
			return (rawHost.trim().startsWith("*.") ? [host, `*.${host}`] : [host]).flatMap((pattern) => pathPatterns.map((path) => `*://${pattern}/${path}`));
		});
		if (!include.length) return deepMerge(defaults, {});
		const contexts = { ...defaults.contexts ?? {} };
		for (const context of ["top", "iframe"]) contexts[context] = {
			...defaults.contexts?.[context] ?? {},
			include
		};
		return {
			...deepMerge(defaults, {}),
			contexts
		};
	}
	function migratePersistedSettings(raw, targetVersion) {
		if (!isRecord(raw) || raw.version !== 1 || !isRecord(raw.plugins)) return void 0;
		const plugins = {};
		for (const [id, value] of Object.entries(raw.plugins)) {
			const old = migrateUserConfig(value);
			const migrated = {};
			if (typeof old.isEnable === "boolean") migrated.isEnable = old.isEnable;
			if (isRecord(old.ui)) migrated.ui = old.ui;
			if (isRecord(old.business)) migrated.business = old.business;
			else if (isRecord(old.config)) migrated.business = old.config;
			if (isRecord(old.env)) migrated.env = mergeLegacyRunRule(old.env, old.runRule);
			else if (old.runRule !== void 0) migrated.env = mergeLegacyRunRule({}, old.runRule);
			plugins[id] = migrated;
		}
		const migrated = {
			version: targetVersion,
			plugins
		};
		if (isRecord(raw.host)) migrated.host = raw.host;
		return migrated;
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
	var DEFAULT_PLUGIN_CONFIG = {
		isEnable: true,
		env: {},
		ui: {
			currentUi: "dialog",
			title: "Plugin",
			icon: "🧩",
			rememberPosition: true,
			showInHost: true,
			layout: {
				dialog: {
					width: 600,
					height: 480,
					draggable: true,
					showModal: true,
					defaultCollapsed: false
				},
				drawer: {
					placement: "right",
					width: 400,
					showModal: false,
					defaultCollapsed: false
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
		const currentUi = ui.currentUi;
		const common = {
			layout: currentUi,
			title: ui.title,
			icon: ui.icon,
			rememberPosition: ui.rememberPosition,
			placement: "right"
		};
		if (currentUi === "dialog") return {
			...common,
			...ui.layout.dialog ?? DEFAULT_PLUGIN_CONFIG.ui.layout.dialog,
			draggable: ui.layout.dialog?.draggable ?? true
		};
		if (currentUi === "drawer") {
			const layout = ui.layout.drawer ?? DEFAULT_PLUGIN_CONFIG.ui.layout.drawer;
			return {
				...common,
				...layout,
				width: layout.width ?? 400,
				showModal: layout.showModal,
				draggable: false
			};
		}
		return {
			...common,
			width: 0,
			placement: "right",
			draggable: false,
			defaultCollapsed: true,
			showModal: false
		};
	}
	var EMPTY_SETTINGS = {
		version: 2,
		plugins: {}
	};
	function loadSettings() {
		const raw = _GM_getValue(SETTINGS_KEY);
		if (isRecord(raw) && raw.version === 2 && isRecord(raw.plugins)) return raw;
		const migrated = migratePersistedSettings(raw, 2);
		if (migrated) {
			_GM_setValue(SETTINGS_KEY, migrated);
			return migrated;
		}
		_GM_setValue(SETTINGS_KEY, EMPTY_SETTINGS);
		return {
			...EMPTY_SETTINGS,
			plugins: {}
		};
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
		return persistBeforeCommit({
			...JSON.parse(JSON.stringify(next)),
			version: 2
		}, (value) => _GM_setValue(SETTINGS_KEY, value), (value) => {
			Object.assign(settings, value);
		});
	}
	function getWindowState(id) {
		return _GM_getValue(`${WINDOW_STATE_PREFIX}${id}`, {});
	}
	async function setWindowState(id, state) {
		await _GM_setValue(`${WINDOW_STATE_PREFIX}${id}`, state);
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
		const configDraft = (0, vue.ref)({});
		const configText = (0, vue.ref)({});
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
				matchDraft: matchDraft.value,
				configDraft: configDraft.value,
				configText: configText.value
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
			const nextConfigs = {};
			const nextConfigText = {};
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
				nextConfigs[id] = clone(effective.business);
				for (const [key, value] of Object.entries(effective.business)) if (value !== null && typeof value === "object") nextConfigText[`${id}:${key}`] = JSON.stringify(value);
			}
			draft.value = next;
			matchDraft.value = nextMatches;
			configDraft.value = nextConfigs;
			configText.value = nextConfigText;
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
		function updatePrimitive(id, key, value) {
			configDraft.value[id][key] = value;
		}
		function updateBusinessText(id, key, value) {
			configText.value[`${id}:${key}`] = value;
		}
		function updateUi(id, path, value) {
			const ui = draft.value.plugins[id]?.ui;
			if (!ui) return;
			const keys = path.split(".");
			let target = ui;
			for (const key of keys.slice(0, -1)) target = target[key];
			target[keys[keys.length - 1]] = value;
		}
		async function saveDraft() {
			const next = settingsSnapshot();
			for (const entry of getEntries()) {
				const id = entry.manifest.id;
				const user = clone(draft.value.plugins[id]);
				const selected = user.ui?.currentUi;
				const layoutOptions = selected === "dialog" || selected === "drawer" ? user.ui?.layout?.[selected] : void 0;
				const width = layoutOptions && "width" in layoutOptions ? Number(layoutOptions.width) : void 0;
				const height = selected === "dialog" ? Number(user.ui?.layout?.dialog?.height) : void 0;
				if (width !== void 0 && (!Number.isFinite(width) || width < 240) || height !== void 0 && (!Number.isFinite(height) || height < 160)) throw new Error(`窗口尺寸无效：${entry.manifest.name}`);
				user.ui = user.ui;
				for (const [key, text] of Object.entries(configText.value)) {
					if (!key.startsWith(`${id}:`)) continue;
					const configKey = key.slice(id.length + 1);
					configDraft.value[id][configKey] = JSON.parse(text);
				}
				user.business = clone(configDraft.value[id]);
				const matchDefaults = entry.manifest.config.env ?? {};
				const desiredMatch = makeMatch(id);
				const storedUser = { isEnable: user.isEnable };
				const uiOverrides = configOverrides(deepMerge(DEFAULT_PLUGIN_CONFIG.ui, entry.manifest.config.ui), user.ui);
				const matchOverrides = JSON.stringify(matchDefaults) === JSON.stringify(desiredMatch) ? void 0 : desiredMatch;
				const businessOverrides = configOverrides(entry.manifest.config.business ?? {}, user.business);
				if (uiOverrides) storedUser.ui = uiOverrides;
				if (matchOverrides) storedUser.env = matchOverrides;
				if (businessOverrides) storedUser.business = businessOverrides;
				next.plugins[id] = storedUser;
			}
			const savedState = stateString();
			await saveSettings(next);
			savedSnapshot.value = savedState;
		}
		return {
			draft,
			matchDraft,
			configDraft,
			configText,
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
			updatePrimitive,
			updateBusinessText,
			updateUi,
			saveDraft
		};
	}
	var _hoisted_1$8 = { class: "drawer-header" };
	var _hoisted_2$6 = { class: "drawer-title-group" };
	var _hoisted_3$4 = { class: "main-title" };
	var _hoisted_4$2 = {
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
	var _hoisted_16$1 = { class: "runtime-alert" };
	var _hoisted_17$1 = { class: "context-header" };
	var _hoisted_18$1 = { class: "context-title" };
	var _hoisted_19$1 = { class: "context-hint" };
	var _hoisted_20$1 = { class: "match-preview-result" };
	var _hoisted_21$1 = { class: "reason-text" };
	var _hoisted_22$1 = {
		key: 1,
		class: "context-disabled-tip"
	};
	var _hoisted_23$1 = { class: "drawer-footer-content" };
	var _hoisted_24$1 = { class: "status-indicator" };
	var _hoisted_25$1 = {
		key: 0,
		class: "status-dot warning"
	};
	var _hoisted_26$1 = {
		key: 1,
		class: "status-dot success"
	};
	var _hoisted_27 = { class: "footer-actions" };
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
			const { draft, matchDraft, configDraft, configText, expanded, showHiddenPlugins, contexts, environment, pluginConfig, draftUi, availableLayouts, hasPendingChanges, hiddenPluginCount, resetDraft, setContextRules, rulePreview, updatePrimitive, updateBusinessText, updateUi, saveDraft } = usePluginSettings(() => props.entries);
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
					"get-container": false,
					placement: "right",
					width: 540,
					closable: false,
					class: "modern-host-drawer",
					"z-index": (0, vue.unref)(UI_LAYERS).host,
					mask: true,
					"mask-closable": true,
					onClose: close
				}, {
					title: (0, vue.withCtx)(() => [(0, vue.createElementVNode)("div", _hoisted_1$8, [(0, vue.createElementVNode)("div", _hoisted_2$6, [
						(0, vue.createElementVNode)("span", _hoisted_3$4, (0, vue.toDisplayString)((0, vue.unref)(HOST_CONFIG).name), 1),
						(0, vue.createVNode)(UpdateManager_default, { modules: __props.entries.map(({ manifest }) => ({
							id: manifest.id,
							name: manifest.name,
							version: manifest.version || "0.0.0"
						})) }, null, 8, ["modules"]),
						(0, vue.unref)(hasPendingChanges) ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("span", _hoisted_4$2, "待保存")) : (0, vue.createCommentVNode)("", true)
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
					footer: (0, vue.withCtx)(() => [(0, vue.createElementVNode)("div", _hoisted_23$1, [(0, vue.createElementVNode)("div", _hoisted_24$1, [(0, vue.unref)(hasPendingChanges) ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("span", _hoisted_25$1)) : ((0, vue.openBlock)(), (0, vue.createElementBlock)("span", _hoisted_26$1)), (0, vue.createElementVNode)("span", { class: (0, vue.normalizeClass)((0, vue.unref)(hasPendingChanges) ? "pending-text" : "saved-text") }, (0, vue.toDisplayString)((0, vue.unref)(hasPendingChanges) ? "存在未保存的更改" : "配置已实时同步"), 3)]), (0, vue.createElementVNode)("div", _hoisted_27, [(0, vue.createVNode)((0, vue.unref)(ant_design_vue.Button), {
						disabled: !(0, vue.unref)(hasPendingChanges),
						class: "btn-secondary",
						onClick: save
					}, {
						default: (0, vue.withCtx)(() => [..._cache[6] || (_cache[6] = [(0, vue.createTextVNode)("仅保存", -1)])]),
						_: 1
					}, 8, ["disabled"]), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Button), {
						type: "primary",
						disabled: !(0, vue.unref)(hasPendingChanges),
						class: "btn-primary",
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
								(0, vue.createElementVNode)("strong", _hoisted_11$1, (0, vue.toDisplayString)((0, vue.unref)(draft).plugins[entry.manifest.id].ui?.title || (0, vue.unref)(pluginConfig)(entry).ui.title), 1),
								(0, vue.createElementVNode)("span", _hoisted_12$1, (0, vue.toDisplayString)(entry.manifest.version || "1.0.0"), 1),
								(0, vue.createElementVNode)("p", _hoisted_13$1, (0, vue.toDisplayString)(entry.manifest.description || "暂无描述"), 1)
							]),
							(0, vue.createElementVNode)("div", {
								class: "switch-wrapper",
								onClick: _cache[1] || (_cache[1] = (0, vue.withModifiers)(() => {}, ["stop"]))
							}, [(0, vue.createVNode)((0, vue.unref)(ant_design_vue.Switch), {
								checked: (0, vue.unref)(draft).plugins[entry.manifest.id].isEnable,
								"onUpdate:checked": ($event) => (0, vue.unref)(draft).plugins[entry.manifest.id].isEnable = $event,
								size: "small"
							}, null, 8, ["checked", "onUpdate:checked"])])
						], 8, _hoisted_8$1), (0, vue.unref)(expanded)[entry.manifest.id] ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_14$1, [
							(0, vue.createElementVNode)("div", _hoisted_15$1, [(0, vue.createVNode)((0, vue.unref)(ant_design_vue.Tag), {
								color: entry.isRunning ? "success" : "default",
								class: "custom-tag"
							}, {
								default: (0, vue.withCtx)(() => [(0, vue.createTextVNode)((0, vue.toDisplayString)(entry.isRunning ? (0, vue.unref)(draft).plugins[entry.manifest.id].isEnable ? "当前运行中" : "运行中 · 刷新停用" : !(0, vue.unref)(draft).plugins[entry.manifest.id].isEnable ? "已停用" : entry.isMatched ? "已启用 · 刷新生效" : "页面未匹配"), 1)]),
								_: 2
							}, 1032, ["color"]), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Button), {
								type: "link",
								size: "small",
								class: "open-plugin-btn",
								disabled: !entry.isRunning || !(0, vue.unref)(draft).plugins[entry.manifest.id].isEnable,
								onClick: (0, vue.withModifiers)(($event) => openPlugin(entry.manifest.id), ["stop"])
							}, {
								default: (0, vue.withCtx)(() => [..._cache[4] || (_cache[4] = [(0, vue.createTextVNode)(" 打开插件 ", -1)])]),
								_: 1
							}, 8, ["disabled", "onClick"])]),
							(0, vue.createElementVNode)("div", _hoisted_16$1, [(0, vue.createElementVNode)("strong", null, "快照 (" + (0, vue.toDisplayString)((0, vue.unref)(environment).type === "top" ? "Top Window" : "iframe") + ")：", 1), (0, vue.createElementVNode)("span", null, (0, vue.toDisplayString)(entry.isMatched ? "匹配通过" : entry.matchReason.join("；") || "规则未通过"), 1)]),
							_cache[5] || (_cache[5] = (0, vue.createElementVNode)("div", { class: "section-divider" }, "运行环境与 URL 匹配", -1)),
							((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)((0, vue.unref)(contexts), (context) => {
								return (0, vue.openBlock)(), (0, vue.createElementBlock)("section", {
									key: context,
									class: "match-context-card"
								}, [(0, vue.createElementVNode)("div", _hoisted_17$1, [(0, vue.createElementVNode)("div", _hoisted_18$1, [(0, vue.createElementVNode)("strong", null, (0, vue.toDisplayString)(context === "top" ? "Top Window" : "iframe"), 1), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Switch), {
									checked: (0, vue.unref)(matchDraft)[entry.manifest.id][context].enabled,
									"onUpdate:checked": ($event) => (0, vue.unref)(matchDraft)[entry.manifest.id][context].enabled = $event,
									size: "small"
								}, null, 8, ["checked", "onUpdate:checked"])]), (0, vue.createElementVNode)("span", _hoisted_19$1, (0, vue.toDisplayString)((0, vue.unref)(environment).type === context ? "当前环境" : "按当前 URL 预览"), 1)]), (0, vue.unref)(matchDraft)[entry.manifest.id][context].enabled ? ((0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, { key: 0 }, [(0, vue.createVNode)(MatchContextEditor_default, {
									rules: (0, vue.unref)(matchDraft)[entry.manifest.id][context].rules,
									"onUpdate:rules": ($event) => (0, vue.unref)(setContextRules)(entry.manifest.id, context, $event)
								}, null, 8, ["rules", "onUpdate:rules"]), (0, vue.createElementVNode)("div", _hoisted_20$1, [(0, vue.createVNode)((0, vue.unref)(ant_design_vue.Tag), {
									color: (0, vue.unref)(rulePreview)(entry.manifest.id, context).matched ? "success" : "error",
									class: "custom-tag"
								}, {
									default: (0, vue.withCtx)(() => [(0, vue.createTextVNode)((0, vue.toDisplayString)((0, vue.unref)(rulePreview)(entry.manifest.id, context).matched ? "通过" : "未通过"), 1)]),
									_: 2
								}, 1032, ["color"]), (0, vue.createElementVNode)("span", _hoisted_21$1, (0, vue.toDisplayString)((0, vue.unref)(rulePreview)(entry.manifest.id, context).reason.join("；") || "符合全部匹配规则"), 1)])], 64)) : ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_22$1, "此环境规则已被禁启用"))]);
							}), 128)),
							(0, vue.createVNode)(UiSettings_default, {
								ui: (0, vue.unref)(draftUi)(entry),
								"available-layouts": (0, vue.unref)(availableLayouts)(entry),
								onUpdate: ($event) => (0, vue.unref)(updateUi)(entry.manifest.id, $event.path, $event.value)
							}, null, 8, [
								"ui",
								"available-layouts",
								"onUpdate"
							]),
							(0, vue.createVNode)(BusinessConfig_default, {
								config: (0, vue.unref)(configDraft)[entry.manifest.id],
								text: Object.fromEntries(Object.entries((0, vue.unref)(configText)).filter(([key]) => key.startsWith(`${entry.manifest.id}:`)).map(([key, value]) => [key.slice(entry.manifest.id.length + 1), value])),
								"onUpdate:value": ($event) => (0, vue.unref)(updatePrimitive)(entry.manifest.id, $event.key, $event.value),
								"onUpdate:text": ($event) => (0, vue.unref)(updateBusinessText)(entry.manifest.id, $event.key, $event.value)
							}, null, 8, [
								"config",
								"text",
								"onUpdate:value",
								"onUpdate:text"
							])
						])) : (0, vue.createCommentVNode)("", true)], 64)) : (0, vue.createCommentVNode)("", true)], 2)), [[vue.vShow, (0, vue.unref)(showHiddenPlugins) || ((0, vue.unref)(draft).plugins[entry.manifest.id]?.ui?.showInHost ?? (0, vue.unref)(pluginConfig)(entry).ui.showInHost) !== false]]);
					}), 128))])]),
					_: 1
				}, 8, ["open", "z-index"]);
			};
		}
	}), [["__scopeId", "data-v-3101e1ae"]]);
	var _hoisted_1$7 = [
		"disabled",
		"aria-label",
		"onClick"
	];
	var _hoisted_2$5 = { class: "jx-recall-icon" };
	var DEFAULT_BALL_SIZE = 36;
	var ITEM_LIST_WIDTH = 36;
	var ITEM_LIST_HEIGHT = 32;
	var ITEM_GAP = 8;
	var VIEWPORT_PADDING = 0;
	var FloatingBall_default = _plugin_vue_export_helper_default((0, vue.defineComponent)({
		__name: "FloatingBall",
		props: {
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
				const height = Math.min(naturalHeight, Math.max(0, maxHeight));
				const belowSpace = window.innerHeight - (hostTop + size);
				const listAbove = belowSpace < height + 12 && hostTop > belowSpace;
				const maxLeft = Math.max(0, window.innerWidth - ITEM_LIST_WIDTH - 0);
				const offsetLeft = currentSide.value === "right" ? size - ITEM_LIST_WIDTH : 0;
				const left = Math.min(Math.max(0, hostLeft + offsetLeft), maxLeft);
				const top = listAbove ? Math.max(0, hostTop - height) : Math.min(window.innerHeight - height, hostTop + size);
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
					title: "配置中心",
					placement: currentSide.value === "right" ? "left" : "right"
				}, {
					default: (0, vue.withCtx)(() => [..._cache[0] || (_cache[0] = [(0, vue.createElementVNode)("div", { class: "jx-fab-backdrop" }, [(0, vue.createElementVNode)("div", { class: "jx-fab-content" }, [(0, vue.createElementVNode)("svg", {
						class: "jx-fab-icon",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						"stroke-width": "2"
					}, [(0, vue.createElementVNode)("path", { d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" })]), (0, vue.createElementVNode)("span", { class: "jx-fab-text" }, "JX")])], -1)])]),
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
						}, [(0, vue.createElementVNode)("span", _hoisted_2$5, [(0, vue.createVNode)(PluginIcon_default, { config: {
							icon: plugin.icon,
							title: plugin.name
						} }, null, 8, ["config"])])], 8, _hoisted_1$7)]),
						_: 2
					}, 1032, ["title", "placement"]);
				}), 128))], 4)) : (0, vue.createCommentVNode)("", true)], 64);
			};
		}
	}), [["__scopeId", "data-v-62d89bf2"]]);
	var _hoisted_1$6 = { class: "example-plugin" };
	var example_default = _plugin_vue_export_helper_default((0, vue.defineComponent)({
		name: "example",
		__name: "index",
		props: { config: {} },
		setup(__props) {
			return (_ctx, _cache) => {
				return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_1$6, [(0, vue.createElementVNode)("p", null, (0, vue.toDisplayString)(__props.config.message), 1), _cache[0] || (_cache[0] = (0, vue.createElementVNode)("p", null, "窗口类型和交互由 Manifest 与控制中心配置。", -1))]);
			};
		}
	}), [["__scopeId", "data-v-bada61c7"]]);
	var config_exports$3 = __exportAll({ default: () => examplePlugin$3 });
	var examplePlugin$3 = {
		id: "example",
		name: "示例插件",
		description: "用于验证插件自动注册、运行规则和窗口容器。",
		version: "1.0.0",
		releaseNotes: "初始版本。",
		component: (0, vue.markRaw)(example_default),
		config: {
			env: { contexts: { top: { include: ["*"] } } },
			business: { message: "插件已按页面规则启动。" },
			ui: {
				title: "示例插件",
				icon: "🧩",
				showInHost: true,
				currentUi: "dialog",
				rememberPosition: true,
				layout: {
					dialog: {
						width: 600,
						height: 480,
						draggable: true,
						showModal: false,
						defaultCollapsed: true
					},
					drawer: {
						placement: "right",
						width: 400,
						showModal: false,
						defaultCollapsed: true
					}
				}
			}
		}
	};
	var _hoisted_1$5 = { class: "example-plugin" };
	var example2_default = _plugin_vue_export_helper_default((0, vue.defineComponent)({
		name: "example",
		__name: "index",
		props: { config: {} },
		setup(__props) {
			return (_ctx, _cache) => {
				return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_1$5, [(0, vue.createElementVNode)("p", null, (0, vue.toDisplayString)(__props.config.message), 1), _cache[0] || (_cache[0] = (0, vue.createElementVNode)("p", null, "窗口类型和交互由 Manifest 与控制中心配置。", -1))]);
			};
		}
	}), [["__scopeId", "data-v-8df22ec7"]]);
	var config_exports$2 = __exportAll({ default: () => examplePlugin$2 });
	var examplePlugin$2 = {
		id: "example2",
		name: "示例插件2",
		description: "用于验证插件自动注册、运行规则和窗口容器。",
		version: "1.0.0",
		releaseNotes: "初始版本。",
		component: (0, vue.markRaw)(example2_default),
		config: {
			env: { contexts: { top: { include: ["*"] } } },
			business: { message: "插件已按页面规则启动。" },
			ui: {
				title: "示例插件2",
				icon: "😈",
				showInHost: true,
				currentUi: "drawer",
				rememberPosition: true,
				layout: {
					dialog: {
						width: 600,
						height: 480,
						draggable: true,
						showModal: false,
						defaultCollapsed: true
					},
					drawer: {
						placement: "right",
						width: 400,
						showModal: false,
						defaultCollapsed: true
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
	var _hoisted_13 = { class: "inline-flex-box-column" };
	var _hoisted_14 = { class: "badge b-neu" };
	var _hoisted_15 = { open: "" };
	var _hoisted_16 = {
		class: "col",
		style: { "flex": "1.35" }
	};
	var _hoisted_17 = { class: "control-box split-control" };
	var _hoisted_18 = { class: "split-left" };
	var _hoisted_19 = { class: "chk-grid" };
	var _hoisted_20 = ["onUpdate:modelValue"];
	var _hoisted_21 = { class: "action-row" };
	var _hoisted_22 = { class: "split-right" };
	var _hoisted_23 = { class: "current-consent-title" };
	var _hoisted_24 = { style: { "color": "#2563eb" } };
	var _hoisted_25 = { class: "table-wrapper" };
	var _hoisted_26 = {
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
					width: "60px"
				},
				{
					key: "geo",
					label: "Region & Law",
					width: "100px"
				},
				{
					key: "state",
					label: "Consent State",
					width: "150px"
				},
				{
					key: "details",
					label: "CurrentVisitorConsent",
					width: "auto"
				}
			];
			const googleCols = [
				{
					key: "time",
					label: "Time",
					width: "65px"
				},
				{
					key: "action",
					label: "Action",
					width: "100px"
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
			const entriesAvailable = (0, vue.ref)(false);
			const shopifyForm = (0, vue.reactive)({
				preferences: false,
				analytics: false,
				marketing: false,
				sale_of_data: false
			});
			const googleForm = (0, vue.reactive)(Object.fromEntries(googleOptions.map((o) => [o.id, true])));
			const normalizeVal = (v) => v === true ? "granted" : v === false ? "denied" : v == null ? "-" : String(v);
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
					text: String(value || "-").toUpperCase().substring(0, 5),
					cls: "b-neu"
				};
			};
			const getTime = () => new Date().toLocaleTimeString([], { hour12: false });
			const cloneData = (data) => {
				try {
					return JSON.parse(JSON.stringify(data));
				} catch {
					return String(data);
				}
			};
			const calcDiff = (prev, curr) => {
				const diff = {};
				googleOptions.forEach(({ id }) => {
					const next = curr[id];
					if (next !== void 0 && prev[id] !== next) diff[id] = {
						old: prev[id] ?? "none",
						new: next
					};
				});
				return Object.keys(diff).length ? diff : null;
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
				getShopifyPrivacy()?.setTrackingConsent?.({ ...shopifyForm }, () => recordShopify("manual_set"));
			};
			const dataLayerState = {};
			const entriesState = {};
			let entriesInitialized = false;
			let entriesProcessQueued = false;
			const syncCurrentGoogleConsent = () => {
				const state = entriesAvailable.value ? entriesState : dataLayerState;
				currentGoogleSource.value = entriesAvailable.value ? "google_tag_data.ics.entries" : "dataLayer";
				googleOptions.forEach(({ id }) => {
					currentGoogleConsent[id] = state[id] ?? "-";
				});
			};
			const recordDataLayerCommand = (item) => {
				const cmd = Array.isArray(item) ? item : Object.prototype.toString.call(item) === "[object Arguments]" ? Array.prototype.slice.call(item) : null;
				if (!cmd || cmd[0] !== "consent" || !cmd[2] || typeof cmd[2] !== "object") return;
				const action = String(cmd[1] || "unknown");
				const previous = { ...dataLayerState };
				googleOptions.forEach(({ id }) => {
					if (cmd[2][id] !== void 0) dataLayerState[id] = normalizeVal(cmd[2][id]);
				});
				if (!entriesAvailable.value) syncCurrentGoogleConsent();
				googleRecords.value.unshift({
					time: getTime(),
					action,
					payload: {
						source: "dataLayer",
						data: { ...cmd }
					},
					diff: calcDiff(previous, dataLayerState) || {}
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
				let keys = observedProperties.get(target) || new Set();
				if (!observedProperties.has(target)) observedProperties.set(target, keys);
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
			const actionPriority = {
				implicit: 1,
				default: 2,
				update: 3
			};
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
				[
					"update",
					"default",
					"implicit"
				].forEach((a) => observeProperty(entry, a, scheduleEntriesRead));
			};
			const observeEntriesObject = (entries) => {
				if (!entries || typeof entries !== "object") return;
				entriesAvailable.value = true;
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
				entriesAvailable.value = !!entries;
				if (!entries || typeof entries !== "object") return syncCurrentGoogleConsent();
				const previous = { ...entriesState };
				let triggeredAction = "", maxPriority = 0;
				googleOptions.forEach(({ id }) => {
					const entry = entries[id];
					if (!entry || typeof entry !== "object") return;
					const action = [
						"update",
						"default",
						"implicit"
					].find((k) => entry[k] !== void 0);
					if (!action) return;
					const value = normalizeVal(entry[action]);
					if (entriesState[id] === value) return;
					entriesState[id] = value;
					if (actionPriority[action] > maxPriority) {
						maxPriority = actionPriority[action];
						triggeredAction = action;
					}
				});
				syncCurrentGoogleConsent();
				const diff = calcDiff(previous, entriesState);
				if (!entriesInitialized) {
					entriesInitialized = true;
					return;
				}
				if (diff) googleRecords.value.unshift({
					time: getTime(),
					action: `internal:${triggeredAction || "change"}`,
					payload: {
						source: "google_tag_data.ics.entries",
						data: cloneData(entries)
					},
					diff
				});
			};
			const cleanups = [];
			const observeGoogleSources = () => {
				const attachDataLayer = (dl) => observeDataLayerArray(dl);
				observeProperty(window, "dataLayer", attachDataLayer);
				attachDataLayer(window.dataLayer);
				const observeGoogleTagData = (gtd) => {
					if (!gtd || typeof gtd !== "object") return;
					observeProperty(gtd, "ics", (ics) => {
						if (!ics || typeof ics !== "object") return;
						observeProperty(ics, "entries", observeEntriesObject);
						observeEntriesObject(ics.entries);
					});
					if (gtd.ics) {
						observeProperty(gtd.ics, "entries", observeEntriesObject);
						observeEntriesObject(gtd.ics.entries);
					}
				};
				observeProperty(window, "google_tag_data", observeGoogleTagData);
				observeGoogleTagData(window.google_tag_data);
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
				refreshShopifyApiState();
				if (shopifyApiLoaded.value) recordShopify("init");
				shopifyTimer = setInterval(() => {
					refreshShopifyApiState();
					if (shopifyApiLoaded.value && shopifyTimer) {
						clearInterval(shopifyTimer);
						shopifyTimer = void 0;
						recordShopify("init");
					}
				}, 100);
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
							(0, vue.createElementVNode)("td", null, [(0, vue.createElementVNode)("div", _hoisted_11, [(0, vue.createElementVNode)("b", null, (0, vue.toDisplayString)(r.time), 1), (0, vue.createElementVNode)("span", _hoisted_12, (0, vue.toDisplayString)(r.event), 1)])]),
							(0, vue.createElementVNode)("td", null, [(0, vue.createElementVNode)("div", _hoisted_13, [(0, vue.createElementVNode)("b", null, (0, vue.toDisplayString)(r.state?.region), 1), (0, vue.createElementVNode)("span", _hoisted_14, (0, vue.toDisplayString)(r.state?.law), 1)])]),
							(0, vue.createElementVNode)("td", null, [((0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(shopifyOptions, (opt) => {
								return (0, vue.createElementVNode)("div", {
									class: "mini-status",
									key: opt.id
								}, [(0, vue.createElementVNode)("span", null, [(0, vue.createTextVNode)((0, vue.toDisplayString)(opt.label) + ": ", 1), (0, vue.createElementVNode)("span", { class: (0, vue.normalizeClass)(["badge", getBadge(r.state?.[opt.id]).cls]) }, (0, vue.toDisplayString)(getBadge(r.state?.[opt.id]).text), 3)])]);
							}), 64))]),
							(0, vue.createElementVNode)("td", null, [(0, vue.createElementVNode)("details", _hoisted_15, [_cache[6] || (_cache[6] = (0, vue.createElementVNode)("summary", null, "Details", -1)), (0, vue.createElementVNode)("pre", null, (0, vue.toDisplayString)(JSON.stringify(r.state?.cvConsent, null, 2)), 1)])])
						]);
					}), 128))])])])
				]), (0, vue.createElementVNode)("div", _hoisted_16, [
					_cache[9] || (_cache[9] = (0, vue.createElementVNode)("div", { class: "col-header" }, [(0, vue.createElementVNode)("span", { class: "inline-flex-box" }, [(0, vue.createElementVNode)("img", {
						src: "https://www.google.com/s2/favicons?domain=google.com&sz=64",
						width: "16",
						height: "16"
					}), (0, vue.createTextVNode)(" Google Consent Mode ")])], -1)),
					(0, vue.createElementVNode)("div", _hoisted_17, [(0, vue.createElementVNode)("div", _hoisted_18, [(0, vue.createElementVNode)("div", _hoisted_19, [((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)((0, vue.unref)(googleOptions), (opt) => {
						return (0, vue.openBlock)(), (0, vue.createElementBlock)("label", { key: opt.id }, [(0, vue.withDirectives)((0, vue.createElementVNode)("input", {
							type: "checkbox",
							"onUpdate:modelValue": ($event) => googleForm[opt.id] = $event
						}, null, 8, _hoisted_20), [[vue.vModelCheckbox, googleForm[opt.id]]]), (0, vue.createTextVNode)(" " + (0, vue.toDisplayString)(opt.label), 1)]);
					}), 128))]), (0, vue.createElementVNode)("div", _hoisted_21, [(0, vue.createElementVNode)("button", {
						class: "btn",
						style: { "flex": "1" },
						onClick: _cache[1] || (_cache[1] = ($event) => handleGoogleConsent("default"))
					}, "Set Default"), (0, vue.createElementVNode)("button", {
						class: "btn btn-google",
						style: { "flex": "1" },
						onClick: _cache[2] || (_cache[2] = ($event) => handleGoogleConsent("update"))
					}, "Update")])]), (0, vue.createElementVNode)("div", _hoisted_22, [(0, vue.createElementVNode)("div", _hoisted_23, [_cache[7] || (_cache[7] = (0, vue.createTextVNode)("Source: ", -1)), (0, vue.createElementVNode)("span", _hoisted_24, (0, vue.toDisplayString)(currentGoogleSource.value), 1)]), ((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)((0, vue.unref)(googleOptions), (opt) => {
						return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", {
							key: opt.id,
							class: "current-consent-item"
						}, [(0, vue.createElementVNode)("span", null, (0, vue.toDisplayString)(opt.label), 1), (0, vue.createElementVNode)("span", { class: (0, vue.normalizeClass)(["badge", getBadge(currentGoogleConsent[opt.id]).cls]) }, (0, vue.toDisplayString)(getBadge(currentGoogleConsent[opt.id]).text), 3)]);
					}), 128))])]),
					(0, vue.createElementVNode)("div", _hoisted_25, [(0, vue.createElementVNode)("table", null, [(0, vue.createElementVNode)("thead", null, [(0, vue.createElementVNode)("tr", null, [((0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(googleCols, (c) => {
						return (0, vue.createElementVNode)("th", {
							key: c.key,
							style: (0, vue.normalizeStyle)({ width: c.width })
						}, (0, vue.toDisplayString)(c.label), 5);
					}), 64))])]), (0, vue.createElementVNode)("tbody", null, [((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(googleRecords.value, (r, idx) => {
						return (0, vue.openBlock)(), (0, vue.createElementBlock)("tr", { key: idx }, [
							(0, vue.createElementVNode)("td", null, [(0, vue.createElementVNode)("b", null, (0, vue.toDisplayString)(r.time), 1)]),
							(0, vue.createElementVNode)("td", null, [(0, vue.createElementVNode)("span", { class: (0, vue.normalizeClass)(["badge", r.action === "update" ? "b-blue" : "b-neu"]) }, (0, vue.toDisplayString)(r.action), 3)]),
							(0, vue.createElementVNode)("td", null, [Object.keys(r.diff || {}).length ? ((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, { key: 0 }, (0, vue.renderList)(r.diff, (v, k) => {
								return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", {
									key: k,
									class: "diff-item"
								}, [
									(0, vue.createElementVNode)("b", null, (0, vue.toDisplayString)(k) + ":", 1),
									(0, vue.createElementVNode)("span", { class: (0, vue.normalizeClass)(["badge", getBadge(v.old).cls]) }, (0, vue.toDisplayString)(getBadge(v.old).text), 3),
									_cache[8] || (_cache[8] = (0, vue.createTextVNode)(" ➔ ", -1)),
									(0, vue.createElementVNode)("span", { class: (0, vue.normalizeClass)(["badge", getBadge(v.new).cls]) }, (0, vue.toDisplayString)(getBadge(v.new).text), 3)
								]);
							}), 128)) : ((0, vue.openBlock)(), (0, vue.createElementBlock)("span", _hoisted_26, "No changes"))]),
							(0, vue.createElementVNode)("td", null, [(0, vue.createElementVNode)("details", null, [(0, vue.createElementVNode)("summary", null, (0, vue.toDisplayString)(r.payload?.source || "Details"), 1), (0, vue.createElementVNode)("pre", null, (0, vue.toDisplayString)(JSON.stringify(r.payload?.data, null, 2)), 1)])])
						]);
					}), 128))])])])
				])]);
			};
		}
	}), [["__scopeId", "data-v-03f784d7"]]);
	var config_exports$1 = __exportAll({ default: () => examplePlugin$1 });
	var examplePlugin$1 = {
		id: "jx-consent-inspector",
		name: "同意状态监测器",
		description: "用于验证插件自动注册、运行规则和窗口容器。",
		version: "26.11.6",
		releaseNotes: "初始版本。",
		component: (0, vue.markRaw)(jxConsentInspector_default),
		config: {
			env: { contexts: { top: { include: ["*"] } } },
			business: { message: "插件已按页面规则启动。" },
			ui: {
				title: "同意状态监测器",
				icon: "😈",
				showInHost: true,
				currentUi: "dialog",
				rememberPosition: true,
				layout: {
					dialog: {
						width: 1300,
						height: 580,
						draggable: true,
						showModal: false,
						defaultCollapsed: true
					},
					drawer: {
						placement: "right",
						width: 400,
						showModal: false,
						defaultCollapsed: true
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
	var config_exports = __exportAll({ default: () => examplePlugin });
	var examplePlugin = {
		id: "jx-nav-blocker",
		name: "页面跳转拦截器",
		description: "用于拦截和控制页面导航行为。",
		version: "26.11.6",
		releaseNotes: "初始版本。",
		component: (0, vue.markRaw)(jxNavBlocker_default),
		config: {
			env: { contexts: { top: { include: ["*"] } } },
			business: { message: "插件已按页面规则启动。" },
			ui: {
				title: "页面跳转拦截器",
				icon: "🧭",
				showInHost: true,
				currentUi: "none",
				rememberPosition: true,
				layout: {
					dialog: {
						width: 600,
						height: 480,
						draggable: true,
						showModal: false,
						defaultCollapsed: true
					},
					drawer: {
						placement: "right",
						width: 400,
						showModal: false,
						defaultCollapsed: true
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
					"get-container": false,
					"z-index": props.active ? (0, vue.unref)(UI_LAYERS).activePlugin : (0, vue.unref)(UI_LAYERS).plugin,
					footer: null,
					width: __props.ui.width,
					style: (0, vue.normalizeStyle)(modalStyle.value),
					"body-style": {
						height: `${__props.ui.height ?? 480}px`,
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
					"z-index",
					"width",
					"style",
					"body-style",
					"mask"
				]);
			};
		}
	}), [["__scopeId", "data-v-be854003"]]);
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
					"get-container": false,
					"z-index": props.active ? (0, vue.unref)(UI_LAYERS).activePlugin : (0, vue.unref)(UI_LAYERS).plugin,
					placement: __props.ui.placement,
					width: __props.ui.width,
					height: __props.ui.height,
					closable: true,
					onClose: minimize,
					"mask-closable": true,
					mask: __props.ui.showModal
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
					"z-index",
					"placement",
					"width",
					"height",
					"mask"
				]);
			};
		}
	}), [["__scopeId", "data-v-92d662b3"]]);
	function getAppContainer(triggerNode) {
		const root = triggerNode?.getRootNode();
		if (root instanceof ShadowRoot || root instanceof Document) {
			const container = root.querySelector("#jx-app-root");
			if (container) return container;
		}
		const container = document.querySelector("#jx-app-root");
		if (container) return container;
		return document.body;
	}
	var _hoisted_1 = { class: "jx-assistant-root" };
	var _hoisted_2 = ["plugin-id"];
	var App_default = (0, vue.defineComponent)({
		__name: "App",
		setup(__props) {
			ant_design_vue.message.config({
				getContainer: () => getAppContainer(),
				top: "24px"
			});
			function pluginConfig(entry) {
				return getPluginConfig(entry.manifest);
			}
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
				_GM_registerMenuCommand("打开 JX Work Assistant", () => {
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
				return (0, vue.openBlock)(), (0, vue.createBlock)((0, vue.unref)(ant_design_vue.ConfigProvider), {
					"get-popup-container": (0, vue.unref)(getAppContainer),
					theme: { token: {
						colorPrimary: "#111111",
						borderRadius: 8,
						fontFamily: "Inter, system-ui, sans-serif"
					} }
				}, {
					default: (0, vue.withCtx)(() => [(0, vue.createElementVNode)("div", _hoisted_1, [
						!hostOpen.value ? ((0, vue.openBlock)(), (0, vue.createBlock)(FloatingBall_default, {
							key: 0,
							onClick: _cache[0] || (_cache[0] = ($event) => hostOpen.value = true),
							plugins: entries.value.map((entry) => ({
								id: entry.manifest.id,
								name: pluginUI(entry).title || entry.manifest.name,
								icon: pluginUI(entry).icon,
								disabled: !entry.isRunning || !entry.isEnable || pluginUI(entry).layout === "none"
							})),
							onActivatePlugin: openPlugin
						}, null, 8, ["plugins"])) : (0, vue.createCommentVNode)("", true),
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
								default: (0, vue.withCtx)(() => [((0, vue.openBlock)(), (0, vue.createBlock)((0, vue.resolveDynamicComponent)(entry.manifest.component), { config: pluginConfig(entry).business }, null, 8, ["config"]))]),
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
								default: (0, vue.withCtx)(() => [((0, vue.openBlock)(), (0, vue.createBlock)((0, vue.resolveDynamicComponent)(entry.manifest.component), { config: pluginConfig(entry).business }, null, 8, ["config"]))]),
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
							}, [((0, vue.openBlock)(), (0, vue.createBlock)((0, vue.resolveDynamicComponent)(entry.manifest.component), { config: pluginConfig(entry).business }, null, 8, ["config"]))], 8, _hoisted_2))], 64);
						}), 128))
					])]),
					_: 1
				}, 8, ["get-popup-container"]);
			};
		}
	});
	var root = document.createElement("div");
	root.id = "jx-work-assistant";
	root.style.setProperty("--jx-root-z-index", String(UI_LAYERS.root));
	root.style.setProperty("--jx-floating-z-index", String(UI_LAYERS.floatingBall));
	root.style.setProperty("--jx-floating-list-z-index", String(UI_LAYERS.floatingList));
	root.style.setProperty("--jx-overlay-z-index", String(UI_LAYERS.overlay));
	(document.body ?? document.documentElement).append(root);
	var style = document.createElement("style");
	style.textContent = style_default;
	(document.head ?? document.documentElement).append(style);
	var appRoot = document.createElement("div");
	appRoot.id = "jx-app-root";
	root.append(appRoot);
	(0, vue.createApp)(App_default).mount(appRoot);
})(Vue, antd);
