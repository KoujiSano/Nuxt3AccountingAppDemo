import { defineComponent, ref, h } from 'vue';
import { e as exposeMethods, h as hProps, f as hSlots } from '../server.mjs';
import { I as InlineProps, a as useInline } from './useBlock-53156015.mjs';
import { A as AnchorButtonProps, I as IDProps, T as ToggleProps, c as ActiveProps, a as useID, d as useToggle, u as useAnchorButton, e as useActive } from './useItemsActive-c7cd0b82.mjs';
import { T as TooltipProps, P as PopoverProps, u as useTooltip, a as usePopover } from './usePopover-952991a7.mjs';
import { u as useScrollSpyItem, B as BsLink } from './bslink-4d685f49.mjs';

const __nuxt_component_9 = /* @__PURE__ */ defineComponent(
  {
    name: "HtmlAnchor",
    props: {
      ...InlineProps,
      ...AnchorButtonProps,
      ...IDProps,
      ...ToggleProps,
      ...TooltipProps,
      ...PopoverProps,
      ...ActiveProps
    },
    setup(props, context) {
      const elementRef = ref();
      const inline = useInline(props);
      const id = useID(props, "a");
      const toggle = useToggle(props);
      const tooltip = useTooltip(props, elementRef);
      const popover = usePopover(props, elementRef);
      const anchorButton = useAnchorButton(props);
      const active = useActive(props, "button", elementRef);
      const spyItem = useScrollSpyItem(props, elementRef);
      const spyActive = useActive(props, "list", elementRef);
      const current = {
        ref: elementRef
      };
      exposeMethods(
        context
        /* tooltip , popover */
      );
      return () => h(
        BsLink,
        hProps(
          anchorButton,
          active,
          toggle,
          tooltip,
          popover,
          inline,
          spyItem,
          spyActive,
          id,
          current
        ),
        () => hSlots(
          context.slots.default,
          tooltip.render
          /* , popover.render */
        )
      );
    }
  }
);

export { __nuxt_component_9 as _ };
//# sourceMappingURL=anchor-624c84b9.mjs.map
