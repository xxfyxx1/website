"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[4876],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return r?i.createElement(m,l(l({ref:t},d),{},{components:r})):i.createElement(m,l({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<a;c++)l[c]=r[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},29138:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>h,frontMatter:()=>m,metadata:()=>v,toc:()=>b});var i=r(3905),n=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&d(e,r,t[r]);if(o)for(var r of o(t))c.call(t,r)&&d(e,r,t[r]);return e},u=(e,t)=>a(e,l(t)),f=(e,t)=>{var r={};for(var i in e)s.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&o)for(var i of o(e))t.indexOf(i)<0&&c.call(e,i)&&(r[i]=e[i]);return r};const m={title:"$isVerified",description:"$isVerified checks if the given guild is verified by Discord.",id:"isVerified"},g=void 0,v={unversionedId:"functions/util-related/isVerified",id:"version-6.4.0/functions/util-related/isVerified",title:"$isVerified",description:"$isVerified checks if the given guild is verified by Discord.",source:"@site/versioned_docs/version-6.4.0/functions/util-related/isVerified.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/isVerified",permalink:"/fr/docs/functions/util-related/isVerified",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689718489,formattedLastUpdatedAt:"18 juil. 2023",frontMatter:{title:"$isVerified",description:"$isVerified checks if the given guild is verified by Discord.",id:"isVerified"},sidebar:"docs",previous:{title:"$isVariableExist",permalink:"/fr/docs/functions/util-related/isVariableExist"},next:{title:"$isVideoOn",permalink:"/fr/docs/functions/util-related/isVideoOn"}},y={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],k={toc:b},O="wrapper";function h(e){var t=e,{components:r}=t,n=f(t,["components"]);return(0,i.kt)(O,u(p(p({},k),n),{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$isVerified")," checks if the given guild is verified by Discord."),(0,i.kt)("h2",p({},{id:"usage"}),"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$isVerified[guildID?]\n")),(0,i.kt)("h2",p({},{id:"parameters"}),"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",p({parentName:"tr"},{align:null}),"Field"),(0,i.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,i.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,i.kt)("th",p({parentName:"tr"},{align:"center"}),"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",p({parentName:"tr"},{align:null}),"guildID?"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"integer"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"The ID of the guild where you want to check its verification status of."),(0,i.kt)("td",p({parentName:"tr"},{align:"center"}),"false")))),(0,i.kt)("h2",p({},{id:"examples"}),"Example(s)"),(0,i.kt)("p",null,"This will check if your server is verified and return either ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'isVerified',\n    code: `\n  $isVerified[$guildID]\n  `\n});\n")))}h.isMDXComponent=!0}}]);