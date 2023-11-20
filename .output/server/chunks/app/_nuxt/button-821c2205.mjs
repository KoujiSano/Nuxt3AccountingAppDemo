import { defineComponent, ref, h } from 'vue';
import { h as hProps, f as hSlots } from '../server.mjs';
import { B as BlockProps, u as useBlock } from './useBlock-53156015.mjs';
import { A as AnchorButtonProps, I as IDProps, T as ToggleProps, c as ActiveProps, u as useAnchorButton, a as useID, d as useToggle, e as useActive, E as EventEmitProps, h as useEventEmitter } from './useItemsActive-c7cd0b82.mjs';
import { T as TooltipProps, P as PopoverProps, u as useTooltip, a as usePopover } from './usePopover-952991a7.mjs';

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
const __nuxt_component_9 = /* @__PURE__ */ defineComponent({
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

export { __nuxt_component_9 as _ };
//# sourceMappingURL=button-821c2205.mjs.map
