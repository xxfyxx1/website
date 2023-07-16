"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[7380],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,y=u["".concat(l,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99378:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>O,contentTitle:()=>m,default:()=>w,frontMatter:()=>y,metadata:()=>b,toc:()=>v});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(c)for(var r of c(t))s.call(t,r)&&p(e,r,t[r]);return e},f=(e,t)=>a(e,i(t)),d=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const y={title:"$onlyForIDs",description:"only the specified user IDs will be able to execute the command"},m=void 0,b={unversionedId:"functions/onlyforids",id:"version-5.5.5/functions/onlyforids",title:"$onlyForIDs",description:"only the specified user IDs will be able to execute the command",source:"@site/versioned_docs/version-5.5.5/functions/onlyforids.md",sourceDirName:"functions",slug:"/functions/onlyforids",permalink:"/ar/docs/5.5.5/functions/onlyforids",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"\u0661\u0666 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$onlyForIDs",description:"only the specified user IDs will be able to execute the command"},sidebar:"docs",previous:{title:"$onlyForChannels",permalink:"/ar/docs/5.5.5/functions/onlyforchannels"},next:{title:"$onlyForRoles",permalink:"/ar/docs/5.5.5/functions/onlyforroles"}},O={},v=[],h={toc:v},g="wrapper";function w(e){var t=e,{components:r}=t,o=d(t,["components"]);return(0,n.kt)(g,f(u(u({},h),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function only runs the command if the author's id matches to the specified ids"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$onlyForIDs[id1;id2;..;error when blocked]\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "special",\ncode: `Special Command\n$onlyForIDs[535566311942651924;:x: You can\'t run this command]`\n})\n')))}w.isMDXComponent=!0}}]);