"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[72473],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,f=p["".concat(i,".").concat(d)]||p[d]||c[d]||o;return r?n.createElement(f,l(l({ref:t},m),{},{components:r})):n.createElement(f,l({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},53422:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>b,default:()=>O,frontMatter:()=>f,metadata:()=>g,toc:()=>y});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&m(e,r,t[r]);if(u)for(var r of u(t))s.call(t,r)&&m(e,r,t[r]);return e},c=(e,t)=>o(e,l(t)),d=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$membersCount",description:"$membersCount will return a guild's member count.",id:"membersCount"},b=void 0,g={unversionedId:"functions/user-related/membersCount",id:"version-6.4.0/functions/user-related/membersCount",title:"$membersCount",description:"$membersCount will return a guild's member count.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/user-related/membersCount.md",sourceDirName:"functions/user-related",slug:"/functions/user-related/membersCount",permalink:"/es/docs/functions/user-related/membersCount",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$membersCount",description:"$membersCount will return a guild's member count.",id:"membersCount"},sidebar:"docs",previous:{title:"$memberJoinDate",permalink:"/es/docs/functions/user-related/memberJoinDate"},next:{title:"$moveUser",permalink:"/es/docs/functions/user-related/moveUser"}},k={},y=[{value:"Modo de uso",id:"modo-de-uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],v={toc:y},N="wrapper";function O(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(N,c(p(p({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$membersCount")," will return a guild's member count."),(0,n.kt)("h2",p({},{id:"modo-de-uso"}),"Modo de uso"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$membersCount[guildID?;presence?;countBot?]\n")),(0,n.kt)("h2",p({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",p({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"servidorID?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"The ID of the guild."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"presence?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"consulta"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"The presence of the users ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"all")," (default) ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"dnd")," ",(0,n.kt)("br",null)," 3. ",(0,n.kt)("strong",{parentName:"td"},"idle")," ",(0,n.kt)("br",null)," 4. ",(0,n.kt)("strong",{parentName:"td"},"offline")," ",(0,n.kt)("br",null)," 5. ",(0,n.kt)("strong",{parentName:"td"},"online")),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"countBot?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"booleano"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Count bots? ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"true")," (default) ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"false")),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"falso")))),(0,n.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"This will return the amount of offline users (including bots) in your guild:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'membersCount',\n    code: `\n  $membersCount[$guildID;offline;true]\n  `\n});\n")))}O.isMDXComponent=!0}}]);