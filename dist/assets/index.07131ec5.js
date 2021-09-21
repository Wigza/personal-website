import{b as e,S as a,i as t,s as i,R as r,c as _,m as s,n,t as p,a as o,d}from"./vendor.7b43f32a.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&a(e)})).observe(document,{childList:!0,subtree:!0})}function a(e){if(e.ep)return;e.ep=!0;const a=function(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?a.credentials="include":"anonymous"===e.crossorigin?a.credentials="omit":a.credentials="same-origin",a}(e);fetch(e.href,a)}}();const l={},m=function(e,a){return a&&0!==a.length?Promise.all(a.map((e=>{if((e=`/${e}`)in l)return;l[e]=!0;const a=e.endsWith(".css"),t=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const i=document.createElement("link");return i.rel=a?"stylesheet":"modulepreload",a||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),a?new Promise(((e,a)=>{i.addEventListener("load",e),i.addEventListener("error",a)})):void 0}))).then((()=>e())):e()},x={root:!0,ownMeta:{preload:"proximity"},children:[{isFallback:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/_fallback",component:()=>m((()=>import("./_fallback.0c8461e2.js")),["assets/_fallback.0c8461e2.js","assets/_fallback.9eee10b1.css","assets/vendor.7b43f32a.js"]).then((e=>e.default))},{isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/about",id:"_about",component:()=>m((()=>import("./about.0971a27e.js")),["assets/about.0971a27e.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))},{isDir:!0,children:[{isFallback:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/_fallback",id:"_example__fallback",component:()=>m((()=>import("./_fallback.a5d52c7a.js")),["assets/_fallback.a5d52c7a.js","assets/_fallback.77b97264.css","assets/vendor.7b43f32a.js"]).then((e=>e.default))},{isDir:!0,children:[{isIndex:!0,isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/aliasing/index",id:"_example_aliasing_index",component:()=>m((()=>import("./index.ff205992.js")),["assets/index.ff205992.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))},{isDir:!0,children:[{isFallback:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/aliasing/v1.1/_fallback",id:"_example_aliasing_v1_1__fallback",component:()=>m((()=>import("./_fallback.6c25b855.js")),["assets/_fallback.6c25b855.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))},{isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/aliasing/v1.1/feature2",id:"_example_aliasing_v1_1_feature2",component:()=>m((()=>import("./feature2.30338ae5.js")),["assets/feature2.30338ae5.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))},{isIndex:!0,isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/aliasing/v1.1/index",id:"_example_aliasing_v1_1_index",component:()=>m((()=>import("./index.0d8a2d53.js")),["assets/index.0d8a2d53.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))}],isLayout:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/aliasing/v1.1",id:"_example_aliasing_v1_1__layout",component:()=>m((()=>import("./_layout.c1b717ac.js")),["assets/_layout.c1b717ac.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))},{isDir:!0,children:[{isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/aliasing/v1/feature1",id:"_example_aliasing_v1_feature1",component:()=>m((()=>import("./feature1.39ba159b.js")),["assets/feature1.39ba159b.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))},{isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/aliasing/v1/feature2",id:"_example_aliasing_v1_feature2",component:()=>m((()=>import("./feature2.861cc060.js")),["assets/feature2.861cc060.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))},{isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/aliasing/v1/feature3",id:"_example_aliasing_v1_feature3",component:()=>m((()=>import("./feature3.c745d7f7.js")),["assets/feature3.c745d7f7.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))},{isIndex:!0,isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/aliasing/v1/index",id:"_example_aliasing_v1_index",component:()=>m((()=>import("./index.33f4a8eb.js")),["assets/index.33f4a8eb.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))}],isLayout:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/aliasing/v1",id:"_example_aliasing_v1__layout",component:()=>m((()=>import("./_layout.4f4e3d94.js")),["assets/_layout.4f4e3d94.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))}],isLayout:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/aliasing",id:"_example_aliasing__layout",component:()=>m((()=>import("./_layout.b2a2d309.js")),["assets/_layout.b2a2d309.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))},{isDir:!0,children:[{isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/api/:showId",id:"_example_api__showId",component:()=>m((()=>import("./[showId].5210400f.js")),["assets/[showId].5210400f.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))},{isIndex:!0,isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/api/index",id:"_example_api_index",component:()=>m((()=>import("./index.f24694f3.js")),["assets/index.f24694f3.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))}],isLayout:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/api",id:"_example_api__layout",component:()=>m((()=>import("./_layout.04c0f6ce.js")),["assets/_layout.04c0f6ce.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))},{isDir:!0,children:[{isFallback:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/app/_fallback",id:"_example_app__fallback",component:()=>m((()=>import("./_fallback.46074dbe.js")),["assets/_fallback.46074dbe.js","assets/_fallback.77b97264.css","assets/vendor.7b43f32a.js"]).then((e=>e.default))},{isIndex:!0,isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/app/index",id:"_example_app_index",component:()=>m((()=>import("./index.a61663c6.js")),["assets/index.a61663c6.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))},{isDir:!0,children:[{isIndex:!0,isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/app/login/index",id:"_example_app_login_index",component:()=>m((()=>import("./index.d7f83ce5.js")),["assets/index.d7f83ce5.js","assets/vendor.7b43f32a.js","assets/_store.4aa4ff3d.js"]).then((e=>e.default))}],isLayout:!0,isReset:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/app/login",id:"_example_app_login__reset",component:()=>m((()=>import("./_reset.0aeaecf9.js")),["assets/_reset.0aeaecf9.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))}],isLayout:!0,isReset:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/app",id:"_example_app__reset",component:()=>m((()=>import("./_reset.a9e9d8f5.js")),["assets/_reset.a9e9d8f5.js","assets/vendor.7b43f32a.js","assets/_store.4aa4ff3d.js"]).then((e=>e.default))},{isIndex:!0,isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/index",id:"_example_index",component:()=>m((()=>import("./index.6b322da5.js")),["assets/index.6b322da5.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))},{isDir:!0,children:[{isDir:!0,children:[{isDir:!0,children:[{isIndex:!0,isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/layouts/child/grandchild/index",id:"_example_layouts_child_grandchild_index",component:()=>m((()=>import("./index.07a75908.js")),["assets/index.07a75908.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))}],isLayout:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/layouts/child/grandchild",id:"_example_layouts_child_grandchild__layout",component:()=>m((()=>import("./_layout.7830b35c.js")),["assets/_layout.7830b35c.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))},{isIndex:!0,isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/layouts/child/index",id:"_example_layouts_child_index",component:()=>m((()=>import("./index.d6a01565.js")),["assets/index.d6a01565.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))}],isLayout:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/layouts/child",id:"_example_layouts_child__layout",component:()=>m((()=>import("./_layout.4eb267ec.js")),["assets/_layout.4eb267ec.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))},{isIndex:!0,isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/layouts/index",id:"_example_layouts_index",component:()=>m((()=>import("./index.c89fa319.js")),["assets/index.c89fa319.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))}],isLayout:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/layouts",id:"_example_layouts__layout",component:()=>m((()=>import("./_layout.abb446e9.js")),["assets/_layout.abb446e9.js","assets/_layout.8902fa98.css","assets/vendor.7b43f32a.js"]).then((e=>e.default))},{isDir:!0,children:[{isDir:!0,children:[{isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/modal/animated/:key",id:"_example_modal_animated__key",component:()=>m((()=>import("./[key].e03f1884.js")),["assets/[key].e03f1884.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))},{isIndex:!0,isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/modal/animated/index",id:"_example_modal_animated_index",component:()=>m((()=>import("./index.4a9a5ace.js")),["assets/index.4a9a5ace.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))}],isLayout:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/modal/animated",id:"_example_modal_animated__layout",component:()=>m((()=>import("./_layout.3dc6acca.js")),["assets/_layout.3dc6acca.js","assets/_layout.391fbf61.css","assets/vendor.7b43f32a.js","assets/index.a40a396c.js"]).then((e=>e.default))},{isDir:!0,children:[{isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/modal/basic/:key",id:"_example_modal_basic__key",component:()=>m((()=>import("./[key].e2fc7f12.js")),["assets/[key].e2fc7f12.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))},{isIndex:!0,isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/modal/basic/index",id:"_example_modal_basic_index",component:()=>m((()=>import("./index.e000461f.js")),["assets/index.e000461f.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))}],isLayout:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/modal/basic",id:"_example_modal_basic__layout",component:()=>m((()=>import("./_layout.d5e7151d.js")),["assets/_layout.d5e7151d.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))},{isIndex:!0,isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/modal/index",id:"_example_modal_index",component:()=>m((()=>import("./index.932ad9e1.js")),["assets/index.932ad9e1.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))}],isLayout:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/modal",id:"_example_modal__layout",component:()=>m((()=>import("./_layout.ba121385.js")),["assets/_layout.ba121385.js","assets/_layout.9cebb80b.css","assets/vendor.7b43f32a.js"]).then((e=>e.default))},{isDir:!0,children:[{isFallback:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/reset/_fallback",id:"_example_reset__fallback",component:()=>m((()=>import("./_fallback.352e526b.js")),["assets/_fallback.352e526b.js","assets/_fallback.77b97264.css","assets/vendor.7b43f32a.js"]).then((e=>e.default))},{isIndex:!0,isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/reset/index",id:"_example_reset_index",component:()=>m((()=>import("./index.8a7e0ac9.js")),["assets/index.8a7e0ac9.js","assets/index.2c53eede.css","assets/vendor.7b43f32a.js"]).then((e=>e.default))}],isLayout:!0,isReset:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/reset",id:"_example_reset__reset",component:()=>m((()=>import("./_reset.84a486df.js")),["assets/_reset.84a486df.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))},{isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/Splash",id:"_example_Splash",component:()=>m((()=>import("./Splash.25f92247.js")),["assets/Splash.25f92247.js","assets/Splash.584395ce.css","assets/vendor.7b43f32a.js","assets/index.a40a396c.js"]).then((e=>e.default))},{isDir:!0,ext:"",children:[{isDir:!0,children:[{isPage:!0,ownMeta:{index:0},meta:{index:0,$$bundleId:"_example_transitions_tabs__reset_svelte.js",recursive:!0,preload:"proximity",prerender:!0},path:"/example/transitions/tabs/home",id:"_example_transitions_tabs_home",component:()=>m((()=>import("./_example_transitions_tabs__reset_svelte.11f27092.js")),["assets/_example_transitions_tabs__reset_svelte.11f27092.js","assets/_example_transitions_tabs__reset_svelte.e3b0eac4.css","assets/vendor.7b43f32a.js","assets/index.a40a396c.js"]).then((e=>e._example_transitions_tabs_home))},{isIndex:!0,isPage:!0,meta:{$$bundleId:"_example_transitions_tabs__reset_svelte.js",recursive:!0,preload:"proximity",prerender:!0},path:"/example/transitions/tabs/index",id:"_example_transitions_tabs_index",component:()=>m((()=>import("./_example_transitions_tabs__reset_svelte.11f27092.js")),["assets/_example_transitions_tabs__reset_svelte.11f27092.js","assets/_example_transitions_tabs__reset_svelte.e3b0eac4.css","assets/vendor.7b43f32a.js","assets/index.a40a396c.js"]).then((e=>e._example_transitions_tabs_index))},{isDir:!0,children:[{isDir:!0,ext:"",children:[{isIndex:!0,isPage:!0,meta:{$$bundleId:"_example_transitions_tabs__reset_svelte.js",recursive:!0,preload:"proximity",prerender:!0},path:"/example/transitions/tabs/feed/:id/index",id:"_example_transitions_tabs_feed__id_index",component:()=>m((()=>import("./_example_transitions_tabs__reset_svelte.11f27092.js")),["assets/_example_transitions_tabs__reset_svelte.11f27092.js","assets/_example_transitions_tabs__reset_svelte.e3b0eac4.css","assets/vendor.7b43f32a.js","assets/index.a40a396c.js"]).then((e=>e._example_transitions_tabs_feed__id_index))}],meta:{$$bundleId:"_example_transitions_tabs__reset_svelte.js",recursive:!0,preload:"proximity",prerender:!0},path:"/example/transitions/tabs/feed/:id"},{isIndex:!0,isPage:!0,meta:{$$bundleId:"_example_transitions_tabs__reset_svelte.js",recursive:!0,preload:"proximity",prerender:!0},path:"/example/transitions/tabs/feed/index",id:"_example_transitions_tabs_feed_index",component:()=>m((()=>import("./_example_transitions_tabs__reset_svelte.11f27092.js")),["assets/_example_transitions_tabs__reset_svelte.11f27092.js","assets/_example_transitions_tabs__reset_svelte.e3b0eac4.css","assets/vendor.7b43f32a.js","assets/index.a40a396c.js"]).then((e=>e._example_transitions_tabs_feed_index))}],isLayout:!0,ownMeta:{index:1},meta:{index:1,$$bundleId:"_example_transitions_tabs__reset_svelte.js",recursive:!0,preload:"proximity",prerender:!0},path:"/example/transitions/tabs/feed",id:"_example_transitions_tabs_feed__layout",component:()=>m((()=>import("./_example_transitions_tabs__reset_svelte.11f27092.js")),["assets/_example_transitions_tabs__reset_svelte.11f27092.js","assets/_example_transitions_tabs__reset_svelte.e3b0eac4.css","assets/vendor.7b43f32a.js","assets/index.a40a396c.js"]).then((e=>e._example_transitions_tabs_feed__layout))},{isPage:!0,ownMeta:{index:2},meta:{index:2,$$bundleId:"_example_transitions_tabs__reset_svelte.js",recursive:!0,preload:"proximity",prerender:!0},path:"/example/transitions/tabs/updates",id:"_example_transitions_tabs_updates",component:()=>m((()=>import("./_example_transitions_tabs__reset_svelte.11f27092.js")),["assets/_example_transitions_tabs__reset_svelte.11f27092.js","assets/_example_transitions_tabs__reset_svelte.e3b0eac4.css","assets/vendor.7b43f32a.js","assets/index.a40a396c.js"]).then((e=>e._example_transitions_tabs_updates))},{isPage:!0,ownMeta:{index:3},meta:{index:3,$$bundleId:"_example_transitions_tabs__reset_svelte.js",recursive:!0,preload:"proximity",prerender:!0},path:"/example/transitions/tabs/settings",id:"_example_transitions_tabs_settings",component:()=>m((()=>import("./_example_transitions_tabs__reset_svelte.11f27092.js")),["assets/_example_transitions_tabs__reset_svelte.11f27092.js","assets/_example_transitions_tabs__reset_svelte.e3b0eac4.css","assets/vendor.7b43f32a.js","assets/index.a40a396c.js"]).then((e=>e._example_transitions_tabs_settings))}],isLayout:!0,isReset:!0,ownMeta:{bundle:!0},meta:{bundle:!0,$$bundleId:"_example_transitions_tabs__reset_svelte.js",recursive:!0,preload:"proximity",prerender:!0},path:"/example/transitions/tabs",id:"_example_transitions_tabs__reset",component:()=>m((()=>import("./_example_transitions_tabs__reset_svelte.11f27092.js")),["assets/_example_transitions_tabs__reset_svelte.11f27092.js","assets/_example_transitions_tabs__reset_svelte.e3b0eac4.css","assets/vendor.7b43f32a.js","assets/index.a40a396c.js"]).then((e=>e._example_transitions_tabs__reset))}],meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/transitions"},{isDir:!0,ext:"",children:[{isFallback:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/widget/_fallback",id:"_example_widget__fallback",component:()=>m((()=>import("./_fallback.432fe92a.js")),["assets/_fallback.432fe92a.js","assets/_fallback.96f2afa0.css","assets/vendor.7b43f32a.js"]).then((e=>e.default))}],meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example/widget"}],isLayout:!0,isReset:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/example",id:"_example__reset",component:()=>m((()=>import("./_reset.8559590d.js")),["assets/_reset.8559590d.js","assets/_reset.df447531.css","assets/vendor.7b43f32a.js"]).then((e=>e.default))},{isIndex:!0,isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/index",id:"_index",component:()=>m((()=>import("./index.4ded1581.js")),["assets/index.4ded1581.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))},{isDir:!0,ext:"",children:[{isDir:!0,ext:"",children:[{isDir:!0,ext:"",children:[{isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/work/designsystems/assembler/components",id:"_work_designsystems_assembler_components",component:()=>m((()=>import("./components.b43fbcaa.js")),["assets/components.b43fbcaa.js","assets/FontStack.svelte_svelte&type=style&lang.566d98fb.css","assets/vendor.7b43f32a.js"]).then((e=>e.default))},{isIndex:!0,isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/work/designsystems/assembler/index",id:"_work_designsystems_assembler_index",component:()=>m((()=>import("./index.1ec64a8b.js")),["assets/index.1ec64a8b.js","assets/FontStack.svelte_svelte&type=style&lang.566d98fb.css","assets/vendor.7b43f32a.js"]).then((e=>e.default))}],meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/work/designsystems/assembler"},{isIndex:!0,isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/work/designsystems/index",id:"_work_designsystems_index",component:()=>m((()=>import("./index.4004b929.js")),["assets/index.4004b929.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))}],meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/work/designsystems"},{isIndex:!0,isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/work/index",id:"_work_index",component:()=>m((()=>import("./index.d6eac592.js")),["assets/index.d6eac592.js","assets/index.83d13680.css","assets/vendor.7b43f32a.js"]).then((e=>e.default))}],meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/work"}],isLayout:!0,meta:{preload:"proximity",recursive:!0,prerender:!0},path:"/",id:"__layout",component:()=>m((()=>import("./_layout.dc9d00dd.js")),["assets/_layout.dc9d00dd.js","assets/vendor.7b43f32a.js"]).then((e=>e.default))},{tree:c,routes:u}=e(x);function h(e){let a,t;return a=new r({props:{routes:u}}),{c(){_(a.$$.fragment)},m(e,i){s(a,e,i),t=!0},p:n,i(e){t||(p(a.$$.fragment,e),t=!0)},o(e){o(a.$$.fragment,e),t=!1},d(e){d(a,e)}}}new class extends a{constructor(e){super(),t(this,e,null,h,i,{})}}({target:document.body,props:{siteName:"Tim Phillips, Designer",name:"Tim Phillips"}});export{m as _};
