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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div class="card"><div class="card-header"> \u4F1A\u8A08\u671F\u9593 </div><div class="card-body"><form><div class="row mb-3"><label for="inputEmail3" class="col-sm-2 col-form-label">\u671F\u9996\u65E5</label><div class="col-sm-10"><input type="date" class="form-control" id="inputEmail3"></div></div><div class="row mb-3"><label for="inputPassword3" class="col-sm-2 col-form-label">\u6C7A\u7B97\u671F</label><div class="col-sm-10"><input type="password" class="form-control" id="inputPassword3"></div></div><button type="submit" class="btn btn-primary">\u78BA\u8A8D</button></form></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/demo/accountinginfoconfig.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const accountinginfoconfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { accountinginfoconfig as default };
//# sourceMappingURL=accountinginfoconfig-865fc7ab.mjs.map
