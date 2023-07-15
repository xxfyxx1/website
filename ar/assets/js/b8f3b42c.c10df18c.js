"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[11938],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=i,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},14378:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>k,frontMatter:()=>m,metadata:()=>g,toc:()=>y});var n=r(3905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&u(e,r,t[r]);return e},f=(e,t)=>a(e,o(t)),d=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$filterMessage",description:"Removes specified value from specified text"},v=void 0,g={unversionedId:"functions/filtermessage",id:"version-5.5.5/functions/filtermessage",title:"$filterMessage",description:"Removes specified value from specified text",source:"@site/versioned_docs/version-5.5.5/functions/filtermessage.md",sourceDirName:"functions",slug:"/functions/filtermessage",permalink:"/ar/docs/5.5.5/functions/filtermessage",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"\u0661\u0665 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$filterMessage",description:"Removes specified value from specified text"},sidebar:"docs",previous:{title:"$fileSize",permalink:"/ar/docs/5.5.5/functions/filesize"},next:{title:"$findChannel",permalink:"/ar/docs/5.5.5/functions/findchannel"}},b={},y=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],O={toc:y},h="wrapper";function k(e){var t=e,{components:r}=t,i=d(t,["components"]);return(0,n.kt)(h,f(p(p({},O),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function filters and removes the given value from the given text"),(0,n.kt)("h4",p({},{id:"fields"}),"Fields"),(0,n.kt)("p",null,"This function has 2 required fields"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Text ","(","Required",")"),(0,n.kt)("li",{parentName:"ol"},"Value ","(","Required",")"),(0,n.kt)("li",{parentName:"ol"},"Value 2 ","(","Optional",")")),(0,n.kt)("p",null,"Raw Usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"$filterMessage[text;value1,value2,...]")),(0,n.kt)("h4",p({},{id:"options"}),"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Text - The text we're filtering from"),(0,n.kt)("li",{parentName:"ul"},"Value","(","s",")"," - The value","(","s",")"," we're removing the text from")),(0,n.kt)("h4",p({},{id:"usage"}),"Usage"),(0,n.kt)("p",null,"Filtering 1 word"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\nname: \"filterMessage\",\ncode: `$filterMessage[Aoi.JS Ruben Leref Kubaturi Spesh Kino Azus;Aoi.JS]` \n//Removes 'Aoi.JS' from text\n})\n")),(0,n.kt)("p",null,"Filtering multiple words"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\nname: \"filterMessage\",\ncode: `$filterMessage[Aoi.JS Ruben Leref Kubaturi Spesh Kino Azus Chiwi ElTuna;Chiwi,ElTuna,Aoi.JS]` \n//Removes 'Kubaturi' and 'Aoi.JS' from text\n})\n")))}k.isMDXComponent=!0}}]);