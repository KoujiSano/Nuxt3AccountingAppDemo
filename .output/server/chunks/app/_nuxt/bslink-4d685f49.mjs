import { inject, ref, watch, computed } from 'vue';
import { i as unrefElement, B as useIntersectionObserver } from '../server.mjs';
import { j as findOneSelectorRef } from './useItemsActive-c7cd0b82.mjs';
import { d as defineNuxtLink } from './nuxt-link-8eeb725a.mjs';

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

export { BsLink as B, useScrollSpyItem as u };
//# sourceMappingURL=bslink-4d685f49.mjs.map
