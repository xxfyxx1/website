"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[21459],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),u=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(r),g=a,m=c["".concat(d,".").concat(g)]||c[g]||p[g]||o;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},83487:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>O,frontMatter:()=>m,metadata:()=>v,toc:()=>y});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&s(e,r,t[r]);return e},p=(e,t)=>o(e,l(t)),g=(e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$guildShard",description:"$guildShard devolver\xe1 los gremios de un fragmento espec\xedfico.",id:"guildShard"},f=void 0,v={unversionedId:"functions/guild-related/guildShard",id:"version-6.4.0/functions/guild-related/guildShard",title:"$guildShard",description:"$guildShard devolver\xe1 los gremios de un fragmento espec\xedfico.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/guildShard.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildShard",permalink:"/es/docs/functions/guild-related/guildShard",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689718489,formattedLastUpdatedAt:"18 jul 2023",frontMatter:{title:"$guildShard",description:"$guildShard devolver\xe1 los gremios de un fragmento espec\xedfico.",id:"guildShard"},sidebar:"docs",previous:{title:"$guildSafetyChannelID",permalink:"/es/docs/functions/guild-related/guildSafetyChannelID"},next:{title:"$guildShardID",permalink:"/es/docs/functions/guild-related/guildShardID"}},b={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Tenga en cuenta que esto no funcionar\xe1 sin fragmentar. Si no est\xe1s seguro, revisa la gu\xeda de fragmentaci\xf3n.",id:"tenga-en-cuenta-que-esto-no-funcionar\xe1-sin-fragmentar-si-no-est\xe1s-seguro-revisa-la-gu\xeda-de-fragmentaci\xf3n",level:4},{value:"Ejemplo(s)",id:"ejemplos",level:2}],h={toc:y},k="wrapper";function O(e){var t=e,{components:r}=t,a=g(t,["components"]);return(0,n.kt)(k,p(c(c({},h),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$guildShard")," devolver\xe1 los gremios de un fragmento espec\xedfico."),(0,n.kt)("h2",c({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$guildShard[opci\xf3n?;sep?;identificaci\xf3n del fragmento]\n")),(0,n.kt)("h2",c({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",c({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"opci\xf3n?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Opci\xf3n de devolver los gremios en ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"nombre")," (por defecto) ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"name")),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"falso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"sep?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"consulta"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"El separador para separar los valores devueltos."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"falso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"identificaci\xf3n del fragmento"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"El fragmento ID."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"verdadero")))),(0,n.kt)("h4",c({},{id:"tenga-en-cuenta-que-esto-no-funcionar\xe1-sin-fragmentar-si-no-est\xe1s-seguro-revisa-la-gu\xeda-de-fragmentaci\xf3n"}),"Tenga en cuenta que esto no funcionar\xe1 sin fragmentar. Si no est\xe1s seguro, revisa la ",(0,n.kt)("a",c({parentName:"h4"},{href:"../../guides/client/6sharding.md"}),"gu\xeda de fragmentaci\xf3n"),"."),(0,n.kt)("h2",c({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto devolver\xe1 la cantidad de servidores en los que se encuentra tu bot:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'guildShard',\n    code: `\n  $guildShard[name;, ;$shardID]\n  `\n});\n")))}O.isMDXComponent=!0}}]);