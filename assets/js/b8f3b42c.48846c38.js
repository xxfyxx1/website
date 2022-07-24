"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[11938],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=i,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},97564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const o={title:"$filterMessage",description:"Removes specified value from specified text"},a=void 0,l={unversionedId:"functions/filtermessage",id:"version-5.5.5/functions/filtermessage",title:"$filterMessage",description:"Removes specified value from specified text",source:"@site/versioned_docs/version-5.5.5/functions/filtermessage.md",sourceDirName:"functions",slug:"/functions/filtermessage",permalink:"/docs/functions/filtermessage",draft:!1,tags:[],version:"5.5.5",frontMatter:{title:"$filterMessage",description:"Removes specified value from specified text"},sidebar:"docs",previous:{title:"$fileSize",permalink:"/docs/functions/filesize"},next:{title:"$findChannel",permalink:"/docs/functions/findchannel"}},s={},u=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This function filters and removes the given value from the given text"),(0,i.kt)("h4",{id:"fields"},"Fields"),(0,i.kt)("p",null,"This function has 2 required fields"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Text ","(","Required",")"),(0,i.kt)("li",{parentName:"ol"},"Value ","(","Required",")"),(0,i.kt)("li",{parentName:"ol"},"Value 2 ","(","Optional",")")),(0,i.kt)("p",null,"Raw Usage: ",(0,i.kt)("inlineCode",{parentName:"p"},"$filterMessage[text;value1,value2,...]")),(0,i.kt)("h4",{id:"options"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Text - The text we're filtering from"),(0,i.kt)("li",{parentName:"ul"},"Value","(","s",")"," - The value","(","s",")"," we're removing the text from")),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Filtering 1 word"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\nname: \"filterMessage\",\ncode: `$filterMessage[Aoi.JS Ruben Leref Kubaturi Spesh Kino Azus;Aoi.JS]` \n//Removes 'Aoi.JS' from text\n})\n")),(0,i.kt)("p",null,"Filtering multiple words"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\nname: \"filterMessage\",\ncode: `$filterMessage[Aoi.JS Ruben Leref Kubaturi Spesh Kino Azus Chiwi ElTuna;Chiwi,ElTuna,Aoi.JS]` \n//Removes 'Kubaturi' and 'Aoi.JS' from text\n})\n")))}p.isMDXComponent=!0}}]);