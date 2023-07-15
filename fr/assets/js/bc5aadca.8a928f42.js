"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[12414],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[f]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},34918:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>k,frontMatter:()=>m,metadata:()=>y,toc:()=>h});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&p(e,r,t[r]);return e},u=(e,t)=>a(e,l(t)),d=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$setRoleColor",description:"Changes the color of the specified role's ID"},g=void 0,y={unversionedId:"functions/setrolecolor",id:"version-5.5.5/functions/setrolecolor",title:"$setRoleColor",description:"Changes the color of the specified role's ID",source:"@site/versioned_docs/version-5.5.5/functions/setrolecolor.md",sourceDirName:"functions",slug:"/functions/setrolecolor",permalink:"/fr/docs/5.5.5/functions/setrolecolor",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 juil. 2023",frontMatter:{title:"$setRoleColor",description:"Changes the color of the specified role's ID"},sidebar:"docs",previous:{title:"$setMessageVar",permalink:"/fr/docs/5.5.5/functions/setmessagevar"},next:{title:"$setRoles",permalink:"/fr/docs/5.5.5/functions/setroles"}},b={},h=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2}],v={toc:h},O="wrapper";function k(e){var t=e,{components:r}=t,o=d(t,["components"]);return(0,n.kt)(O,u(f(f({},v),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function changes the color of a role"),(0,n.kt)("h3",f({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-php"}),"$setRoleColor[roleID;hex/int_color]\n")),(0,n.kt)("h3",f({},{id:"fields"}),"Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",f({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",f({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",f({parentName:"tr"},{align:"left"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"role ID"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"The id of the role whose colour is to be changed"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"color"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"The color we're changing to"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"hex/int color"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"yes")))),(0,n.kt)("h2",f({},{id:"example"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "crole",\ncode: `Changed the role\'s color to #FF0000\n$setRoleColor[$mentionedRoles;FF0000]`\n})\n')))}k.isMDXComponent=!0}}]);