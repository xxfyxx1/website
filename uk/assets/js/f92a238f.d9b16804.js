"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[17522],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),s=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||a;return r?i.createElement(m,l(l({ref:t},d),{},{components:r})):i.createElement(m,l({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},56299:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>v,default:()=>h,frontMatter:()=>m,metadata:()=>y,toc:()=>b});var i=r(3905),n=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&d(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&d(e,r,t[r]);return e},p=(e,t)=>a(e,l(t)),f=(e,t)=>{var r={};for(var i in e)c.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&o)for(var i of o(e))t.indexOf(i)<0&&s.call(e,i)&&(r[i]=e[i]);return r};const m={title:"$isVerified",description:"$isVerified checks if the given guild is verified by Discord.",id:"isVerified"},v=void 0,y={unversionedId:"functions/util-related/isVerified",id:"version-6.4.0/functions/util-related/isVerified",title:"$isVerified",description:"$isVerified checks if the given guild is verified by Discord.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/isVerified.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/isVerified",permalink:"/uk/docs/functions/util-related/isVerified",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$isVerified",description:"$isVerified checks if the given guild is verified by Discord.",id:"isVerified"},sidebar:"docs",previous:{title:"$isVariableExist",permalink:"/uk/docs/functions/util-related/isVariableExist"},next:{title:"$isVideoOn",permalink:"/uk/docs/functions/util-related/isVideoOn"}},g={},b=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],k={toc:b},O="wrapper";function h(e){var t=e,{components:r}=t,n=f(t,["components"]);return(0,i.kt)(O,p(u(u({},k),n),{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$isVerified")," checks if the given guild is verified by Discord."),(0,i.kt)("h2",u({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$isVerified[guildID?]\n")),(0,i.kt)("h2",u({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",u({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,i.kt)("th",u({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,i.kt)("th",u({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,i.kt)("th",u({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",u({parentName:"tr"},{align:null}),"guildID?"),(0,i.kt)("td",u({parentName:"tr"},{align:null}),"integer"),(0,i.kt)("td",u({parentName:"tr"},{align:null}),"The ID of the guild where you want to check its verification status of."),(0,i.kt)("td",u({parentName:"tr"},{align:"center"}),"\u043d\u0456")))),(0,i.kt)("h2",u({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,i.kt)("p",null,"This will check if your server is verified and return either ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'isVerified',\n    code: `\n  $isVerified[$guildID]\n  `\n});\n")))}h.isMDXComponent=!0}}]);