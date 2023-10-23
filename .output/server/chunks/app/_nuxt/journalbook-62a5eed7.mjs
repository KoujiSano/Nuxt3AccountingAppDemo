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
import 'vue/server-renderer';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p>Hello journalbook page</p><div class="container"><h1>\u4ED5\u8A33\u5E33</h1><table class="table"><thead><tr><th>\u4F1A\u8A08\u5358\u4F4D</th><th>\u5BFE\u8C61\u4ED5\u8A33\u756A\u53F7</th></tr></thead><tbody><tr><td>\u5BFE\u8C61\u65E5\u4ED8\u7BC4\u56F2</td><td>\u5E74\u5EA6</td></tr><tr><td>\u8A08\u4E0A\u7A2E\u985E</td><td>\u4ED8\u7B8B</td></tr><tr><td>\u5165\u529B\u7A2E\u985E\u533A\u5206</td><td>\u51FA\u529B\u9806</td></tr></tbody></table></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/demo/bookKeepingJournal/journalbook.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const journalbook = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { journalbook as default };
//# sourceMappingURL=journalbook-62a5eed7.mjs.map
