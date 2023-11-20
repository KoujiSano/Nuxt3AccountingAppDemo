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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><h1>\u4ED5\u8A33\u5E33</h1><table class="table"><tbody><tr><th>\u4F1A\u8A08\u5358\u4F4D</th><td><select class="form-select" aria-label="\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002"><option value="1">\u672C\u793E</option><option value="2">Two</option><option value="3">Three</option></select></td></tr><tr><th>\u5BFE\u8C61\u4ED5\u8A33\u756A\u53F7</th><td><div class="mb-3"><form class="form-floating"><input type="text" class="form-control" id="floatingInputValue" placeholder="\u4ED5\u8A33\u756A\u53F7" value="0000000"><label for="floatingInputValue">\u4ED5\u8A33\u756A\u53F7</label></form></div><p>\u304B\u3089</p><div><form class="form-floating"><input type="text" class="form-control" id="floatingInputValue" placeholder="\u4ED5\u8A33\u756A\u53F7" value="9999999"><label for="floatingInputValue">\u4ED5\u8A33\u756A\u53F7</label></form></div></td></tr><tr><th>\u5BFE\u8C61\u65E5\u4ED8\u7BC4\u56F2</th><td><div class="form-check"><input class="form-check-input" type="radio" name="targetDateRange" id="targetDateRange1" checked><label class="form-check-label" for="targetDateRange1"> \u4ED5\u8A33\u65E5\u4ED8 </label></div><div class="form-check"><input class="form-check-input" type="radio" name="targetDateRange" id="targetDateRange2"><label class="form-check-label" for="targetDateRange2"> \u5165\u529B\u65E5\u4ED8 </label></div></td></tr><tr><th>\u5E74\u5EA6</th><td><div class="mb-3"><select class="form-select" aria-label="\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002"><option value="1">2023</option></select></div><div class="mb-3"><select class="form-select" aria-label="\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002" multiple><option value="1">1\u6708</option><option value="2">2\u6708</option><option value="3">3\u6708</option><option value="4">4\u6708</option><option value="5">5\u6708</option><option value="6">6\u6708</option><option value="7">7\u6708</option><option value="8">8\u6708</option><option value="9">9\u6708</option><option value="10">10\u6708</option><option value="11">11\u6708</option><option value="12">12\u6708</option></select></div></td></tr><tr><th>\u8A08\u4E0A\u7A2E\u985E</th><td><div class="form-check"><input class="form-check-input" type="radio" name="reportingType" id="reportingType1" checked><label class="form-check-label" for="reportingType1"> \u5168\u4EF6 </label></div><div class="form-check"><input class="form-check-input" type="radio" name="reportingType" id="reportingType2"><label class="form-check-label" for="reportingType2"> \u6708\u6B21\u4ED5\u8A33 </label></div><div class="form-check"><input class="form-check-input" type="radio" name="reportingType" id="reportingType3"><label class="form-check-label" for="reportingType3"> \u518D\u632F\u66FF\u30FB\u6C7A\u7B97\u4ED5\u8A33 </label></div></td></tr><tr><th>\u4ED8\u7B8B</th><td><div class="form-check"><input class="form-check-input" type="radio" name="tag" id="tag1" checked><label class="form-check-label" for="tag1"> \u5168\u4EF6 </label></div><div class="form-check"><input class="form-check-input" type="radio" name="tag" id="tag2"><label class="form-check-label" for="tag2"> \u4ED8\u7B8B\u3042\u308A </label></div><div class="form-check"><input class="form-check-input" type="radio" name="tag" id="tag3"><label class="form-check-label" for="tag3"> \u30D5\u30A1\u30A4\u30EB\u6DFB\u4ED8\u3042\u308A </label></div></td></tr><tr><th>\u5165\u529B\u7A2E\u985E\u533A\u5206</th><td><div class="form-check"><input class="form-check-input" type="radio" name="inputTypeClassification" id="inputTypeClassification1" checked><label class="form-check-label" for="inputTypeClassification1"> \u5168\u4EF6 </label></div><div class="form-check"><input class="form-check-input" type="radio" name="inputTypeClassification" id="inputTypeClassification2"><label class="form-check-label" for="inputTypeClassification2"> \u901A\u5E38\u5165\u529B </label></div><div class="form-check"><input class="form-check-input" type="radio" name="inputTypeClassification" id="inputTypeClassification3"><label class="form-check-label" for="inputTypeClassification3"> \u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F </label></div></td></tr><tr><th>\u51FA\u529B\u9806</th><td><div class="form-check"><input class="form-check-input" type="radio" name="outputOrder" id="outputOrder1" checked><label class="form-check-label" for="outputOrder1"> \u4ED5\u8A33\u65E5\u4ED8 </label></div><div class="form-check"><input class="form-check-input" type="radio" name="outputOrder" id="outputOrder2"><label class="form-check-label" for="outputOrder2"> \u5165\u529B\u65E5\u4ED8 </label></div><div class="form-check"><input class="form-check-input" type="radio" name="outputOrder" id="outputOrder3"><label class="form-check-label" for="outputOrder3"> \u4ED5\u8A33\u756A\u53F7 </label></div></td></tr></tbody></table><div class="d-grid gap-2 d-md-flex justify-content-md-end"><a href="/demo/bookKeepingJournal/search" class="btn btn-primary" tabindex="-1" role="button" aria-disabled="true">\u8868\u793A</a></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/demo/bookKeepingJournal/journalbook.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const journalbook = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { journalbook as default };
//# sourceMappingURL=journalbook-69920efc.mjs.map
