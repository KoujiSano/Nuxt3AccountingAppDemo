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
  _push(`<!--[--><div class="card mb-4" style="${ssrRenderStyle({ "max-width": "auto" })}"><div class="card text-center"><div class="card-header bg-info"> \u4F1A\u8A08\u671F\u9593 </div><label for="inputPassword5" class="form-label">\u671F\u9996\u65E5 \u203B\u5FC5\u9808</label><input type="password" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock"><div id="passwordHelpBlock" class="form-text"><h5>* \u4F1A\u8A08\u5E74\u5EA6 2023\u5E74<br> * \u4F1A\u8A08\u671F\u9593 2023\u5E744\u67081\u65E5 \u304B\u3089 2024\u5E743\u670831\u65E5</h5> \u671F\u9996\u65E5\u3092\u5143\u306B1\u5E74\u5F8C\u306E\u65E5\u4ED8\u304C\u671F\u672B\u65E5\u3068\u3057\u3066\u81EA\u52D5\u8A08\u7B97\u3055\u308C\u307E\u3059\u3002 \u4F1A\u8A08\u5E74\u5EA6\u306F\u671F\u9996\u65E5\u306E\u5E74\u3068\u306A\u308A\u307E\u3059\u3002 \u671F\u4E2D\u958B\u59CB\u3059\u308B\u5834\u5408\u3082\u3001\u671F\u9996\u65E5\u3092\u6C42\u3081\u3066\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002 </div><div class="form-check form-check-inline"><input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"><label class="form-check-label" for="inlineCheckbox1">\u30EA\u30BB\u30C3\u30C8\u3057\u306A\u3044</label></div><div class="form-check form-check-inline"><input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"><label class="form-check-label" for="inlineCheckbox2">\u5E74\u6BCE\u306B\u30EA\u30BB\u30C3\u30C8</label></div><div class="form-check form-check-inline"><input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"><label class="form-check-label" for="inlineCheckbox2">\u6708\u6BCE\u306B\u30EA\u30BB\u30C3\u30C8</label></div></div></div><div><ul><p>\u6C7A\u7B97\u5831\u544A\u66F8\u753B\u9762\u3067\u6C7A\u7B97\u66F8\u306B\u8868\u793A\u3059\u308B\u4F1A\u8A08\u671F\u9593\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p><p>\u6C7A\u7B97\u671F\u306F\u6CD5\u4EBA\u7528\u6C7A\u7B97\u5831\u544A\u66F8\u306B\u51FA\u529B\u3055\u308C\u307E\u3059\u3002</p><p>\u4ED5\u8A33\u756A\u53F7\u306E\u30EA\u30BB\u30C3\u30C8\u306F\u5F53\u5E74\u5EA6\u4EE5\u964D\u306E\u4ED5\u8A33\u304C\u5B58\u5728\u3057\u3066\u3044\u308B\u5834\u5408\u3001\u5909\u66F4\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002</p></ul></div><div class="form-check form-check-inline"><input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"><label class="form-check-label" for="inlineCheckbox1">1</label></div><div class="form-check form-check-inline"><input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"><label class="form-check-label" for="inlineCheckbox2">2</label></div><br><input type="checkbox" class="btn-check" id="btn-check" autocomplete="off"><label class="btn btn-primary" for="btn-check">\u78BA\u8A8D</label><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/demo/CompaneySetting/setting.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const setting = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { setting as default };
//# sourceMappingURL=setting-f6f4204e.mjs.map
