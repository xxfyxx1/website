"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[41253],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(r),f=a,m=s["".concat(d,".").concat(f)]||s[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},14354:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>k,frontMatter:()=>m,metadata:()=>y,toc:()=>g});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&p(e,r,t[r]);return e},u=(e,t)=>o(e,i(t)),f=(e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$oldGuild",description:"$oldGuild contiene datos para el gremio antes de que se actualizara, esto es del cach\xe9 de discord y puede estar vac\xedo dependiendo de si est\xe1 en cach\xe9, as\xed que use la opci\xf3n parcial antes de intentar acceder a cualquier propiedad. (guildUpdate evento)",id:"oldGuild"},v=void 0,y={unversionedId:"functions/event-related/oldGuild",id:"version-6.4.0/functions/event-related/oldGuild",title:"$oldGuild",description:"$oldGuild contiene datos para el gremio antes de que se actualizara, esto es del cach\xe9 de discord y puede estar vac\xedo dependiendo de si est\xe1 en cach\xe9, as\xed que use la opci\xf3n parcial antes de intentar acceder a cualquier propiedad. (guildUpdate evento)",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/event-related/oldGuild.md",sourceDirName:"functions/event-related",slug:"/functions/event-related/oldGuild",permalink:"/es/docs/functions/event-related/oldGuild",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689718489,formattedLastUpdatedAt:"18 jul 2023",frontMatter:{title:"$oldGuild",description:"$oldGuild contiene datos para el gremio antes de que se actualizara, esto es del cach\xe9 de discord y puede estar vac\xedo dependiendo de si est\xe1 en cach\xe9, as\xed que use la opci\xf3n parcial antes de intentar acceder a cualquier propiedad. (guildUpdate evento)",id:"oldGuild"},sidebar:"docs",previous:{title:"$oldEmoji",permalink:"/es/docs/functions/event-related/oldEmoji"},next:{title:"$oldMember",permalink:"/es/docs/functions/event-related/oldMember"}},b={},g=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2}],O={toc:g},h="wrapper";function k(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(h,u(s(s({},O),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$oldGuild")," contiene datos para el gremio antes de que se actualizara, esto es del cach\xe9 de discordia y puede estar vac\xedo dependiendo de si est\xe1 en cach\xe9, as\xed que use la opci\xf3n parcial antes de intentar acceder a cualquier propiedad. (guildUpdate evento)"),(0,n.kt)("h2",s({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$oldGuild[opci\xf3n]\n")),(0,n.kt)("h2",s({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,n.kt)("th",s({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"opci\xf3n"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Opci\xf3n a recuperar."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")))))}k.isMDXComponent=!0}}]);