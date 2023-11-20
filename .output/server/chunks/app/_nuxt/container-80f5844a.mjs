import { defineComponent, h, computed } from 'vue';
import { h as hProps } from '../server.mjs';
import { B as BlockProps, u as useBlock } from './useBlock-07c4f4ed.mjs';

const GridContainerProps = {
  ...BlockProps,
  type: {
    type: String
    // fluid , {breakpoint}
  }
};
function useGridContainer(props) {
  const block = useBlock(props);
  return {
    class: computed(() => {
      return {
        [`container-${props.type}`]: props.type,
        container: !props.type,
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
const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
  name: "BsGridContainer",
  props: {
    ...GridContainerProps,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props, context) {
    const gridContainer = useGridContainer(props);
    return () => h(props.tag, hProps(gridContainer), context.slots);
  }
});

export { __nuxt_component_0 as _ };
//# sourceMappingURL=container-80f5844a.mjs.map
