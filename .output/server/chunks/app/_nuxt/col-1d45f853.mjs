import { defineComponent, h, computed } from 'vue';
import { h as hProps, t as addClassNames } from '../server.mjs';
import { isString } from 'lodash-es';
import { B as BlockProps, u as useBlock } from './useBlock-53156015.mjs';

const GridRowProps = {
  ...BlockProps,
  auto: {
    type: Boolean
  },
  columns: {
    type: String
  },
  align: {
    type: String
  },
  rowreverse: {
    type: [Boolean]
  },
  gutter: {
    type: [Number, String]
  }
};
function useGridRow(props) {
  const block = useBlock(props);
  return {
    class: computed(() => {
      return {
        row: props.row,
        "row-cols-auto": props.auto,
        "flex-row-reverse": props.rowreverse,
        [`align-${props.align}`]: props.align,
        ...addClassNames(props.columns, (n) => `row-cols-${n}`),
        ...addClassNames(
          props.gutter,
          (n) => `g${isString(props.gutter) && ["x", "y"].indexOf(n.substring(0, 1)) > -1 ? `${n}` : `-${n}`}`
        ),
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
const __nuxt_component_1 = /* @__PURE__ */ defineComponent({
  name: "BsGridRow",
  props: {
    ...GridRowProps,
    tag: {
      type: String,
      default: "div"
    },
    row: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    const gridRow = useGridRow(props);
    return () => h(props.tag, hProps(gridRow), context.slots);
  }
});
const __nuxt_component_2 = /* @__PURE__ */ defineComponent({
  name: "BsGridCol",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "div"
    },
    col: {
      type: [Boolean, String, Number],
      default: true
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    return () => h(props.tag, hProps(block), context.slots);
  }
});

export { __nuxt_component_1 as _, __nuxt_component_2 as a };
//# sourceMappingURL=col-1d45f853.mjs.map
