import { ref, watch, computed } from 'vue';
import { c as useEvent } from '../../floating-ui.vue.esm.mjs';
import { m as useRoute } from '../server.mjs';

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

export { DropdownProps as D, useDropdown as u };
//# sourceMappingURL=useDropdown-8c0cf504.mjs.map
