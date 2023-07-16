"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[36181],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=u(t),f=o,m=s["".concat(l,".").concat(f)]||s[f]||p[f]||a;return t?n.createElement(m,i(i({ref:r},d),{},{components:t})):n.createElement(m,i({ref:r},d))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},99360:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>O,contentTitle:()=>y,default:()=>w,frontMatter:()=>m,metadata:()=>b,toc:()=>v});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&d(e,t,r[t]);if(c)for(var t of c(r))u.call(r,t)&&d(e,t,r[t]);return e},p=(e,r)=>a(e,i(r)),f=(e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&u.call(e,n)&&(t[n]=e[n]);return t};const m={title:"$randomRoleID",description:"Returns a random role id from the current guild"},y=void 0,b={unversionedId:"functions/randomroleid",id:"version-5.5.5/functions/randomroleid",title:"$randomRoleID",description:"Returns a random role id from the current guild",source:"@site/versioned_docs/version-5.5.5/functions/randomroleid.md",sourceDirName:"functions",slug:"/functions/randomroleid",permalink:"/fr/docs/5.5.5/functions/randomroleid",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 juil. 2023",frontMatter:{title:"$randomRoleID",description:"Returns a random role id from the current guild"},sidebar:"docs",previous:{title:"$randomGuildID",permalink:"/fr/docs/5.5.5/functions/randomguildid"},next:{title:"$randomString",permalink:"/fr/docs/5.5.5/functions/randomstring"}},O={},v=[],g={toc:v},j="wrapper";function w(e){var r=e,{components:t}=r,o=f(r,["components"]);return(0,n.kt)(j,p(s(s({},g),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns a random role's id from the current guild"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "randomRoleID",\ncode: `Random Role ID: $randomRoleID`\n})\n')))}w.isMDXComponent=!0}}]);