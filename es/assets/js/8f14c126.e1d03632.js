"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[5803],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(t),v=a,d=p["".concat(c,".").concat(v)]||p[v]||f[v]||o;return t?n.createElement(d,s(s({ref:r},l),{},{components:t})):n.createElement(d,s({ref:r},l))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=v;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},97043:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>m,default:()=>h,frontMatter:()=>d,metadata:()=>y,toc:()=>O});var n=t(3905),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,l=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&l(e,t,r[t]);if(i)for(var t of i(r))u.call(r,t)&&l(e,t,r[t]);return e},f=(e,r)=>o(e,s(r)),v=(e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&u.call(e,n)&&(t[n]=e[n]);return t};const d={title:"$userAvatar",description:"Returns URL for the user's avatar"},m=void 0,y={unversionedId:"functions/useravatar",id:"version-5.5.5/functions/useravatar",title:"$userAvatar",description:"Returns URL for the user's avatar",source:"@site/versioned_docs/version-5.5.5/functions/useravatar.md",sourceDirName:"functions",slug:"/functions/useravatar",permalink:"/es/docs/5.5.5/functions/useravatar",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$userAvatar",description:"Returns URL for the user's avatar"},sidebar:"docs",previous:{title:"$user",permalink:"/es/docs/5.5.5/functions/user"},next:{title:"$userExists",permalink:"/es/docs/5.5.5/functions/userexists"}},b={},O=[],g={toc:O},j="wrapper";function h(e){var r=e,{components:t}=r,a=v(r,["components"]);return(0,n.kt)(j,f(p(p({},g),a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns the URL for the given user's avatar"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$userAvatar[userID]\n")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "userAvatar",\ncode: `$image[$userAvatar[535566311942651924]]`\n})\n')))}h.isMDXComponent=!0}}]);