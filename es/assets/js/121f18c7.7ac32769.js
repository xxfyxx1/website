"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[18561],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,k=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return r?a.createElement(k,l(l({ref:t},u),{},{components:r})):a.createElement(k,l({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75899:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>b,default:()=>N,frontMatter:()=>k,metadata:()=>g,toc:()=>h});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&u(e,r,t[r]);return e},s=(e,t)=>o(e,l(t)),m=(e,t)=>{var r={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r};const k={title:"$createWebhook",description:"$createWebhook crear\xe1 un webhook.",id:"createWebhook"},b=void 0,g={unversionedId:"functions/guild-related/createWebhook",id:"version-6.4.0/functions/guild-related/createWebhook",title:"$createWebhook",description:"$createWebhook crear\xe1 un webhook.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/createWebhook.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/createWebhook",permalink:"/es/docs/functions/guild-related/createWebhook",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689718489,formattedLastUpdatedAt:"18 jul 2023",frontMatter:{title:"$createWebhook",description:"$createWebhook crear\xe1 un webhook.",id:"createWebhook"},sidebar:"docs",previous:{title:"$createThread",permalink:"/es/docs/functions/guild-related/createThread"},next:{title:"$deleteChannel",permalink:"/es/docs/functions/guild-related/deleteChannel"}},f={},h=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],y={toc:h},v="wrapper";function N(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.kt)(v,s(d(d({},y),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$createWebhook")," crear\xe1 una pegatina."),(0,a.kt)("h2",d({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$createWebhook[Canal ID;nombre;avatar;razon;sep?]\n")),(0,a.kt)("h2",d({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,a.kt)("th",d({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"canalID"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"entero"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"ID del gremio del lugar en el que se crear\xe1 la pegatina."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"name"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"consulta"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Nombre para mostrar el webhook."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"avatar"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"La url del avatar del webhook."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"s\xed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\xbfraz\xf3n?"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Raz\xf3n que se mostrar\xe1 en los registros de auditor\xeda del gremio."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"s\xed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"sep?"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"El separador que se utilizar\xe1 para separar credenciales importantes como token e ID, predeterminado ",(0,a.kt)("inlineCode",{parentName:"td"},","),"."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"no")))),(0,a.kt)("h2",d({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("p",null,"Esto crear\xe1 un hilo en el canal actual:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'createWebhook',\n    code: `\n  $createWebhook[$channelID;aoi.js is great;$userAvatar[$authorID];Just testing.;, ]\n  `\n});\n")))}N.isMDXComponent=!0}}]);