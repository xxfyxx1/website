"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[2764],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(r),f=i,m=c["".concat(s,".").concat(f)]||c[f]||p[f]||a;return r?n.createElement(m,l(l({ref:t},d),{},{components:r})):n.createElement(m,l({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},79558:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>O,frontMatter:()=>m,metadata:()=>y,toc:()=>g});var n=r(3905),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&d(e,r,t[r]);if(o)for(var r of o(t))u.call(t,r)&&d(e,r,t[r]);return e},p=(e,t)=>a(e,l(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$isSelfMuted",description:"$isSelfMuted is similar but not to confuse with `$isMuted`, this will check if the user muted themselves.",id:"isSelfMuted"},h=void 0,y={unversionedId:"functions/util-related/isSelfMuted",id:"version-6.4.0/functions/util-related/isSelfMuted",title:"$isSelfMuted",description:"$isSelfMuted is similar but not to confuse with `$isMuted`, this will check if the user muted themselves.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/isSelfMuted.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/isSelfMuted",permalink:"/es/docs/functions/util-related/isSelfMuted",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$isSelfMuted",description:"$isSelfMuted is similar but not to confuse with `$isMuted`, this will check if the user muted themselves.",id:"isSelfMuted"},sidebar:"docs",previous:{title:"$isSelfDeafened",permalink:"/es/docs/functions/util-related/isSelfDeafened"},next:{title:"$isStreaming",permalink:"/es/docs/functions/util-related/isStreaming"}},b={},g=[{value:"Modo de uso",id:"modo-de-uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],v={toc:g},k="wrapper";function O(e){var t=e,{components:r}=t,i=f(t,["components"]);return(0,n.kt)(k,p(c(c({},v),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"$isSelfMuted is similar but not to confuse with ",(0,n.kt)("inlineCode",{parentName:"p"},"$isMuted"),", this will check if the user muted themselves."),(0,n.kt)("h2",c({},{id:"modo-de-uso"}),"Modo de uso"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$isSelfMuted[userID?;guildID?]\n")),(0,n.kt)("h2",c({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",c({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"usarioID?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"ID of the user you want to check if they're muted."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"servidorID?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"ID of the guild where they're muted in."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"no")))),(0,n.kt)("h2",c({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"This will return either ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," depending on if you're muted (voice channel) or not:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'isSelfDeafened',\n    code: `\n  $isSelfDeafened\n  `\n});\n")))}O.isMDXComponent=!0}}]);