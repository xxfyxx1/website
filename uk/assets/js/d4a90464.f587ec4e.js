"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[56032],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>m});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),l=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?t.createElement(m,i(i({ref:r},p),{},{components:n})):t.createElement(m,i({ref:r},p))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7441:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>b,contentTitle:()=>g,default:()=>w,frontMatter:()=>m,metadata:()=>y,toc:()=>O});var t=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,r,n)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,u=(e,r)=>{for(var n in r||(r={}))s.call(r,n)&&p(e,n,r[n]);if(c)for(var n of c(r))l.call(r,n)&&p(e,n,r[n]);return e},d=(e,r)=>a(e,i(r)),f=(e,r)=>{var n={};for(var t in e)s.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&c)for(var t of c(e))r.indexOf(t)<0&&l.call(e,t)&&(n[t]=e[t]);return n};const m={title:"$randomString",description:"Generates a random string"},g=void 0,y={unversionedId:"functions/randomstring",id:"version-5.5.5/functions/randomstring",title:"$randomString",description:"Generates a random string",source:"@site/versioned_docs/version-5.5.5/functions/randomstring.md",sourceDirName:"functions",slug:"/functions/randomstring",permalink:"/uk/docs/5.5.5/functions/randomstring",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$randomString",description:"Generates a random string"},sidebar:"docs",previous:{title:"$randomRoleID",permalink:"/uk/docs/5.5.5/functions/randomroleid"},next:{title:"$randomText",permalink:"/uk/docs/5.5.5/functions/randomtext"}},b={},O=[],v={toc:O},j="wrapper";function w(e){var r=e,{components:n}=r,o=f(r,["components"]);return(0,t.kt)(j,d(u(u({},v),o),{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"This function generates and returns a random string"),(0,t.kt)("pre",null,(0,t.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$randomString[length]\n")),(0,t.kt)("pre",null,(0,t.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "randomstring",\ncode: `Heres your string: $randomString[8]`\n//EX: oqipUfKc\n})\n')))}w.isMDXComponent=!0}}]);