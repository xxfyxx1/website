"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[24092],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),d=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(r),m=n,f=c["".concat(i,".").concat(m)]||c[m]||u[m]||o;return r?a.createElement(f,l(l({ref:t},p),{},{components:r})):a.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:n,l[1]=s;for(var d=2;d<o;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},27657:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>h,frontMatter:()=>f,metadata:()=>v,toc:()=>b});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))d.call(t,r)&&p(e,r,t[r]);return e},u=(e,t)=>o(e,l(t)),m=(e,t)=>{var r={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&d.call(e,a)&&(r[a]=e[a]);return r};const f={title:"loadCommands"},g=void 0,v={unversionedId:"class/loadCommands",id:"version-5.5.5/class/loadCommands",title:"loadCommands",description:"Usage",source:"@site/versioned_docs/version-5.5.5/class/loadCommands.md",sourceDirName:"class",slug:"/class/loadCommands",permalink:"/es/docs/5.5.5/class/loadCommands",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"loadCommands"}},y={},b=[{value:"Usage",id:"usage",level:2},{value:"Methods",id:"methods",level:2},{value:"load()",id:"load",level:3},{value:"Usage",id:"usage-1",level:4},{value:"update()",id:"update",level:3},{value:"Usage",id:"usage-2",level:4},{value:"Example",id:"example",level:2}],O={toc:b},k="wrapper";function h(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.kt)(k,u(c(c({},O),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-javascript"})," A Custom Handler To Load/Update Commands\n")),(0,a.kt)("h2",c({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-typescript"})," const loader = new loadCommands(client:Bot,AddThisToClass? : boolean)\n")),(0,a.kt)("h2",c({},{id:"methods"}),"Methods"),(0,a.kt)("h3",c({},{id:"load"}),"load()"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Loads The Commands From The Given File")),(0,a.kt)("h4",c({},{id:"usage-1"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-typescript"})," loader.load(cmd:CommandManager , path: string , debug?:boolean) \n")),(0,a.kt)("h3",c({},{id:"update"}),"update()"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Updates All The Changes Made")," "),(0,a.kt)("h4",c({},{id:"usage-2"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-typescript"})," loader.update(debug?:boolean)\n")),(0,a.kt)("h2",c({},{id:"example"}),"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'const aoijs = require(\'aoi.js\')\n\nconst bot = new aoijs.Bot({\n     prefix: "Your Prefix", //Your Bot Prefix\n     token: "Your Bot Token Here", //Your Bot Token\n     intents: "all" //Intents Your Bot Requires \n     })\n\nconst loader = new aoijs.loadCommands(bot)\nloader.load(bot.cmd,\'./commands/\')\n')))}h.isMDXComponent=!0}}]);