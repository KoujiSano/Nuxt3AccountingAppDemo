import { _ as __nuxt_component_0 } from './container-f7a213c2.mjs';
import { _ as __nuxt_component_0$1, a as __nuxt_component_1, b as __nuxt_component_3 } from './listGroupItem-844da8d8.mjs';
import { _ as __nuxt_component_1$1, a as __nuxt_component_2 } from './col-9d3255d6.mjs';
import { _ as __nuxt_component_9 } from './anchor-0ac29154.mjs';
import { defineComponent, withCtx, createTextVNode, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { y as yeardata, k as kubundata } from './DarknessData-ab043c85.mjs';
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
import './useBlock-d3cb816a.mjs';
import '../../floating-ui.vue.esm.mjs';
import '@floating-ui/dom';
import './usePopover-5c9bdc28.mjs';
import './bslink-52f5ea1a.mjs';
import './nuxt-link-0dc4ede6.mjs';
import './state-21b16c03.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "KessanHoukoku_info",
  __ssrInlineRender: true,
  setup(__props) {
    const year = yeardata();
    const kubun = kubundata();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_container = __nuxt_component_0;
      const _component_Card = __nuxt_component_0$1;
      const _component_CardHeader = __nuxt_component_1;
      const _component_ListGroupItem = __nuxt_component_3;
      const _component_Row = __nuxt_component_1$1;
      const _component_Col = __nuxt_component_2;
      const _component_b_a = __nuxt_component_9;
      _push(ssrRenderComponent(_component_container, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><h1 class="mb-4"${_scopeId}>\u5869\u5206\u3092\u51A5\u5E9C\u306B\u63D0\u51FA</h1>`);
            _push2(ssrRenderComponent(_component_Card, { class: "text-center m-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardHeader, { class: "text-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u4F1A\u8A08\u5E74\u5EA6`);
                      } else {
                        return [
                          createTextVNode("\u4F1A\u8A08\u5E74\u5EA6")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ListGroupItem, { class: "m-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2${_scopeId3}>${ssrInterpolate(unref(year))}</h2>`);
                      } else {
                        return [
                          createVNode("h2", null, toDisplayString(unref(year)), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_CardHeader, { class: "text-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u6C7A\u7B97\u533A\u5206`);
                      } else {
                        return [
                          createTextVNode("\u6C7A\u7B97\u533A\u5206")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ListGroupItem, { class: "m-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2${_scopeId3}>${ssrInterpolate(unref(kubun))}</h2>`);
                      } else {
                        return [
                          createVNode("h2", null, toDisplayString(unref(kubun)), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_CardHeader, { class: "text-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u4F1A\u8A08\u671F\u9593`);
                      } else {
                        return [
                          createTextVNode("\u4F1A\u8A08\u671F\u9593")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ListGroupItem, { class: "m-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Col, { class: "m-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<input type="date" class="form-control" aria-label="date1"${_scopeId5}>`);
                                  } else {
                                    return [
                                      createVNode("input", {
                                        type: "date",
                                        class: "form-control",
                                        "aria-label": "date1"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Col, {
                                class: "m-2",
                                col: "md-auto"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h3${_scopeId5}>\uFF5E</h3>`);
                                  } else {
                                    return [
                                      createVNode("h3", null, "\uFF5E")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Col, { class: "m-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<input type="date" class="form-control" aria-label="date2"${_scopeId5}>`);
                                  } else {
                                    return [
                                      createVNode("input", {
                                        type: "date",
                                        class: "form-control",
                                        "aria-label": "date2"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Col, { class: "m-2" }, {
                                  default: withCtx(() => [
                                    createVNode("input", {
                                      type: "date",
                                      class: "form-control",
                                      "aria-label": "date1"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Col, {
                                  class: "m-2",
                                  col: "md-auto"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h3", null, "\uFF5E")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Col, { class: "m-2" }, {
                                  default: withCtx(() => [
                                    createVNode("input", {
                                      type: "date",
                                      class: "form-control",
                                      "aria-label": "date2"
                                    })
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
                          createVNode(_component_Row, null, {
                            default: withCtx(() => [
                              createVNode(_component_Col, { class: "m-2" }, {
                                default: withCtx(() => [
                                  createVNode("input", {
                                    type: "date",
                                    class: "form-control",
                                    "aria-label": "date1"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Col, {
                                class: "m-2",
                                col: "md-auto"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h3", null, "\uFF5E")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Col, { class: "m-2" }, {
                                default: withCtx(() => [
                                  createVNode("input", {
                                    type: "date",
                                    class: "form-control",
                                    "aria-label": "date2"
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardHeader, { class: "text-center" }, {
                      default: withCtx(() => [
                        createTextVNode("\u4F1A\u8A08\u5E74\u5EA6")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ListGroupItem, { class: "m-3" }, {
                      default: withCtx(() => [
                        createVNode("h2", null, toDisplayString(unref(year)), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_CardHeader, { class: "text-center" }, {
                      default: withCtx(() => [
                        createTextVNode("\u6C7A\u7B97\u533A\u5206")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ListGroupItem, { class: "m-3" }, {
                      default: withCtx(() => [
                        createVNode("h2", null, toDisplayString(unref(kubun)), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_CardHeader, { class: "text-center" }, {
                      default: withCtx(() => [
                        createTextVNode("\u4F1A\u8A08\u671F\u9593")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ListGroupItem, { class: "m-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_Row, null, {
                          default: withCtx(() => [
                            createVNode(_component_Col, { class: "m-2" }, {
                              default: withCtx(() => [
                                createVNode("input", {
                                  type: "date",
                                  class: "form-control",
                                  "aria-label": "date1"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Col, {
                              class: "m-2",
                              col: "md-auto"
                            }, {
                              default: withCtx(() => [
                                createVNode("h3", null, "\uFF5E")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Col, { class: "m-2" }, {
                              default: withCtx(() => [
                                createVNode("input", {
                                  type: "date",
                                  class: "form-control",
                                  "aria-label": "date2"
                                })
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
            _push2(ssrRenderComponent(_component_b_a, {
              button: "primary",
              href: "/demo/Darkness_KessanHoukoku_MARK_V1_mp5/KessanHoukoku",
              class: "m-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u623B\u308B `);
                } else {
                  return [
                    createTextVNode(" \u623B\u308B ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("h1", { class: "mb-4" }, "\u5869\u5206\u3092\u51A5\u5E9C\u306B\u63D0\u51FA"),
                createVNode(_component_Card, { class: "text-center m-2" }, {
                  default: withCtx(() => [
                    createVNode(_component_CardHeader, { class: "text-center" }, {
                      default: withCtx(() => [
                        createTextVNode("\u4F1A\u8A08\u5E74\u5EA6")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ListGroupItem, { class: "m-3" }, {
                      default: withCtx(() => [
                        createVNode("h2", null, toDisplayString(unref(year)), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_CardHeader, { class: "text-center" }, {
                      default: withCtx(() => [
                        createTextVNode("\u6C7A\u7B97\u533A\u5206")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ListGroupItem, { class: "m-3" }, {
                      default: withCtx(() => [
                        createVNode("h2", null, toDisplayString(unref(kubun)), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_CardHeader, { class: "text-center" }, {
                      default: withCtx(() => [
                        createTextVNode("\u4F1A\u8A08\u671F\u9593")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ListGroupItem, { class: "m-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_Row, null, {
                          default: withCtx(() => [
                            createVNode(_component_Col, { class: "m-2" }, {
                              default: withCtx(() => [
                                createVNode("input", {
                                  type: "date",
                                  class: "form-control",
                                  "aria-label": "date1"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Col, {
                              class: "m-2",
                              col: "md-auto"
                            }, {
                              default: withCtx(() => [
                                createVNode("h3", null, "\uFF5E")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Col, { class: "m-2" }, {
                              default: withCtx(() => [
                                createVNode("input", {
                                  type: "date",
                                  class: "form-control",
                                  "aria-label": "date2"
                                })
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
                createVNode(_component_b_a, {
                  button: "primary",
                  href: "/demo/Darkness_KessanHoukoku_MARK_V1_mp5/KessanHoukoku",
                  class: "m-2"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u623B\u308B ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/demo/Darkness_KessanHoukoku_MARK_V1_mp5/KessanHoukoku_info.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=KessanHoukoku_info-1e3871b8.mjs.map
