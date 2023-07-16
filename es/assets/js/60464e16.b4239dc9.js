"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[88561],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,v=f["".concat(l,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(v,c(c({ref:t},p),{},{components:r})):n.createElement(v,c({ref:t},p))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[f]="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},19435:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>j,frontMatter:()=>v,metadata:()=>y,toc:()=>O});var n=r(3905),o=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(a)for(var r of a(t))s.call(t,r)&&p(e,r,t[r]);return e},u=(e,t)=>i(e,c(t)),d=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const v={title:"$serverContentFilter",description:"Returns the content filter of the guild"},m=void 0,y={unversionedId:"functions/servercontentfilter",id:"version-5.5.5/functions/servercontentfilter",title:"$serverContentFilter",description:"Returns the content filter of the guild",source:"@site/versioned_docs/version-5.5.5/functions/servercontentfilter.md",sourceDirName:"functions",slug:"/functions/servercontentfilter",permalink:"/es/docs/5.5.5/functions/servercontentfilter",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$serverContentFilter",description:"Returns the content filter of the guild"},sidebar:"docs",previous:{title:"$serverChannelExists",permalink:"/es/docs/5.5.5/functions/serverchannelexists"},next:{title:"$serverCooldown",permalink:"/es/docs/5.5.5/functions/servercooldown"}},b={},O=[],g={toc:O},h="wrapper";function j(e){var t=e,{components:o}=t,i=d(t,["components"]);return(0,n.kt)(h,u(f(f({},g),i),{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns the content filter of the current guild"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "serverContentFilter",\ncode: `Server Filter: $serverContentFilter`\n})\n')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Example",src:r(43197).Z,width:"730",height:"357"})))}j.isMDXComponent=!0},43197:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image (55)-6bb4618db69fc207326938a80160fe46.png"}}]);