import { defineComponent, computed, h } from 'vue';
import { B as BlockProps, u as useBlock } from './useBlock-d3cb816a.mjs';
import { f as hasValue, h as hProps } from '../server.mjs';

const __nuxt_component_3 = /* @__PURE__ */ defineComponent({
  name: "HtmlTable",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "table"
    },
    theme: {
      type: String,
      default: void 0
    },
    striped: {
      type: Boolean
    },
    hover: {
      type: Boolean
    },
    active: {
      type: Boolean
    },
    bordered: {
      type: Boolean
    },
    borderless: {
      type: Boolean
    },
    small: {
      type: Boolean
    },
    caption: {
      type: String,
      default: void 0
    },
    responsive: {
      type: [Boolean, String],
      default: void 0
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: computed(() => {
        return {
          table: true,
          [`table-${props.theme}`]: props.theme,
          [`table-striped`]: props.striped,
          [`table-hover`]: props.hover,
          [`table-active`]: props.active,
          [`table-bordered`]: props.bordered,
          [`table-borderless`]: props.borderless,
          [`table-sm`]: props.small,
          [`caption-${props.caption}`]: props.caption
        };
      })
    };
    return () => {
      if (props.responsive) {
        return h(
          "div",
          {
            class: {
              [`table-responsive${hasValue(props.responsive) ? `-${props.responsive}` : ""}`]: props.responsive
            }
          },
          h(
            props.tag,
            {
              ...context.attrs,
              ...hProps(current, block)
            },
            context.slots
          )
        );
      } else {
        return h(
          props.tag,
          {
            ...context.attrs,
            ...hProps(current, block)
          },
          context.slots
        );
      }
    };
  }
});
const __nuxt_component_4 = /* @__PURE__ */ defineComponent({
  name: "HtmlTableHead",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "thead"
    },
    theme: {
      type: String,
      default: void 0
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: computed(() => {
        return {
          [`table-${props.theme}`]: props.theme
        };
      })
    };
    return () => h(props.tag, hProps(block, current), context.slots);
  }
});
const __nuxt_component_5 = /* @__PURE__ */ defineComponent({
  name: "HtmlTableRow",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "tr"
    },
    active: {
      type: Boolean
    },
    theme: {
      type: String,
      default: ""
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: computed(() => {
        return {
          [`table-${props.theme}`]: props.theme,
          [`table-active`]: props.active
        };
      })
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
const __nuxt_component_6 = /* @__PURE__ */ defineComponent({
  name: "HtmlTableH",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "th"
    },
    theme: {
      type: String,
      default: void 0
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: computed(() => {
        return {
          [`table-${props.theme}`]: props.theme
        };
      })
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
const __nuxt_component_7 = /* @__PURE__ */ defineComponent({
  name: "HtmlTableBody",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "tbody"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    return () => h(props.tag, hProps(block), context.slots);
  }
});
const __nuxt_component_8 = /* @__PURE__ */ defineComponent({
  name: "HtmlTableData",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "td"
    },
    active: {
      type: Boolean
    },
    theme: {
      type: String,
      default: void 0
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: computed(() => {
        return {
          [`table-${props.theme}`]: props.theme,
          [`table-active`]: props.active
        };
      })
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});

export { __nuxt_component_3 as _, __nuxt_component_4 as a, __nuxt_component_5 as b, __nuxt_component_6 as c, __nuxt_component_7 as d, __nuxt_component_8 as e };
//# sourceMappingURL=td-1fb4247a.mjs.map
