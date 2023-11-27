import { _ as __nuxt_component_0 } from './container-f7a213c2.mjs';
import { _ as __nuxt_component_1 } from './div-96eae0b5.mjs';
import { _ as __nuxt_component_0$1 } from './button-828e61fb.mjs';
import { _ as __nuxt_component_3, a as __nuxt_component_4, b as __nuxt_component_5, c as __nuxt_component_6, d as __nuxt_component_7, e as __nuxt_component_8 } from './td-1fb4247a.mjs';
import { _ as __nuxt_component_9 } from './anchor-0ac29154.mjs';
import { withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import './useBlock-d3cb816a.mjs';
import '../../floating-ui.vue.esm.mjs';
import 'lodash-es';
import '@floating-ui/dom';
import './usePopover-5c9bdc28.mjs';
import './bslink-52f5ea1a.mjs';
import './nuxt-link-0dc4ede6.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Container = __nuxt_component_0;
  const _component_b_div = __nuxt_component_1;
  const _component_b_button = __nuxt_component_0$1;
  const _component_b_table = __nuxt_component_3;
  const _component_b_thead = __nuxt_component_4;
  const _component_b_tr = __nuxt_component_5;
  const _component_b_th = __nuxt_component_6;
  const _component_b_tbody = __nuxt_component_7;
  const _component_b_td = __nuxt_component_8;
  const _component_b_a = __nuxt_component_9;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Container, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_b_div, {
          flex: "",
          padding: "t-3",
          "justify-content": "center"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<table class="table" margin="e-2" col="sm-3 xs-4 md-2"${_scopeId2}><tbody${_scopeId2}><tr${_scopeId2}><th${_scopeId2}>\u5E74\u5EA6</th><td${_scopeId2}><select class="form-select" aria-label="\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002"${_scopeId2}><option value="1"${_scopeId2}>2020</option></select></td></tr><tr${_scopeId2}><th${_scopeId2}>\u533A\u5206</th><td${_scopeId2}><select class="form-select" aria-label="\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002"${_scopeId2}><option value="1"${_scopeId2}>\u6708\u6B21</option></select></td></tr><tr${_scopeId2}><th${_scopeId2}>\u4F1A\u8A08\u5358\u4F4D</th><td${_scopeId2}><select class="form-select" aria-label="\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002"${_scopeId2}><option value="1"${_scopeId2}>\u672C\u793E</option></select></td></tr><tr${_scopeId2}><th${_scopeId2}>\u6D88\u8CBB\u7A0E</th><td${_scopeId2}><p${_scopeId2}>\u7C21\u6613\u8AB2\u7A0E / \u7A0E\u8FBC\u51E6\u7406</p></td></tr><tr${_scopeId2}><th${_scopeId2}>\u5BFE\u8C61\u671F\u9593</th><td${_scopeId2}><p${_scopeId2}>2020/9/1 ~ 2020/9/30</p></td></tr></tbody></table>`);
            } else {
              return [
                createVNode("table", {
                  class: "table",
                  margin: "e-2",
                  col: "sm-3 xs-4 md-2"
                }, [
                  createVNode("tbody", null, [
                    createVNode("tr", null, [
                      createVNode("th", null, "\u5E74\u5EA6"),
                      createVNode("td", null, [
                        createVNode("select", {
                          class: "form-select",
                          "aria-label": "\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
                        }, [
                          createVNode("option", { value: "1" }, "2020")
                        ])
                      ])
                    ]),
                    createVNode("tr", null, [
                      createVNode("th", null, "\u533A\u5206"),
                      createVNode("td", null, [
                        createVNode("select", {
                          class: "form-select",
                          "aria-label": "\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
                        }, [
                          createVNode("option", { value: "1" }, "\u6708\u6B21")
                        ])
                      ])
                    ]),
                    createVNode("tr", null, [
                      createVNode("th", null, "\u4F1A\u8A08\u5358\u4F4D"),
                      createVNode("td", null, [
                        createVNode("select", {
                          class: "form-select",
                          "aria-label": "\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
                        }, [
                          createVNode("option", { value: "1" }, "\u672C\u793E")
                        ])
                      ])
                    ]),
                    createVNode("tr", null, [
                      createVNode("th", null, "\u6D88\u8CBB\u7A0E"),
                      createVNode("td", null, [
                        createVNode("p", null, "\u7C21\u6613\u8AB2\u7A0E / \u7A0E\u8FBC\u51E6\u7406")
                      ])
                    ]),
                    createVNode("tr", null, [
                      createVNode("th", null, "\u5BFE\u8C61\u671F\u9593"),
                      createVNode("td", null, [
                        createVNode("p", null, "2020/9/1 ~ 2020/9/30")
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_b_div, {
          padding: "t-3",
          class: "d-flex justify-content-start align-items-center p-3"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_b_button, {
                button: "outline-primary",
                margin: "e-2"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` \uFF1C\u524D\u6708 `);
                  } else {
                    return [
                      createTextVNode(" \uFF1C\u524D\u6708 ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<h2 margin="e-2"${_scopeId2}>9\u6708</h2>`);
              _push3(ssrRenderComponent(_component_b_button, {
                button: "outline-primary",
                margin: "e-2"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` \u7FCC\u6708\uFF1E `);
                  } else {
                    return [
                      createTextVNode(" \u7FCC\u6708\uFF1E ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_b_button, {
                  button: "outline-primary",
                  margin: "e-2"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \uFF1C\u524D\u6708 ")
                  ]),
                  _: 1
                }),
                createVNode("h2", { margin: "e-2" }, "9\u6708"),
                createVNode(_component_b_button, {
                  button: "outline-primary",
                  margin: "e-2"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u7FCC\u6708\uFF1E ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_b_div, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_b_table, { bordered: "" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_b_thead, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_b_tr, {
                            "text-alignment": "center",
                            "text-wrap": "nowrap"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_b_th, {
                                  scope: "col",
                                  col: "xs-2 sm-1"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` \u65E5\u4ED8 `);
                                    } else {
                                      return [
                                        createTextVNode(" \u65E5\u4ED8 ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_b_th, {
                                  scope: "col",
                                  col: "xs-2 sm-1"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` \u6458\u8981 `);
                                    } else {
                                      return [
                                        createTextVNode(" \u6458\u8981 ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_b_th, {
                                  scope: "col",
                                  col: "xs-6 sm-3"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` \u79D1\u76EE `);
                                    } else {
                                      return [
                                        createTextVNode(" \u79D1\u76EE ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_b_th, {
                                  scope: "col",
                                  col: "sm-3"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` \u652F\u6255\u3044\u91D1\u984D `);
                                    } else {
                                      return [
                                        createTextVNode(" \u652F\u6255\u3044\u91D1\u984D ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_b_th, {
                                  scope: "col",
                                  col: "sm-1"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` \u9810\u304B\u308A\u91D1\u984D `);
                                    } else {
                                      return [
                                        createTextVNode(" \u9810\u304B\u308A\u91D1\u984D ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_b_th, {
                                  scope: "col",
                                  col: "xs-1 sm-1"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` \u5DEE\u5F15\u6B8B\u9AD8 `);
                                    } else {
                                      return [
                                        createTextVNode(" \u5DEE\u5F15\u6B8B\u9AD8 ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_b_th, {
                                  scope: "col",
                                  col: "xs-1 sm-1"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` \u4ED8\u7B8B `);
                                    } else {
                                      return [
                                        createTextVNode(" \u4ED8\u7B8B ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_b_th, {
                                    scope: "col",
                                    col: "xs-2 sm-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u65E5\u4ED8 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_b_th, {
                                    scope: "col",
                                    col: "xs-2 sm-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u6458\u8981 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_b_th, {
                                    scope: "col",
                                    col: "xs-6 sm-3"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u79D1\u76EE ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_b_th, {
                                    scope: "col",
                                    col: "sm-3"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u652F\u6255\u3044\u91D1\u984D ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_b_th, {
                                    scope: "col",
                                    col: "sm-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u9810\u304B\u308A\u91D1\u984D ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_b_th, {
                                    scope: "col",
                                    col: "xs-1 sm-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u5DEE\u5F15\u6B8B\u9AD8 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_b_th, {
                                    scope: "col",
                                    col: "xs-1 sm-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u4ED8\u7B8B ")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_b_tr, {
                              "text-alignment": "center",
                              "text-wrap": "nowrap"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_b_th, {
                                  scope: "col",
                                  col: "xs-2 sm-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u65E5\u4ED8 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_b_th, {
                                  scope: "col",
                                  col: "xs-2 sm-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u6458\u8981 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_b_th, {
                                  scope: "col",
                                  col: "xs-6 sm-3"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u79D1\u76EE ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_b_th, {
                                  scope: "col",
                                  col: "sm-3"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u652F\u6255\u3044\u91D1\u984D ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_b_th, {
                                  scope: "col",
                                  col: "sm-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u9810\u304B\u308A\u91D1\u984D ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_b_th, {
                                  scope: "col",
                                  col: "xs-1 sm-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u5DEE\u5F15\u6B8B\u9AD8 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_b_th, {
                                  scope: "col",
                                  col: "xs-1 sm-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u4ED8\u7B8B ")
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
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_b_tbody, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_b_tr, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_b_td, {
                                  scope: "row",
                                  "text-alignment": "center"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(_component_b_a, { href: "#" }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(` \u5909\u66F4 `);
                                          } else {
                                            return [
                                              createTextVNode(" \u5909\u66F4 ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(_component_b_a, { href: "#" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u5909\u66F4 ")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_b_td, { "text-alignment": "left" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Cell`);
                                    } else {
                                      return [
                                        createTextVNode("Cell")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_b_td, { "text-alignment": "left" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Cell`);
                                    } else {
                                      return [
                                        createTextVNode("Cell")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_b_td, { "text-alignment": "left" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Cell`);
                                    } else {
                                      return [
                                        createTextVNode("Cell")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_b_td, { "text-alignment": "left" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Cell`);
                                    } else {
                                      return [
                                        createTextVNode("Cell")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_b_td, { "text-alignment": "center" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Cell`);
                                    } else {
                                      return [
                                        createTextVNode("Cell")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_b_td, { "text-alignment": "center" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Cell`);
                                    } else {
                                      return [
                                        createTextVNode("Cell")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_b_td, {
                                    scope: "row",
                                    "text-alignment": "center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_b_a, { href: "#" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u5909\u66F4 ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_b_td, { "text-alignment": "left" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Cell")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_b_td, { "text-alignment": "left" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Cell")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_b_td, { "text-alignment": "left" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Cell")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_b_td, { "text-alignment": "left" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Cell")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_b_td, { "text-alignment": "center" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Cell")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_b_td, { "text-alignment": "center" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Cell")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_b_tr, null, {
                              default: withCtx(() => [
                                createVNode(_component_b_td, {
                                  scope: "row",
                                  "text-alignment": "center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_b_a, { href: "#" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u5909\u66F4 ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_b_td, { "text-alignment": "left" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Cell")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_b_td, { "text-alignment": "left" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Cell")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_b_td, { "text-alignment": "left" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Cell")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_b_td, { "text-alignment": "left" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Cell")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_b_td, { "text-alignment": "center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Cell")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_b_td, { "text-alignment": "center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Cell")
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
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_b_thead, null, {
                        default: withCtx(() => [
                          createVNode(_component_b_tr, {
                            "text-alignment": "center",
                            "text-wrap": "nowrap"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_b_th, {
                                scope: "col",
                                col: "xs-2 sm-1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u65E5\u4ED8 ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_b_th, {
                                scope: "col",
                                col: "xs-2 sm-1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u6458\u8981 ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_b_th, {
                                scope: "col",
                                col: "xs-6 sm-3"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u79D1\u76EE ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_b_th, {
                                scope: "col",
                                col: "sm-3"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u652F\u6255\u3044\u91D1\u984D ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_b_th, {
                                scope: "col",
                                col: "sm-1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u9810\u304B\u308A\u91D1\u984D ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_b_th, {
                                scope: "col",
                                col: "xs-1 sm-1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u5DEE\u5F15\u6B8B\u9AD8 ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_b_th, {
                                scope: "col",
                                col: "xs-1 sm-1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u4ED8\u7B8B ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_b_tbody, null, {
                        default: withCtx(() => [
                          createVNode(_component_b_tr, null, {
                            default: withCtx(() => [
                              createVNode(_component_b_td, {
                                scope: "row",
                                "text-alignment": "center"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_b_a, { href: "#" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u5909\u66F4 ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_b_td, { "text-alignment": "left" }, {
                                default: withCtx(() => [
                                  createTextVNode("Cell")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_b_td, { "text-alignment": "left" }, {
                                default: withCtx(() => [
                                  createTextVNode("Cell")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_b_td, { "text-alignment": "left" }, {
                                default: withCtx(() => [
                                  createTextVNode("Cell")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_b_td, { "text-alignment": "left" }, {
                                default: withCtx(() => [
                                  createTextVNode("Cell")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_b_td, { "text-alignment": "center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Cell")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_b_td, { "text-alignment": "center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Cell")
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
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_b_table, { bordered: "" }, {
                  default: withCtx(() => [
                    createVNode(_component_b_thead, null, {
                      default: withCtx(() => [
                        createVNode(_component_b_tr, {
                          "text-alignment": "center",
                          "text-wrap": "nowrap"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_b_th, {
                              scope: "col",
                              col: "xs-2 sm-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u65E5\u4ED8 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_th, {
                              scope: "col",
                              col: "xs-2 sm-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u6458\u8981 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_th, {
                              scope: "col",
                              col: "xs-6 sm-3"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u79D1\u76EE ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_th, {
                              scope: "col",
                              col: "sm-3"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u652F\u6255\u3044\u91D1\u984D ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_th, {
                              scope: "col",
                              col: "sm-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u9810\u304B\u308A\u91D1\u984D ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_th, {
                              scope: "col",
                              col: "xs-1 sm-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u5DEE\u5F15\u6B8B\u9AD8 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_th, {
                              scope: "col",
                              col: "xs-1 sm-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u4ED8\u7B8B ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_b_tbody, null, {
                      default: withCtx(() => [
                        createVNode(_component_b_tr, null, {
                          default: withCtx(() => [
                            createVNode(_component_b_td, {
                              scope: "row",
                              "text-alignment": "center"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_b_a, { href: "#" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u5909\u66F4 ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_td, { "text-alignment": "left" }, {
                              default: withCtx(() => [
                                createTextVNode("Cell")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_td, { "text-alignment": "left" }, {
                              default: withCtx(() => [
                                createTextVNode("Cell")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_td, { "text-alignment": "left" }, {
                              default: withCtx(() => [
                                createTextVNode("Cell")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_td, { "text-alignment": "left" }, {
                              default: withCtx(() => [
                                createTextVNode("Cell")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_td, { "text-alignment": "center" }, {
                              default: withCtx(() => [
                                createTextVNode("Cell")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_td, { "text-alignment": "center" }, {
                              default: withCtx(() => [
                                createTextVNode("Cell")
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
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_b_div, {
            flex: "",
            padding: "t-3",
            "justify-content": "center"
          }, {
            default: withCtx(() => [
              createVNode("table", {
                class: "table",
                margin: "e-2",
                col: "sm-3 xs-4 md-2"
              }, [
                createVNode("tbody", null, [
                  createVNode("tr", null, [
                    createVNode("th", null, "\u5E74\u5EA6"),
                    createVNode("td", null, [
                      createVNode("select", {
                        class: "form-select",
                        "aria-label": "\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
                      }, [
                        createVNode("option", { value: "1" }, "2020")
                      ])
                    ])
                  ]),
                  createVNode("tr", null, [
                    createVNode("th", null, "\u533A\u5206"),
                    createVNode("td", null, [
                      createVNode("select", {
                        class: "form-select",
                        "aria-label": "\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
                      }, [
                        createVNode("option", { value: "1" }, "\u6708\u6B21")
                      ])
                    ])
                  ]),
                  createVNode("tr", null, [
                    createVNode("th", null, "\u4F1A\u8A08\u5358\u4F4D"),
                    createVNode("td", null, [
                      createVNode("select", {
                        class: "form-select",
                        "aria-label": "\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
                      }, [
                        createVNode("option", { value: "1" }, "\u672C\u793E")
                      ])
                    ])
                  ]),
                  createVNode("tr", null, [
                    createVNode("th", null, "\u6D88\u8CBB\u7A0E"),
                    createVNode("td", null, [
                      createVNode("p", null, "\u7C21\u6613\u8AB2\u7A0E / \u7A0E\u8FBC\u51E6\u7406")
                    ])
                  ]),
                  createVNode("tr", null, [
                    createVNode("th", null, "\u5BFE\u8C61\u671F\u9593"),
                    createVNode("td", null, [
                      createVNode("p", null, "2020/9/1 ~ 2020/9/30")
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_b_div, {
            padding: "t-3",
            class: "d-flex justify-content-start align-items-center p-3"
          }, {
            default: withCtx(() => [
              createVNode(_component_b_button, {
                button: "outline-primary",
                margin: "e-2"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \uFF1C\u524D\u6708 ")
                ]),
                _: 1
              }),
              createVNode("h2", { margin: "e-2" }, "9\u6708"),
              createVNode(_component_b_button, {
                button: "outline-primary",
                margin: "e-2"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u7FCC\u6708\uFF1E ")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_b_div, null, {
            default: withCtx(() => [
              createVNode(_component_b_table, { bordered: "" }, {
                default: withCtx(() => [
                  createVNode(_component_b_thead, null, {
                    default: withCtx(() => [
                      createVNode(_component_b_tr, {
                        "text-alignment": "center",
                        "text-wrap": "nowrap"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_b_th, {
                            scope: "col",
                            col: "xs-2 sm-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u65E5\u4ED8 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_th, {
                            scope: "col",
                            col: "xs-2 sm-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u6458\u8981 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_th, {
                            scope: "col",
                            col: "xs-6 sm-3"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u79D1\u76EE ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_th, {
                            scope: "col",
                            col: "sm-3"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u652F\u6255\u3044\u91D1\u984D ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_th, {
                            scope: "col",
                            col: "sm-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u9810\u304B\u308A\u91D1\u984D ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_th, {
                            scope: "col",
                            col: "xs-1 sm-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u5DEE\u5F15\u6B8B\u9AD8 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_th, {
                            scope: "col",
                            col: "xs-1 sm-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u4ED8\u7B8B ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_b_tbody, null, {
                    default: withCtx(() => [
                      createVNode(_component_b_tr, null, {
                        default: withCtx(() => [
                          createVNode(_component_b_td, {
                            scope: "row",
                            "text-alignment": "center"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_b_a, { href: "#" }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u5909\u66F4 ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_td, { "text-alignment": "left" }, {
                            default: withCtx(() => [
                              createTextVNode("Cell")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_td, { "text-alignment": "left" }, {
                            default: withCtx(() => [
                              createTextVNode("Cell")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_td, { "text-alignment": "left" }, {
                            default: withCtx(() => [
                              createTextVNode("Cell")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_td, { "text-alignment": "left" }, {
                            default: withCtx(() => [
                              createTextVNode("Cell")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_td, { "text-alignment": "center" }, {
                            default: withCtx(() => [
                              createTextVNode("Cell")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_td, { "text-alignment": "center" }, {
                            default: withCtx(() => [
                              createTextVNode("Cell")
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
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/demo/passbook/passbook.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const passbook = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { passbook as default };
//# sourceMappingURL=passbook-1bea840b.mjs.map
