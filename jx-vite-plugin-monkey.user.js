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
// @grant      GM_setClipboard
// @grant      GM_setValue
// @grant      GM_unregisterMenuCommand
// @grant      unsafeWindow
// @run-at     document-start
// ==/UserScript==

(function(vue, ant_design_vue) {
	"use strict";
	var s = new Set();
	var _css = async (t) => {
		if (s.has(t)) return;
		s.add(t);
		((css) => {
			globalThis.__jxStyles = css;
		})(t);
	};
	_css(" .example-plugin p[data-v-2f64fac3],.example-plugin p[data-v-2461ab84]{color:#555;margin:0 0 14px}.split-layout[data-v-3f397721]{gap:16px;width:100%;max-height:600px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;display:flex;line-height:1.25!important}.col[data-v-3f397721]{box-sizing:border-box;background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;flex-direction:column;flex:1;gap:12px;min-width:0;padding:12px;display:flex}.col-header[data-v-3f397721]{color:#374151;border-bottom:1px solid #e5e7eb;justify-content:space-between;align-items:center;padding-bottom:8px;font-size:13px;font-weight:700;display:flex}.col-header img[data-v-3f397721]{vertical-align:middle;margin-right:6px}.control-box[data-v-3f397721]{background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:10px}.split-control[data-v-3f397721]{gap:12px;display:flex}.split-left[data-v-3f397721]{flex-direction:column;flex:1;justify-content:space-between;display:flex}.split-right[data-v-3f397721]{border-left:1px dashed #e5e7eb;flex-direction:column;flex:.9;padding-left:12px;display:flex}.chk-grid[data-v-3f397721]{grid-template-columns:repeat(2,1fr);gap:6px;margin-bottom:10px;display:grid}.chk-grid-column-1[data-v-3f397721]{grid-template-columns:repeat(1,1fr)}.chk-grid label[data-v-3f397721]{color:#4b5563;cursor:pointer;align-items:center;gap:4px;font-size:12px;font-weight:500;display:flex}.chk-grid input[data-v-3f397721]{accent-color:#000;cursor:pointer;width:12px;height:12px;margin:0}.action-row[data-v-3f397721]{flex-direction:column;gap:8px;display:flex}.consent-grid[data-v-3f397721]{grid-template-columns:minmax(130px,1.5fr) minmax(80px,1fr) repeat(3,60px);gap:3px;font-size:11px;display:grid}.header[data-v-3f397721]{color:#4a5568;border-bottom:1px solid #e2e8f0;justify-content:center;align-items:center;padding:3px 0;font-weight:600;display:flex}.header[data-v-3f397721]:first-child,.cell.type[data-v-3f397721]{justify-content:flex-start}.cell[data-v-3f397721]{border-bottom:1px solid #f7fafc;justify-content:center;align-items:center;padding:3px 0;display:flex}.type[data-v-3f397721]{flex-direction:column;align-items:flex-start;font-size:12px}.sub[data-v-3f397721]{color:#718096;background-color:#f1f5f9;border-radius:4px;justify-content:center;font-size:11px}.global-stats[data-v-3f397721]{color:#4b5563;background:#fff;border:1px solid #e5e7eb;border-radius:8px;gap:12px;padding:8px 10px;font-size:12px;font-weight:600;display:flex}.table-wrapper[data-v-3f397721]{background:#fff;border:1px solid #e5e7eb;border-radius:6px;overflow-y:auto}.table-wrapper[data-v-3f397721]::-webkit-scrollbar{width:4px}.table-wrapper[data-v-3f397721]::-webkit-scrollbar-thumb{background:#ccc;border-radius:2px}table[data-v-3f397721]{border-collapse:collapse;table-layout:fixed;width:100%}thead[data-v-3f397721]{z-index:2;background:#f3f4f6;position:sticky;top:0;box-shadow:0 1px #e5e7eb}th[data-v-3f397721]{text-align:left;color:#666;padding:6px 8px;font-size:11px;font-weight:600}td[data-v-3f397721]{vertical-align:top;word-break:break-all;border-top:1px solid #f3f4f6;padding:8px;font-size:12px}.inline-flex-box[data-v-3f397721]{align-items:center;display:inline-flex}.inline-flex-box-column[data-v-3f397721]{flex-direction:column;align-items:flex-start;display:inline-flex}.btn[data-v-3f397721]{cursor:pointer;color:#333;background:#fff;border:1px solid #d2d5d8;border-radius:6px;padding:6px 12px;font-size:12px;font-weight:600;transition:all .2s}.btn[data-v-3f397721]:hover{background:#f8f9fa;border-color:#b0b4b8}.btn[data-v-3f397721]:disabled{opacity:.5;cursor:not-allowed}.sm-btn[data-v-3f397721]{margin-left:4px;padding:2px 6px;font-size:11px}.btn-primary[data-v-3f397721]{color:#fff;background:#000;border:none}.btn-primary[data-v-3f397721]:hover{background:#333}.btn-google[data-v-3f397721]{color:#fff;background:linear-gradient(135deg,#1a73e8,#7c3aed);border:none}.btn-google[data-v-3f397721]:hover{background:linear-gradient(135deg,#1557b0,#6d28d9)}.jx-badge[data-v-3f397721]{text-transform:uppercase;border-radius:4px;padding:3px 5px;font-size:10px;font-weight:700;line-height:1;display:inline-block}.b-true[data-v-3f397721]{color:#059669;background:#d1fae5;padding:2px 3px}.b-false[data-v-3f397721]{color:#dc2626;background:#fee2e2;padding:2px 3px}.b-neu[data-v-3f397721]{color:#4b5563;background:#f3f4f6}.b-purp[data-v-3f397721]{color:#6b21a8;background:#f3e8ff}.b-blue[data-v-3f397721]{color:#1e40af;background:#dbeafe}.timestamp[data-v-3f397721]{color:#5d5d5d;font-variant-numeric:tabular-nums;margin-top:4px;font-size:11px;font-weight:500}.mini-status[data-v-3f397721]{border-bottom:1px dashed #eee;justify-content:space-between;margin-bottom:2px;padding-bottom:2px;font-size:11px;display:flex}.diff-item[data-v-3f397721]{color:#374151;justify-content:space-between;margin-bottom:2px;font-size:11px;display:flex}details summary[data-v-3f397721]{cursor:pointer;color:#2563eb;outline:none;font-size:10px;font-weight:600}pre[data-v-3f397721]{color:#333;white-space:pre-wrap;background:#f4f6f8;border-radius:4px;max-height:100px;margin:4px 0 0;padding:6px;font-family:monospace;font-size:10px;overflow:auto}.monitor[data-v-2ef585c2]{color:#111;background:#fff;flex-direction:column;height:100%;min-height:420px;font:13px/1.5 -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;display:flex;overflow:hidden}.toolbar[data-v-2ef585c2]{z-index:5;background:#fff;flex:none;align-items:center;gap:10px;height:52px;display:flex;position:relative}.search-box[data-v-2ef585c2]{background:#fff;border:1px solid #e2e2e2;border-radius:4px;flex:1;align-items:center;gap:8px;min-width:160px;max-width:400px;height:32px;padding:0 10px;display:flex}.search-box input[data-v-2ef585c2]{color:#111;width:100%;font:inherit;background:0 0;border:0;outline:none}.search-box[data-v-2ef585c2]:focus-within{border-color:#000}.tid-select[data-v-2ef585c2],.sort-btn[data-v-2ef585c2],.config-trigger[data-v-2ef585c2]{color:#111;cursor:pointer;white-space:nowrap;background:#fff;border:1px solid #e2e2e2;border-radius:4px;align-items:center;height:32px;padding:0 10px;font:500 12px/1 inherit;display:flex}.tid-select[data-v-2ef585c2]:hover,.sort-btn[data-v-2ef585c2]:hover,.config-trigger[data-v-2ef585c2]:hover{border-color:#737373}.rule-count[data-v-2ef585c2]{color:#111;text-align:center;background:#f1f1f1;border-radius:10px;min-width:16px;margin-left:4px;padding:1px 5px;font-size:9px;font-weight:600}.toolbar-stats[data-v-2ef585c2]{font-variant-numeric:tabular-nums;white-space:nowrap;color:#737373;margin-left:auto;font-size:11px}.toolbar-stats span[data-v-2ef585c2],.helper[data-v-2ef585c2]{color:#737373}.settings-popover[data-v-2ef585c2]{z-index:10;background:#fff;border:1px solid #e2e2e2;border-radius:6px;width:min(360px,100%);padding:14px;position:absolute;top:48px;right:0;box-shadow:0 8px 24px #00000014}.popover-heading[data-v-2ef585c2],.setting-label[data-v-2ef585c2],.setting-row[data-v-2ef585c2],.popover-actions[data-v-2ef585c2]{justify-content:space-between;align-items:center;gap:8px;display:flex}.popover-heading[data-v-2ef585c2]{border-bottom:1px solid #eee;padding-bottom:10px}.popover-heading span[data-v-2ef585c2],.setting-label span[data-v-2ef585c2],.helper[data-v-2ef585c2],.setting-hint[data-v-2ef585c2]{color:#888;font-size:10px}.settings-section[data-v-2ef585c2]{padding:10px 0}.setting-label label[data-v-2ef585c2],.setting-row strong[data-v-2ef585c2]{color:#262626;font-size:11px;font-weight:600}.settings-popover textarea[data-v-2ef585c2],.setting-row input[data-v-2ef585c2]{color:#111;background:#fff;border:1px solid #ddd;border-radius:4px;outline:none;font:12px/1.4 ui-monospace,monospace}.settings-popover textarea[data-v-2ef585c2]{resize:vertical;width:100%;margin-top:6px;padding:8px;display:block}.settings-popover textarea[data-v-2ef585c2]:focus,.setting-row input[data-v-2ef585c2]:focus{border-color:#333}.helper[data-v-2ef585c2],.error-text[data-v-2ef585c2]{margin:5px 0 0}.error-text[data-v-2ef585c2]{color:#b42318;font-size:10px}.setting-row[data-v-2ef585c2]{border-top:1px solid #eee;padding:10px 0}.setting-row strong[data-v-2ef585c2],.setting-hint[data-v-2ef585c2]{display:block}.setting-row input[data-v-2ef585c2]{width:72px;height:30px;padding:0 7px}.popover-actions[data-v-2ef585c2]{border-top:1px solid #eee;justify-content:flex-start;padding-top:10px}.primary-button[data-v-2ef585c2],.text-button[data-v-2ef585c2]{cursor:pointer;height:30px;font:inherit;border:0;border-radius:4px;padding:0 10px;font-size:11px}.text-button[data-v-2ef585c2]{color:#555;background:#f5f5f5}.text-button[data-v-2ef585c2]:hover{color:#111;background:#eaeaea}.primary-button[data-v-2ef585c2]{color:#fff;background:#111;margin-left:auto}.primary-button[data-v-2ef585c2]:hover{background:#333}.workspace[data-v-2ef585c2]{background:#fafafa;flex:1;gap:12px;min-height:0;display:flex;overflow:hidden}.list-panel[data-v-2ef585c2],.detail-panel[data-v-2ef585c2]{background:#fff;border:1px solid #e2e2e2;border-radius:6px;flex-direction:column;flex:1;min-width:0;min-height:0;display:flex;overflow:hidden}.list-scroll[data-v-2ef585c2],.detail-scroll[data-v-2ef585c2]{scrollbar-width:thin;scrollbar-color:#d1d1d1 transparent;flex:1;min-height:0;position:relative;overflow:auto}.list-scroll[data-v-2ef585c2]{overflow-anchor:none}.log-table[data-v-2ef585c2]{border-collapse:collapse;table-layout:fixed;width:100%}.log-table thead[data-v-2ef585c2]{z-index:2;background:#fafafa;position:sticky;top:0}.log-table th[data-v-2ef585c2]{color:#737373;text-align:left;white-space:nowrap;border-bottom:1px solid #e2e2e2;height:36px;padding:0 10px;font-size:10px;font-weight:600}.highlight-toggle[data-v-2ef585c2]{opacity:.6;cursor:pointer;align-items:center;gap:3px;margin-left:6px;display:inline-flex}.highlight-toggle[data-v-2ef585c2]:hover{opacity:1}.highlight-toggle input[data-v-2ef585c2]{accent-color:#000;cursor:pointer;width:12px;height:12px;margin:0}.log-table td[data-v-2ef585c2]{border-bottom:1px solid #f0f0f0;height:40px;padding:0 10px;font-size:11px;overflow:hidden}.log-row[data-v-2ef585c2]{cursor:pointer;transition:background-color .1s}.log-row[data-v-2ef585c2]:hover{background:#f9f9f9}.log-row.selected[data-v-2ef585c2]{background:#f1f1f1}.log-row.selected td[data-v-2ef585c2]:first-child{box-shadow:inset 2px 0 #000}.cell-text[data-v-2ef585c2]{text-overflow:ellipsis;white-space:nowrap;display:block;overflow:hidden}.badge[data-v-2ef585c2]{color:#111;white-space:nowrap;background:#f1f1f1;border:1px solid #e5e5e5;border-radius:3px;margin:2px 0;padding:2px 6px;font-size:12px;font-weight:500;line-height:16px;display:inline-block}.multiline .badge[data-v-2ef585c2]{text-overflow:ellipsis;width:fit-content;max-width:100%;margin:6px 0;display:block;overflow:hidden}.time-cell[data-v-2ef585c2]{color:#86868b;font-variant-numeric:tabular-nums}.measurement-cell[data-v-2ef585c2]{font-weight:700}.frame-label[data-v-2ef585c2]{color:#7c3aed;cursor:pointer;background:#ede9fe;border-left:4px solid #8b5cf6;align-items:center;padding:0 10px;font-size:10px;font-weight:700;display:inline-flex}.status-indicator[data-v-2ef585c2]{color:#777;white-space:nowrap;align-items:baseline;gap:5px;min-width:0;display:flex}.status-indicator[data-v-2ef585c2]:before{content:\"\";background:#aaa;border-radius:50%;flex:none;align-self:center;width:6px;height:6px}.status-indicator strong[data-v-2ef585c2]{color:#222;font-variant-numeric:tabular-nums}.status-indicator span[data-v-2ef585c2]{text-overflow:ellipsis;overflow:hidden}.status-success .status-indicator[data-v-2ef585c2]:before{background:#3b8661}.status-fail .status-indicator[data-v-2ef585c2]:before{background:#c14a4a}.status-pending .status-indicator[data-v-2ef585c2]:before{background:#b28a38}.navigation-row td[data-v-2ef585c2]{background:#fafafa;height:auto;padding:3px 10px}.navigation-content[data-v-2ef585c2]{align-items:center;gap:8px;font-size:10px;display:flex}.nav-type[data-v-2ef585c2]{color:#fff;text-transform:uppercase;background:#8e8e93;border-radius:3px;flex:none;padding:2px 6px;font-weight:700}.nav-paths[data-v-2ef585c2]{flex-direction:column;flex:1;gap:3px;min-width:0;display:flex}.nav-paths>div[data-v-2ef585c2]{align-items:baseline;gap:8px;display:flex}.nav-paths>div>span[data-v-2ef585c2]:first-child{color:#999;flex:none;width:32px;font-size:9px;font-weight:700}.nav-paths>div>span[data-v-2ef585c2]:last-child{color:#444;overflow-wrap:anywhere;min-width:0}.spacer td[data-v-2ef585c2]{border:0;padding:0}.empty-list[data-v-2ef585c2],.empty-detail[data-v-2ef585c2]{color:#737373;flex-direction:column;justify-content:center;align-items:center;gap:6px;display:flex}.empty-list[data-v-2ef585c2]{background:#fffffff2;font-size:11px;position:absolute;inset:0}.empty-list strong[data-v-2ef585c2],.empty-detail strong[data-v-2ef585c2]{color:#111;font-size:12px;font-weight:600}.list-footer[data-v-2ef585c2]{color:#737373;background:#fafafa;border-top:1px solid #e2e2e2;flex:none;align-items:center;height:32px;padding:0 12px;font-size:10px;display:flex}.detail-header[data-v-2ef585c2]{background:#fafafa;border-bottom:1px solid #e2e2e2;justify-content:space-between;align-items:center;padding:10px 14px;display:flex}.close-btn[data-v-2ef585c2]{color:inherit;cursor:pointer;background:0 0;border:none;border-radius:4px;justify-content:center;align-items:center;padding:4px;display:inline-flex}.close-btn[data-v-2ef585c2]:hover{background-color:#00000014}.detail-header h2[data-v-2ef585c2]{color:#111;margin:2px 0 0;font-size:13px;font-weight:600}.detail-meta[data-v-2ef585c2]{color:#737373;background:#fff;border-bottom:1px solid #e2e2e2;justify-content:space-between;gap:10px;padding:6px 14px;font-size:10px;display:flex}.mono[data-v-2ef585c2]{text-overflow:ellipsis;white-space:nowrap;font-family:ui-monospace,monospace;overflow:hidden}.detail-scroll[data-v-2ef585c2]{padding:12px 16px}.detail-section[data-v-2ef585c2]{border-bottom:1px solid #f0f0f0;margin-bottom:8px;padding-bottom:6px}.detail-section h3[data-v-2ef585c2]{color:#111;letter-spacing:.04em;margin:0 0 8px;font-size:12px;font-weight:700}.kv-row[data-v-2ef585c2]{color:#737373;justify-content:space-between;align-items:center;gap:12px;padding:2px 0;font-size:10px;display:flex}.kv-row span[data-v-2ef585c2]{min-width:100px;font-weight:500}.kv-value[data-v-2ef585c2]{flex:1;align-items:center;gap:8px;max-width:70%;display:flex}.kv-row pre[data-v-2ef585c2]{color:#111;text-align:left;white-space:pre-wrap;overflow-wrap:anywhere;background:#f9f9f9;border:1px solid #eee;border-radius:3px;width:100%;max-height:120px;margin:0;padding:4px 6px;font:11px/1.4 ui-monospace,monospace;overflow:auto}.kv-row button[data-v-2ef585c2]{color:#111;cursor:pointer;background:#fff;border:1px solid #e2e2e2;border-radius:3px;flex:none;padding:2px 6px;font-size:9px}.kv-row button[data-v-2ef585c2]:hover{background:#f1f1f1}.fold-section[data-v-2ef585c2]{background:#fff;border:1px solid #e2e2e2;border-radius:4px;margin:6px 0;overflow:hidden}.fold-section summary[data-v-2ef585c2]{color:#111;cursor:pointer;background:#fafafa;padding:6px 10px;font-size:10px;font-weight:600}.fold-section summary[data-v-2ef585c2]:hover{background:#f5f5f5}.fold-content[data-v-2ef585c2]{background:#fff;border-top:1px solid #e2e2e2;padding:8px 10px}.empty-detail[data-v-2ef585c2]{color:#737373;flex-direction:column;flex:1;justify-content:center;align-items:center;gap:6px;font-size:10px;display:flex}.detail-icon[data-v-2ef585c2]{color:#737373;background:#fafafa;border:1px solid #e2e2e2;border-radius:6px;place-items:center;width:36px;height:36px;font-size:16px;display:grid}@media (width<=900px){.workspace[data-v-2ef585c2]{grid-template-rows:minmax(160px,1fr) minmax(160px,1fr);grid-template-columns:minmax(0,1fr);overflow:auto}.list-panel[data-v-2ef585c2],.detail-panel[data-v-2ef585c2]{min-height:180px}}.jx-intercept-container[data-v-31ffbb4c]{font-family:PingFang SC,Microsoft YaHei,sans-serif}.jx-modal-desc[data-v-31ffbb4c]{color:#666;word-break:break-all;text-align:left;background:#f5f5f7;border-radius:8px;margin-top:8px;padding:12px;font-size:14px;line-height:1.6}.jx-modal-option[data-v-31ffbb4c]{justify-content:flex-end;margin-top:12px;font-size:13px;display:flex}label[data-v-54a5a682]{color:#404040;grid-column:1/-1;gap:4px;font-size:12px;font-weight:500;display:grid}.tip-text[data-v-54a5a682]{color:#8a8a8a;font-size:11px;font-weight:400}.modern-textarea[data-v-54a5a682]{resize:vertical;border-radius:6px;font-size:12px;line-height:1.5}.snapshot[data-v-e267dffe]{color:#404040;font-size:12px}details[data-v-e267dffe]{background:#fff;border:1px solid #e8e8e8;border-radius:6px;margin-top:8px;padding:6px 9px}summary[data-v-e267dffe]{cursor:pointer;font-weight:600}small[data-v-e267dffe],.facts[data-v-e267dffe],.stats[data-v-e267dffe]{color:#737373;font-size:11px;font-weight:400}.stats[data-v-e267dffe]{flex-wrap:wrap;gap:4px 10px;margin-left:8px;display:inline-flex}.stats b[data-v-e267dffe]{color:#404040;font-weight:600}.stats .running b[data-v-e267dffe]{color:#5a8b70}ul[data-v-e267dffe]{overscroll-behavior:contain;max-height:200px;margin:0;padding:0;list-style:none;overflow-y:auto}li[data-v-e267dffe]{overflow-wrap:anywhere;border-top:1px solid #eee;margin-top:6px;padding-top:6px}.url[data-v-e267dffe]{font-family:monospace}.facts[data-v-e267dffe]{flex-wrap:wrap;gap:4px;margin-top:5px;display:flex}.facts span[data-v-e267dffe]{background:#f2f2f2;border-radius:4px;padding:1px 6px;line-height:1.5}.host-drawer .section-title[data-v-75a1b1b8]{border-top:1px solid #ededed;margin:12px 0 8px;padding-top:12px}.wide[data-v-75a1b1b8]{grid-column:1/-1}label[data-v-75a1b1b8]{color:#737373;flex-direction:column;gap:4px;min-width:0;font-size:12px;display:flex}.jx-config-grid[data-v-75a1b1b8] .ant-input,.jx-config-grid[data-v-75a1b1b8] .ant-select{width:100%;font-size:12px}.jx-config-grid[data-v-75a1b1b8] .ant-input,.jx-config-grid[data-v-75a1b1b8] .ant-select-selector{border-radius:6px}.behavior-grid[data-v-75a1b1b8]{margin-top:8px}.advanced-style[data-v-75a1b1b8]{color:#525252;margin-top:8px;font-size:12px}.advanced-style summary[data-v-75a1b1b8]{cursor:pointer;font-weight:500}.advanced-style p[data-v-75a1b1b8]{color:#858585;margin:6px 0}.custom-row[data-v-75a1b1b8]{grid-template-columns:minmax(0,1fr) minmax(0,1fr) auto;align-items:center;gap:5px;margin:5px 0;display:grid}.add-custom[data-v-75a1b1b8]{color:#404040;cursor:pointer;background:0 0;border:0;padding:4px 0}.jx-config-grid[data-v-75a1b1b8] .ant-input:hover,.jx-config-grid[data-v-75a1b1b8] .ant-select:hover .ant-select-selector{border-color:#a3a3a3}.add-custom[data-v-75a1b1b8]:hover{color:#000;text-decoration:underline}.update-manager[data-v-5b505460]{display:inline-flex}.trigger-entry[data-v-5b505460]{color:#525252;cursor:pointer;-webkit-user-select:none;user-select:none;background:#fff;border:1px solid #e5e5e5;border-radius:99px;align-items:center;gap:3px;padding:1px 8px;font-size:11px;font-weight:500;transition:all .2s cubic-bezier(.4,0,.2,1);display:flex}.trigger-entry[data-v-5b505460]:hover{color:#171717;border-color:#171717}.status-dot[data-v-5b505460]{background:#a3a3a3;border-radius:50%;width:3px;height:3px;transition:background .2s}.trigger-entry.has-update[data-v-5b505460]{color:#fff;background:#171717;border-color:#171717}.trigger-entry.has-update .status-dot[data-v-5b505460]{background:#fff;box-shadow:0 0 6px #fff9}.popover-panel[data-v-5b505460]{color:#171717;width:210px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:12px}.panel-header[data-v-5b505460]{border-bottom:1px solid #f4f4f5;justify-content:space-between;align-items:center;margin-bottom:4px;padding-bottom:8px;display:flex}.panel-title[data-v-5b505460]{letter-spacing:-.01em;font-size:12px;font-weight:600}.icon-refresh[data-v-5b505460]{cursor:pointer;color:#a3a3a3;background:0 0;border:none;padding:2px;font-size:13px;line-height:1;transition:color .15s}.icon-refresh[data-v-5b505460]:hover{color:#171717}.icon-refresh.spinning[data-v-5b505460]{animation:.8s linear infinite spin-5b505460}.panel-empty[data-v-5b505460]{text-align:center;padding:12px 0 6px}.status-text[data-v-5b505460]{color:#737373;margin:0;font-size:11px}.version-tag[data-v-5b505460]{color:#a3a3a3;margin-top:4px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:10px;display:inline-block}.panel-body[data-v-5b505460]{padding-top:2px}.update-item[data-v-5b505460]{border-bottom:1px solid #fafafa;padding:6px 0}.update-item .name[data-v-5b505460]{color:#171717;font-weight:500;line-height:1.3}.ver-change[data-v-5b505460]{color:#737373;margin-top:1px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:10px}.notes[data-v-5b505460]{color:#737373;white-space:pre-wrap;margin:3px 0 0;font-size:11px;line-height:1.4}.update-btn[data-v-5b505460]{color:#fff;letter-spacing:.02em;background:#171717;border-radius:6px;justify-content:center;align-items:center;margin-top:10px;padding:6px 0;font-size:11px;font-weight:500;text-decoration:none;transition:background .15s;display:flex}.update-btn[data-v-5b505460]:hover{color:#fff;background:#333}@keyframes spin-5b505460{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.monochrome-popover .ant-popover-inner{border:1px solid #e5e5e5;border-radius:8px;padding:10px 12px;box-shadow:0 10px 15px -3px #0000000d,0 4px 6px -4px #0000000d}.plugin-icon[data-v-517b0ad6]{vertical-align:middle;flex:none;justify-content:center;align-items:center;width:1em;height:1em;line-height:1;display:inline-flex}img[data-v-517b0ad6]{object-fit:contain;width:100%;height:100%;display:block}.drawer-header[data-v-513ce6d7],.drawer-title-group[data-v-513ce6d7],.drawer-actions[data-v-513ce6d7]{align-items:center;display:flex}.drawer-header[data-v-513ce6d7]{justify-content:space-between;width:100%;min-width:0}.drawer-title-group[data-v-513ce6d7]{gap:8px;min-width:0}.drawer-actions[data-v-513ce6d7]{flex-shrink:1;gap:4px;min-width:0}.domain-button[data-v-513ce6d7]{text-overflow:ellipsis;white-space:nowrap;color:#737373;cursor:pointer;background:0 0;border:0;border-radius:6px;max-width:150px;padding:5px 7px;font-size:11px;overflow:hidden}.domain-button[data-v-513ce6d7]:hover{color:#171717;background:#f2f2f2}.main-title[data-v-513ce6d7]{color:#171717;white-space:nowrap;font-size:14px;font-weight:600}.status-badge[data-v-513ce6d7]{border-radius:999px;padding:2px 7px;font-size:10px;line-height:1.4}.status-badge.warning[data-v-513ce6d7]{color:#765a26;background:#f7f1e5}.host-close[data-v-513ce6d7]{flex:none}.dot[data-v-513ce6d7]{background:#737373;border-radius:50%;flex:none;width:6px;height:6px;display:inline-block}.host-section[data-v-513ce6d7],.plugin-card[data-v-513ce6d7]{background:#fff;border:1px solid #e8e8e8;border-radius:8px;transition:border-color .2s}.host-section[data-v-513ce6d7]{margin-bottom:16px}.host-section[data-v-513ce6d7]:hover,.host-section[open][data-v-513ce6d7],.plugin-card[data-v-513ce6d7]:hover,.plugin-card.is-expanded[data-v-513ce6d7]{border-color:#cfcfcf}.host-section-title[data-v-513ce6d7]{color:#171717;cursor:pointer;align-items:center;gap:8px;padding:10px 12px;font-size:13px;font-weight:600;list-style:none;display:flex}.host-section-title[data-v-513ce6d7]::-webkit-details-marker{display:none}.host-expand-icon[data-v-513ce6d7]{color:#737373;border-radius:5px;flex:none;place-items:center;width:22px;height:22px;transition:transform .2s,background .2s;display:grid}.host-section[open] .host-expand-icon[data-v-513ce6d7]{transform:rotate(90deg)}.host-section-title:hover .host-expand-icon[data-v-513ce6d7]{color:#171717;background:#f2f2f2}.host-section-content[data-v-513ce6d7]{border-top:1px solid #f0f0f0;padding:12px}.preferences-title[data-v-513ce6d7]{grid-column:1/-1}.host-preferences[data-v-513ce6d7]{margin-top:12px}.list-summary-bar[data-v-513ce6d7]{justify-content:space-between;align-items:center;min-height:28px;margin-bottom:6px;display:flex}.count-text[data-v-513ce6d7]{color:#262626;font-size:12px;font-weight:600}.count-text small[data-v-513ce6d7]{color:#89939e;margin-left:4px;font-weight:400}.toggle-hidden-btn[data-v-513ce6d7]{color:#68798b;padding:0;font-size:12px}.dot-success[data-v-513ce6d7]{background:#6b9b82}.dot-error[data-v-513ce6d7]{background:#b65d5d}.dot-warning[data-v-513ce6d7]{background:#ad8745}.plugin-list[data-v-513ce6d7]{flex-direction:column;gap:8px;display:flex}.plugin-card[data-v-513ce6d7]{padding:8px 12px}.plugin-card.is-disabled .plugin-icon[data-v-513ce6d7],.plugin-card.is-disabled .summary-info[data-v-513ce6d7]{opacity:.55}.plugin-summary[data-v-513ce6d7]{cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;gap:8px;display:flex}.expand-icon-btn[data-v-513ce6d7]{color:#737373;cursor:pointer;background:0 0;border:0;border-radius:5px;flex:none;place-items:center;width:22px;height:22px;padding:0;transition:transform .2s,background .2s;display:grid}.expand-icon-btn.expanded[data-v-513ce6d7]{transform:rotate(90deg)}.expand-icon-btn[data-v-513ce6d7]:hover{color:#171717;background:#f2f2f2}.plugin-icon[data-v-513ce6d7]{align-items:center;font-size:16px;display:flex}.summary-info[data-v-513ce6d7]{flex-wrap:wrap;flex:1;align-items:center;gap:3px 6px;min-width:0;display:flex}.plugin-name[data-v-513ce6d7]{color:#171717;font-size:13px;font-weight:600;line-height:1.3}.version-tag[data-v-513ce6d7]{color:#999;font-family:monospace;font-size:10px}.plugin-desc[data-v-513ce6d7]{color:#888;text-overflow:ellipsis;white-space:nowrap;width:100%;margin:0;font-size:11px;overflow:hidden}.summary-actions[data-v-513ce6d7]{flex-direction:column;flex:none;align-items:flex-end;gap:5px;display:flex}.summary-status[data-v-513ce6d7]{align-items:center;gap:6px;min-height:20px;display:flex}.runtime-tag[data-v-513ce6d7]{white-space:nowrap;border-radius:5px;margin:0;padding:1px 7px;font-size:11px}.runtime-tag.ant-tag-default[data-v-513ce6d7]{color:#737b84;background:#f2f3f5}.config-change[data-v-513ce6d7]{background:#666;border-radius:50%;width:6px;height:6px}.action-toolbar[data-v-513ce6d7]{align-items:center;gap:8px;display:flex}.action-divider[data-v-513ce6d7]{background:#e8e8e8;width:1px;height:16px}.open-plugin-wrap[data-v-513ce6d7]{display:flex}.open-plugin-btn[data-v-513ce6d7]{color:#525252;cursor:pointer;background:0 0;border:0;border-radius:5px;place-items:center;width:26px;height:26px;padding:0;display:grid}.open-plugin-btn[data-v-513ce6d7]:hover:not(:disabled){color:#171717;background:#f2f2f2}.open-plugin-btn[data-v-513ce6d7]:focus-visible,.config-change[data-v-513ce6d7]:focus-visible{outline-offset:2px;outline:2px solid #737373}.open-plugin-btn[data-v-513ce6d7]:disabled{color:#c5c5c5;cursor:not-allowed}.plugin-details[data-v-513ce6d7]{border-top:1px solid #ededed;margin-top:10px;padding-top:10px}.host-drawer .section-divider[data-v-513ce6d7]{margin:12px 0 8px}.match-context-card[data-v-513ce6d7]{margin-bottom:8px}.context-row[data-v-513ce6d7]{justify-content:space-between;align-items:center;gap:8px;min-height:24px;font-size:12px;display:flex}.context-left[data-v-513ce6d7],.context-right-status[data-v-513ce6d7]{align-items:center;gap:6px;min-width:0;display:flex}.context-left strong[data-v-513ce6d7]{color:#262626;white-space:nowrap}.context-hint[data-v-513ce6d7],.context-disabled-tip[data-v-513ce6d7]{color:#89939e;white-space:nowrap;font-size:10px}.context-right-status[data-v-513ce6d7]{max-width:45%}.reason-text[data-v-513ce6d7]{color:#737373;text-overflow:ellipsis;white-space:nowrap;font-size:11px;overflow:hidden}.context-editor-wrap[data-v-513ce6d7]{border-top:1px solid #ededed;margin-top:8px;padding-top:8px}.drawer-footer-content[data-v-513ce6d7]{justify-content:space-between;align-items:center;gap:10px;width:100%;display:flex}.status-indicator[data-v-513ce6d7]{color:#888;align-items:center;gap:6px;font-size:11px;display:flex}.pending-text[data-v-513ce6d7]{color:#876b39}.footer-actions[data-v-513ce6d7]{gap:6px;display:flex}.btn-action[data-v-513ce6d7]{border-radius:6px;font-size:12px}@media (width<=420px){.context-row[data-v-513ce6d7]{flex-wrap:wrap}.context-right-status[data-v-513ce6d7]{max-width:100%}}.host-drawer .jx-config-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;display:grid}.host-drawer .jx-config-title{color:#262626;margin:0;font-size:12px;font-weight:600}.host-drawer .jx-config-panel{background:#fafafa;border:1px solid #e8e8e8;border-radius:8px;padding:10px}.host-drawer .jx-config-switch{color:#404040;background:#fff;border:1px solid #e8e8e8;border-radius:6px;justify-content:space-between;align-items:center;gap:8px;min-width:0;min-height:34px;padding:6px 8px;font-size:12px;display:flex}.host-drawer .jx-config-switch .ant-switch{flex:none}@media (width<=420px){.host-drawer .host-preferences{grid-template-columns:1fr}}.jx-fab-container[data-v-197fdc16]{--fab-size:36px;--fab-radius-dock-right:50% 0 0 50%;--fab-radius-dock-left:0 50% 50% 0;--fab-radius-dragging:50%;z-index:var(--jx-floating-z-index,2147480000);width:var(--fab-size);height:var(--fab-size);cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none;position:fixed}.jx-fab-container.is-dragging[data-v-197fdc16]{cursor:grabbing}.jx-fab-backdrop[data-v-197fdc16]{-webkit-backdrop-filter:blur(14px);background:#ffffffa6;transition:border-radius .3s cubic-bezier(.16,1,.3,1),background .2s;position:absolute;inset:0;overflow:hidden;box-shadow:0 2px 16px #0000001f}.jx-fab-container.side-right:not(.is-dragging) .jx-fab-backdrop[data-v-197fdc16]{border-radius:var(--fab-radius-dock-right)}.jx-fab-container.side-left:not(.is-dragging) .jx-fab-backdrop[data-v-197fdc16]{border-radius:var(--fab-radius-dock-left)}.jx-fab-container.is-dragging .jx-fab-backdrop[data-v-197fdc16],.jx-fab-container:hover:not(.is-dragging) .jx-fab-backdrop[data-v-197fdc16]{border-radius:var(--fab-radius-dragging);background:#ffffffd9}.jx-fab-content[data-v-197fdc16]{color:#111;pointer-events:none;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%;display:flex}.jx-recall-list[data-v-197fdc16]{z-index:var(--jx-floating-list-z-index,2147480000);opacity:0;visibility:hidden;-webkit-backdrop-filter:blur(16px);border-radius:12px;flex-direction:column;justify-content:center;align-items:center;gap:4px;width:36px;max-height:calc(100vh - 16px);transition:opacity .2s cubic-bezier(.16,1,.3,1),visibility .2s cubic-bezier(.16,1,.3,1),transform .2s cubic-bezier(.16,1,.3,1);display:flex;position:fixed;overflow:auto;transform:scale(.95);box-shadow:0 10px 30px -5px #0000001a,0 4px 12px -2px #0000000d}.jx-recall-list[data-v-197fdc16]::-webkit-scrollbar{width:4px}.jx-recall-list[data-v-197fdc16]::-webkit-scrollbar-thumb{background:#00000026;border-radius:4px}.jx-fab-container:hover~.jx-recall-list[data-v-197fdc16],.jx-recall-list[data-v-197fdc16]:hover{opacity:1;visibility:visible;transform:scale(1)}.jx-recall-item[data-v-197fdc16]{color:#262626;cursor:pointer;width:36px;height:36px;font:inherit;background:0 0;border:1px solid #0000;border-radius:10px;justify-content:center;align-items:center;padding:0;transition:all .2s cubic-bezier(.16,1,.3,1);display:flex;position:relative}.jx-recall-icon[data-v-197fdc16]{justify-content:center;align-items:center;font-size:16px;line-height:1;transition:transform .2s;display:flex}.jx-recall-item[data-v-197fdc16]:hover:not(:disabled){background:#ffffffe6;border-color:#0000000f;transform:translateY(-1px);box-shadow:0 4px 12px #00000014}.jx-recall-item:hover:not(:disabled) .jx-recall-icon[data-v-197fdc16]{transform:scale(1.1)}.jx-recall-item[data-v-197fdc16]:active:not(:disabled){transform:translateY(0)scale(.96)}.jx-recall-item[data-v-197fdc16]:disabled{opacity:.4;cursor:not-allowed}@media (prefers-color-scheme:dark){.jx-recall-list[data-v-197fdc16]{background:#1e1e1ecc;border:1px solid #ffffff14;box-shadow:0 10px 30px -5px #0006}.jx-recall-list[data-v-197fdc16]::-webkit-scrollbar-thumb{background:#fff3}.jx-recall-item[data-v-197fdc16]{color:#f3f4f6}.jx-recall-item[data-v-197fdc16]:hover:not(:disabled){background:#ffffff1a;border-color:#ffffff14}.jx-fab-backdrop[data-v-197fdc16]{background:#1a1a1aa6}.jx-fab-container.is-dragging .jx-fab-backdrop[data-v-197fdc16],.jx-fab-container:hover:not(.is-dragging) .jx-fab-backdrop[data-v-197fdc16]{background:#262626d9}.jx-fab-content[data-v-197fdc16]{color:#f3f4f6}}.jx-assistant-root{color:#171717;font-family:Inter,system-ui,sans-serif}.jx-fab-container,.jx-recall-list{pointer-events:auto}\n/*$vite$:1*/ ");
	var _hoisted_1$14 = { class: "example-plugin" };
	var index_vue_vue_type_script_setup_true_lang_default$4 = (0, vue.defineComponent)({
		name: "example",
		__name: "index",
		setup(__props) {
			return (_ctx, _cache) => {
				return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_1$14, [..._cache[0] || (_cache[0] = [(0, vue.createElementVNode)("p", null, "窗口类型和交互由 Manifest 与控制中心配置。", -1)])]);
			};
		}
	});
	var _plugin_vue_export_helper_default = (sfc, props) => {
		const target = sfc.__vccOpts || sfc;
		for (const [key, val] of props) target[key] = val;
		return target;
	};
	var config_default$4 = {
		id: "example",
		name: "JX - 示例插件1",
		description: "演示插件视图和对话框窗口配置。",
		version: "0.0.1",
		releaseNotes: "初始版本。",
		ui: {
			title: "示例插件1",
			icon: "💡",
			layout: {
				dialog: { defaultCollapsed: true },
				drawer: {
					placement: "right",
					defaultCollapsed: true
				}
			},
			currentLayout: "dialog"
		},
		app: { view: _plugin_vue_export_helper_default(index_vue_vue_type_script_setup_true_lang_default$4, [["__scopeId", "data-v-2f64fac3"]]) }
	};
	var _hoisted_1$13 = { class: "example-plugin" };
	var config_default$3 = {
		id: "example2",
		name: "JX - 示例插件2",
		description: "演示插件视图和左侧抽屉配置。",
		version: "0.0.2",
		releaseNotes: "初始版本。",
		ui: {
			title: "示例插件2",
			icon: "📦",
			layout: {
				dialog: {
					defaultCollapsed: true,
					style: {
						width: "400px",
						height: "480px",
						maxWidth: "96vw",
						maxHeight: "90vh"
					}
				},
				drawer: {
					placement: "left",
					defaultCollapsed: true,
					style: {
						width: "400px",
						maxWidth: "100vw"
					}
				}
			},
			currentLayout: "drawer"
		},
		app: { view: _plugin_vue_export_helper_default((0, vue.defineComponent)({
			name: "example",
			__name: "index",
			setup(__props) {
				return (_ctx, _cache) => {
					return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_1$13, [..._cache[0] || (_cache[0] = [(0, vue.createElementVNode)("p", null, "窗口类型和交互由 Manifest 与控制中心配置。", -1)])]);
				};
			}
		}), [["__scopeId", "data-v-2461ab84"]]) }
	};
	var shopifyOptions = [
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
	var googleOptions = [
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
	function createSession(logger) {
		const shopifyGlobal = (0, vue.reactive)({
			shouldShowBanner: "-",
			userCanBeTracked: "-"
		});
		const shopifyRecords = (0, vue.ref)([]);
		const shopifyApiLoaded = (0, vue.ref)(false);
		const shopifyCanLoad = (0, vue.ref)(false);
		const shopifyLoading = (0, vue.ref)(false);
		const googleRecords = (0, vue.ref)([]);
		const googleConsentState = (0, vue.reactive)({});
		const dataLayerValues = {};
		let currentDataLayer;
		let active = true;
		const googleTagIcsEntries = (0, vue.shallowRef)({});
		function observe(action) {
			if (!active) return;
			try {
				action();
			} catch (error) {
				logger.error("observe", error);
			}
		}
		const cleanups = [];
		const normalizeBoolean = (v) => {
			if (v === true || v === "granted") return true;
			if (v === false || v === "denied") return false;
			return null;
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
		const getConsentDiff = (oldV, newV) => {
			const fmt = (v) => normalizeBoolean(v) === true ? "granted" : normalizeBoolean(v) === false ? "denied" : "none";
			return {
				old: fmt(oldV),
				new: fmt(newV)
			};
		};
		const getShopifyPrivacy = () => unsafeWindow.Shopify?.customerPrivacy;
		const refreshShopifyApiState = () => {
			const win = unsafeWindow, cp = getShopifyPrivacy();
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
					cvConsent: cloneData(cp.currentVisitorConsent?.() || {}),
					region: cp.getRegion?.() || "-",
					law: cp.getRegulation?.() || "-"
				} : null
			});
		};
		const handleLoadShopifyApi = () => {
			const shopify = unsafeWindow.Shopify;
			if (!shopify?.loadFeatures || shopifyLoading.value) return;
			shopifyLoading.value = true;
			shopify.loadFeatures([{
				name: "consent-tracking-api",
				version: "0.2"
			}], () => {
				if (!active) return;
				try {
					refreshShopifyApiState();
					if (getShopifyPrivacy()) recordShopify("load_api");
				} finally {
					shopifyLoading.value = false;
				}
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
					if (action === "update" || action === "default") (dataLayerValues[id] ??= {})[action] = val;
				}
			});
			readEntriesState(false);
			const diff = {};
			googleOptions.forEach(({ id }) => {
				const newV = newValues[id];
				if (newV !== void 0) {
					const oldV = previousValues[id];
					if (oldV !== newV) diff[id] = getConsentDiff(oldV, newV);
				}
			});
			googleRecords.value.unshift({
				time: getTime(),
				action,
				payload: {
					source: "dataLayer",
					data: cloneData(cmd)
				},
				diff: Object.keys(diff).length ? diff : {}
			});
		};
		const observedDataLayers = new WeakSet();
		const observeDataLayerArray = (dataLayer) => {
			if (currentDataLayer !== dataLayer) {
				currentDataLayer = dataLayer;
				for (const key of Object.keys(dataLayerValues)) delete dataLayerValues[key];
				readEntriesState(false);
			}
			if (!Array.isArray(dataLayer)) return;
			dataLayer.forEach(recordDataLayerCommand);
			if (observedDataLayers.has(dataLayer)) return;
			observedDataLayers.add(dataLayer);
			const originalPush = dataLayer.push;
			const wrappedPush = function(...items) {
				const res = originalPush.apply(this, items);
				if (currentDataLayer === dataLayer) observe(() => items.forEach(recordDataLayerCommand));
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
			if (!desc && key in target || desc?.get && !desc.set) return target[key];
			let assigned = false;
			let val = desc && "value" in desc ? desc.value : desc?.get?.call(target);
			const getter = () => desc?.get ? desc.get.call(target) : val;
			const setter = function(next) {
				assigned = true;
				const prev = getter();
				if (desc?.set) desc.set.call(this, next);
				else val = next;
				const curr = getter();
				if (curr !== prev) observe(() => onChange(curr));
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
					if (Object.getOwnPropertyDescriptor(target, key)?.get === getter) {
						if (desc) Object.defineProperty(target, key, "value" in desc ? {
							...desc,
							value: val
						} : desc);
						else if (assigned) Object.defineProperty(target, key, {
							configurable: true,
							enumerable: true,
							writable: true,
							value: val
						});
						else delete target[key];
					}
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
		const refreshEntries = () => observe(readEntriesState);
		const observeConsentEntry = (entry) => {
			if (!entry || typeof entry !== "object") return;
			googleEntriesActionPriorities.forEach((a) => observeProperty(entry, a, refreshEntries));
		};
		const observedEntriesObjects = new WeakSet();
		const observeEntriesObject = (entries) => {
			if (!entries || typeof entries !== "object") return false;
			if (observedEntriesObjects.has(entries)) return true;
			googleOptions.forEach(({ id }) => {
				observeProperty(entries, id, (val) => {
					observeConsentEntry(val);
					refreshEntries();
				});
				observeConsentEntry(entries[id]);
			});
			observedEntriesObjects.add(entries);
			refreshEntries();
			return true;
		};
		const readEntriesState = (record = true) => {
			const entries = unsafeWindow.google_tag_data?.ics?.entries;
			googleTagIcsEntries.value = entries ?? {};
			(0, vue.triggerRef)(googleTagIcsEntries);
			const internalDiff = {};
			let triggeredAction = "";
			let highestPriority = Infinity;
			googleOptions.forEach(({ id }) => {
				const entry = entries?.[id];
				const action = entry && typeof entry === "object" ? googleEntriesActionPriorities.find((k) => normalizeBoolean(entry[k]) !== null) : void 0;
				const fallback = dataLayerValues[id];
				const fallbackAction = fallback?.update !== void 0 ? "update" : fallback?.default !== void 0 ? "default" : void 0;
				const newVal = action ? normalizeBoolean(entry[action]) : fallbackAction ? fallback[fallbackAction] : null;
				const oldState = googleConsentState[id];
				if (newVal === null) {
					delete googleConsentState[id];
					return;
				}
				const actionSource = action ? `internal:${action}` : "dataLayer";
				if (oldState?.v !== newVal) {
					internalDiff[id] = getConsentDiff(oldState?.v, newVal);
					const pri = googleEntriesActionPriorities.indexOf(action ?? fallbackAction ?? "implicit");
					if (pri < highestPriority) {
						highestPriority = pri;
						triggeredAction = action ?? fallbackAction ?? "change";
					}
				}
				googleConsentState[id] = {
					v: newVal,
					s: actionSource
				};
			});
			if (record && Object.keys(internalDiff).length > 0) googleRecords.value.unshift({
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
			const win = unsafeWindow;
			observeProperty(win, "dataLayer", observeDataLayerArray);
			if (win.dataLayer) observeDataLayerArray(win.dataLayer);
			let isProxyInstalled = false;
			const trySetup = () => {
				const entries = win.google_tag_data?.ics?.entries;
				if (entries && typeof entries === "object") {
					if (observeEntriesObject(entries)) {
						isProxyInstalled = true;
						return true;
					}
				}
				return false;
			};
			const setupEntries = (entries) => {
				if (observeEntriesObject(entries)) isProxyInstalled = true;
			};
			const setupIcs = (ics) => {
				if (!ics || typeof ics !== "object") return;
				observeProperty(ics, "entries", (newEntries) => {
					setupEntries(newEntries);
					refreshEntries();
				});
				if (ics.entries) setupEntries(ics.entries);
			};
			const setupGoogleTagData = (gtd) => {
				if (!gtd || typeof gtd !== "object") return;
				observeProperty(gtd, "ics", (newIcs) => {
					setupIcs(newIcs);
					refreshEntries();
				});
				if (gtd.ics) setupIcs(gtd.ics);
			};
			observeProperty(win, "google_tag_data", (newGtd) => {
				setupGoogleTagData(newGtd);
				refreshEntries();
			});
			if (win.google_tag_data) setupGoogleTagData(win.google_tag_data);
			refreshEntries();
			if (trySetup()) return;
			const initTimer = setInterval(() => observe(() => {
				if (trySetup() || isProxyInstalled) {
					clearInterval(initTimer);
					return;
				}
				const gtd = win.google_tag_data;
				if (gtd) {
					setupGoogleTagData(gtd);
					if (gtd.ics) setupIcs(gtd.ics);
				}
			}), 100);
			cleanups.push(() => clearInterval(initTimer));
		};
		let shopifyTimer;
		const handleVisitorConsentCollected = () => observe(() => recordShopify("update"));
		const start = () => {
			let initRecorded = false;
			const recordInit = () => {
				if (initRecorded || !shopifyApiLoaded.value) return;
				initRecorded = true;
				recordShopify("init");
			};
			refreshShopifyApiState();
			recordInit();
			const observeShopifyObj = (shopifyObj) => {
				if (shopifyObj) {
					observe(() => {
						refreshShopifyApiState();
						recordInit();
					});
					observeProperty(shopifyObj, "customerPrivacy", () => {
						refreshShopifyApiState();
						recordInit();
					});
				}
			};
			observeProperty(unsafeWindow, "Shopify", observeShopifyObj);
			if (unsafeWindow.Shopify) observeShopifyObj(unsafeWindow.Shopify);
			shopifyTimer = setInterval(() => observe(() => {
				refreshShopifyApiState();
				if (shopifyApiLoaded.value) {
					recordInit();
					clearInterval(shopifyTimer);
					shopifyTimer = void 0;
				}
			}), 200);
			unsafeWindow.document.addEventListener("visitorConsentCollected", handleVisitorConsentCollected);
			observeGoogleSources();
		};
		const stop = () => {
			active = false;
			if (shopifyTimer) clearInterval(shopifyTimer);
			unsafeWindow.document.removeEventListener("visitorConsentCollected", handleVisitorConsentCollected);
			for (const cleanup of cleanups.splice(0).reverse()) try {
				cleanup();
			} catch (error) {
				logger.error("cleanup", error);
			}
		};
		return {
			start,
			stop,
			shopifyGlobal,
			shopifyRecords,
			shopifyApiLoaded,
			shopifyCanLoad,
			shopifyLoading,
			googleRecords,
			googleConsentState,
			googleTagIcsEntries,
			recordShopify,
			handleLoadShopifyApi
		};
	}
	var session;
	function startObserver({ logger }) {
		const current = createSession(logger);
		try {
			current.start();
		} catch (error) {
			current.stop();
			throw error;
		}
		session = current;
		return () => {
			current.stop();
			if (session === current) session = void 0;
		};
	}
	function getConsentSession() {
		if (!session) throw new Error("Consent observer has not started");
		return session;
	}
	var _hoisted_1$12 = { class: "split-layout" };
	var _hoisted_2$11 = { class: "col" };
	var _hoisted_3$10 = { class: "col-header" };
	var _hoisted_4$8 = ["disabled"];
	var _hoisted_5$7 = {
		key: 0,
		class: "global-stats"
	};
	var _hoisted_6$7 = { class: "control-box" };
	var _hoisted_7$7 = { class: "chk-grid" };
	var _hoisted_8$7 = ["onUpdate:modelValue"];
	var _hoisted_9$6 = ["disabled"];
	var _hoisted_10$5 = { class: "table-wrapper" };
	var _hoisted_11$5 = { class: "inline-flex-box-column" };
	var _hoisted_12$4 = { class: "jx-badge b-purp" };
	var _hoisted_13$3 = { class: "timestamp" };
	var _hoisted_14$3 = { class: "inline-flex-box-column" };
	var _hoisted_15$2 = { class: "jx-badge b-neu" };
	var _hoisted_16$2 = { open: "" };
	var _hoisted_17$2 = {
		class: "col",
		style: { "flex": "1.35" }
	};
	var _hoisted_18$2 = { class: "control-box split-control" };
	var _hoisted_19$2 = { class: "split-left" };
	var _hoisted_20$2 = { class: "chk-grid chk-grid-column-1" };
	var _hoisted_21$2 = ["onUpdate:modelValue"];
	var _hoisted_22$2 = { class: "action-row" };
	var _hoisted_23$2 = { class: "split-right" };
	var _hoisted_24$2 = { class: "consent-grid" };
	var _hoisted_25$2 = { class: "cell type" };
	var _hoisted_26$2 = { class: "cell" };
	var _hoisted_27$2 = { class: "cell sub" };
	var _hoisted_28$2 = { class: "cell sub" };
	var _hoisted_29$2 = { class: "cell sub" };
	var _hoisted_30$2 = { class: "table-wrapper" };
	var _hoisted_31$2 = { class: "inline-flex-box-column" };
	var _hoisted_32$2 = { class: "timestamp" };
	var _hoisted_33$2 = {
		key: 1,
		style: {
			"color": "#9ca3af",
			"font-size": "10px"
		}
	};
	var config_default$2 = {
		id: "jx-consent-inspector",
		name: "JX - 同意状态监测器",
		description: "查看和设置 Shopify 与 Google 的同意状态，记录状态变化。",
		version: "26.11.23",
		releaseNotes: "完善了获取google内部同意状态的逻辑。",
		ui: {
			title: "Consent Inspector",
			icon: "👀",
			layout: {
				dialog: {
					defaultCollapsed: true,
					style: {
						width: "1300px",
						height: "fit-content",
						maxWidth: "96vw",
						maxHeight: "90vh"
					}
				},
				drawer: {
					placement: "right",
					defaultCollapsed: true,
					style: {
						width: "1300px",
						height: "100vh",
						maxWidth: "100vw",
						maxHeight: "100vh"
					}
				}
			},
			currentLayout: "dialog"
		},
		app: {
			view: _plugin_vue_export_helper_default((0, vue.defineComponent)({
				__name: "index",
				setup(__props) {
					const { shopifyGlobal, shopifyRecords, shopifyApiLoaded, shopifyCanLoad, shopifyLoading, googleRecords, googleConsentState, googleTagIcsEntries, recordShopify, handleLoadShopifyApi } = getConsentSession();
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
					const getBadge = (value) => {
						if (value === true || value === "granted") return {
							text: "TRUE",
							cls: "b-true"
						};
						if (value === false || value === "denied") return {
							text: "FALSE",
							cls: "b-false"
						};
						return {
							text: String(value || "-").toUpperCase(),
							cls: "b-neu"
						};
					};
					const shopifyForm = (0, vue.reactive)({
						preferences: false,
						analytics: false,
						marketing: false,
						sale_of_data: false
					});
					const googleForm = (0, vue.reactive)(Object.fromEntries(googleOptions.map((o) => [o.id, true])));
					const handleManualSetShopify = () => {
						unsafeWindow.Shopify?.customerPrivacy?.setTrackingConsent?.({ ...shopifyForm }, () => {});
					};
					const handleGoogleConsent = (action) => {
						const win = unsafeWindow;
						win.dataLayer = win.dataLayer || [];
						win.gtag = win.gtag || function() {
							win.dataLayer.push(arguments);
						};
						win.gtag("consent", action, Object.fromEntries(Object.entries(googleForm).map(([k, v]) => [k, typeof v === "boolean" ? v ? "granted" : "denied" : v])));
					};
					return (_ctx, _cache) => {
						return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_1$12, [(0, vue.createElementVNode)("div", _hoisted_2$11, [
							(0, vue.createElementVNode)("div", _hoisted_3$10, [_cache[4] || (_cache[4] = (0, vue.createElementVNode)("span", { class: "inline-flex-box" }, [(0, vue.createElementVNode)("img", {
								src: "https://www.google.com/s2/favicons?domain=shopify.com&sz=64",
								width: "16",
								height: "16"
							}), (0, vue.createTextVNode)(" Shopify Customer Privacy ")], -1)), (0, vue.createElementVNode)("div", null, [(0, vue.unref)(shopifyCanLoad) ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("button", {
								key: 0,
								class: "btn sm-btn",
								disabled: (0, vue.unref)(shopifyLoading),
								onClick: _cache[0] || (_cache[0] = (...args) => (0, vue.unref)(handleLoadShopifyApi) && (0, vue.unref)(handleLoadShopifyApi)(...args))
							}, (0, vue.toDisplayString)((0, vue.unref)(shopifyLoading) ? "Loading..." : "Load API"), 9, _hoisted_4$8)) : (0, vue.createCommentVNode)("", true), (0, vue.unref)(shopifyApiLoaded) ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("button", {
								key: 1,
								class: "btn sm-btn",
								onClick: _cache[1] || (_cache[1] = ($event) => (0, vue.unref)(recordShopify)("query"))
							}, "Query")) : (0, vue.createCommentVNode)("", true)])]),
							(0, vue.unref)(shopifyApiLoaded) ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_5$7, [(0, vue.createElementVNode)("div", null, [_cache[5] || (_cache[5] = (0, vue.createTextVNode)("shouldShowBanner: ", -1)), (0, vue.createElementVNode)("span", { class: (0, vue.normalizeClass)(["jx-badge", getBadge((0, vue.unref)(shopifyGlobal).shouldShowBanner).cls]) }, (0, vue.toDisplayString)(getBadge((0, vue.unref)(shopifyGlobal).shouldShowBanner).text), 3)]), (0, vue.createElementVNode)("div", null, [_cache[6] || (_cache[6] = (0, vue.createTextVNode)("userCanBeTracked: ", -1)), (0, vue.createElementVNode)("span", { class: (0, vue.normalizeClass)(["jx-badge", getBadge((0, vue.unref)(shopifyGlobal).userCanBeTracked).cls]) }, (0, vue.toDisplayString)(getBadge((0, vue.unref)(shopifyGlobal).userCanBeTracked).text), 3)])])) : (0, vue.createCommentVNode)("", true),
							(0, vue.createElementVNode)("div", _hoisted_6$7, [(0, vue.createElementVNode)("div", _hoisted_7$7, [((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)((0, vue.unref)(shopifyOptions), (opt) => {
								return (0, vue.openBlock)(), (0, vue.createElementBlock)("label", { key: opt.id }, [(0, vue.withDirectives)((0, vue.createElementVNode)("input", {
									type: "checkbox",
									"onUpdate:modelValue": ($event) => shopifyForm[opt.id] = $event
								}, null, 8, _hoisted_8$7), [[vue.vModelCheckbox, shopifyForm[opt.id]]]), (0, vue.createTextVNode)(" " + (0, vue.toDisplayString)(opt.label), 1)]);
							}), 128))]), (0, vue.createElementVNode)("button", {
								class: "btn btn-primary",
								style: { "width": "100%" },
								disabled: !(0, vue.unref)(shopifyApiLoaded),
								onClick: handleManualSetShopify
							}, " Manual Set Consent ", 8, _hoisted_9$6)]),
							(0, vue.createElementVNode)("div", _hoisted_10$5, [(0, vue.createElementVNode)("table", null, [(0, vue.createElementVNode)("thead", null, [(0, vue.createElementVNode)("tr", null, [((0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(shopifyCols, (c) => {
								return (0, vue.createElementVNode)("th", {
									key: c.key,
									style: (0, vue.normalizeStyle)({ width: c.width })
								}, (0, vue.toDisplayString)(c.label), 5);
							}), 64))])]), (0, vue.createElementVNode)("tbody", null, [((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)((0, vue.unref)(shopifyRecords), (r, idx) => {
								return (0, vue.openBlock)(), (0, vue.createElementBlock)("tr", { key: idx }, [
									(0, vue.createElementVNode)("td", null, [(0, vue.createElementVNode)("div", _hoisted_11$5, [(0, vue.createElementVNode)("span", _hoisted_12$4, (0, vue.toDisplayString)(r.event), 1), (0, vue.createElementVNode)("span", _hoisted_13$3, (0, vue.toDisplayString)(r.time), 1)])]),
									(0, vue.createElementVNode)("td", null, [(0, vue.createElementVNode)("div", _hoisted_14$3, [(0, vue.createElementVNode)("b", null, (0, vue.toDisplayString)(r.state?.region), 1), (0, vue.createElementVNode)("span", _hoisted_15$2, (0, vue.toDisplayString)(r.state?.law), 1)])]),
									(0, vue.createElementVNode)("td", null, [((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)((0, vue.unref)(shopifyOptions), (opt) => {
										return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", {
											class: "mini-status",
											key: opt.id
										}, [(0, vue.createElementVNode)("b", null, (0, vue.toDisplayString)(opt.label), 1), (0, vue.createElementVNode)("span", { class: (0, vue.normalizeClass)(["jx-badge", getBadge(r.state?.[opt.id]).cls]) }, (0, vue.toDisplayString)(getBadge(r.state?.[opt.id]).text), 3)]);
									}), 128))]),
									(0, vue.createElementVNode)("td", null, [(0, vue.createElementVNode)("details", _hoisted_16$2, [_cache[7] || (_cache[7] = (0, vue.createElementVNode)("summary", null, "Details", -1)), (0, vue.createElementVNode)("pre", null, (0, vue.toDisplayString)(JSON.stringify(r.state?.cvConsent, null, 2)), 1)])])
								]);
							}), 128))])])])
						]), (0, vue.createElementVNode)("div", _hoisted_17$2, [
							_cache[10] || (_cache[10] = (0, vue.createElementVNode)("div", { class: "col-header" }, [(0, vue.createElementVNode)("span", { class: "inline-flex-box" }, [(0, vue.createElementVNode)("img", {
								src: "https://www.google.com/s2/favicons?domain=google.com&sz=64",
								width: "16",
								height: "16"
							}), (0, vue.createTextVNode)(" Google Consent Mode ")])], -1)),
							(0, vue.createElementVNode)("div", _hoisted_18$2, [(0, vue.createElementVNode)("div", _hoisted_19$2, [(0, vue.createElementVNode)("div", _hoisted_20$2, [((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)((0, vue.unref)(googleOptions), (opt) => {
								return (0, vue.openBlock)(), (0, vue.createElementBlock)("label", { key: opt.id }, [(0, vue.withDirectives)((0, vue.createElementVNode)("input", {
									type: "checkbox",
									"onUpdate:modelValue": ($event) => googleForm[opt.id] = $event
								}, null, 8, _hoisted_21$2), [[vue.vModelCheckbox, googleForm[opt.id]]]), (0, vue.createTextVNode)(" " + (0, vue.toDisplayString)(opt.label), 1)]);
							}), 128))]), (0, vue.createElementVNode)("div", _hoisted_22$2, [(0, vue.createElementVNode)("button", {
								class: "btn",
								style: { "flex": "1" },
								onClick: _cache[2] || (_cache[2] = ($event) => handleGoogleConsent("default"))
							}, "Set Default"), (0, vue.createElementVNode)("button", {
								class: "btn btn-google",
								style: { "flex": "1" },
								onClick: _cache[3] || (_cache[3] = ($event) => handleGoogleConsent("update"))
							}, "Update")])]), (0, vue.createElementVNode)("div", _hoisted_23$2, [(0, vue.createElementVNode)("div", _hoisted_24$2, [_cache[8] || (_cache[8] = (0, vue.createStaticVNode)("<div class=\"header\" data-v-3f397721>Type</div><div class=\"header\" data-v-3f397721>Effective</div><div class=\"header\" data-v-3f397721>Update</div><div class=\"header\" data-v-3f397721>Default</div><div class=\"header\" data-v-3f397721>Implicit</div>", 5)), ((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)((0, vue.unref)(googleOptions), (opt) => {
								return (0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, { key: opt.id }, [
									(0, vue.createElementVNode)("div", _hoisted_25$2, [(0, vue.createElementVNode)("b", null, (0, vue.toDisplayString)(opt.label), 1)]),
									(0, vue.createElementVNode)("div", _hoisted_26$2, [(0, vue.createElementVNode)("span", { class: (0, vue.normalizeClass)(["jx-badge", getBadge((0, vue.unref)(googleConsentState)?.[opt.id]?.v).cls]) }, (0, vue.toDisplayString)(getBadge((0, vue.unref)(googleConsentState)?.[opt.id]?.v).text), 3)]),
									(0, vue.createElementVNode)("div", _hoisted_27$2, [(0, vue.createElementVNode)("span", { class: (0, vue.normalizeClass)(["jx-badge", getBadge((0, vue.unref)(googleTagIcsEntries)?.[opt.id]?.update).cls]) }, (0, vue.toDisplayString)(getBadge((0, vue.unref)(googleTagIcsEntries)?.[opt.id]?.update).text), 3)]),
									(0, vue.createElementVNode)("div", _hoisted_28$2, [(0, vue.createElementVNode)("span", { class: (0, vue.normalizeClass)(["jx-badge", getBadge((0, vue.unref)(googleTagIcsEntries)?.[opt.id]?.default).cls]) }, (0, vue.toDisplayString)(getBadge((0, vue.unref)(googleTagIcsEntries)?.[opt.id]?.default).text), 3)]),
									(0, vue.createElementVNode)("div", _hoisted_29$2, [(0, vue.createElementVNode)("span", { class: (0, vue.normalizeClass)(["jx-badge", getBadge((0, vue.unref)(googleTagIcsEntries)?.[opt.id]?.implicit).cls]) }, (0, vue.toDisplayString)(getBadge((0, vue.unref)(googleTagIcsEntries)?.[opt.id]?.implicit).text), 3)])
								], 64);
							}), 128))])])]),
							(0, vue.createElementVNode)("div", _hoisted_30$2, [(0, vue.createElementVNode)("table", null, [(0, vue.createElementVNode)("thead", null, [(0, vue.createElementVNode)("tr", null, [((0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(googleCols, (c) => {
								return (0, vue.createElementVNode)("th", {
									key: c.key,
									style: (0, vue.normalizeStyle)({ width: c.width })
								}, (0, vue.toDisplayString)(c.label), 5);
							}), 64))])]), (0, vue.createElementVNode)("tbody", null, [((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)((0, vue.unref)(googleRecords), (r, idx) => {
								return (0, vue.openBlock)(), (0, vue.createElementBlock)("tr", { key: idx }, [
									(0, vue.createElementVNode)("td", null, [(0, vue.createElementVNode)("div", _hoisted_31$2, [(0, vue.createElementVNode)("span", { class: (0, vue.normalizeClass)(["jx-badge", r.action === "update" ? "b-blue" : "b-neu"]) }, (0, vue.toDisplayString)(r.action), 3), (0, vue.createElementVNode)("span", _hoisted_32$2, (0, vue.toDisplayString)(r.time), 1)])]),
									(0, vue.createElementVNode)("td", null, [Object.keys(r.diff || {}).length ? ((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, { key: 0 }, (0, vue.renderList)(r.diff, (v, k) => {
										return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", {
											key: k,
											class: "diff-item"
										}, [(0, vue.createElementVNode)("b", null, (0, vue.toDisplayString)(k), 1), (0, vue.createElementVNode)("div", null, [
											(0, vue.createElementVNode)("span", { class: (0, vue.normalizeClass)(["jx-badge", getBadge(v.old).cls]) }, (0, vue.toDisplayString)(getBadge(v.old).text), 3),
											_cache[9] || (_cache[9] = (0, vue.createTextVNode)(" ➔ ", -1)),
											(0, vue.createElementVNode)("span", { class: (0, vue.normalizeClass)(["jx-badge", getBadge(v.new).cls]) }, (0, vue.toDisplayString)(getBadge(v.new).text), 3)
										])]);
									}), 128)) : ((0, vue.openBlock)(), (0, vue.createElementBlock)("span", _hoisted_33$2, "No changes"))]),
									(0, vue.createElementVNode)("td", null, [(0, vue.createElementVNode)("details", null, [(0, vue.createElementVNode)("summary", null, (0, vue.toDisplayString)(r.payload?.source || "Details"), 1), (0, vue.createElementVNode)("pre", null, (0, vue.toDisplayString)(JSON.stringify(r.payload?.data, null, 2)), 1)])])
								]);
							}), 128))])])])
						])]);
					};
				}
			}), [["__scopeId", "data-v-3f397721"]]),
			service: startObserver
		}
	};
	var extractUrl = (input) => {
		if (typeof input === "string") return input;
		if (input && typeof input === "object") {
			const candidate = input;
			if (typeof candidate.url === "string") return candidate.url;
			if (typeof candidate.href === "string") return candidate.href;
		}
		try {
			return input == null ? "" : String(input);
		} catch {
			return "";
		}
	};
	var isRequestLike = (input) => !!input && typeof input === "object" && typeof input.clone === "function" && typeof input.url === "string";
	var serializeBody = (body) => {
		if (body == null) return "";
		if (typeof body === "string") return body;
		if (typeof URLSearchParams !== "undefined" && body instanceof URLSearchParams) return body.toString();
		if (typeof FormData !== "undefined" && body instanceof FormData) {
			const values = {};
			body.forEach((value, key) => {
				values[key] = typeof value === "string" ? value : `[File: ${value.name}]`;
			});
			return JSON.stringify(values);
		}
		if (typeof Blob !== "undefined" && body instanceof Blob) return `[Blob: ${body.type || "unknown"}, ${body.size} bytes]`;
		if (body instanceof ArrayBuffer || ArrayBuffer.isView(body)) return "[Binary body]";
		if (typeof body === "object") try {
			return JSON.stringify(body) ?? "";
		} catch {
			return "[Unserializable body]";
		}
		return String(body);
	};
	var isReadableStreamBody = (body) => typeof ReadableStream !== "undefined" && body instanceof ReadableStream;
	var makeId = (prefix) => `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
	function installCapture(sink, decide, report) {
		let active = true;
		const releases = [];
		const listeners = new Map();
		function replace(target, key, wrapper) {
			const own = Object.getOwnPropertyDescriptor(target, key);
			target[key] = wrapper;
			releases.push(() => {
				if (target[key] !== wrapper) return;
				if (own) Object.defineProperty(target, key, own);
				else delete target[key];
			});
		}
		function update(id, patch) {
			if (!active) return;
			try {
				sink.update(id, patch);
			} catch (error) {
				report(error);
			}
		}
		function createLog(reqId, url, method, body, startTime, bodyUnavailable = false) {
			if (!active) return;
			const reqRaw = {
				url,
				...method ? { method } : {},
				...!bodyUnavailable ? { body } : {},
				startTime,
				...bodyUnavailable ? { bodyUnavailable: true } : {}
			};
			sink.add({
				_reqId: reqId,
				_createAt: startTime,
				_sourceUrl: unsafeWindow.location.href,
				_isTop: unsafeWindow === unsafeWindow.top,
				reqRaw,
				resStatus: { statusText: "firing" }
			});
		}
		function hookFetch() {
			const target = unsafeWindow;
			const nativeFetch = target.fetch;
			if (typeof nativeFetch !== "function") return;
			const wrapped = function(input, init) {
				const url = extractUrl(input);
				if ((active && url ? decide(url) : "skip") === "skip") return nativeFetch.apply(this, arguments);
				const reqId = makeId("fetch");
				const startTime = Date.now();
				const requestInput = isRequestLike(input) ? input : null;
				const method = init?.method || requestInput?.method || void 0;
				let bodyPromise;
				try {
					if (init?.body != null) bodyPromise = Promise.resolve(isReadableStreamBody(init.body) ? {
						body: "",
						unavailable: true
					} : {
						body: serializeBody(init.body),
						unavailable: false
					});
					else if (requestInput?.body) bodyPromise = requestInput.clone().text().then((body) => ({
						body,
						unavailable: false
					}), () => ({
						body: "",
						unavailable: true
					}));
					else bodyPromise = Promise.resolve({
						body: "",
						unavailable: false
					});
				} catch {
					bodyPromise = Promise.resolve({
						body: "",
						unavailable: true
					});
				}
				let responseResult = null;
				let didLog = false;
				const ensureLog = (body, unavailable) => {
					if (didLog || !active) return;
					didLog = true;
					try {
						createLog(reqId, url, method, body, startTime, unavailable);
						if (responseResult) update(reqId, {
							resStatus: responseResult,
							reqRaw: { responseTime: Date.now() }
						});
					} catch (error) {
						report(error);
					}
				};
				bodyPromise.then((result) => ensureLog(result.body, result.unavailable));
				let requestPromise;
				try {
					requestPromise = nativeFetch.apply(this, arguments);
				} catch (error) {
					responseResult = { statusText: "fail" };
					bodyPromise.then((result) => ensureLog(result.body, result.unavailable));
					throw error;
				}
				return requestPromise.then((response) => {
					responseResult = {
						code: response.status,
						type: response.type,
						statusText: response.statusText || (response.ok ? "success" : response.type === "opaque" || response.type === "opaqueredirect" ? response.type : "fail")
					};
					if (active && didLog) update(reqId, {
						resStatus: responseResult,
						reqRaw: { responseTime: Date.now() }
					});
					else bodyPromise.then((result) => ensureLog(result.body, result.unavailable));
					return response;
				}, (error) => {
					responseResult = { statusText: "fail" };
					if (active && didLog) update(reqId, {
						resStatus: responseResult,
						reqRaw: { responseTime: Date.now() }
					});
					else bodyPromise.then((result) => ensureLog(result.body, result.unavailable));
					throw error;
				});
			};
			replace(target, "fetch", wrapped);
		}
		function captureBody(value) {
			try {
				return {
					text: serializeBody(value),
					unavailable: false
				};
			} catch (error) {
				report(error);
				return {
					text: "",
					unavailable: true
				};
			}
		}
		function hookXHR() {
			const XHR = unsafeWindow.XMLHttpRequest;
			if (!XHR?.prototype) return;
			const nativeOpen = XHR.prototype.open;
			const nativeSend = XHR.prototype.send;
			const requests = new WeakMap();
			replace(XHR.prototype, "open", function(method, url, ...args) {
				const previous = listeners.get(this);
				if (previous) {
					this.removeEventListener("readystatechange", previous);
					listeners.delete(this);
				}
				if (active) requests.set(this, {
					method,
					url: extractUrl(url)
				});
				return nativeOpen.call(this, method, url, ...args);
			});
			replace(XHR.prototype, "send", function(body) {
				const xhr = this;
				const request = requests.get(xhr);
				const decision = active && request?.url ? decide(request.url) : "skip";
				if (request && decision !== "skip") {
					const reqId = makeId("xhr");
					const startTime = Date.now();
					const captured = captureBody(body);
					try {
						createLog(reqId, request.url, request.method, captured.text, startTime, captured.unavailable);
					} catch (error) {
						report(error);
					}
					const onReady = () => {
						if (!active || xhr.readyState !== 4) return;
						listeners.delete(xhr);
						xhr.removeEventListener("readystatechange", onReady);
						update(reqId, {
							resStatus: {
								code: xhr.status,
								statusText: xhr.statusText || (xhr.status >= 200 && xhr.status < 400 ? "success" : "fail")
							},
							reqRaw: { responseTime: Date.now() }
						});
					};
					listeners.set(xhr, onReady);
					xhr.addEventListener("readystatechange", onReady);
				}
				return nativeSend.apply(this, arguments);
			});
		}
		function hookBeacon() {
			const navigator = unsafeWindow.navigator;
			const nativeBeacon = navigator?.sendBeacon;
			if (typeof nativeBeacon !== "function") return;
			const wrapped = function(url, data) {
				const urlString = extractUrl(url);
				if ((active && urlString ? decide(urlString) : "skip") === "skip") return nativeBeacon.apply(this, arguments);
				const reqId = makeId("beacon");
				const startTime = Date.now();
				const captured = captureBody(data);
				try {
					createLog(reqId, urlString, void 0, captured.text, startTime, captured.unavailable);
				} catch (error) {
					report(error);
				}
				let queued;
				try {
					queued = nativeBeacon.apply(this, arguments);
				} catch (error) {
					update(reqId, {
						resStatus: { statusText: "fail" },
						reqRaw: { responseTime: Date.now() }
					});
					throw error;
				}
				update(reqId, {
					resStatus: {
						accepted: queued,
						statusText: queued ? "accepted" : "fail"
					},
					reqRaw: { responseTime: Date.now() }
				});
				return queued;
			};
			replace(navigator, "sendBeacon", wrapped);
		}
		function stop() {
			active = false;
			for (const [xhr, listener] of listeners) xhr.removeEventListener("readystatechange", listener);
			listeners.clear();
			for (const release of releases.splice(0).reverse()) try {
				release();
			} catch (error) {
				report(error);
			}
		}
		try {
			hookFetch();
			hookXHR();
			hookBeacon();
		} catch (error) {
			stop();
			throw error;
		}
		return stop;
	}
	var STORAGE_KEY = "jx_network_monitor_logs";
	var RULES_KEY = "jx_ga4_monitor_url_rules";
	var MAX_LOGS_KEY = "jx_ga4_monitor_max_logs";
	var CHANNEL_ID = "jx_network_monitor_channel";
	var MAX_LOGS = 5e3;
	var DEFAULT_URL_RULES = ["g\\/collect", "mp\\/collect"];
	var normalizeUrlRules = (rules) => {
		if (!Array.isArray(rules)) return void 0;
		const normalized = [];
		try {
			for (const value of rules) {
				if (typeof value !== "string") return void 0;
				const rule = value.trim();
				if (!rule || normalized.includes(rule)) continue;
				new RegExp(rule);
				normalized.push(rule);
			}
			return normalized;
		} catch {
			return;
		}
	};
	var NetworkMatcher = {
		patterns: [],
		setCustomRules(rules) {
			const normalized = normalizeUrlRules(rules);
			if (!normalized) return false;
			try {
				const patterns = normalized.map((rule) => new RegExp(rule));
				this.patterns = patterns;
				return true;
			} catch {
				return false;
			}
		},
		match(url) {
			try {
				const value = typeof url === "string" ? url : url == null ? "" : String(url);
				const matches = (pattern) => {
					pattern.lastIndex = 0;
					return pattern.test(value);
				};
				return !!value && this.patterns.some(matches);
			} catch {
				return false;
			}
		}
	};
	var RequestParser = { parseParams(rawText) {
		const params = {};
		if (rawText == null || rawText === "") return params;
		try {
			const text = typeof rawText === "string" ? rawText : String(rawText);
			const query = text.includes("?") ? text.slice(text.indexOf("?") + 1).split("#", 1)[0] : text.split("#", 1)[0];
			new URLSearchParams(query).forEach((value, key) => {
				params[key] = value;
			});
		} catch {}
		return params;
	} };
	var RequestMapper = { mapToReqInfo(url, body) {
		try {
			const urlString = typeof url === "string" ? url : String(url ?? "");
			let req_origin_path = "";
			try {
				const parsed = new URL(urlString);
				req_origin_path = parsed.origin + parsed.pathname;
			} catch {
				req_origin_path = urlString.split("?")[0].split("#")[0];
			}
			const bodyString = typeof body === "string" ? body : body == null ? "" : String(body);
			const rawParams = RequestParser.parseParams(urlString);
			const sessionId = rawParams.sid ?? rawParams._s;
			const events = [];
			const lines = bodyString ? bodyString.split(/\r?\n/).filter(Boolean) : [urlString];
			const ga4ItemsKnownKeys = [
				"id",
				"nm",
				"ds",
				"lp",
				"li",
				"ln",
				"ca",
				"va",
				"br",
				"pr",
				"qt"
			];
			for (const line of lines) {
				const params = RequestParser.parseParams(line);
				if (!params.en) continue;
				const eventParameters = {};
				const userProperties = {};
				const items = {};
				for (const [key, value] of Object.entries(params)) if (key.startsWith("ep.") || key.startsWith("epn.")) eventParameters[key] = value;
				else if (key.startsWith("up.") || key.startsWith("upn.")) userProperties[key] = value;
				else {
					const prMatch = key.match(/^pr(\d+)$/);
					if (prMatch && typeof value === "string" && value) {
						const itemIndex = `pr${prMatch[1]}`;
						const itemObj = {};
						for (const part of value.split("~")) {
							let matchedKey = "";
							let matchedVal = "";
							for (const k of ga4ItemsKnownKeys) if (part.startsWith(k)) {
								matchedKey = k;
								matchedVal = part.slice(k.length);
								break;
							}
							if (matchedKey) {
								try {
									matchedVal = decodeURIComponent(matchedVal);
								} catch {}
								itemObj[matchedKey] = matchedVal;
							} else if (part) {
								const fallbackMatch = part.match(/^([a-z]+)(.*)$/i);
								if (fallbackMatch) {
									let val = fallbackMatch[2];
									try {
										val = decodeURIComponent(val);
									} catch {}
									itemObj[fallbackMatch[1]] = val;
								} else itemObj[part] = true;
							}
						}
						items[itemIndex] = itemObj;
					}
				}
				events.push({
					event_name: params.en,
					event_parameters: eventParameters,
					user_properties: userProperties,
					items
				});
			}
			return { ga4: {
				...rawParams.tid !== void 0 && { measurement_id: rawParams.tid },
				...rawParams.cid !== void 0 && { client_id: rawParams.cid },
				...sessionId !== void 0 && { session_id: sessionId },
				req_origin_path,
				raw_params: rawParams,
				events
			} };
		} catch {
			return;
		}
	} };
	function trimLogs(logs, limit) {
		const ordered = logs.map((log, index) => ({
			index,
			time: log._createAt,
			navigation: !!log.navigation
		})).sort((a, b) => b.time - a.time || b.index - a.index);
		let requests = 0, navigations = 0;
		const retained = new Set(ordered.filter((item) => item.navigation ? ++navigations <= 500 : ++requests <= limit).map((item) => item.index));
		if (retained.size === logs.length) return logs;
		return logs.filter((_, index) => retained.has(index));
	}
	var toPersistentItem = (log) => {
		const { reqRaw: _reqRaw, ...persistentData } = log;
		return persistentData;
	};
	var storage$1 = (name) => {
		try {
			return unsafeWindow[name];
		} catch {
			return;
		}
	};
	var clampMaxLogs = (value) => {
		const number = Number(value);
		return Number.isFinite(number) ? Math.max(50, Math.min(MAX_LOGS, Math.round(number))) : 200;
	};
	var loadRules = () => {
		try {
			const raw = storage$1("localStorage")?.getItem(RULES_KEY);
			if (!raw) return [...DEFAULT_URL_RULES];
			const stored = JSON.parse(raw);
			if (Array.isArray(stored)) return normalizeUrlRules([...DEFAULT_URL_RULES, ...stored]) || [...DEFAULT_URL_RULES];
			if (stored?.version === 2) return normalizeUrlRules(stored.rules) || [...DEFAULT_URL_RULES];
		} catch {}
		return [...DEFAULT_URL_RULES];
	};
	var saveRules = (rules) => {
		try {
			storage$1("localStorage")?.setItem(RULES_KEY, JSON.stringify({
				version: 2,
				rules
			}));
		} catch {}
	};
	var loadMaxLogs = () => {
		try {
			const raw = storage$1("localStorage")?.getItem(MAX_LOGS_KEY);
			return raw === null || raw === void 0 ? 200 : clampMaxLogs(raw);
		} catch {
			return 200;
		}
	};
	var saveMaxLogs = (value) => {
		try {
			storage$1("localStorage")?.setItem(MAX_LOGS_KEY, String(value));
		} catch {}
	};
	var loadLogs = (enabled, limit) => {
		if (!enabled) return [];
		try {
			const raw = storage$1("sessionStorage")?.getItem(STORAGE_KEY);
			if (!raw) return [];
			const parsed = JSON.parse(raw);
			if (!Array.isArray(parsed)) return [];
			const logs = trimLogs(parsed.filter((item) => item && typeof item === "object" && typeof item._reqId === "string" && Number.isFinite(item._createAt)).map((item) => ({
				_reqId: item._reqId,
				_createAt: item._createAt,
				...item.navigation && typeof item.navigation.to === "string" && typeof item.navigation.from === "string" && typeof item.navigation.type === "string" ? { navigation: item.navigation } : {},
				...typeof item._sourceUrl === "string" ? { _sourceUrl: item._sourceUrl } : {},
				...typeof item._isTop === "boolean" ? { _isTop: item._isTop } : {},
				...item.resStatus && typeof item.resStatus === "object" ? { resStatus: item.resStatus } : {},
				...item.reqInfo && typeof item.reqInfo === "object" ? { reqInfo: item.reqInfo } : {},
				...item.extensions && typeof item.extensions === "object" ? { extensions: item.extensions } : {}
			})), limit);
			if (logs.length !== parsed.length) saveLogs(true, logs);
			return logs;
		} catch {
			try {
				storage$1("sessionStorage")?.removeItem(STORAGE_KEY);
			} catch {}
			return [];
		}
	};
	var saveLogs = (enabled, logs) => {
		if (!enabled) return;
		try {
			storage$1("sessionStorage")?.setItem(STORAGE_KEY, JSON.stringify(logs.map(toPersistentItem)));
		} catch {}
	};
	var clearLogsCache = (enabled) => {
		if (!enabled) return;
		try {
			storage$1("sessionStorage")?.removeItem(STORAGE_KEY);
		} catch {}
	};
	var isAction = (value) => [
		"addLog",
		"updateLog",
		"clearLogs",
		"setRules",
		"resetRules",
		"setMaxLogs",
		"snapshotRequest",
		"snapshot"
	].includes(String(value));
	var isLog = (value) => value && typeof value === "object" && typeof value._reqId === "string" && Number.isFinite(value._createAt);
	var isDescendant = (candidate, root) => {
		try {
			for (let i = 0; i < root.frames.length; i++) {
				const frame = root.frames[i];
				if (frame === candidate || isDescendant(candidate, frame)) return true;
			}
		} catch {
			return false;
		}
		return false;
	};
	function createNetworkStore(isTop, configured, report) {
		const initialMaxLogs = isTop ? loadMaxLogs() : 200;
		const framePeers = new Map();
		let parentOrigin = "";
		let parentToken = "";
		const postToTop = (action, payload) => {
			try {
				unsafeWindow.top?.postMessage({
					type: CHANNEL_ID,
					action,
					payload,
					token: parentToken
				}, parentOrigin && parentOrigin !== "null" ? parentOrigin : "*");
			} catch {}
		};
		return (0, vue.reactive)({
			logs: loadLogs(isTop, initialMaxLogs),
			customRules: isTop ? loadRules() : [...DEFAULT_URL_RULES],
			maxLogs: initialMaxLogs,
			isInitialized: false,
			configReady: isTop,
			listener: null,
			dispatch(action, payload) {
				if (isTop) this.applyAction(action, payload);
				else postToTop(action, payload);
			},
			applySnapshot(payload) {
				if (!payload || typeof payload !== "object") return;
				const rules = normalizeUrlRules(payload.rules);
				if (!rules || !NetworkMatcher.setCustomRules(rules)) return;
				this.customRules = rules;
				this.maxLogs = clampMaxLogs(payload.maxLogs);
				this.logs = trimLogs(this.logs, this.maxLogs);
				this.configReady = true;
				configured();
			},
			applyAction(action, payload) {
				if (action === "addLog") {
					if (!isLog(payload) || this.logs.some((log) => log._reqId === payload._reqId)) return;
					this.logs.push(payload);
					this.logs = trimLogs(this.logs, this.maxLogs);
					saveLogs(isTop, this.logs);
				} else if (action === "updateLog") {
					if (!payload || typeof payload.reqId !== "string" || !payload.patch || typeof payload.patch !== "object") return;
					const log = this.logs.find((item) => item._reqId === payload.reqId);
					if (!log) return;
					const patch = payload.patch;
					if (patch.resStatus && typeof patch.resStatus === "object") log.resStatus = patch.resStatus;
					if (patch.reqInfo && typeof patch.reqInfo === "object") log.reqInfo = patch.reqInfo;
					if (patch.reqRaw && typeof patch.reqRaw === "object") log.reqRaw = {
						...log.reqRaw || {},
						...patch.reqRaw
					};
					saveLogs(isTop, this.logs);
				} else if (action === "clearLogs") {
					this.logs = [];
					clearLogsCache(isTop);
					this.broadcastAction(action);
				} else if (action === "setRules" || action === "resetRules") {
					const rules = normalizeUrlRules(action === "resetRules" ? DEFAULT_URL_RULES : payload);
					if (!rules || !NetworkMatcher.setCustomRules(rules)) return;
					this.customRules = rules;
					saveRules(rules);
					this.broadcastAction("setRules", rules);
				} else if (action === "setMaxLogs") {
					this.maxLogs = clampMaxLogs(payload);
					this.logs = trimLogs(this.logs, this.maxLogs);
					saveMaxLogs(this.maxLogs);
					saveLogs(isTop, this.logs);
					this.broadcastAction(action, this.maxLogs);
				}
			},
			broadcastAction(action, payload) {
				if (!isTop) return;
				framePeers.forEach((peer, frame) => {
					try {
						frame.postMessage({
							type: CHANNEL_ID,
							action,
							payload,
							token: peer.token
						}, peer.origin === "null" ? "*" : peer.origin);
					} catch {}
				});
			},
			initListener() {
				if (this.isInitialized) return;
				this.isInitialized = true;
				NetworkMatcher.setCustomRules(this.customRules);
				const receive = (event) => {
					if (event.data?.type !== "jx_network_monitor_channel" || !isAction(event.data.action)) return;
					if (isTop) {
						if (!isDescendant(event.source, unsafeWindow)) return;
						const source = event.source;
						if (event.data.action === "snapshotRequest") {
							const previous = framePeers.get(source);
							const token = previous?.origin === event.origin ? previous.token : crypto.getRandomValues(new Uint32Array(4)).join("-");
							const peer = {
								origin: event.origin,
								token
							};
							framePeers.set(source, peer);
							try {
								source.postMessage({
									type: CHANNEL_ID,
									action: "snapshot",
									payload: {
										rules: [...this.customRules],
										maxLogs: this.maxLogs,
										_peerToken: token
									},
									token
								}, event.origin === "null" ? "*" : event.origin);
							} catch (error) {
								report(error);
							}
							return;
						}
						const peer = framePeers.get(source);
						if (!peer || event.origin !== peer.origin || event.data.token !== peer.token) return;
						if (event.origin !== unsafeWindow.location.origin && event.data.action !== "addLog" && event.data.action !== "updateLog") return;
						this.applyAction(event.data.action, event.data.payload);
						return;
					}
					if (event.source !== unsafeWindow.top || parentOrigin && event.origin !== parentOrigin) return;
					if (event.data.action !== "snapshot" && (!parentToken || event.data.token !== parentToken)) return;
					if (event.data.action === "snapshot") {
						if (!event.data.token || event.data.token !== event.data.payload?._peerToken) return;
						parentOrigin = event.origin;
						parentToken = typeof event.data.payload?._peerToken === "string" ? event.data.payload._peerToken : "";
						this.applySnapshot(event.data.payload);
					} else if (event.data.action === "addLog" && isLog(event.data.payload)) {
						if (!this.logs.some((log) => log._reqId === event.data.payload._reqId)) this.logs.push(event.data.payload);
						this.logs = trimLogs(this.logs, this.maxLogs);
					} else if (event.data.action === "updateLog") {
						const { reqId, patch } = event.data.payload || {};
						const log = this.logs.find((item) => item._reqId === reqId);
						if (!log || !patch) return;
						if (patch.resStatus) log.resStatus = patch.resStatus;
						if (patch.reqRaw) log.reqRaw = {
							...log.reqRaw || {},
							...patch.reqRaw
						};
						if (patch.reqInfo) log.reqInfo = patch.reqInfo;
					} else if (event.data.action === "clearLogs") this.logs = [];
					else if (event.data.action === "setRules") {
						const rules = normalizeUrlRules(event.data.payload);
						if (rules && NetworkMatcher.setCustomRules(rules)) this.customRules = rules;
					} else if (event.data.action === "setMaxLogs") {
						this.maxLogs = clampMaxLogs(event.data.payload);
						this.logs = trimLogs(this.logs, this.maxLogs);
					}
				};
				this.listener = (event) => {
					try {
						receive(event);
					} catch (error) {
						report(error);
					}
				};
				unsafeWindow.addEventListener("message", this.listener);
			},
			requestSnapshot() {
				if (!isTop && !this.configReady) postToTop("snapshotRequest");
			},
			stop() {
				if (this.listener) unsafeWindow.removeEventListener("message", this.listener);
				this.listener = null;
				this.isInitialized = false;
				framePeers.clear();
			},
			addLog(log) {
				if (!isTop && !this.logs.some((item) => item._reqId === log._reqId)) {
					this.logs.push(log);
					this.logs = trimLogs(this.logs, this.maxLogs);
				}
				this.dispatch("addLog", log);
			},
			updateLog(reqId, patch) {
				if (!isTop) {
					const log = this.logs.find((item) => item._reqId === reqId);
					if (!log) return;
					if (patch.resStatus) log.resStatus = patch.resStatus;
					if (patch.reqInfo) log.reqInfo = patch.reqInfo;
					if (patch.reqRaw) log.reqRaw = {
						...log.reqRaw || {},
						...patch.reqRaw
					};
				}
				this.dispatch("updateLog", {
					reqId,
					patch
				});
			},
			clearLogs() {
				this.dispatch("clearLogs");
			},
			setRules(rules) {
				this.dispatch("setRules", rules);
			},
			resetRules() {
				this.dispatch("resetRules", DEFAULT_URL_RULES);
			},
			setMaxLogs(value) {
				this.dispatch("setMaxLogs", value);
			}
		});
	}
	var MAX_PENDING = 64;
	var MAX_PENDING_URL = 4096;
	var WAIT_MS = 5e3;
	var current;
	function getMonitorStore() {
		if (!current) throw new Error("GA4 monitor has not started");
		return current;
	}
	function startMonitor({ environment, logger }) {
		const isTop = environment.type === "top";
		const pending = new Map();
		const deadline = Date.now() + WAIT_MS;
		let accepting = true;
		let overflowReported = false;
		let retry;
		let expiry;
		let release;
		let releaseNavigation;
		const report = (error) => logger.error("capture", error);
		const store = createNetworkStore(isTop, flush, report);
		function publish(log) {
			const raw = log.reqRaw;
			if (!raw || !NetworkMatcher.match(raw.url)) return;
			log.reqInfo = RequestMapper.mapToReqInfo(raw.url, raw.body);
			store.addLog(log);
		}
		function flush() {
			clearTimeout(retry);
			clearTimeout(expiry);
			if (Date.now() <= deadline) for (const log of pending.values()) publish(log);
			pending.clear();
		}
		const sink = {
			add(log) {
				if (!accepting) return;
				if (store.configReady) {
					publish(log);
					return;
				}
				if (Date.now() > deadline) return;
				if (pending.size >= MAX_PENDING) {
					if (!overflowReported) logger.warn("snapshot pending buffer full", MAX_PENDING);
					overflowReported = true;
					return;
				}
				pending.set(log._reqId, log);
			},
			update(id, patch) {
				if (!accepting) return;
				const item = pending.get(id);
				if (item) {
					if (patch.resStatus) item.resStatus = patch.resStatus;
					if (item.reqRaw) Object.assign(item.reqRaw, patch.reqRaw);
				} else if (store.configReady) store.updateLog(id, patch);
			}
		};
		function stop() {
			accepting = false;
			clearTimeout(retry);
			clearTimeout(expiry);
			pending.clear();
			release?.();
			releaseNavigation?.();
			store.stop();
			if (current === store) current = void 0;
		}
		try {
			store.initListener();
			release = installCapture(sink, (url) => {
				if (store.configReady) return NetworkMatcher.match(url) ? "full" : "skip";
				return Date.now() <= deadline && url.length <= MAX_PENDING_URL ? "full" : "skip";
			}, report);
			if (isTop) {
				const win = unsafeWindow;
				const history = win.history;
				let lastUrl = win.location.href;
				let sequence = 0;
				const record = (type, from, to) => {
					const now = Date.now();
					store.addLog({
						_reqId: `nav_${now}_${sequence++}`,
						_createAt: now,
						_isTop: true,
						navigation: {
							type,
							from,
							to
						}
					});
				};
				const nav = win.performance?.getEntriesByType?.("navigation")?.[0];
				const legacy = win.performance?.navigation?.type;
				let from = win.document?.referrer || "";
				if (!from && history?.state?.back) try {
					from = new URL(history.state.back, win.location.origin).href;
				} catch {
					from = String(history.state.back);
				}
				record(nav?.type ?? (legacy === 1 ? "reload" : legacy === 2 ? "back_forward" : "navigate"), from, lastUrl);
				const changed = (type) => {
					const next = win.location.href;
					if (next === lastUrl) return;
					record(type, lastUrl, next);
					lastUrl = next;
				};
				const pop = () => changed("back_forward");
				const hash = () => changed("spa");
				const releases = [];
				for (const key of ["pushState", "replaceState"]) {
					const original = history[key];
					const wrapped = function(...args) {
						const result = original.apply(this, args);
						changed("spa");
						return result;
					};
					history[key] = wrapped;
					releases.push(() => {
						if (history[key] === wrapped) history[key] = original;
					});
				}
				win.addEventListener("popstate", pop);
				win.addEventListener("hashchange", hash);
				releaseNavigation = () => {
					win.removeEventListener("popstate", pop);
					win.removeEventListener("hashchange", hash);
					releases.forEach((release) => release());
				};
			}
			current = store;
			if (!isTop) {
				let delay = 500;
				const request = () => {
					if (store.configReady || !accepting) return;
					store.requestSnapshot();
					retry = setTimeout(request, delay);
					delay = Math.min(delay * 2, 3e4);
				};
				expiry = setTimeout(() => {
					if (pending.size) logger.warn("snapshot timeout, dropped requests", pending.size);
					pending.clear();
				}, WAIT_MS);
				request();
			}
		} catch (error) {
			stop();
			throw error;
		}
		return stop;
	}
	var _hoisted_1$11 = { class: "monitor" };
	var _hoisted_2$10 = { class: "toolbar" };
	var _hoisted_3$9 = { class: "search-box" };
	var _hoisted_4$7 = ["value"];
	var _hoisted_5$6 = ["title"];
	var _hoisted_6$6 = ["aria-expanded"];
	var _hoisted_7$6 = { class: "rule-count" };
	var _hoisted_8$6 = { class: "toolbar-stats" };
	var _hoisted_9$5 = {
		key: 0,
		class: "settings-popover"
	};
	var _hoisted_10$4 = { class: "settings-section" };
	var _hoisted_11$4 = {
		key: 0,
		class: "error-text"
	};
	var _hoisted_12$3 = { class: "setting-row" };
	var _hoisted_13$2 = { class: "popover-actions" };
	var _hoisted_14$2 = { class: "workspace" };
	var _hoisted_15$1 = {
		class: "list-panel",
		"aria-label": "GA4 监控记录"
	};
	var _hoisted_16$1 = ["title"];
	var _hoisted_17$1 = [
		"checked",
		"aria-label",
		"onChange"
	];
	var _hoisted_18$1 = {
		key: 0,
		class: "spacer"
	};
	var _hoisted_19$1 = ["colspan"];
	var _hoisted_20$1 = ["data-navigation-id"];
	var _hoisted_21$1 = ["colspan"];
	var _hoisted_22$1 = { class: "navigation-content" };
	var _hoisted_23$1 = { class: "nav-type" };
	var _hoisted_24$1 = { class: "nav-paths" };
	var _hoisted_25$1 = ["onClick"];
	var _hoisted_26$1 = {
		key: 0,
		class: "frame-label",
		title: "iframe 请求"
	};
	var _hoisted_27$1 = {
		key: 1,
		class: "status-indicator"
	};
	var _hoisted_28$1 = {
		key: 1,
		class: "spacer"
	};
	var _hoisted_29$1 = ["colspan"];
	var _hoisted_30$1 = {
		key: 0,
		class: "empty-list"
	};
	var _hoisted_31$1 = { class: "list-footer" };
	var _hoisted_32$1 = {
		key: 0,
		class: "detail-panel"
	};
	var _hoisted_33$1 = { class: "detail-header" };
	var _hoisted_34$1 = { class: "detail-meta" };
	var _hoisted_35$1 = { class: "mono" };
	var _hoisted_36$1 = { class: "detail-scroll" };
	var _hoisted_37$1 = { class: "kv-value" };
	var _hoisted_38 = ["onClick"];
	var _hoisted_39 = {
		key: 0,
		class: "badge"
	};
	var _hoisted_40 = { class: "fold-content" };
	var _hoisted_41 = { class: "kv-value" };
	var _hoisted_42 = {
		key: 1,
		class: "empty-detail"
	};
	var ROW_HEIGHT = 40;
	var OVERSCAN = 8;
	var config_default$1 = {
		id: "jx-ga4-monitor",
		name: "JX - GA4 事件监控",
		description: "采集并查看 GA4 请求、事件参数和页面导航记录。",
		version: "26.11.23",
		releaseNotes: "初版",
		match: { contexts: {
			top: { include: ["*"] },
			iframe: { include: ["*"] }
		} },
		ui: {
			title: "GA4 Monitor",
			icon: "https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg",
			layout: {
				dialog: {
					defaultCollapsed: true,
					style: {
						width: "1100px",
						height: "800px",
						maxWidth: "96vw",
						maxHeight: "90vh"
					}
				},
				drawer: {
					placement: "right",
					defaultCollapsed: true,
					style: {
						width: "1200px",
						height: "100vh",
						maxWidth: "100vw",
						maxHeight: "100vh"
					}
				}
			},
			currentLayout: "dialog"
		},
		app: {
			view: _plugin_vue_export_helper_default((0, vue.defineComponent)({
				__name: "index",
				setup(__props) {
					const networkStore = getMonitorStore();
					const formatTime = (value) => {
						if (value == null) return "";
						const date = new Date(Number(value));
						if (Number.isNaN(date.getTime())) return "";
						const pad = (part) => String(part).padStart(2, "0");
						return `${date.getFullYear()}/${pad(date.getMonth() + 1)}/${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
					};
					const statusClass = (log) => {
						const status = log.resStatus;
						const text = status?.statusText?.toLowerCase();
						const code = Number(status?.code);
						if (text === "firing") return "status-pending";
						if (text === "fail" || status?.accepted === false || status?.code != null && code >= 400) return "status-fail";
						if (status?.accepted === true || text === "success" || status?.code != null && code >= 200 && code < 400) return "status-success";
						return "";
					};
					const columns = [
						{
							id: "time",
							label: "时间/环境",
							path: "_createAt",
							width: 125,
							display: "text",
							className: "time-cell",
							format: formatTime
						},
						{
							id: "event",
							label: "事件",
							path: "reqInfo.ga4.events",
							width: 150,
							display: "badges",
							multiline: true,
							format: (value) => Array.isArray(value) ? value.map((event) => event?.event_name).filter(Boolean) : []
						},
						{
							id: "measurement",
							label: "Measurement ID",
							path: "reqInfo.ga4.measurement_id",
							width: 120,
							display: "text",
							className: "measurement-cell"
						},
						{
							id: "gcs",
							label: "gcs",
							path: "reqInfo.ga4.raw_params.gcs",
							width: 50,
							display: "text",
							highlightDefault: true
						},
						{
							id: "client",
							label: "Client ID",
							path: "reqInfo.ga4.client_id",
							width: 150,
							display: "text",
							highlightDefault: true
						},
						{
							id: "session",
							label: "Session ID",
							path: "reqInfo.ga4.session_id",
							width: 80,
							display: "text",
							highlightDefault: true
						},
						{
							id: "_fv",
							label: "_fv",
							path: "reqInfo.ga4.raw_params._fv",
							width: 40,
							display: "text",
							highlightDefault: true
						},
						{
							id: "_ss",
							label: "_ss",
							path: "reqInfo.ga4.raw_params._ss",
							width: 40,
							display: "text",
							highlightDefault: true
						},
						{
							id: "tfd",
							label: "tfd",
							path: "reqInfo.ga4.raw_params.tfd",
							width: 75,
							display: "text"
						},
						{
							id: "response",
							label: "响应状态",
							path: "resStatus",
							width: 150,
							display: "status",
							className: statusClass,
							format: (value) => {
								if (!value || typeof value !== "object") return [];
								const response = value;
								const code = response.code == null ? "" : String(response.code);
								const parts = [
									response.statusText,
									response.type,
									response.accepted == null ? "" : response.accepted ? "accepted" : "rejected"
								].filter((part) => !!part && part.toLowerCase() !== code.toLowerCase());
								return [code, [...new Map(parts.map((part) => [part.toLowerCase(), part])).values()].join(" · ")];
							}
						}
					];
					const searchInput = (0, vue.ref)("");
					const searchQuery = (0, vue.ref)("");
					const selectedTid = (0, vue.ref)("");
					const sortOrder = (0, vue.ref)("desc");
					const selectedId = (0, vue.ref)(null);
					const scrollHost = (0, vue.ref)(null);
					const scrollTop = (0, vue.ref)(0);
					const viewportHeight = (0, vue.ref)(440);
					const ruleDraft = (0, vue.ref)("");
					const ruleError = (0, vue.ref)("");
					const rulesOpen = (0, vue.ref)(false);
					const maxDraft = (0, vue.ref)(networkStore.maxLogs);
					const highlightOverrides = (0, vue.reactive)({});
					const searchCache = new WeakMap();
					const colorCache = new Map();
					const navigationHeights = (0, vue.reactive)({});
					let navigationObserver;
					const navigationElements = new Map();
					let searchTimer;
					const getPath = (source, path) => path.split(".").reduce((value, key) => value && typeof value === "object" ? value[key] : void 0, source);
					const rawValue = (column, log) => {
						const value = getPath(log, column.path);
						return column.format ? column.format(value, log) : value;
					};
					const textValue = (value) => {
						if (value == null || value === "") return "";
						if (typeof value === "object") try {
							return JSON.stringify(value);
						} catch {
							return String(value);
						}
						return String(value);
					};
					const cellValues = (column, log) => {
						const value = rawValue(column, log);
						const values = ((column.display === "badges" || column.display === "status") && Array.isArray(value) ? value : [value]).map(textValue).filter(Boolean);
						if (column.display === "status" && Array.isArray(value)) return value.map(textValue);
						return values.length ? values : [""];
					};
					const entries = (value) => value && typeof value === "object" ? Object.entries(value).map(([label, rowValue]) => ({
						label,
						value: rowValue
					})) : [];
					const displayValue = (value) => {
						if (value == null || value === "") return "-";
						if (typeof value === "object") try {
							return JSON.stringify(value, null, 2);
						} catch {
							return String(value);
						}
						return String(value);
					};
					const selectedLog = (0, vue.computed)(() => networkStore.logs.find((log) => log._reqId === selectedId.value) || null);
					const requestCount = (0, vue.computed)(() => networkStore.logs.filter((log) => !log.navigation).length);
					const navigationCount = (0, vue.computed)(() => networkStore.logs.length - requestCount.value);
					const availableTids = (0, vue.computed)(() => {
						const tids = new Set();
						for (const log of networkStore.logs) {
							const tid = log.reqInfo?.ga4?.measurement_id;
							if (tid) tids.add(String(tid));
						}
						return Array.from(tids);
					});
					const detailSections = (0, vue.computed)(() => {
						const log = selectedLog.value;
						if (!log) return [];
						const ga4 = log.reqInfo?.ga4;
						const sections = [{
							title: "请求信息",
							rows: [
								{
									label: "状态码",
									value: log.resStatus?.code
								},
								{
									label: "状态类型",
									value: log.resStatus?.type
								},
								{
									label: "状态文本",
									value: log.resStatus?.statusText
								},
								{
									label: "Measurement ID",
									value: ga4?.measurement_id
								},
								{
									label: "Client ID",
									value: ga4?.client_id
								},
								{
									label: "Session ID",
									value: ga4?.session_id
								},
								{
									label: "发起页面",
									value: log._sourceUrl
								},
								{
									label: "请求源路径",
									value: ga4?.req_origin_path
								}
							]
						}];
						if (Object.keys(ga4?.raw_params || {}).length) sections.push({
							title: "URL 参数",
							folds: [{
								label: "Raw Params",
								rows: entries(ga4?.raw_params)
							}]
						});
						for (const [index, event] of (ga4?.events || []).entries()) sections.push({
							title: `事件 ${index + 1}: ${event.event_name}`,
							folds: [
								{
									label: "Event Parameters",
									rows: entries(event.event_parameters),
									isHidden: entries(event.event_parameters).length === 0
								},
								{
									label: "Items",
									rows: entries(event.items),
									isHidden: entries(event.items).length === 0
								},
								{
									label: "User Properties",
									rows: entries(event.user_properties),
									isHidden: entries(event.user_properties).length === 0
								}
							]
						});
						if (log.reqRaw) sections.push({
							title: "原始请求",
							folds: [{
								label: "reqRaw",
								rows: entries(log.reqRaw)
							}]
						});
						return sections;
					});
					const highlightEnabledColumns = (0, vue.computed)(() => {
						const enabled = new Set();
						for (const column of columns) if (highlightOverrides[column.id] ?? column.highlightDefault) enabled.add(column.id);
						return enabled;
					});
					const hashColor = (value) => {
						if (value == null || value === "" || value === "-") return "transparent";
						const text = String(value);
						const cached = colorCache.get(text);
						if (cached) return cached;
						const hash = [...text].reduce((result, character) => character.charCodeAt(0) + ((result << 5) - result), 0);
						const color = `hsl(${Math.abs(hash) % 360}, 75%, 92%)`;
						colorCache.set(text, color);
						return color;
					};
					const cellColor = (column, log) => {
						if (!highlightEnabledColumns.value.has(column.id)) return "transparent";
						const value = cellValues(column, log).join(", ");
						return hashColor(value);
					};
					const searchCorpus = (log) => {
						let corpus = searchCache.get(log);
						if (corpus === void 0) {
							try {
								corpus = JSON.stringify({
									id: log._reqId,
									source: log._sourceUrl,
									raw: log.reqRaw,
									info: log.reqInfo,
									navigation: log.navigation
								}).toLowerCase();
							} catch {
								corpus = log._reqId.toLowerCase();
							}
							searchCache.set(log, corpus);
						}
						return `${corpus} ${JSON.stringify(log.resStatus || {}).toLowerCase()}`;
					};
					const rowHeight = (log) => {
						if (log.navigation) return navigationHeights[log._reqId] || 68;
						const count = Math.max(1, ...columns.filter((column) => column.multiline).map((column) => cellValues(column, log).length));
						return Math.max(ROW_HEIGHT, count * 26 + 8);
					};
					const visibleRows = (0, vue.computed)(() => {
						let list = networkStore.logs;
						if (selectedTid.value) list = list.filter((log) => log.navigation || log.reqInfo?.ga4?.measurement_id === selectedTid.value);
						if (searchQuery.value) {
							const terms = searchQuery.value.split(/\s+/).filter(Boolean);
							list = list.filter((log) => {
								const corpus = searchCorpus(log);
								return terms.every((term) => corpus.includes(term));
							});
						}
						const sorted = [...list].sort((a, b) => {
							const timeA = a._createAt || 0;
							const timeB = b._createAt || 0;
							return sortOrder.value === "asc" ? timeA - timeB : timeB - timeA;
						});
						const offsets = [0];
						for (const log of sorted) offsets.push(offsets[offsets.length - 1] + rowHeight(log));
						let first = 0;
						while (first < sorted.length && offsets[first + 1] <= scrollTop.value) first++;
						const start = Math.max(0, first - OVERSCAN);
						let end = first;
						while (end < sorted.length && offsets[end] < scrollTop.value + viewportHeight.value) end++;
						end = Math.min(sorted.length, end + OVERSCAN);
						return {
							items: sorted.slice(start, end),
							total: sorted.length,
							top: offsets[start],
							bottom: offsets[sorted.length] - offsets[end]
						};
					});
					const tableWidth = columns.reduce((total, column) => total + column.width, 0);
					const updateSearch = () => {
						clearTimeout(searchTimer);
						searchTimer = setTimeout(() => {
							searchQuery.value = searchInput.value.trim().toLowerCase();
							scrollTop.value = 0;
							if (scrollHost.value) scrollHost.value.scrollTop = 0;
						}, 160);
					};
					const onScroll = (event) => {
						scrollTop.value = event.target.scrollTop;
					};
					const updateViewport = () => {
						viewportHeight.value = scrollHost.value?.clientHeight || 440;
					};
					const columnHighlightEnabled = (column) => highlightOverrides[column.id] ?? column.highlightDefault;
					const updateColumnHighlight = (column, event) => {
						highlightOverrides[column.id] = event.target.checked;
					};
					const applyRules = () => {
						const rules = ruleDraft.value.split("\n").map((rule) => rule.trim()).filter(Boolean);
						try {
							rules.forEach((rule) => new RegExp(rule));
						} catch {
							ruleError.value = "规则包含无效的正则表达式；当前生效规则未更改。";
							return;
						}
						ruleError.value = "";
						networkStore.setRules(rules);
					};
					const applyMaxLogs = () => {
						networkStore.setMaxLogs(maxDraft.value);
						maxDraft.value = networkStore.maxLogs;
					};
					const copyValue = async (value) => {
						try {
							await navigator.clipboard.writeText(String(value ?? ""));
						} catch {}
					};
					(0, vue.watch)(() => networkStore.customRules, (rules) => {
						ruleDraft.value = rules.join("\n");
					}, { immediate: true });
					(0, vue.watch)(() => networkStore.maxLogs, (value) => {
						maxDraft.value = value;
					});
					(0, vue.onMounted)(() => {
						updateViewport();
						navigationObserver = new ResizeObserver((entries) => {
							for (const entry of entries) {
								const id = entry.target.dataset.navigationId;
								if (id) navigationHeights[id] = entry.target.getBoundingClientRect().height;
							}
						});
						navigationElements.forEach((row) => navigationObserver?.observe(row));
						unsafeWindow.addEventListener("resize", updateViewport);
					});
					(0, vue.onUnmounted)(() => {
						navigationObserver?.disconnect();
						unsafeWindow.removeEventListener("resize", updateViewport);
						clearTimeout(searchTimer);
					});
					const observeNavigation = (id, element) => {
						const previous = navigationElements.get(id);
						if (previous && previous !== element) {
							navigationObserver?.unobserve(previous);
							navigationElements.delete(id);
						}
						if (element instanceof HTMLElement && previous !== element) {
							navigationElements.set(id, element);
							navigationObserver?.observe(element);
						}
					};
					return (_ctx, _cache) => {
						return (0, vue.openBlock)(), (0, vue.createElementBlock)("section", _hoisted_1$11, [(0, vue.createElementVNode)("header", _hoisted_2$10, [
							(0, vue.createElementVNode)("label", _hoisted_3$9, [(0, vue.withDirectives)((0, vue.createElementVNode)("input", {
								"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchInput.value = $event),
								type: "search",
								placeholder: "搜索 URL、事件、参数、ID…",
								onInput: updateSearch
							}, null, 544), [[vue.vModelText, searchInput.value]])]),
							(0, vue.withDirectives)((0, vue.createElementVNode)("select", {
								"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedTid.value = $event),
								class: "tid-select",
								"aria-label": "按 TID 筛选"
							}, [_cache[9] || (_cache[9] = (0, vue.createElementVNode)("option", { value: "" }, "全部 TID", -1)), ((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(availableTids.value, (tid) => {
								return (0, vue.openBlock)(), (0, vue.createElementBlock)("option", {
									key: tid,
									value: tid
								}, (0, vue.toDisplayString)(tid), 9, _hoisted_4$7);
							}), 128))], 512), [[vue.vModelSelect, selectedTid.value]]),
							(0, vue.createElementVNode)("button", {
								class: "sort-btn",
								onClick: _cache[2] || (_cache[2] = ($event) => sortOrder.value = sortOrder.value === "desc" ? "asc" : "desc"),
								title: sortOrder.value === "desc" ? "当前倒序，点击切换正序" : "当前正序，点击切换倒序"
							}, (0, vue.toDisplayString)(sortOrder.value === "desc" ? "倒序 ▾" : "正序 ▴"), 9, _hoisted_5$6),
							(0, vue.createElementVNode)("button", {
								class: "config-trigger",
								"aria-expanded": rulesOpen.value,
								onClick: _cache[3] || (_cache[3] = ($event) => rulesOpen.value = !rulesOpen.value)
							}, [_cache[10] || (_cache[10] = (0, vue.createTextVNode)("配置 ", -1)), (0, vue.createElementVNode)("span", _hoisted_7$6, (0, vue.toDisplayString)((0, vue.unref)(networkStore).customRules.length), 1)], 8, _hoisted_6$6),
							(0, vue.createElementVNode)("div", _hoisted_8$6, [(0, vue.createTextVNode)("筛选结果 " + (0, vue.toDisplayString)(visibleRows.value.total) + " ", 1), (0, vue.createElementVNode)("span", null, "· 请求记录 " + (0, vue.toDisplayString)(requestCount.value) + " · 导航记录 " + (0, vue.toDisplayString)(navigationCount.value), 1)]),
							rulesOpen.value ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_9$5, [
								_cache[14] || (_cache[14] = (0, vue.createElementVNode)("div", { class: "popover-heading" }, [(0, vue.createElementVNode)("strong", null, "采集配置"), (0, vue.createElementVNode)("span", null, "规则修改后保存生效")], -1)),
								(0, vue.createElementVNode)("div", _hoisted_10$4, [
									_cache[11] || (_cache[11] = (0, vue.createElementVNode)("div", { class: "setting-label" }, [(0, vue.createElementVNode)("label", { for: "ga4-rules" }, "匹配规则"), (0, vue.createElementVNode)("span", null, "每行一条正则")], -1)),
									(0, vue.withDirectives)((0, vue.createElementVNode)("textarea", {
										id: "ga4-rules",
										"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => ruleDraft.value = $event),
										rows: "4",
										spellcheck: "false"
									}, null, 512), [[vue.vModelText, ruleDraft.value]]),
									_cache[12] || (_cache[12] = (0, vue.createElementVNode)("p", { class: "helper" }, "此处为完整匹配规则，保存后跨刷新保留。", -1)),
									ruleError.value ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("p", _hoisted_11$4, (0, vue.toDisplayString)(ruleError.value), 1)) : (0, vue.createCommentVNode)("", true)
								]),
								(0, vue.createElementVNode)("div", _hoisted_12$3, [_cache[13] || (_cache[13] = (0, vue.createElementVNode)("div", null, [(0, vue.createElementVNode)("strong", null, "请求记录上限"), (0, vue.createElementVNode)("span", { class: "setting-hint" }, "50–5000 条；导航记录单独保留最多 500 条。修改后自动保存")], -1)), (0, vue.withDirectives)((0, vue.createElementVNode)("input", {
									"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => maxDraft.value = $event),
									"aria-label": "最多保留的请求记录数",
									type: "number",
									min: "50",
									max: "5000",
									onChange: applyMaxLogs
								}, null, 544), [[
									vue.vModelText,
									maxDraft.value,
									void 0,
									{ number: true }
								]])]),
								(0, vue.createElementVNode)("div", _hoisted_13$2, [
									(0, vue.createElementVNode)("button", {
										class: "text-button",
										onClick: _cache[6] || (_cache[6] = ($event) => (0, vue.unref)(networkStore).clearLogs())
									}, "清空记录"),
									(0, vue.createElementVNode)("button", {
										class: "text-button",
										onClick: _cache[7] || (_cache[7] = ($event) => (0, vue.unref)(networkStore).resetRules())
									}, "恢复默认"),
									(0, vue.createElementVNode)("button", {
										class: "primary-button",
										onClick: applyRules
									}, "保存规则")
								])
							])) : (0, vue.createCommentVNode)("", true)
						]), (0, vue.createElementVNode)("main", _hoisted_14$2, [(0, vue.createElementVNode)("section", _hoisted_15$1, [(0, vue.createElementVNode)("div", {
							ref_key: "scrollHost",
							ref: scrollHost,
							class: "list-scroll",
							onScroll
						}, [(0, vue.createElementVNode)("table", {
							class: "log-table",
							style: (0, vue.normalizeStyle)({ minWidth: `${(0, vue.unref)(tableWidth)}px` })
						}, [
							(0, vue.createElementVNode)("colgroup", null, [((0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(columns, (column) => {
								return (0, vue.createElementVNode)("col", {
									key: column.id,
									style: (0, vue.normalizeStyle)({ width: `${column.width}px` })
								}, null, 4);
							}), 64))]),
							(0, vue.createElementVNode)("thead", null, [(0, vue.createElementVNode)("tr", null, [((0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(columns, (column) => {
								return (0, vue.createElementVNode)("th", { key: column.id }, [(0, vue.createElementVNode)("span", null, (0, vue.toDisplayString)(column.label), 1), typeof columnHighlightEnabled(column) === "boolean" ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("label", {
									key: 0,
									class: "highlight-toggle",
									title: `高亮重复的${column.label}`
								}, [(0, vue.createElementVNode)("input", {
									type: "checkbox",
									checked: columnHighlightEnabled(column),
									"aria-label": `高亮重复的${column.label}`,
									onChange: ($event) => updateColumnHighlight(column, $event)
								}, null, 40, _hoisted_17$1)], 8, _hoisted_16$1)) : (0, vue.createCommentVNode)("", true)]);
							}), 64))])]),
							(0, vue.createElementVNode)("tbody", null, [
								visibleRows.value.top ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("tr", _hoisted_18$1, [(0, vue.createElementVNode)("td", {
									colspan: columns.length,
									style: (0, vue.normalizeStyle)({ height: `${visibleRows.value.top}px` })
								}, null, 12, _hoisted_19$1)])) : (0, vue.createCommentVNode)("", true),
								((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(visibleRows.value.items, (log) => {
									return (0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, { key: log._reqId }, [log.navigation ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("tr", {
										key: 0,
										ref_for: true,
										ref: (element) => observeNavigation(log._reqId, element),
										"data-navigation-id": log._reqId,
										class: "navigation-row"
									}, [(0, vue.createElementVNode)("td", { colspan: columns.length }, [(0, vue.createElementVNode)("div", _hoisted_22$1, [(0, vue.createElementVNode)("span", _hoisted_23$1, (0, vue.toDisplayString)(log.navigation.type), 1), (0, vue.createElementVNode)("div", _hoisted_24$1, [(0, vue.createElementVNode)("div", null, [_cache[15] || (_cache[15] = (0, vue.createElementVNode)("span", null, "FROM", -1)), (0, vue.createElementVNode)("span", null, (0, vue.toDisplayString)(log.navigation.from || "—"), 1)]), (0, vue.createElementVNode)("div", null, [_cache[16] || (_cache[16] = (0, vue.createElementVNode)("span", null, "TO", -1)), (0, vue.createElementVNode)("span", null, (0, vue.toDisplayString)(log.navigation.to || "—"), 1)])])])], 8, _hoisted_21$1)], 8, _hoisted_20$1)) : ((0, vue.openBlock)(), (0, vue.createElementBlock)("tr", {
										key: 1,
										class: (0, vue.normalizeClass)(["log-row", { selected: selectedId.value === log._reqId }]),
										style: (0, vue.normalizeStyle)({ height: `${rowHeight(log)}px` }),
										onClick: ($event) => selectedId.value = selectedId.value === log._reqId ? null : log._reqId
									}, [((0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(columns, (column) => {
										return (0, vue.createElementVNode)("td", {
											key: column.id,
											style: (0, vue.normalizeStyle)({ backgroundColor: cellColor(column, log) }),
											class: (0, vue.normalizeClass)([{ multiline: column.multiline }, typeof column.className === "function" ? column.className(log) : column.className])
										}, [column.id === "time" && log._isTop === false ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("span", _hoisted_26$1, "IFRAME")) : (0, vue.createCommentVNode)("", true), column.display === "status" ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("span", _hoisted_27$1, [(0, vue.createElementVNode)("strong", null, (0, vue.toDisplayString)(cellValues(column, log)[0] || ""), 1), (0, vue.createElementVNode)("span", null, (0, vue.toDisplayString)(cellValues(column, log)[1] || (cellValues(column, log)[0] ? "" : "-")), 1)])) : ((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, { key: 2 }, (0, vue.renderList)(cellValues(column, log), (value, index) => {
											return (0, vue.openBlock)(), (0, vue.createElementBlock)("span", {
												key: index,
												class: (0, vue.normalizeClass)(column.display === "text" ? "cell-text" : "badge")
											}, (0, vue.toDisplayString)(value || "-"), 3);
										}), 128))], 6);
									}), 64))], 14, _hoisted_25$1))], 64);
								}), 128)),
								visibleRows.value.bottom ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("tr", _hoisted_28$1, [(0, vue.createElementVNode)("td", {
									colspan: columns.length,
									style: (0, vue.normalizeStyle)({ height: `${visibleRows.value.bottom}px` })
								}, null, 12, _hoisted_29$1)])) : (0, vue.createCommentVNode)("", true)
							])
						], 4), !visibleRows.value.total ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_30$1, [(0, vue.createElementVNode)("strong", null, (0, vue.toDisplayString)((0, vue.unref)(networkStore).logs.length ? "没有匹配的记录" : "等待 GA4 事件"), 1), (0, vue.createElementVNode)("span", null, (0, vue.toDisplayString)((0, vue.unref)(networkStore).logs.length ? "试试其他搜索或筛选条件" : "匹配到的请求会显示在这里"), 1)])) : (0, vue.createCommentVNode)("", true)], 544), (0, vue.createElementVNode)("footer", _hoisted_31$1, "虚拟列表 · 请求记录 " + (0, vue.toDisplayString)(requestCount.value) + " · 导航记录 " + (0, vue.toDisplayString)(navigationCount.value), 1)]), selectedLog.value ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("aside", _hoisted_32$1, [selectedLog.value ? ((0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, { key: 0 }, [
							(0, vue.createElementVNode)("header", _hoisted_33$1, [_cache[18] || (_cache[18] = (0, vue.createElementVNode)("div", null, [(0, vue.createElementVNode)("h2", null, "事件参数详情")], -1)), (0, vue.createElementVNode)("button", {
								type: "button",
								class: "close-btn",
								"aria-label": "关闭",
								onClick: _cache[8] || (_cache[8] = ($event) => selectedId.value = null)
							}, [..._cache[17] || (_cache[17] = [(0, vue.createElementVNode)("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								viewBox: "0 0 24 24",
								width: "16",
								height: "16",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2",
								"stroke-linecap": "round",
								"stroke-linejoin": "round",
								"aria-hidden": "true"
							}, [(0, vue.createElementVNode)("path", { d: "M18 6 6 18" }), (0, vue.createElementVNode)("path", { d: "m6 6 12 12" })], -1)])])]),
							(0, vue.createElementVNode)("div", _hoisted_34$1, [(0, vue.createElementVNode)("span", null, (0, vue.toDisplayString)(formatTime(selectedLog.value._createAt)), 1), (0, vue.createElementVNode)("span", _hoisted_35$1, (0, vue.toDisplayString)(selectedLog.value._reqId), 1)]),
							(0, vue.createElementVNode)("div", _hoisted_36$1, [((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(detailSections.value, (section) => {
								return (0, vue.openBlock)(), (0, vue.createElementBlock)("section", {
									key: section.title,
									class: "detail-section"
								}, [
									(0, vue.createElementVNode)("h3", null, (0, vue.toDisplayString)(section.title), 1),
									((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(section.rows || [], (row) => {
										return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", {
											key: row.label,
											class: "kv-row"
										}, [(0, vue.createElementVNode)("span", null, (0, vue.toDisplayString)(row.label), 1), (0, vue.createElementVNode)("div", _hoisted_37$1, [(0, vue.createElementVNode)("pre", null, (0, vue.toDisplayString)(displayValue(row.value)), 1), row.copy ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("button", {
											key: 0,
											title: "复制",
											onClick: (0, vue.withModifiers)(($event) => copyValue(row.value), ["stop"])
										}, "复制", 8, _hoisted_38)) : (0, vue.createCommentVNode)("", true)])]);
									}), 128)),
									((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(section.folds || [], (fold) => {
										return (0, vue.withDirectives)(((0, vue.openBlock)(), (0, vue.createElementBlock)("details", {
											key: fold.label,
											class: "fold-section"
										}, [(0, vue.createElementVNode)("summary", null, [fold.badge ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("span", _hoisted_39, (0, vue.toDisplayString)(fold.badge), 1)) : (0, vue.createCommentVNode)("", true), (0, vue.createTextVNode)((0, vue.toDisplayString)(fold.label), 1)]), (0, vue.createElementVNode)("div", _hoisted_40, [((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(fold.rows, (row) => {
											return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", {
												key: row.label,
												class: "kv-row"
											}, [(0, vue.createElementVNode)("span", null, (0, vue.toDisplayString)(row.label), 1), (0, vue.createElementVNode)("div", _hoisted_41, [(0, vue.createElementVNode)("pre", null, (0, vue.toDisplayString)(displayValue(row.value)), 1)])]);
										}), 128))])], 512)), [[vue.vShow, !fold.isHidden]]);
									}), 128))
								]);
							}), 128))])
						], 64)) : ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_42, [..._cache[19] || (_cache[19] = [
							(0, vue.createElementVNode)("div", {
								class: "detail-icon",
								"aria-hidden": "true"
							}, "▤", -1),
							(0, vue.createElementVNode)("strong", null, "选择一条记录", -1),
							(0, vue.createElementVNode)("span", null, "请求参数和事件详情会显示在这里", -1)
						])]))])) : (0, vue.createCommentVNode)("", true)])]);
					};
				}
			}), [["__scopeId", "data-v-2ef585c2"]]),
			service: startMonitor
		}
	};
	var style_default = ":host{all:initial!important;z-index:var(--jx-root-z-index,2147480000)!important;pointer-events:none!important;isolation:isolate!important;position:fixed!important;inset:0!important}:is(#jx-app-root,#jx-popup-root){all:initial;z-index:var(--jx-root-z-index,2147480000);isolation:isolate;pointer-events:none;color:#171717;font-synthesis:none;text-rendering:optimizelegibility;-webkit-font-smoothing:antialiased;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;font-size:14px;line-height:1.5;display:block;position:fixed;inset:0}:is(#jx-app-root,#jx-popup-root),:is(#jx-app-root,#jx-popup-root) *,:is(#jx-app-root,#jx-popup-root) :before,:is(#jx-app-root,#jx-popup-root) :after{box-sizing:border-box}:is(#jx-app-root,#jx-popup-root) .ant-message,:is(#jx-app-root,#jx-popup-root) .ant-tooltip{pointer-events:none}:is(#jx-app-root,#jx-popup-root) .ant-notification,:is(#jx-app-root,#jx-popup-root) .ant-popover,:is(#jx-app-root,#jx-popup-root) .ant-dropdown,:is(#jx-app-root,#jx-popup-root) .ant-select-dropdown,:is(#jx-app-root,#jx-popup-root) .ant-picker-dropdown,:is(#jx-app-root,#jx-popup-root) .ant-cascader-dropdown,:is(#jx-app-root,#jx-popup-root) .ant-tree-select-dropdown{pointer-events:auto}:is(#jx-app-root,#jx-popup-root) .ant-message,:is(#jx-app-root,#jx-popup-root) .ant-notification{z-index:var(--jx-overlay-z-index,2147480000)!important}:is(#jx-app-root,#jx-popup-root) :where(a,ul,dl,div,section,article,p,h1,h2,h3,h4,h5,h6):empty{display:revert}.jx-tool-window{pointer-events:auto;background:#fff;flex-direction:column;max-width:100vw;max-height:100vh;display:flex;position:fixed;overflow:hidden;box-shadow:0 8px 32px #0003}.jx-dialog{border:1px solid #e5e6eb;border-radius:8px}.jx-drawer{top:0}.jx-window-header,.jx-window-footer{flex:none;padding:8px 12px}.jx-window-header{border-bottom:1px solid #e5e6eb;align-items:center;gap:8px;display:flex}.jx-window-header.draggable{cursor:move;-webkit-user-select:none;user-select:none;touch-action:none}.jx-window-header strong{line-height:1}.jx-window-actions{align-items:center;gap:2px;margin-left:auto;display:flex}.jx-window-close,.jx-window-fullscreen{color:#737373;cursor:pointer;background:0 0;border:0;border-radius:6px;place-items:center;width:28px;height:28px;padding:0;display:grid}.jx-window-close:hover,.jx-window-fullscreen:hover{color:#171717;background:#f2f2f2}.jx-window-body{overscroll-behavior:contain;flex:auto;min-height:0;padding:8px 16px;overflow:auto}.jx-window-footer{border-top:1px solid #e5e6eb}#jx-popup-root .ant-modal-wrap,#jx-popup-root .ant-modal-mask{pointer-events:auto}.host-drawer>.jx-window-body{scrollbar-width:thin;scrollbar-color:#c8c8c8 transparent}.host-drawer>.jx-window-body::-webkit-scrollbar{width:6px;height:6px}.host-drawer>.jx-window-body::-webkit-scrollbar-thumb{background:#c8c8c8;border-radius:6px}";
	var UI_LAYERS = {
		root: 2147483e3,
		plugin: 2147483100,
		activePlugin: 2147483200,
		floatingBall: 2147483300,
		floatingList: 2147483301,
		host: 2147483600,
		overlay: 2147483700
	};
	function getShadowRoot(triggerNode) {
		const root = triggerNode?.getRootNode();
		if (root instanceof ShadowRoot) return root;
		const owner = surface?.appRoot.getRootNode();
		return owner instanceof ShadowRoot ? owner : null;
	}
	function getPopupContainer(triggerNode) {
		const container = getShadowRoot(triggerNode)?.querySelector("#jx-popup-root") ?? surface?.popupRoot ?? document.body;
		if (container) return container;
		throw new Error("JX Work Assistant popup root is not initialized");
	}
	var surface;
	function ensureSurface() {
		if (surface) return surface;
		const host = document.createElement("div");
		host.id = "jx-work-assistant";
		host.append(Object.assign(document.createElement("i"), { hidden: true }));
		host.style.setProperty("--jx-root-z-index", String(UI_LAYERS.root));
		host.style.setProperty("--jx-floating-z-index", String(UI_LAYERS.floatingBall));
		host.style.setProperty("--jx-floating-list-z-index", String(UI_LAYERS.floatingList));
		host.style.setProperty("--jx-overlay-z-index", String(UI_LAYERS.overlay));
		const target = host.attachShadow({ mode: "open" });
		const style = document.createElement("style");
		style.textContent = style_default + (globalThis.__jxStyles ?? "");
		const appRoot = document.createElement("div");
		appRoot.id = "jx-app-root";
		const popupRoot = document.createElement("div");
		popupRoot.id = "jx-popup-root";
		target.append(style, appRoot, popupRoot);
		let waiting;
		const attach = () => {
			const parent = document.body ?? document.documentElement;
			if (!parent) return;
			parent.append(host);
			waiting?.disconnect();
		};
		if (!document.documentElement) {
			waiting = new MutationObserver(attach);
			waiting.observe(document, { childList: true });
		} else attach();
		surface = {
			appRoot,
			popupRoot,
			dispose() {
				waiting?.disconnect();
				host.remove();
				surface = void 0;
			}
		};
		return surface;
	}
	var pluginContextKey = Symbol("plugin context");
	var _hoisted_1$10 = { class: "jx-intercept-container" };
	var _hoisted_2$9 = { class: "jx-modal-desc" };
	var _hoisted_3$8 = { class: "jx-modal-option" };
	var config_default = {
		id: "jx-nav-blocker",
		name: "JX - 页面跳转拦截器",
		description: "在链接跳转、表单提交和页面离开时请求确认。",
		version: "26.11.9",
		releaseNotes: "unsafeWindow版本。",
		enabled: false,
		ui: {
			title: "页面跳转拦截器",
			icon: "🧭",
			currentLayout: "none"
		},
		app: { view: _plugin_vue_export_helper_default((0, vue.defineComponent)({
			__name: "index",
			setup(__props) {
				const context = (0, vue.inject)(pluginContextKey);
				let active = true;
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
						modalState.resolveFn?.(false);
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
					if (!active) return;
					isExecutingNavigation = true;
					if (navigationTimer) clearTimeout(navigationTimer);
					navigationTimer = unsafeWindow.setTimeout(() => {
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
						modalState.isNewTab ? unsafeWindow.open(link.href, "_blank") : unsafeWindow.location.href = link.href;
					});
				};
				const handleFormSubmit = async (e) => {
					e.preventDefault();
					const form = e.target;
					if (!form) return;
					if (await showConfirm("确认提交表单", form.action || unsafeWindow.location.href)) triggerNavigation(() => {
						const target = form.target;
						if (modalState.isNewTab) form.target = "_blank";
						try {
							HTMLFormElement.prototype.submit.call(form);
						} finally {
							form.target = target;
						}
					});
				};
				const handleBeforeUnload = (e) => {
					if (isExecutingNavigation) return;
					e.preventDefault();
				};
				const linkListener = (event) => {
					handleLinkClick(event).catch((error) => context.logger.error("link", error));
				};
				const formListener = (event) => {
					handleFormSubmit(event).catch((error) => context.logger.error("form", error));
				};
				(0, vue.onMounted)(() => {
					if (context.config.match.contexts?.[context.environment.type]?.isRunService === false) return;
					unsafeWindow.document.addEventListener("click", linkListener, true);
					unsafeWindow.document.addEventListener("submit", formListener, true);
					unsafeWindow.addEventListener("beforeunload", handleBeforeUnload);
				});
				(0, vue.onUnmounted)(() => {
					active = false;
					resolveAndClose(false);
					unsafeWindow.document.removeEventListener("click", linkListener, true);
					unsafeWindow.document.removeEventListener("submit", formListener, true);
					unsafeWindow.removeEventListener("beforeunload", handleBeforeUnload);
					if (navigationTimer) clearTimeout(navigationTimer);
				});
				return (_ctx, _cache) => {
					return (0, vue.openBlock)(), (0, vue.createBlock)((0, vue.unref)(ant_design_vue.StyleProvider), { container: (0, vue.unref)(getShadowRoot)() ?? void 0 }, {
						default: (0, vue.withCtx)(() => [(0, vue.createElementVNode)("div", _hoisted_1$10, [modalState.visible ? ((0, vue.openBlock)(), (0, vue.createBlock)((0, vue.unref)(ant_design_vue.Modal), {
							key: 0,
							open: modalState.visible,
							"onUpdate:open": _cache[1] || (_cache[1] = ($event) => modalState.visible = $event),
							"get-container": (0, vue.unref)(getPopupContainer),
							centered: true,
							"z-index": (0, vue.unref)(UI_LAYERS).activePlugin,
							title: modalState.title,
							"ok-text": "确认",
							"cancel-text": "取消",
							onOk: handleConfirm,
							onCancel: handleCancel,
							onKeydown: (0, vue.withKeys)((0, vue.withModifiers)(handleConfirm, ["prevent"]), ["enter"])
						}, {
							default: (0, vue.withCtx)(() => [(0, vue.createElementVNode)("div", _hoisted_2$9, [
								_cache[2] || (_cache[2] = (0, vue.createTextVNode)(" 即将离开当前页面前往：", -1)),
								_cache[3] || (_cache[3] = (0, vue.createElementVNode)("br", null, null, -1)),
								(0, vue.createElementVNode)("strong", null, (0, vue.toDisplayString)(modalState.url), 1)
							]), (0, vue.createElementVNode)("div", _hoisted_3$8, [(0, vue.createVNode)((0, vue.unref)(ant_design_vue.Checkbox), {
								checked: modalState.isNewTab,
								"onUpdate:checked": _cache[0] || (_cache[0] = ($event) => modalState.isNewTab = $event)
							}, {
								default: (0, vue.withCtx)(() => [..._cache[4] || (_cache[4] = [(0, vue.createTextVNode)(" 新标签页打开 ", -1)])]),
								_: 1
							}, 8, ["checked"])])]),
							_: 1
						}, 8, [
							"open",
							"get-container",
							"z-index",
							"title",
							"onKeydown"
						])) : (0, vue.createCommentVNode)("", true)])]),
						_: 1
					}, 8, ["container"]);
				};
			}
		}), [["__scopeId", "data-v-31ffbb4c"]]) }
	};
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
		if (!isRecord(override?.contexts)) return deepMerge(defaults, override);
		const contexts = {};
		for (const context of ["top", "iframe"]) {
			if (!(context in override.contexts)) continue;
			contexts[context] = deepMerge(defaults?.contexts?.[context] ?? {}, override.contexts[context]);
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
		enabled: true,
		match: { contexts: { top: { include: ["*"] } } },
		ui: {
			currentLayout: "dialog",
			title: "Plugin",
			icon: "🧩",
			rememberPosition: true,
			showInHost: true,
			layout: {
				dialog: {
					draggable: true,
					defaultCollapsed: false,
					style: layoutStyle()
				},
				drawer: {
					placement: "right",
					defaultCollapsed: false,
					style: layoutStyle()
				}
			}
		}
	};
	function availableWindowLayouts(manifest) {
		if (!manifest.app?.view) return [];
		return manifest.supportedLayouts ?? ["dialog", "drawer"];
	}
	function resolvePluginConfig(manifest, user) {
		const ui = manifest.ui ?? {};
		const defaults = deepMerge(DEFAULT_PLUGIN_CONFIG, {
			enabled: manifest.enabled,
			match: manifest.match,
			ui: {
				...ui,
				title: ui.title ?? manifest.name
			}
		});
		defaults.match = mergePluginMatch(DEFAULT_PLUGIN_CONFIG.match, manifest.match);
		const merged = deepMerge(defaults, user);
		const layouts = availableWindowLayouts(manifest);
		if (merged.ui.currentLayout !== "none" && !layouts.includes(merged.ui.currentLayout)) merged.ui.currentLayout = layouts[0] ?? "none";
		return {
			...merged,
			match: mergePluginMatch(defaults.match, user?.match)
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
			currentLayout,
			title: ui.title,
			icon: ui.icon,
			style,
			pixelWidth: numeric(styleConfig.width, currentLayout === "drawer" ? 400 : 600),
			placement: currentLayout === "drawer" ? ui.layout.drawer?.placement ?? "right" : "right",
			draggable: currentLayout === "dialog" && ui.layout.dialog?.draggable !== false,
			defaultCollapsed: options?.defaultCollapsed ?? false,
			rememberPosition: ui.rememberPosition
		};
	}
	function snapshotPage(id, page, href, match, enabled, entries) {
		return {
			id,
			type: page.type,
			href,
			startupHref: page.href,
			host: {
				enabled,
				match,
				serviceStatus: enabled && match.matched ? "started" : "idle",
				view: "none"
			},
			plugins: Object.fromEntries(entries.map((entry) => [entry.manifest.id, {
				enabled: !!entry.context.config.enabled,
				match: entry.match,
				serviceStatus: entry.manifest.app?.service ? entry.serviceStatus : "none",
				view: entry.viewFailed ? "failed" : entry.viewMounted ? "mounted" : entry.manifest.app?.view ? "unmounted" : "none"
			}]))
		};
	}
	function readFrameSnapshot(data, id, origin, known) {
		if (typeof data !== "string" || data.length > 131072) return;
		try {
			const page = JSON.parse(data);
			if (!isRecord(page) || page.type !== "iframe" || page.id !== id || !isRecord(page.plugins)) return;
			if (typeof page.href !== "string" || typeof page.startupHref !== "string") return;
			const current = new URL(page.href);
			const startup = new URL(page.startupHref);
			if (current.origin !== startup.origin || origin !== "null" && current.origin !== origin) return;
			const states = Object.entries(page.plugins);
			if (states.some(([key]) => !known.has(key))) return;
			for (const state of [page.host, ...states.map(([, value]) => value)]) if (!isRecord(state) || typeof state.enabled !== "boolean" || !isRecord(state.match) || typeof state.match.matched !== "boolean" || !Array.isArray(state.match.reason) || !state.match.reason.every((r) => typeof r === "string") || ![
				"none",
				"idle",
				"started",
				"failed",
				"stopped"
			].includes(String(state.serviceStatus)) || ![
				"none",
				"mounted",
				"failed",
				"unmounted"
			].includes(String(state.view))) return;
			return page;
		} catch {
			return;
		}
	}
	var channel = "jx.runtime-snapshot.v2";
	var interval = 5e3;
	var randomId = () => crypto.getRandomValues(new Uint32Array(4)).join("-");
	function belongsTo(frame, top) {
		if (frame === top) return false;
		try {
			let parent = frame.parent;
			while (parent && parent !== top && parent !== parent.parent) parent = parent.parent;
			return parent === top;
		} catch {
			return false;
		}
	}
	function descendants(root) {
		const frames = new Set();
		const pending = [root];
		while (pending.length) {
			const owner = pending.pop();
			try {
				for (let i = 0; i < owner.length; i++) {
					const child = owner.frames[i];
					if (child && !frames.has(child)) {
						frames.add(child);
						pending.push(child);
					}
				}
			} catch {}
		}
		return frames;
	}
	function observeNavigation(win, update) {
		const nav = win.navigation;
		const releases = [];
		if (nav) nav.addEventListener("currententrychange", update);
		else for (const name of ["pushState", "replaceState"]) {
			const original = win.history[name];
			const wrapper = function(...args) {
				original.apply(this, args);
				update();
			};
			win.history[name] = wrapper;
			releases.push(() => {
				if (win.history[name] === wrapper) win.history[name] = original;
			});
		}
		win.addEventListener("popstate", update);
		win.addEventListener("hashchange", update);
		update();
		return () => {
			nav?.removeEventListener("currententrychange", update);
			win.removeEventListener("popstate", update);
			win.removeEventListener("hashchange", update);
			releases.forEach((release) => release());
		};
	}
	function startSnapshots(page, match, enabled, entries) {
		const win = unsafeWindow;
		const top = win.top;
		const localId = randomId();
		const href = (0, vue.ref)(page.href);
		const local = (0, vue.computed)(() => snapshotPage(localId, page, href.value, match, enabled, entries));
		const remote = (0, vue.shallowRef)(new Map());
		const pages = (0, vue.computed)(() => [local.value, ...Array.from(remote.value.values(), (item) => item.page)]);
		const known = new Set(entries.map((entry) => entry.manifest.id));
		let suspended = false;
		let timer;
		let sendTimer;
		let stopNavigation;
		function post(action) {
			if (win === top) return;
			try {
				top.postMessage({
					channel,
					action,
					id: localId,
					data: action === "snapshot" ? JSON.stringify(local.value) : void 0
				}, "*");
			} catch {}
		}
		function prune() {
			const live = descendants(win);
			const now = Date.now();
			let changed = false;
			for (const [id, item] of remote.value) if (!live.has(item.source) || now - item.seen > 6e4) {
				remote.value.delete(id);
				changed = true;
			}
			if (changed) (0, vue.triggerRef)(remote);
		}
		function receive(event) {
			const message = event.data;
			if (win !== top || suspended || message?.channel !== channel || typeof message.id !== "string" || !message.id || message.id.length > 64 || !event.source) return;
			const source = event.source;
			const previous = remote.value.get(message.id);
			if (message.action === "leave") {
				if (previous?.source === source) {
					remote.value.delete(message.id);
					(0, vue.triggerRef)(remote);
				}
				return;
			}
			if (message.action !== "snapshot" || previous && previous.source !== source || !belongsTo(source, win)) return;
			const snapshot = readFrameSnapshot(message.data, message.id, event.origin, known);
			if (!snapshot) return;
			if (previous && previous.data === message.data) {
				previous.seen = Date.now();
				return;
			}
			remote.value.set(message.id, {
				source,
				page: snapshot,
				data: message.data,
				seen: Date.now()
			});
			(0, vue.triggerRef)(remote);
		}
		function start() {
			suspended = false;
			stopNavigation ??= observeNavigation(win, () => {
				href.value = win.location.href;
			});
			if (win === top) prune();
			else post("snapshot");
			clearInterval(timer);
			timer = setInterval(() => {
				if (win === top) prune();
				else {
					href.value = win.location.href;
					post("snapshot");
				}
			}, interval);
		}
		function hide() {
			if (suspended) return;
			post("leave");
			suspended = true;
			clearInterval(timer);
			timer = void 0;
			clearTimeout(sendTimer);
			sendTimer = void 0;
			stopNavigation?.();
			stopNavigation = void 0;
			if (remote.value.size) {
				remote.value.clear();
				(0, vue.triggerRef)(remote);
			}
		}
		const stopWatch = (0, vue.watch)(local, () => {
			if (win !== top && !suspended && !sendTimer) sendTimer = setTimeout(() => {
				sendTimer = void 0;
				if (!suspended) post("snapshot");
			}, 40);
		});
		win.addEventListener("message", receive);
		win.addEventListener("pagehide", hide);
		win.addEventListener("pageshow", start);
		start();
		return {
			pages,
			setVisible(open) {
				if (open && win === top && !suspended) prune();
			},
			stop() {
				hide();
				stopWatch();
				win.removeEventListener("message", receive);
				win.removeEventListener("pagehide", hide);
				win.removeEventListener("pageshow", start);
			}
		};
	}
	var _hoisted_1$9 = { class: "jx-config-grid" };
	var _hoisted_2$8 = { class: "jx-config-switch" };
	var _hoisted_3$7 = { class: "jx-config-switch" };
	var MatchContextEditor_default = _plugin_vue_export_helper_default((0, vue.defineComponent)({
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
				return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_1$9, [
					(0, vue.createElementVNode)("div", _hoisted_2$8, [_cache[4] || (_cache[4] = (0, vue.createElementVNode)("span", null, "挂载视图", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Switch), {
						"aria-label": "挂载视图",
						checked: __props.rules.isRunView !== false,
						size: "small",
						"onUpdate:checked": _cache[0] || (_cache[0] = ($event) => emit("update:rules", {
							...__props.rules,
							isRunView: Boolean($event)
						}))
					}, null, 8, ["checked"])]),
					(0, vue.createElementVNode)("div", _hoisted_3$7, [_cache[5] || (_cache[5] = (0, vue.createElementVNode)("span", null, "后台服务", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Switch), {
						"aria-label": "后台服务",
						checked: __props.rules.isRunService !== false,
						size: "small",
						"onUpdate:checked": _cache[1] || (_cache[1] = ($event) => emit("update:rules", {
							...__props.rules,
							isRunService: Boolean($event)
						}))
					}, null, 8, ["checked"])]),
					(0, vue.createElementVNode)("label", null, [_cache[6] || (_cache[6] = (0, vue.createElementVNode)("span", null, [(0, vue.createTextVNode)("包含规则 "), (0, vue.createElementVNode)("small", { class: "tip-text" }, "每行一条，* 匹配所有 URL")], -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Input).TextArea, {
						value: (props.rules.include ?? []).join("\n"),
						"auto-size": {
							minRows: 2,
							maxRows: 8
						},
						placeholder: "*checkout*\nhttps://example.com/account/*",
						"onUpdate:value": _cache[2] || (_cache[2] = ($event) => update("include", $event)),
						class: "modern-textarea"
					}, null, 8, ["value"])]),
					(0, vue.createElementVNode)("label", null, [_cache[7] || (_cache[7] = (0, vue.createElementVNode)("span", null, [(0, vue.createTextVNode)("排除规则 "), (0, vue.createElementVNode)("small", { class: "tip-text" }, "命中任一规则时不运行")], -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Input).TextArea, {
						value: (props.rules.exclude ?? []).join("\n"),
						"auto-size": {
							minRows: 2,
							maxRows: 6
						},
						placeholder: "*payment*",
						"onUpdate:value": _cache[3] || (_cache[3] = ($event) => update("exclude", $event)),
						class: "modern-textarea"
					}, null, 8, ["value"])])
				]);
			};
		}
	}), [["__scopeId", "data-v-54a5a682"]]);
	var _hoisted_1$8 = {
		class: "snapshot jx-config-panel",
		"aria-label": "运行时快照"
	};
	var _hoisted_2$7 = ["open"];
	var _hoisted_3$6 = { class: "stats" };
	var _hoisted_4$6 = { class: "running" };
	var _hoisted_5$5 = { key: 0 };
	var _hoisted_6$5 = ["title"];
	var _hoisted_7$5 = { key: 0 };
	var _hoisted_8$5 = { key: 1 };
	var _hoisted_9$4 = {
		key: 2,
		class: "facts"
	};
	var _hoisted_10$3 = { key: 1 };
	var _hoisted_11$3 = { key: 3 };
	var _hoisted_12$2 = { key: 1 };
	var DISPLAY_DELAY = 2500;
	var RuntimeSnapshot_default = _plugin_vue_export_helper_default((0, vue.defineComponent)({
		__name: "RuntimeSnapshot",
		props: {
			pages: {},
			pluginId: {}
		},
		setup(__props) {
			const props = __props;
			const contexts = {
				top: "top window",
				iframe: "iframe"
			};
			const serviceLabels = {
				started: "服务已启动",
				failed: "服务启动失败",
				stopped: "服务已停止",
				idle: "服务未启动",
				none: "无服务"
			};
			const viewLabels = {
				mounted: "视图已挂载",
				failed: "视图异常",
				unmounted: "视图未挂载",
				none: "无视图"
			};
			const displayed = (0, vue.shallowRef)(new Map(props.pages.map((page) => [page.id, {
				page,
				exited: false
			}])));
			let displayTimer;
			(0, vue.watch)(() => props.pages, (pages) => {
				const active = new Set(pages.map((page) => page.id));
				let changed = false;
				for (const [id, row] of displayed.value) {
					const exited = row.page.type === "iframe" && !active.has(id);
					if (row.exited !== exited) {
						row.exited = exited;
						changed = true;
					}
				}
				if (changed) (0, vue.triggerRef)(displayed);
				if (!displayTimer) displayTimer = setTimeout(() => {
					displayTimer = void 0;
					const latest = new Map(props.pages.map((page) => [page.id, page]));
					const next = new Map();
					for (const id of displayed.value.keys()) {
						const page = latest.get(id);
						if (page) {
							next.set(id, {
								page,
								exited: false
							});
							latest.delete(id);
						}
					}
					for (const [id, page] of latest) next.set(id, {
						page,
						exited: false
					});
					displayed.value = next;
				}, DISPLAY_DELAY);
			});
			(0, vue.onUnmounted)(() => clearTimeout(displayTimer));
			const groups = (0, vue.computed)(() => {
				const rows = Array.from(displayed.value.values(), ({ page, exited }) => {
					const state = props.pluginId === void 0 ? page.host : page.plugins[props.pluginId];
					return {
						page,
						state,
						running: state?.serviceStatus === "started" || state?.view === "mounted",
						exited
					};
				});
				return Object.entries(contexts).map(([type, label]) => {
					const instances = rows.filter((row) => row.page.type === type);
					return {
						type,
						label,
						instances,
						count: instances.length,
						running: instances.filter((row) => row.running).length
					};
				});
			});
			return (_ctx, _cache) => {
				return (0, vue.openBlock)(), (0, vue.createElementBlock)("section", _hoisted_1$8, [_cache[2] || (_cache[2] = (0, vue.createElementVNode)("strong", { class: "jx-config-title" }, "运行状态", -1)), ((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(groups.value, (group) => {
					return (0, vue.openBlock)(), (0, vue.createElementBlock)("details", {
						key: group.type,
						open: group.type === "top"
					}, [(0, vue.createElementVNode)("summary", null, [(0, vue.createTextVNode)((0, vue.toDisplayString)(group.label) + " ", 1), (0, vue.createElementVNode)("span", _hoisted_3$6, [(0, vue.createElementVNode)("span", null, [(0, vue.createElementVNode)("b", null, (0, vue.toDisplayString)(group.count), 1), _cache[0] || (_cache[0] = (0, vue.createTextVNode)(" 个实例", -1))]), (0, vue.createElementVNode)("span", _hoisted_4$6, [(0, vue.createElementVNode)("b", null, (0, vue.toDisplayString)(group.running), 1), _cache[1] || (_cache[1] = (0, vue.createTextVNode)(" 个运行中", -1))])])]), group.instances.length ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("ul", _hoisted_5$5, [((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(group.instances, ({ page, state, exited }) => {
						return (0, vue.openBlock)(), (0, vue.createElementBlock)("li", { key: page.id }, [
							(0, vue.createElementVNode)("div", {
								class: "url",
								title: page.href
							}, (0, vue.toDisplayString)(page.href), 9, _hoisted_6$5),
							page.href !== page.startupHref ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("small", _hoisted_7$5, "启动地址：" + (0, vue.toDisplayString)(page.startupHref), 1)) : (0, vue.createCommentVNode)("", true),
							exited ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("small", _hoisted_8$5, "已退出")) : state ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_9$4, [
								(0, vue.createElementVNode)("span", null, (0, vue.toDisplayString)(state.enabled ? "已启用" : "已停用"), 1),
								(0, vue.createElementVNode)("span", null, (0, vue.toDisplayString)(state.match.matched ? "启动时匹配" : state.match.reason.join("；")), 1),
								__props.pluginId ? ((0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, { key: 0 }, [(0, vue.createElementVNode)("span", null, (0, vue.toDisplayString)(serviceLabels[state.serviceStatus]), 1), (0, vue.createElementVNode)("span", null, (0, vue.toDisplayString)(viewLabels[state.view]), 1)], 64)) : ((0, vue.openBlock)(), (0, vue.createElementBlock)("span", _hoisted_10$3, (0, vue.toDisplayString)(state.serviceStatus === "started" ? "已运行" : "未启动"), 1))
							])) : ((0, vue.openBlock)(), (0, vue.createElementBlock)("small", _hoisted_11$3, "插件未加载"))
						]);
					}), 128))])) : ((0, vue.openBlock)(), (0, vue.createElementBlock)("small", _hoisted_12$2, "暂无已上报实例"))], 8, _hoisted_2$7);
				}), 128))]);
			};
		}
	}), [["__scopeId", "data-v-e267dffe"]]);
	var _hoisted_1$7 = { class: "jx-config-grid" };
	var _hoisted_2$6 = { class: "wide" };
	var _hoisted_3$5 = { class: "jx-config-grid behavior-grid" };
	var _hoisted_4$5 = { class: "jx-config-switch" };
	var _hoisted_5$4 = { class: "jx-config-switch" };
	var _hoisted_6$4 = {
		key: 0,
		class: "jx-config-grid behavior-grid"
	};
	var _hoisted_7$4 = { class: "jx-config-switch" };
	var _hoisted_8$4 = {
		key: 1,
		class: "jx-config-grid behavior-grid"
	};
	var _hoisted_9$3 = { class: "jx-config-switch" };
	var _hoisted_10$2 = { class: "jx-config-switch" };
	var _hoisted_11$2 = { key: 2 };
	var _hoisted_12$1 = { class: "jx-config-grid" };
	var _hoisted_13$1 = ["title"];
	var _hoisted_14$1 = { class: "advanced-style jx-config-panel" };
	var PluginAppearanceEditor_default = _plugin_vue_export_helper_default((0, vue.defineComponent)({
		__name: "PluginAppearanceEditor",
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
				return (0, vue.openBlock)(), (0, vue.createElementBlock)("section", null, [
					_cache[23] || (_cache[23] = (0, vue.createElementVNode)("h3", { class: "section-title jx-config-title" }, "界面设置", -1)),
					(0, vue.createElementVNode)("div", _hoisted_1$7, [
						(0, vue.createElementVNode)("label", null, [_cache[10] || (_cache[10] = (0, vue.createElementVNode)("span", null, "窗口类型", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Select), {
							value: props.ui.currentLayout,
							options: props.availableLayouts,
							"get-popup-container": (0, vue.unref)(getPopupContainer),
							"onUpdate:value": _cache[0] || (_cache[0] = ($event) => set("currentLayout", $event))
						}, null, 8, [
							"value",
							"options",
							"get-popup-container"
						])]),
						(0, vue.createElementVNode)("label", null, [_cache[11] || (_cache[11] = (0, vue.createElementVNode)("span", null, "图标", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Input), {
							value: props.ui.icon,
							"onUpdate:value": _cache[1] || (_cache[1] = ($event) => set("icon", $event))
						}, null, 8, ["value"])]),
						(0, vue.createElementVNode)("label", _hoisted_2$6, [_cache[12] || (_cache[12] = (0, vue.createElementVNode)("span", null, "标题", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Input), {
							value: props.ui.title,
							"onUpdate:value": _cache[2] || (_cache[2] = ($event) => set("title", $event))
						}, null, 8, ["value"])])
					]),
					(0, vue.createElementVNode)("div", _hoisted_3$5, [(0, vue.createElementVNode)("div", _hoisted_4$5, [_cache[13] || (_cache[13] = (0, vue.createElementVNode)("span", null, "记住位置", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Switch), {
						"aria-label": "记住位置",
						checked: props.ui.rememberPosition,
						size: "small",
						"onUpdate:checked": _cache[3] || (_cache[3] = ($event) => set("rememberPosition", $event))
					}, null, 8, ["checked"])]), (0, vue.createElementVNode)("div", _hoisted_5$4, [_cache[14] || (_cache[14] = (0, vue.createElementVNode)("span", null, "显示在控制中心", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Switch), {
						"aria-label": "显示在控制中心",
						checked: props.ui.showInHost,
						size: "small",
						"onUpdate:checked": _cache[4] || (_cache[4] = ($event) => set("showInHost", $event))
					}, null, 8, ["checked"])])]),
					props.ui.currentLayout === "drawer" ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_6$4, [(0, vue.createElementVNode)("div", _hoisted_7$4, [_cache[15] || (_cache[15] = (0, vue.createElementVNode)("span", null, "默认收起", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Switch), {
						"aria-label": "默认收起",
						checked: props.ui.layout.drawer?.defaultCollapsed,
						size: "small",
						"onUpdate:checked": _cache[5] || (_cache[5] = ($event) => set("layout.drawer.defaultCollapsed", $event))
					}, null, 8, ["checked"])]), (0, vue.createElementVNode)("label", null, [_cache[16] || (_cache[16] = (0, vue.createElementVNode)("span", null, "展开方向", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Select), {
						value: props.ui.layout.drawer?.placement,
						options: [{
							label: "右侧",
							value: "right"
						}, {
							label: "左侧",
							value: "left"
						}],
						"get-popup-container": (0, vue.unref)(getPopupContainer),
						"onUpdate:value": _cache[6] || (_cache[6] = ($event) => set("layout.drawer.placement", $event))
					}, null, 8, ["value", "get-popup-container"])])])) : props.ui.currentLayout === "dialog" ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_8$4, [(0, vue.createElementVNode)("div", _hoisted_9$3, [_cache[17] || (_cache[17] = (0, vue.createElementVNode)("span", null, "默认收起", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Switch), {
						"aria-label": "默认收起",
						checked: props.ui.layout.dialog?.defaultCollapsed,
						size: "small",
						"onUpdate:checked": _cache[7] || (_cache[7] = ($event) => set("layout.dialog.defaultCollapsed", $event))
					}, null, 8, ["checked"])]), (0, vue.createElementVNode)("div", _hoisted_10$2, [_cache[18] || (_cache[18] = (0, vue.createElementVNode)("span", null, "允许拖动窗口", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Switch), {
						"aria-label": "允许拖动窗口",
						checked: props.ui.layout.dialog?.draggable,
						size: "small",
						"onUpdate:checked": _cache[8] || (_cache[8] = ($event) => set("layout.dialog.draggable", $event))
					}, null, 8, ["checked"])])])) : (0, vue.createCommentVNode)("", true),
					props.ui.currentLayout !== "none" ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_11$2, [
						_cache[22] || (_cache[22] = (0, vue.createElementVNode)("h3", { class: "section-title jx-config-title" }, "窗口尺寸与样式", -1)),
						(0, vue.createElementVNode)("div", _hoisted_12$1, [((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)((0, vue.unref)(STYLE_FIELDS), (field) => {
							return (0, vue.openBlock)(), (0, vue.createElementBlock)("label", {
								key: field.key,
								title: field.group
							}, [(0, vue.createElementVNode)("span", null, (0, vue.toDisplayString)(field.label), 1), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Input), {
								value: activeStyle.value[field.key],
								placeholder: "如 80vw、auto",
								"onUpdate:value": ($event) => set(stylePath(String(field.key)), $event)
							}, null, 8, ["value", "onUpdate:value"])], 8, _hoisted_13$1);
						}), 128))]),
						(0, vue.createElementVNode)("details", _hoisted_14$1, [
							_cache[20] || (_cache[20] = (0, vue.createElementVNode)("summary", null, "高级自定义 CSS", -1)),
							_cache[21] || (_cache[21] = (0, vue.createElementVNode)("p", null, "作用于窗口根容器，属性名使用 CSS 写法。", -1)),
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
										default: (0, vue.withCtx)(() => [..._cache[19] || (_cache[19] = [(0, vue.createTextVNode)("删除", -1)])]),
										_: 1
									}, 8, ["onClick"])
								]);
							}), 128)),
							(0, vue.createElementVNode)("button", {
								type: "button",
								class: "add-custom",
								onClick: _cache[9] || (_cache[9] = ($event) => set(`${stylePath("custom")}.custom-${Date.now()}`, ""))
							}, "+ 添加属性")
						])
					])) : (0, vue.createCommentVNode)("", true)
				]);
			};
		}
	}), [["__scopeId", "data-v-75a1b1b8"]]);
	var NAME = "JX Work Assistant";
	var HOST_CONFIG = {
		id: "jx-work-assistant",
		name: NAME,
		version: "0.5.4",
		releaseNotes: "底层架构重构；数据结构、样式重构",
		match: { contexts: {
			top: { include: ["*"] },
			iframe: { include: ["*"] }
		} },
		ui: {
			title: NAME,
			icon: "🧩"
		}
	};
	var HOST_DEFAULTS = {
		allowIframe: true,
		showIframeUI: false,
		showFloatingBall: true
	};
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
	var STORAGE_PREFIX = "jx-work-assistant";
	var STORAGE_KEYS = {
		settings: (version) => `${STORAGE_PREFIX}:settings:v${version}`,
		updateState: (version) => `${STORAGE_PREFIX}:state:update:v${version}`,
		windowState: (id, version) => `${STORAGE_PREFIX}:window:${id}:v${version}`
	};
	var SETTINGS_KEY = STORAGE_KEYS.settings(4);
	var UPDATE_STATE_KEY = STORAGE_KEYS.updateState(1);
	var storage = {
		get(key, fallback) {
			return GM_getValue(key, fallback);
		},
		async set(key, value) {
			await GM_setValue(key, value);
		}
	};
	function getUpdateCheckState() {
		return storage.get(UPDATE_STATE_KEY, {}) ?? {};
	}
	async function saveUpdateCheckState(state) {
		await storage.set(UPDATE_STATE_KEY, state);
	}
	var clone$1 = (value) => JSON.parse(JSON.stringify(value));
	var settings = (0, vue.reactive)({ plugins: {} });
	var pageSettings = { plugins: {} };
	var invalidSettings = false;
	async function initializeSettings(isTop) {
		const current = storage.get(SETTINGS_KEY);
		if (isRecord(current) && isRecord(current.plugins) && !("version" in current)) Object.assign(settings, current);
		else if (current !== void 0) invalidSettings = true;
		else if (isTop) try {
			await storage.set(SETTINGS_KEY, { plugins: {} });
		} catch (error) {
			console.warn("[JX Work Assistant] settings initialization failed; save can retry", error);
		}
		pageSettings = clone$1(settings);
	}
	function getHostPreferences() {
		return {
			...HOST_DEFAULTS,
			...pageSettings.host
		};
	}
	function getPluginConfig(manifest) {
		return resolvePluginConfig(manifest, settings.plugins[manifest.id]);
	}
	function getPagePluginConfig(manifest) {
		return resolvePluginConfig(manifest, pageSettings.plugins[manifest.id]);
	}
	async function saveSettings(next) {
		if (invalidSettings) throw new Error("现有配置版本无法识别，已保留原始数据；请先升级到兼容版本后再保存。");
		await persistBeforeCommit(clone$1(next), (value) => storage.set(SETTINGS_KEY, value), (value) => {
			settings.plugins = value.plugins;
			settings.host = value.host;
		});
	}
	function getWindowState(id) {
		const current = storage.get(STORAGE_KEYS.windowState(id, 2));
		return isRecord(current) ? current : {};
	}
	async function setWindowState(id, state) {
		await storage.set(STORAGE_KEYS.windowState(id, 2), {
			...getWindowState(id),
			...state
		});
	}
	function settingsSnapshot() {
		return clone$1(settings);
	}
	var _hoisted_1$6 = { class: "update-manager" };
	var _hoisted_2$5 = { class: "popover-panel" };
	var _hoisted_3$4 = { class: "panel-header" };
	var _hoisted_4$4 = { class: "panel-title" };
	var _hoisted_5$3 = {
		key: 0,
		class: "panel-empty"
	};
	var _hoisted_6$3 = { class: "version-tag" };
	var _hoisted_7$3 = {
		key: 1,
		class: "panel-body"
	};
	var _hoisted_8$3 = { class: "name" };
	var _hoisted_9$2 = { class: "ver-change" };
	var _hoisted_10$1 = { class: "notes" };
	var _hoisted_11$1 = ["href"];
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
				return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_1$6, [(0, vue.createVNode)((0, vue.unref)(ant_design_vue.Popover), {
					placement: "bottomRight",
					trigger: "click",
					"overlay-class-name": "monochrome-popover"
				}, {
					content: (0, vue.withCtx)(() => [(0, vue.createElementVNode)("div", _hoisted_2$5, [(0, vue.createElementVNode)("div", _hoisted_3$4, [(0, vue.createElementVNode)("span", _hoisted_4$4, (0, vue.toDisplayString)(updates.value.length ? `发现 ${updates.value.length} 个新版本` : "版本信息"), 1), (0, vue.createElementVNode)("button", {
						class: (0, vue.normalizeClass)(["icon-refresh", { spinning: checking.value }]),
						title: "检查更新",
						onClick: _cache[0] || (_cache[0] = ($event) => check(true))
					}, "↻", 2)]), !updates.value.length ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_5$3, [_cache[1] || (_cache[1] = (0, vue.createElementVNode)("p", { class: "status-text" }, "已是最新状态", -1)), (0, vue.createElementVNode)("span", _hoisted_6$3, (0, vue.toDisplayString)((0, vue.unref)(HOST_CONFIG).version), 1)])) : ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_7$3, [((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(updates.value, (item) => {
						return (0, vue.openBlock)(), (0, vue.createElementBlock)("div", {
							key: item.id,
							class: "update-item"
						}, [
							(0, vue.createElementVNode)("div", _hoisted_8$3, (0, vue.toDisplayString)(item.name), 1),
							(0, vue.createElementVNode)("div", _hoisted_9$2, (0, vue.toDisplayString)(item.currentVersion) + " → " + (0, vue.toDisplayString)(item.latestVersion), 1),
							(0, vue.createElementVNode)("p", _hoisted_10$1, (0, vue.toDisplayString)(item.releaseNotes), 1)
						]);
					}), 128)), (0, vue.createElementVNode)("a", {
						class: "update-btn",
						href: (0, vue.unref)(UPDATE_CONFIG).scriptUpdateUrl,
						target: "_blank",
						rel: "noreferrer"
					}, " 立即更新 ↗ ", 8, _hoisted_11$1)]))])]),
					default: (0, vue.withCtx)(() => [(0, vue.createElementVNode)("div", { class: (0, vue.normalizeClass)(["trigger-entry", { "has-update": updates.value.length }]) }, [_cache[2] || (_cache[2] = (0, vue.createElementVNode)("span", { class: "status-dot" }, null, -1)), (0, vue.createElementVNode)("span", null, (0, vue.toDisplayString)(updates.value.length ? "发现新版本" : `${(0, vue.unref)(HOST_CONFIG).version}`), 1)], 2)]),
					_: 1
				})]);
			};
		}
	}), [["__scopeId", "data-v-5b505460"]]);
	var _hoisted_1$5 = {
		class: "plugin-icon",
		"aria-hidden": "true"
	};
	var _hoisted_2$4 = ["src"];
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
				return (0, vue.openBlock)(), (0, vue.createElementBlock)("span", _hoisted_1$5, [imageUrl.value ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("img", {
					key: 0,
					src: imageUrl.value,
					alt: ""
				}, null, 8, _hoisted_2$4)) : ((0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, { key: 1 }, [(0, vue.createTextVNode)((0, vue.toDisplayString)(character.value), 1)], 64))]);
			};
		}
	}), [["__scopeId", "data-v-517b0ad6"]]);
	var _hoisted_1$4 = ["aria-label"];
	var _hoisted_2$3 = { class: "jx-window-header" };
	var _hoisted_3$3 = { class: "jx-window-actions" };
	var _hoisted_4$3 = ["aria-label"];
	var _hoisted_5$2 = {
		width: "16",
		height: "16",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "1.8",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"aria-hidden": "true"
	};
	var _hoisted_6$2 = ["d"];
	var _hoisted_7$2 = ["aria-label"];
	var _hoisted_8$2 = { class: "jx-window-body" };
	var _hoisted_9$1 = {
		key: 0,
		class: "jx-window-footer"
	};
	var Drawer_default = (0, vue.defineComponent)({
		__name: "Drawer",
		props: {
			ui: {},
			collapsed: { type: Boolean },
			active: { type: Boolean },
			zIndex: {}
		},
		emits: ["update:collapsed", "activate"],
		setup(__props, { emit: __emit }) {
			const props = __props;
			const emit = __emit;
			const fullscreen = (0, vue.ref)(false);
			const visited = (0, vue.ref)(false);
			(0, vue.watchEffect)(() => {
				if (!props.collapsed) visited.value = true;
			});
			return (_ctx, _cache) => {
				return visited.value ? (0, vue.withDirectives)(((0, vue.openBlock)(), (0, vue.createElementBlock)("section", {
					key: 0,
					class: "jx-tool-window jx-drawer",
					role: "dialog",
					"aria-label": __props.ui.title,
					onPointerdown: _cache[2] || (_cache[2] = ($event) => emit("activate")),
					style: (0, vue.normalizeStyle)({
						...__props.ui.style,
						...fullscreen.value ? {
							inset: 0,
							width: "100vw",
							height: "100vh",
							maxWidth: "100vw",
							maxHeight: "100vh"
						} : {},
						[__props.ui.placement]: 0,
						zIndex: __props.zIndex ?? (__props.active ? (0, vue.unref)(UI_LAYERS).activePlugin : (0, vue.unref)(UI_LAYERS).plugin)
					})
				}, [
					(0, vue.createElementVNode)("header", _hoisted_2$3, [(0, vue.renderSlot)(_ctx.$slots, "title", {}, () => [
						(0, vue.createVNode)(PluginIcon_default, { config: __props.ui }, null, 8, ["config"]),
						(0, vue.createElementVNode)("strong", null, (0, vue.toDisplayString)(__props.ui.title), 1),
						(0, vue.renderSlot)(_ctx.$slots, "header"),
						(0, vue.renderSlot)(_ctx.$slots, "extra"),
						(0, vue.createElementVNode)("div", _hoisted_3$3, [(0, vue.createElementVNode)("button", {
							type: "button",
							class: "jx-window-fullscreen",
							"aria-label": fullscreen.value ? "退出全屏" : "全屏",
							onClick: _cache[0] || (_cache[0] = ($event) => fullscreen.value = !fullscreen.value)
						}, [((0, vue.openBlock)(), (0, vue.createElementBlock)("svg", _hoisted_5$2, [(0, vue.createElementVNode)("path", { d: fullscreen.value ? "M9 3v6H3m12-6v6h6M9 21v-6H3m12 6v-6h6" : "M3 9V3h6m6 0h6v6M3 15v6h6m6 0h6v-6" }, null, 8, _hoisted_6$2)]))], 8, _hoisted_4$3), (0, vue.createElementVNode)("button", {
							type: "button",
							class: "jx-window-close",
							"aria-label": "收起" + __props.ui.title,
							onClick: _cache[1] || (_cache[1] = ($event) => emit("update:collapsed", true))
						}, [..._cache[3] || (_cache[3] = [(0, vue.createElementVNode)("svg", {
							width: "16",
							height: "16",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"stroke-linecap": "round",
							"aria-hidden": "true"
						}, [(0, vue.createElementVNode)("path", { d: "M18 6 6 18M6 6l12 12" })], -1)])], 8, _hoisted_7$2)])
					])]),
					(0, vue.createElementVNode)("div", _hoisted_8$2, [(0, vue.renderSlot)(_ctx.$slots, "default")]),
					_ctx.$slots.footer ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("footer", _hoisted_9$1, [(0, vue.renderSlot)(_ctx.$slots, "footer")])) : (0, vue.createCommentVNode)("", true)
				], 44, _hoisted_1$4)), [[vue.vShow, !__props.collapsed]]) : (0, vue.createCommentVNode)("", true);
			};
		}
	});
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
		return ["include", "exclude"].every((key) => value[key] === void 0 || Array.isArray(value[key]) && value[key].every((item) => typeof item === "string")) && ["isRunView", "isRunService"].every((key) => value[key] === void 0 || typeof value[key] === "boolean");
	}
	function evaluateMatch(config, page) {
		if (config !== void 0 && !isRecord(config)) return {
			matched: false,
			reason: ["匹配配置无效"]
		};
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
	function startPlugins(manifests, environment, resolveConfig) {
		const entries = [];
		const cleanups = [];
		const ids = new Set();
		for (const manifest of manifests) {
			const prefix = `[JX Work Assistant][${manifest.id}]`;
			if (ids.has(manifest.id)) {
				console.error(prefix, "duplicate ID, skipped");
				continue;
			}
			ids.add(manifest.id);
			const logger = {
				info: (...args) => console.info(prefix, ...args),
				warn: (...args) => console.warn(prefix, ...args),
				error: (...args) => console.error(prefix, ...args)
			};
			const config = resolveConfig(manifest);
			const match = evaluateMatch(config.match, environment);
			const rules = config.match.contexts?.[environment.type];
			const context = {
				config,
				environment,
				logger
			};
			const entry = (0, vue.shallowReactive)({
				manifest,
				context,
				ui: resolveActivePluginUI(config.ui),
				match,
				serviceStatus: "idle",
				viewMounted: false,
				viewFailed: false
			});
			entries.push(entry);
			if (!config.enabled || !match.matched || !manifest.app?.service || rules?.isRunService === false) continue;
			try {
				const cleanup = manifest.app.service(context);
				entry.serviceStatus = "started";
				if (cleanup) cleanups.push(() => {
					try {
						cleanup();
					} catch (error) {
						logger.error("cleanup", error);
					}
				});
			} catch (error) {
				entry.serviceStatus = "failed";
				logger.error("service", error);
			}
		}
		entries.sort((a, b) => (Number.isFinite(b.manifest.order) ? b.manifest.order : 0) - (Number.isFinite(a.manifest.order) ? a.manifest.order : 0));
		return {
			entries,
			stop() {
				for (const cleanup of cleanups.splice(0).reverse()) cleanup();
				for (const entry of entries) entry.serviceStatus = "stopped";
			}
		};
	}
	function canRenderView(entry) {
		const { config, environment } = entry.context;
		return config.enabled && entry.match.matched && entry.serviceStatus !== "stopped" && !!entry.manifest.app?.view && config.match.contexts?.[environment.type]?.isRunView !== false;
	}
	function canOpen(entry) {
		return canRenderView(entry) && !entry.viewFailed && entry.ui.currentLayout !== "none";
	}
	function getPluginStatus(entry) {
		if (entry.serviceStatus === "stopped") return "stopped";
		if (!entry.context.config.enabled) return "disabled";
		if (!entry.match.matched) return "unmatched";
		if (entry.serviceStatus === "failed") return "failed";
		return "active";
	}
	function clone(value) {
		return JSON.parse(JSON.stringify(value));
	}
	function usePluginSettings(getEntries) {
		const draft = (0, vue.ref)({ plugins: {} });
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
			}, ...availableWindowLayouts(entry.manifest).map((value) => ({
				value,
				label: value[0].toUpperCase() + value.slice(1)
			}))];
		}
		function stateString() {
			return JSON.stringify(draft.value);
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
			const saved = settingsSnapshot();
			const next = {
				plugins: {},
				host: {
					...HOST_DEFAULTS,
					...saved.host
				}
			};
			for (const entry of getEntries()) {
				const id = entry.manifest.id;
				const effective = getPluginConfig(entry.manifest);
				const configuredContexts = effective.match.contexts;
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
				next.plugins[id] = {
					enabled: effective.enabled,
					ui: clone(effective.ui),
					match: {
						top: toContext("top"),
						iframe: toContext("iframe")
					}
				};
			}
			draft.value = next;
			expanded.value = {};
			showHiddenPlugins.value = false;
			savedSnapshot.value = stateString();
		}
		function setContextRules(id, context, rules) {
			draft.value.plugins[id].match[context].rules = rules;
		}
		function makeMatch(id) {
			const editor = draft.value.plugins[id].match;
			const result = {};
			for (const context of ["top", "iframe"]) {
				const source = editor[context];
				if (!source.enabled) continue;
				result[context] = {
					isRunView: source.rules.isRunView ?? true,
					isRunService: source.rules.isRunService ?? true,
					include: (source.rules.include ?? []).map((item) => item.trim()).filter(Boolean),
					exclude: (source.rules.exclude ?? []).map((item) => item.trim()).filter(Boolean)
				};
			}
			return { contexts: result };
		}
		function runtimeSettingsKey(enabled, match, ui) {
			const selected = match.contexts;
			return JSON.stringify({
				enabled: enabled !== false,
				ui,
				contexts: contexts.map((context) => {
					const rules = selected?.[context];
					return rules ? {
						include: (rules.include ?? []).map((item) => item.trim()).filter(Boolean),
						exclude: (rules.exclude ?? []).map((item) => item.trim()).filter(Boolean),
						isRunView: rules.isRunView !== false,
						isRunService: rules.isRunService !== false
					} : null;
				})
			});
		}
		function configChange(entry) {
			const id = entry.manifest.id;
			const saved = pluginConfig(entry);
			const savedKey = runtimeSettingsKey(saved.enabled, saved.match, saved.ui);
			if (runtimeSettingsKey(draft.value.plugins[id]?.enabled, makeMatch(id), draftUi(entry)) !== savedKey) return "draft";
			return savedKey !== runtimeSettingsKey(entry.context.config.enabled, entry.context.config.match, entry.context.config.ui) ? "refresh" : void 0;
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
			next.host = configOverrides(HOST_DEFAULTS, draft.value.host);
			for (const entry of getEntries()) {
				const id = entry.manifest.id;
				const user = draft.value.plugins[id];
				const desiredMatch = makeMatch(id);
				const storedUser = {};
				const defaults = resolvePluginConfig(entry.manifest);
				if (user.enabled !== defaults.enabled) storedUser.enabled = user.enabled;
				const uiOverrides = configOverrides(defaults.ui, user.ui);
				if (uiOverrides) storedUser.ui = uiOverrides;
				const selected = {};
				const defaultContexts = defaults.match.contexts ?? {};
				let changed = false;
				for (const context of contexts) {
					const desired = desiredMatch.contexts?.[context];
					const rules = defaultContexts[context];
					if (!!desired !== !!rules) changed = true;
					if (!desired) continue;
					const difference = configOverrides({
						...emptyRules(),
						isRunView: true,
						isRunService: true,
						...rules
					}, desired);
					selected[context] = difference ?? {};
					if (difference) changed = true;
				}
				if (changed) storedUser.match = { contexts: selected };
				if (Object.keys(storedUser).length) next.plugins[id] = storedUser;
				else delete next.plugins[id];
			}
			const savedState = stateString();
			await saveSettings(next);
			savedSnapshot.value = savedState;
		}
		return {
			draft,
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
			configChange,
			updateUi,
			saveDraft
		};
	}
	var _hoisted_1$3 = { class: "drawer-header" };
	var _hoisted_2$2 = { class: "drawer-title-group" };
	var _hoisted_3$2 = { class: "main-title" };
	var _hoisted_4$2 = {
		key: 0,
		class: "status-badge warning"
	};
	var _hoisted_5$1 = { class: "drawer-actions" };
	var _hoisted_6$1 = ["title"];
	var _hoisted_7$1 = { class: "host-section" };
	var _hoisted_8$1 = { class: "host-section-content" };
	var _hoisted_9 = {
		key: 0,
		class: "host-preferences jx-config-grid"
	};
	var _hoisted_10 = { class: "jx-config-switch" };
	var _hoisted_11 = { class: "jx-config-switch" };
	var _hoisted_12 = { class: "jx-config-switch" };
	var _hoisted_13 = { class: "list-summary-bar" };
	var _hoisted_14 = { class: "count-text" };
	var _hoisted_15 = { class: "plugin-list" };
	var _hoisted_16 = ["onClick"];
	var _hoisted_17 = ["aria-expanded", "aria-label"];
	var _hoisted_18 = { class: "summary-info" };
	var _hoisted_19 = { class: "plugin-name" };
	var _hoisted_20 = { class: "version-tag" };
	var _hoisted_21 = { class: "plugin-desc" };
	var _hoisted_22 = { class: "summary-actions" };
	var _hoisted_23 = { class: "summary-status" };
	var _hoisted_24 = ["aria-label"];
	var _hoisted_25 = { class: "open-plugin-wrap" };
	var _hoisted_26 = [
		"disabled",
		"aria-label",
		"onClick"
	];
	var _hoisted_27 = {
		key: 0,
		class: "plugin-details"
	};
	var _hoisted_28 = { class: "context-row" };
	var _hoisted_29 = { class: "context-left" };
	var _hoisted_30 = { class: "context-hint" };
	var _hoisted_31 = {
		key: 0,
		class: "context-right-status"
	};
	var _hoisted_32 = ["title"];
	var _hoisted_33 = {
		key: 1,
		class: "context-disabled-tip"
	};
	var _hoisted_34 = {
		key: 0,
		class: "context-editor-wrap"
	};
	var _hoisted_35 = { class: "drawer-footer-content" };
	var _hoisted_36 = { class: "status-indicator" };
	var _hoisted_37 = { class: "footer-actions" };
	var ControlCenter_default = _plugin_vue_export_helper_default((0, vue.defineComponent)({
		__name: "ControlCenter",
		props: {
			open: { type: Boolean },
			entries: {},
			pages: {}
		},
		emits: ["update:open", "open-plugin"],
		setup(__props, { emit: __emit }) {
			const props = __props;
			const emit = __emit;
			const { draft, expanded, showHiddenPlugins, contexts, environment, pluginConfig, draftUi, availableLayouts, hasPendingChanges, hiddenPluginCount, resetDraft, setContextRules, rulePreview, configChange, updateUi, saveDraft } = usePluginSettings(() => props.entries);
			const hostUI = resolveActivePluginUI({
				...DEFAULT_PLUGIN_CONFIG.ui,
				...HOST_CONFIG.ui,
				currentLayout: "drawer",
				layout: { drawer: {
					placement: "right",
					defaultCollapsed: true,
					style: {
						width: "520px",
						height: "100vh"
					}
				} }
			});
			const statusLabels = {
				stopped: "已停止",
				disabled: "已停用",
				unmatched: "未匹配",
				failed: "启动失败",
				active: "已生效"
			};
			function viewLabel(entry) {
				if (entry.viewFailed) return "面板异常";
				if (!entry.manifest.app?.view) return "无视图";
				if (entry.ui.currentLayout === "none") return "无";
				if (entry.context.config.match.contexts?.[entry.context.environment.type]?.isRunView === false) return "视图未启用";
				return canOpen(entry) ? "可打开" : "不可打开";
			}
			(0, vue.watch)(() => props.open, (open) => {
				if (open) resetDraft();
			});
			const currentDomain = unsafeWindow.location.hostname;
			function copyDomain() {
				try {
					GM_setClipboard(currentDomain, "text");
					ant_design_vue.message.success("域名已复制");
				} catch {
					ant_design_vue.message.error("复制失败，请手动复制域名");
				}
			}
			function close() {
				if (hasPendingChanges.value && !unsafeWindow.confirm("配置尚未保存，确定关闭并丢弃修改吗？")) return;
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
				await afterSuccessfulSave(save, () => unsafeWindow.location.reload());
			}
			function openPlugin(id) {
				if (!hasPendingChanges.value) emit("open-plugin", id);
				else ant_design_vue.message.info("请先保存或关闭待保存修改，再打开插件。");
			}
			return (_ctx, _cache) => {
				return (0, vue.openBlock)(), (0, vue.createBlock)(Drawer_default, {
					class: "host-drawer",
					ui: (0, vue.unref)(hostUI),
					collapsed: !__props.open,
					"z-index": (0, vue.unref)(UI_LAYERS).host,
					"onUpdate:collapsed": close
				}, {
					title: (0, vue.withCtx)(() => [(0, vue.createElementVNode)("div", _hoisted_1$3, [(0, vue.createElementVNode)("div", _hoisted_2$2, [
						(0, vue.createVNode)(PluginIcon_default, { config: { icon: (0, vue.unref)(HOST_CONFIG).ui?.icon } }, null, 8, ["config"]),
						(0, vue.createElementVNode)("span", _hoisted_3$2, (0, vue.toDisplayString)((0, vue.unref)(HOST_CONFIG).ui?.title || (0, vue.unref)(HOST_CONFIG).name), 1),
						(0, vue.createVNode)(UpdateManager_default, { modules: __props.entries.map(({ manifest }) => ({
							id: manifest.id,
							name: manifest.name,
							version: manifest.version || "0.0.0"
						})) }, null, 8, ["modules"]),
						(0, vue.unref)(hasPendingChanges) ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("span", _hoisted_4$2, "待保存")) : (0, vue.createCommentVNode)("", true)
					]), (0, vue.createElementVNode)("div", _hoisted_5$1, [(0, vue.createElementVNode)("button", {
						class: "domain-button",
						title: `复制域名 ${(0, vue.unref)(currentDomain)}`,
						onClick: copyDomain
					}, (0, vue.toDisplayString)((0, vue.unref)(currentDomain)), 9, _hoisted_6$1), (0, vue.createElementVNode)("button", {
						class: "jx-window-close host-close",
						"aria-label": "关闭控制中心",
						onClick: close
					}, [..._cache[5] || (_cache[5] = [(0, vue.createElementVNode)("svg", {
						viewBox: "0 0 24 24",
						width: "16",
						height: "16",
						stroke: "currentColor",
						"stroke-width": "2",
						fill: "none"
					}, [(0, vue.createElementVNode)("path", { d: "M18 6L6 18M6 6l12 12" })], -1)])])])])]),
					footer: (0, vue.withCtx)(() => [(0, vue.createElementVNode)("div", _hoisted_35, [(0, vue.createElementVNode)("div", _hoisted_36, [(0, vue.createElementVNode)("span", { class: (0, vue.normalizeClass)(["dot", (0, vue.unref)(hasPendingChanges) ? "dot-warning" : "dot-success"]) }, null, 2), (0, vue.createElementVNode)("span", { class: (0, vue.normalizeClass)({ "pending-text": (0, vue.unref)(hasPendingChanges) }) }, (0, vue.toDisplayString)((0, vue.unref)(hasPendingChanges) ? "存在未保存更改" : "修改保存后刷新生效"), 3)]), (0, vue.createElementVNode)("div", _hoisted_37, [(0, vue.createVNode)((0, vue.unref)(ant_design_vue.Button), {
						disabled: !(0, vue.unref)(hasPendingChanges),
						class: "btn-action",
						size: "small",
						onClick: save
					}, {
						default: (0, vue.withCtx)(() => [..._cache[16] || (_cache[16] = [(0, vue.createTextVNode)("仅保存", -1)])]),
						_: 1
					}, 8, ["disabled"]), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Button), {
						type: "primary",
						disabled: !(0, vue.unref)(hasPendingChanges),
						class: "btn-action",
						size: "small",
						onClick: saveAndRefresh
					}, {
						default: (0, vue.withCtx)(() => [..._cache[17] || (_cache[17] = [(0, vue.createTextVNode)("保存并刷新", -1)])]),
						_: 1
					}, 8, ["disabled"])])])]),
					default: (0, vue.withCtx)(() => [
						_cache[18] || (_cache[18] = (0, vue.createElementVNode)("div", { class: "list-summary-bar" }, [(0, vue.createElementVNode)("span", { class: "count-text" }, "控制中心")], -1)),
						(0, vue.createElementVNode)("details", _hoisted_7$1, [_cache[10] || (_cache[10] = (0, vue.createElementVNode)("summary", { class: "host-section-title" }, [(0, vue.createElementVNode)("span", { class: "host-expand-icon" }, [(0, vue.createElementVNode)("svg", {
							viewBox: "0 0 24 24",
							width: "14",
							height: "14",
							fill: "currentColor"
						}, [(0, vue.createElementVNode)("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })])]), (0, vue.createElementVNode)("span", null, "配置与运行状态")], -1)), (0, vue.createElementVNode)("div", _hoisted_8$1, [(0, vue.createVNode)(RuntimeSnapshot_default, { pages: __props.pages }, null, 8, ["pages"]), (0, vue.unref)(draft).host ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_9, [
							_cache[9] || (_cache[9] = (0, vue.createElementVNode)("div", { class: "preferences-title jx-config-title" }, "配置", -1)),
							(0, vue.createElementVNode)("div", _hoisted_10, [_cache[6] || (_cache[6] = (0, vue.createElementVNode)("span", null, "允许插件在 iframe 运行", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Switch), {
								"aria-label": "允许插件在 iframe 运行",
								checked: (0, vue.unref)(draft).host.allowIframe,
								"onUpdate:checked": _cache[0] || (_cache[0] = ($event) => (0, vue.unref)(draft).host.allowIframe = $event),
								size: "small"
							}, null, 8, ["checked"])]),
							(0, vue.createElementVNode)("div", _hoisted_11, [_cache[7] || (_cache[7] = (0, vue.createElementVNode)("span", null, "在 iframe 显示控制中心", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Switch), {
								"aria-label": "在 iframe 显示控制中心",
								checked: (0, vue.unref)(draft).host.showIframeUI,
								"onUpdate:checked": _cache[1] || (_cache[1] = ($event) => (0, vue.unref)(draft).host.showIframeUI = $event),
								size: "small"
							}, null, 8, ["checked"])]),
							(0, vue.createElementVNode)("div", _hoisted_12, [_cache[8] || (_cache[8] = (0, vue.createElementVNode)("span", null, "显示悬浮球", -1)), (0, vue.createVNode)((0, vue.unref)(ant_design_vue.Switch), {
								"aria-label": "显示悬浮球",
								checked: (0, vue.unref)(draft).host.showFloatingBall,
								"onUpdate:checked": _cache[2] || (_cache[2] = ($event) => (0, vue.unref)(draft).host.showFloatingBall = $event),
								size: "small"
							}, null, 8, ["checked"])])
						])) : (0, vue.createCommentVNode)("", true)])]),
						(0, vue.createElementVNode)("div", _hoisted_13, [(0, vue.createElementVNode)("span", _hoisted_14, [_cache[11] || (_cache[11] = (0, vue.createTextVNode)("插件 ", -1)), (0, vue.createElementVNode)("small", null, (0, vue.toDisplayString)(__props.entries.length), 1)]), (0, vue.unref)(hiddenPluginCount) ? ((0, vue.openBlock)(), (0, vue.createBlock)((0, vue.unref)(ant_design_vue.Button), {
							key: 0,
							type: "link",
							size: "small",
							class: "toggle-hidden-btn",
							onClick: _cache[3] || (_cache[3] = ($event) => showHiddenPlugins.value = !(0, vue.unref)(showHiddenPlugins))
						}, {
							default: (0, vue.withCtx)(() => [(0, vue.createTextVNode)((0, vue.toDisplayString)((0, vue.unref)(showHiddenPlugins) ? "隐藏" : "显示") + "已隐藏插件（" + (0, vue.toDisplayString)((0, vue.unref)(hiddenPluginCount)) + "） ", 1)]),
							_: 1
						})) : (0, vue.createCommentVNode)("", true)]),
						(0, vue.createElementVNode)("div", _hoisted_15, [((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(__props.entries, (entry) => {
							return (0, vue.withDirectives)(((0, vue.openBlock)(), (0, vue.createElementBlock)("section", {
								key: entry.manifest.id,
								class: (0, vue.normalizeClass)(["plugin-card", {
									"is-expanded": (0, vue.unref)(expanded)[entry.manifest.id],
									"is-disabled": !(0, vue.unref)(draft).plugins[entry.manifest.id]?.enabled
								}])
							}, [(0, vue.unref)(draft).plugins[entry.manifest.id] ? ((0, vue.openBlock)(), (0, vue.createElementBlock)(vue.Fragment, { key: 0 }, [(0, vue.createElementVNode)("div", {
								class: "plugin-summary",
								onClick: ($event) => (0, vue.unref)(expanded)[entry.manifest.id] = !(0, vue.unref)(expanded)[entry.manifest.id]
							}, [
								(0, vue.createElementVNode)("button", {
									class: (0, vue.normalizeClass)(["expand-icon-btn", { "expanded": (0, vue.unref)(expanded)[entry.manifest.id] }]),
									"aria-expanded": Boolean((0, vue.unref)(expanded)[entry.manifest.id]),
									"aria-label": (0, vue.unref)(expanded)[entry.manifest.id] ? "折叠插件配置" : "展开插件配置"
								}, [..._cache[12] || (_cache[12] = [(0, vue.createElementVNode)("svg", {
									viewBox: "0 0 24 24",
									width: "14",
									height: "14",
									fill: "currentColor"
								}, [(0, vue.createElementVNode)("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })], -1)])], 10, _hoisted_17),
								(0, vue.createVNode)(PluginIcon_default, {
									class: "plugin-icon",
									config: {
										icon: (0, vue.unref)(draft).plugins[entry.manifest.id].ui?.icon || (0, vue.unref)(pluginConfig)(entry).ui.icon,
										title: (0, vue.unref)(draft).plugins[entry.manifest.id].ui?.title || (0, vue.unref)(pluginConfig)(entry).ui.title
									}
								}, null, 8, ["config"]),
								(0, vue.createElementVNode)("div", _hoisted_18, [
									(0, vue.createElementVNode)("span", _hoisted_19, (0, vue.toDisplayString)((0, vue.unref)(draft).plugins[entry.manifest.id].ui?.title || (0, vue.unref)(pluginConfig)(entry).ui.title), 1),
									(0, vue.createElementVNode)("span", _hoisted_20, (0, vue.toDisplayString)(entry.manifest.version || "1.0.0"), 1),
									(0, vue.createElementVNode)("p", _hoisted_21, (0, vue.toDisplayString)(entry.manifest.description || "暂无描述"), 1)
								]),
								(0, vue.createElementVNode)("div", _hoisted_22, [(0, vue.createElementVNode)("div", _hoisted_23, [(0, vue.createVNode)((0, vue.unref)(ant_design_vue.Tag), {
									color: (0, vue.unref)(getPluginStatus)(entry) === "failed" ? "error" : (0, vue.unref)(getPluginStatus)(entry) === "active" ? "success" : "default",
									bordered: false,
									class: "runtime-tag",
									title: entry.match.reason.join("；")
								}, {
									default: (0, vue.withCtx)(() => [(0, vue.createTextVNode)((0, vue.toDisplayString)(statusLabels[(0, vue.unref)(getPluginStatus)(entry)]), 1)]),
									_: 2
								}, 1032, ["color", "title"]), (0, vue.unref)(configChange)(entry) ? ((0, vue.openBlock)(), (0, vue.createBlock)((0, vue.unref)(ant_design_vue.Tooltip), {
									key: 0,
									title: (0, vue.unref)(configChange)(entry) === "draft" ? "待保存" : "刷新后生效",
									"get-popup-container": (0, vue.unref)(getPopupContainer)
								}, {
									default: (0, vue.withCtx)(() => [(0, vue.createElementVNode)("span", {
										class: "config-change",
										role: "img",
										"aria-label": (0, vue.unref)(configChange)(entry) === "draft" ? "待保存" : "刷新后生效",
										tabindex: "0"
									}, null, 8, _hoisted_24)]),
									_: 2
								}, 1032, ["title", "get-popup-container"])) : (0, vue.createCommentVNode)("", true)]), (0, vue.createElementVNode)("div", {
									class: "action-toolbar",
									onClick: _cache[4] || (_cache[4] = (0, vue.withModifiers)(() => {}, ["stop"]))
								}, [
									(0, vue.createVNode)((0, vue.unref)(ant_design_vue.Tooltip), {
										title: (0, vue.unref)(canOpen)(entry) ? "打开插件面板" : viewLabel(entry),
										"get-popup-container": (0, vue.unref)(getPopupContainer)
									}, {
										default: (0, vue.withCtx)(() => [(0, vue.createElementVNode)("span", _hoisted_25, [(0, vue.createElementVNode)("button", {
											type: "button",
											class: "open-plugin-btn",
											disabled: !(0, vue.unref)(canOpen)(entry),
											"aria-label": (0, vue.unref)(canOpen)(entry) ? "打开插件面板" : viewLabel(entry),
											onClick: (0, vue.withModifiers)(($event) => openPlugin(entry.manifest.id), ["stop"])
										}, [..._cache[13] || (_cache[13] = [(0, vue.createElementVNode)("svg", {
											viewBox: "0 0 24 24",
											width: "15",
											height: "15",
											fill: "none",
											stroke: "currentColor",
											"stroke-width": "1.7",
											"stroke-linecap": "round",
											"stroke-linejoin": "round"
										}, [(0, vue.createElementVNode)("rect", {
											x: "3",
											y: "4",
											width: "18",
											height: "16",
											rx: "2"
										}), (0, vue.createElementVNode)("path", { d: "M9 4v16M14 12h4m-2-2 2 2-2 2" })], -1)])], 8, _hoisted_26)])]),
										_: 2
									}, 1032, ["title", "get-popup-container"]),
									_cache[14] || (_cache[14] = (0, vue.createElementVNode)("span", { class: "action-divider" }, null, -1)),
									(0, vue.createVNode)((0, vue.unref)(ant_design_vue.Switch), {
										"aria-label": `启用 ${entry.manifest.name}`,
										checked: (0, vue.unref)(draft).plugins[entry.manifest.id].enabled,
										"onUpdate:checked": ($event) => (0, vue.unref)(draft).plugins[entry.manifest.id].enabled = $event,
										size: "small"
									}, null, 8, [
										"aria-label",
										"checked",
										"onUpdate:checked"
									])
								])])
							], 8, _hoisted_16), (0, vue.unref)(expanded)[entry.manifest.id] ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_27, [
								(0, vue.createVNode)(RuntimeSnapshot_default, {
									pages: __props.pages,
									"plugin-id": entry.manifest.id
								}, null, 8, ["pages", "plugin-id"]),
								_cache[15] || (_cache[15] = (0, vue.createElementVNode)("div", { class: "section-divider jx-config-title" }, "运行环境配置", -1)),
								((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)((0, vue.unref)(contexts), (context) => {
									return (0, vue.openBlock)(), (0, vue.createElementBlock)("section", {
										key: context,
										class: "match-context-card jx-config-panel"
									}, [(0, vue.createElementVNode)("div", _hoisted_28, [(0, vue.createElementVNode)("div", _hoisted_29, [
										(0, vue.createElementVNode)("strong", null, (0, vue.toDisplayString)(context === "top" ? "top window" : "iframe"), 1),
										(0, vue.createVNode)((0, vue.unref)(ant_design_vue.Switch), {
											"aria-label": `启用 ${context === "top" ? "top window" : "iframe"} 规则`,
											checked: (0, vue.unref)(draft).plugins[entry.manifest.id].match[context].enabled,
											"onUpdate:checked": ($event) => (0, vue.unref)(draft).plugins[entry.manifest.id].match[context].enabled = $event,
											size: "small"
										}, null, 8, [
											"aria-label",
											"checked",
											"onUpdate:checked"
										]),
										(0, vue.createElementVNode)("span", _hoisted_30, (0, vue.toDisplayString)((0, vue.unref)(environment).type === context ? "当前环境" : ""), 1)
									]), (0, vue.unref)(draft).plugins[entry.manifest.id].match[context].enabled ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_31, [(0, vue.createElementVNode)("span", { class: (0, vue.normalizeClass)(["dot", (0, vue.unref)(rulePreview)(entry.manifest.id, context).matched ? "dot-success" : "dot-error"]) }, null, 2), (0, vue.createElementVNode)("span", {
										class: "reason-text",
										title: (0, vue.unref)(rulePreview)(entry.manifest.id, context).reason.join("；")
									}, (0, vue.toDisplayString)((0, vue.unref)(rulePreview)(entry.manifest.id, context).matched ? "已匹配" : (0, vue.unref)(rulePreview)(entry.manifest.id, context).reason.join("；") || "未通过"), 9, _hoisted_32)])) : ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_33, "规则已禁用"))]), (0, vue.unref)(draft).plugins[entry.manifest.id].match[context].enabled ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("div", _hoisted_34, [(0, vue.createVNode)(MatchContextEditor_default, {
										rules: (0, vue.unref)(draft).plugins[entry.manifest.id].match[context].rules,
										"onUpdate:rules": ($event) => (0, vue.unref)(setContextRules)(entry.manifest.id, context, $event)
									}, null, 8, ["rules", "onUpdate:rules"])])) : (0, vue.createCommentVNode)("", true)]);
								}), 128)),
								(0, vue.createVNode)(PluginAppearanceEditor_default, {
									ui: (0, vue.unref)(draftUi)(entry),
									"available-layouts": (0, vue.unref)(availableLayouts)(entry),
									onUpdate: ($event) => (0, vue.unref)(updateUi)(entry.manifest.id, $event.path, $event.value)
								}, null, 8, [
									"ui",
									"available-layouts",
									"onUpdate"
								])
							])) : (0, vue.createCommentVNode)("", true)], 64)) : (0, vue.createCommentVNode)("", true)], 2)), [[vue.vShow, (0, vue.unref)(showHiddenPlugins) || ((0, vue.unref)(draft).plugins[entry.manifest.id]?.ui?.showInHost ?? (0, vue.unref)(pluginConfig)(entry).ui.showInHost) !== false]]);
						}), 128))])
					]),
					_: 1
				}, 8, [
					"ui",
					"collapsed",
					"z-index"
				]);
			};
		}
	}), [["__scopeId", "data-v-513ce6d7"]]);
	var _hoisted_1$2 = { class: "jx-fab-backdrop" };
	var _hoisted_2$1 = { class: "jx-fab-content" };
	var _hoisted_3$1 = [
		"disabled",
		"aria-label",
		"onClick"
	];
	var _hoisted_4$1 = { class: "jx-recall-icon" };
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
					left: 0,
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
					default: (0, vue.withCtx)(() => [(0, vue.createElementVNode)("div", _hoisted_1$2, [(0, vue.createElementVNode)("div", _hoisted_2$1, [(0, vue.createVNode)(PluginIcon_default, { config: {
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
						}, [(0, vue.createElementVNode)("span", _hoisted_4$1, [(0, vue.createVNode)(PluginIcon_default, { config: {
							icon: plugin.icon,
							title: plugin.name
						} }, null, 8, ["config"])])], 8, _hoisted_3$1)]),
						_: 2
					}, 1032, ["title", "placement"]);
				}), 128))], 4)) : (0, vue.createCommentVNode)("", true)], 64);
			};
		}
	}), [["__scopeId", "data-v-197fdc16"]]);
	var PluginView_default = (0, vue.defineComponent)({
		__name: "PluginView",
		props: { entry: {} },
		setup(__props) {
			const props = __props;
			(0, vue.provide)(pluginContextKey, props.entry.context);
			(0, vue.onMounted)(() => {
				props.entry.viewMounted = true;
			});
			(0, vue.onUnmounted)(() => {
				props.entry.viewMounted = false;
			});
			(0, vue.onErrorCaptured)((error) => {
				props.entry.context.logger.error("view", error);
				props.entry.viewFailed = true;
				return false;
			});
			return (_ctx, _cache) => {
				return (0, vue.openBlock)(), (0, vue.createBlock)((0, vue.resolveDynamicComponent)(__props.entry.manifest.app?.view));
			};
		}
	});
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
	var _hoisted_1$1 = ["aria-label"];
	var _hoisted_2 = { class: "jx-window-actions" };
	var _hoisted_3 = ["aria-label"];
	var _hoisted_4 = {
		width: "16",
		height: "16",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": "1.8",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"aria-hidden": "true"
	};
	var _hoisted_5 = ["d"];
	var _hoisted_6 = ["aria-label"];
	var _hoisted_7 = { class: "jx-window-body" };
	var _hoisted_8 = {
		key: 0,
		class: "jx-window-footer"
	};
	var Dialog_default = (0, vue.defineComponent)({
		__name: "Dialog",
		props: {
			pluginId: {},
			ui: {},
			collapsed: { type: Boolean },
			active: { type: Boolean }
		},
		emits: ["update:collapsed", "activate"],
		setup(__props, { emit: __emit }) {
			const props = __props;
			const emit = __emit;
			const saved = props.ui.rememberPosition ? getWindowState(props.pluginId) : {};
			const position = (0, vue.ref)(saved.position ?? {
				left: Math.max(16, (window.innerWidth - props.ui.pixelWidth) / 2),
				top: 80
			});
			const fullscreen = (0, vue.ref)(false);
			const visited = (0, vue.ref)(false);
			const panel = (0, vue.ref)();
			(0, vue.watchEffect)(() => {
				if (!props.collapsed) visited.value = true;
			});
			const drag = usePointerDrag({
				enabled: () => props.ui.draggable && !fullscreen.value,
				origin: (event) => {
					if (event.target.closest("button, input, textarea, select, [data-no-drag]")) return;
					const rect = event.currentTarget.closest(".jx-tool-window")?.getBoundingClientRect() ?? event.currentTarget.getBoundingClientRect();
					return {
						left: rect.left,
						top: rect.top
					};
				},
				bounds: () => ({
					width: panel.value?.offsetWidth ?? props.ui.pixelWidth,
					height: panel.value?.offsetHeight ?? 480
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
			return (_ctx, _cache) => {
				return visited.value ? (0, vue.withDirectives)(((0, vue.openBlock)(), (0, vue.createElementBlock)("section", {
					key: 0,
					ref_key: "panel",
					ref: panel,
					class: "jx-tool-window jx-dialog",
					role: "dialog",
					"aria-label": __props.ui.title,
					onPointerdown: _cache[6] || (_cache[6] = ($event) => emit("activate")),
					style: (0, vue.normalizeStyle)({
						...__props.ui.style,
						...fullscreen.value ? {
							inset: 0,
							width: "100vw",
							height: "100vh",
							maxWidth: "100vw",
							maxHeight: "100vh"
						} : {},
						left: fullscreen.value ? "0" : position.value.left + "px",
						top: fullscreen.value ? "0" : position.value.top + "px",
						zIndex: __props.active ? (0, vue.unref)(UI_LAYERS).activePlugin : (0, vue.unref)(UI_LAYERS).plugin
					})
				}, [
					(0, vue.createElementVNode)("header", {
						class: (0, vue.normalizeClass)(["jx-window-header", { draggable: __props.ui.draggable }]),
						onPointerdown: _cache[2] || (_cache[2] = (...args) => (0, vue.unref)(drag).pointerdown && (0, vue.unref)(drag).pointerdown(...args)),
						onPointermove: _cache[3] || (_cache[3] = (...args) => (0, vue.unref)(drag).pointermove && (0, vue.unref)(drag).pointermove(...args)),
						onPointerup: _cache[4] || (_cache[4] = (...args) => (0, vue.unref)(drag).pointerup && (0, vue.unref)(drag).pointerup(...args)),
						onPointercancel: _cache[5] || (_cache[5] = (...args) => (0, vue.unref)(drag).pointercancel && (0, vue.unref)(drag).pointercancel(...args))
					}, [
						(0, vue.createVNode)(PluginIcon_default, { config: __props.ui }, null, 8, ["config"]),
						(0, vue.createElementVNode)("strong", null, (0, vue.toDisplayString)(__props.ui.title), 1),
						(0, vue.renderSlot)(_ctx.$slots, "header"),
						(0, vue.renderSlot)(_ctx.$slots, "extra"),
						(0, vue.createElementVNode)("div", _hoisted_2, [(0, vue.createElementVNode)("button", {
							type: "button",
							class: "jx-window-fullscreen",
							"aria-label": fullscreen.value ? "退出全屏" : "全屏",
							onClick: _cache[0] || (_cache[0] = ($event) => fullscreen.value = !fullscreen.value)
						}, [((0, vue.openBlock)(), (0, vue.createElementBlock)("svg", _hoisted_4, [(0, vue.createElementVNode)("path", { d: fullscreen.value ? "M9 3v6H3m12-6v6h6M9 21v-6H3m12 6v-6h6" : "M3 9V3h6m6 0h6v6M3 15v6h6m6 0h6v-6" }, null, 8, _hoisted_5)]))], 8, _hoisted_3), (0, vue.createElementVNode)("button", {
							type: "button",
							class: "jx-window-close",
							"aria-label": "收起" + __props.ui.title,
							onClick: _cache[1] || (_cache[1] = ($event) => emit("update:collapsed", true))
						}, [..._cache[7] || (_cache[7] = [(0, vue.createElementVNode)("svg", {
							width: "16",
							height: "16",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							"stroke-linecap": "round",
							"aria-hidden": "true"
						}, [(0, vue.createElementVNode)("path", { d: "M18 6 6 18M6 6l12 12" })], -1)])], 8, _hoisted_6)])
					], 34),
					(0, vue.createElementVNode)("div", _hoisted_7, [(0, vue.renderSlot)(_ctx.$slots, "default")]),
					_ctx.$slots.footer ? ((0, vue.openBlock)(), (0, vue.createElementBlock)("footer", _hoisted_8, [(0, vue.renderSlot)(_ctx.$slots, "footer")])) : (0, vue.createCommentVNode)("", true)
				], 44, _hoisted_1$1)), [[vue.vShow, !__props.collapsed]]) : (0, vue.createCommentVNode)("", true);
			};
		}
	});
	var _hoisted_1 = { class: "jx-assistant-root" };
	var App_default = (0, vue.defineComponent)({
		__name: "App",
		props: {
			entries: {},
			isTop: { type: Boolean },
			snapshots: {},
			showFloatingBall: { type: Boolean },
			showUI: { type: Boolean }
		},
		setup(__props) {
			const props = __props;
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
			const hostOpen = (0, vue.ref)(false);
			(0, vue.watch)(hostOpen, (open) => props.snapshots.setVisible(open));
			const collapsed = (0, vue.ref)({});
			const activePluginId = (0, vue.ref)("");
			for (const entry of props.entries.filter(canOpen)) {
				const saved = entry.ui.rememberPosition ? getWindowState(entry.manifest.id) : {};
				collapsed.value[entry.manifest.id] = saved.collapsed ?? entry.ui.defaultCollapsed;
			}
			function setCollapsed(entry, value) {
				collapsed.value[entry.manifest.id] = value;
				if (entry.ui.rememberPosition) setWindowState(entry.manifest.id, { collapsed: value });
			}
			function togglePlugin(id) {
				const entry = props.entries.find((item) => item.manifest.id === id);
				if (entry && canOpen(entry)) {
					if (!collapsed.value[id]) {
						setCollapsed(entry, true);
						return;
					}
					openPlugin(id);
				}
			}
			function openPlugin(id) {
				const entry = props.entries.find((item) => item.manifest.id === id);
				if (entry && canOpen(entry)) {
					activePluginId.value = id;
					setCollapsed(entry, false);
				}
			}
			if (props.isTop) {
				const menu = GM_registerMenuCommand("打开插件配置中心", () => {
					hostOpen.value = true;
				});
				(0, vue.onUnmounted)(() => GM_unregisterMenuCommand(menu));
			}
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
							__props.showUI && __props.showFloatingBall && !hostOpen.value ? ((0, vue.openBlock)(), (0, vue.createBlock)(FloatingBall_default, {
								key: 0,
								onClick: _cache[0] || (_cache[0] = ($event) => hostOpen.value = true),
								"host-config": (0, vue.unref)(HOST_CONFIG),
								plugins: __props.entries.filter((entry) => entry.context.config.ui.showInHost).map((entry) => ({
									id: entry.manifest.id,
									name: entry.ui.title || entry.manifest.name,
									icon: entry.ui.icon,
									disabled: !(0, vue.unref)(canOpen)(entry)
								})),
								onActivatePlugin: togglePlugin
							}, null, 8, ["host-config", "plugins"])) : (0, vue.createCommentVNode)("", true),
							__props.showUI ? ((0, vue.openBlock)(), (0, vue.createBlock)(ControlCenter_default, {
								key: 1,
								open: hostOpen.value,
								"onUpdate:open": _cache[1] || (_cache[1] = ($event) => hostOpen.value = $event),
								entries: __props.entries,
								pages: __props.snapshots.pages.value,
								onOpenPlugin: openPlugin
							}, null, 8, [
								"open",
								"entries",
								"pages"
							])) : (0, vue.createCommentVNode)("", true),
							((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(__props.entries.filter((item) => item.ui.currentLayout === "none" && (0, vue.unref)(canRenderView)(item)), (entry) => {
								return (0, vue.openBlock)(), (0, vue.createBlock)(PluginView_default, {
									key: entry.manifest.id,
									entry
								}, null, 8, ["entry"]);
							}), 128)),
							((0, vue.openBlock)(true), (0, vue.createElementBlock)(vue.Fragment, null, (0, vue.renderList)(__props.entries.filter((item) => __props.showUI && (0, vue.unref)(canOpen)(item)), (entry) => {
								return (0, vue.openBlock)(), (0, vue.createBlock)((0, vue.resolveDynamicComponent)(entry.ui.currentLayout === "drawer" ? Drawer_default : Dialog_default), {
									key: entry.manifest.id,
									"plugin-id": entry.manifest.id,
									ui: entry.ui,
									collapsed: collapsed.value[entry.manifest.id],
									active: activePluginId.value === entry.manifest.id,
									onActivate: ($event) => activePluginId.value = entry.manifest.id,
									"onUpdate:collapsed": ($event) => setCollapsed(entry, $event)
								}, {
									default: (0, vue.withCtx)(() => [(0, vue.createVNode)(PluginView_default, { entry }, null, 8, ["entry"])]),
									_: 2
								}, 1064, [
									"plugin-id",
									"ui",
									"collapsed",
									"active",
									"onActivate",
									"onUpdate:collapsed"
								]);
							}), 128))
						])]),
						_: 1
					}, 8, ["get-popup-container"])]),
					_: 1
				}, 8, ["container"]);
			};
		}
	});
	async function bootstrap() {
		const environment = getEnvironment();
		const isTop = environment.type === "top";
		await initializeSettings(isTop);
		const preferences = getHostPreferences();
		const hostMatch = evaluateMatch(HOST_CONFIG.match, environment);
		const allowed = isTop || preferences.allowIframe;
		if (!allowed || !hostMatch.matched) {
			const snapshots = startSnapshots(environment, hostMatch, allowed, []);
			window.addEventListener("pagehide", function leave(event) {
				if (event.persisted) return;
				snapshots.stop();
				window.removeEventListener("pagehide", leave);
			});
			return;
		}
		const runtime = startPlugins(Object.values(Object.assign({
			"./plugins/example/config.ts": config_default$4,
			"./plugins/example2/config.ts": config_default$3,
			"./plugins/jxConsentInspector/config.ts": config_default$2,
			"./plugins/jxGA4Monitor/config.ts": config_default$1,
			"./plugins/jxNavBlocker/config.ts": config_default
		})), environment, getPagePluginConfig);
		const snapshots = startSnapshots(environment, hostMatch, allowed, runtime.entries);
		function stopRuntime() {
			snapshots.stop();
			runtime.stop();
		}
		let shutdown = stopRuntime;
		function leave(event) {
			if (!event.persisted) {
				window.removeEventListener("pagehide", leave);
				shutdown();
			}
		}
		window.addEventListener("pagehide", leave);
		const showUI = isTop || preferences.showIframeUI;
		if (showUI || runtime.entries.some((entry) => entry.ui.currentLayout === "none" && canRenderView(entry))) {
			const surface = ensureSurface();
			const app = (0, vue.createApp)(App_default, {
				entries: runtime.entries,
				isTop,
				snapshots,
				showFloatingBall: preferences.showFloatingBall,
				showUI
			});
			app.onUnmount(() => {
				window.removeEventListener("pagehide", leave);
				stopRuntime();
				surface.dispose();
			});
			app.mount(surface.appRoot);
			shutdown = () => app.unmount();
		}
	}
	bootstrap().catch((error) => console.error("[JX Work Assistant] bootstrap", error));
})(Vue, antd);
