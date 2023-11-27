import { _ as __nuxt_component_0 } from './container-f7a213c2.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './col-9d3255d6.mjs';
import { withCtx, createTextVNode, createVNode, useSSRContext, defineComponent, ref, h, inject, computed, watch, nextTick } from 'vue';
import { _ as _export_sfc, h as hProps, o as onClickOutside, b as addProp } from '../server.mjs';
import { B as BlockProps, u as useBlock } from './useBlock-d3cb816a.mjs';
import { D as DropdownProps, u as useDropdown } from './useDropdown-8c0cf504.mjs';
import { A as AnchorButtonProps, T as ToggleProps, a as useAnchorButton, g as useToggle, I as IDProps, e as ActiveProps, u as useID, f as useActive, j as useFloating } from '../../floating-ui.vue.esm.mjs';
import { u as useScrollSpyItem, B as BsLink } from './bslink-52f5ea1a.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { autoUpdate, flip, shift, offset } from '@floating-ui/dom';
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
import './nuxt-link-0dc4ede6.mjs';

const __nuxt_component_3 = /* @__PURE__ */ defineComponent({
  name: "BsDropdown",
  props: {
    ...BlockProps,
    // ...IDProps,
    ...DropdownProps,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const dropdown = useDropdown(props, context, elementRef);
    const current = {
      class: {
        dropdown: true
      },
      ref: elementRef
    };
    return () => h(
      props.tag,
      hProps(block, dropdown, current),
      // current は最後に
      context.slots
    );
  }
});
const __nuxt_component_4 = /* @__PURE__ */ defineComponent({
  name: "BsDropdownToggle",
  props: {
    ...BlockProps,
    ...AnchorButtonProps,
    ...ToggleProps,
    // ...IDProps,
    tag: {
      type: String,
      default: "a"
    },
    toggle: {
      type: String,
      default: "dropdown"
    }
  },
  setup(props, context) {
    const elementRef = inject("toggleRef.dropdown", ref());
    const block = useBlock(props);
    const anchorButton = useAnchorButton(props);
    const toggle = useToggle(props);
    const current = {
      ref: elementRef
    };
    return () => h(
      anchorButton.tag,
      hProps(current, toggle, anchorButton, block),
      context.slots
    );
  }
});
const DropdownMenuProps = {
  floating: {
    type: Object
  },
  dark: {
    type: Boolean
  },
  autoClose: {
    type: [Boolean, String],
    default: true
  },
  alignment: {
    type: String,
    default: "start"
  },
  offset: {
    type: String
  },
  reference: {
    type: String
  }
};
function useDropdownMenu(props, elementRef) {
  var _a;
  const tipPlacement = ref((_a = props.floating) == null ? void 0 : _a.placement);
  const isShow = ref(false);
  const active = inject("active.dropdown", ref(false));
  const toggleRef = inject("toggleRef.dropdown", ref());
  const placement = inject("placement.dropdown", ref(""));
  const floatingPlace = computed(() => {
    switch (placement.value) {
      case "dropup":
        if (props.alignment == "end") {
          return `top-end`;
        } else {
          return `top-start`;
        }
      case "dropend":
        if (props.alignment == "end") {
          return `right-end`;
        } else {
          return `right-start`;
        }
      case "dropstart":
        if (props.alignment == "end") {
          return `left-end`;
        } else {
          return `left-start`;
        }
      default:
        if (props.alignment == "end") {
          return `bottom-end`;
        } else {
          return `bottom-start`;
        }
    }
  });
  const { floatingStyles } = useFloating(toggleRef, elementRef, {
    placement: floatingPlace.value,
    whileElementsMounted: autoUpdate,
    middleware: [
      flip(),
      shift(),
      offset(2)
    ]
  });
  if ([true, "", "outside", "true"].includes(props.autoClose)) {
    onClickOutside(elementRef, (_event) => {
      if (active.value) {
        active.value = false;
        _event.stopPropagation();
      }
    });
  }
  watch(active, (value) => {
    if (value) {
      show();
    } else {
      hide();
    }
  });
  const show = async () => {
    await nextTick();
    isShow.value = true;
  };
  const hide = async () => {
    isShow.value = false;
  };
  return {
    class: computed(() => {
      return {
        "dropdown-menu": true,
        "dropdown-menu-dark": props.dark,
        show: isShow.value
      };
    }),
    style: computed(() => {
      if (toggleRef.value) {
        return floatingStyles.value;
      } else {
        return {};
      }
    }),
    attr: computed(() => {
      return {
        ...addProp(active.value, "data-popper-placement", tipPlacement.value || "")
      };
    }),
    state: {
      useTeleport: false,
      //buttonID.value ? true : false,
      tipPlacement,
      isShow
    }
  };
}
const __nuxt_component_5 = /* @__PURE__ */ defineComponent({
  name: "BsDropdownMenu",
  props: {
    ...BlockProps,
    ...DropdownMenuProps,
    tag: {
      type: String,
      default: "ul"
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const dropdownMenu = useDropdownMenu(props, elementRef);
    const current = {
      ref: elementRef
    };
    return () => {
      return h(props.tag, hProps(current, block, dropdownMenu), context.slots);
    };
  }
});
const __nuxt_component_6 = /* @__PURE__ */ defineComponent({
  name: "BsDropdownItem",
  props: {
    ...BlockProps,
    ...IDProps,
    ...ActiveProps,
    ...AnchorButtonProps,
    ...ToggleProps
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const id = useID(props, "dropdown-item");
    const spyItem = useScrollSpyItem(props, elementRef);
    const active = useActive(props, "nav", elementRef);
    const anchorButton = useAnchorButton(props);
    const toggle = useToggle(props);
    return () => h(
      "li",
      hProps(block),
      h(
        BsLink,
        hProps(
          {
            class: {
              "dropdown-item": true
            },
            ref: elementRef
          },
          anchorButton,
          active,
          spyItem,
          toggle,
          id
        ),
        context.slots.default
      )
    );
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
//# sourceMappingURL=soukantei-25df5970.mjs.map
