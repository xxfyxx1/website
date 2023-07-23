"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[24559],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(a),s=r,f=p["".concat(c,".").concat(s)]||p[s]||m[s]||l;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},77117:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>w,frontMatter:()=>f,metadata:()=>h,toc:()=>y});var n=a(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&u(e,a,t[a]);if(o)for(var a of o(t))d.call(t,a)&&u(e,a,t[a]);return e},m=(e,t)=>l(e,i(t)),s=(e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a};const f={title:"$forEachGuild",description:"$forEachGuild will execute given awaited commands in every guild.",id:"forEachGuild"},g=void 0,h={unversionedId:"functions/misc-related/forEachGuild",id:"version-6.4.0/functions/misc-related/forEachGuild",title:"$forEachGuild",description:"$forEachGuild will execute given awaited commands in every guild.",source:"@site/versioned_docs/version-6.4.0/functions/misc-related/forEachGuild.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/forEachGuild",permalink:"/uk/docs/functions/misc-related/forEachGuild",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690091566,formattedLastUpdatedAt:"23 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$forEachGuild",description:"$forEachGuild will execute given awaited commands in every guild.",id:"forEachGuild"},sidebar:"docs",previous:{title:"$forEachChannel",permalink:"/uk/docs/functions/misc-related/forEachChannel"},next:{title:"$forEachGuildChannel",permalink:"/uk/docs/functions/misc-related/forEachGuildChannel"}},v={},y=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],k={toc:y},b="wrapper";function w(e){var t=e,{components:a}=t,r=s(t,["components"]);return(0,n.kt)(b,m(p(p({},k),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$forEachGuild")," will execute given awaited commands in every guild."),(0,n.kt)("h2",p({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$forEachGuild[time;awaitData;...awaitedCmds;endCmd]\n")),(0,n.kt)("h2",p({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",p({parentName:"tr"},{align:"center"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"time"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"How long it takes between each guild to execute the next."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"awaitData"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"object"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Awaited Data."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"...awaitedCmds"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Awaited Commands to execute."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"endCmd?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Awaited Command to execute when loop ends."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"true")))),(0,n.kt)("h2",p({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,'This will change the variable value of each guild to "test":'),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "forEachGuild",\n    code: `\n  $forEachGuild[2s;{"value": "test"};awaitedCommand;]\n  `\n});\n\nbot.awaitedCommand({\n    name: "awaitedCommand",\n    code: `\n  $setGuildVar[varname;$awaitData[value];$guildID]\n  `\n});\n')))}w.isMDXComponent=!0}}]);