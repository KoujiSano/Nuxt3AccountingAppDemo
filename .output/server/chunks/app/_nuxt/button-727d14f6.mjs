import { unref, computed, ref, shallowRef, watch, getCurrentScope, onScopeDispose, shallowReadonly, defineComponent, h, Teleport } from 'vue';
import { h as hProps, d as hSlots, k as useElementHover, i as addProp } from '../server.mjs';
import { B as BlockProps, A as AnchorButtonProps, a as IDProps, T as ToggleProps, b as ActiveProps, u as useBlock, f as useAnchorButton, d as useID, e as useToggle, g as useActive, E as EventEmitProps, n as useEventEmitter } from './bslink-dfce3393.mjs';
import { arrow as arrow$1, computePosition, autoUpdate, flip, shift, offset } from '@floating-ui/dom';

function unwrapElement(element) {
  var _$el;
  return (_$el = element == null ? void 0 : element.$el) != null ? _$el : element;
}

/**
 * Positions an inner element of the floating element such that it is centered to the reference element.
 * @param options The arrow options.
 * @see https://floating-ui.com/docs/arrow
 */
function arrow(options) {
  return {
    name: 'arrow',
    options,
    fn(args) {
      const element = unwrapElement(unref(options.element));
      if (element == null) {
        return {};
      }
      return arrow$1({
        element,
        padding: options.padding
      }).fn(args);
    }
  };
}

function getDPR(element) {
  {
    return 1;
  }
}

function roundByDPR(element, value) {
  const dpr = getDPR();
  return Math.round(value * dpr) / dpr;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element next to a reference element when it is given a certain CSS positioning strategy.
 * @param reference The reference template ref.
 * @param floating The floating template ref.
 * @param options The floating options.
 * @see https://floating-ui.com/docs/vue
 */
function useFloating(reference, floating, options) {
  if (options === void 0) {
    options = {};
  }
  const whileElementsMountedOption = options.whileElementsMounted;
  const openOption = computed(() => {
    var _unref;
    return (_unref = unref(options.open)) != null ? _unref : true;
  });
  const middlewareOption = computed(() => unref(options.middleware));
  const placementOption = computed(() => {
    var _unref2;
    return (_unref2 = unref(options.placement)) != null ? _unref2 : 'bottom';
  });
  const strategyOption = computed(() => {
    var _unref3;
    return (_unref3 = unref(options.strategy)) != null ? _unref3 : 'absolute';
  });
  const transformOption = computed(() => {
    var _unref4;
    return (_unref4 = unref(options.transform)) != null ? _unref4 : true;
  });
  const referenceElement = computed(() => unwrapElement(reference.value));
  const floatingElement = computed(() => unwrapElement(floating.value));
  const x = ref(0);
  const y = ref(0);
  const strategy = ref(strategyOption.value);
  const placement = ref(placementOption.value);
  const middlewareData = shallowRef({});
  const isPositioned = ref(false);
  const floatingStyles = computed(() => {
    const initialStyles = {
      position: strategy.value,
      left: '0',
      top: '0'
    };
    if (!floatingElement.value) {
      return initialStyles;
    }
    const xVal = roundByDPR(floatingElement.value, x.value);
    const yVal = roundByDPR(floatingElement.value, y.value);
    if (transformOption.value) {
      return {
        ...initialStyles,
        transform: "translate(" + xVal + "px, " + yVal + "px)",
        ...(getDPR(floatingElement.value) >= 1.5 && {
          willChange: 'transform'
        })
      };
    }
    return {
      position: strategy.value,
      left: xVal + "px",
      top: yVal + "px"
    };
  });
  let whileElementsMountedCleanup;
  function update() {
    if (referenceElement.value == null || floatingElement.value == null) {
      return;
    }
    computePosition(referenceElement.value, floatingElement.value, {
      middleware: middlewareOption.value,
      placement: placementOption.value,
      strategy: strategyOption.value
    }).then(position => {
      x.value = position.x;
      y.value = position.y;
      strategy.value = position.strategy;
      placement.value = position.placement;
      middlewareData.value = position.middlewareData;
      isPositioned.value = true;
    });
  }
  function cleanup() {
    if (typeof whileElementsMountedCleanup === 'function') {
      whileElementsMountedCleanup();
      whileElementsMountedCleanup = undefined;
    }
  }
  function attach() {
    cleanup();
    if (whileElementsMountedOption === undefined) {
      update();
      return;
    }
    if (referenceElement.value != null && floatingElement.value != null) {
      whileElementsMountedCleanup = whileElementsMountedOption(referenceElement.value, floatingElement.value, update);
      return;
    }
  }
  function reset() {
    if (!openOption.value) {
      isPositioned.value = false;
    }
  }
  watch([middlewareOption, placementOption, strategyOption], update, {
    flush: 'sync'
  });
  watch([referenceElement, floatingElement], attach, {
    flush: 'sync'
  });
  watch(openOption, reset, {
    flush: 'sync'
  });
  if (getCurrentScope()) {
    onScopeDispose(cleanup);
  }
  return {
    x: shallowReadonly(x),
    y: shallowReadonly(y),
    strategy: shallowReadonly(strategy),
    placement: shallowReadonly(placement),
    middlewareData: shallowReadonly(middlewareData),
    isPositioned: shallowReadonly(isPositioned),
    floatingStyles,
    update
  };
}

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
//# sourceMappingURL=button-727d14f6.mjs.map
