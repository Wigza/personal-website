import{S as e,i as s,s as r,e as n,h as t,j as a,n as o,P as d,$ as i,l as u,M as c,t as l,O as p,a as m,N as f}from"./vendor.75c3f65e.js";import{f as w}from"./index.338a8626.js";function x(e){let s,r,c;return{c(){s=n("div"),s.textContent=`source: ${e[1]}`,t(s,"class","box svelte-lzvrwb")},m(e,r){a(e,s,r),c=!0},p:o,i(e){c||(e&&d((()=>{r||(r=i(s,w,{},!0)),r.run(1)})),c=!0)},o(e){e&&(r||(r=i(s,w,{},!1)),r.run(0)),c=!1},d(e){e&&u(s),e&&r&&r.end()}}}function v(e){let s,r=e[0]&&x(e);return{c(){r&&r.c(),s=c()},m(e,n){r&&r.m(e,n),a(e,s,n)},p(e,[n]){e[0]?r?(r.p(e,n),1&n&&l(r,1)):(r=x(e),r.c(),l(r,1),r.m(s.parentNode,s)):r&&(p(),m(r,1,1,(()=>{r=null})),f())},i(e){l(r)},o(e){m(r)},d(e){r&&r.d(e),e&&u(s)}}}function _(e,s,r){let n=!0,t=window.__preRendered?"prerender":window.__ssrRendered?"ssr":"spa";return setTimeout((()=>{r(0,n=!1)}),3e3),[n,t]}class j extends e{constructor(e){super(),s(this,e,_,v,r,{})}}export{j as default};