"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[87153],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4215:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>O,frontMatter:()=>f,metadata:()=>y,toc:()=>b});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&u(e,r,t[r]);if(s)for(var r of s(t))p.call(t,r)&&u(e,r,t[r]);return e},c=(e,t)=>l(e,i(t)),m=(e,t)=>{var r={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$setGuildDiscoverySplash",description:"$setGuildDiscoverySplash will change a Guild's discovery splash banner.",id:"setGuildDiscoverySplash"},g=void 0,y={unversionedId:"functions/guild-related/setGuildDiscoverySplash",id:"version-6.4.0/functions/guild-related/setGuildDiscoverySplash",title:"$setGuildDiscoverySplash",description:"$setGuildDiscoverySplash will change a Guild's discovery splash banner.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/setGuildDiscoverySplash.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/setGuildDiscoverySplash",permalink:"/tr/docs/functions/guild-related/setGuildDiscoverySplash",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 Tem 2023",frontMatter:{title:"$setGuildDiscoverySplash",description:"$setGuildDiscoverySplash will change a Guild's discovery splash banner.",id:"setGuildDiscoverySplash"},sidebar:"docs",previous:{title:"$setGuildBanner",permalink:"/tr/docs/functions/guild-related/setGuildBanner"},next:{title:"$setGuildIcon",permalink:"/tr/docs/functions/guild-related/setGuildIcon"}},v={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],h={toc:b},k="wrapper";function O(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(k,c(d(d({},h),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$setGuildDiscoverySplash")," will change a Guild's discovery splash banner."),(0,n.kt)("h2",d({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$setGuildDiscoverySplash[guildID?;URL;reason?]\n")),(0,n.kt)("h2",d({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"guildID?"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Guild ID of the guild."),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"URL"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"New discovery splash banner."),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"reason?"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Reason that will be displayed in the guild's audit logs."),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"false")))),(0,n.kt)("h2",d({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,"This will change the banner of the current guild:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'setGuildDiscoverySplash',\n    code: `\n  $setGuildDiscoverySplash[$guildID;https://cdn.discordapp.com/banners/773352845738115102/b2b27d0915a838e8b4f68b180d1901ad.webp;Example!]\n  `\n});\n")))}O.isMDXComponent=!0}}]);