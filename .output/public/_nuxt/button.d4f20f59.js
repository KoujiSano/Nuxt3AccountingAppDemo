import{r as d,s as P,x as f,J as p,y as v}from"./entry.1aefc4ad.js";import{B,u as g}from"./useBlock.a6ce4556.js";import{E as h,j as y,A as E,I as T,T as b,c as A,u as _,a as k,d as C,e as x}from"./useItemsActive.d544ce9e.js";import{T as I,P as S,u as D,a as j}from"./usePopover.0b626559.js";const H={...h,dismiss:{type:String}};function J(t,e){if(!t.dismiss)return{};const s=y(t,"dismiss",t.dismiss||"",e),o=()=>{s()};return{method:{dismiss:o},event:{onClick:o}}}const F=d({name:"HtmlButton",props:{...B,...E,...T,...b,...A,...H,...I,...S,type:{type:String,default:"button"}},setup(t,e){const s=P(),o=g(t),i=_(t),u=k(t,"button"),a=C(t,s),c=x(t,"button",s),m=J(t,s),n=D(t,s),r=j(t,s),l={attr:{type:t.type},ref:s};return()=>f("button",v(l,u,i,m,a,c,r,n,o),p(e.slots.default,n.render,r.render))}});export{F as _};
