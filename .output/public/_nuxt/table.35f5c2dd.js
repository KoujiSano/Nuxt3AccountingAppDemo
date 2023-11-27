import{r as s,q as u,x as l,y as o,U as i}from"./entry.987a87cd.js";import{B as r,u as c}from"./useBlock.4b5a21b9.js";const b=s({name:"HtmlTableH",props:{...r,tag:{type:String,default:"th"},theme:{type:String,default:void 0}},setup(t,e){const a=c(t),n={class:u(()=>({[`table-${t.theme}`]:t.theme}))};return()=>l(t.tag,o(n,a),e.slots)}}),g=s({name:"HtmlTableRow",props:{...r,tag:{type:String,default:"tr"},active:{type:Boolean},theme:{type:String,default:""}},setup(t,e){const a=c(t),n={class:u(()=>({[`table-${t.theme}`]:t.theme,"table-active":t.active}))};return()=>l(t.tag,o(n,a),e.slots)}}),v=s({name:"HtmlTableHead",props:{...r,tag:{type:String,default:"thead"},theme:{type:String,default:void 0}},setup(t,e){const a=c(t),n={class:u(()=>({[`table-${t.theme}`]:t.theme}))};return()=>l(t.tag,o(a,n),e.slots)}}),_=s({name:"HtmlTableData",props:{...r,tag:{type:String,default:"td"},active:{type:Boolean},theme:{type:String,default:void 0}},setup(t,e){const a=c(t),n={class:u(()=>({[`table-${t.theme}`]:t.theme,"table-active":t.active}))};return()=>l(t.tag,o(n,a),e.slots)}}),y=s({name:"HtmlTableBody",props:{...r,tag:{type:String,default:"tbody"}},setup(t,e){const a=c(t);return()=>l(t.tag,o(a),e.slots)}}),h=s({name:"HtmlTable",props:{...r,tag:{type:String,default:"table"},theme:{type:String,default:void 0},striped:{type:Boolean},hover:{type:Boolean},active:{type:Boolean},bordered:{type:Boolean},borderless:{type:Boolean},small:{type:Boolean},caption:{type:String,default:void 0},responsive:{type:[Boolean,String],default:void 0}},setup(t,e){const a=c(t),n={class:u(()=>({table:!0,[`table-${t.theme}`]:t.theme,"table-striped":t.striped,"table-hover":t.hover,"table-active":t.active,"table-bordered":t.bordered,"table-borderless":t.borderless,"table-sm":t.small,[`caption-${t.caption}`]:t.caption}))};return()=>t.responsive?l("div",{class:{[`table-responsive${i(t.responsive)?`-${t.responsive}`:""}`]:t.responsive}},l(t.tag,{...e.attrs,...o(n,a)},e.slots)):l(t.tag,{...e.attrs,...o(n,a)},e.slots)}});export{b as _,g as a,v as b,_ as c,y as d,h as e};
