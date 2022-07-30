"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[33412],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,v=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(v,l(l({ref:t},u),{},{components:r})):n.createElement(v,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},75623:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"$serverAvailable"},l=void 0,i={unversionedId:"functions/serveravailable",id:"version-5.5.5/functions/serveravailable",title:"$serverAvailable",description:"This function returns whether or not the specified server is available",source:"@site/versioned_docs/version-5.5.5/functions/serveravailable.md",sourceDirName:"functions",slug:"/functions/serveravailable",permalink:"/docs/functions/serveravailable",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1658666031,formattedLastUpdatedAt:"Jul 24, 2022",frontMatter:{title:"$serverAvailable"},sidebar:"docs",previous:{title:"$sendWebhook",permalink:"/docs/functions/sendwebhook"},next:{title:"$serverBanner",permalink:"/docs/functions/serverbanner"}},s={},c=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function returns whether or not the specified server is available"),(0,a.kt)("h4",{id:"fields"},"Fields"),(0,a.kt)("p",null,"This function has 1 optional field"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Guild ID ","(","Required",")")),(0,a.kt)("p",null,"Raw Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"$serverAvailable[guildID (optional)]")),(0,a.kt)("h4",{id:"options"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Guild ID - The guild we're getting the info from")),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Without the optional field"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "serverAvailable",\ncode: `$serverAvailable`\n})\n')),(0,a.kt)("p",null,"With optional field"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "serverAvailable",\ncode: `$serverAvailable[773352845738115102]`\n})\n')))}p.isMDXComponent=!0}}]);