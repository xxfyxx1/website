"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[62762],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>j,default:()=>O,frontMatter:()=>f,metadata:()=>v,toc:()=>y});var r=n(3905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&d(e,n,t[n]);return e},u=(e,t)=>o(e,a(t)),m=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$isUnicodeEmoji",description:"$isUnicodeEmoji will check if the given emoji is an unicode emoji.",id:"isUnicodeEmoji"},j=void 0,v={unversionedId:"functions/util-related/isUnicodeEmoji",id:"version-6.4.0/functions/util-related/isUnicodeEmoji",title:"$isUnicodeEmoji",description:"$isUnicodeEmoji will check if the given emoji is an unicode emoji.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/isUnicodeEmoji.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/isUnicodeEmoji",permalink:"/es/docs/functions/util-related/isUnicodeEmoji",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$isUnicodeEmoji",description:"$isUnicodeEmoji will check if the given emoji is an unicode emoji.",id:"isUnicodeEmoji"},sidebar:"docs",previous:{title:"$isTimeout",permalink:"/es/docs/functions/util-related/isTimeout"},next:{title:"$isUserDmEnabled",permalink:"/es/docs/functions/util-related/isUserDmEnabled"}},b={},y=[{value:"Modo de uso",id:"modo-de-uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],g={toc:y},k="wrapper";function O(e){var t=e,{components:n}=t,i=m(t,["components"]);return(0,r.kt)(k,u(p(p({},g),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$isUnicodeEmoji")," will check if the given emoji is an unicode emoji."),(0,r.kt)("h2",p({},{id:"modo-de-uso"}),"Modo de uso"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$isUnicodeEmoji[emojiResolver]\n")),(0,r.kt)("h2",p({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",p({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"emojiResolver"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Unicode emoji."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadera")))),(0,r.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"This will return ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),' as "\ud83e\udd13" is an valid unicode emoji:'),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'isUnicodeEmoji',\n    code: `\n  $isUnicodeEmoji[\ud83e\udd13]\n  `\n});\n")))}O.isMDXComponent=!0}}]);