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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div class="card"><div class="card-body"><h1>\u4ED5\u8A33\u691C\u7D22</h1><div class="row"><div class="col-6"><div class="input-group mb-3"><span class="input-group-text">\u4F1A\u8A08\u5358\u4F4D</span><select class="form-select" aria-label="accountingUnit"><option selected>\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044</option><option value="1">\u4F1A\u793EA</option><option value="2">\u4F1A\u793EB</option><option value="3">\u4F1A\u793EC</option></select><span class="input-group-text">\u5BFE\u8C61\u4ED5\u8A33\u756A\u53F7</span><input type="text" class="form-control" aria-label="jurnaNo"></div><div class="input-group mb-3"><span class="input-group-text">\u5BFE\u8C61\u65E5\u4ED8\u7BC4\u56F2</span><input type="date" class="form-control" aria-label="date1"><span class="input-group-text">\uFF5E</span><input type="date" class="form-control" aria-label="date2"></div></div></div><table class="table table-bordered"><thead><tr class="table-primary text-center"><th scope="col">\u65E5\u4ED8</th><th scope="col">\u4ED5\u8A33\u756A\u53F7</th><th scope="col">\u88DC\u52A9\u79D1\u76EE</th><th scope="col">\u76F8\u624B\u79D1\u76EE</th></tr></thead></table></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/demo/journaList_Search/search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const search = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { search as default };
//# sourceMappingURL=search-85f3b034.mjs.map
