"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[8266],{3905:(e,r,t)=>{t.d(r,{Zo:()=>f,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},f=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=s(t),v=o,d=p["".concat(l,".").concat(v)]||p[v]||u[v]||i;return t?n.createElement(d,a(a({ref:r},f),{},{components:t})):n.createElement(d,a({ref:r},f))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=v;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},11277:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>y,contentTitle:()=>m,default:()=>j,frontMatter:()=>d,metadata:()=>b,toc:()=>O});var n=t(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,f=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&f(e,t,r[t]);if(c)for(var t of c(r))s.call(r,t)&&f(e,t,r[t]);return e},u=(e,r)=>i(e,a(r)),v=(e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t};const d={title:"$serverVerificationLevel",description:"Sends the verification level of the current server"},m=void 0,b={unversionedId:"functions/serververificationlevel",id:"version-5.5.5/functions/serververificationlevel",title:"$serverVerificationLevel",description:"Sends the verification level of the current server",source:"@site/versioned_docs/version-5.5.5/functions/serververificationlevel.md",sourceDirName:"functions",slug:"/functions/serververificationlevel",permalink:"/ar/docs/5.5.5/functions/serververificationlevel",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"\u0661\u0666 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$serverVerificationLevel",description:"Sends the verification level of the current server"},sidebar:"docs",previous:{title:"$serverSplash",permalink:"/ar/docs/5.5.5/functions/serversplash"},next:{title:"$setBotAvatar",permalink:"/ar/docs/5.5.5/functions/setbotavatar"}},y={},O=[],g={toc:O},h="wrapper";function j(e){var r=e,{components:o}=r,i=v(r,["components"]);return(0,n.kt)(h,u(p(p({},g),i),{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns the current guild's server verification level"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "serverVerificationLvl",\ncode: `Server Verification Level: $serverVerificationLevel`\n})\n')),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(78430).Z,width:"703",height:"519"})))}j.isMDXComponent=!0},78430:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/image (32)-e5374ab937bcb234dd1417bf90df1889.png"}}]);