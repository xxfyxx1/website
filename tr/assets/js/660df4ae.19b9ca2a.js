"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[639],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(t),m=o,d=f["".concat(i,".").concat(m)]||f[m]||u[m]||a;return t?r.createElement(d,l(l({ref:n},p),{},{components:t})):r.createElement(d,l({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[f]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19380:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>O,contentTitle:()=>y,default:()=>h,frontMatter:()=>d,metadata:()=>b,toc:()=>g});var r=t(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,f=(e,n)=>{for(var t in n||(n={}))i.call(n,t)&&p(e,t,n[t]);if(c)for(var t of c(n))s.call(n,t)&&p(e,t,n[t]);return e},u=(e,n)=>a(e,l(n)),m=(e,n)=>{var t={};for(var r in e)i.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&c)for(var r of c(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t};const d={title:"$onlyNSFW",description:"Allows command to be ran in only NSFW marked channel"},y=void 0,b={unversionedId:"functions/onlynsfw",id:"version-5.5.5/functions/onlynsfw",title:"$onlyNSFW",description:"Allows command to be ran in only NSFW marked channel",source:"@site/versioned_docs/version-5.5.5/functions/onlynsfw.md",sourceDirName:"functions",slug:"/functions/onlynsfw",permalink:"/tr/docs/5.5.5/functions/onlynsfw",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 Tem 2023",frontMatter:{title:"$onlyNSFW",description:"Allows command to be ran in only NSFW marked channel"},sidebar:"docs",previous:{title:"$onlyIfMessageContains",permalink:"/tr/docs/5.5.5/functions/onlyifmessagecontains"},next:{title:"$onlyPerms",permalink:"/tr/docs/5.5.5/functions/onlyperms"}},O={},g=[],v={toc:g},w="wrapper";function h(e){var n=e,{components:o}=n,a=m(n,["components"]);return(0,r.kt)(w,u(f(f({},v),a),{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function only allows the command to be ran in NSFW marked channels"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-php"}),"$onlyNSFW[error when ran in non-nsfw channel]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "special",\ncode: `Special Command\n$onlyNSFW[Command only executable in NSFW channels!]`\n})\n')),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(87055).Z,width:"745",height:"117"})))}h.isMDXComponent=!0},87055:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/image (38) (1)-21f81ffefe9b48ad238a5cb2c1a8fb0c.png"}}]);