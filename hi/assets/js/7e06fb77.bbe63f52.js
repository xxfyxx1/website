"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[6071],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||a;return r?t.createElement(m,i(i({ref:n},p),{},{components:r})):t.createElement(m,i({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},74780:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>O,contentTitle:()=>y,default:()=>j,frontMatter:()=>m,metadata:()=>b,toc:()=>h});var t=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,n,r)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,d=(e,n)=>{for(var r in n||(n={}))l.call(n,r)&&p(e,r,n[r]);if(c)for(var r of c(n))u.call(n,r)&&p(e,r,n[r]);return e},s=(e,n)=>a(e,i(n)),f=(e,n)=>{var r={};for(var t in e)l.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&c)for(var t of c(e))n.indexOf(t)<0&&u.call(e,t)&&(r[t]=e[t]);return r};const m={title:"$randomChannelID",description:"Return a random channel ID from the current Guild"},y=void 0,b={unversionedId:"functions/randomchannelid",id:"version-5.5.5/functions/randomchannelid",title:"$randomChannelID",description:"Return a random channel ID from the current Guild",source:"@site/versioned_docs/version-5.5.5/functions/randomchannelid.md",sourceDirName:"functions",slug:"/functions/randomchannelid",permalink:"/hi/docs/5.5.5/functions/randomchannelid",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$randomChannelID",description:"Return a random channel ID from the current Guild"},sidebar:"docs",previous:{title:"$random",permalink:"/hi/docs/5.5.5/functions/random"},next:{title:"$randomEmoji",permalink:"/hi/docs/5.5.5/functions/randomemoji"}},O={},h=[],v={toc:h},g="wrapper";function j(e){var n=e,{components:r}=n,o=f(n,["components"]);return(0,t.kt)(g,s(d(d({},v),o),{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"This function returns a random channel's ID in the current guild"),(0,t.kt)("pre",null,(0,t.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname:"randomchannelid",\ncode:`Random Channel ID: $randomChannelID`\n})\n')))}j.isMDXComponent=!0}}]);