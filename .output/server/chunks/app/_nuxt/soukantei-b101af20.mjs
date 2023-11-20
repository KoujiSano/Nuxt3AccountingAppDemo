import { _ as __nuxt_component_0 } from './container-80f5844a.mjs';
import { withCtx, createTextVNode, createVNode, useSSRContext, defineComponent, h, computed } from 'vue';
import { _ as _export_sfc, h as hProps, t as addClassNames } from '../server.mjs';
import { isString } from 'lodash-es';
import { B as BlockProps, u as useBlock } from './useBlock-07c4f4ed.mjs';
import { _ as __nuxt_component_3, a as __nuxt_component_4, b as __nuxt_component_5, c as __nuxt_component_6 } from './dropdownItem-0dad3861.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
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
import './useDropdown-b5e89e2e.mjs';
import './useItemsActive-ba3b63f7.mjs';
import './bslink-2075abf3.mjs';
import '@floating-ui/dom';
import './nuxt-link-8eeb725a.mjs';

const GridRowProps = {
  ...BlockProps,
  auto: {
    type: Boolean
  },
  columns: {
    type: String
  },
  align: {
    type: String
  },
  rowreverse: {
    type: [Boolean]
  },
  gutter: {
    type: [Number, String]
  }
};
function useGridRow(props) {
  const block = useBlock(props);
  return {
    class: computed(() => {
      return {
        row: props.row,
        "row-cols-auto": props.auto,
        "flex-row-reverse": props.rowreverse,
        [`align-${props.align}`]: props.align,
        ...addClassNames(props.columns, (n) => `row-cols-${n}`),
        ...addClassNames(
          props.gutter,
          (n) => `g${isString(props.gutter) && ["x", "y"].indexOf(n.substring(0, 1)) > -1 ? `${n}` : `-${n}`}`
        ),
        ...block.class.value
      };
    }),
    style: computed(() => {
      return {
        ...block.style.value
      };
    })
  };
}
const __nuxt_component_1 = /* @__PURE__ */ defineComponent({
  name: "BsGridRow",
  props: {
    ...GridRowProps,
    tag: {
      type: String,
      default: "div"
    },
    row: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    const gridRow = useGridRow(props);
    return () => h(props.tag, hProps(gridRow), context.slots);
  }
});
const __nuxt_component_2 = /* @__PURE__ */ defineComponent({
  name: "BsGridCol",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "div"
    },
    col: {
      type: [Boolean, String, Number],
      default: true
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    return () => h(props.tag, hProps(block), context.slots);
  }
});
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Container = __nuxt_component_0;
  const _component_Row = __nuxt_component_1;
  const _component_Col = __nuxt_component_2;
  const _component_Dropdown = __nuxt_component_3;
  const _component_DropdownToggle = __nuxt_component_4;
  const _component_DropdownMenu = __nuxt_component_5;
  const _component_DropdownItem = __nuxt_component_6;
  _push(ssrRenderComponent(_component_Container, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Row, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Col, { col: "6 md-3" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` \u4F1A\u8A08\u5358\u4F4D `);
                  } else {
                    return [
                      createTextVNode(" \u4F1A\u8A08\u5358\u4F4D ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_Col, { col: "6 md-3" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_Dropdown, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_DropdownToggle, { button: "secondary" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` \u672C\u793E `);
                              } else {
                                return [
                                  createTextVNode(" \u672C\u793E ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_DropdownMenu, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_DropdownItem, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` \u672C\u793E `);
                                    } else {
                                      return [
                                        createTextVNode(" \u672C\u793E ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_DropdownItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u672C\u793E ")
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
                            createVNode(_component_DropdownToggle, { button: "secondary" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u672C\u793E ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_DropdownMenu, null, {
                              default: withCtx(() => [
                                createVNode(_component_DropdownItem, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u672C\u793E ")
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
                      createVNode(_component_Dropdown, null, {
                        default: withCtx(() => [
                          createVNode(_component_DropdownToggle, { button: "secondary" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u672C\u793E ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DropdownMenu, null, {
                            default: withCtx(() => [
                              createVNode(_component_DropdownItem, null, {
                                default: withCtx(() => [
                                  createTextVNode(" \u672C\u793E ")
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
              _push3(ssrRenderComponent(_component_Col, { col: "6 md-3" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` \u90E8\u9580 `);
                  } else {
                    return [
                      createTextVNode(" \u90E8\u9580 ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_Col, { col: "6 md-3" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_Dropdown, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_DropdownToggle, { button: "secondary" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` \u6307\u5B9A\u306A\u3057 `);
                              } else {
                                return [
                                  createTextVNode(" \u6307\u5B9A\u306A\u3057 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_DropdownMenu, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_DropdownItem, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` \u6307\u5B9A\u306A\u3057 `);
                                    } else {
                                      return [
                                        createTextVNode(" \u6307\u5B9A\u306A\u3057 ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_DropdownItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u6307\u5B9A\u306A\u3057 ")
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
                            createVNode(_component_DropdownToggle, { button: "secondary" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u6307\u5B9A\u306A\u3057 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_DropdownMenu, null, {
                              default: withCtx(() => [
                                createVNode(_component_DropdownItem, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u6307\u5B9A\u306A\u3057 ")
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
                      createVNode(_component_Dropdown, null, {
                        default: withCtx(() => [
                          createVNode(_component_DropdownToggle, { button: "secondary" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u6307\u5B9A\u306A\u3057 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DropdownMenu, null, {
                            default: withCtx(() => [
                              createVNode(_component_DropdownItem, null, {
                                default: withCtx(() => [
                                  createTextVNode(" \u6307\u5B9A\u306A\u3057 ")
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
                createVNode(_component_Col, { col: "6 md-3" }, {
                  default: withCtx(() => [
                    createTextVNode(" \u4F1A\u8A08\u5358\u4F4D ")
                  ]),
                  _: 1
                }),
                createVNode(_component_Col, { col: "6 md-3" }, {
                  default: withCtx(() => [
                    createVNode(_component_Dropdown, null, {
                      default: withCtx(() => [
                        createVNode(_component_DropdownToggle, { button: "secondary" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u672C\u793E ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DropdownMenu, null, {
                          default: withCtx(() => [
                            createVNode(_component_DropdownItem, null, {
                              default: withCtx(() => [
                                createTextVNode(" \u672C\u793E ")
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
                createVNode(_component_Col, { col: "6 md-3" }, {
                  default: withCtx(() => [
                    createTextVNode(" \u90E8\u9580 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_Col, { col: "6 md-3" }, {
                  default: withCtx(() => [
                    createVNode(_component_Dropdown, null, {
                      default: withCtx(() => [
                        createVNode(_component_DropdownToggle, { button: "secondary" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u6307\u5B9A\u306A\u3057 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DropdownMenu, null, {
                          default: withCtx(() => [
                            createVNode(_component_DropdownItem, null, {
                              default: withCtx(() => [
                                createTextVNode(" \u6307\u5B9A\u306A\u3057 ")
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
        _push2(ssrRenderComponent(_component_Row, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Col, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` \u52D8\u5B9A\u9805\u76EE `);
                  } else {
                    return [
                      createTextVNode(" \u52D8\u5B9A\u9805\u76EE ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_Col, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_Dropdown, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_DropdownToggle, { button: "secondary" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` 100\u73FE\u91D1 `);
                              } else {
                                return [
                                  createTextVNode(" 100\u73FE\u91D1 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_DropdownMenu, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_DropdownItem, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` 100\u73FE\u91D1 `);
                                    } else {
                                      return [
                                        createTextVNode(" 100\u73FE\u91D1 ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_DropdownItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" 100\u73FE\u91D1 ")
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
                            createVNode(_component_DropdownToggle, { button: "secondary" }, {
                              default: withCtx(() => [
                                createTextVNode(" 100\u73FE\u91D1 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_DropdownMenu, null, {
                              default: withCtx(() => [
                                createVNode(_component_DropdownItem, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" 100\u73FE\u91D1 ")
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
                      createVNode(_component_Dropdown, null, {
                        default: withCtx(() => [
                          createVNode(_component_DropdownToggle, { button: "secondary" }, {
                            default: withCtx(() => [
                              createTextVNode(" 100\u73FE\u91D1 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DropdownMenu, null, {
                            default: withCtx(() => [
                              createVNode(_component_DropdownItem, null, {
                                default: withCtx(() => [
                                  createTextVNode(" 100\u73FE\u91D1 ")
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
              _push3(ssrRenderComponent(_component_Col, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<a${_scopeId3}> \u304B\u3089 </a>`);
                  } else {
                    return [
                      createVNode("a", null, " \u304B\u3089 ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_Col, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_Dropdown, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_DropdownToggle, { button: "secondary" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` 100\u73FE\u91D1 `);
                              } else {
                                return [
                                  createTextVNode(" 100\u73FE\u91D1 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_DropdownMenu, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_DropdownItem, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` 100\u73FE\u91D1 `);
                                    } else {
                                      return [
                                        createTextVNode(" 100\u73FE\u91D1 ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_DropdownItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" 100\u73FE\u91D1 ")
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
                            createVNode(_component_DropdownToggle, { button: "secondary" }, {
                              default: withCtx(() => [
                                createTextVNode(" 100\u73FE\u91D1 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_DropdownMenu, null, {
                              default: withCtx(() => [
                                createVNode(_component_DropdownItem, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" 100\u73FE\u91D1 ")
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
                      createVNode(_component_Dropdown, null, {
                        default: withCtx(() => [
                          createVNode(_component_DropdownToggle, { button: "secondary" }, {
                            default: withCtx(() => [
                              createTextVNode(" 100\u73FE\u91D1 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DropdownMenu, null, {
                            default: withCtx(() => [
                              createVNode(_component_DropdownItem, null, {
                                default: withCtx(() => [
                                  createTextVNode(" 100\u73FE\u91D1 ")
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
                createVNode(_component_Col, null, {
                  default: withCtx(() => [
                    createTextVNode(" \u52D8\u5B9A\u9805\u76EE ")
                  ]),
                  _: 1
                }),
                createVNode(_component_Col, null, {
                  default: withCtx(() => [
                    createVNode(_component_Dropdown, null, {
                      default: withCtx(() => [
                        createVNode(_component_DropdownToggle, { button: "secondary" }, {
                          default: withCtx(() => [
                            createTextVNode(" 100\u73FE\u91D1 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DropdownMenu, null, {
                          default: withCtx(() => [
                            createVNode(_component_DropdownItem, null, {
                              default: withCtx(() => [
                                createTextVNode(" 100\u73FE\u91D1 ")
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
                createVNode(_component_Col, null, {
                  default: withCtx(() => [
                    createVNode("a", null, " \u304B\u3089 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_Col, null, {
                  default: withCtx(() => [
                    createVNode(_component_Dropdown, null, {
                      default: withCtx(() => [
                        createVNode(_component_DropdownToggle, { button: "secondary" }, {
                          default: withCtx(() => [
                            createTextVNode(" 100\u73FE\u91D1 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DropdownMenu, null, {
                          default: withCtx(() => [
                            createVNode(_component_DropdownItem, null, {
                              default: withCtx(() => [
                                createTextVNode(" 100\u73FE\u91D1 ")
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
        _push2(ssrRenderComponent(_component_Row, { "justify-content": "start" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Col, { col: "4" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` \u5E74\u5EA6 `);
                  } else {
                    return [
                      createTextVNode(" \u5E74\u5EA6 ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_Col, { col: "6" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_Dropdown, {
                      display: "grid",
                      gap: "2"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_DropdownToggle, { button: "secondary" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` 2023 `);
                              } else {
                                return [
                                  createTextVNode(" 2023 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_DropdownMenu, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_DropdownItem, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` 2023 `);
                                    } else {
                                      return [
                                        createTextVNode(" 2023 ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_DropdownItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" 2023 ")
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
                            createVNode(_component_DropdownToggle, { button: "secondary" }, {
                              default: withCtx(() => [
                                createTextVNode(" 2023 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_DropdownMenu, null, {
                              default: withCtx(() => [
                                createVNode(_component_DropdownItem, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" 2023 ")
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
                      createVNode(_component_Dropdown, {
                        display: "grid",
                        gap: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_DropdownToggle, { button: "secondary" }, {
                            default: withCtx(() => [
                              createTextVNode(" 2023 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DropdownMenu, null, {
                            default: withCtx(() => [
                              createVNode(_component_DropdownItem, null, {
                                default: withCtx(() => [
                                  createTextVNode(" 2023 ")
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
                createVNode(_component_Col, { col: "4" }, {
                  default: withCtx(() => [
                    createTextVNode(" \u5E74\u5EA6 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_Col, { col: "6" }, {
                  default: withCtx(() => [
                    createVNode(_component_Dropdown, {
                      display: "grid",
                      gap: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DropdownToggle, { button: "secondary" }, {
                          default: withCtx(() => [
                            createTextVNode(" 2023 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DropdownMenu, null, {
                          default: withCtx(() => [
                            createVNode(_component_DropdownItem, null, {
                              default: withCtx(() => [
                                createTextVNode(" 2023 ")
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
          createVNode(_component_Row, null, {
            default: withCtx(() => [
              createVNode(_component_Col, { col: "6 md-3" }, {
                default: withCtx(() => [
                  createTextVNode(" \u4F1A\u8A08\u5358\u4F4D ")
                ]),
                _: 1
              }),
              createVNode(_component_Col, { col: "6 md-3" }, {
                default: withCtx(() => [
                  createVNode(_component_Dropdown, null, {
                    default: withCtx(() => [
                      createVNode(_component_DropdownToggle, { button: "secondary" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u672C\u793E ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DropdownMenu, null, {
                        default: withCtx(() => [
                          createVNode(_component_DropdownItem, null, {
                            default: withCtx(() => [
                              createTextVNode(" \u672C\u793E ")
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
              createVNode(_component_Col, { col: "6 md-3" }, {
                default: withCtx(() => [
                  createTextVNode(" \u90E8\u9580 ")
                ]),
                _: 1
              }),
              createVNode(_component_Col, { col: "6 md-3" }, {
                default: withCtx(() => [
                  createVNode(_component_Dropdown, null, {
                    default: withCtx(() => [
                      createVNode(_component_DropdownToggle, { button: "secondary" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u6307\u5B9A\u306A\u3057 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DropdownMenu, null, {
                        default: withCtx(() => [
                          createVNode(_component_DropdownItem, null, {
                            default: withCtx(() => [
                              createTextVNode(" \u6307\u5B9A\u306A\u3057 ")
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
          }),
          createVNode(_component_Row, null, {
            default: withCtx(() => [
              createVNode(_component_Col, null, {
                default: withCtx(() => [
                  createTextVNode(" \u52D8\u5B9A\u9805\u76EE ")
                ]),
                _: 1
              }),
              createVNode(_component_Col, null, {
                default: withCtx(() => [
                  createVNode(_component_Dropdown, null, {
                    default: withCtx(() => [
                      createVNode(_component_DropdownToggle, { button: "secondary" }, {
                        default: withCtx(() => [
                          createTextVNode(" 100\u73FE\u91D1 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DropdownMenu, null, {
                        default: withCtx(() => [
                          createVNode(_component_DropdownItem, null, {
                            default: withCtx(() => [
                              createTextVNode(" 100\u73FE\u91D1 ")
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
              createVNode(_component_Col, null, {
                default: withCtx(() => [
                  createVNode("a", null, " \u304B\u3089 ")
                ]),
                _: 1
              }),
              createVNode(_component_Col, null, {
                default: withCtx(() => [
                  createVNode(_component_Dropdown, null, {
                    default: withCtx(() => [
                      createVNode(_component_DropdownToggle, { button: "secondary" }, {
                        default: withCtx(() => [
                          createTextVNode(" 100\u73FE\u91D1 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DropdownMenu, null, {
                        default: withCtx(() => [
                          createVNode(_component_DropdownItem, null, {
                            default: withCtx(() => [
                              createTextVNode(" 100\u73FE\u91D1 ")
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
          }),
          createVNode(_component_Row, { "justify-content": "start" }, {
            default: withCtx(() => [
              createVNode(_component_Col, { col: "4" }, {
                default: withCtx(() => [
                  createTextVNode(" \u5E74\u5EA6 ")
                ]),
                _: 1
              }),
              createVNode(_component_Col, { col: "6" }, {
                default: withCtx(() => [
                  createVNode(_component_Dropdown, {
                    display: "grid",
                    gap: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_DropdownToggle, { button: "secondary" }, {
                        default: withCtx(() => [
                          createTextVNode(" 2023 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DropdownMenu, null, {
                        default: withCtx(() => [
                          createVNode(_component_DropdownItem, null, {
                            default: withCtx(() => [
                              createTextVNode(" 2023 ")
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
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/demo/Whiteshining_SeikisiSoukanteiMotocho_XxPROxX_Mrk2_mp4/soukantei.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const soukantei = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { soukantei as default };
//# sourceMappingURL=soukantei-b101af20.mjs.map
