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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><h1>\u901A\u5E33</h1><table class="table"><thead><tr><th>\u5E74\u5EA6</th><th>\u533A\u5206</th><th>\u4F1A\u8A08\u5358\u4F4D</th><th>\u6D88\u8CBB\u7A0E</th><th>\u5BFE\u8C61\u671F\u9593</th></tr></thead><tbody><tr><td>\u65E5\u4ED8</td><td>\u6458\u8981</td><td>\u79D1\u76EE</td><td>\u652F\u6255\u3044\u91D1\u984D</td><td>\u9810\u304B\u308A\u91D1\u984D</td><td>\u5DEE\u5F15\u6B8B\u9AD8</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/demo/passbook/passbook.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const passbook = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { passbook as default };
//# sourceMappingURL=passbook-3683970a.mjs.map
