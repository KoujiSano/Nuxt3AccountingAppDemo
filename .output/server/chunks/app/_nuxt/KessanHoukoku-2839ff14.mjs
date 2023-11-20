import { _ as __nuxt_component_0 } from './container-80f5844a.mjs';
import { _ as __nuxt_component_0$1, a as __nuxt_component_1, b as __nuxt_component_3 } from './listGroupItem-10b019e5.mjs';
import { _ as __nuxt_component_4, a as __nuxt_component_5, b as __nuxt_component_6, c as __nuxt_component_7 } from './checkboxToggleButton-4e25caf6.mjs';
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import './useBlock-07c4f4ed.mjs';
import './useItemsActive-ba3b63f7.mjs';
import 'lodash-es';
import './useDropdown-b5e89e2e.mjs';
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
  const _component_container = __nuxt_component_0;
  const _component_Card = __nuxt_component_0$1;
  const _component_CardHeader = __nuxt_component_1;
  const _component_ListGroupItem = __nuxt_component_3;
  const _component_b_option = __nuxt_component_4;
  const _component_ButtonGroup = __nuxt_component_5;
  const _component_RadioToggleButton = __nuxt_component_6;
  const _component_CheckboxToggleButton = __nuxt_component_7;
  _push(ssrRenderComponent(_component_container, mergeProps({ class: "container" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}><h1${_scopeId}>\u30EC\u30A4\u30F3\u30DC\u30FC\u6C7A\u7B97\u5831\u544A\u66F8</h1>`);
        _push2(ssrRenderComponent(_component_Card, { class: "text-center m-4" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_CardHeader, { class: "text-center" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`\u5E74\u5EA6`);
                  } else {
                    return [
                      createTextVNode("\u5E74\u5EA6")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ListGroupItem, { class: "m-3" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<select aria-label="Default select example"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_b_option, { value: "1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` 2023 `);
                        } else {
                          return [
                            createTextVNode(" 2023 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_b_option, { value: "2" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` 19XX `);
                        } else {
                          return [
                            createTextVNode(" 19XX ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</select>`);
                  } else {
                    return [
                      createVNode("select", { "aria-label": "Default select example" }, [
                        createVNode(_component_b_option, { value: "1" }, {
                          default: withCtx(() => [
                            createTextVNode(" 2023 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_b_option, { value: "2" }, {
                          default: withCtx(() => [
                            createTextVNode(" 19XX ")
                          ]),
                          _: 1
                        })
                      ])
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
                    _push4(ssrRenderComponent(_component_ButtonGroup, { "aria-label": "Basic checkbox toggle button group" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_RadioToggleButton, {
                            name: "btnradio-kbn",
                            button: "outline-success"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` \u671F\u672B\u6C7A\u7B97 `);
                              } else {
                                return [
                                  createTextVNode(" \u671F\u672B\u6C7A\u7B97 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_RadioToggleButton, {
                            name: "btnradio-kbn",
                            button: "outline-danger"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` \u4E2D\u9593\u6C7A\u7B97 `);
                              } else {
                                return [
                                  createTextVNode(" \u4E2D\u9593\u6C7A\u7B97 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_RadioToggleButton, {
                              name: "btnradio-kbn",
                              button: "outline-success"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u671F\u672B\u6C7A\u7B97 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_RadioToggleButton, {
                              name: "btnradio-kbn",
                              button: "outline-danger"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u4E2D\u9593\u6C7A\u7B97 ")
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
                      createVNode(_component_ButtonGroup, { "aria-label": "Basic checkbox toggle button group" }, {
                        default: withCtx(() => [
                          createVNode(_component_RadioToggleButton, {
                            name: "btnradio-kbn",
                            button: "outline-success"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u671F\u672B\u6C7A\u7B97 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_RadioToggleButton, {
                            name: "btnradio-kbn",
                            button: "outline-danger"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u4E2D\u9593\u6C7A\u7B97 ")
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
                    _push4(ssrRenderComponent(_component_ButtonGroup, { "aria-label": "Basic checkbox toggle button group" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_RadioToggleButton, {
                            name: "btnradio-zei",
                            button: "outline-success"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` \u8131\u7A0E\u96C6\u8A08 `);
                              } else {
                                return [
                                  createTextVNode(" \u8131\u7A0E\u96C6\u8A08 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_RadioToggleButton, {
                            name: "btnradio-zei",
                            button: "outline-danger"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` \u7A0E\u8FBC\u96C6\u8A08 `);
                              } else {
                                return [
                                  createTextVNode(" \u7A0E\u8FBC\u96C6\u8A08 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_RadioToggleButton, {
                              name: "btnradio-zei",
                              button: "outline-success"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u8131\u7A0E\u96C6\u8A08 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_RadioToggleButton, {
                              name: "btnradio-zei",
                              button: "outline-danger"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u7A0E\u8FBC\u96C6\u8A08 ")
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
                      createVNode(_component_ButtonGroup, { "aria-label": "Basic checkbox toggle button group" }, {
                        default: withCtx(() => [
                          createVNode(_component_RadioToggleButton, {
                            name: "btnradio-zei",
                            button: "outline-success"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u8131\u7A0E\u96C6\u8A08 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_RadioToggleButton, {
                            name: "btnradio-zei",
                            button: "outline-danger"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u7A0E\u8FBC\u96C6\u8A08 ")
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
                    _push4(ssrRenderComponent(_component_ButtonGroup, { "aria-label": "Basic checkbox toggle button group" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_RadioToggleButton, {
                            name: "btnradio-syk",
                            button: "outline-success"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` \u5831\u544A\u5F0F `);
                              } else {
                                return [
                                  createTextVNode(" \u5831\u544A\u5F0F ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_RadioToggleButton, {
                            name: "btnradio-syk",
                            button: "outline-danger"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` \u611F\u60C5\u5F0F `);
                              } else {
                                return [
                                  createTextVNode(" \u611F\u60C5\u5F0F ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_RadioToggleButton, {
                              name: "btnradio-syk",
                              button: "outline-success"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u5831\u544A\u5F0F ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_RadioToggleButton, {
                              name: "btnradio-syk",
                              button: "outline-danger"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u611F\u60C5\u5F0F ")
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
                      createVNode(_component_ButtonGroup, { "aria-label": "Basic checkbox toggle button group" }, {
                        default: withCtx(() => [
                          createVNode(_component_RadioToggleButton, {
                            name: "btnradio-syk",
                            button: "outline-success"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u5831\u544A\u5F0F ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_RadioToggleButton, {
                            name: "btnradio-syk",
                            button: "outline-danger"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u611F\u60C5\u5F0F ")
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
              _push3(ssrRenderComponent(_component_CardHeader, { class: "text-center" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`A4\u7E26\u69D8\u5F0F`);
                  } else {
                    return [
                      createTextVNode("A4\u7E26\u69D8\u5F0F")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ListGroupItem, { class: "m-3" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_ButtonGroup, { "aria-label": "Basic checkbox toggle button group" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_CheckboxToggleButton, {
                            button: "outline-primary",
                            id: "A4",
                            modelValue: _ctx.A4,
                            "onUpdate:modelValue": ($event) => _ctx.A4 = $event
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` \u8CB8\u501F\u5BFE\u7167\u8868 `);
                              } else {
                                return [
                                  createTextVNode(" \u8CB8\u501F\u5BFE\u7167\u8868 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_CheckboxToggleButton, { button: "outline-primary" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` \u640D\u76CA\u8A08\u7B97\u66F8 `);
                              } else {
                                return [
                                  createTextVNode(" \u640D\u76CA\u8A08\u7B97\u66F8 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_CheckboxToggleButton, { button: "outline-primary" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` \u88FD\u9020\u539F\u4FA1\u5831\u544A\u66F8 `);
                              } else {
                                return [
                                  createTextVNode(" \u88FD\u9020\u539F\u4FA1\u5831\u544A\u66F8 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_CheckboxToggleButton, { button: "outline-primary" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` \u8CA9\u58F2\u8CBB\u30FB\u4E00\u822C\u7BA1\u7406\u8CBB\u5185\u8A33\u66F8 `);
                              } else {
                                return [
                                  createTextVNode(" \u8CA9\u58F2\u8CBB\u30FB\u4E00\u822C\u7BA1\u7406\u8CBB\u5185\u8A33\u66F8 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_CheckboxToggleButton, { button: "outline-primary" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` \u682A\u4E3B\u8CC7\u672C\u7B49\u5909\u52D5\u8A08\u7B97\u66F8 `);
                              } else {
                                return [
                                  createTextVNode(" \u682A\u4E3B\u8CC7\u672C\u7B49\u5909\u52D5\u8A08\u7B97\u66F8 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_CheckboxToggleButton, { button: "outline-primary" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` \u500B\u5225\u6CE8\u8A18\u8868 `);
                              } else {
                                return [
                                  createTextVNode(" \u500B\u5225\u6CE8\u8A18\u8868 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_CheckboxToggleButton, {
                              button: "outline-primary",
                              id: "A4",
                              modelValue: _ctx.A4,
                              "onUpdate:modelValue": ($event) => _ctx.A4 = $event
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u8CB8\u501F\u5BFE\u7167\u8868 ")
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_CheckboxToggleButton, { button: "outline-primary" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u640D\u76CA\u8A08\u7B97\u66F8 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_CheckboxToggleButton, { button: "outline-primary" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u88FD\u9020\u539F\u4FA1\u5831\u544A\u66F8 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_CheckboxToggleButton, { button: "outline-primary" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u8CA9\u58F2\u8CBB\u30FB\u4E00\u822C\u7BA1\u7406\u8CBB\u5185\u8A33\u66F8 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_CheckboxToggleButton, { button: "outline-primary" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u682A\u4E3B\u8CC7\u672C\u7B49\u5909\u52D5\u8A08\u7B97\u66F8 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_CheckboxToggleButton, { button: "outline-primary" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u500B\u5225\u6CE8\u8A18\u8868 ")
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
                      createVNode(_component_ButtonGroup, { "aria-label": "Basic checkbox toggle button group" }, {
                        default: withCtx(() => [
                          createVNode(_component_CheckboxToggleButton, {
                            button: "outline-primary",
                            id: "A4",
                            modelValue: _ctx.A4,
                            "onUpdate:modelValue": ($event) => _ctx.A4 = $event
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u8CB8\u501F\u5BFE\u7167\u8868 ")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_CheckboxToggleButton, { button: "outline-primary" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u640D\u76CA\u8A08\u7B97\u66F8 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_CheckboxToggleButton, { button: "outline-primary" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u88FD\u9020\u539F\u4FA1\u5831\u544A\u66F8 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_CheckboxToggleButton, { button: "outline-primary" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u8CA9\u58F2\u8CBB\u30FB\u4E00\u822C\u7BA1\u7406\u8CBB\u5185\u8A33\u66F8 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_CheckboxToggleButton, { button: "outline-primary" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u682A\u4E3B\u8CC7\u672C\u7B49\u5909\u52D5\u8A08\u7B97\u66F8 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_CheckboxToggleButton, { button: "outline-primary" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u500B\u5225\u6CE8\u8A18\u8868 ")
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
              _push3(ssrRenderComponent(_component_CardHeader, { class: "text-center" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`A3\u6A2A\u69D8\u5F0F`);
                  } else {
                    return [
                      createTextVNode("A3\u6A2A\u69D8\u5F0F")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ListGroupItem, { class: "m-3" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_ButtonGroup, { "aria-label": "Basic checkbox toggle button group" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_CheckboxToggleButton, {
                            button: "outline-primary",
                            id: "A3",
                            modelValue: _ctx.A3,
                            "onUpdate:modelValue": ($event) => _ctx.A3 = $event
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` \u682A\u4E3B\u8CC7\u672C\u7B49\u5909\u52D5\u8A08\u7B97\u66F8 `);
                              } else {
                                return [
                                  createTextVNode(" \u682A\u4E3B\u8CC7\u672C\u7B49\u5909\u52D5\u8A08\u7B97\u66F8 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_CheckboxToggleButton, {
                              button: "outline-primary",
                              id: "A3",
                              modelValue: _ctx.A3,
                              "onUpdate:modelValue": ($event) => _ctx.A3 = $event
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u682A\u4E3B\u8CC7\u672C\u7B49\u5909\u52D5\u8A08\u7B97\u66F8 ")
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ButtonGroup, { "aria-label": "Basic checkbox toggle button group" }, {
                        default: withCtx(() => [
                          createVNode(_component_CheckboxToggleButton, {
                            button: "outline-primary",
                            id: "A3",
                            modelValue: _ctx.A3,
                            "onUpdate:modelValue": ($event) => _ctx.A3 = $event
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u682A\u4E3B\u8CC7\u672C\u7B49\u5909\u52D5\u8A08\u7B97\u66F8 ")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
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
                    createTextVNode("\u5E74\u5EA6")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListGroupItem, { class: "m-3" }, {
                  default: withCtx(() => [
                    createVNode("select", { "aria-label": "Default select example" }, [
                      createVNode(_component_b_option, { value: "1" }, {
                        default: withCtx(() => [
                          createTextVNode(" 2023 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_b_option, { value: "2" }, {
                        default: withCtx(() => [
                          createTextVNode(" 19XX ")
                        ]),
                        _: 1
                      })
                    ])
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
                    createVNode(_component_ButtonGroup, { "aria-label": "Basic checkbox toggle button group" }, {
                      default: withCtx(() => [
                        createVNode(_component_RadioToggleButton, {
                          name: "btnradio-kbn",
                          button: "outline-success"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u671F\u672B\u6C7A\u7B97 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_RadioToggleButton, {
                          name: "btnradio-kbn",
                          button: "outline-danger"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u4E2D\u9593\u6C7A\u7B97 ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
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
                    createVNode(_component_ButtonGroup, { "aria-label": "Basic checkbox toggle button group" }, {
                      default: withCtx(() => [
                        createVNode(_component_RadioToggleButton, {
                          name: "btnradio-zei",
                          button: "outline-success"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u8131\u7A0E\u96C6\u8A08 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_RadioToggleButton, {
                          name: "btnradio-zei",
                          button: "outline-danger"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u7A0E\u8FBC\u96C6\u8A08 ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
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
                    createVNode(_component_ButtonGroup, { "aria-label": "Basic checkbox toggle button group" }, {
                      default: withCtx(() => [
                        createVNode(_component_RadioToggleButton, {
                          name: "btnradio-syk",
                          button: "outline-success"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u5831\u544A\u5F0F ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_RadioToggleButton, {
                          name: "btnradio-syk",
                          button: "outline-danger"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u611F\u60C5\u5F0F ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_CardHeader, { class: "text-center" }, {
                  default: withCtx(() => [
                    createTextVNode("A4\u7E26\u69D8\u5F0F")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListGroupItem, { class: "m-3" }, {
                  default: withCtx(() => [
                    createVNode(_component_ButtonGroup, { "aria-label": "Basic checkbox toggle button group" }, {
                      default: withCtx(() => [
                        createVNode(_component_CheckboxToggleButton, {
                          button: "outline-primary",
                          id: "A4",
                          modelValue: _ctx.A4,
                          "onUpdate:modelValue": ($event) => _ctx.A4 = $event
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u8CB8\u501F\u5BFE\u7167\u8868 ")
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_CheckboxToggleButton, { button: "outline-primary" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u640D\u76CA\u8A08\u7B97\u66F8 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_CheckboxToggleButton, { button: "outline-primary" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u88FD\u9020\u539F\u4FA1\u5831\u544A\u66F8 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_CheckboxToggleButton, { button: "outline-primary" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u8CA9\u58F2\u8CBB\u30FB\u4E00\u822C\u7BA1\u7406\u8CBB\u5185\u8A33\u66F8 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_CheckboxToggleButton, { button: "outline-primary" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u682A\u4E3B\u8CC7\u672C\u7B49\u5909\u52D5\u8A08\u7B97\u66F8 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_CheckboxToggleButton, { button: "outline-primary" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u500B\u5225\u6CE8\u8A18\u8868 ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_CardHeader, { class: "text-center" }, {
                  default: withCtx(() => [
                    createTextVNode("A3\u6A2A\u69D8\u5F0F")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListGroupItem, { class: "m-3" }, {
                  default: withCtx(() => [
                    createVNode(_component_ButtonGroup, { "aria-label": "Basic checkbox toggle button group" }, {
                      default: withCtx(() => [
                        createVNode(_component_CheckboxToggleButton, {
                          button: "outline-primary",
                          id: "A3",
                          modelValue: _ctx.A3,
                          "onUpdate:modelValue": ($event) => _ctx.A3 = $event
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u682A\u4E3B\u8CC7\u672C\u7B49\u5909\u52D5\u8A08\u7B97\u66F8 ")
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
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
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("h1", null, "\u30EC\u30A4\u30F3\u30DC\u30FC\u6C7A\u7B97\u5831\u544A\u66F8"),
            createVNode(_component_Card, { class: "text-center m-4" }, {
              default: withCtx(() => [
                createVNode(_component_CardHeader, { class: "text-center" }, {
                  default: withCtx(() => [
                    createTextVNode("\u5E74\u5EA6")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListGroupItem, { class: "m-3" }, {
                  default: withCtx(() => [
                    createVNode("select", { "aria-label": "Default select example" }, [
                      createVNode(_component_b_option, { value: "1" }, {
                        default: withCtx(() => [
                          createTextVNode(" 2023 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_b_option, { value: "2" }, {
                        default: withCtx(() => [
                          createTextVNode(" 19XX ")
                        ]),
                        _: 1
                      })
                    ])
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
                    createVNode(_component_ButtonGroup, { "aria-label": "Basic checkbox toggle button group" }, {
                      default: withCtx(() => [
                        createVNode(_component_RadioToggleButton, {
                          name: "btnradio-kbn",
                          button: "outline-success"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u671F\u672B\u6C7A\u7B97 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_RadioToggleButton, {
                          name: "btnradio-kbn",
                          button: "outline-danger"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u4E2D\u9593\u6C7A\u7B97 ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
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
                    createVNode(_component_ButtonGroup, { "aria-label": "Basic checkbox toggle button group" }, {
                      default: withCtx(() => [
                        createVNode(_component_RadioToggleButton, {
                          name: "btnradio-zei",
                          button: "outline-success"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u8131\u7A0E\u96C6\u8A08 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_RadioToggleButton, {
                          name: "btnradio-zei",
                          button: "outline-danger"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u7A0E\u8FBC\u96C6\u8A08 ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
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
                    createVNode(_component_ButtonGroup, { "aria-label": "Basic checkbox toggle button group" }, {
                      default: withCtx(() => [
                        createVNode(_component_RadioToggleButton, {
                          name: "btnradio-syk",
                          button: "outline-success"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u5831\u544A\u5F0F ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_RadioToggleButton, {
                          name: "btnradio-syk",
                          button: "outline-danger"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u611F\u60C5\u5F0F ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_CardHeader, { class: "text-center" }, {
                  default: withCtx(() => [
                    createTextVNode("A4\u7E26\u69D8\u5F0F")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListGroupItem, { class: "m-3" }, {
                  default: withCtx(() => [
                    createVNode(_component_ButtonGroup, { "aria-label": "Basic checkbox toggle button group" }, {
                      default: withCtx(() => [
                        createVNode(_component_CheckboxToggleButton, {
                          button: "outline-primary",
                          id: "A4",
                          modelValue: _ctx.A4,
                          "onUpdate:modelValue": ($event) => _ctx.A4 = $event
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u8CB8\u501F\u5BFE\u7167\u8868 ")
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_CheckboxToggleButton, { button: "outline-primary" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u640D\u76CA\u8A08\u7B97\u66F8 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_CheckboxToggleButton, { button: "outline-primary" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u88FD\u9020\u539F\u4FA1\u5831\u544A\u66F8 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_CheckboxToggleButton, { button: "outline-primary" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u8CA9\u58F2\u8CBB\u30FB\u4E00\u822C\u7BA1\u7406\u8CBB\u5185\u8A33\u66F8 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_CheckboxToggleButton, { button: "outline-primary" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u682A\u4E3B\u8CC7\u672C\u7B49\u5909\u52D5\u8A08\u7B97\u66F8 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_CheckboxToggleButton, { button: "outline-primary" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u500B\u5225\u6CE8\u8A18\u8868 ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_CardHeader, { class: "text-center" }, {
                  default: withCtx(() => [
                    createTextVNode("A3\u6A2A\u69D8\u5F0F")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListGroupItem, { class: "m-3" }, {
                  default: withCtx(() => [
                    createVNode(_component_ButtonGroup, { "aria-label": "Basic checkbox toggle button group" }, {
                      default: withCtx(() => [
                        createVNode(_component_CheckboxToggleButton, {
                          button: "outline-primary",
                          id: "A3",
                          modelValue: _ctx.A3,
                          "onUpdate:modelValue": ($event) => _ctx.A3 = $event
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u682A\u4E3B\u8CC7\u672C\u7B49\u5909\u52D5\u8A08\u7B97\u66F8 ")
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/demo/Darkness_KessanHoukoku_MARK_V1_mp5/KessanHoukoku.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const KessanHoukoku = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { KessanHoukoku as default };
//# sourceMappingURL=KessanHoukoku-2839ff14.mjs.map
