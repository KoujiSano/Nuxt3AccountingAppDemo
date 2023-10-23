import { mergeProps, unref, useSSRContext, readonly } from 'vue';
import { u as useState } from './state-b54abad0.mjs';
import { r as rand } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
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
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'lodash-es';

const useGameStore = () => {
  const state = useState("game", () => ({
    messeges: [],
    hero: {
      name: "",
      hp: 0,
      st: 0,
      ac: 0,
      dc: 0
    },
    monsters: [
      {
        name: "",
        hp: 0,
        st: 0,
        ac: 0,
        dc: 0
      },
      {
        name: "",
        hp: 0,
        st: 0,
        ac: 0,
        dc: 0
      }
    ],
    weapons: [
      {
        name: "",
        hp: 0,
        st: 0,
        ac: 0,
        dc: 0
      }
    ],
    armors: [
      {
        name: "",
        hp: 0,
        st: 0,
        ac: 0,
        dc: 0
      }
    ]
  }));
  return {
    state: readonly(state),
    init: init(state),
    battle: battle(state),
    addMessage: addMessage(state)
  };
};
const init = (state) => {
  return (heroName) => {
    state.value.hero = initCharacter(heroName, 1, 100);
    state.value.monsters.push(initCharacter("\u30B9\u30E9\u30A4\u30E0", 1, 100));
    state.value.monsters.push(initCharacter("\u30B4\u30D6\u30EA\u30F3", 1, 100));
    state.value.monsters.push(initCharacter("\u30B4\u30D6\u30EA\u30F3", 1, 100));
  };
};
const initCharacter = (name, min, max) => {
  return {
    name,
    hp: rand(min, max),
    st: rand(min, max),
    ac: rand(min, max),
    dc: rand(min, max)
  };
};
const addMessage = (state) => {
  return (message) => {
    state.value.messeges.push(message);
  };
};
const battle = (state) => {
  return (count) => state.value.hero.hp = count;
};
const store = useGameStore();
const useGameInit = () => {
  store.addMessage("\u521D\u671F\u5316\u3055\u308C\u307E\u3057\u305F");
};
const _sfc_main = {
  __name: "game",
  __ssrInlineRender: true,
  setup(__props) {
    const state = useGameState();
    const init2 = useGameInit();
    init2();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div class="row"><!--[-->`);
      ssrRenderList(unref(state).messeges, (item) => {
        _push(`<div class="col">${ssrInterpolate(item)}</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/demo/game.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=game-19becb51.mjs.map
