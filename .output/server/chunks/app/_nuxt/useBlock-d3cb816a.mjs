import { computed } from 'vue';
import { l as addClassNames, B as spacing, f as hasValue, b as addProp, i as isPropDefined } from '../server.mjs';

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

export { BlockProps as B, InlineProps as I, useInline as a, useBlock as u };
//# sourceMappingURL=useBlock-d3cb816a.mjs.map
