import { defineComponent, h, ref, computed } from 'vue';
import { I as InlineProps, a as useInline, B as BlockProps, u as useBlock } from './useBlock-07c4f4ed.mjs';
import { h as hProps, f as addProp } from '../server.mjs';
import { I as IDProps, u as useID, A as AnchorButtonProps, c as useAnchorButton, e as useIDRef } from './useItemsActive-ba3b63f7.mjs';
import { D as DropdownProps, u as useDropdown } from './useDropdown-b5e89e2e.mjs';

const __nuxt_component_4 = /* @__PURE__ */ defineComponent({
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
const __nuxt_component_5 = /* @__PURE__ */ defineComponent({
  name: "BsButtonGroup",
  props: {
    ...BlockProps,
    ...IDProps,
    ...DropdownProps,
    tag: {
      type: String,
      default: "div"
    },
    size: {
      type: String,
      default: void 0
    },
    vertical: {
      type: Boolean
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const id = useID(props, "button-group");
    const dropdown = useDropdown(props, context, elementRef);
    const current = {
      class: computed(() => {
        return {
          "btn-group": true,
          [`btn-group-${props.size}`]: props.size,
          "btn-group-vertical": props.vertical
        };
      }),
      attr: {
        role: "group"
      },
      ref: elementRef
    };
    return () => h(props.tag, hProps(current, block, id, dropdown), context.slots);
  }
});
const __nuxt_component_6 = /* @__PURE__ */ defineComponent({
  name: "BsRadioToggleButton",
  props: {
    ...BlockProps,
    ...AnchorButtonProps,
    ...IDProps
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const button = useAnchorButton(props);
    const id = useID(props, "radio-toggle-button");
    const eid = useIDRef(props);
    const radio = {
      ref: elementRef,
      class: {
        [`btn-check`]: true
      },
      attr: {
        type: "radio",
        autocomplete: "off",
        ...addProp(props.disabled, "disabled", "disabled")
      }
    };
    const label = {
      attr: computed(() => {
        return {
          for: eid.value
        };
      })
    };
    return () => [
      h(
        "input",
        {
          ...context.attrs,
          ...hProps(radio, id)
        }
      ),
      h("label", hProps(label, button, block), context.slots)
    ];
  }
});
const __nuxt_component_7 = /* @__PURE__ */ defineComponent({
  name: "BsCheckboxToggleButton",
  props: {
    ...BlockProps,
    ...AnchorButtonProps,
    ...IDProps
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const button = useAnchorButton(props);
    const id = useID(props, "checkbox-toggle-button");
    const eid = useIDRef(props);
    const checkbox = {
      ref: elementRef,
      class: {
        [`btn-check`]: true
      },
      attr: {
        type: "checkbox",
        autocomplete: "off",
        ...addProp(props.disabled, "disabled", "disabled")
      }
    };
    const label = {
      attr: computed(() => {
        return {
          for: eid.value
        };
      })
    };
    return () => [
      h(
        "input",
        {
          ...context.attrs,
          ...hProps(checkbox, id)
        }
      ),
      h("label", hProps(label, button, block), context.slots)
    ];
  }
});

export { __nuxt_component_4 as _, __nuxt_component_5 as a, __nuxt_component_6 as b, __nuxt_component_7 as c };
//# sourceMappingURL=checkboxToggleButton-4e25caf6.mjs.map
