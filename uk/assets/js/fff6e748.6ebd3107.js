"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[57639],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},63016:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>b,default:()=>N,frontMatter:()=>f,metadata:()=>v,toc:()=>y});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(o)for(var r of o(t))u.call(t,r)&&p(e,r,t[r]);return e},d=(e,t)=>l(e,i(t)),m=(e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&u.call(e,a)&&(r[a]=e[a]);return r};const f={title:"$resetGuildVar",description:"$resetGuildVar will set a given guild variable to its default value.",id:"resetGuildVar"},b=void 0,v={unversionedId:"functions/variables-related/resetGuildVar",id:"version-6.4.0/functions/variables-related/resetGuildVar",title:"$resetGuildVar",description:"$resetGuildVar will set a given guild variable to its default value.",source:"@site/versioned_docs/version-6.4.0/functions/variables-related/resetGuildVar.md",sourceDirName:"functions/variables-related",slug:"/functions/variables-related/resetGuildVar",permalink:"/uk/docs/functions/variables-related/resetGuildVar",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690091566,formattedLastUpdatedAt:"23 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$resetGuildVar",description:"$resetGuildVar will set a given guild variable to its default value.",id:"resetGuildVar"},sidebar:"docs",previous:{title:"$resetGlobalUserVar",permalink:"/uk/docs/functions/variables-related/resetGlobalUserVar"},next:{title:"$resetUserVar",permalink:"/uk/docs/functions/variables-related/resetUserVar"}},g={},y=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],k={toc:y},O="wrapper";function N(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.kt)(O,d(c(c({},k),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$resetGuildVar")," will set a given guild variable to its default value."),(0,a.kt)("h2",c({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$resetGuildVar[varname;table?]\n")),(0,a.kt)("h2",c({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"varname"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Variable name."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"table?"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Variable table."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"false")))),(0,a.kt)("h2",c({},{id:"examples"}),"Example(s)"),(0,a.kt)("p",null,'This will reset a variable called "Example":'),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "resetGuildVar",\n    code: `\n    $resetGuildVar[Example;main]\n    `\n});\n')))}N.isMDXComponent=!0}}]);