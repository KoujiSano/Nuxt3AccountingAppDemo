import { _ as __nuxt_component_0 } from './container-80f5844a.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-8eeb725a.mjs';
import { withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import './useBlock-07c4f4ed.mjs';
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
  const _component_Container = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(ssrRenderComponent(_component_Container, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="row"${_scopeId}><div class="col"${_scopeId}><div class="card"${_scopeId}><div class="card-header"${_scopeId}>\u5404\u7A2E\u5165\u529B</div><ul class="list-group list-group-flush"${_scopeId}><li class="list-group-item"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "/demo/complex-journal/complex",
          class: "card-link"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u8907\u5408\u4ED5\u8A33\u5165\u529B`);
            } else {
              return [
                createTextVNode("\u8907\u5408\u4ED5\u8A33\u5165\u529B")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</li><li class="list-group-item"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "/demo/passbook/passbook",
          class: "card-link"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u901A\u5E33\u5165\u529B`);
            } else {
              return [
                createTextVNode("\u901A\u5E33\u5165\u529B")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</li></ul></div></div><div class="col"${_scopeId}><div class="card"${_scopeId}><div class="card-header"${_scopeId}>\u5404\u7A2E\u51FA\u529B</div><ul class="list-group list-group-flush"${_scopeId}><li class="list-group-item"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "/demo/bookKeepingJournal/journalbook",
          class: "card-link"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u4ED5\u8A33\u5E33`);
            } else {
              return [
                createTextVNode("\u4ED5\u8A33\u5E33")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</li><li class="list-group-item"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "/demo/journaList_Search/search",
          class: "card-link"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u4ED5\u8A33\u691C\u7D22`);
            } else {
              return [
                createTextVNode("\u4ED5\u8A33\u691C\u7D22")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</li><li class="list-group-item"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "/accountledger",
          class: "card-link"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u7DCF\u52D8\u5B9A\u5143\u5E33`);
            } else {
              return [
                createTextVNode("\u7DCF\u52D8\u5B9A\u5143\u5E33")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</li><li class="list-group-item"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "/demo/hojomototyou/subledger",
          class: "card-link"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u88DC\u52A9\u5143\u5E33`);
            } else {
              return [
                createTextVNode("\u88DC\u52A9\u5143\u5E33")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</li></ul></div></div><div class="col"${_scopeId}><div class="card"${_scopeId}><div class="card-header"${_scopeId}>\u5E74\u6B21\u6C7A\u7B97</div><ul class="list-group list-group-flush"${_scopeId}><li class="list-group-item"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "/demo/Darkness_KessanHoukoku_MARK_V1_mp5/KessanHoukoku",
          class: "card-link"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u6C7A\u7B97\u5831\u544A\u66F8`);
            } else {
              return [
                createTextVNode("\u6C7A\u7B97\u5831\u544A\u66F8")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</li></ul></div></div><div class="col"${_scopeId}><div class="card"${_scopeId}><div class="card-header"${_scopeId}>\u5404\u7A2E\u8A2D\u5B9A</div><ul class="list-group list-group-flush"${_scopeId}><li class="list-group-item"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "/accountinginfoconfig",
          class: "card-link"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u4F1A\u793E\u57FA\u672C\u8A2D\u5B9A`);
            } else {
              return [
                createTextVNode("\u4F1A\u793E\u57FA\u672C\u8A2D\u5B9A")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</li><li class="list-group-item"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "/demo/BasicInformationSetting/AccountItem",
          class: "card-link"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u52D8\u5B9A\u79D1\u76EE`);
            } else {
              return [
                createTextVNode("\u52D8\u5B9A\u79D1\u76EE")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</li></ul></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "row" }, [
            createVNode("div", { class: "col" }, [
              createVNode("div", { class: "card" }, [
                createVNode("div", { class: "card-header" }, "\u5404\u7A2E\u5165\u529B"),
                createVNode("ul", { class: "list-group list-group-flush" }, [
                  createVNode("li", { class: "list-group-item" }, [
                    createVNode(_component_NuxtLink, {
                      to: "/demo/complex-journal/complex",
                      class: "card-link"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u8907\u5408\u4ED5\u8A33\u5165\u529B")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("li", { class: "list-group-item" }, [
                    createVNode(_component_NuxtLink, {
                      to: "/demo/passbook/passbook",
                      class: "card-link"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u901A\u5E33\u5165\u529B")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ]),
            createVNode("div", { class: "col" }, [
              createVNode("div", { class: "card" }, [
                createVNode("div", { class: "card-header" }, "\u5404\u7A2E\u51FA\u529B"),
                createVNode("ul", { class: "list-group list-group-flush" }, [
                  createVNode("li", { class: "list-group-item" }, [
                    createVNode(_component_NuxtLink, {
                      to: "/demo/bookKeepingJournal/journalbook",
                      class: "card-link"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u4ED5\u8A33\u5E33")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("li", { class: "list-group-item" }, [
                    createVNode(_component_NuxtLink, {
                      to: "/demo/journaList_Search/search",
                      class: "card-link"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u4ED5\u8A33\u691C\u7D22")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("li", { class: "list-group-item" }, [
                    createVNode(_component_NuxtLink, {
                      to: "/accountledger",
                      class: "card-link"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u7DCF\u52D8\u5B9A\u5143\u5E33")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("li", { class: "list-group-item" }, [
                    createVNode(_component_NuxtLink, {
                      to: "/demo/hojomototyou/subledger",
                      class: "card-link"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u88DC\u52A9\u5143\u5E33")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ]),
            createVNode("div", { class: "col" }, [
              createVNode("div", { class: "card" }, [
                createVNode("div", { class: "card-header" }, "\u5E74\u6B21\u6C7A\u7B97"),
                createVNode("ul", { class: "list-group list-group-flush" }, [
                  createVNode("li", { class: "list-group-item" }, [
                    createVNode(_component_NuxtLink, {
                      to: "/demo/Darkness_KessanHoukoku_MARK_V1_mp5/KessanHoukoku",
                      class: "card-link"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u6C7A\u7B97\u5831\u544A\u66F8")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ]),
            createVNode("div", { class: "col" }, [
              createVNode("div", { class: "card" }, [
                createVNode("div", { class: "card-header" }, "\u5404\u7A2E\u8A2D\u5B9A"),
                createVNode("ul", { class: "list-group list-group-flush" }, [
                  createVNode("li", { class: "list-group-item" }, [
                    createVNode(_component_NuxtLink, {
                      to: "/accountinginfoconfig",
                      class: "card-link"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u4F1A\u793E\u57FA\u672C\u8A2D\u5B9A")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("li", { class: "list-group-item" }, [
                    createVNode(_component_NuxtLink, {
                      to: "/demo/BasicInformationSetting/AccountItem",
                      class: "card-link"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u52D8\u5B9A\u79D1\u76EE")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/demo/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const home = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { home as default };
//# sourceMappingURL=home-9a4a67df.mjs.map
