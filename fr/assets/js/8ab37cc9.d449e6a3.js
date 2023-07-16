"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[12713],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,b=u["".concat(c,".").concat(f)]||u[f]||d[f]||l;return r?o.createElement(b,a(a({ref:t},s),{},{components:r})):o.createElement(b,a({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},44715:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>j,frontMatter:()=>b,metadata:()=>y,toc:()=>v});var o=r(3905),n=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&s(e,r,t[r]);return e},d=(e,t)=>l(e,a(t)),f=(e,t)=>{var r={};for(var o in e)c.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&i)for(var o of i(e))t.indexOf(o)<0&&p.call(e,o)&&(r[o]=e[o]);return r};const b={title:"$globalCooldown",description:"Set a Global cooldown, with all Guilds"},m=void 0,y={unversionedId:"functions/globalcooldown",id:"version-5.5.5/functions/globalcooldown",title:"$globalCooldown",description:"Set a Global cooldown, with all Guilds",source:"@site/versioned_docs/version-5.5.5/functions/globalcooldown.md",sourceDirName:"functions",slug:"/functions/globalcooldown",permalink:"/fr/docs/5.5.5/functions/globalcooldown",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 juil. 2023",frontMatter:{title:"$globalCooldown",description:"Set a Global cooldown, with all Guilds"},sidebar:"docs",previous:{title:"$giveRoles",permalink:"/fr/docs/5.5.5/functions/giveroles"},next:{title:"$globalUserLeaderboard",permalink:"/fr/docs/5.5.5/functions/globaluserleaderboard"}},g={},v=[],w={toc:v},O="wrapper";function j(e){var t=e,{components:r}=t,n=f(t,["components"]);return(0,o.kt)(O,d(u(u({},w),n),{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$globalCooldown[time;error when cooldown activated]\n")),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "hello", \ncode: `\n$description[Hello!]\n$globalCooldown[1m;Hey, you need to wait 1m!]\n})\n')))}j.isMDXComponent=!0}}]);