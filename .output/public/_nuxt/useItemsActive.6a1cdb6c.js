import{a2 as Yt,s as I,v as Y,a3 as kt,R as Z,a4 as Ut,Q as yt,a5 as Gt,T as gt,N as ht,q as A,O as tt,H as N,a6 as Kt,a7 as Qt,G as q,a8 as Jt,P as rt,a9 as Zt,aa as te,ab as j,ac as Ot}from"./entry.8f1abbe9.js";var ee=0;function ne(t){var e=++ee;return Yt(t)+e}const oe=1e3;function Ie(t,e={}){const{document:n=kt}=e,o=I();return t&&Y(()=>{const i=n==null?void 0:n.querySelector(t);i&&(o.value=i)}),o}function ie(t,e={}){const{element:n=kt}=e;if(!t||t=="#")return[];const o=n==null?void 0:n.querySelectorAll(t);return o?Array.from(o).map(i=>i.id):[]}function se(t,e={}){const{window:n=Gt}=e,o=yt(t);if(!n||!o)return 0;let{transitionDuration:i,transitionDelay:r}=n.getComputedStyle(o);const s=Number.parseFloat(i),c=Number.parseFloat(r);return!s&&!c?0:(i=i.split(",")[0],r=r.split(",")[0],(Number.parseFloat(i)+Number.parseFloat(r))*oe)}const Ve=async(t,e=!0)=>{if(await Z(),!e)return new Promise(i=>i);const n=5,o=se(t)+n;await Ut(o),await Z()};function Ct(t){return()=>{t.forEach(e=>e)}}function Tt(t,e=""){function n(){return ie(t).map(u=>gt(`${e}${u}`))}return{on:a=>{const u=n().map(f=>f.on(a));return Ct(u)},once:a=>{const u=n().map(f=>f.once(a));return Ct(u)},emit:a=>{n().forEach(u=>{u.emit(a)})},off:a=>{n().forEach(u=>{u.off(a)})},reset:()=>{n().forEach(l=>{l.reset()})}}}const We={id:{type:String}};function _e(t,e="component"){const n=t.id||ne(`${e}_`);return ht(`id.${e}`,n),{attr:A(()=>({id:n}))}}function ut(t,e){const n=I(t.id);return Y(()=>{const o=yt(e);n.value=o==null?void 0:o.id}),n}function re(t={}){const{name:e="component",defaultValue:n=""}=t;return tt(`id.${e}`,n)}function He(t,e={}){return{attr:{id:t.id||re(e)}}}const $t={target:{type:String},href:{type:String}};function ce(t,e,n,o){const i=tt(`${e}.${n}`,void 0),r=ut(t,o);return s=>{if(t.target||t.href){const{emit:c}=Tt(t.target||t.href||"","expose_");c(e,s)}else if(i&&i(s),r.value){const{emit:c}=Tt(`#${r.value}`,"expose_");c(e,s)}}}const ze={...$t,button:{type:String},size:{type:String},disabled:{type:Boolean},stretchedLink:{type:Boolean},link:{type:String},type:{type:String,default:"button"},to:{type:String}};function je(t){const e=t.target?"button":t.href?"a":t.tag||"span";return{class:A(()=>({"stretched-link":t.stretchedLink,disabled:t.disabled,[`link-${t.link}`]:t.link,btn:t.button,[`btn-${t.button}`]:t.button,[`btn-${t.size}`]:t.size})),attr:A(()=>({...N(e=="a"&&t.button,"role","button"),...N(e=="button","type",t.type),...N(t.disabled,"aria-disabled","true"),...N(t.href,"href",t.href),...N(t.target,"data-bv-target",t.target),...N(t.to,"to",t.to)})),tag:e}}const qe={toggle:{type:String},active:{type:Boolean},split:{type:Boolean},...$t};function Xe(t,e){if(Kt(t.toggle))return{};const n=Qt(t.toggle),o=ut(t,e),i=n.map(c=>ce(t,"toggle",c||"",e)),r=()=>i.forEach(c=>c());n.forEach(c=>{const a=tt(`buttonID.${c}`,void 0);Y(()=>{a&&o.value&&(a.value=o.value)})});const s=async()=>{await r()};return{class:A(()=>({"dropdown-toggle":n.includes("dropdown"),"dropdown-toggle-split":t.split})),method:{toggle:s},event:{onClick:s}}}const U=Math.min,_=Math.max,ct=Math.round,st=Math.floor,V=t=>({x:t,y:t}),le={left:"right",right:"left",bottom:"top",top:"bottom"},ae={start:"end",end:"start"};function vt(t,e,n){return _(t,U(e,n))}function nt(t,e){return typeof t=="function"?t(e):t}function H(t){return t.split("-")[0]}function ot(t){return t.split("-")[1]}function Ft(t){return t==="x"?"y":"x"}function xt(t){return t==="y"?"height":"width"}function ft(t){return["top","bottom"].includes(H(t))?"y":"x"}function bt(t){return Ft(ft(t))}function ue(t,e,n){n===void 0&&(n=!1);const o=ot(t),i=bt(t),r=xt(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=lt(s)),[s,lt(s)]}function fe(t){const e=lt(t);return[pt(t),e,pt(e)]}function pt(t){return t.replace(/start|end/g,e=>ae[e])}function de(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}function me(t,e,n,o){const i=ot(t);let r=de(H(t),n==="start",o);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(pt)))),r}function lt(t){return t.replace(/left|right|bottom|top/g,e=>le[e])}function ge(t){return{top:0,right:0,bottom:0,left:0,...t}}function Mt(t){return typeof t!="number"?ge(t):{top:t,right:t,bottom:t,left:t}}function at(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function St(t,e,n){let{reference:o,floating:i}=t;const r=ft(e),s=bt(e),c=xt(s),a=H(e),l=r==="y",u=o.x+o.width/2-i.width/2,f=o.y+o.height/2-i.height/2,g=o[c]/2-i[c]/2;let d;switch(a){case"top":d={x:u,y:o.y-i.height};break;case"bottom":d={x:u,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:f};break;case"left":d={x:o.x-i.width,y:f};break;default:d={x:o.x,y:o.y}}switch(ot(e)){case"start":d[s]-=g*(n&&l?-1:1);break;case"end":d[s]+=g*(n&&l?-1:1);break}return d}const he=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,c=r.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(e));let l=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:f}=St(l,o,a),g=o,d={},m=0;for(let h=0;h<c.length;h++){const{name:w,fn:v}=c[h],{x:y,y:x,data:E,reset:b}=await v({x:u,y:f,initialPlacement:o,placement:g,strategy:i,middlewareData:d,rects:l,platform:s,elements:{reference:t,floating:e}});if(u=y??u,f=x??f,d={...d,[w]:{...d[w],...E}},b&&m<=50){m++,typeof b=="object"&&(b.placement&&(g=b.placement),b.rects&&(l=b.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):b.rects),{x:u,y:f}=St(l,g,a)),h=-1;continue}}return{x:u,y:f,placement:g,strategy:i,middlewareData:d}};async function Nt(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:c,strategy:a}=t,{boundary:l="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:g=!1,padding:d=0}=nt(e,t),m=Mt(d),w=c[g?f==="floating"?"reference":"floating":f],v=at(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(w)))==null||n?w:w.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:l,rootBoundary:u,strategy:a})),y=f==="floating"?{...s.floating,x:o,y:i}:s.reference,x=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),E=await(r.isElement==null?void 0:r.isElement(x))?await(r.getScale==null?void 0:r.getScale(x))||{x:1,y:1}:{x:1,y:1},b=at(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:x,strategy:a}):y);return{top:(v.top-b.top+m.top)/E.y,bottom:(b.bottom-v.bottom+m.bottom)/E.y,left:(v.left-b.left+m.left)/E.x,right:(b.right-v.right+m.right)/E.x}}const ve=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:s,elements:c,middlewareData:a}=e,{element:l,padding:u=0}=nt(t,e)||{};if(l==null)return{};const f=Mt(u),g={x:n,y:o},d=bt(i),m=xt(d),h=await s.getDimensions(l),w=d==="y",v=w?"top":"left",y=w?"bottom":"right",x=w?"clientHeight":"clientWidth",E=r.reference[m]+r.reference[d]-g[d]-r.floating[m],b=g[d]-r.reference[d],R=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let p=R?R[x]:0;(!p||!await(s.isElement==null?void 0:s.isElement(R)))&&(p=c.floating[x]||r.floating[m]);const D=E/2-b/2,M=p/2-h[m]/2-1,K=U(f[v],M),Q=U(f[y],M),T=K,J=p-h[m]-Q,O=p/2-h[m]/2+D,L=vt(T,O,J),P=!a.arrow&&ot(i)!=null&&O!=L&&r.reference[m]/2-(O<T?K:Q)-h[m]/2<0,k=P?O<T?O-T:O-J:0;return{[d]:g[d]+k,data:{[d]:L,centerOffset:O-L-k,...P&&{alignmentOffset:k}},reset:P}}}),Ye=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:r,rects:s,initialPlacement:c,platform:a,elements:l}=e,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:g,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:h=!0,...w}=nt(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const v=H(i),y=H(c)===c,x=await(a.isRTL==null?void 0:a.isRTL(l.floating)),E=g||(y||!h?[lt(c)]:fe(c));!g&&m!=="none"&&E.push(...me(c,h,m,x));const b=[c,...E],R=await Nt(e,w),p=[];let D=((o=r.flip)==null?void 0:o.overflows)||[];if(u&&p.push(R[v]),f){const T=ue(i,s,x);p.push(R[T[0]],R[T[1]])}if(D=[...D,{placement:i,overflows:p}],!p.every(T=>T<=0)){var M,K;const T=(((M=r.flip)==null?void 0:M.index)||0)+1,J=b[T];if(J)return{data:{index:T,overflows:D},reset:{placement:J}};let O=(K=D.filter(L=>L.overflows[0]<=0).sort((L,P)=>L.overflows[1]-P.overflows[1])[0])==null?void 0:K.placement;if(!O)switch(d){case"bestFit":{var Q;const L=(Q=D.map(P=>[P.placement,P.overflows.filter(k=>k>0).reduce((k,Xt)=>k+Xt,0)]).sort((P,k)=>P[1]-k[1])[0])==null?void 0:Q[0];L&&(O=L);break}case"initialPlacement":O=c;break}if(i!==O)return{reset:{placement:O}}}return{}}}};async function pe(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=H(n),c=ot(n),a=ft(n)==="y",l=["left","top"].includes(s)?-1:1,u=r&&a?-1:1,f=nt(e,t);let{mainAxis:g,crossAxis:d,alignmentAxis:m}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return c&&typeof m=="number"&&(d=c==="end"?m*-1:m),a?{x:d*u,y:g*l}:{x:g*l,y:d*u}}const Ue=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,i=await pe(e,t);return{x:n+i.x,y:o+i.y,data:i}}}},Ge=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:c={fn:w=>{let{x:v,y}=w;return{x:v,y}}},...a}=nt(t,e),l={x:n,y:o},u=await Nt(e,a),f=ft(H(i)),g=Ft(f);let d=l[g],m=l[f];if(r){const w=g==="y"?"top":"left",v=g==="y"?"bottom":"right",y=d+u[w],x=d-u[v];d=vt(y,d,x)}if(s){const w=f==="y"?"top":"left",v=f==="y"?"bottom":"right",y=m+u[w],x=m-u[v];m=vt(y,m,x)}const h=c.fn({...e,[g]:d,[f]:m});return{...h,data:{x:h.x-n,y:h.y-o}}}}};function W(t){return It(t)?(t.nodeName||"").toLowerCase():"#document"}function C(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function F(t){var e;return(e=(It(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function It(t){return t instanceof Node||t instanceof C(t).Node}function $(t){return t instanceof Element||t instanceof C(t).Element}function B(t){return t instanceof HTMLElement||t instanceof C(t).HTMLElement}function Dt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof C(t).ShadowRoot}function it(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=S(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function we(t){return["table","td","th"].includes(W(t))}function Et(t){const e=At(),n=S(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function ye(t){let e=G(t);for(;B(e)&&!dt(e);){if(Et(e))return e;e=G(e)}return null}function At(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function dt(t){return["html","body","#document"].includes(W(t))}function S(t){return C(t).getComputedStyle(t)}function mt(t){return $(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function G(t){if(W(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Dt(t)&&t.host||F(t);return Dt(e)?e.host:e}function Vt(t){const e=G(t);return dt(e)?t.ownerDocument?t.ownerDocument.body:t.body:B(e)&&it(e)?e:Vt(e)}function et(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Vt(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=C(i);return r?e.concat(s,s.visualViewport||[],it(i)?i:[],s.frameElement&&n?et(s.frameElement):[]):e.concat(i,et(i,[],n))}function Wt(t){const e=S(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=B(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,c=ct(n)!==r||ct(o)!==s;return c&&(n=r,o=s),{width:n,height:o,$:c}}function Rt(t){return $(t)?t:t.contextElement}function X(t){const e=Rt(t);if(!B(e))return V(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=Wt(e);let s=(r?ct(n.width):n.width)/o,c=(r?ct(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const xe=V(0);function _t(t){const e=C(t);return!At()||!e.visualViewport?xe:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function be(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==C(t)?!1:e}function z(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=Rt(t);let s=V(1);e&&(o?$(o)&&(s=X(o)):s=X(t));const c=be(r,n,o)?_t(r):V(0);let a=(i.left+c.x)/s.x,l=(i.top+c.y)/s.y,u=i.width/s.x,f=i.height/s.y;if(r){const g=C(r),d=o&&$(o)?C(o):o;let m=g.frameElement;for(;m&&o&&d!==g;){const h=X(m),w=m.getBoundingClientRect(),v=S(m),y=w.left+(m.clientLeft+parseFloat(v.paddingLeft))*h.x,x=w.top+(m.clientTop+parseFloat(v.paddingTop))*h.y;a*=h.x,l*=h.y,u*=h.x,f*=h.y,a+=y,l+=x,m=C(m).frameElement}}return at({width:u,height:f,x:a,y:l})}function Ee(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=B(n),r=F(n);if(n===r)return e;let s={scrollLeft:0,scrollTop:0},c=V(1);const a=V(0);if((i||!i&&o!=="fixed")&&((W(n)!=="body"||it(r))&&(s=mt(n)),B(n))){const l=z(n);c=X(n),a.x=l.x+n.clientLeft,a.y=l.y+n.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-s.scrollLeft*c.x+a.x,y:e.y*c.y-s.scrollTop*c.y+a.y}}function Ae(t){return Array.from(t.getClientRects())}function Ht(t){return z(F(t)).left+mt(t).scrollLeft}function Re(t){const e=F(t),n=mt(t),o=t.ownerDocument.body,i=_(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=_(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Ht(t);const c=-n.scrollTop;return S(o).direction==="rtl"&&(s+=_(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:c}}function Oe(t,e){const n=C(t),o=F(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,c=0,a=0;if(i){r=i.width,s=i.height;const l=At();(!l||l&&e==="fixed")&&(c=i.offsetLeft,a=i.offsetTop)}return{width:r,height:s,x:c,y:a}}function Ce(t,e){const n=z(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=B(t)?X(t):V(1),s=t.clientWidth*r.x,c=t.clientHeight*r.y,a=i*r.x,l=o*r.y;return{width:s,height:c,x:a,y:l}}function Lt(t,e,n){let o;if(e==="viewport")o=Oe(t,n);else if(e==="document")o=Re(F(t));else if($(e))o=Ce(e,n);else{const i=_t(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return at(o)}function zt(t,e){const n=G(t);return n===e||!$(n)||dt(n)?!1:S(n).position==="fixed"||zt(n,e)}function Te(t,e){const n=e.get(t);if(n)return n;let o=et(t,[],!1).filter(c=>$(c)&&W(c)!=="body"),i=null;const r=S(t).position==="fixed";let s=r?G(t):t;for(;$(s)&&!dt(s);){const c=S(s),a=Et(s);!a&&c.position==="fixed"&&(i=null),(r?!a&&!i:!a&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||it(s)&&!a&&zt(t,s))?o=o.filter(u=>u!==s):i=c,s=G(s)}return e.set(t,o),o}function Se(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?Te(e,this._c):[].concat(n),o],c=s[0],a=s.reduce((l,u)=>{const f=Lt(e,u,i);return l.top=_(f.top,l.top),l.right=U(f.right,l.right),l.bottom=U(f.bottom,l.bottom),l.left=_(f.left,l.left),l},Lt(e,c,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function De(t){return Wt(t)}function Le(t,e,n){const o=B(e),i=F(e),r=n==="fixed",s=z(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const a=V(0);if(o||!o&&!r)if((W(e)!=="body"||it(i))&&(c=mt(e)),o){const l=z(e,!0,r,e);a.x=l.x+e.clientLeft,a.y=l.y+e.clientTop}else i&&(a.x=Ht(i));return{x:s.left+c.scrollLeft-a.x,y:s.top+c.scrollTop-a.y,width:s.width,height:s.height}}function Pt(t,e){return!B(t)||S(t).position==="fixed"?null:e?e(t):t.offsetParent}function jt(t,e){const n=C(t);if(!B(t))return n;let o=Pt(t,e);for(;o&&we(o)&&S(o).position==="static";)o=Pt(o,e);return o&&(W(o)==="html"||W(o)==="body"&&S(o).position==="static"&&!Et(o))?n:o||ye(t)||n}const Pe=async function(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||jt,r=this.getDimensions;return{reference:Le(e,await i(n),o),floating:{x:0,y:0,...await r(n)}}};function Be(t){return S(t).direction==="rtl"}const ke={convertOffsetParentRelativeRectToViewportRelativeRect:Ee,getDocumentElement:F,getClippingRect:Se,getOffsetParent:jt,getElementRects:Pe,getClientRects:Ae,getDimensions:De,getScale:X,isElement:$,isRTL:Be};function $e(t,e){let n=null,o;const i=F(t);function r(){clearTimeout(o),n&&n.disconnect(),n=null}function s(c,a){c===void 0&&(c=!1),a===void 0&&(a=1),r();const{left:l,top:u,width:f,height:g}=t.getBoundingClientRect();if(c||e(),!f||!g)return;const d=st(u),m=st(i.clientWidth-(l+f)),h=st(i.clientHeight-(u+g)),w=st(l),y={rootMargin:-d+"px "+-m+"px "+-h+"px "+-w+"px",threshold:_(0,U(1,a))||1};let x=!0;function E(b){const R=b[0].intersectionRatio;if(R!==a){if(!x)return s();R?s(!1,R):o=setTimeout(()=>{s(!1,1e-7)},100)}x=!1}try{n=new IntersectionObserver(E,{...y,root:i.ownerDocument})}catch{n=new IntersectionObserver(E,y)}n.observe(t)}return s(!0),r}function Ke(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:a=!1}=o,l=Rt(t),u=i||r?[...l?et(l):[],...et(e)]:[];u.forEach(v=>{i&&v.addEventListener("scroll",n,{passive:!0}),r&&v.addEventListener("resize",n)});const f=l&&c?$e(l,n):null;let g=-1,d=null;s&&(d=new ResizeObserver(v=>{let[y]=v;y&&y.target===l&&d&&(d.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{d&&d.observe(e)})),n()}),l&&!a&&d.observe(l),d.observe(e));let m,h=a?z(t):null;a&&w();function w(){const v=z(t);h&&(v.x!==h.x||v.y!==h.y||v.width!==h.width||v.height!==h.height)&&n(),h=v,m=requestAnimationFrame(w)}return n(),()=>{u.forEach(v=>{i&&v.removeEventListener("scroll",n),r&&v.removeEventListener("resize",n)}),f&&f(),d&&d.disconnect(),d=null,a&&cancelAnimationFrame(m)}}const Fe=(t,e,n)=>{const o=new Map,i={platform:ke,...n},r={...i.platform,_c:o};return he(t,e,{...i,platform:r})};function wt(t){var e;return(e=t==null?void 0:t.$el)!=null?e:t}function Qe(t){return{name:"arrow",options:t,fn(e){const n=wt(q(t.element));return n==null?{}:ve({element:n,padding:t.padding}).fn(e)}}}function qt(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Bt(t,e){const n=qt(t);return Math.round(e*n)/n}function Je(t,e,n){n===void 0&&(n={});const o=n.whileElementsMounted,i=A(()=>{var p;return(p=q(n.open))!=null?p:!0}),r=A(()=>q(n.middleware)),s=A(()=>{var p;return(p=q(n.placement))!=null?p:"bottom"}),c=A(()=>{var p;return(p=q(n.strategy))!=null?p:"absolute"}),a=A(()=>{var p;return(p=q(n.transform))!=null?p:!0}),l=A(()=>wt(t.value)),u=A(()=>wt(e.value)),f=I(0),g=I(0),d=I(c.value),m=I(s.value),h=Jt({}),w=I(!1),v=A(()=>{const p={position:d.value,left:"0",top:"0"};if(!u.value)return p;const D=Bt(u.value,f.value),M=Bt(u.value,g.value);return a.value?{...p,transform:"translate("+D+"px, "+M+"px)",...qt(u.value)>=1.5&&{willChange:"transform"}}:{position:d.value,left:D+"px",top:M+"px"}});let y;function x(){l.value==null||u.value==null||Fe(l.value,u.value,{middleware:r.value,placement:s.value,strategy:c.value}).then(p=>{f.value=p.x,g.value=p.y,d.value=p.strategy,m.value=p.placement,h.value=p.middlewareData,w.value=!0})}function E(){typeof y=="function"&&(y(),y=void 0)}function b(){if(E(),o===void 0){x();return}if(l.value!=null&&u.value!=null){y=o(l.value,u.value,x);return}}function R(){i.value||(w.value=!1)}return rt([r,s,c],x,{flush:"sync"}),rt([l,u],b,{flush:"sync"}),rt(i,R,{flush:"sync"}),Zt()&&te(E),{x:j(f),y:j(g),strategy:j(d),placement:j(m),middlewareData:j(h),isPositioned:j(w),floatingStyles:v,update:x}}function Me(t,e,n){const o=ut(t,e),i=A(()=>gt(`expose_${o.value}`)),r=A(()=>gt(`emit_${o.value}`));function s(l){return Ot(l,(u,f)=>{ht(`${f}.${n}`,u)}),Y(()=>{i.value.on((u,...f)=>l[u]?l[u](f):void 0)}),l}function c(l,u,f){l.emit(u,f),r.value.emit(u,f)}function a(l){Ot(l,(u,f)=>{ht(`${f}.${n}`,u)}),Y(()=>{i.value.on((u,f)=>{l[u]&&f&&(l[u].value=f)})})}return{emit:c,expose:s,exposeState:a}}const Ze={active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}};function tn(t,e,n){const o=tt(`current.${e}`,void 0),i=tt(`parent.${e}`,void 0),r=ut(t,n),s=I(r.value&&(o==null?void 0:o.value)==r.value||t.active||!1),{expose:c,exposeState:a}=Me(t,n,e);o&&!t.to&&(s.value&&r.value&&(o.value=r.value),rt(o,async d=>{d==r.value?s.value=!0:s.value=!1;const m=yt(n);m&&(await Z(),s.value?m.classList.contains("active")||(m.classList.add("active"),await Z()):m.classList.contains("active")&&(m.classList.remove("active"),await Z()))}));const l=()=>{t.disabled||(o&&i&&i.value&&r.value?o.value=r.value:s.value=!0)},u=()=>{o&&i&&i.value?o.value="":s.value=!1},f=()=>{s.value?u():l()};Y(()=>{s.value&&r.value&&o&&(o.value=r.value)});const g=c({show:l,hide:u,toggle:f,dismiss:u});return a({active:s}),{class:A(()=>({active:s.value,disabled:t.disabled})),attr:A(()=>({...N(s.value,"aria-current","page"),...N(t.disabled,"aria-disabled","true")})),method:g}}export{ze as A,$t as E,We as I,qe as T,_e as a,ut as b,ne as c,He as d,Me as e,Ze as f,tn as g,Xe as h,re as i,ce as j,Je as k,Ke as l,Ye as m,Qe as n,Ue as o,Ie as p,Ge as s,je as u,Ve as w};