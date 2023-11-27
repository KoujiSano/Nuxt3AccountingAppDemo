import{_ as R,a as T}from"./row.8d463880.js";import{r as w,O as g,s as c,x as i,y as p,q as m,Z as C,P as I,R as M,H as A,_ as j,z as N,w as t,o as O,b as e,d as u,a as V}from"./entry.987a87cd.js";import{B as y,u as h}from"./useBlock.4b5a21b9.js";import{A as k,T as D,u as b,h as x,I as q,f as z,a as E,g as F,k as H,l as L,m as U,s as Z,o as $}from"./useItemsActive.4bb86656.js";import{u as G,B as J}from"./bslink.3373a391.js";import{D as K,u as Q}from"./useDropdown.5bf65f54.js";import{_ as W}from"./container.0845eda4.js";import"./nuxt-link.b17a59bb.js";const X=w({name:"BsDropdownToggle",props:{...y,...k,...D,tag:{type:String,default:"a"},toggle:{type:String,default:"dropdown"}},setup(n,r){const o=g("toggleRef.dropdown",c()),l=h(n),a=b(n),s=x(n,o),d={ref:o};return()=>i(a.tag,p(d,s,a,l),r.slots)}}),Y=w({name:"BsDropdownItem",props:{...y,...q,...z,...k,...D},setup(n,r){const o=c(),l=h(n),a=E(n,"dropdown-item"),s=G(n,o),d=F(n,"nav",o),f=b(n),_=x(n,o);return()=>i("li",p(l),i(J,p({class:{"dropdown-item":!0},ref:o},f,d,s,_,a),r.slots.default))}}),tt={floating:{type:Object},dark:{type:Boolean},autoClose:{type:[Boolean,String],default:!0},alignment:{type:String,default:"start"},offset:{type:String},reference:{type:String}};function et(n,r){var B;const o=c((B=n.floating)==null?void 0:B.placement),l=c(!1),a=g("active.dropdown",c(!1)),s=g("toggleRef.dropdown",c()),d=g("placement.dropdown",c("")),f=m(()=>{switch(d.value){case"dropup":return n.alignment=="end"?"top-end":"top-start";case"dropend":return n.alignment=="end"?"right-end":"right-start";case"dropstart":return n.alignment=="end"?"left-end":"left-start";default:return n.alignment=="end"?"bottom-end":"bottom-start"}}),{floatingStyles:_}=H(s,r,{placement:f.value,whileElementsMounted:L,middleware:[U(),Z(),$(2)]});[!0,"","outside","true"].includes(n.autoClose)&&C(r,v=>{a.value&&(a.value=!1,v.stopPropagation())}),I(a,v=>{v?P():S()});const P=async()=>{await M(),l.value=!0},S=async()=>{l.value=!1};return{class:m(()=>({"dropdown-menu":!0,"dropdown-menu-dark":n.dark,show:l.value})),style:m(()=>s.value?_.value:{}),attr:m(()=>({...A(a.value,"data-popper-placement",o.value||"")})),state:{useTeleport:!1,tipPlacement:o,isShow:l}}}const nt=w({name:"BsDropdownMenu",props:{...y,...tt,tag:{type:String,default:"ul"}},setup(n,r){const o=c(),l=h(n),a=et(n,o),s={ref:o};return()=>i(n.tag,p(s,l,a),r.slots)}}),ot=w({name:"BsDropdown",props:{...y,...K,tag:{type:String,default:"div"}},setup(n,r){const o=c(),l=h(n),a=Q(n,r,o),s={class:{dropdown:!0},ref:o};return()=>i(n.tag,p(l,a,s),r.slots)}}),at={},lt=V("a",null," から ",-1);function st(n,r){const o=R,l=X,a=Y,s=nt,d=ot,f=T,_=W;return O(),N(_,null,{default:t(()=>[e(f,null,{default:t(()=>[e(o,{col:"6 md-3"},{default:t(()=>[u(" 会計単位 ")]),_:1}),e(o,{col:"6 md-3"},{default:t(()=>[e(d,null,{default:t(()=>[e(l,{button:"secondary"},{default:t(()=>[u(" 本社 ")]),_:1}),e(s,null,{default:t(()=>[e(a,null,{default:t(()=>[u(" 本社 ")]),_:1})]),_:1})]),_:1})]),_:1}),e(o,{col:"6 md-3"},{default:t(()=>[u(" 部門 ")]),_:1}),e(o,{col:"6 md-3"},{default:t(()=>[e(d,null,{default:t(()=>[e(l,{button:"secondary"},{default:t(()=>[u(" 指定なし ")]),_:1}),e(s,null,{default:t(()=>[e(a,null,{default:t(()=>[u(" 指定なし ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(o,null,{default:t(()=>[u(" 勘定項目 ")]),_:1}),e(o,null,{default:t(()=>[e(d,null,{default:t(()=>[e(l,{button:"secondary"},{default:t(()=>[u(" 100現金 ")]),_:1}),e(s,null,{default:t(()=>[e(a,null,{default:t(()=>[u(" 100現金 ")]),_:1})]),_:1})]),_:1})]),_:1}),e(o,null,{default:t(()=>[lt]),_:1}),e(o,null,{default:t(()=>[e(d,null,{default:t(()=>[e(l,{button:"secondary"},{default:t(()=>[u(" 100現金 ")]),_:1}),e(s,null,{default:t(()=>[e(a,null,{default:t(()=>[u(" 100現金 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(f,{"justify-content":"start"},{default:t(()=>[e(o,{col:"4"},{default:t(()=>[u(" 年度 ")]),_:1}),e(o,{col:"6"},{default:t(()=>[e(d,{display:"grid",gap:"2"},{default:t(()=>[e(l,{button:"secondary"},{default:t(()=>[u(" 2023 ")]),_:1}),e(s,null,{default:t(()=>[e(a,null,{default:t(()=>[u(" 2023 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const mt=j(at,[["render",st]]);export{mt as default};
