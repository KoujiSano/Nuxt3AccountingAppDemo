import { defineComponent, computed, h, ref } from 'vue';
import { I as InlineProps, a as useInline } from './useBlock-53156015.mjs';
import { d as addProp, h as hProps, j as isPropDefined } from '../server.mjs';
import { isString, isBoolean } from 'lodash-es';

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
    class: computed(() => {
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
      class: computed(() => {
        return {
          [`form-select`]: true,
          [`form-select-${props.size}`]: props.size
        };
      }),
      attr: computed(() => {
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

export { ValidProps as V, __nuxt_component_4 as _, __nuxt_component_5 as a, useValid as u };
//# sourceMappingURL=option-6d163cd1.mjs.map
