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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "conatiner-sm" }, _attrs))}><table class="table"><thead><tr><th scope="col">#</th><th scope="col">\u304A\u540D\u524D</th><th scope="col">\u6240\u5C5E\u90E8\u9580</th><th scope="col">\u6A29\u9650</th></tr></thead><tbody><tr><th scope="row">\u5909\u66F4</th><td>\u524D\u7530</td><td>\u5927\u7136</td><td>admin</td></tr><tr><th scope="row">2</th><td>Jacob</td><td>Thornton</td><td>@fat</td></tr><tr><th scope="row"></th><td colspan="2"></td><td></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/demo/variousSettings/User.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const User = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { User as default };
//# sourceMappingURL=User-6a729055.mjs.map
