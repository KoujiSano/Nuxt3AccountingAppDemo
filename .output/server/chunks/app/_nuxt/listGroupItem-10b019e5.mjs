import { defineComponent, h, ref } from 'vue';
import { B as BlockProps, u as useBlock } from './useBlock-07c4f4ed.mjs';
import { h as hProps } from '../server.mjs';
import { a as ActiveProps, I as IDProps, T as ToggleProps, u as useID, d as useActive, b as useToggle } from './useItemsActive-ba3b63f7.mjs';

const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
  name: "BsCard",
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
        card: true
      }
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
const __nuxt_component_1 = /* @__PURE__ */ defineComponent({
  name: "BsCardHeader",
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
        "card-header": true
      }
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
const __nuxt_component_3 = /* @__PURE__ */ defineComponent({
  name: "BsListItem",
  props: {
    ...BlockProps,
    ...ActiveProps,
    ...IDProps,
    ...ToggleProps,
    tag: {
      type: String,
      default: "li"
    },
    theme: {
      type: String,
      default: void 0
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const id = useID(props, "list-group-item");
    const elementRef = ref();
    const active = useActive(props, "list", elementRef);
    const toggle = useToggle(props);
    const current = {
      class: {
        "list-group-item": true,
        [`list-group-item-${props.theme}`]: props.theme
      },
      ref: elementRef
    };
    return () => h(props.tag, hProps(current, id, block, active, toggle), context.slots);
  }
});

export { __nuxt_component_0 as _, __nuxt_component_1 as a, __nuxt_component_3 as b };
//# sourceMappingURL=listGroupItem-10b019e5.mjs.map
