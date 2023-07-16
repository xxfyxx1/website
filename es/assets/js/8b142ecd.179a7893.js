"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[28124],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=d(n),c=o,f=p["".concat(s,".").concat(c)]||p[c]||u[c]||a;return n?r.createElement(f,l(l({ref:t},m),{},{components:n})):r.createElement(f,l({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},15324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>O,frontMatter:()=>f,metadata:()=>v,toc:()=>g});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&m(e,n,t[n]);if(i)for(var n of i(t))d.call(t,n)&&m(e,n,t[n]);return e},u=(e,t)=>a(e,l(t)),c=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$mentionedRoles",description:"$mentionedRoles will return the ID of a role retrieved from a message, this works similar as `$mentioned`.",id:"mentionedRoles"},y=void 0,v={unversionedId:"functions/util-related/mentionedRoles",id:"version-6.4.0/functions/util-related/mentionedRoles",title:"$mentionedRoles",description:"$mentionedRoles will return the ID of a role retrieved from a message, this works similar as `$mentioned`.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/mentionedRoles.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/mentionedRoles",permalink:"/es/docs/functions/util-related/mentionedRoles",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$mentionedRoles",description:"$mentionedRoles will return the ID of a role retrieved from a message, this works similar as `$mentioned`.",id:"mentionedRoles"},sidebar:"docs",previous:{title:"$mentionedChannelsCount",permalink:"/es/docs/functions/util-related/mentionedChannelsCount"},next:{title:"$mentionedRolesCount",permalink:"/es/docs/functions/util-related/mentionedRolesCount"}},b={},g=[{value:"Modo de uso",id:"modo-de-uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],h={toc:g},k="wrapper";function O(e){var t=e,{components:n}=t,o=c(t,["components"]);return(0,r.kt)(k,u(p(p({},h),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$mentionedRoles")," will return the ID of a role retrieved from a message."),(0,r.kt)("h2",p({},{id:"modo-de-uso"}),"Modo de uso"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$mentionedRoles[index]\n")),(0,r.kt)("h2",p({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",p({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"\xedndice"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"n\xfamero"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"The index of the argument."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadera")))),(0,r.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"This will return the ID of the ",(0,r.kt)("strong",{parentName:"p"},"first")," role mention if you attempt to mention any role in this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'mentionedRoles',\n    code: `\n  $mentionedRoles[1]\n  `\n});\n")))}O.isMDXComponent=!0}}]);