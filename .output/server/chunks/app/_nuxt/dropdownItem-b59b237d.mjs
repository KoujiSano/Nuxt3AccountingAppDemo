import { defineComponent, ref, h, inject, watch, computed } from 'vue';
import { h as hProps, m as useRoute } from '../server.mjs';
import { B as BlockProps, u as useBlock, A as AnchorButtonProps, T as ToggleProps, f as useAnchorButton, e as useToggle, a as IDProps, b as ActiveProps, d as useID, h as useScrollSpyItem, g as useActive, i as BsLink, j as useEvent } from './bslink-dfce3393.mjs';

const DropdownProps = {
  placement: {
    type: String,
    default: "dropdown"
  }
};
function useDropdown(props, context, elementRef) {
  const { expose, exposeState, emit } = useEvent(props, elementRef, "dropdown");
  const active = ref(false);
  const buttonID = ref();
  const placement = ref(props.placement);
  const toggleRef = ref();
  const show = async () => {
    if (active.value) {
      return;
    }
    emit(context, "show");
    active.value = true;
  };
  const hide = async () => {
    if (!active.value) {
      return;
    }
    emit(context, "hide");
    active.value = false;
  };
  const toggle = async () => {
    active.value ? await hide() : await show();
    return active.value;
  };
  const route = useRoute();
  watch(() => route.fullPath, () => {
    hide();
  });
  const method = expose({ show, hide, toggle, dismiss: hide });
  exposeState({ active, buttonID, placement, toggleRef });
  const cls = {};
  if (props.placement != "dropdown") {
    cls[props.placement] = true;
  }
  return {
    class: computed(() => {
      return {
        ...cls
      };
    }),
    attr: computed(() => {
      return {
        "data-bv-active": active.value
      };
    }),
    method
  };
}
const __nuxt_component_3 = /* @__PURE__ */ defineComponent({
  name: "BsDropdown",
  props: {
    ...BlockProps,
    // ...IDProps,
    ...DropdownProps,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const dropdown = useDropdown(props, context, elementRef);
    const current = {
      class: {
        dropdown: true
      },
      ref: elementRef
    };
    return () => h(
      props.tag,
      hProps(block, dropdown, current),
      // current は最後に
      context.slots
    );
  }
});
const __nuxt_component_4 = /* @__PURE__ */ defineComponent({
  name: "BsDropdownToggle",
  props: {
    ...BlockProps,
    ...AnchorButtonProps,
    ...ToggleProps,
    // ...IDProps,
    tag: {
      type: String,
      default: "a"
    },
    toggle: {
      type: String,
      default: "dropdown"
    }
  },
  setup(props, context) {
    const elementRef = inject("toggleRef.dropdown", ref());
    const block = useBlock(props);
    const anchorButton = useAnchorButton(props);
    const toggle = useToggle(props);
    const current = {
      ref: elementRef
    };
    return () => h(
      anchorButton.tag,
      hProps(current, toggle, anchorButton, block),
      context.slots
    );
  }
});
const __nuxt_component_6 = /* @__PURE__ */ defineComponent({
  name: "BsDropdownItem",
  props: {
    ...BlockProps,
    ...IDProps,
    ...ActiveProps,
    ...AnchorButtonProps,
    ...ToggleProps
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const id = useID(props, "dropdown-item");
    const spyItem = useScrollSpyItem(props, elementRef);
    const active = useActive(props, "nav", elementRef);
    const anchorButton = useAnchorButton(props);
    const toggle = useToggle(props);
    return () => h(
      "li",
      hProps(block),
      h(
        BsLink,
        hProps(
          {
            class: {
              "dropdown-item": true
            },
            ref: elementRef
          },
          anchorButton,
          active,
          spyItem,
          toggle,
          id
        ),
        context.slots.default
      )
    );
  }
});

export { __nuxt_component_3 as _, __nuxt_component_4 as a, __nuxt_component_6 as b };
//# sourceMappingURL=dropdownItem-b59b237d.mjs.map
