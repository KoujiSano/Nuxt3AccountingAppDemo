import{r as s,x as a,y as u,q as r,$ as n,M as c}from"./entry.8f1abbe9.js";import{B as l,u as i}from"./useBlock.46b08bc3.js";const w=s({name:"BsGridCol",props:{...l,tag:{type:String,default:"div"},col:{type:[Boolean,String,Number],default:!0}},setup(t,o){const e=i(t);return()=>a(t.tag,u(e),o.slots)}}),g={...l,auto:{type:Boolean},columns:{type:String},align:{type:String},rowreverse:{type:[Boolean]},gutter:{type:[Number,String]}};function d(t){const o=i(t);return{class:r(()=>({row:t.row,"row-cols-auto":t.auto,"flex-row-reverse":t.rowreverse,[`align-${t.align}`]:t.align,...n(t.columns,e=>`row-cols-${e}`),...n(t.gutter,e=>`g${c(t.gutter)&&["x","y"].indexOf(e.substring(0,1))>-1?`${e}`:`-${e}`}`),...o.class.value})),style:r(()=>({...o.style.value}))}}const f=s({name:"BsGridRow",props:{...g,tag:{type:String,default:"div"},row:{type:Boolean,default:!0}},setup(t,o){const e=d(t);return()=>a(t.tag,u(e),o.slots)}});export{w as _,f as a};
