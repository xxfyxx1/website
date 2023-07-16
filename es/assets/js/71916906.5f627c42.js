"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[59849],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||c;return t?r.createElement(f,a(a({ref:n},d),{},{components:t})):r.createElement(f,a({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3249:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>y,default:()=>h,frontMatter:()=>f,metadata:()=>b,toc:()=>O});var r=t(3905),o=Object.defineProperty,c=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&d(e,t,n[t]);if(i)for(var t of i(n))l.call(n,t)&&d(e,t,n[t]);return e},u=(e,n)=>c(e,a(n)),m=(e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&l.call(e,r)&&(t[r]=e[r]);return t};const f={title:"$second",description:"$second will return the current second in CST.",id:"second"},y=void 0,b={unversionedId:"functions/misc-related/second",id:"version-6.4.0/functions/misc-related/second",title:"$second",description:"$second will return the current second in CST.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/misc-related/second.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/second",permalink:"/es/docs/functions/misc-related/second",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$second",description:"$second will return the current second in CST.",id:"second"},sidebar:"docs",previous:{title:"$renameFile",permalink:"/es/docs/functions/misc-related/renameFile"},next:{title:"$setCacheData",permalink:"/es/docs/functions/misc-related/setCacheData"}},v={},O=[{value:"Modo de uso",id:"modo-de-uso",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],g={toc:O},j="wrapper";function h(e){var n=e,{components:t}=n,o=m(n,["components"]);return(0,r.kt)(j,u(p(p({},g),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$second")," will return the current second in CST."),(0,r.kt)("h2",p({},{id:"modo-de-uso"}),"Modo de uso"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$second\n")),(0,r.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"This will returns the current second:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "second",\n    code: `\n    $second\n    `\n});\n')),(0,r.kt)("p",null,"You can change the timezone using ",(0,r.kt)("inlineCode",{parentName:"p"},"$timezone"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "second",\n    code: `\n    $second \n    $timezone[America/New_York]\n    ` // returns current second in New York\n});\n')))}h.isMDXComponent=!0}}]);