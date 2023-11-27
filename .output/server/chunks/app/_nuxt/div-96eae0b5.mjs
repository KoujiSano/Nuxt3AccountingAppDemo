import { defineComponent, h } from 'vue';
import { h as hProps } from '../server.mjs';
import { B as BlockProps, u as useBlock } from './useBlock-d3cb816a.mjs';

const __nuxt_component_1 = /* @__PURE__ */ defineComponent({
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

export { __nuxt_component_1 as _ };
//# sourceMappingURL=div-96eae0b5.mjs.map
