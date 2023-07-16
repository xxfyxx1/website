"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[72350],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),d=o,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||i;return t?n.createElement(m,a(a({ref:r},u),{},{components:t})):n.createElement(m,a({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85293:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>g,contentTitle:()=>y,default:()=>w,frontMatter:()=>m,metadata:()=>b,toc:()=>h});var n=t(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&u(e,t,r[t]);if(c)for(var t of c(r))s.call(r,t)&&u(e,t,r[t]);return e},f=(e,r)=>i(e,a(r)),d=(e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t};const m={title:"$referenceGuildID",description:"Returns the ID of the channel where the user replied in"},y=void 0,b={unversionedId:"functions/referenceguildid",id:"version-5.5.5/functions/referenceguildid",title:"$referenceGuildID",description:"Returns the ID of the channel where the user replied in",source:"@site/versioned_docs/version-5.5.5/functions/referenceguildid.md",sourceDirName:"functions",slug:"/functions/referenceguildid",permalink:"/docs/5.5.5/functions/referenceguildid",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"Jul 16, 2023",frontMatter:{title:"$referenceGuildID",description:"Returns the ID of the channel where the user replied in"},sidebar:"docs",previous:{title:"$referenceChannelID",permalink:"/docs/5.5.5/functions/referencechannelid"},next:{title:"$referenceMessageID",permalink:"/docs/5.5.5/functions/referencemessageid"}},g={},h=[],O={toc:h},v="wrapper";function w(e){var r=e,{components:o}=r,i=d(r,["components"]);return(0,n.kt)(v,f(p(p({},O),i),{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function gets the current guild ID the user replied in"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "referencechannel",\ncode: `Reply Guild ID: $referenceGuildID`\n})\n')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Heres an example (I know it says message ID but its basically the same)",src:t(79768).Z,width:"473",height:"71"})))}w.isMDXComponent=!0},79768:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/image (14) (4) (4) (3) (1) (1) (1)-cef0d06a2da4aeb13ae75c8043c7977d.png"}}]);