import { defineComponent, ref, h, watch, computed, Teleport } from 'vue';
import { h as hProps, d as hSlots, k as useElementHover, f as addProp } from '../server.mjs';
import { B as BlockProps, u as useBlock } from './useBlock-07c4f4ed.mjs';
import { A as AnchorButtonProps, I as IDProps, T as ToggleProps, a as ActiveProps, c as useAnchorButton, u as useID, b as useToggle, d as useActive, E as EventEmitProps, h as useEventEmitter } from './useItemsActive-ba3b63f7.mjs';
import { a as useFloating, b as arrow } from './bslink-2075abf3.mjs';
import { autoUpdate, flip, shift, offset } from '@floating-ui/dom';

const CloseButtonProps = {
  ...EventEmitProps,
  dismiss: {
    type: String
  }
};
function useCloseButton(props, elementRef) {
  if (!props.dismiss) {
    return {};
  }
  const dismissEmitter = useEventEmitter(props, "dismiss", props.dismiss || "");
  const dismiss = () => {
    dismissEmitter();
  };
  return {
    method: {
      dismiss
    },
    event: {
      onClick: dismiss
    }
  };
}
const TooltipProps = {
  title: {
    type: [String],
    default: ""
  },
  placement: {
    type: String,
    default: "top"
  },
  template: {
    type: String
  }
};
function useTooltip(props, elementRef) {
  if (!props.toggle || props.toggle != "tooltip") {
    return {};
  }
  const isHovered = useElementHover(elementRef);
  const isShow = ref(false);
  const tooltipRef = ref();
  const tooltipArrowRef = ref();
  const tooltiPlacement = ref(props.placement);
  const { floatingStyles, placement, middlewareData } = useFloating(elementRef, tooltipRef, {
    placement: tooltiPlacement,
    whileElementsMounted: autoUpdate,
    middleware: [
      // autoPlacement(),
      flip(),
      shift(),
      offset(5),
      arrow({ element: tooltipArrowRef })
    ]
  });
  watch(isHovered, () => {
    isShow.value = isHovered.value;
  });
  return {
    attr: computed(() => {
      return {
        // ...addProp(isShown.value, "aria-describedby", PopoverID.id),
      };
    }),
    render: () => {
      var _a, _b, _c, _d;
      if (isShow.value) {
        return h(
          Teleport,
          {
            to: "body"
          },
          h(
            "div",
            {
              class: {
                tooltip: true,
                "bs-tooltip-auto": true,
                show: isShow.value
              },
              style: floatingStyles.value,
              "data-popper-placement": placement.value,
              ref: tooltipRef
            },
            [
              h(
                "div",
                {
                  class: {
                    "tooltip-arrow": true
                  },
                  style: {
                    ...addProp((_a = middlewareData.value.arrow) == null ? void 0 : _a.x, "left", `${(_b = middlewareData.value.arrow) == null ? void 0 : _b.x}px`),
                    ...addProp((_c = middlewareData.value.arrow) == null ? void 0 : _c.y, "top", `${(_d = middlewareData.value.arrow) == null ? void 0 : _d.y}px`),
                    position: "absolute"
                  },
                  ref: tooltipArrowRef
                }
              ),
              h(
                "div",
                {
                  class: {
                    "tooltip-inner": true
                  }
                },
                props.title
              )
            ]
          )
        );
      } else {
        return void 0;
      }
    }
  };
}
const PopoverProps = {
  title: {
    type: [String],
    default: ""
  },
  content: {
    type: [String],
    default: ""
  },
  placement: {
    type: [String],
    default: "right"
  },
  template: {
    type: String
  }
};
function usePopover(props, elementRef) {
  if (!props.toggle || props.toggle != "popover") {
    return {};
  }
  const popoverRef = ref();
  const arrowRef = ref();
  const isShow = ref(false);
  const { floatingStyles, placement, middlewareData } = useFloating(elementRef, popoverRef, {
    placement: props.placement,
    // whileElementsMounted: autoUpdate,
    middleware: [
      // autoPlacement(),
      flip(),
      shift(),
      offset(9),
      arrow({ element: arrowRef })
    ]
  });
  const toggle = async () => {
    isShow.value = !isShow.value;
  };
  return {
    attr: computed(() => {
      return {
        // ...addProp(isShown.value, "aria-describedby", PopoverID.id),
      };
    }),
    event: {
      onClick: toggle
    },
    render: () => {
      var _a, _b, _c, _d;
      if (isShow.value) {
        return h(
          Teleport,
          {
            to: "body"
          },
          h(
            "div",
            {
              class: {
                popover: true,
                "bs-popover-auto": true,
                fade: true,
                show: true
              },
              style: floatingStyles.value,
              "data-popper-placement": placement.value,
              ref: popoverRef
            },
            [
              h(
                "div",
                {
                  class: {
                    "popover-arrow": true
                  },
                  style: {
                    ...addProp((_a = middlewareData.value.arrow) == null ? void 0 : _a.x, "left", `${(_b = middlewareData.value.arrow) == null ? void 0 : _b.x}px`),
                    ...addProp((_c = middlewareData.value.arrow) == null ? void 0 : _c.y, "top", `${(_d = middlewareData.value.arrow) == null ? void 0 : _d.y}px`),
                    position: "absolute"
                  },
                  ref: arrowRef
                }
              ),
              h(
                "h3",
                {
                  class: {
                    "popover-header": true
                  }
                },
                props.title
              ),
              h(
                "div",
                {
                  class: {
                    "popover-body": true
                  }
                },
                props.content
              )
            ]
          )
        );
      } else {
        return void 0;
      }
    }
  };
}
const __nuxt_component_11 = /* @__PURE__ */ defineComponent({
  name: "HtmlButton",
  props: {
    ...BlockProps,
    ...AnchorButtonProps,
    ...IDProps,
    ...ToggleProps,
    ...ActiveProps,
    ...CloseButtonProps,
    ...TooltipProps,
    ...PopoverProps,
    type: {
      type: String,
      default: "button"
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const anchorButton = useAnchorButton(props);
    const id = useID(props, "button");
    const toggle = useToggle(props);
    const active = useActive(props, "button", elementRef);
    const close = useCloseButton(props);
    const tooltip = useTooltip(props, elementRef);
    const popover = usePopover(props, elementRef);
    const current = {
      attr: {
        type: props.type
      },
      ref: elementRef
    };
    return () => h(
      "button",
      hProps(
        current,
        id,
        anchorButton,
        close,
        toggle,
        active,
        popover,
        tooltip,
        block
      ),
      hSlots(context.slots.default, tooltip.render, popover.render)
    );
  }
});

export { PopoverProps as P, TooltipProps as T, __nuxt_component_11 as _, usePopover as a, useTooltip as u };
//# sourceMappingURL=button-5e36cf2a.mjs.map
