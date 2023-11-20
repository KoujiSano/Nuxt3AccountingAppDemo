import { defineComponent, ref, computed, h } from 'vue';
import { B as BlockProps, u as useBlock } from './useBlock-53156015.mjs';
import { h as hProps, d as addProp } from '../server.mjs';
import { I as IDProps, a as useID, A as AnchorButtonProps, u as useAnchorButton, b as useIDRef } from './useItemsActive-c7cd0b82.mjs';
import { D as DropdownProps, u as useDropdown } from './useDropdown-8ddfcd6f.mjs';

const __nuxt_component_6 = /* @__PURE__ */ defineComponent({
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
const __nuxt_component_7 = /* @__PURE__ */ defineComponent({
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

export { __nuxt_component_6 as _, __nuxt_component_7 as a };
//# sourceMappingURL=radioToggleButton-2be9584e.mjs.map
