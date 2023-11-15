import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_3 } from './listGroupItem-10b019e5.mjs';
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext, defineComponent, ref, h, provide, inject, toRef, watch, computed as computed$1, nextTick } from 'vue';
import { B as BlockProps, u as useBlock, I as InlineProps, a as useInline } from './useBlock-07c4f4ed.mjs';
import { _ as _export_sfc, h as hProps, f as addProp, j as isPropDefined, g as useEventBus, i as unrefElement } from '../server.mjs';
import { I as IDProps, f as useEvent, g as useIDItem, e as useIDRef, i as injectID } from './useItemsActive-ba3b63f7.mjs';
import { _ as __nuxt_component_3$1, a as __nuxt_component_4, b as __nuxt_component_5, c as __nuxt_component_6 } from './dropdownItem-0dad3861.mjs';
import { uniqueId, isString, isBoolean } from 'lodash-es';
import { _ as __nuxt_component_11 } from './button-5e36cf2a.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import './bslink-2075abf3.mjs';
import '@floating-ui/dom';
import './nuxt-link-8eeb725a.mjs';

const CurrentProps = {
  current: {
    type: String,
    default: ""
  },
  parent: {
    type: Boolean,
    default: true
  }
};
function useItemsCurrent(props, context, elementRef, eventSuffix) {
  if (!props.parent) {
    return {};
  }
  const parent = toRef(props, "parent");
  const current = ref(props.current || "");
  const { exposeState } = useEvent(props, elementRef, eventSuffix);
  exposeState({ current, parent });
  watch(current, () => {
    context.emit("currentChanged", current.value);
  });
  watch(() => props.current, () => {
    if (props.current) {
      current.value = props.current;
    }
  });
  return {
    attr: computed$1(() => {
      return {
        "data-bv-current": current.value
      };
    })
  };
}
function useEventTarget(props, elementRef) {
  const eid = useIDRef(props);
  const exposeEventBus = computed$1(() => useEventBus(`expose_${eid.value}`));
  function emit(event, payload) {
    exposeEventBus.value.emit(event, payload);
  }
  return {
    emit
  };
}
const ScrollSpyProps = {
  spy: {
    type: String
  }
};
function useScrollSpy(props, context, elementRef) {
  if (!props.spy) {
    return {};
  }
  const items = ref([]);
  const { exposeState, expose } = useEvent(props, elementRef, "spy");
  const { emit } = useEventTarget(
    props
  );
  const current = ref("");
  const refresh = async () => {
    if (items.value.length == 0 || !props.spy) {
      return;
    }
    await nextTick();
    const selector = items.value.map((item) => `#${item}[data-bv-spy-visible='true']`).join(",");
    const element = unrefElement(elementRef);
    const dom = element == null ? void 0 : element.querySelector(selector);
    if (dom) {
      current.value = dom.id;
      emit("current", dom.id);
      context.emit("currentChanged", dom.id);
      await nextTick();
    } else {
      current.value = "";
    }
  };
  const registerItem = async (id) => {
    items.value.push(id);
  };
  const method = expose({
    refresh,
    registerItem
  });
  exposeState({
    spy: ref(props.spy)
  });
  return {
    method,
    attr: computed(() => {
      return {
        "data-debug-spy-current": current.value
      };
    })
  };
}
const __nuxt_component_2 = /* @__PURE__ */ defineComponent({
  name: "BsListGroup",
  props: {
    ...BlockProps,
    ...CurrentProps,
    // ...IDProps,
    ...ScrollSpyProps,
    tag: {
      type: String,
      default: "div"
    },
    row: {
      type: Boolean,
      default: true
    },
    flush: {
      type: Boolean
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const itemsCurrent = useItemsCurrent(props, context, elementRef, "list");
    const spy = useScrollSpy(
      props,
      context,
      elementRef
      /*, "list"*/
    );
    const current = {
      class: {
        "list-group": true,
        "list-group-flush": props.flush
      },
      ref: elementRef
    };
    return () => h(props.tag, hProps(current, block, itemsCurrent, spy), context.slots);
  }
});
const ForProps = {
  for: {
    type: String
  }
};
function useFor(props, options) {
  const id = props.for || injectID(options);
  const useDOM = ref(id ? true : false);
  return {
    class: {},
    attr: computed$1(() => {
      return {
        ...addProp(id, "for", id)
      };
    }),
    state: {
      id,
      useDOM
    }
  };
}
function provideFormLabel() {
  provide("id.formLabel", uniqueId());
}
function useFormLabel(props) {
  return useFor(props, { name: "formLabel" });
}
function useFormItem(props) {
  return useIDItem(props, { name: "formLabel" });
}
const __nuxt_component_8 = /* @__PURE__ */ defineComponent({
  name: "BsFormCheck",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "div"
    },
    inline: {
      type: Boolean
    },
    switch: {
      type: Boolean
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: {
        "form-check": true,
        "form-check-inline": props.inline,
        "form-switch": props.switch
      }
    };
    provide("swich", props.switch);
    provideFormLabel();
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
const ValidProps = {
  valid: {
    type: [Boolean, String]
    //true, false, invalid , valid , is-invalid, is-valid
  }
};
function useValid(props) {
  const valid = ref(void 0);
  if (isPropDefined(props.valid)) {
    if (isString(props.valid) && ["valid", "is-valid", "true", ""].includes(props.valid)) {
      valid.value = true;
    } else if (isBoolean(props.valid) && props.valid) {
      valid.value = true;
    } else {
      valid.value = false;
    }
  }
  return {
    class: computed$1(() => {
      return {
        [`is-${valid.value ? "valid" : "invalid"}`]: valid.value != void 0
      };
    })
  };
}
const __nuxt_component_9 = /* @__PURE__ */ defineComponent({
  name: "BsFormCheckInput",
  props: {
    ...InlineProps,
    ...IDProps,
    ...ValidProps,
    tag: {
      type: String,
      default: "input"
    },
    type: {
      type: String,
      default: "checkbox"
    }
  },
  setup(props, context) {
    const inline = useInline(props);
    const formItem = useFormItem(props);
    const valid = useValid(props);
    const isSwitch = inject("switch", false);
    const current = {
      class: {
        [`form-check-input`]: true
      },
      attr: {
        type: props.type,
        ...addProp(isSwitch, "role", "switch")
      }
    };
    return () => h(props.tag, hProps(current, formItem, valid, inline), context.slots);
  }
});
const __nuxt_component_10 = /* @__PURE__ */ defineComponent({
  name: "BsFormCheckLabel",
  props: {
    ...InlineProps,
    ...ForProps,
    tag: {
      type: String,
      default: "label"
    }
  },
  setup(props, context) {
    const inline = useInline(props);
    const formLabel = useFormLabel(props);
    const current = {
      class: {
        "form-check-label": true
      }
    };
    return () => h(props.tag, hProps(current, inline, formLabel), context.slots);
  }
});
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Card = __nuxt_component_0;
  const _component_CardHeader = __nuxt_component_1;
  const _component_ListGroup = __nuxt_component_2;
  const _component_ListGroupItem = __nuxt_component_3;
  const _component_Dropdown = __nuxt_component_3$1;
  const _component_DropdownToggle = __nuxt_component_4;
  const _component_DropdownMenu = __nuxt_component_5;
  const _component_DropdownItem = __nuxt_component_6;
  const _component_BFormCheck = __nuxt_component_8;
  const _component_BFormCheckInput = __nuxt_component_9;
  const _component_BFormCheckLabel = __nuxt_component_10;
  const _component_b_button = __nuxt_component_11;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container p-4" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Card, { style: { "width": "auto" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CardHeader, { class: "text-center" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u4F1A\u8A08\u5358\u4F4D`);
            } else {
              return [
                createTextVNode("\u4F1A\u8A08\u5358\u4F4D")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ListGroup, {
          flush: "",
          class: "text-center"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_ListGroupItem, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_Dropdown, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_DropdownToggle, { button: "light" }, {
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
                                _push6(ssrRenderComponent(_component_DropdownItem, { href: "#" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`\u672C\u793E`);
                                    } else {
                                      return [
                                        createTextVNode("\u672C\u793E")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_DropdownItem, { href: "#" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u672C\u793E")
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
                            createVNode(_component_DropdownToggle, { button: "light" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u672C\u793E ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_DropdownMenu, null, {
                              default: withCtx(() => [
                                createVNode(_component_DropdownItem, { href: "#" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u672C\u793E")
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
                          createVNode(_component_DropdownToggle, { button: "light" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u672C\u793E ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DropdownMenu, null, {
                            default: withCtx(() => [
                              createVNode(_component_DropdownItem, { href: "#" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u672C\u793E")
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
              _push3(ssrRenderComponent(_component_CardHeader, { class: "text-center" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`\u90E8\u9580`);
                  } else {
                    return [
                      createTextVNode("\u90E8\u9580")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ListGroupItem, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_Dropdown, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_DropdownToggle, { button: "light" }, {
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
                                _push6(ssrRenderComponent(_component_DropdownItem, { href: "#" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`\u6307\u5B9A\u306A\u3057`);
                                    } else {
                                      return [
                                        createTextVNode("\u6307\u5B9A\u306A\u3057")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_DropdownItem, { href: "#" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u6307\u5B9A\u306A\u3057")
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
                            createVNode(_component_DropdownToggle, { button: "light" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u6307\u5B9A\u306A\u3057 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_DropdownMenu, null, {
                              default: withCtx(() => [
                                createVNode(_component_DropdownItem, { href: "#" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u6307\u5B9A\u306A\u3057")
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
                          createVNode(_component_DropdownToggle, { button: "light" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u6307\u5B9A\u306A\u3057 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DropdownMenu, null, {
                            default: withCtx(() => [
                              createVNode(_component_DropdownItem, { href: "#" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u6307\u5B9A\u306A\u3057")
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
              _push3(ssrRenderComponent(_component_CardHeader, { class: "text-center" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`\u9451\u5B9A\u79D1\u76EE`);
                  } else {
                    return [
                      createTextVNode("\u9451\u5B9A\u79D1\u76EE")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ListGroupItem, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_Dropdown, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_DropdownToggle, { button: "light" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` \u9451\u5B9A\u79D1\u76EE `);
                              } else {
                                return [
                                  createTextVNode(" \u9451\u5B9A\u79D1\u76EE ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_DropdownMenu, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_DropdownItem, { href: "#" }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_DropdownItem, { href: "#" })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_DropdownToggle, { button: "light" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u9451\u5B9A\u79D1\u76EE ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_DropdownMenu, null, {
                              default: withCtx(() => [
                                createVNode(_component_DropdownItem, { href: "#" })
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
                          createVNode(_component_DropdownToggle, { button: "light" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u9451\u5B9A\u79D1\u76EE ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DropdownMenu, null, {
                            default: withCtx(() => [
                              createVNode(_component_DropdownItem, { href: "#" })
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
                    _push4(`\u88DC\u52A9\u79D1\u76EE`);
                  } else {
                    return [
                      createTextVNode("\u88DC\u52A9\u79D1\u76EE")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ListGroupItem, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_Dropdown, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_DropdownToggle, { button: "light" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` \u88DC\u52A9\u79D1\u76EE `);
                              } else {
                                return [
                                  createTextVNode(" \u88DC\u52A9\u79D1\u76EE ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_DropdownMenu, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_DropdownItem, { href: "#" }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_DropdownItem, { href: "#" })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_DropdownToggle, { button: "light" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u88DC\u52A9\u79D1\u76EE ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_DropdownMenu, null, {
                              default: withCtx(() => [
                                createVNode(_component_DropdownItem, { href: "#" })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`<div${_scopeId3}>\u304B\u3089</div>`);
                    _push4(ssrRenderComponent(_component_Dropdown, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_DropdownToggle, { button: "light" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` \u88DC\u52A9\u79D1\u76EE `);
                              } else {
                                return [
                                  createTextVNode(" \u88DC\u52A9\u79D1\u76EE ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_DropdownMenu, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_DropdownItem, { href: "#" }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_DropdownItem, { href: "#" })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_DropdownToggle, { button: "light" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u88DC\u52A9\u79D1\u76EE ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_DropdownMenu, null, {
                              default: withCtx(() => [
                                createVNode(_component_DropdownItem, { href: "#" })
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
                          createVNode(_component_DropdownToggle, { button: "light" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u88DC\u52A9\u79D1\u76EE ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DropdownMenu, null, {
                            default: withCtx(() => [
                              createVNode(_component_DropdownItem, { href: "#" })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", null, "\u304B\u3089"),
                      createVNode(_component_Dropdown, null, {
                        default: withCtx(() => [
                          createVNode(_component_DropdownToggle, { button: "light" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u88DC\u52A9\u79D1\u76EE ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DropdownMenu, null, {
                            default: withCtx(() => [
                              createVNode(_component_DropdownItem, { href: "#" })
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
                    _push4(`\u5E74\u5EA6`);
                  } else {
                    return [
                      createTextVNode("\u5E74\u5EA6")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ListGroupItem, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_Dropdown, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_DropdownToggle, { button: "light" }, {
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
                                _push6(ssrRenderComponent(_component_DropdownItem, { href: "#" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`2023`);
                                    } else {
                                      return [
                                        createTextVNode("2023")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_DropdownItem, { href: "#" }, {
                                    default: withCtx(() => [
                                      createTextVNode("2023")
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
                            createVNode(_component_DropdownToggle, { button: "light" }, {
                              default: withCtx(() => [
                                createTextVNode(" 2023 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_DropdownMenu, null, {
                              default: withCtx(() => [
                                createVNode(_component_DropdownItem, { href: "#" }, {
                                  default: withCtx(() => [
                                    createTextVNode("2023")
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
                    _push4(ssrRenderComponent(_component_BFormCheck, { inline: "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_BFormCheckInput, { value: "option4" }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_BFormCheckLabel, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`4\u6708`);
                              } else {
                                return [
                                  createTextVNode("4\u6708")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_BFormCheckInput, { value: "option4" }),
                            createVNode(_component_BFormCheckLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("4\u6708")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_BFormCheck, { inline: "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_BFormCheckInput, { value: "option5" }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_BFormCheckLabel, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`5\u6708`);
                              } else {
                                return [
                                  createTextVNode("5\u6708")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_BFormCheckInput, { value: "option5" }),
                            createVNode(_component_BFormCheckLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("5\u6708")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_BFormCheck, { inline: "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_BFormCheckInput, { value: "optio6" }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_BFormCheckLabel, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`6\u6708`);
                              } else {
                                return [
                                  createTextVNode("6\u6708")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_BFormCheckInput, { value: "optio6" }),
                            createVNode(_component_BFormCheckLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("6\u6708")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_BFormCheck, { inline: "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_BFormCheckInput, { value: "option7" }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_BFormCheckLabel, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`7\u6708`);
                              } else {
                                return [
                                  createTextVNode("7\u6708")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_BFormCheckInput, { value: "option7" }),
                            createVNode(_component_BFormCheckLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("7\u6708")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_BFormCheck, { inline: "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_BFormCheckInput, { value: "option8" }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_BFormCheckLabel, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`8\u6708`);
                              } else {
                                return [
                                  createTextVNode("8\u6708")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_BFormCheckInput, { value: "option8" }),
                            createVNode(_component_BFormCheckLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("8\u6708")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_BFormCheck, { inline: "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_BFormCheckInput, { value: "option9" }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_BFormCheckLabel, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`9\u6708`);
                              } else {
                                return [
                                  createTextVNode("9\u6708")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_BFormCheckInput, { value: "option9" }),
                            createVNode(_component_BFormCheckLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("9\u6708")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_BFormCheck, { inline: "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_BFormCheckInput, { value: "option10" }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_BFormCheckLabel, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`10\u6708`);
                              } else {
                                return [
                                  createTextVNode("10\u6708")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_BFormCheckInput, { value: "option10" }),
                            createVNode(_component_BFormCheckLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("10\u6708")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_BFormCheck, { inline: "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_BFormCheckInput, { value: "option11" }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_BFormCheckLabel, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`11\u6708`);
                              } else {
                                return [
                                  createTextVNode("11\u6708")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_BFormCheckInput, { value: "option11" }),
                            createVNode(_component_BFormCheckLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("11\u6708")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_BFormCheck, { inline: "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_BFormCheckInput, { value: "option12" }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_BFormCheckLabel, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`12\u6708`);
                              } else {
                                return [
                                  createTextVNode("12\u6708")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_BFormCheckInput, { value: "option12" }),
                            createVNode(_component_BFormCheckLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("12\u6708")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_BFormCheck, { inline: "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_BFormCheckInput, { value: "option1" }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_BFormCheckLabel, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`1\u6708`);
                              } else {
                                return [
                                  createTextVNode("1\u6708")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_BFormCheckInput, { value: "option1" }),
                            createVNode(_component_BFormCheckLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("1\u6708")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_BFormCheck, { inline: "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_BFormCheckInput, { value: "option2" }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_BFormCheckLabel, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`2\u6708`);
                              } else {
                                return [
                                  createTextVNode("2\u6708")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_BFormCheckInput, { value: "option2" }),
                            createVNode(_component_BFormCheckLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("2\u6708")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_BFormCheck, { inline: "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_BFormCheckInput, { value: "option3" }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_BFormCheckLabel, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`3\u6708`);
                              } else {
                                return [
                                  createTextVNode("3\u6708")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_BFormCheckInput, { value: "option3" }),
                            createVNode(_component_BFormCheckLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("3\u6708")
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
                          createVNode(_component_DropdownToggle, { button: "light" }, {
                            default: withCtx(() => [
                              createTextVNode(" 2023 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DropdownMenu, null, {
                            default: withCtx(() => [
                              createVNode(_component_DropdownItem, { href: "#" }, {
                                default: withCtx(() => [
                                  createTextVNode("2023")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BFormCheck, { inline: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_BFormCheckInput, { value: "option4" }),
                          createVNode(_component_BFormCheckLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("4\u6708")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BFormCheck, { inline: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_BFormCheckInput, { value: "option5" }),
                          createVNode(_component_BFormCheckLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("5\u6708")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BFormCheck, { inline: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_BFormCheckInput, { value: "optio6" }),
                          createVNode(_component_BFormCheckLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("6\u6708")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BFormCheck, { inline: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_BFormCheckInput, { value: "option7" }),
                          createVNode(_component_BFormCheckLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("7\u6708")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BFormCheck, { inline: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_BFormCheckInput, { value: "option8" }),
                          createVNode(_component_BFormCheckLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("8\u6708")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BFormCheck, { inline: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_BFormCheckInput, { value: "option9" }),
                          createVNode(_component_BFormCheckLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("9\u6708")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BFormCheck, { inline: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_BFormCheckInput, { value: "option10" }),
                          createVNode(_component_BFormCheckLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("10\u6708")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BFormCheck, { inline: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_BFormCheckInput, { value: "option11" }),
                          createVNode(_component_BFormCheckLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("11\u6708")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BFormCheck, { inline: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_BFormCheckInput, { value: "option12" }),
                          createVNode(_component_BFormCheckLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("12\u6708")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BFormCheck, { inline: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_BFormCheckInput, { value: "option1" }),
                          createVNode(_component_BFormCheckLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("1\u6708")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BFormCheck, { inline: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_BFormCheckInput, { value: "option2" }),
                          createVNode(_component_BFormCheckLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("2\u6708")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BFormCheck, { inline: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_BFormCheckInput, { value: "option3" }),
                          createVNode(_component_BFormCheckLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("3\u6708")
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
                    _push4(`\u8A08\u4E0A\u66F8\u985E`);
                  } else {
                    return [
                      createTextVNode("\u8A08\u4E0A\u66F8\u985E")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ListGroupItem, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_BFormCheck, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_BFormCheckInput, {
                            type: "radio",
                            name: "flexRadioDefault"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_BFormCheckLabel, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`\u5168\u4EF6`);
                              } else {
                                return [
                                  createTextVNode("\u5168\u4EF6")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_BFormCheckInput, {
                              type: "radio",
                              name: "flexRadioDefault"
                            }),
                            createVNode(_component_BFormCheckLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("\u5168\u4EF6")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_BFormCheck, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_BFormCheckInput, {
                            type: "radio",
                            name: "flexRadioDefault",
                            checked: ""
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_BFormCheckLabel, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`\u6708\u6B21\u4ED5\u8A33`);
                              } else {
                                return [
                                  createTextVNode("\u6708\u6B21\u4ED5\u8A33")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_BFormCheckInput, {
                              type: "radio",
                              name: "flexRadioDefault",
                              checked: ""
                            }),
                            createVNode(_component_BFormCheckLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("\u6708\u6B21\u4ED5\u8A33")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_BFormCheck, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_BFormCheckInput, {
                            type: "radio",
                            name: "flexRadioDefault"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_BFormCheckLabel, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`\u518D\u632F\u66FF\u30FB\u6C7A\u7B97\u4ED5\u8A33`);
                              } else {
                                return [
                                  createTextVNode("\u518D\u632F\u66FF\u30FB\u6C7A\u7B97\u4ED5\u8A33")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_BFormCheckInput, {
                              type: "radio",
                              name: "flexRadioDefault"
                            }),
                            createVNode(_component_BFormCheckLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("\u518D\u632F\u66FF\u30FB\u6C7A\u7B97\u4ED5\u8A33")
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
                      createVNode(_component_BFormCheck, null, {
                        default: withCtx(() => [
                          createVNode(_component_BFormCheckInput, {
                            type: "radio",
                            name: "flexRadioDefault"
                          }),
                          createVNode(_component_BFormCheckLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("\u5168\u4EF6")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BFormCheck, null, {
                        default: withCtx(() => [
                          createVNode(_component_BFormCheckInput, {
                            type: "radio",
                            name: "flexRadioDefault",
                            checked: ""
                          }),
                          createVNode(_component_BFormCheckLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("\u6708\u6B21\u4ED5\u8A33")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BFormCheck, null, {
                        default: withCtx(() => [
                          createVNode(_component_BFormCheckInput, {
                            type: "radio",
                            name: "flexRadioDefault"
                          }),
                          createVNode(_component_BFormCheckLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("\u518D\u632F\u66FF\u30FB\u6C7A\u7B97\u4ED5\u8A33")
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
                    _push4(`\u6D88\u8CBB\u7A0E`);
                  } else {
                    return [
                      createTextVNode("\u6D88\u8CBB\u7A0E")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ListGroupItem, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_BFormCheck, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_BFormCheckInput, {
                            type: "radio",
                            name: "flexRadioDefault1",
                            checked: ""
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_BFormCheckLabel, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`\u7A0E\u629C\u96C6\u8A08`);
                              } else {
                                return [
                                  createTextVNode("\u7A0E\u629C\u96C6\u8A08")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_BFormCheckInput, {
                              type: "radio",
                              name: "flexRadioDefault1",
                              checked: ""
                            }),
                            createVNode(_component_BFormCheckLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("\u7A0E\u629C\u96C6\u8A08")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_BFormCheck, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_BFormCheckInput, {
                            type: "radio",
                            name: "flexRadioDefault1"
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_BFormCheckLabel, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`\u7A0E\u8FBC\u96C6\u8A08`);
                              } else {
                                return [
                                  createTextVNode("\u7A0E\u8FBC\u96C6\u8A08")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_BFormCheckInput, {
                              type: "radio",
                              name: "flexRadioDefault1"
                            }),
                            createVNode(_component_BFormCheckLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("\u7A0E\u8FBC\u96C6\u8A08")
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
                      createVNode(_component_BFormCheck, null, {
                        default: withCtx(() => [
                          createVNode(_component_BFormCheckInput, {
                            type: "radio",
                            name: "flexRadioDefault1",
                            checked: ""
                          }),
                          createVNode(_component_BFormCheckLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("\u7A0E\u629C\u96C6\u8A08")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BFormCheck, null, {
                        default: withCtx(() => [
                          createVNode(_component_BFormCheckInput, {
                            type: "radio",
                            name: "flexRadioDefault1"
                          }),
                          createVNode(_component_BFormCheckLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("\u7A0E\u8FBC\u96C6\u8A08")
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
                    _push4(`PDF\u30FBCSV\u51FA\u529B\u6761\u4EF6`);
                  } else {
                    return [
                      createTextVNode("PDF\u30FBCSV\u51FA\u529B\u6761\u4EF6")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ListGroupItem, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_BFormCheck, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_BFormCheckInput, null, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_BFormCheckLabel, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`\u6708\u6BCE\u6539\u30DA\u30FC\u30B8`);
                              } else {
                                return [
                                  createTextVNode("\u6708\u6BCE\u6539\u30DA\u30FC\u30B8")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_BFormCheckInput),
                            createVNode(_component_BFormCheckLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("\u6708\u6BCE\u6539\u30DA\u30FC\u30B8")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_BFormCheck, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_BFormCheckInput, { checked: "" }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_BFormCheckLabel, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`\u4ED5\u8A33\u304C\u3042\u308B\u79D1\u76EE\u306E\u307F\u51FA\u529B`);
                              } else {
                                return [
                                  createTextVNode("\u4ED5\u8A33\u304C\u3042\u308B\u79D1\u76EE\u306E\u307F\u51FA\u529B")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_BFormCheckInput, { checked: "" }),
                            createVNode(_component_BFormCheckLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("\u4ED5\u8A33\u304C\u3042\u308B\u79D1\u76EE\u306E\u307F\u51FA\u529B")
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
                      createVNode(_component_BFormCheck, null, {
                        default: withCtx(() => [
                          createVNode(_component_BFormCheckInput),
                          createVNode(_component_BFormCheckLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("\u6708\u6BCE\u6539\u30DA\u30FC\u30B8")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BFormCheck, null, {
                        default: withCtx(() => [
                          createVNode(_component_BFormCheckInput, { checked: "" }),
                          createVNode(_component_BFormCheckLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("\u4ED5\u8A33\u304C\u3042\u308B\u79D1\u76EE\u306E\u307F\u51FA\u529B")
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
                createVNode(_component_ListGroupItem, null, {
                  default: withCtx(() => [
                    createVNode(_component_Dropdown, null, {
                      default: withCtx(() => [
                        createVNode(_component_DropdownToggle, { button: "light" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u672C\u793E ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DropdownMenu, null, {
                          default: withCtx(() => [
                            createVNode(_component_DropdownItem, { href: "#" }, {
                              default: withCtx(() => [
                                createTextVNode("\u672C\u793E")
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
                createVNode(_component_CardHeader, { class: "text-center" }, {
                  default: withCtx(() => [
                    createTextVNode("\u90E8\u9580")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListGroupItem, null, {
                  default: withCtx(() => [
                    createVNode(_component_Dropdown, null, {
                      default: withCtx(() => [
                        createVNode(_component_DropdownToggle, { button: "light" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u6307\u5B9A\u306A\u3057 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DropdownMenu, null, {
                          default: withCtx(() => [
                            createVNode(_component_DropdownItem, { href: "#" }, {
                              default: withCtx(() => [
                                createTextVNode("\u6307\u5B9A\u306A\u3057")
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
                createVNode(_component_CardHeader, { class: "text-center" }, {
                  default: withCtx(() => [
                    createTextVNode("\u9451\u5B9A\u79D1\u76EE")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListGroupItem, null, {
                  default: withCtx(() => [
                    createVNode(_component_Dropdown, null, {
                      default: withCtx(() => [
                        createVNode(_component_DropdownToggle, { button: "light" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u9451\u5B9A\u79D1\u76EE ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DropdownMenu, null, {
                          default: withCtx(() => [
                            createVNode(_component_DropdownItem, { href: "#" })
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
                    createTextVNode("\u88DC\u52A9\u79D1\u76EE")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListGroupItem, null, {
                  default: withCtx(() => [
                    createVNode(_component_Dropdown, null, {
                      default: withCtx(() => [
                        createVNode(_component_DropdownToggle, { button: "light" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u88DC\u52A9\u79D1\u76EE ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DropdownMenu, null, {
                          default: withCtx(() => [
                            createVNode(_component_DropdownItem, { href: "#" })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", null, "\u304B\u3089"),
                    createVNode(_component_Dropdown, null, {
                      default: withCtx(() => [
                        createVNode(_component_DropdownToggle, { button: "light" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u88DC\u52A9\u79D1\u76EE ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DropdownMenu, null, {
                          default: withCtx(() => [
                            createVNode(_component_DropdownItem, { href: "#" })
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
                    createTextVNode("\u5E74\u5EA6")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListGroupItem, null, {
                  default: withCtx(() => [
                    createVNode(_component_Dropdown, null, {
                      default: withCtx(() => [
                        createVNode(_component_DropdownToggle, { button: "light" }, {
                          default: withCtx(() => [
                            createTextVNode(" 2023 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DropdownMenu, null, {
                          default: withCtx(() => [
                            createVNode(_component_DropdownItem, { href: "#" }, {
                              default: withCtx(() => [
                                createTextVNode("2023")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BFormCheck, { inline: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormCheckInput, { value: "option4" }),
                        createVNode(_component_BFormCheckLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("4\u6708")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BFormCheck, { inline: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormCheckInput, { value: "option5" }),
                        createVNode(_component_BFormCheckLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("5\u6708")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BFormCheck, { inline: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormCheckInput, { value: "optio6" }),
                        createVNode(_component_BFormCheckLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("6\u6708")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BFormCheck, { inline: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormCheckInput, { value: "option7" }),
                        createVNode(_component_BFormCheckLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("7\u6708")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BFormCheck, { inline: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormCheckInput, { value: "option8" }),
                        createVNode(_component_BFormCheckLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("8\u6708")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BFormCheck, { inline: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormCheckInput, { value: "option9" }),
                        createVNode(_component_BFormCheckLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("9\u6708")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BFormCheck, { inline: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormCheckInput, { value: "option10" }),
                        createVNode(_component_BFormCheckLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("10\u6708")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BFormCheck, { inline: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormCheckInput, { value: "option11" }),
                        createVNode(_component_BFormCheckLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("11\u6708")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BFormCheck, { inline: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormCheckInput, { value: "option12" }),
                        createVNode(_component_BFormCheckLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("12\u6708")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BFormCheck, { inline: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormCheckInput, { value: "option1" }),
                        createVNode(_component_BFormCheckLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("1\u6708")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BFormCheck, { inline: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormCheckInput, { value: "option2" }),
                        createVNode(_component_BFormCheckLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("2\u6708")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BFormCheck, { inline: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_BFormCheckInput, { value: "option3" }),
                        createVNode(_component_BFormCheckLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("3\u6708")
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
                    createTextVNode("\u8A08\u4E0A\u66F8\u985E")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListGroupItem, null, {
                  default: withCtx(() => [
                    createVNode(_component_BFormCheck, null, {
                      default: withCtx(() => [
                        createVNode(_component_BFormCheckInput, {
                          type: "radio",
                          name: "flexRadioDefault"
                        }),
                        createVNode(_component_BFormCheckLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("\u5168\u4EF6")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BFormCheck, null, {
                      default: withCtx(() => [
                        createVNode(_component_BFormCheckInput, {
                          type: "radio",
                          name: "flexRadioDefault",
                          checked: ""
                        }),
                        createVNode(_component_BFormCheckLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("\u6708\u6B21\u4ED5\u8A33")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BFormCheck, null, {
                      default: withCtx(() => [
                        createVNode(_component_BFormCheckInput, {
                          type: "radio",
                          name: "flexRadioDefault"
                        }),
                        createVNode(_component_BFormCheckLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("\u518D\u632F\u66FF\u30FB\u6C7A\u7B97\u4ED5\u8A33")
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
                    createTextVNode("\u6D88\u8CBB\u7A0E")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListGroupItem, null, {
                  default: withCtx(() => [
                    createVNode(_component_BFormCheck, null, {
                      default: withCtx(() => [
                        createVNode(_component_BFormCheckInput, {
                          type: "radio",
                          name: "flexRadioDefault1",
                          checked: ""
                        }),
                        createVNode(_component_BFormCheckLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("\u7A0E\u629C\u96C6\u8A08")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BFormCheck, null, {
                      default: withCtx(() => [
                        createVNode(_component_BFormCheckInput, {
                          type: "radio",
                          name: "flexRadioDefault1"
                        }),
                        createVNode(_component_BFormCheckLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("\u7A0E\u8FBC\u96C6\u8A08")
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
                    createTextVNode("PDF\u30FBCSV\u51FA\u529B\u6761\u4EF6")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListGroupItem, null, {
                  default: withCtx(() => [
                    createVNode(_component_BFormCheck, null, {
                      default: withCtx(() => [
                        createVNode(_component_BFormCheckInput),
                        createVNode(_component_BFormCheckLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("\u6708\u6BCE\u6539\u30DA\u30FC\u30B8")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BFormCheck, null, {
                      default: withCtx(() => [
                        createVNode(_component_BFormCheckInput, { checked: "" }),
                        createVNode(_component_BFormCheckLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("\u4ED5\u8A33\u304C\u3042\u308B\u79D1\u76EE\u306E\u307F\u51FA\u529B")
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
          createVNode(_component_CardHeader, { class: "text-center" }, {
            default: withCtx(() => [
              createTextVNode("\u4F1A\u8A08\u5358\u4F4D")
            ]),
            _: 1
          }),
          createVNode(_component_ListGroup, {
            flush: "",
            class: "text-center"
          }, {
            default: withCtx(() => [
              createVNode(_component_ListGroupItem, null, {
                default: withCtx(() => [
                  createVNode(_component_Dropdown, null, {
                    default: withCtx(() => [
                      createVNode(_component_DropdownToggle, { button: "light" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u672C\u793E ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DropdownMenu, null, {
                        default: withCtx(() => [
                          createVNode(_component_DropdownItem, { href: "#" }, {
                            default: withCtx(() => [
                              createTextVNode("\u672C\u793E")
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
              createVNode(_component_CardHeader, { class: "text-center" }, {
                default: withCtx(() => [
                  createTextVNode("\u90E8\u9580")
                ]),
                _: 1
              }),
              createVNode(_component_ListGroupItem, null, {
                default: withCtx(() => [
                  createVNode(_component_Dropdown, null, {
                    default: withCtx(() => [
                      createVNode(_component_DropdownToggle, { button: "light" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u6307\u5B9A\u306A\u3057 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DropdownMenu, null, {
                        default: withCtx(() => [
                          createVNode(_component_DropdownItem, { href: "#" }, {
                            default: withCtx(() => [
                              createTextVNode("\u6307\u5B9A\u306A\u3057")
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
              createVNode(_component_CardHeader, { class: "text-center" }, {
                default: withCtx(() => [
                  createTextVNode("\u9451\u5B9A\u79D1\u76EE")
                ]),
                _: 1
              }),
              createVNode(_component_ListGroupItem, null, {
                default: withCtx(() => [
                  createVNode(_component_Dropdown, null, {
                    default: withCtx(() => [
                      createVNode(_component_DropdownToggle, { button: "light" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u9451\u5B9A\u79D1\u76EE ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DropdownMenu, null, {
                        default: withCtx(() => [
                          createVNode(_component_DropdownItem, { href: "#" })
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
                  createTextVNode("\u88DC\u52A9\u79D1\u76EE")
                ]),
                _: 1
              }),
              createVNode(_component_ListGroupItem, null, {
                default: withCtx(() => [
                  createVNode(_component_Dropdown, null, {
                    default: withCtx(() => [
                      createVNode(_component_DropdownToggle, { button: "light" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u88DC\u52A9\u79D1\u76EE ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DropdownMenu, null, {
                        default: withCtx(() => [
                          createVNode(_component_DropdownItem, { href: "#" })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", null, "\u304B\u3089"),
                  createVNode(_component_Dropdown, null, {
                    default: withCtx(() => [
                      createVNode(_component_DropdownToggle, { button: "light" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u88DC\u52A9\u79D1\u76EE ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DropdownMenu, null, {
                        default: withCtx(() => [
                          createVNode(_component_DropdownItem, { href: "#" })
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
                  createTextVNode("\u5E74\u5EA6")
                ]),
                _: 1
              }),
              createVNode(_component_ListGroupItem, null, {
                default: withCtx(() => [
                  createVNode(_component_Dropdown, null, {
                    default: withCtx(() => [
                      createVNode(_component_DropdownToggle, { button: "light" }, {
                        default: withCtx(() => [
                          createTextVNode(" 2023 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DropdownMenu, null, {
                        default: withCtx(() => [
                          createVNode(_component_DropdownItem, { href: "#" }, {
                            default: withCtx(() => [
                              createTextVNode("2023")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BFormCheck, { inline: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_BFormCheckInput, { value: "option4" }),
                      createVNode(_component_BFormCheckLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("4\u6708")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BFormCheck, { inline: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_BFormCheckInput, { value: "option5" }),
                      createVNode(_component_BFormCheckLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("5\u6708")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BFormCheck, { inline: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_BFormCheckInput, { value: "optio6" }),
                      createVNode(_component_BFormCheckLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("6\u6708")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BFormCheck, { inline: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_BFormCheckInput, { value: "option7" }),
                      createVNode(_component_BFormCheckLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("7\u6708")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BFormCheck, { inline: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_BFormCheckInput, { value: "option8" }),
                      createVNode(_component_BFormCheckLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("8\u6708")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BFormCheck, { inline: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_BFormCheckInput, { value: "option9" }),
                      createVNode(_component_BFormCheckLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("9\u6708")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BFormCheck, { inline: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_BFormCheckInput, { value: "option10" }),
                      createVNode(_component_BFormCheckLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("10\u6708")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BFormCheck, { inline: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_BFormCheckInput, { value: "option11" }),
                      createVNode(_component_BFormCheckLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("11\u6708")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BFormCheck, { inline: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_BFormCheckInput, { value: "option12" }),
                      createVNode(_component_BFormCheckLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("12\u6708")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BFormCheck, { inline: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_BFormCheckInput, { value: "option1" }),
                      createVNode(_component_BFormCheckLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("1\u6708")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BFormCheck, { inline: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_BFormCheckInput, { value: "option2" }),
                      createVNode(_component_BFormCheckLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("2\u6708")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BFormCheck, { inline: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_BFormCheckInput, { value: "option3" }),
                      createVNode(_component_BFormCheckLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("3\u6708")
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
                  createTextVNode("\u8A08\u4E0A\u66F8\u985E")
                ]),
                _: 1
              }),
              createVNode(_component_ListGroupItem, null, {
                default: withCtx(() => [
                  createVNode(_component_BFormCheck, null, {
                    default: withCtx(() => [
                      createVNode(_component_BFormCheckInput, {
                        type: "radio",
                        name: "flexRadioDefault"
                      }),
                      createVNode(_component_BFormCheckLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("\u5168\u4EF6")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BFormCheck, null, {
                    default: withCtx(() => [
                      createVNode(_component_BFormCheckInput, {
                        type: "radio",
                        name: "flexRadioDefault",
                        checked: ""
                      }),
                      createVNode(_component_BFormCheckLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("\u6708\u6B21\u4ED5\u8A33")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BFormCheck, null, {
                    default: withCtx(() => [
                      createVNode(_component_BFormCheckInput, {
                        type: "radio",
                        name: "flexRadioDefault"
                      }),
                      createVNode(_component_BFormCheckLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("\u518D\u632F\u66FF\u30FB\u6C7A\u7B97\u4ED5\u8A33")
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
                  createTextVNode("\u6D88\u8CBB\u7A0E")
                ]),
                _: 1
              }),
              createVNode(_component_ListGroupItem, null, {
                default: withCtx(() => [
                  createVNode(_component_BFormCheck, null, {
                    default: withCtx(() => [
                      createVNode(_component_BFormCheckInput, {
                        type: "radio",
                        name: "flexRadioDefault1",
                        checked: ""
                      }),
                      createVNode(_component_BFormCheckLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("\u7A0E\u629C\u96C6\u8A08")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BFormCheck, null, {
                    default: withCtx(() => [
                      createVNode(_component_BFormCheckInput, {
                        type: "radio",
                        name: "flexRadioDefault1"
                      }),
                      createVNode(_component_BFormCheckLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("\u7A0E\u8FBC\u96C6\u8A08")
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
                  createTextVNode("PDF\u30FBCSV\u51FA\u529B\u6761\u4EF6")
                ]),
                _: 1
              }),
              createVNode(_component_ListGroupItem, null, {
                default: withCtx(() => [
                  createVNode(_component_BFormCheck, null, {
                    default: withCtx(() => [
                      createVNode(_component_BFormCheckInput),
                      createVNode(_component_BFormCheckLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("\u6708\u6BCE\u6539\u30DA\u30FC\u30B8")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BFormCheck, null, {
                    default: withCtx(() => [
                      createVNode(_component_BFormCheckInput, { checked: "" }),
                      createVNode(_component_BFormCheckLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("\u4ED5\u8A33\u304C\u3042\u308B\u79D1\u76EE\u306E\u307F\u51FA\u529B")
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
  _push(`<div class="text-center pt-4">`);
  _push(ssrRenderComponent(_component_b_button, {
    button: "outline-dark",
    size: "lg",
    type: "button",
    "relative-width": "25",
    shadow: "",
    padding: "3",
    margin: "b-5",
    class: "p-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u8868\u793A `);
      } else {
        return [
          createTextVNode(" \u8868\u793A ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="text-center">`);
  _push(ssrRenderComponent(_component_b_button, { button: "outline-secondary" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` PDF\u51FA\u529B `);
      } else {
        return [
          createTextVNode(" PDF\u51FA\u529B ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_b_button, { button: "outline-secondary" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` CSV\u51FA\u529B `);
      } else {
        return [
          createTextVNode(" CSV\u51FA\u529B ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/demo/hojomototyou/subledger.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const subledger = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { subledger as default };
//# sourceMappingURL=subledger-37327ed1.mjs.map
