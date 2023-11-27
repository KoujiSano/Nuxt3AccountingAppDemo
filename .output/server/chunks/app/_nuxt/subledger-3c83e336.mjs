import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_3 } from './listGroupItem-844da8d8.mjs';
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext, defineComponent, ref, h, computed as computed$1, provide, inject, toRef, watch, nextTick } from 'vue';
import { B as BlockProps, u as useBlock, I as InlineProps, a as useInline } from './useBlock-d3cb816a.mjs';
import { _ as _export_sfc, h as hProps, b as addProp, i as isPropDefined, e as unrefElement, d as useEventBus } from '../server.mjs';
import { I as IDProps, u as useID, c as useEvent, d as useIDItem, w as waitAfterTransition, b as useIDRef, i as injectID } from '../../floating-ui.vue.esm.mjs';
import { isString, isBoolean, uniqueId } from 'lodash-es';
import { _ as __nuxt_component_0$1 } from './button-828e61fb.mjs';
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
import '@floating-ui/dom';
import './usePopover-5c9bdc28.mjs';

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
const __nuxt_component_4 = /* @__PURE__ */ defineComponent({
  name: "FormSelect",
  props: {
    ...InlineProps,
    ...ValidProps,
    tag: {
      type: String,
      default: "select"
    },
    size: {
      type: String,
      default: void 0
    },
    length: {
      type: [Number, String],
      default: void 0
    }
  },
  setup(props, context) {
    const inline = useInline(props);
    const valid = useValid(props);
    const current = {
      class: computed$1(() => {
        return {
          [`form-select`]: true,
          [`form-select-${props.size}`]: props.size
        };
      }),
      attr: computed$1(() => {
        return {
          ...addProp(props.length, "size", `${props.length}`)
        };
      })
    };
    return () => h(props.tag, hProps(current, valid, inline), context.slots);
  }
});
const __nuxt_component_5 = /* @__PURE__ */ defineComponent({
  name: "HtmlOption",
  props: {
    ...InlineProps,
    tag: {
      type: String,
      default: "option"
    }
  },
  setup(props, context) {
    const inline = useInline(props);
    return () => h(props.tag, inline, context.slots);
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
const __nuxt_component_6 = /* @__PURE__ */ defineComponent({
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
const __nuxt_component_7 = /* @__PURE__ */ defineComponent({
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
const __nuxt_component_8 = /* @__PURE__ */ defineComponent({
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
const CollapseProps = {
  horizontal: {
    type: Boolean
  }
};
function useCollapse(props, context, elementRef) {
  const active = inject("active.collapse", void 0);
  if (active) {
    watch(active, (value) => {
      if (value) {
        show();
      } else {
        hide();
      }
    });
  }
  const isShown = ref((active == null ? void 0 : active.value) || false);
  const height = ref(0);
  const width = ref(0);
  const collapse = ref(!isShown.value);
  const collapsing = ref(false);
  const isShow = ref(isShown.value);
  const { expose } = useEvent(props, elementRef, "collapse");
  const show = async () => {
    if (!elementRef.value) {
      return;
    }
    const element = unrefElement(elementRef);
    if (!element) {
      return;
    }
    context.emit("show.collapse");
    isShown.value = true;
    collapse.value = false;
    collapsing.value = true;
    isShow.value = false;
    await nextTick();
    height.value = element.scrollHeight;
    width.value = element.scrollWidth;
    await waitAfterTransition(elementRef, true);
    collapse.value = true;
    collapsing.value = false;
    isShow.value = true;
    context.emit("shown.collapse");
  };
  const hide = async () => {
    if (!elementRef.value) {
      return;
    }
    const element = unrefElement(elementRef);
    if (!element) {
      return;
    }
    context.emit("hide.collapse");
    isShown.value = false;
    height.value = element.offsetHeight;
    width.value = element.offsetWidth;
    collapsing.value = true;
    await nextTick();
    collapse.value = false;
    isShow.value = true;
    await nextTick();
    height.value = element.scrollHeight;
    width.value = element.scrollWidth;
    await nextTick();
    height.value = 0;
    width.value = 0;
    await nextTick();
    await waitAfterTransition(elementRef, true);
    collapse.value = true;
    collapsing.value = false;
    isShow.value = false;
    context.emit("hidden.collapse");
  };
  const toggle = async () => {
    isShown.value ? await hide() : await show();
  };
  const method = expose({ show, hide, toggle, dismiss: hide });
  return {
    class: computed$1(() => {
      return {
        show: isShow.value,
        collapse: collapse.value,
        collapsing: collapsing.value,
        "collapse-horizontal": props.horizontal
      };
    }),
    style: computed$1(() => {
      return {
        ...addProp(
          !props.horizontal && collapsing.value,
          "height",
          height.value == 0 ? "0" : `${height.value}px`
        ),
        ...addProp(
          props.horizontal && collapsing.value,
          "width",
          width.value == 0 ? "0" : `${width.value}px`
        )
      };
    }),
    method
  };
}
const __nuxt_component_10 = /* @__PURE__ */ defineComponent({
  name: "BsCollapse",
  props: {
    ...BlockProps,
    ...IDProps,
    ...CollapseProps,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const id = useID(props, "collapse");
    const collapse = useCollapse(props, context, elementRef);
    const block = useBlock(props);
    const current = {
      ref: elementRef
    };
    return () => h(props.tag, hProps(current, block, collapse, id), context.slots);
  }
});
const __nuxt_component_11 = /* @__PURE__ */ defineComponent({
  name: "BsCardBody",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: {
        "card-body": true
      }
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Card = __nuxt_component_0;
  const _component_CardHeader = __nuxt_component_1;
  const _component_ListGroup = __nuxt_component_2;
  const _component_ListGroupItem = __nuxt_component_3;
  const _component_BFormSelect = __nuxt_component_4;
  const _component_b_option = __nuxt_component_5;
  const _component_BFormCheck = __nuxt_component_6;
  const _component_BFormCheckInput = __nuxt_component_7;
  const _component_BFormCheckLabel = __nuxt_component_8;
  const _component_b_button = __nuxt_component_0$1;
  const _component_Collapse = __nuxt_component_10;
  const _component_CardBody = __nuxt_component_11;
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
                    _push4(ssrRenderComponent(_component_BFormSelect, {
                      margin: "x-auto",
                      "relative-width": "25",
                      class: "text-center"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_b_option, { selected: "" }, {
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
                        } else {
                          return [
                            createVNode(_component_b_option, { selected: "" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u672C\u793E ")
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
                      createVNode(_component_BFormSelect, {
                        margin: "x-auto",
                        "relative-width": "25",
                        class: "text-center"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_b_option, { selected: "" }, {
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
                    _push4(ssrRenderComponent(_component_BFormSelect, {
                      margin: "x-auto",
                      "relative-width": "25",
                      class: "text-center"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_b_option, { selected: "" }, {
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
                        } else {
                          return [
                            createVNode(_component_b_option, { selected: "" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u6307\u5B9A\u306A\u3057 ")
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
                      createVNode(_component_BFormSelect, {
                        margin: "x-auto",
                        "relative-width": "25",
                        class: "text-center"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_b_option, { selected: "" }, {
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
                    _push4(ssrRenderComponent(_component_BFormSelect, {
                      margin: "x-auto",
                      "relative-width": "25",
                      class: "text-center"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_b_option, { selected: "" }, {
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
                        } else {
                          return [
                            createVNode(_component_b_option, { selected: "" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u9451\u5B9A\u79D1\u76EE ")
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
                      createVNode(_component_BFormSelect, {
                        margin: "x-auto",
                        "relative-width": "25",
                        class: "text-center"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_b_option, { selected: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u9451\u5B9A\u79D1\u76EE ")
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
                    _push4(ssrRenderComponent(_component_BFormSelect, {
                      margin: "x-auto",
                      "relative-width": "25",
                      class: "text-center"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_b_option, { selected: "" }, {
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
                        } else {
                          return [
                            createVNode(_component_b_option, { selected: "" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u88DC\u52A9\u79D1\u76EE ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`<div${_scopeId3}>\u304B\u3089</div>`);
                    _push4(ssrRenderComponent(_component_BFormSelect, {
                      margin: "x-auto",
                      "relative-width": "25",
                      class: "text-center"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_b_option, { selected: "" }, {
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
                        } else {
                          return [
                            createVNode(_component_b_option, { selected: "" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u88DC\u52A9\u79D1\u76EE ")
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
                      createVNode(_component_BFormSelect, {
                        margin: "x-auto",
                        "relative-width": "25",
                        class: "text-center"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_b_option, { selected: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u88DC\u52A9\u79D1\u76EE ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", null, "\u304B\u3089"),
                      createVNode(_component_BFormSelect, {
                        margin: "x-auto",
                        "relative-width": "25",
                        class: "text-center"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_b_option, { selected: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u88DC\u52A9\u79D1\u76EE ")
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
                    _push4(ssrRenderComponent(_component_BFormSelect, {
                      margin: "x-auto",
                      "relative-width": "25",
                      class: "text-center"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_b_option, { selected: "" }, {
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
                          _push5(ssrRenderComponent(_component_b_option, { value: "1" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` 2022 `);
                              } else {
                                return [
                                  createTextVNode(" 2022 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_b_option, { value: "2" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` 2021 `);
                              } else {
                                return [
                                  createTextVNode(" 2021 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_b_option, { value: "3" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` 2020 `);
                              } else {
                                return [
                                  createTextVNode(" 2020 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_b_option, { selected: "" }, {
                              default: withCtx(() => [
                                createTextVNode(" 2023 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_option, { value: "1" }, {
                              default: withCtx(() => [
                                createTextVNode(" 2022 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_option, { value: "2" }, {
                              default: withCtx(() => [
                                createTextVNode(" 2021 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_option, { value: "3" }, {
                              default: withCtx(() => [
                                createTextVNode(" 2020 ")
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
                      createVNode(_component_BFormSelect, {
                        margin: "x-auto",
                        "relative-width": "25",
                        class: "text-center"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_b_option, { selected: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" 2023 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_option, { value: "1" }, {
                            default: withCtx(() => [
                              createTextVNode(" 2022 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_option, { value: "2" }, {
                            default: withCtx(() => [
                              createTextVNode(" 2021 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_option, { value: "3" }, {
                            default: withCtx(() => [
                              createTextVNode(" 2020 ")
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
                                _push6(`\u6708\u6BCE\u6539\u30DA\u30FC\u30B8 `);
                                _push6(ssrRenderComponent(_component_b_button, {
                                  button: "secondary",
                                  toggle: "collapse",
                                  target: "#collapseExample"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` ? `);
                                    } else {
                                      return [
                                        createTextVNode(" ? ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createTextVNode("\u6708\u6BCE\u6539\u30DA\u30FC\u30B8 "),
                                  createVNode(_component_b_button, {
                                    button: "secondary",
                                    toggle: "collapse",
                                    target: "#collapseExample"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" ? ")
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
                            createVNode(_component_BFormCheckInput),
                            createVNode(_component_BFormCheckLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("\u6708\u6BCE\u6539\u30DA\u30FC\u30B8 "),
                                createVNode(_component_b_button, {
                                  button: "secondary",
                                  toggle: "collapse",
                                  target: "#collapseExample"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" ? ")
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
                    _push4(ssrRenderComponent(_component_Collapse, { id: "collapseExample" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_Card, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_CardBody, { "text-background": "secondary-subtle" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` PDF\u51FA\u529B\u6642\u306E\u307F\u6709\u52B9\u3067\u3059 `);
                                    } else {
                                      return [
                                        createTextVNode(" PDF\u51FA\u529B\u6642\u306E\u307F\u6709\u52B9\u3067\u3059 ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_CardBody, { "text-background": "secondary-subtle" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" PDF\u51FA\u529B\u6642\u306E\u307F\u6709\u52B9\u3067\u3059 ")
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
                            createVNode(_component_Card, null, {
                              default: withCtx(() => [
                                createVNode(_component_CardBody, { "text-background": "secondary-subtle" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" PDF\u51FA\u529B\u6642\u306E\u307F\u6709\u52B9\u3067\u3059 ")
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
                              createTextVNode("\u6708\u6BCE\u6539\u30DA\u30FC\u30B8 "),
                              createVNode(_component_b_button, {
                                button: "secondary",
                                toggle: "collapse",
                                target: "#collapseExample"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" ? ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Collapse, { id: "collapseExample" }, {
                        default: withCtx(() => [
                          createVNode(_component_Card, null, {
                            default: withCtx(() => [
                              createVNode(_component_CardBody, { "text-background": "secondary-subtle" }, {
                                default: withCtx(() => [
                                  createTextVNode(" PDF\u51FA\u529B\u6642\u306E\u307F\u6709\u52B9\u3067\u3059 ")
                                ]),
                                _: 1
                              })
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
                    createVNode(_component_BFormSelect, {
                      margin: "x-auto",
                      "relative-width": "25",
                      class: "text-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_b_option, { selected: "" }, {
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
                }),
                createVNode(_component_CardHeader, { class: "text-center" }, {
                  default: withCtx(() => [
                    createTextVNode("\u90E8\u9580")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListGroupItem, null, {
                  default: withCtx(() => [
                    createVNode(_component_BFormSelect, {
                      margin: "x-auto",
                      "relative-width": "25",
                      class: "text-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_b_option, { selected: "" }, {
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
                }),
                createVNode(_component_CardHeader, { class: "text-center" }, {
                  default: withCtx(() => [
                    createTextVNode("\u9451\u5B9A\u79D1\u76EE")
                  ]),
                  _: 1
                }),
                createVNode(_component_ListGroupItem, null, {
                  default: withCtx(() => [
                    createVNode(_component_BFormSelect, {
                      margin: "x-auto",
                      "relative-width": "25",
                      class: "text-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_b_option, { selected: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u9451\u5B9A\u79D1\u76EE ")
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
                    createVNode(_component_BFormSelect, {
                      margin: "x-auto",
                      "relative-width": "25",
                      class: "text-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_b_option, { selected: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u88DC\u52A9\u79D1\u76EE ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", null, "\u304B\u3089"),
                    createVNode(_component_BFormSelect, {
                      margin: "x-auto",
                      "relative-width": "25",
                      class: "text-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_b_option, { selected: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u88DC\u52A9\u79D1\u76EE ")
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
                    createVNode(_component_BFormSelect, {
                      margin: "x-auto",
                      "relative-width": "25",
                      class: "text-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_b_option, { selected: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" 2023 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_b_option, { value: "1" }, {
                          default: withCtx(() => [
                            createTextVNode(" 2022 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_b_option, { value: "2" }, {
                          default: withCtx(() => [
                            createTextVNode(" 2021 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_b_option, { value: "3" }, {
                          default: withCtx(() => [
                            createTextVNode(" 2020 ")
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
                            createTextVNode("\u6708\u6BCE\u6539\u30DA\u30FC\u30B8 "),
                            createVNode(_component_b_button, {
                              button: "secondary",
                              toggle: "collapse",
                              target: "#collapseExample"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" ? ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Collapse, { id: "collapseExample" }, {
                      default: withCtx(() => [
                        createVNode(_component_Card, null, {
                          default: withCtx(() => [
                            createVNode(_component_CardBody, { "text-background": "secondary-subtle" }, {
                              default: withCtx(() => [
                                createTextVNode(" PDF\u51FA\u529B\u6642\u306E\u307F\u6709\u52B9\u3067\u3059 ")
                              ]),
                              _: 1
                            })
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
                  createVNode(_component_BFormSelect, {
                    margin: "x-auto",
                    "relative-width": "25",
                    class: "text-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_b_option, { selected: "" }, {
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
              }),
              createVNode(_component_CardHeader, { class: "text-center" }, {
                default: withCtx(() => [
                  createTextVNode("\u90E8\u9580")
                ]),
                _: 1
              }),
              createVNode(_component_ListGroupItem, null, {
                default: withCtx(() => [
                  createVNode(_component_BFormSelect, {
                    margin: "x-auto",
                    "relative-width": "25",
                    class: "text-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_b_option, { selected: "" }, {
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
              }),
              createVNode(_component_CardHeader, { class: "text-center" }, {
                default: withCtx(() => [
                  createTextVNode("\u9451\u5B9A\u79D1\u76EE")
                ]),
                _: 1
              }),
              createVNode(_component_ListGroupItem, null, {
                default: withCtx(() => [
                  createVNode(_component_BFormSelect, {
                    margin: "x-auto",
                    "relative-width": "25",
                    class: "text-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_b_option, { selected: "" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u9451\u5B9A\u79D1\u76EE ")
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
                  createVNode(_component_BFormSelect, {
                    margin: "x-auto",
                    "relative-width": "25",
                    class: "text-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_b_option, { selected: "" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u88DC\u52A9\u79D1\u76EE ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", null, "\u304B\u3089"),
                  createVNode(_component_BFormSelect, {
                    margin: "x-auto",
                    "relative-width": "25",
                    class: "text-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_b_option, { selected: "" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u88DC\u52A9\u79D1\u76EE ")
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
                  createVNode(_component_BFormSelect, {
                    margin: "x-auto",
                    "relative-width": "25",
                    class: "text-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_b_option, { selected: "" }, {
                        default: withCtx(() => [
                          createTextVNode(" 2023 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_b_option, { value: "1" }, {
                        default: withCtx(() => [
                          createTextVNode(" 2022 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_b_option, { value: "2" }, {
                        default: withCtx(() => [
                          createTextVNode(" 2021 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_b_option, { value: "3" }, {
                        default: withCtx(() => [
                          createTextVNode(" 2020 ")
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
                          createTextVNode("\u6708\u6BCE\u6539\u30DA\u30FC\u30B8 "),
                          createVNode(_component_b_button, {
                            button: "secondary",
                            toggle: "collapse",
                            target: "#collapseExample"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" ? ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Collapse, { id: "collapseExample" }, {
                    default: withCtx(() => [
                      createVNode(_component_Card, null, {
                        default: withCtx(() => [
                          createVNode(_component_CardBody, { "text-background": "secondary-subtle" }, {
                            default: withCtx(() => [
                              createTextVNode(" PDF\u51FA\u529B\u6642\u306E\u307F\u6709\u52B9\u3067\u3059 ")
                            ]),
                            _: 1
                          })
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
//# sourceMappingURL=subledger-3c83e336.mjs.map
