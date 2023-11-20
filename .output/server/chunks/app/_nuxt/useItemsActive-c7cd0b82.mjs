import { provide, computed, ref, inject, watch, nextTick } from 'vue';
import { d as addProp, z as isPropUndefined, A as toArray, i as unrefElement, g as useEventBus, w as promiseTimeout, x as defaultWindow, y as defaultDocument } from '../server.mjs';
import { uniqueId, forOwn } from 'lodash-es';

const MILLISECONDS_MULTIPLIER = 1e3;
function findOneSelectorRef(selector, options = {}) {
  const elementRef = ref();
  return elementRef;
}
function querySelectorToID(selector, options = {}) {
  const { element = defaultDocument } = options;
  if (!selector || selector == "#") {
    return [];
  }
  const list = element == null ? void 0 : element.querySelectorAll(selector);
  if (list) {
    return Array.from(list).map((value) => {
      return value.id;
    });
  } else {
    return [];
  }
}
function getTransitionDurationFromElement(maybeElement, options = {}) {
  const { window = defaultWindow } = options;
  const element = unrefElement(maybeElement);
  if (!window || !element) {
    return 0;
  }
  let { transitionDuration, transitionDelay } = window.getComputedStyle(element);
  const floatTransitionDuration = Number.parseFloat(transitionDuration);
  const floatTransitionDelay = Number.parseFloat(transitionDelay);
  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  }
  transitionDuration = transitionDuration.split(",")[0];
  transitionDelay = transitionDelay.split(",")[0];
  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
}
const waitAfterTransition = async (transitionElement, waitForTransition = true) => {
  await nextTick();
  if (!waitForTransition) {
    return new Promise((resolve) => resolve);
  }
  const durationPadding = 5;
  const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
  await promiseTimeout(emulatedDuration);
  await nextTick();
};
function toFn(fnArray) {
  return () => {
    fnArray.forEach((value) => value);
  };
}
function useEventHandler(selector, prefix = "") {
  function selectEventBus() {
    const list = querySelectorToID(selector);
    const eventBuses = list.map((value) => {
      return useEventBus(`${prefix}${value}`);
    });
    return eventBuses;
  }
  const on = (lisner) => {
    const eventBus = selectEventBus();
    const offs = eventBus.map((value) => {
      return value.on(lisner);
    });
    return toFn(offs);
  };
  const once = (lisner) => {
    const eventBus = selectEventBus();
    const offs = eventBus.map((value) => {
      return value.once(lisner);
    });
    return toFn(offs);
  };
  const emit = (event) => {
    const eventBus = selectEventBus();
    eventBus.forEach((value) => {
      value.emit(event);
    });
  };
  const off = (lisner) => {
    const eventBus = selectEventBus();
    eventBus.forEach((value) => {
      value.off(lisner);
    });
  };
  const reset = () => {
    const eventBus = selectEventBus();
    eventBus.forEach((value) => {
      value.reset();
    });
  };
  return { on, once, emit, off, reset };
}
const IDProps = {
  id: {
    type: String
  }
};
function useID(props, name = "component") {
  const id = props.id || uniqueId(`${name}_`);
  provide(`id.${name}`, id);
  return {
    attr: computed(() => {
      return {
        id
      };
    })
  };
}
function useIDRef(props, elementRef) {
  const id = ref(props.id);
  return id;
}
function injectID(options = {}) {
  const { name = "component", defaultValue = "" } = options;
  return inject(`id.${name}`, defaultValue);
}
function useIDItem(props, options = {}) {
  return {
    attr: {
      id: props.id || injectID(options)
    }
  };
}
const EventEmitProps = {
  target: {
    type: String
  },
  href: {
    type: String
  }
};
function useEventEmitter(props, event, eventSuffix, elementRef) {
  const injectEvent = inject(`${event}.${eventSuffix}`, void 0);
  const eid = useIDRef(props);
  return (payload) => {
    if (props.target || props.href) {
      const { emit } = useEventHandler(
        props.target || props.href || "",
        "expose_"
      );
      emit(event, payload);
    } else {
      if (injectEvent) {
        injectEvent(payload);
      }
      if (eid.value) {
        const { emit } = useEventHandler(`#${eid.value}`, "expose_");
        emit(event, payload);
      }
    }
  };
}
const AnchorButtonProps = {
  ...EventEmitProps,
  button: {
    type: String
  },
  size: {
    type: String
  },
  disabled: {
    type: Boolean
  },
  stretchedLink: {
    type: Boolean
  },
  link: {
    type: String
  },
  type: {
    type: String,
    default: "button"
  },
  to: {
    type: String
  }
};
function useAnchorButton(props) {
  const tag = (
    // props.to
    // ? "nuxt-link"  : 
    props.target ? "button" : props.href ? "a" : props.tag || "span"
  );
  return {
    class: computed(() => {
      return {
        "stretched-link": props.stretchedLink,
        disabled: props.disabled,
        [`link-${props.link}`]: props.link,
        btn: props.button,
        [`btn-${props.button}`]: props.button,
        [`btn-${props.size}`]: props.size
      };
    }),
    attr: computed(() => {
      return {
        ...addProp(tag == "a" && props.button, "role", "button"),
        ...addProp(tag == "button", "type", props.type),
        ...addProp(props.disabled, "aria-disabled", "true"),
        ...addProp(props.href, "href", props.href),
        ...addProp(props.target, "data-bv-target", props.target),
        ...addProp(props.to, "to", props.to)
      };
    }),
    tag
  };
}
const ToggleProps = {
  toggle: {
    type: String
    // button , modal , offcanvas, accordion
    // default: "button"
  },
  active: {
    type: Boolean
  },
  split: {
    type: Boolean
  },
  ...EventEmitProps
};
function useToggle(props, elementRef) {
  if (isPropUndefined(props.toggle)) {
    return {};
  }
  const toggles = toArray(props.toggle);
  useIDRef(props);
  const emitters = toggles.map((toggle2) => {
    return useEventEmitter(props, "toggle", toggle2 || "");
  });
  const toggleEmitter = () => emitters.forEach((emitter) => {
    return emitter();
  });
  toggles.forEach((toggle2) => {
    inject(
      `buttonID.${toggle2}`,
      void 0
    );
  });
  const toggle = async () => {
    await toggleEmitter();
  };
  return {
    class: computed(() => {
      return {
        "dropdown-toggle": toggles.includes("dropdown"),
        "dropdown-toggle-split": props.split
      };
    }),
    method: {
      toggle
    },
    event: {
      onClick: toggle
    }
  };
}
function useEvent(props, elementRef, eventSuffix) {
  const eid = useIDRef(props);
  computed(() => useEventBus(
    `expose_${eid.value}`
  ));
  const emitEventBus = computed(() => useEventBus(
    `emit_${eid.value}`
  ));
  function expose(exposed) {
    forOwn(exposed, (value, key) => {
      provide(`${key}.${eventSuffix}`, value);
    });
    return exposed;
  }
  function emit(context, event, payload) {
    context.emit(event, payload);
    emitEventBus.value.emit(event, payload);
  }
  function exposeState(state) {
    forOwn(state, (value, key) => {
      provide(`${key}.${eventSuffix}`, value);
    });
  }
  return {
    emit,
    expose,
    exposeState
  };
}
const ActiveProps = {
  active: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
};
function useActive(props, eventSuffix, elementRef) {
  const current = inject(
    `current.${eventSuffix}`,
    void 0
  );
  const parent = inject(
    `parent.${eventSuffix}`,
    void 0
  );
  const eid = useIDRef(props);
  const active = ref(eid.value && (current == null ? void 0 : current.value) == eid.value || props.active || false);
  const { expose, exposeState } = useEvent(props, elementRef, eventSuffix);
  if (current && !props.to) {
    if (active.value && eid.value) {
      current.value = eid.value;
    }
    watch(current, async (next) => {
      if (next == eid.value) {
        active.value = true;
      } else {
        active.value = false;
      }
      const element = unrefElement(elementRef);
      if (!element) {
        return;
      }
      await nextTick();
      if (active.value) {
        if (!element.classList.contains("active")) {
          element.classList.add("active");
          await nextTick();
        }
      } else {
        if (element.classList.contains("active")) {
          element.classList.remove("active");
          await nextTick();
        }
      }
    });
  }
  const show = () => {
    if (props.disabled) {
      return;
    }
    if (current && parent && parent.value && eid.value) {
      current.value = eid.value;
    } else {
      active.value = true;
    }
  };
  const hide = () => {
    if (current && parent && parent.value) {
      current.value = "";
    } else {
      active.value = false;
    }
  };
  const toggle = () => {
    active.value ? hide() : show();
  };
  const method = expose({ show, hide, toggle, dismiss: hide });
  exposeState({ active });
  return {
    class: computed(() => {
      return {
        active: active.value,
        disabled: props.disabled
      };
    }),
    attr: computed(() => {
      return {
        ...addProp(active.value, "aria-current", "page"),
        ...addProp(props.disabled, "aria-disabled", "true")
      };
    }),
    method
  };
}

export { AnchorButtonProps as A, EventEmitProps as E, IDProps as I, ToggleProps as T, useID as a, useIDRef as b, ActiveProps as c, useToggle as d, useActive as e, useEvent as f, useIDItem as g, useEventEmitter as h, injectID as i, findOneSelectorRef as j, useAnchorButton as u, waitAfterTransition as w };
//# sourceMappingURL=useItemsActive-c7cd0b82.mjs.map
