import { defineComponent, h } from 'vue';
import { h as hProps } from '../server.mjs';
import { B as BlockProps, u as useBlock } from './useBlock-53156015.mjs';

const __nuxt_component_4 = /* @__PURE__ */ defineComponent({
  name: "HtmlDiv",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    return () => h(props.tag, hProps(block), context.slots);
  }
});

export { __nuxt_component_4 as _ };
//# sourceMappingURL=div-09e0ac7d.mjs.map
