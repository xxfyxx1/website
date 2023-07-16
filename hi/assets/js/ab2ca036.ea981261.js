"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[17931],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return t?n.createElement(m,c(c({ref:r},p),{},{components:t})):n.createElement(m,c({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},12976:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>v,default:()=>h,frontMatter:()=>m,metadata:()=>y,toc:()=>w});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&p(e,t,r[t]);if(i)for(var t of i(r))s.call(r,t)&&p(e,t,r[t]);return e},d=(e,r)=>a(e,c(r)),f=(e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t};const m={title:"$serverCooldown",description:"Sets a server cooldown"},v=void 0,y={unversionedId:"functions/servercooldown",id:"version-5.5.5/functions/servercooldown",title:"$serverCooldown",description:"Sets a server cooldown",source:"@site/versioned_docs/version-5.5.5/functions/servercooldown.md",sourceDirName:"functions",slug:"/functions/servercooldown",permalink:"/hi/docs/5.5.5/functions/servercooldown",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$serverCooldown",description:"Sets a server cooldown"},sidebar:"docs",previous:{title:"$serverContentFilter",permalink:"/hi/docs/5.5.5/functions/servercontentfilter"},next:{title:"$serverCount",permalink:"/hi/docs/5.5.5/functions/servercount"}},b={},w=[],O={toc:w},g="wrapper";function h(e){var r=e,{components:t}=r,o=f(r,["components"]);return(0,n.kt)(g,d(u(u({},O),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function creates a cooldown for the command in the current guild"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$serverCooldown[time;error when cooldown activated]\n")),(0,n.kt)("p",null,"%time% returns the remaining cooldown time"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "serverCooldown",\ncode: `Cooldown command\n$serverCooldown[15s;Theres a cooldown!]`\n})\n')))}h.isMDXComponent=!0}}]);