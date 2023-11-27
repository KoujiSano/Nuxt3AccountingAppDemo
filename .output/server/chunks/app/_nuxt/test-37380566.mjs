import { _ as __nuxt_component_0 } from './button-828e61fb.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import './useBlock-d3cb816a.mjs';
import '../../floating-ui.vue.esm.mjs';
import 'lodash-es';
import '@floating-ui/dom';
import './usePopover-5c9bdc28.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_b_button = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><h1>\u901A\u5E33\u5165\u529B</h1><table class="table"><tbody><tr><th>\u5E74\u5EA6</th><td><select class="form-select" aria-label="\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002"><option value="1">2020</option></select></td></tr><tr><th>\u533A\u5206</th><td><select class="form-select" aria-label="\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002"><option value="1">\u6708\u6B21</option></select></td></tr><tr><th>\u4F1A\u8A08\u5358\u4F4D</th><td><select class="form-select" aria-label="\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002"><option value="1">\u672C\u793E</option></select></td></tr><tr><th>\u6D88\u8CBB\u7A0E</th><td><p>\u7C21\u6613\u8AB2\u7A0E / \u7A0E\u8FBC\u51E6\u7406</p></td></tr><tr><th>\u5BFE\u8C61\u671F\u9593</th><td><p>2020/9/1 ~ 2020/9/30</p></td></tr></tbody></table><div class="d-flex justify-content-start align-items-center p-3">`);
  _push(ssrRenderComponent(_component_b_button, {
    variant: "outline-primary",
    class: "mr-3",
    size: "sm"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \uFF1C\u524D\u6708 `);
      } else {
        return [
          createTextVNode(" \uFF1C\u524D\u6708 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2>9\u6708</h2>`);
  _push(ssrRenderComponent(_component_b_button, {
    variant: "outline-primary",
    size: "sm"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u7FCC\u6708\uFF1E `);
      } else {
        return [
          createTextVNode(" \u7FCC\u6708\uFF1E ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/demo/passbook/test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const test = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { test as default };
//# sourceMappingURL=test-37380566.mjs.map
