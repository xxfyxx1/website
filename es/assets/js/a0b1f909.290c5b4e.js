"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[70226],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75667:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>h,frontMatter:()=>f,metadata:()=>g,toc:()=>v});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&s(e,r,t[r]);if(o)for(var r of o(t))p.call(t,r)&&s(e,r,t[r]);return e},c=(e,t)=>i(e,l(t)),m=(e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$findMember",description:"$findMember will find a specific member in a specific guild by their name.",id:"findMember"},b=void 0,g={unversionedId:"functions/user-related/findMember",id:"version-6.4.0/functions/user-related/findMember",title:"$findMember",description:"$findMember will find a specific member in a specific guild by their name.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/user-related/findMember.md",sourceDirName:"functions/user-related",slug:"/functions/user-related/findMember",permalink:"/es/docs/functions/user-related/findMember",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$findMember",description:"$findMember will find a specific member in a specific guild by their name.",id:"findMember"},sidebar:"docs",previous:{title:"$displayName",permalink:"/es/docs/functions/user-related/displayName"},next:{title:"$findMembers",permalink:"/es/docs/functions/user-related/findMembers"}},y={},v=[{value:"Modo de uso",id:"modo-de-uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:v},O="wrapper";function h(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(O,c(u(u({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$findMember")," will find a specific member in a specific guild."),(0,n.kt)("h2",u({},{id:"modo-de-uso"}),"Modo de uso"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$findMember[userResolver;returnSelf?;guildID?]\n")),(0,n.kt)("h2",u({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",u({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"userResolver"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"consulta"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"User you want to find."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"returnSelf?"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Return the author ID if the given user was not found."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"servidorID?"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Guild ID where the user is present in."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"falso")))),(0,n.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"This will return your ID as ",(0,n.kt)("inlineCode",{parentName:"p"},"Leref")," was not found in the given guild:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'findMember',\n    code: `\n  $findMember[Leref;true;$guildID]\n  `\n});\n")))}h.isMDXComponent=!0}}]);