"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[21839],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(t),y=o,d=f["".concat(i,".").concat(y)]||f[y]||u[y]||l;return t?n.createElement(d,a(a({ref:r},p),{},{components:t})):n.createElement(d,a({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=y;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[f]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<l;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},90073:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>m,default:()=>j,frontMatter:()=>d,metadata:()=>b,toc:()=>O});var n=t(3905),o=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))i.call(r,t)&&p(e,t,r[t]);if(c)for(var t of c(r))s.call(r,t)&&p(e,t,r[t]);return e},u=(e,r)=>l(e,a(r)),y=(e,r)=>{var t={};for(var n in e)i.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t};const d={title:"$onlyForRoles",description:"Executable only by the specified role IDs"},m=void 0,b={unversionedId:"functions/onlyforroles",id:"version-5.5.5/functions/onlyforroles",title:"$onlyForRoles",description:"Executable only by the specified role IDs",source:"@site/versioned_docs/version-5.5.5/functions/onlyforroles.md",sourceDirName:"functions",slug:"/functions/onlyforroles",permalink:"/docs/5.5.5/functions/onlyforroles",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"Jul 16, 2023",frontMatter:{title:"$onlyForRoles",description:"Executable only by the specified role IDs"},sidebar:"docs",previous:{title:"$onlyForIDs",permalink:"/docs/5.5.5/functions/onlyforids"},next:{title:"$onlyForServers",permalink:"/docs/5.5.5/functions/onlyforservers"}},v={},O=[],g={toc:O},h="wrapper";function j(e){var r=e,{components:t}=r,o=y(r,["components"]);return(0,n.kt)(h,u(f(f({},g),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function makes the command only execute if the user has any of the roles specified"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-php"}),"$onlyForRoles[id1;id2;...;error when blocked]\n")),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "special",\ncode: `Special command\n$onlyForRoles[773353338393329675;:x: You can\'t run this command]`})\n')))}j.isMDXComponent=!0}}]);