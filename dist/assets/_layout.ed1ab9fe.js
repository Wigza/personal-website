import{S as e,i as s,s as l,e as t,g as a,f as n,h as o,a0 as r,j as i,k as c,l as f,v as p,w as u,x as d,y as g,t as m,a as h,G as x,o as v,aa as $,u as b}from"./vendor.75c3f65e.js";function y(e,s,l){const t=e.slice();return t[6]=s[l][0],t[7]=s[l][1],t}function w(e){let s,l,p,u,d,g=e[7]+"";return{c(){s=t("span"),l=t("a"),p=a(g),d=n(),o(l,"class","font-semibold"),o(l,"href",u=e[1](e[6])),r(s,"active",e[0](e[6]))},m(e,t){i(e,s,t),c(s,l),c(l,p),c(s,d)},p(e,t){2&t&&u!==(u=e[1](e[6]))&&o(l,"href",u),9&t&&r(s,"active",e[0](e[6]))},d(e){e&&f(s)}}}function D(e){let s,l,a,r,v,$,b,D,P,j,C,A,B,F=e[3],G=[];for(let t=0;t<F.length;t+=1)G[t]=w(y(e,F,t));const H=e[5].default,L=p(H,e,e[4],null);return{c(){s=t("nav"),l=t("div"),a=t("div"),a.innerHTML='<a class="p-0 lg:pl-4 font-semibold" href="/">Tim Phillips, Designer</a>',r=n(),v=t("div");for(let e=0;e<G.length;e+=1)G[e].c();$=n(),L&&L.c(),b=n(),D=t("footer"),P=t("div"),j=t("a"),j.textContent=`${T}`,C=n(),A=t("p"),A.textContent=`Designed and Built by ${k}, ${e[2].getFullYear()}`,o(a,"class","relative lg:absolute lg:left-0 lg:top-4"),o(v,"class","space-x-4"),o(l,"class","heading-font-override container max-w-2xl mx-auto space-y-1 lg:space-y-0 px-4"),o(s,"class","nav relative border-b border-gray-400 py-2 lg:py-4"),o(j,"href","/"),o(j,"class","font-semibold"),o(A,"class","ml-0 lg:ml-auto"),o(P,"class","flex flex-col lg:flex-row border-t py-4 border-gray-400"),o(D,"class","heading-font-override text-sm container max-w-2xl mx-auto space-y-1 px-4")},m(e,t){i(e,s,t),c(s,l),c(l,a),c(l,r),c(l,v);for(let s=0;s<G.length;s+=1)G[s].m(v,null);i(e,$,t),L&&L.m(e,t),i(e,b,t),i(e,D,t),c(D,P),c(P,j),c(P,C),c(P,A),B=!0},p(e,[s]){if(11&s){let l;for(F=e[3],l=0;l<F.length;l+=1){const t=y(e,F,l);G[l]?G[l].p(t,s):(G[l]=w(t),G[l].c(),G[l].m(v,null))}for(;l<G.length;l+=1)G[l].d(1);G.length=F.length}L&&L.p&&(!B||16&s)&&u(L,H,e,e[4],B?g(H,e[4],s,null):d(e[4]),null)},i(e){B||(m(L,e),B=!0)},o(e){h(L,e),B=!1},d(e){e&&f(s),x(G,e),e&&f($),L&&L.d(e),e&&f(b),e&&f(D)}}}let T="Tim Phillips, Designer",k="Tim Phillips";function P(e,s,l){let t,a;v(e,$,(e=>l(0,t=e))),v(e,b,(e=>l(1,a=e)));let{$$slots:n={},$$scope:o}=s,r=new Date;return e.$$set=e=>{"$$scope"in e&&l(4,o=e.$$scope)},[t,a,r,[["./work","Work"],["./about","About"]],o,n]}class j extends e{constructor(e){super(),s(this,e,P,D,l,{})}}export{j as default};
