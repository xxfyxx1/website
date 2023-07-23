"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[15895],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),d=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(r),m=n,h=u["".concat(c,".").concat(m)]||u[m]||s[m]||l;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},31193:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>O,frontMatter:()=>h,metadata:()=>v,toc:()=>b});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(o)for(var r of o(t))d.call(t,r)&&p(e,r,t[r]);return e},s=(e,t)=>l(e,i(t)),m=(e,t)=>{var r={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&d.call(e,a)&&(r[a]=e[a]);return r};const h={title:"$archiveThread",description:"$archiveThread will archive or unarchive a specific thread.",id:"archiveThread"},f=void 0,v={unversionedId:"functions/guild-related/archiveThread",id:"version-6.4.0/functions/guild-related/archiveThread",title:"$archiveThread",description:"$archiveThread will archive or unarchive a specific thread.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/archiveThread.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/archiveThread",permalink:"/es/docs/functions/guild-related/archiveThread",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690091566,formattedLastUpdatedAt:"23 jul 2023",frontMatter:{title:"$archiveThread",description:"$archiveThread will archive or unarchive a specific thread.",id:"archiveThread"},sidebar:"docs",previous:{title:"$addThreadMember",permalink:"/es/docs/functions/guild-related/addThreadMember"},next:{title:"$ban",permalink:"/es/docs/functions/guild-related/ban"}},g={},b=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],y={toc:b},k="wrapper";function O(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.kt)(k,s(u(u({},y),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$archiveThread")," archivar\xe1 o desarchivar\xe1 un hilo espec\xedfico."),(0,a.kt)("h2",u({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$archiveThread[ID de subproceso;canalID?;archivo?;raz\xf3n?]\n")),(0,a.kt)("h2",u({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,a.kt)("th",u({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"hiloID"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"entero"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"El hilo ID."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"canalID?"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"entero"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"ID del canal de donde se encuentra el tema."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"falso")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"archivo?"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"booleano"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\xbfArchivar el hilo dado?"),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"falso")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\xbfraz\xf3n?"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Raz\xf3n que se mostrar\xe1 en los registros de auditor\xeda del gremio."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"falso")))),(0,a.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("p",null,"Esto archivar\xe1 el hilo creado:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'archiveThread',\n    code: `\n  $archiveThread[$channelID;$get[id];true;testing]\n  $let[id;$createThread[$channelID;example;1440;public;$messageID;true]]  \n  `\n});\n")))}O.isMDXComponent=!0}}]);