import{O as s,s as o,P as f,a1 as l,q as u,Q as m}from"./entry.8f1abbe9.js";import{p}from"./useItemsActive.6a1cdb6c.js";import{d as v}from"./nuxt-link.cef70ac3.js";function b(t,r){if(!s("spy.spy",void 0))return{};if(!t.target&&!t.href)return{};const a=o(!1),i=p(t.target||t.href),n=s("refresh.spy",()=>{}),c=s("registerItem.spy",e=>{});return f(r,()=>{const e=m(r);e&&c(e.id)}),l(i,async([{isIntersecting:e}])=>{a.value=e,await nextTick(),n()}),{attr:u(()=>({"data-bv-spy-visible":a.value}))}}const x=v({componentName:"",externalRelAttribute:"",activeClass:"active",exactActiveClass:"",prefetchedClass:"",trailingSlash:"remove"});export{x as B,b as u};