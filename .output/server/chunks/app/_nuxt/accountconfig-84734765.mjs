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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><table class="table"><thead><tr class="table-primary text-center"><th scope="col"></th><th scope="col">\u30B3\u30FC\u30C9</th><th scope="col">\u540D\u79F0</th><th scope="col">\u30AB\u30CA</th><th scope="col">\u30ED\u30FC\u30DE\u5B57</th><th scope="col">\u8CB8\u501F</th><th scope="col">\u79D1\u76EE\u7A2E\u985E</th></tr></thead><tbody><tr><th scope="row">\u5909\u66F4</th><td>100</td><td>\u73FE\u91D1</td><td>\u30B2\u30F3\u30AD\u30F3</td><td>genkin</td><td class="text-center">\u8CB8\u501F</td><td class="text-center"></td></tr><tr><th scope="row">\u5909\u66F4</th><td>100</td><td>\u73FE\u91D1</td><td>\u30B2\u30F3\u30AD\u30F3</td><td>genkin</td><td class="text-center">\u8CB8\u501F</td><td class="text-center"></td></tr><tr class="table-info"><th scope="row"></th><td>1399</td><td>\u73FE\u91D1\u30FB\u9810\u91D1\u5408\u8A08</td><td>\u30B2\u30F3\u30AD\u30F3\u30FB\u30E8\u30AD\u30F3\u30B4\u30A6</td><td>genkin/yok</td><td class="text-center">\u8CB8\u501F</td><td class="text-center">\u96C6\u8A08</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/demo/accountconfig.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const accountconfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { accountconfig as default };
//# sourceMappingURL=accountconfig-84734765.mjs.map
