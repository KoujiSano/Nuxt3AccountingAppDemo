import { ssrRenderStyle } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
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
  _push(`<!--[--><div class="container"><div class="d-flex"><div class="p-2 bg-light bg-gradient" style="${ssrRenderStyle({ "width": "6em" })}">\u5E74\u5EA6</div><div class="p-2 flex-fill">2023</div><div class="p-2 bg-light bg-gradient" style="${ssrRenderStyle({ "width": "6em" })}">\u533A\u5206</div><div class="p-2 flex-fill">2023</div></div><div class="d-flex"><div class="d-flex align-content-center flex-wrap border bg-light bg-gradient" style="${ssrRenderStyle({ "width": "2em" })}"><div class="p-2">1</div></div><div class="flex-fill"><div class="d-flex"><div class="p-2 border w-25">\u3000</div><div class="p-2 flex-fill border"></div><div class="p-2 flex-fill border"></div><div class="p-2 flex-fill border"></div></div><div class="d-flex"><div class="p-2 border w-25">\u3000</div><div class="p-2 flex-fill border"></div></div></div><div class="flex-fill"><div class="d-flex"><div class="p-2 border w-25">\u3000</div><div class="p-2 flex-fill border"></div><div class="p-2 flex-fill border"></div><div class="p-2 flex-fill border"></div></div><div class="d-flex"><div class="p-2 border w-25">\u3000</div><div class="p-2 flex-fill border"></div></div></div></div></div><div class="container"><div class="d-flex bg-light bg-gradient"><div class="d-flex align-content-center flex-wrap border" style="${ssrRenderStyle({ "width": "2em" })}"><div class="p-2">\u884C</div></div><div class="flex-fill"><div class="d-flex"><div class="p-2 border w-25">\u79D1\u76EE</div><div class="p-2 flex-fill border">\u88DC\u52A9</div><div class="p-2 flex-fill border">\u540D\u79F0</div><div class="p-2 flex-fill border">\u91D1\u984D</div></div><div class="d-flex"><div class="p-2 border w-25">\u90E8\u9580</div><div class="p-2 flex-fill border">\u6458\u8981</div></div></div><div class="flex-fill"><div class="d-flex"><div class="p-2 border w-25">\u79D1\u76EE</div><div class="p-2 flex-fill border">\u88DC\u52A9</div><div class="p-2 flex-fill border">\u540D\u79F0</div><div class="p-2 flex-fill border">\u91D1\u984D</div></div><div class="d-flex"><div class="p-2 border w-25">\u90E8\u9580</div><div class="p-2 flex-fill border">\u6458\u8981</div></div></div></div><div class="d-flex"><div class="d-flex align-content-center flex-wrap border bg-light bg-gradient" style="${ssrRenderStyle({ "width": "2em" })}"><div class="p-2">1</div></div><div class="flex-fill"><div class="d-flex"><div class="p-2 border w-25">\u3000</div><div class="p-2 flex-fill border"></div><div class="p-2 flex-fill border"></div><div class="p-2 flex-fill border"></div></div><div class="d-flex"><div class="p-2 border w-25">\u3000</div><div class="p-2 flex-fill border"></div></div></div><div class="flex-fill"><div class="d-flex"><div class="p-2 border w-25">\u3000</div><div class="p-2 flex-fill border"></div><div class="p-2 flex-fill border"></div><div class="p-2 flex-fill border"></div></div><div class="d-flex"><div class="p-2 border w-25">\u3000</div><div class="p-2 flex-fill border"></div></div></div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/demo/multientry.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const multientry = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { multientry as default };
//# sourceMappingURL=multientry-d6b660d7.mjs.map
