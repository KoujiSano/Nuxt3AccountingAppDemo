import { _ as __nuxt_component_0 } from './container-d95ae928.mjs';
import { withCtx, createTextVNode, createVNode, useSSRContext, defineComponent, h, computed, ref } from 'vue';
import { _ as _export_sfc, h as hProps, b as hasValue, e as exposeMethods, d as hSlots, a as useNuxtApp, u as useRuntimeConfig } from '../server.mjs';
import { B as BlockProps, u as useBlock, I as InlineProps, A as AnchorButtonProps, a as IDProps, T as ToggleProps, b as ActiveProps, c as useInline, d as useID, e as useToggle, f as useAnchorButton, g as useActive, h as useScrollSpyItem, i as BsLink } from './bslink-dfce3393.mjs';
import { _ as __nuxt_component_11, T as TooltipProps, P as PopoverProps, u as useTooltip, a as usePopover } from './button-727d14f6.mjs';
import { u as useHead } from './index-51828304.mjs';
import { r as encodeParam, l as hasProtocol, t as withLeadingSlash, j as joinURL, p as parseURL, q as defu, v as encodePath } from '../../nitro/node-server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'lodash-es';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'unist-util-visit';
import 'ipx';
import './nuxt-link-b0b1f983.mjs';
import '@floating-ui/dom';

const __nuxt_component_1 = /* @__PURE__ */ defineComponent({
  name: "HtmlDiv",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    return () => h(props.tag, hProps(block), context.slots);
  }
});
async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('image-meta').then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return parseInt(input, 10);
    }
  }
}
function parseDensities(input = "") {
  if (input === void 0 || !input.length) {
    return [];
  }
  const densities = /* @__PURE__ */ new Set();
  for (const density of input.split(" ")) {
    const d = parseInt(density.replace("x", ""));
    if (d) {
      densities.add(d);
    }
  }
  return Array.from(densities);
}
function checkDensities(densities) {
  if (densities.length === 0) {
    throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
  }
}
function parseSizes(input) {
  const sizes = {};
  if (typeof input === "string") {
    for (const entry of input.split(/[\s,]+/).filter((e) => e)) {
      const s = entry.split(":");
      if (s.length !== 2) {
        sizes["1px"] = s[0].trim();
      } else {
        sizes[s[0].trim()] = s[1].trim();
      }
    }
  } else {
    Object.assign(sizes, input);
  }
  return sizes;
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    return image;
  };
  const $img = (input, modifiers = {}, options = {}) => {
    return getImage2(input, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options });
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _a, _b;
  if (typeof input !== "string" || input === "") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        input = joinURL(ctx.options.alias[base], input.substr(base.length));
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if ((_a = _options.modifiers) == null ? void 0 : _a.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_b = _options.modifiers) == null ? void 0 : _b.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _a, _b, _c, _d, _e;
  const width = parseSize((_a = opts.modifiers) == null ? void 0 : _a.width);
  const height = parseSize((_b = opts.modifiers) == null ? void 0 : _b.height);
  const sizes = parseSizes(opts.sizes);
  const densities = ((_c = opts.densities) == null ? void 0 : _c.trim()) ? parseDensities(opts.densities.trim()) : ctx.options.densities;
  checkDensities(densities);
  const hwRatio = width && height ? height / width : 0;
  const sizeVariants = [];
  const srcsetVariants = [];
  if (Object.keys(sizes).length >= 1) {
    for (const key in sizes) {
      const variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        continue;
      }
      sizeVariants.push({
        size: variant.size,
        screenMaxWidth: variant.screenMaxWidth,
        media: `(max-width: ${variant.screenMaxWidth}px)`
      });
      for (const density of densities) {
        srcsetVariants.push({
          width: variant._cWidth * density,
          src: getVariantSrc(ctx, input, opts, variant, density)
        });
      }
    }
    finaliseSizeVariants(sizeVariants);
  } else {
    for (const density of densities) {
      const key = Object.keys(sizes)[0];
      let variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        variant = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: (_d = opts.modifiers) == null ? void 0 : _d.width,
          _cHeight: (_e = opts.modifiers) == null ? void 0 : _e.height
        };
      }
      srcsetVariants.push({
        width: density,
        src: getVariantSrc(ctx, input, opts, variant, density)
      });
    }
  }
  finaliseSrcsetVariants(srcsetVariants);
  const defaultVariant = srcsetVariants[srcsetVariants.length - 1];
  const sizesVal = sizeVariants.length ? sizeVariants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", ") : void 0;
  const suffix = sizesVal ? "w" : "x";
  const srcsetVal = srcsetVariants.map((v) => `${v.src} ${v.width}${suffix}`).join(", ");
  return {
    sizes: sizesVal,
    srcset: srcsetVal,
    src: defaultVariant == null ? void 0 : defaultVariant.src
  };
}
function getSizesVariant(key, size, height, hwRatio, ctx) {
  const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || parseInt(key);
  const isFluid = size.endsWith("vw");
  if (!isFluid && /^\d+$/.test(size)) {
    size = size + "px";
  }
  if (!isFluid && !size.endsWith("px")) {
    return void 0;
  }
  let _cWidth = parseInt(size);
  if (!screenMaxWidth || !_cWidth) {
    return void 0;
  }
  if (isFluid) {
    _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
  }
  const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
  return {
    size,
    screenMaxWidth,
    _cWidth,
    _cHeight
  };
}
function getVariantSrc(ctx, input, opts, variant, density) {
  return ctx.$img(
    input,
    {
      ...opts.modifiers,
      width: variant._cWidth ? variant._cWidth * density : void 0,
      height: variant._cHeight ? variant._cHeight * density : void 0
    },
    opts
  );
}
function finaliseSizeVariants(sizeVariants) {
  var _a;
  sizeVariants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  let previousMedia = null;
  for (let i = sizeVariants.length - 1; i >= 0; i--) {
    const sizeVariant = sizeVariants[i];
    if (sizeVariant.media === previousMedia) {
      sizeVariants.splice(i, 1);
    }
    previousMedia = sizeVariant.media;
  }
  for (let i = 0; i < sizeVariants.length; i++) {
    sizeVariants[i].media = ((_a = sizeVariants[i + 1]) == null ? void 0 : _a.media) || "";
  }
}
function finaliseSrcsetVariants(srcsetVariants) {
  srcsetVariants.sort((v1, v2) => v1.width - v2.width);
  let previousWidth = null;
  for (let i = srcsetVariants.length - 1; i >= 0; i--) {
    const sizeVariant = srcsetVariants[i];
    if (sizeVariant.width === previousWidth) {
      srcsetVariants.splice(i, 1);
    }
    previousWidth = sizeVariant.width;
  }
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: "&",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const getImage = (src, { modifiers = {}, baseURL } = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL) {
    baseURL = joinURL(ctx.options.nuxt.baseURL, "/_ipx");
  }
  return {
    url: joinURL(baseURL, params, encodePath(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
const ipxRuntime$jYK772GNgX = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getImage,
  supportsAlias,
  validateDomains
});
const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "ipx",
  "domains": [],
  "alias": {},
  "densities": [
    1,
    2
  ],
  "format": [
    "webp"
  ]
};
imageOptions.providers = {
  ["ipx"]: { provider: ipxRuntime$jYK772GNgX, defaults: {} }
};
const useImage$1 = () => {
  const config = /* @__PURE__ */ useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    nuxt: {
      baseURL: config.app.baseURL
    }
  }));
};
const baseImageProps = {
  // input source
  src: { type: String, required: true },
  // modifiers
  format: { type: String, default: void 0 },
  quality: { type: [Number, String], default: void 0 },
  background: { type: String, default: void 0 },
  fit: { type: String, default: void 0 },
  modifiers: { type: Object, default: void 0 },
  // options
  preset: { type: String, default: void 0 },
  provider: { type: String, default: void 0 },
  sizes: { type: [Object, String], default: void 0 },
  densities: { type: String, default: void 0 },
  preload: { type: Boolean, default: void 0 },
  // <img> attributes
  width: { type: [String, Number], default: void 0 },
  height: { type: [String, Number], default: void 0 },
  alt: { type: String, default: void 0 },
  referrerpolicy: { type: String, default: void 0 },
  usemap: { type: String, default: void 0 },
  longdesc: { type: String, default: void 0 },
  ismap: { type: Boolean, default: void 0 },
  loading: {
    type: String,
    default: void 0,
    validator: (val) => ["lazy", "eager"].includes(val)
  },
  crossorigin: {
    type: [Boolean, String],
    default: void 0,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    default: void 0,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  },
  // csp
  nonce: { type: [String], default: void 0 }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding,
      nonce: props.nonce
    };
  });
  const $img = useImage$1();
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality || $img.options.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], default: void 0 }
};
const NuxtImg = /* @__PURE__ */ defineComponent({
  name: "NuxtImg",
  props: imgProps,
  emits: ["load", "error"],
  setup: (props, ctx) => {
    const $img = useImage$1();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      densities: props.densities,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const attrs = computed(() => {
      const attrs2 = { ..._base.attrs.value, "data-nuxt-img": "" };
      if (!props.placeholder || placeholderLoaded.value) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50,
        blur: size[3] || 3
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          nonce: props.nonce,
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          }
        }]
      });
    }
    const imgEl = ref();
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return () => h("img", {
      ref: imgEl,
      src: src.value,
      ...{ onerror: "this.setAttribute('data-error', 1)" },
      ...attrs.value,
      ...ctx.attrs
    });
  }
});
const ImageProps = {
  fluid: {
    type: Boolean
  },
  thumbnail: {
    type: Boolean
    // top,end,bottom,start,circle,pill
  }
  // src: {
  //   type: String,
  // }
};
function useImage(props) {
  return {
    class: computed(() => {
      return {
        "img-fluid": props.fluid,
        "img-thumbnail": props.thumbnail
      };
    })
    // attr: {
    //   src : imgUrl.value.default
    // }
  };
}
const __nuxt_component_3 = /* @__PURE__ */ defineComponent({
  name: "HtmlImage",
  props: {
    ...BlockProps,
    ...ImageProps,
    tag: {
      type: String,
      default: "img"
    }
  },
  setup(props) {
    const block = useBlock(props);
    const image = useImage(props);
    return () => h(NuxtImg, hProps(image, block));
  }
});
const __nuxt_component_4 = /* @__PURE__ */ defineComponent({
  name: "HtmlTable",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "table"
    },
    theme: {
      type: String,
      default: void 0
    },
    striped: {
      type: Boolean
    },
    hover: {
      type: Boolean
    },
    active: {
      type: Boolean
    },
    bordered: {
      type: Boolean
    },
    borderless: {
      type: Boolean
    },
    small: {
      type: Boolean
    },
    caption: {
      type: String,
      default: void 0
    },
    responsive: {
      type: [Boolean, String],
      default: void 0
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: computed(() => {
        return {
          table: true,
          [`table-${props.theme}`]: props.theme,
          [`table-striped`]: props.striped,
          [`table-hover`]: props.hover,
          [`table-active`]: props.active,
          [`table-bordered`]: props.bordered,
          [`table-borderless`]: props.borderless,
          [`table-sm`]: props.small,
          [`caption-${props.caption}`]: props.caption
        };
      })
    };
    return () => {
      if (props.responsive) {
        return h(
          "div",
          {
            class: {
              [`table-responsive${hasValue(props.responsive) ? `-${props.responsive}` : ""}`]: props.responsive
            }
          },
          h(
            props.tag,
            {
              ...context.attrs,
              ...hProps(current, block)
            },
            context.slots
          )
        );
      } else {
        return h(
          props.tag,
          {
            ...context.attrs,
            ...hProps(current, block)
          },
          context.slots
        );
      }
    };
  }
});
const __nuxt_component_5 = /* @__PURE__ */ defineComponent({
  name: "HtmlTableHead",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "thead"
    },
    theme: {
      type: String,
      default: void 0
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: computed(() => {
        return {
          [`table-${props.theme}`]: props.theme
        };
      })
    };
    return () => h(props.tag, hProps(block, current), context.slots);
  }
});
const __nuxt_component_6 = /* @__PURE__ */ defineComponent({
  name: "HtmlTableRow",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "tr"
    },
    active: {
      type: Boolean
    },
    theme: {
      type: String,
      default: ""
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: computed(() => {
        return {
          [`table-${props.theme}`]: props.theme,
          [`table-active`]: props.active
        };
      })
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
const __nuxt_component_7 = /* @__PURE__ */ defineComponent({
  name: "HtmlTableH",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "th"
    },
    theme: {
      type: String,
      default: void 0
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: computed(() => {
        return {
          [`table-${props.theme}`]: props.theme
        };
      })
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
const __nuxt_component_8 = /* @__PURE__ */ defineComponent({
  name: "HtmlTableBody",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "tbody"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    return () => h(props.tag, hProps(block), context.slots);
  }
});
const __nuxt_component_9 = /* @__PURE__ */ defineComponent({
  name: "HtmlTableData",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "td"
    },
    active: {
      type: Boolean
    },
    theme: {
      type: String,
      default: void 0
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: computed(() => {
        return {
          [`table-${props.theme}`]: props.theme,
          [`table-active`]: props.active
        };
      })
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
const __nuxt_component_10 = /* @__PURE__ */ defineComponent(
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Container = __nuxt_component_0;
  const _component_b_div = __nuxt_component_1;
  const _component_b_button = __nuxt_component_11;
  const _component_b_img = __nuxt_component_3;
  const _component_b_table = __nuxt_component_4;
  const _component_b_thead = __nuxt_component_5;
  const _component_b_tr = __nuxt_component_6;
  const _component_b_th = __nuxt_component_7;
  const _component_b_tbody = __nuxt_component_8;
  const _component_b_td = __nuxt_component_9;
  const _component_b_a = __nuxt_component_10;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Container, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_b_div, {
          flex: "",
          padding: "t-3",
          "justify-content": "center"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_b_button, {
                button: "outline-dark",
                margin: "e-2",
                col: "sm-3 xs-4 md-2"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` \u304A\u6C17\u306B\u5165\u308A\u8A2D\u5B9A `);
                  } else {
                    return [
                      createTextVNode(" \u304A\u6C17\u306B\u5165\u308A\u8A2D\u5B9A ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_b_button, {
                button: "outline-dark",
                margin: "e-2",
                col: "sm-3 xs-4 md-2"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` \u7DE8\u96C6 `);
                  } else {
                    return [
                      createTextVNode(" \u7DE8\u96C6 ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_b_button, {
                button: "outline-dark",
                margin: "e-2",
                col: "sm-3 xs-4 md-2"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` \u65B0\u898F\u79D1\u76EE\u8FFD\u52A0 `);
                  } else {
                    return [
                      createTextVNode(" \u65B0\u898F\u79D1\u76EE\u8FFD\u52A0 ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_b_button, {
                button: "outline-dark",
                margin: "e-2",
                col: "sm-3 xs-4 md-2",
                disabled: ""
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` \u65B0\u898F\u88DC\u52A9\u79D1\u76EE\u8FFD\u52A0 `);
                  } else {
                    return [
                      createTextVNode(" \u65B0\u898F\u88DC\u52A9\u79D1\u76EE\u8FFD\u52A0 ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_b_button, {
                button: "outline-dark",
                margin: "e-2",
                col: "sm-2 xs-2 md-2"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_b_img, {
                      src: "https://api.iconify.design/uiw/file-pdf.svg",
                      width: "20px",
                      height: "20px"
                    }, null, _parent4, _scopeId3));
                    _push4(` PDF\u51FA\u529B `);
                  } else {
                    return [
                      createVNode(_component_b_img, {
                        src: "https://api.iconify.design/uiw/file-pdf.svg",
                        width: "20px",
                        height: "20px"
                      }),
                      createTextVNode(" PDF\u51FA\u529B ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_b_button, {
                  button: "outline-dark",
                  margin: "e-2",
                  col: "sm-3 xs-4 md-2"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u304A\u6C17\u306B\u5165\u308A\u8A2D\u5B9A ")
                  ]),
                  _: 1
                }),
                createVNode(_component_b_button, {
                  button: "outline-dark",
                  margin: "e-2",
                  col: "sm-3 xs-4 md-2"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u7DE8\u96C6 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_b_button, {
                  button: "outline-dark",
                  margin: "e-2",
                  col: "sm-3 xs-4 md-2"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u65B0\u898F\u79D1\u76EE\u8FFD\u52A0 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_b_button, {
                  button: "outline-dark",
                  margin: "e-2",
                  col: "sm-3 xs-4 md-2",
                  disabled: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u65B0\u898F\u88DC\u52A9\u79D1\u76EE\u8FFD\u52A0 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_b_button, {
                  button: "outline-dark",
                  margin: "e-2",
                  col: "sm-2 xs-2 md-2"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_b_img, {
                      src: "https://api.iconify.design/uiw/file-pdf.svg",
                      width: "20px",
                      height: "20px"
                    }),
                    createTextVNode(" PDF\u51FA\u529B ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_b_div, { padding: "t-3" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_b_button, {
                button: "outline-primary",
                margin: "e-2",
                col: "sm-2"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` \u8CC3\u501F\u5BFE\u7167\u8868 `);
                  } else {
                    return [
                      createTextVNode(" \u8CC3\u501F\u5BFE\u7167\u8868 ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_b_button, {
                button: "outline-primary",
                col: "sm-2"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` \u640D\u76CA\u8A08\u7B97\u66F8 `);
                  } else {
                    return [
                      createTextVNode(" \u640D\u76CA\u8A08\u7B97\u66F8 ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_b_button, {
                  button: "outline-primary",
                  margin: "e-2",
                  col: "sm-2"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u8CC3\u501F\u5BFE\u7167\u8868 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_b_button, {
                  button: "outline-primary",
                  col: "sm-2"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u640D\u76CA\u8A08\u7B97\u66F8 ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_b_div, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_b_table, { bordered: "" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_b_thead, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_b_tr, {
                            theme: "primary",
                            "text-alignment": "center",
                            "text-wrap": "nowrap"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_b_th, {
                                  scope: "col",
                                  col: "xs-2 sm-1"
                                }, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_b_th, {
                                  scope: "col",
                                  col: "xs-2 sm-1"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` \u30B3\u30FC\u30C9 `);
                                    } else {
                                      return [
                                        createTextVNode(" \u30B3\u30FC\u30C9 ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_b_th, {
                                  scope: "col",
                                  col: "xs-6 sm-3"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` \u540D\u79F0 `);
                                    } else {
                                      return [
                                        createTextVNode(" \u540D\u79F0 ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_b_th, {
                                  scope: "col",
                                  col: "sm-3"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` \u30AB\u30CA `);
                                    } else {
                                      return [
                                        createTextVNode(" \u30AB\u30CA ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_b_th, {
                                  scope: "col",
                                  col: "sm-1"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` \u30ED\u30FC\u30DE\u5B57 `);
                                    } else {
                                      return [
                                        createTextVNode(" \u30ED\u30FC\u30DE\u5B57 ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_b_th, {
                                  scope: "col",
                                  col: "xs-1 sm-1"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` \u8CC3\u501F `);
                                    } else {
                                      return [
                                        createTextVNode(" \u8CC3\u501F ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_b_th, {
                                  scope: "col",
                                  col: "xs-1 sm-1"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` \u79D1\u76EE\u7A2E\u985E `);
                                    } else {
                                      return [
                                        createTextVNode(" \u79D1\u76EE\u7A2E\u985E ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_b_th, {
                                  scope: "col",
                                  col: "xs-1 sm-1"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` \u6D88\u8CBB\u7A0E `);
                                    } else {
                                      return [
                                        createTextVNode(" \u6D88\u8CBB\u7A0E ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_b_th, {
                                    scope: "col",
                                    col: "xs-2 sm-1"
                                  }),
                                  createVNode(_component_b_th, {
                                    scope: "col",
                                    col: "xs-2 sm-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u30B3\u30FC\u30C9 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_b_th, {
                                    scope: "col",
                                    col: "xs-6 sm-3"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u540D\u79F0 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_b_th, {
                                    scope: "col",
                                    col: "sm-3"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u30AB\u30CA ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_b_th, {
                                    scope: "col",
                                    col: "sm-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u30ED\u30FC\u30DE\u5B57 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_b_th, {
                                    scope: "col",
                                    col: "xs-1 sm-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u8CC3\u501F ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_b_th, {
                                    scope: "col",
                                    col: "xs-1 sm-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u79D1\u76EE\u7A2E\u985E ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_b_th, {
                                    scope: "col",
                                    col: "xs-1 sm-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u6D88\u8CBB\u7A0E ")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_b_tr, {
                              theme: "primary",
                              "text-alignment": "center",
                              "text-wrap": "nowrap"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_b_th, {
                                  scope: "col",
                                  col: "xs-2 sm-1"
                                }),
                                createVNode(_component_b_th, {
                                  scope: "col",
                                  col: "xs-2 sm-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u30B3\u30FC\u30C9 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_b_th, {
                                  scope: "col",
                                  col: "xs-6 sm-3"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u540D\u79F0 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_b_th, {
                                  scope: "col",
                                  col: "sm-3"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u30AB\u30CA ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_b_th, {
                                  scope: "col",
                                  col: "sm-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u30ED\u30FC\u30DE\u5B57 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_b_th, {
                                  scope: "col",
                                  col: "xs-1 sm-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u8CC3\u501F ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_b_th, {
                                  scope: "col",
                                  col: "xs-1 sm-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u79D1\u76EE\u7A2E\u985E ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_b_th, {
                                  scope: "col",
                                  col: "xs-1 sm-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u6D88\u8CBB\u7A0E ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_b_tbody, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_b_tr, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_b_td, {
                                  scope: "row",
                                  "text-alignment": "center"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(_component_b_a, { href: "#" }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(` \u5909\u66F4 `);
                                          } else {
                                            return [
                                              createTextVNode(" \u5909\u66F4 ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(_component_b_a, { href: "#" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u5909\u66F4 ")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_b_td, { "text-alignment": "left" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Cell`);
                                    } else {
                                      return [
                                        createTextVNode("Cell")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_b_td, { "text-alignment": "left" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Cell`);
                                    } else {
                                      return [
                                        createTextVNode("Cell")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_b_td, { "text-alignment": "left" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Cell`);
                                    } else {
                                      return [
                                        createTextVNode("Cell")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_b_td, { "text-alignment": "left" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Cell`);
                                    } else {
                                      return [
                                        createTextVNode("Cell")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_b_td, { "text-alignment": "center" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Cell`);
                                    } else {
                                      return [
                                        createTextVNode("Cell")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_b_td, { "text-alignment": "center" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Cell`);
                                    } else {
                                      return [
                                        createTextVNode("Cell")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_b_td, { "text-alignment": "center" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Cell`);
                                    } else {
                                      return [
                                        createTextVNode("Cell")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_b_td, {
                                    scope: "row",
                                    "text-alignment": "center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_b_a, { href: "#" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u5909\u66F4 ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_b_td, { "text-alignment": "left" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Cell")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_b_td, { "text-alignment": "left" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Cell")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_b_td, { "text-alignment": "left" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Cell")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_b_td, { "text-alignment": "left" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Cell")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_b_td, { "text-alignment": "center" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Cell")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_b_td, { "text-alignment": "center" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Cell")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_b_td, { "text-alignment": "center" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Cell")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_b_tr, null, {
                              default: withCtx(() => [
                                createVNode(_component_b_td, {
                                  scope: "row",
                                  "text-alignment": "center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_b_a, { href: "#" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u5909\u66F4 ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_b_td, { "text-alignment": "left" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Cell")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_b_td, { "text-alignment": "left" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Cell")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_b_td, { "text-alignment": "left" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Cell")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_b_td, { "text-alignment": "left" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Cell")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_b_td, { "text-alignment": "center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Cell")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_b_td, { "text-alignment": "center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Cell")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_b_td, { "text-alignment": "center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Cell")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_b_thead, null, {
                        default: withCtx(() => [
                          createVNode(_component_b_tr, {
                            theme: "primary",
                            "text-alignment": "center",
                            "text-wrap": "nowrap"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_b_th, {
                                scope: "col",
                                col: "xs-2 sm-1"
                              }),
                              createVNode(_component_b_th, {
                                scope: "col",
                                col: "xs-2 sm-1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u30B3\u30FC\u30C9 ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_b_th, {
                                scope: "col",
                                col: "xs-6 sm-3"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u540D\u79F0 ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_b_th, {
                                scope: "col",
                                col: "sm-3"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u30AB\u30CA ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_b_th, {
                                scope: "col",
                                col: "sm-1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u30ED\u30FC\u30DE\u5B57 ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_b_th, {
                                scope: "col",
                                col: "xs-1 sm-1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u8CC3\u501F ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_b_th, {
                                scope: "col",
                                col: "xs-1 sm-1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u79D1\u76EE\u7A2E\u985E ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_b_th, {
                                scope: "col",
                                col: "xs-1 sm-1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u6D88\u8CBB\u7A0E ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_b_tbody, null, {
                        default: withCtx(() => [
                          createVNode(_component_b_tr, null, {
                            default: withCtx(() => [
                              createVNode(_component_b_td, {
                                scope: "row",
                                "text-alignment": "center"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_b_a, { href: "#" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u5909\u66F4 ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_b_td, { "text-alignment": "left" }, {
                                default: withCtx(() => [
                                  createTextVNode("Cell")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_b_td, { "text-alignment": "left" }, {
                                default: withCtx(() => [
                                  createTextVNode("Cell")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_b_td, { "text-alignment": "left" }, {
                                default: withCtx(() => [
                                  createTextVNode("Cell")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_b_td, { "text-alignment": "left" }, {
                                default: withCtx(() => [
                                  createTextVNode("Cell")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_b_td, { "text-alignment": "center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Cell")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_b_td, { "text-alignment": "center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Cell")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_b_td, { "text-alignment": "center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Cell")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_b_table, { bordered: "" }, {
                  default: withCtx(() => [
                    createVNode(_component_b_thead, null, {
                      default: withCtx(() => [
                        createVNode(_component_b_tr, {
                          theme: "primary",
                          "text-alignment": "center",
                          "text-wrap": "nowrap"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_b_th, {
                              scope: "col",
                              col: "xs-2 sm-1"
                            }),
                            createVNode(_component_b_th, {
                              scope: "col",
                              col: "xs-2 sm-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u30B3\u30FC\u30C9 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_th, {
                              scope: "col",
                              col: "xs-6 sm-3"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u540D\u79F0 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_th, {
                              scope: "col",
                              col: "sm-3"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u30AB\u30CA ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_th, {
                              scope: "col",
                              col: "sm-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u30ED\u30FC\u30DE\u5B57 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_th, {
                              scope: "col",
                              col: "xs-1 sm-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u8CC3\u501F ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_th, {
                              scope: "col",
                              col: "xs-1 sm-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u79D1\u76EE\u7A2E\u985E ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_th, {
                              scope: "col",
                              col: "xs-1 sm-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u6D88\u8CBB\u7A0E ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_b_tbody, null, {
                      default: withCtx(() => [
                        createVNode(_component_b_tr, null, {
                          default: withCtx(() => [
                            createVNode(_component_b_td, {
                              scope: "row",
                              "text-alignment": "center"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_b_a, { href: "#" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u5909\u66F4 ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_td, { "text-alignment": "left" }, {
                              default: withCtx(() => [
                                createTextVNode("Cell")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_td, { "text-alignment": "left" }, {
                              default: withCtx(() => [
                                createTextVNode("Cell")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_td, { "text-alignment": "left" }, {
                              default: withCtx(() => [
                                createTextVNode("Cell")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_td, { "text-alignment": "left" }, {
                              default: withCtx(() => [
                                createTextVNode("Cell")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_td, { "text-alignment": "center" }, {
                              default: withCtx(() => [
                                createTextVNode("Cell")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_td, { "text-alignment": "center" }, {
                              default: withCtx(() => [
                                createTextVNode("Cell")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_td, { "text-alignment": "center" }, {
                              default: withCtx(() => [
                                createTextVNode("Cell")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_b_div, {
            flex: "",
            padding: "t-3",
            "justify-content": "center"
          }, {
            default: withCtx(() => [
              createVNode(_component_b_button, {
                button: "outline-dark",
                margin: "e-2",
                col: "sm-3 xs-4 md-2"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u304A\u6C17\u306B\u5165\u308A\u8A2D\u5B9A ")
                ]),
                _: 1
              }),
              createVNode(_component_b_button, {
                button: "outline-dark",
                margin: "e-2",
                col: "sm-3 xs-4 md-2"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u7DE8\u96C6 ")
                ]),
                _: 1
              }),
              createVNode(_component_b_button, {
                button: "outline-dark",
                margin: "e-2",
                col: "sm-3 xs-4 md-2"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u65B0\u898F\u79D1\u76EE\u8FFD\u52A0 ")
                ]),
                _: 1
              }),
              createVNode(_component_b_button, {
                button: "outline-dark",
                margin: "e-2",
                col: "sm-3 xs-4 md-2",
                disabled: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u65B0\u898F\u88DC\u52A9\u79D1\u76EE\u8FFD\u52A0 ")
                ]),
                _: 1
              }),
              createVNode(_component_b_button, {
                button: "outline-dark",
                margin: "e-2",
                col: "sm-2 xs-2 md-2"
              }, {
                default: withCtx(() => [
                  createVNode(_component_b_img, {
                    src: "https://api.iconify.design/uiw/file-pdf.svg",
                    width: "20px",
                    height: "20px"
                  }),
                  createTextVNode(" PDF\u51FA\u529B ")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_b_div, { padding: "t-3" }, {
            default: withCtx(() => [
              createVNode(_component_b_button, {
                button: "outline-primary",
                margin: "e-2",
                col: "sm-2"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u8CC3\u501F\u5BFE\u7167\u8868 ")
                ]),
                _: 1
              }),
              createVNode(_component_b_button, {
                button: "outline-primary",
                col: "sm-2"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u640D\u76CA\u8A08\u7B97\u66F8 ")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_b_div, null, {
            default: withCtx(() => [
              createVNode(_component_b_table, { bordered: "" }, {
                default: withCtx(() => [
                  createVNode(_component_b_thead, null, {
                    default: withCtx(() => [
                      createVNode(_component_b_tr, {
                        theme: "primary",
                        "text-alignment": "center",
                        "text-wrap": "nowrap"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_b_th, {
                            scope: "col",
                            col: "xs-2 sm-1"
                          }),
                          createVNode(_component_b_th, {
                            scope: "col",
                            col: "xs-2 sm-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u30B3\u30FC\u30C9 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_th, {
                            scope: "col",
                            col: "xs-6 sm-3"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u540D\u79F0 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_th, {
                            scope: "col",
                            col: "sm-3"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u30AB\u30CA ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_th, {
                            scope: "col",
                            col: "sm-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u30ED\u30FC\u30DE\u5B57 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_th, {
                            scope: "col",
                            col: "xs-1 sm-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u8CC3\u501F ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_th, {
                            scope: "col",
                            col: "xs-1 sm-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u79D1\u76EE\u7A2E\u985E ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_th, {
                            scope: "col",
                            col: "xs-1 sm-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u6D88\u8CBB\u7A0E ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_b_tbody, null, {
                    default: withCtx(() => [
                      createVNode(_component_b_tr, null, {
                        default: withCtx(() => [
                          createVNode(_component_b_td, {
                            scope: "row",
                            "text-alignment": "center"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_b_a, { href: "#" }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u5909\u66F4 ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_td, { "text-alignment": "left" }, {
                            default: withCtx(() => [
                              createTextVNode("Cell")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_td, { "text-alignment": "left" }, {
                            default: withCtx(() => [
                              createTextVNode("Cell")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_td, { "text-alignment": "left" }, {
                            default: withCtx(() => [
                              createTextVNode("Cell")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_td, { "text-alignment": "left" }, {
                            default: withCtx(() => [
                              createTextVNode("Cell")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_td, { "text-alignment": "center" }, {
                            default: withCtx(() => [
                              createTextVNode("Cell")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_td, { "text-alignment": "center" }, {
                            default: withCtx(() => [
                              createTextVNode("Cell")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_td, { "text-alignment": "center" }, {
                            default: withCtx(() => [
                              createTextVNode("Cell")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/demo/BasicInformationSetting/AccountItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AccountItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { AccountItem as default };
//# sourceMappingURL=AccountItem-d7218b49.mjs.map
