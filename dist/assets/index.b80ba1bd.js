import{S as t,i as e,s as n,e as s,f as a,g as i,h as r,z as o,j as u,k as c,H as h,I as l,B as p,n as g,l as f,J as b,o as d,r as x,u as m,K as w}from"./vendor.75c3f65e.js";import{u as v}from"./_store.9201ce69.js";function y(t){let e,n,d,x,m,w,v,y,C,j,L,k,R,S,T,U,z,B,H,I,J,K,O,Y,$,_,q,A,D,E,F=t[2]()+"";return{c(){e=s("div"),n=s("h1"),n.textContent="Login",d=a(),x=s("input"),m=a(),w=s("br"),v=a(),y=s("input"),C=a(),j=s("br"),L=a(),k=s("button"),k.textContent="Submit",R=a(),S=s("br"),T=a(),U=s("br"),z=a(),B=s("br"),H=a(),I=s("p"),J=i("This login page is actually located at\n    "),K=s("a"),O=i(F),$=a(),_=s("p"),_.textContent="You are seeing it here, because we're using $goto with the static option\n    enabled. This renders the login page, without changing the URL in the\n    browser.",q=a(),A=s("p"),A.textContent='On submit, we\'re "redirected" to the current URL in your browser.',r(x,"type","text"),r(y,"type","text"),r(K,"href",Y=t[2]()),o(e,"width","256px"),o(e,"margin","128px auto"),o(e,"text-align","center")},m(s,a){u(s,e,a),c(e,n),c(e,d),c(e,x),h(x,t[0]),c(e,m),c(e,w),c(e,v),c(e,y),h(y,t[1]),c(e,C),c(e,j),c(e,L),c(e,k),c(e,R),c(e,S),c(e,T),c(e,U),c(e,z),c(e,B),c(e,H),c(e,I),c(I,J),c(I,K),c(K,O),c(e,$),c(e,_),c(e,q),c(e,A),D||(E=[l(x,"input",t[4]),l(y,"input",t[5]),l(k,"click",t[3])],D=!0)},p(t,[e]){1&e&&x.value!==t[0]&&h(x,t[0]),2&e&&y.value!==t[1]&&h(y,t[1]),4&e&&F!==(F=t[2]()+"")&&p(O,F),4&e&&Y!==(Y=t[2]())&&r(K,"href",Y)},i:g,o:g,d(t){t&&f(e),D=!1,b(E)}}}function C(t,e,n){let s,a,i;d(t,x,(t=>n(6,s=t))),d(t,v,(t=>n(7,a=t))),d(t,m,(t=>n(2,i=t)));let r="anything",o="goes";return[r,o,i,function(){w(v,a={username:r},a),s(window.location.href)},function(){r=this.value,n(0,r)},function(){o=this.value,n(1,o)}]}class j extends t{constructor(t){super(),e(this,t,C,y,n,{})}}export{j as default};