import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'unist-util-visit';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'lodash-es';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><table class="table table-bordered"><thead><tr class="table-primary text-center"><th scope="col">\u65E5\u4ED8</th><th scope="col">\u4ED5\u8A33\u756A\u53F7</th><th scope="col">\u88DC\u52A9\u79D1\u76EE</th><th scope="col">\u76F8\u624B\u79D1\u76EE</th><th scope="col">\u6458\u8981</th><th scope="col">\u501F\u65B9</th><th scope="col">\u8CB8\u65B9</th><th scope="col">\u6B8B\u9AD8</th></tr></thead><tbody><tr><th scope="row" colspan="7">\u7E70\u8D8A\u91D1\u984D</th><td class="text-end">0</td></tr><tr><td>2023/04/01</td><th>000001</th><td></td><td>\u8CC7\u672C\u91D1</td><td></td><td class="text-end">1,000,000</td><td></td><td class="text-end">1,000,000</td></tr><tr><td>2023/04/15</td><th>000002</th><td></td><td>\u5546\u54C1</td><td></td><td></td><td class="text-end">1,000</td><td class="text-end">999,000</td></tr><tr><td>2023/04/20</td><th>000003</th><td></td><td>\u8AF8\u53E3</td><td></td><td class="text-end">1,500</td><td></td><td class="text-end">1,000,500</td></tr><tr class="table-info"><th scope="row" colspan="5">4\u6708\u5EA6\u5408\u8A08</th><td class="text-end">1,001,500</td><td class="text-end">1,000</td><td></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/demo/accountledger.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const accountledger = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { accountledger as default };
//# sourceMappingURL=accountledger-10c51565.mjs.map
