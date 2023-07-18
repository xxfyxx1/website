"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[91543],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),c=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},y=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),y=n,m=u["".concat(s,".").concat(y)]||u[y]||f[y]||i;return t?a.createElement(m,o(o({ref:r},p),{},{components:t})):a.createElement(m,o({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=y;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},26730:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>g,contentTitle:()=>d,default:()=>k,frontMatter:()=>m,metadata:()=>h,toc:()=>v});var a=t(3905),n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&p(e,t,r[t]);if(l)for(var t of l(r))c.call(r,t)&&p(e,t,r[t]);return e},f=(e,r)=>i(e,o(r)),y=(e,r)=>{var t={};for(var a in e)s.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&l)for(var a of l(e))r.indexOf(a)<0&&c.call(e,a)&&(t[a]=e[a]);return t};const m={title:"$arrayUnshift",description:"$arrayUnshift will return the amount of elements of the given array.",id:"arrayUnshift"},d=void 0,h={unversionedId:"functions/array-related/arrayUnshift",id:"version-6.4.0/functions/array-related/arrayUnshift",title:"$arrayUnshift",description:"$arrayUnshift will return the amount of elements of the given array.",source:"@site/versioned_docs/version-6.4.0/functions/array-related/arrayUnshift.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayUnshift",permalink:"/uk/docs/functions/array-related/arrayUnshift",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689718489,formattedLastUpdatedAt:"18 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$arrayUnshift",description:"$arrayUnshift will return the amount of elements of the given array.",id:"arrayUnshift"},sidebar:"docs",previous:{title:"$arraySplice",permalink:"/uk/docs/functions/array-related/arraySplice"},next:{title:"$createArray",permalink:"/uk/docs/functions/array-related/createArray"}},g={},v=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],b={toc:v},O="wrapper";function k(e){var r=e,{components:t}=r,n=y(r,["components"]);return(0,a.kt)(O,f(u(u({},b),n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arrayUnshift")," will return the amount of elements of the given array."),(0,a.kt)("h2",u({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$arrayUnshift[name]\n")),(0,a.kt)("h2",u({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",u({parentName:"tr"},{align:"center"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"name"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Array name."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"true")))),(0,a.kt)("h2",u({},{id:"examples"}),"Example(s)"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-unshift",\n    code: `\n  $arrayUnshift[array]\n  $createArray[array;aoi.js;akarui;documents;bot]\n  `\n});\n')))}k.isMDXComponent=!0}}]);