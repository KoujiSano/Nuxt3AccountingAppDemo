import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { useSSRContext, ref } from 'vue';

const _sfc_main$1 = {
  __name: "DropdownMenu-kubo",
  __ssrInlineRender: true,
  props: ["options"],
  setup(__props) {
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><select><!--[-->`);
      ssrRenderList(__props.options, (option) => {
        _push(`<option${ssrRenderAttr("value", option.value)}>${ssrInterpolate(option.label)}</option>`);
      });
      _push(`<!--]--></select></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DropdownMenu-kubo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const DropdownMenu = _sfc_main$1;
const _sfc_main = {
  __name: "complex",
  __ssrInlineRender: true,
  setup(__props) {
    const menu1Options = [
      { label: "2023", value: "optionA" }
    ];
    const menu2Options = [
      { label: "\u6708\u6B21", value: "optionX" },
      { label: "\u6C7A\u7B97\uFF08\u4E2D\u9593\uFF09", value: "optionY" },
      { label: "\u6C7A\u7B97\uFF08\u671F\u672B\uFF09", value: "optionZ" },
      { label: "\u6C7A\u7B97\u518D\u632F\u66FF", value: "option\u03B1" },
      { label: "\u671F\u4E2D", value: "option\u03C9" }
    ];
    const menu3Options = [
      { label: "\u672C\u793E", value: "optionX" }
    ];
    const menu4Options = [
      { label: "\u539F\u5247\u8AB2\u7A0E/\u7A0E\u629C\u51E6\u7406", value: "optionA" }
    ];
    const menu5Options = [
      { label: "2023/1/1 ~ 2023/1/30", value: "optionA" },
      { label: "2023/2/1 ~ 2023/2/28", value: "optionB" },
      { label: "2023/3/1 ~ 2023/3/31", value: "optionC" },
      { label: "2023/4/1 ~ 2023/4/30", value: "optionD" },
      { label: "2023/5/1 ~ 2023/5/31", value: "optionE" },
      { label: "2023/6/1 ~ 2023/6/30", value: "optionF" },
      { label: "2023/7/1 ~ 2023/7/31", value: "optionG" },
      { label: "2023/8/1 ~ 2023/8/31", value: "optionH" },
      { label: "2023/9/1 ~ 2023/9/30", value: "optionI" },
      { label: "2023/10/1 ~ 2023/10/31", value: "optionJ" },
      { label: "2023/11/1 ~ 2023/11/30", value: "optionK" },
      { label: "2023/12/1 ~ 2023/12/31", value: "optionL" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1>\u8907\u5408\u4ED5\u8A33\u5165\u529B</h1><div class="container"><h2>\u4ED5\u8A33\u5E33</h2><table class="table"><thead><tr><th>\u5E74\u5EA6`);
      _push(ssrRenderComponent(DropdownMenu, { options: menu1Options }, null, _parent));
      _push(`</th><th>\u533A\u5206`);
      _push(ssrRenderComponent(DropdownMenu, { options: menu2Options }, null, _parent));
      _push(`</th><th>\u4F1A\u8A08\u5358\u4F4D`);
      _push(ssrRenderComponent(DropdownMenu, { options: menu3Options }, null, _parent));
      _push(`</th><th>\u6D88\u8CBB\u7A0E`);
      _push(ssrRenderComponent(DropdownMenu, { options: menu4Options }, null, _parent));
      _push(`</th><th>\u5BFE\u8C61\u671F\u9593`);
      _push(ssrRenderComponent(DropdownMenu, { options: menu5Options }, null, _parent));
      _push(`</th></tr></thead><tbody><tr><td>\u79D1\u76EE</td><td>\u88DC\u52A9</td><td>\u540D\u79F0</td><td>\u91D1\u984D</td><td>\u6D88\u8CBB\u7A0E\u533A\u5206</td><td>\u6D88\u8CBB\u7A0E</td><td>\u90E8\u9580</td><td>\u6458\u8981</td></tr></tbody></table></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/demo/complex-journal/complex.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=complex-5514092a.mjs.map
