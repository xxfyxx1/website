"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[51462],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(t),m=o,d=l["".concat(s,".").concat(m)]||l[m]||f[m]||a;return t?n.createElement(d,i(i({ref:r},u),{},{components:t})):n.createElement(d,i({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},52135:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>O,contentTitle:()=>b,default:()=>j,frontMatter:()=>d,metadata:()=>y,toc:()=>v});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,l=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&u(e,t,r[t]);if(c)for(var t of c(r))p.call(r,t)&&u(e,t,r[t]);return e},f=(e,r)=>a(e,i(r)),m=(e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t};const d={title:"$numberSeparator",description:"Seperates number in thousands"},b=void 0,y={unversionedId:"functions/numberseparator",id:"version-5.5.5/functions/numberseparator",title:"$numberSeparator",description:"Seperates number in thousands",source:"@site/versioned_docs/version-5.5.5/functions/numberseparator.md",sourceDirName:"functions",slug:"/functions/numberseparator",permalink:"/uk/docs/5.5.5/functions/numberseparator",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$numberSeparator",description:"Seperates number in thousands"},sidebar:"docs",previous:{title:"$noMentionMessage",permalink:"/uk/docs/5.5.5/functions/nomentionmessage"},next:{title:"$oldChannel",permalink:"/uk/docs/5.5.5/functions/oldchannel"}},O={},v=[],g={toc:v},h="wrapper";function j(e){var r=e,{components:t}=r,o=m(r,["components"]);return(0,n.kt)(h,f(l(l({},g),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This functions separates the digits by thousands"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-php"}),"$numberSeparator[number;separator (optional)]\n")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "numberSeparator",\ncode: `Number: $numberSeparator[4000]` //Ex: Returns 4,000\n})\n')))}j.isMDXComponent=!0}}]);