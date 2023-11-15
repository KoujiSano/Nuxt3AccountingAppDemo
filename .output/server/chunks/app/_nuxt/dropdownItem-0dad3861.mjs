import { defineComponent, ref, h, inject, computed, watch, nextTick } from 'vue';
import { h as hProps, A as onClickOutside, f as addProp } from '../server.mjs';
import { B as BlockProps, u as useBlock } from './useBlock-07c4f4ed.mjs';
import { D as DropdownProps, u as useDropdown } from './useDropdown-b5e89e2e.mjs';
import { A as AnchorButtonProps, T as ToggleProps, c as useAnchorButton, b as useToggle, I as IDProps, a as ActiveProps, u as useID, d as useActive } from './useItemsActive-ba3b63f7.mjs';
import { u as useScrollSpyItem, B as BsLink, a as useFloating } from './bslink-2075abf3.mjs';
import { autoUpdate, flip, shift, offset } from '@floating-ui/dom';

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
const DropdownMenuProps = {
  floating: {
    type: Object
  },
  dark: {
    type: Boolean
  },
  autoClose: {
    type: [Boolean, String],
    default: true
  },
  alignment: {
    type: String,
    default: "start"
  },
  offset: {
    type: String
  },
  reference: {
    type: String
  }
};
function useDropdownMenu(props, elementRef) {
  var _a;
  const tipPlacement = ref((_a = props.floating) == null ? void 0 : _a.placement);
  const isShow = ref(false);
  const active = inject("active.dropdown", ref(false));
  const toggleRef = inject("toggleRef.dropdown", ref());
  const placement = inject("placement.dropdown", ref(""));
  const floatingPlace = computed(() => {
    switch (placement.value) {
      case "dropup":
        if (props.alignment == "end") {
          return `top-end`;
        } else {
          return `top-start`;
        }
      case "dropend":
        if (props.alignment == "end") {
          return `right-end`;
        } else {
          return `right-start`;
        }
      case "dropstart":
        if (props.alignment == "end") {
          return `left-end`;
        } else {
          return `left-start`;
        }
      default:
        if (props.alignment == "end") {
          return `bottom-end`;
        } else {
          return `bottom-start`;
        }
    }
  });
  const { floatingStyles } = useFloating(toggleRef, elementRef, {
    placement: floatingPlace.value,
    whileElementsMounted: autoUpdate,
    middleware: [
      flip(),
      shift(),
      offset(2)
    ]
  });
  if ([true, "", "outside", "true"].includes(props.autoClose)) {
    onClickOutside(elementRef, (_event) => {
      if (active.value) {
        active.value = false;
        _event.stopPropagation();
      }
    });
  }
  watch(active, (value) => {
    if (value) {
      show();
    } else {
      hide();
    }
  });
  const show = async () => {
    await nextTick();
    isShow.value = true;
  };
  const hide = async () => {
    isShow.value = false;
  };
  return {
    class: computed(() => {
      return {
        "dropdown-menu": true,
        "dropdown-menu-dark": props.dark,
        show: isShow.value
      };
    }),
    style: computed(() => {
      if (toggleRef.value) {
        return floatingStyles.value;
      } else {
        return {};
      }
    }),
    attr: computed(() => {
      return {
        ...addProp(active.value, "data-popper-placement", tipPlacement.value || "")
      };
    }),
    state: {
      useTeleport: false,
      //buttonID.value ? true : false,
      tipPlacement,
      isShow
    }
  };
}
const __nuxt_component_5 = /* @__PURE__ */ defineComponent({
  name: "BsDropdownMenu",
  props: {
    ...BlockProps,
    ...DropdownMenuProps,
    tag: {
      type: String,
      default: "ul"
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const dropdownMenu = useDropdownMenu(props, elementRef);
    const current = {
      ref: elementRef
    };
    return () => {
      return h(props.tag, hProps(current, block, dropdownMenu), context.slots);
    };
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

export { __nuxt_component_3 as _, __nuxt_component_4 as a, __nuxt_component_5 as b, __nuxt_component_6 as c };
//# sourceMappingURL=dropdownItem-0dad3861.mjs.map
