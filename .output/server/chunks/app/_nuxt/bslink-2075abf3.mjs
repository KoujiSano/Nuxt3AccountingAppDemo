import { arrow as arrow$1, computePosition } from '@floating-ui/dom';
import { unref, computed, ref, shallowRef, watch, getCurrentScope, onScopeDispose, shallowReadonly, inject } from 'vue';
import { i as unrefElement, z as useIntersectionObserver } from '../server.mjs';
import { j as findOneSelectorRef } from './useItemsActive-ba3b63f7.mjs';
import { d as defineNuxtLink } from './nuxt-link-8eeb725a.mjs';

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

export { BsLink as B, useFloating as a, arrow as b, useScrollSpyItem as u };
//# sourceMappingURL=bslink-2075abf3.mjs.map
