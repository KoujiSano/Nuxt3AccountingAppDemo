import { defineComponent, ref, h } from 'vue';
import { h as hProps, j as hSlots } from '../server.mjs';
import { B as BlockProps, u as useBlock } from './useBlock-d3cb816a.mjs';
import { A as AnchorButtonProps, I as IDProps, T as ToggleProps, e as ActiveProps, a as useAnchorButton, u as useID, g as useToggle, f as useActive, E as EventEmitProps, h as useEventEmitter } from '../../floating-ui.vue.esm.mjs';
import { T as TooltipProps, P as PopoverProps, u as useTooltip, a as usePopover } from './usePopover-5c9bdc28.mjs';

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
const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
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

export { __nuxt_component_0 as _ };
//# sourceMappingURL=button-828e61fb.mjs.map
