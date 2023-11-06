import { computed, provide, inject, ref, watch, nextTick as nextTick$1, unref, shallowRef, getCurrentScope, onScopeDispose, shallowReadonly } from 'vue';
import { l as addClassNames, s as spacing, f as hasValue, a as addProp, k as isPropDefined, p as isPropUndefined, t as toArray, j as unrefElement, q as useIntersectionObserver, i as useEventBus, n as defaultDocument } from './app/server.mjs';
import { uniqueId, forOwn } from 'lodash-es';
import { d as defineNuxtLink } from './app/_nuxt/nuxt-link-49581fb8.mjs';
import { arrow as arrow$1, computePosition } from '@floating-ui/dom';

const ElementProps = {
  tag: {
    type: String
  }
};
const InlineProps = {
  ...ElementProps,
  fontSize: {
    type: [String, Number]
    // 1～6
  },
  fontWeight: {
    type: String
    // bold,bolder,normal,light,lighter
  },
  fontStyle: {
    type: String
    // italic,normal
  },
  lineHeight: {
    type: String
    // l,sm,base,lg
  },
  fontMonospace: {
    type: Boolean
  },
  textReset: {
    type: Boolean
  },
  textDecoration: {
    type: String
    // underline,line-through,none
  },
  textTruncate: {
    type: Boolean
  },
  textOpacity: {
    type: [String, Number]
    //
  },
  textTransform: {
    type: String
    // lowercase,uppercase,capitalize
  },
  textBackground: {
    type: String
    //
  },
  headings: {
    type: [String, Number]
    // 1～6
  },
  lead: {
    type: Boolean
  },
  mark: {
    type: Boolean
  },
  small: {
    type: Boolean
  },
  textColor: {
    type: String
  },
  padding: {
    type: [String, Number, Array]
  },
  margin: {
    type: [String, Number, Array]
  },
  display: {
    type: [String, Array]
    // Flexはflex属性を使用
  },
  gap: {
    type: [String, Number, Array]
  },
  visuallyHidden: {
    type: [Boolean, String]
    //focusable
  },
  verticalAlign: {
    type: String
    //baseline, top, middle, bottom , text-top, text-bottom
  },
  invisible: {
    type: Boolean
  },
  userSelect: {
    type: String
    //all, auto, none
  },
  pointerEvents: {
    type: String
    //none, auto
  },
  backgroundColor: {
    type: String
    //as PropType<ThemeColors>,
  },
  backgroundGradient: {
    type: Boolean
  },
  backgroundImage: {
    type: String
  },
  backgroundOpacity: {
    type: [String, Number]
  },
  opacity: {
    type: [String, Number]
  },
  relativeWidth: {
    type: [String, Number]
  },
  relativeHeight: {
    type: [String, Number]
  },
  maxWidth: {
    type: Boolean
  },
  maxHeight: {
    type: Boolean
  },
  viewportWidth: {
    type: Boolean
  },
  viewportHeight: {
    type: Boolean
  },
  minViewportWidth: {
    type: Boolean
  },
  minViewportHeight: {
    type: Boolean
  },
  placeholder: {
    type: [Boolean, String]
    //input tagで競合
  },
  placeholderSize: {
    type: String
    //input tagで競合
  },
  col: {
    type: [Number, String, Array, Boolean]
    // auto
  },
  position: {
    type: String
    //static, relative absolute fixed sticky
  },
  top: {
    type: [Number, String]
  },
  start: {
    type: [Number, String]
  },
  end: {
    type: [Number, String]
  },
  bottom: {
    type: [Number, String]
  },
  translate: {
    type: String
  },
  initialism: {
    type: [Boolean]
  },
  focusRing: {
    type: [Boolean]
  },
  border: {
    type: [Boolean, String, Number]
    // true, top,end,bottom,start,0,top-0,end-0,bottom-0,start-0
  },
  borderColor: {
    type: String
    //as PropType<ThemeColors>,
  },
  borderWidth: {
    type: [String, Number]
    // 1,2,3,4,5
  },
  rounded: {
    type: [Boolean, String]
  },
  roundedSize: {
    type: [Number, String]
    // 0 - 5
  },
  linkOpacity: {
    type: [String, Number]
  },
  linkUnderline: {
    type: [String]
  },
  linkOffset: {
    type: [String, Number]
  }
};
function useInline(props) {
  return {
    class: computed(() => {
      return {
        [`fs-${props.fontSize}`]: props.fontSize,
        [`fw-${props.fontWeight}`]: props.fontWeight,
        [`fst-${props.fontStyle}`]: props.fontStyle,
        [`lh-${props.lineHeight}`]: props.lineHeight,
        "font-monospace": props.fontMonospace,
        "text-reset": props.textReset,
        [`text-decoration-${props.textDecoration}`]: props.textDecoration,
        "text-truncate": props.textTruncate,
        [`text-${props.textTransform}`]: props.textTransform,
        [`text-bg-${props.textBackground}`]: props.textBackground,
        [`h${props.headings}`]: props.headings,
        lead: props.lead,
        mark: props.mark,
        small: props.small,
        [`text-${props.textColor}`]: props.textColor,
        ...addClassNames(props.padding, (n) => spacing(n, "p")),
        ...addClassNames(props.margin, (n) => spacing(n, "m")),
        ...addClassNames(props.gap, (n) => `gap-${n}`),
        [`visually-hidden${hasValue(props.visuallyHidden) ? `-${props.visuallyHidden}` : ""}`]: props.visuallyHidden,
        [`align-${props.verticalAlign}`]: props.verticalAlign,
        invisible: props.invisible,
        [`user-select-${props.userSelect}`]: props.userSelect,
        [`pe-${props.pointerEvents}`]: props.pointerEvents,
        [`bg-${props.backgroundColor}`]: props.backgroundColor,
        [`bg-gradient`]: props.backgroundGradient,
        [`bg-opacity-${props.backgroundOpacity}`]: props.backgroundOpacity,
        [`w-${props.relativeWidth}`]: props.relativeWidth,
        [`h-${props.relativeHeight}`]: props.relativeHeight,
        "mw-100": props.maxWidth,
        "mh-100": props.maxHeight,
        "vw-100": props.viewportWidth,
        "vh-100": props.viewportHeight,
        "min-vw-100": props.minViewportWidth,
        "min-vh-100": props.minViewportHeight,
        ...addClassNames(props.display, (n) => `d-${n}`),
        [`opacity-${props.opacity}`]: props.opacity,
        [`placeholder${hasValue(props.placeholder) ? `-${props.placeholder}` : ""}`]: (props.placeholder || props.placeholderSize) && !["input", "textarea"].includes(props.tag || ""),
        [`placeholder-${props.placeholderSize}`]: props.placeholderSize && !["input", "textarea"].includes(props.tag || ""),
        col: props.col && !hasValue(props.col),
        ...addClassNames(hasValue(props.col), (n) => `col-${n}`),
        [`position-${props.position}`]: props.position,
        [`top-${props.top}`]: props.top,
        [`start-${props.start}`]: props.start,
        [`end-${props.end}`]: props.end,
        [`bottom-${props.bottom}`]: props.bottom,
        [`translate-${props.translate}`]: props.translate,
        initialism: props.initialism,
        "focus-ring": props.focusRing,
        [`border${hasValue(props.border) ? `-${props.border}` : ""}`]: props.border || props.borderColor || props.borderWidth,
        [`border-${props.borderColor}`]: props.borderColor,
        [`border-${props.borderWidth}`]: props.borderWidth,
        [`rounded${hasValue(props.rounded) ? `-${props.rounded}` : ""}`]: props.rounded,
        [`rounded-${props.roundedSize}`]: props.roundedSize,
        [`link-opacity-${props.linkOpacity}`]: props.linkOpacity,
        [`link-underline`]: props.linkUnderline,
        ...addClassNames(hasValue(props.linkUnderline), (n) => `link-underline-opacity-${n}`),
        ...addClassNames(hasValue(props.linkOffset), (n) => `link-offset-${n}`)
      };
    }),
    style: computed(() => {
      return {
        ...addProp(
          props.backgroundImage,
          "background-image",
          `url(${props.backgroundImage})`
        )
      };
    }),
    attr: computed(() => {
      return {
        ...addProp(props.placeholder, "aria-hidden", "true")
      };
    })
  };
}
const BlockProps = {
  ...InlineProps,
  overlay: {
    type: Boolean
  },
  // https://getbootstrap.jp/docs/5.0/utilities/shadows/
  //
  shadow: {
    type: [String, Boolean]
    // none, sm , lg
  },
  textAlignment: {
    type: String
  },
  textWrap: {
    type: String
    // wrap or nowrap
  },
  textBreak: {
    type: Boolean
    //
  },
  alignSelf: {
    type: String
    // start,end,center,baseline,stretch,{breakPoint}-*,
  },
  alignItems: {
    type: String
  },
  alignContent: {
    type: String
  },
  flex: {
    type: [Boolean, String, Array]
    //inline, {breakPoint}, {breakPoint}-inline
  },
  flexDirection: {
    type: [String, Array]
    // {breakPoint}-{row|column}-{reverse}
  },
  flexFill: {
    type: [Boolean, String]
    // {breakPoint}-fill,
  },
  flexGrow: {
    type: String
    // {grow|shrink}-0,{grow|shrink}-1,{breakPoint}-{grow|shrink}-0
  },
  flexHorizontal: {
    type: String
    // {start|end}
  },
  flexVirtical: {
    type: String
    // {top|bottom}
  },
  flexOrder: {
    type: [Number, String]
    // {number|first|last}, {breakPoint}-{number|first|last},
  },
  flexWrap: {
    type: String
    //
  },
  float: {
    type: String
    // start , end , none
  },
  ratio: {
    type: [Boolean, String]
    // true, 1x1,  4x3, 16x9 , 21x9
  },
  fixed: {
    type: String
    // top, bottom
  },
  sticky: {
    type: String
    // top, bottom
  },
  clearfix: {
    type: Boolean
    //
  },
  overflow: {
    type: String
    //auto , hidden , visible , scroll
  },
  tableResponsive: {
    type: String
  },
  justifyContent: {
    type: String
  },
  vstack: {
    type: Boolean
  },
  hstack: {
    type: Boolean
  },
  align: {
    type: [String]
  },
  order: {
    type: [String, Number]
  },
  offset: {
    type: [String, Number, Array]
  },
  objectFit: {
    type: [String]
  },
  z: {
    type: [String, Number]
  }
};
function useBlock(props) {
  const inline = useInline(props);
  return {
    class: computed(() => {
      return {
        ...inline.class.value,
        "text-break": props.textBreak,
        [`text-${props.textAlignment}`]: props.textAlignment,
        [`text-${props.textWrap}`]: props.textWrap,
        [`align-self-${props.alignSelf}`]: props.alignSelf,
        [`align-items-${props.alignItems}`]: props.alignItems,
        [`align-content-${props.alignContent}`]: props.alignContent,
        ...addClassNames(
          props.flex,
          (n) => `d${hasValue(props.flex) ? `-${n}` : ""}-flex`
        ),
        ...addClassNames(props.flexDirection, (n) => `flex-${n}`),
        ...addClassNames(
          props.flexFill,
          (n) => `flex${hasValue(props.flexFill) ? `-${n}` : ""}-fill`
        ),
        [`flex-${props.flexGrow}`]: props.flexGrow,
        ...addClassNames(props.flexWrap, (n) => `flex-${n}`),
        [`order-${props.flexOrder}`]: props.flexOrder,
        [`float-${props.float}`]: props.float,
        [`shadow${hasValue(props.shadow) ? `-${props.shadow}` : ""}`]: isPropDefined(
          props.shadow
        ),
        ratio: props.ratio,
        [`ratio-${props.ratio}`]: props.ratio,
        [`fixed-${props.fixed}`]: props.fixed,
        [`sticky-${props.sticky}`]: props.sticky,
        clearfix: props.clearfix,
        [`overflow-${props.overflow}`]: props.overflow,
        [`table-responsive${hasValue(props.tableResponsive) ? `-${props.tableResponsive}` : ""}`]: props.tableResponsive,
        [`justify-content-${props.justifyContent}`]: props.justifyContent,
        vstack: props.vstack,
        hstack: props.hstack,
        [`align-${props.align}`]: props.align,
        [`order-${props.order}`]: props.order,
        ...addClassNames(props.offset, (n) => `offset-${n}`),
        [`object-fit-${props.objectFit}`]: props.objectFit,
        [`z-${props.z}`]: props.z
      };
    }),
    style: computed(() => {
      return {
        ...inline.style.value
      };
    }),
    attr: computed(() => {
      return {
        ...inline.attr.value
      };
    })
  };
}
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
      await nextTick$1();
      if (active.value) {
        if (!element.classList.contains("active")) {
          element.classList.add("active");
          await nextTick$1();
        }
      } else {
        if (element.classList.contains("active")) {
          element.classList.remove("active");
          await nextTick$1();
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
function useScrollSpyItem(props, elementRef) {
  const spy = inject("spy.spy", void 0);
  if (!spy) {
    return {};
  }
  if (!props.target && !props.href) {
    return {};
  }
  const targetIsVisible = ref(false);
  const target = findOneSelectorRef(props.target || props.href);
  const refresh = inject("refresh.spy", () => {
  });
  const registerSpyItem = inject(
    "registerItem.spy",
    (id) => {
    }
  );
  watch(elementRef, () => {
    const element = unrefElement(elementRef);
    if (!element) {
      return;
    }
    registerSpyItem(element.id);
  });
  useIntersectionObserver(target, async ([{ isIntersecting }]) => {
    targetIsVisible.value = isIntersecting;
    await nextTick();
    refresh();
  });
  return {
    attr: computed(() => {
      return {
        "data-bv-spy-visible": targetIsVisible.value
      };
    })
  };
}
const BsLink = /* @__PURE__ */ defineNuxtLink({
  componentName: "",
  externalRelAttribute: "",
  activeClass: "active",
  exactActiveClass: "",
  prefetchedClass: "",
  trailingSlash: "remove"
});

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

export { AnchorButtonProps as A, BlockProps as B, EventEmitProps as E, IDProps as I, ToggleProps as T, ActiveProps as a, useAnchorButton as b, useID as c, useToggle as d, useActive as e, InlineProps as f, useInline as g, useScrollSpyItem as h, BsLink as i, useEventEmitter as j, useFloating as k, arrow as l, useEvent as m, useIDItem as n, useIDRef as o, injectID as p, useBlock as u };
//# sourceMappingURL=floating-ui.vue.esm.mjs.map
