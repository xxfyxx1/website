"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[47519],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,v=p["".concat(d,".").concat(m)]||p[m]||s[m]||i;return r?n.createElement(v,o(o({ref:t},u),{},{components:r})):n.createElement(v,o({ref:t},u))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17224:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>k,frontMatter:()=>v,metadata:()=>y,toc:()=>g});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&u(e,r,t[r]);return e},s=(e,t)=>i(e,o(t)),m=(e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const v={title:"$oldGuild",description:"$oldGuild conserve les donn\xe9es du serveur avant sa mise \xe0 jour, ceci provient du cache de discord et peut \xeatre vide selon qu'il est mis en cache, donc utilisez une option partielle avant d'essayer d'acc\xe9der \xe0 n'importe quelle propri\xe9t\xe9. (\xe9v\xe8nement guildUpdate)",id:"oldGuild"},f=void 0,y={unversionedId:"functions/event-related/oldGuild",id:"version-6.4.0/functions/event-related/oldGuild",title:"$oldGuild",description:"$oldGuild conserve les donn\xe9es du serveur avant sa mise \xe0 jour, ceci provient du cache de discord et peut \xeatre vide selon qu'il est mis en cache, donc utilisez une option partielle avant d'essayer d'acc\xe9der \xe0 n'importe quelle propri\xe9t\xe9. (\xe9v\xe8nement guildUpdate)",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/event-related/oldGuild.md",sourceDirName:"functions/event-related",slug:"/functions/event-related/oldGuild",permalink:"/fr/docs/functions/event-related/oldGuild",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689982189,formattedLastUpdatedAt:"21 juil. 2023",frontMatter:{title:"$oldGuild",description:"$oldGuild conserve les donn\xe9es du serveur avant sa mise \xe0 jour, ceci provient du cache de discord et peut \xeatre vide selon qu'il est mis en cache, donc utilisez une option partielle avant d'essayer d'acc\xe9der \xe0 n'importe quelle propri\xe9t\xe9. (\xe9v\xe8nement guildUpdate)",id:"oldGuild"},sidebar:"docs",previous:{title:"$oldEmoji",permalink:"/fr/docs/functions/event-related/oldEmoji"},next:{title:"$oldMember",permalink:"/fr/docs/functions/event-related/oldMember"}},b={},g=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2}],O={toc:g},h="wrapper";function k(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(h,s(p(p({},O),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$oldGuild")," conserve les donn\xe9es du serveur avant sa mise \xe0 jour, ceci provient du cache de discord et peut \xeatre vide selon qu'il est mis en cache, donc utilisez une option partielle avant d'essayer d'acc\xe9der \xe0 n'importe quelle propri\xe9t\xe9. (\xe9v\xe8nement guildUpdate)"),(0,n.kt)("h2",p({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$oldGuild[option]\n")),(0,n.kt)("h2",p({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",p({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"option"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Option \xe0 r\xe9cup\xe9rer."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"vrai")))))}k.isMDXComponent=!0}}]);