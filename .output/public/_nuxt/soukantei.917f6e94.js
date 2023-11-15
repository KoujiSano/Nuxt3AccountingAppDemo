import{r as m,x as i,y as p,q as c,Y as f,P as x,_ as b,G as B,w as t,o as k,b as e,d as l,a as v}from"./entry.7693f1ee.js";import{B as g,u as y}from"./useBlock.bbc6402a.js";import{_ as S,a as C,b as N,c as h}from"./dropdown.56334386.js";import{_ as G}from"./container.89b2514b.js";import"./useItemsActive.eeb35450.js";import"./bslink.ab919475.js";import"./nuxt-link.3852da2b.js";import"./useDropdown.edc3f3f2.js";const R=m({name:"BsGridCol",props:{...g,tag:{type:String,default:"div"},col:{type:[Boolean,String,Number],default:!0}},setup(n,u){const o=y(n);return()=>i(n.tag,p(o),u.slots)}}),$={...g,auto:{type:Boolean},columns:{type:String},align:{type:String},rowreverse:{type:[Boolean]},gutter:{type:[Number,String]}};function D(n){const u=y(n);return{class:c(()=>({row:n.row,"row-cols-auto":n.auto,"flex-row-reverse":n.rowreverse,[`align-${n.align}`]:n.align,...f(n.columns,o=>`row-cols-${o}`),...f(n.gutter,o=>`g${x(n.gutter)&&["x","y"].indexOf(o.substring(0,1))>-1?`${o}`:`-${o}`}`),...u.class.value})),style:c(()=>({...u.style.value}))}}const P=m({name:"BsGridRow",props:{...$,tag:{type:String,default:"div"},row:{type:Boolean,default:!0}},setup(n,u){const o=D(n);return()=>i(n.tag,p(o),u.slots)}}),V={},T=v("a",null," から ",-1);function j(n,u){const o=R,a=S,_=C,r=N,s=h,d=P,w=G;return k(),B(w,null,{default:t(()=>[e(d,null,{default:t(()=>[e(o,{col:"6 md-3"},{default:t(()=>[l(" 会計単位 ")]),_:1}),e(o,{col:"6 md-3"},{default:t(()=>[e(s,null,{default:t(()=>[e(a,{button:"secondary"},{default:t(()=>[l(" 本社 ")]),_:1}),e(r,null,{default:t(()=>[e(_,null,{default:t(()=>[l(" 本社 ")]),_:1})]),_:1})]),_:1})]),_:1}),e(o,{col:"6 md-3"},{default:t(()=>[l(" 部門 ")]),_:1}),e(o,{col:"6 md-3"},{default:t(()=>[e(s,null,{default:t(()=>[e(a,{button:"secondary"},{default:t(()=>[l(" 指定なし ")]),_:1}),e(r,null,{default:t(()=>[e(_,null,{default:t(()=>[l(" 指定なし ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:t(()=>[e(o,null,{default:t(()=>[l(" 勘定項目 ")]),_:1}),e(o,null,{default:t(()=>[e(s,null,{default:t(()=>[e(a,{button:"secondary"},{default:t(()=>[l(" 100現金 ")]),_:1}),e(r,null,{default:t(()=>[e(_,null,{default:t(()=>[l(" 100現金 ")]),_:1})]),_:1})]),_:1})]),_:1}),e(o,null,{default:t(()=>[T]),_:1}),e(o,null,{default:t(()=>[e(s,null,{default:t(()=>[e(a,{button:"secondary"},{default:t(()=>[l(" 100現金 ")]),_:1}),e(r,null,{default:t(()=>[e(_,null,{default:t(()=>[l(" 100現金 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(d,{"justify-content":"start"},{default:t(()=>[e(o,{col:"4"},{default:t(()=>[l(" 年度 ")]),_:1}),e(o,{col:"6"},{default:t(()=>[e(s,{display:"grid",gap:"2"},{default:t(()=>[e(a,{button:"secondary"},{default:t(()=>[l(" 2023 ")]),_:1}),e(r,null,{default:t(()=>[e(_,null,{default:t(()=>[l(" 2023 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const F=b(V,[["render",j]]);export{F as default};
