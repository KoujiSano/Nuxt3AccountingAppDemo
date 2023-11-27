import { _ as __nuxt_component_0 } from './container-f7a213c2.mjs';
import { _ as __nuxt_component_1 } from './JournalBook-2129f96c.mjs';
import { _ as __nuxt_component_1$1, a as __nuxt_component_2 } from './col-9d3255d6.mjs';
import { _ as __nuxt_component_1$2 } from './div-96eae0b5.mjs';
import { useSSRContext, withCtx, createVNode, createTextVNode, defineComponent, h } from 'vue';
import { _ as _export_sfc, h as hProps } from '../server.mjs';
import { B as BlockProps, u as useBlock } from './useBlock-d3cb816a.mjs';
import { _ as __nuxt_component_0$1 } from './button-828e61fb.mjs';
import { ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
import 'lodash-es';
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
import '../../floating-ui.vue.esm.mjs';
import '@floating-ui/dom';
import './usePopover-5c9bdc28.mjs';

const __nuxt_component_5 = /* @__PURE__ */ defineComponent({
  name: "HtmlParagraph",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "p"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    return () => h(props.tag, hProps(block), context.slots);
  }
});
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><table class="table"><thead><tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr></thead><tbody><tr><th scope="row">1</th><td>Mark</td><td>Otto</td><td>@mdo</td></tr><tr><th scope="row">2</th><td>Jacob</td><td>Thornton</td><td>@fat</td></tr><tr><th scope="row">3</th><td colspan="2">Larry the Bird</td><td>@twitter</td></tr></tbody></table></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BookKeepingJournal/JournalSearch.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Container = __nuxt_component_0;
  const _component_BookKeepingJournalBook = __nuxt_component_1;
  const _component_Row = __nuxt_component_1$1;
  const _component_Col = __nuxt_component_2;
  const _component_b_div = __nuxt_component_1$2;
  const _component_b_p = __nuxt_component_5;
  const _component_b_button = __nuxt_component_0$1;
  const _component_BookKeepingJournalSearch = __nuxt_component_7;
  _push(ssrRenderComponent(_component_Container, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BookKeepingJournalBook, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Row, { gutter: "x-5" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Col, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_b_div, { padding: "3" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_b_p, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<small${_scopeId5}> \u203B \u6458\u8981\u306B32\u6587\u5B57\u3092\u8D85\u3048\u308B\u5165\u529B\u304C\u3042\u308B\u5834\u5408\u3001PDF\u51FA\u529B\u3067\u306F33\u6587\u5B57\u4EE5\u964D\u306F\u7701\u7565\u3055\u308C\u3066\u51FA\u529B\u3055\u308C\u307E\u3059\u3002 </small>`);
                              } else {
                                return [
                                  createVNode("small", null, " \u203B \u6458\u8981\u306B32\u6587\u5B57\u3092\u8D85\u3048\u308B\u5165\u529B\u304C\u3042\u308B\u5834\u5408\u3001PDF\u51FA\u529B\u3067\u306F33\u6587\u5B57\u4EE5\u964D\u306F\u7701\u7565\u3055\u308C\u3066\u51FA\u529B\u3055\u308C\u307E\u3059\u3002 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_b_p, null, {
                              default: withCtx(() => [
                                createVNode("small", null, " \u203B \u6458\u8981\u306B32\u6587\u5B57\u3092\u8D85\u3048\u308B\u5165\u529B\u304C\u3042\u308B\u5834\u5408\u3001PDF\u51FA\u529B\u3067\u306F33\u6587\u5B57\u4EE5\u964D\u306F\u7701\u7565\u3055\u308C\u3066\u51FA\u529B\u3055\u308C\u307E\u3059\u3002 ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_b_div, { padding: "3" }, {
                        default: withCtx(() => [
                          createVNode(_component_b_p, null, {
                            default: withCtx(() => [
                              createVNode("small", null, " \u203B \u6458\u8981\u306B32\u6587\u5B57\u3092\u8D85\u3048\u308B\u5165\u529B\u304C\u3042\u308B\u5834\u5408\u3001PDF\u51FA\u529B\u3067\u306F33\u6587\u5B57\u4EE5\u964D\u306F\u7701\u7565\u3055\u308C\u3066\u51FA\u529B\u3055\u308C\u307E\u3059\u3002 ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_Col, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_b_div, {
                      display: "grid md-flex",
                      padding: "3",
                      gap: "2",
                      "justify-content": "md-end"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_b_button, {
                            button: "secondary",
                            size: "sm",
                            type: "button"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` PDF\u51FA\u529B `);
                              } else {
                                return [
                                  createTextVNode(" PDF\u51FA\u529B ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_b_button, {
                            button: "secondary",
                            size: "sm",
                            type: "button"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` CSV\u51FA\u529B `);
                              } else {
                                return [
                                  createTextVNode(" CSV\u51FA\u529B ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_b_button, {
                              button: "secondary",
                              size: "sm",
                              type: "button"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" PDF\u51FA\u529B ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_button, {
                              button: "secondary",
                              size: "sm",
                              type: "button"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" CSV\u51FA\u529B ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_b_div, {
                        display: "grid md-flex",
                        padding: "3",
                        gap: "2",
                        "justify-content": "md-end"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_b_button, {
                            button: "secondary",
                            size: "sm",
                            type: "button"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" PDF\u51FA\u529B ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_button, {
                            button: "secondary",
                            size: "sm",
                            type: "button"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" CSV\u51FA\u529B ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_Col, null, {
                  default: withCtx(() => [
                    createVNode(_component_b_div, { padding: "3" }, {
                      default: withCtx(() => [
                        createVNode(_component_b_p, null, {
                          default: withCtx(() => [
                            createVNode("small", null, " \u203B \u6458\u8981\u306B32\u6587\u5B57\u3092\u8D85\u3048\u308B\u5165\u529B\u304C\u3042\u308B\u5834\u5408\u3001PDF\u51FA\u529B\u3067\u306F33\u6587\u5B57\u4EE5\u964D\u306F\u7701\u7565\u3055\u308C\u3066\u51FA\u529B\u3055\u308C\u307E\u3059\u3002 ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_Col, null, {
                  default: withCtx(() => [
                    createVNode(_component_b_div, {
                      display: "grid md-flex",
                      padding: "3",
                      gap: "2",
                      "justify-content": "md-end"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_b_button, {
                          button: "secondary",
                          size: "sm",
                          type: "button"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" PDF\u51FA\u529B ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_b_button, {
                          button: "secondary",
                          size: "sm",
                          type: "button"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" CSV\u51FA\u529B ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BookKeepingJournalSearch, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BookKeepingJournalBook),
          createVNode(_component_Row, { gutter: "x-5" }, {
            default: withCtx(() => [
              createVNode(_component_Col, null, {
                default: withCtx(() => [
                  createVNode(_component_b_div, { padding: "3" }, {
                    default: withCtx(() => [
                      createVNode(_component_b_p, null, {
                        default: withCtx(() => [
                          createVNode("small", null, " \u203B \u6458\u8981\u306B32\u6587\u5B57\u3092\u8D85\u3048\u308B\u5165\u529B\u304C\u3042\u308B\u5834\u5408\u3001PDF\u51FA\u529B\u3067\u306F33\u6587\u5B57\u4EE5\u964D\u306F\u7701\u7565\u3055\u308C\u3066\u51FA\u529B\u3055\u308C\u307E\u3059\u3002 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_Col, null, {
                default: withCtx(() => [
                  createVNode(_component_b_div, {
                    display: "grid md-flex",
                    padding: "3",
                    gap: "2",
                    "justify-content": "md-end"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_b_button, {
                        button: "secondary",
                        size: "sm",
                        type: "button"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" PDF\u51FA\u529B ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_b_button, {
                        button: "secondary",
                        size: "sm",
                        type: "button"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" CSV\u51FA\u529B ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_BookKeepingJournalSearch)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/demo/bookKeepingJournal/search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const search = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { search as default };
//# sourceMappingURL=search-a1096957.mjs.map
