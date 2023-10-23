import { unref, useSSRContext } from 'vue';
import { u as useState } from './state-b54abad0.mjs';
import { ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import '../server.mjs';
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

const useRecipe = () => useState("recipe", () => {
  return {
    title: "\u7F8E\u5473\u3057\u3055No.1\uFF01KFC\u98A8\u30D5\u30E9\u30A4\u30C9\u30C1\u30AD\u30F3",
    description: "KFC\u4EBA\u6C17\u30EC\u30B7\u30D41\u4F4D\uFF01\u6570\u3042\u308BKFC\u30EC\u30B7\u30D4\u2500\u3069\u308C\u3082\u4F55\u304B\u4E00\u5473\u8DB3\u308A\u306A\u3044\u6C17\u304C\u3002\u8A66\u884C\u932F\u8AA4\u306E\u672B\u306E\u4E3B\u4EBA\u3082\u7D76\u8CDB\u2606\u518D\u73FE\u7387\u306E\u9AD8\u3044\u30EC\u30B7\u30D4\u3067\u3059\u2606",
    material: [
      { text: "\u9D8F\u8089(\u304A\u597D\u304D\u306A\u90E8\u4F4D)\u3000\uFF12\u301C\uFF13\u679A\u4F4D" },
      { text: "\u2606\u725B\u4E73\u30001/2\u30AB\u30C3\u30D7" },
      { text: "\u2606\u5375\u3000\uFF11\u500B" },
      { text: "\u2606\u306B\u3093\u306B\u304F\u30C1\u30E5\u30FC\u30D6\u3000\uFF12\u30BB\u30F3\u30C1\u4F4D" },
      { text: "\u2605\u8584\u529B\u7C89\u3000\uFF11\u30AB\u30C3\u30D7" },
      { text: "\u2605\u30AA\u30FC\u30EB\u30B9\u30D1\u30A4\u30B9\u3000\u5C0F\u3055\u3058\uFF11\u5F31" },
      { text: "\u2605\u9846\u7C92\u30B3\u30F3\u30BD\u30E1\u3000\u5927\u3055\u30581/2" },
      { text: "\u2605\u5869\u3000\u5927\u3055\u30581/2" },
      { text: "\u3042\u308C\u3070\u2605\u30D1\u30D7\u30EA\u30AB\u30D1\u30A6\u30C0\u30FC\u3000\u5C0F\u3055\u3058\uFF11" }
    ],
    zairyo: "\u6750\u6599"
  };
});
const _sfc_main = {
  __name: "recipe",
  __ssrInlineRender: true,
  setup(__props) {
    const data = useRecipe();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="container text-center my-5"><h1>${ssrInterpolate(unref(data).title)}</h1><div class="alert alert-primary" role="alert">${ssrInterpolate(unref(data).description)}</div></div><div class="container mb-5"><div class="card mb-3 mx-auto"><div class="row g-0"><div class="col-md-4"><img src="https://img.cpcdn.com/recipes/3695776/894x1461s/03855e67f64548a05b1f995faabe8f57?u=12868943&amp;p=1455726325" class="img-fluid rounded-start" alt="..."></div><div class="col-md-8"><div class="card-body"><h5 class="card-title">${ssrInterpolate(unref(data).zairyo)}</h5><div class="card-text"><ul><!--[-->`);
      ssrRenderList(unref(data).material, (item) => {
        _push(`<li>${ssrInterpolate(item.text)}</li>`);
      });
      _push(`<!--]--></ul></div></div></div></div></div></div><div class="container mb-5"><h2>\u4F5C\u308A\u65B9</h2><div class="row row-cols-1 row-cols-sm-2 row-cols-md-4"><div class="col border p-2"><div class="mb-2"><span class="badge bg-secondary">1</span></div><p>\u2606\u3092\u30DC\u30A6\u30EB\u306B\u6DF7\u305C\u5408\u308F\u305B\u3066\u304A\u304F\u3002</p></div><div class="col border p-2"><div class="mb-2"><span class="badge bg-secondary">2</span></div><p>\u5225\u306E\u30DC\u30A6\u30EB\u306B\u2605\u3092\u5168\u3066\u6DF7\u305C\u5408\u308F\u305B\u3066\u304A\u304F\u3002</p></div><div class="col border p-2"><div class="mb-2"><span class="badge bg-secondary">3</span></div><p>\u8089\u306E\u539A\u307F\u304C\u3042\u308B\u90E8\u5206\u3092\u5207\u308A\u958B\u304D\u3001\u539A\u307F\u3092\u4E00\u5B9A\u306B\u3059\u308B\u3002<br>\u9D8F\u8089\uFF11\u679A\u3092\uFF12\uFF5E\uFF13\u7B49\u5206\u306E\u5927\u304D\u3081\u306B\u5207\u308B\u3002</p></div><div class="col border p-2"><div class="mb-2"><span class="badge bg-secondary">4</span></div><p>\uFF11\u306E\u30DC\u30A6\u30EB\u306B\u9D8F\u8089\u3092\u6D78\u3059\u3002(\u6642\u9593\u304C\u3042\u308C\u307020\u5206\u4EE5\u4E0A\u6D78\u3059\u3002)</p></div><div class="col border p-2"><div class="mb-2"><span class="badge bg-secondary">5</span></div><p>\uFF12\u306E\u30DC\u30A6\u30EB\u306B\u9D8F\u8089\u3092\u5165\u308C\u3066\u7C89\u985E\u3092\u307E\u3093\u3079\u3093\u306A\u304F\u307E\u3076\u3057\u3001\u5225\u306E\u5BB9\u5668\u306B\u4E26\u3079\u3066\u3044\u304F\u3002<br> \u7C89\u304C\u4F59\u308B\u3088\u3046\u3067\u3057\u305F\u3089\u3001\u4E8C\u5EA6\u4ED8\u3051\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\uFF01</p></div><div class="col border p-2"><div class="mb-2"><span class="badge bg-secondary">6</span></div><p>\u5375\u6DB2\u2192\u7C89\u2192\u5375\u6DB2\u2192\u7C89\u3068\u4E8C\u5EA6\u4ED8\u3051\u3059\u308B\u4E8B\u3067\u3001\u30AB\u30EA\u3063\u3068\u611F\u304C\u30A2\u30C3\u30D7\uFF0B\u5473\u3082\u3057\u3063\u304B\u308A\u4ED8\u304D\u307E\u3059\uFF01\u5199\u771F\u306E\u6211\u304C\u5BB6\u306E\u306F\u4E8C\u5EA6\u4ED8\u3051\u3057\u3066\u3044\u307E\u3059\u3002</p></div><div class="col border p-2"><div class="mb-2"><span class="badge bg-secondary">7</span></div><p>\u6CB9\u3092160\u5EA6\u306B\u6E29\u3081\u308B\u3002<br> (\u6E29\u3081\u308B\u306E\u306F\u3053\u306E\u30BF\u30A4\u30DF\u30F3\u30B0\u3067\u5927\u4E08\u592B\u3067\u3059\u3002\u5F85\u3063\u3066\u308B\u9593\u306B\u8863\u304C\u9D8F\u8089\u306B\u306A\u3058\u307F\u307E\u3059\u3002)</p></div><div class="col border p-2"><div class="mb-2"><span class="badge bg-secondary">8</span></div><p>160\u5EA6\u3067\uFF15\u5206\u4EE5\u4E0A\u3001\u69D8\u5B50\u3092\u898B\u306A\u304C\u3089\u3001\u706B\u304C\u901A\u3063\u305F\u3089\u3001\u4E00\u5EA6\u4E0A\u3052\u3066\u3001\u4ECA\u5EA6\u306F180\uFF5E200\u5EA6\u3067\u30AB\u30EA\u3063\u3068\u4ED5\u4E0A\u3052\u3001\u5B8C\u6210\u3067\u3059\u2606</p></div><div class="col border p-2"><div class="mb-2"><span class="badge bg-secondary">9</span></div>\u9D8F\u8089\u306E1\u679A\u306F\u30B5\u30A4\u30BA\u306B\u3070\u3089\u3064\u304D\u304C\u3042\u308B\u70BA\u30012\uFF5E3\u679A\u3068\u3044\u3046\u8A18\u8F09\u306B\u5909\u66F4\u3057\u307E\u3057\u305F\u3002 </div></div><ol></ol></div><div class="container mb-5"><div class="row gx-5"><div class="col-sm"><h3>\u30B3\u30C4\u30FB\u30DD\u30A4\u30F3\u30C8</h3><p>\u63DA\u3052\u308B\u969B\u934B\u5E95\u3067\u306E\u7126\u3052\u9632\u6B62\u306B\u8863\u304C\u8EFD\u304F\u63DA\u304C\u308B\u307E\u3067\u83DC\u7BB8\u7B49\u3067\u6642\u3005\u6D6E\u304B\u305B\u3066\u4E0B\u3055\u3044</p><p>\u597D\u307F\u3067\u7C89\u985E\u306B\u7C97\u3073\u304D\u9ED2\u80E1\u6912\u5C0F\u3055\u30581/2\u3092\u8DB3\u3057\u3066\u3082\u25CE</p><p>\u306B\u3093\u306B\u304F\u30C1\u30E5\u30FC\u30D6\uFF12\u30BB\u30F3\u30C1\u306F\u30AC\u30FC\u30EA\u30C3\u30AF\u30D1\u30A6\u30C0\u30FC\u5C0F\u3055\u3058\uFF11\u306B\u5909\u3048\u3066\u7C89\u985E\u3068\u6DF7\u305C\u3066\u3082\u7F8E\u5473\u3057\u3044\u3067\u3059\u3002</p><p>\u30D1\u30D7\u30EA\u30AB\u30D1\u30A6\u30C0\u30FC\u306F\u7121\u304F\u3066\u3082\u53EF</p></div><div class="col-sm"><h3>\u3053\u306E\u30EC\u30B7\u30D4\u306E\u751F\u3044\u7ACB\u3061</h3><p>\u4ECA\u307E\u3067\u4F5C\u3063\u305FKFC\u30EC\u30B7\u30D4\u306F\u3001\u5375\u6DB2\u3084\u7C89\u3082\u304B\u306A\u308A\u4F59\u308B\u3057\u3001\u4F55\u3088\u308A\u3082 \u4F55\u304B\u3072\u3068\u5473\u8DB3\u308A\u306A\u3044\u2026\u2026\u3068\u601D\u3063\u3066\u3001\u3084\u3063\u3068KFC\u5473\u306B\u305F\u3069\u308A\u7740\u304D\u307E\u3057\u305F\uFF01</p><p>\u3069\u306E\u5BB6\u5EAD\u306B\u3082\u3042\u308B\u3088\u3046\u306A\u6750\u6599\u3067\u2606</p><p>\u725B\u4E73\u3068\u5375\u6DB2\u3001\u7C89\u985E\u3082\u5FC5\u8981\u91CF\u306E\u307F\u306B\u306A\u3063\u3066\u3044\u308B\u306E\u3067\u7121\u99C4\u304C\u7121\u304F\u7D4C\u6E08\u7684\u3067\u3059\u2606</p></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/demo/recipe.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=recipe-e42d39f2.mjs.map
