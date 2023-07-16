"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[95839],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(t),u=o,f=p["".concat(l,".").concat(u)]||p[u]||m[u]||a;return t?r.createElement(f,c(c({ref:n},d),{},{components:t})):r.createElement(f,c({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},60943:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>y,default:()=>h,frontMatter:()=>f,metadata:()=>v,toc:()=>O});var r=t(3905),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&d(e,t,n[t]);if(i)for(var t of i(n))s.call(n,t)&&d(e,t,n[t]);return e},m=(e,n)=>a(e,c(n)),u=(e,n)=>{var t={};for(var r in e)l.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t};const f={title:"$commandCode",description:"Returns the current command's code"},y=void 0,v={unversionedId:"functions/commandcode",id:"version-5.5.5/functions/commandcode",title:"$commandCode",description:"Returns the current command's code",source:"@site/versioned_docs/version-5.5.5/functions/commandcode.md",sourceDirName:"functions",slug:"/functions/commandcode",permalink:"/es/docs/5.5.5/functions/commandcode",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$commandCode",description:"Returns the current command's code"},sidebar:"docs",previous:{title:"$color",permalink:"/es/docs/5.5.5/functions/color"},next:{title:"$commandInfo",permalink:"/es/docs/5.5.5/functions/commandinfo"}},b={},O=[{value:"Usage",id:"usage",level:3},{value:"Example",id:"example",level:2}],g={toc:O},j="wrapper";function h(e){var n=e,{components:t}=n,o=u(n,["components"]);return(0,r.kt)(j,m(p(p({},g),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns the current commands code."),(0,r.kt)("h3",p({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$commandCode\n")),(0,r.kt)("h2",p({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "expose-code",\ncode: `Command Code: $commandCode`\n/*\nBot would return\n"Command Code: $commandCode"\n*/\n})\n')))}h.isMDXComponent=!0}}]);