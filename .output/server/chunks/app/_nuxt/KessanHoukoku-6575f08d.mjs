import { ssrRenderAttrs } from 'vue/server-renderer';
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

const _sfc_main = {
  async asyncData({ $axios }) {
    const response = await $axios.get("/api/kessan");
    return { kessanData: response.data };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1>\u6C7A\u7B97\u5831\u544A\u66F8</h1><table><thead><tr><th>\u9805\u76EE</th><th>\u91D1\u984D</th></tr></thead><tbody><tr><td>\u58F2\u4E0A\u9AD8</td><td>100\u3048\u3093</td></tr><tr><td>\u7D4C\u8CBB</td><td>200\u3048\u3093</td></tr><tr><td>\u5229\u76CA</td><td>100\u3048\u3093</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/demo/Darkness_KessanHoukoku_MARK_V1_mp5/KessanHoukoku.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const KessanHoukoku = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { KessanHoukoku as default };
//# sourceMappingURL=KessanHoukoku-6575f08d.mjs.map
