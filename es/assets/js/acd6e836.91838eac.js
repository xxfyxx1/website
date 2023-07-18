"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[34652],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(t),p=r,f=u["".concat(l,".").concat(p)]||u[p]||m[p]||a;return t?o.createElement(f,c(c({ref:n},d),{},{components:t})):o.createElement(f,c({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},91418:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>v,default:()=>C,frontMatter:()=>f,metadata:()=>y,toc:()=>O});var o=t(3905),r=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&d(e,t,n[t]);if(i)for(var t of i(n))s.call(n,t)&&d(e,t,n[t]);return e},m=(e,n)=>a(e,c(n)),p=(e,n)=>{var t={};for(var o in e)l.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&i)for(var o of i(e))n.indexOf(o)<0&&s.call(e,o)&&(t[o]=e[o]);return t};const f={title:"$commandsCount",description:"$commandsCount devolver\xe1 la cantidad de comandos.",id:"commandsCount"},v=void 0,y={unversionedId:"functions/info-related/commandsCount",id:"version-6.4.0/functions/info-related/commandsCount",title:"$commandsCount",description:"$commandsCount devolver\xe1 la cantidad de comandos.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/commandsCount.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/commandsCount",permalink:"/es/docs/functions/info-related/commandsCount",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689718489,formattedLastUpdatedAt:"18 jul 2023",frontMatter:{title:"$commandsCount",description:"$commandsCount devolver\xe1 la cantidad de comandos.",id:"commandsCount"},sidebar:"docs",previous:{title:"$commandName",permalink:"/es/docs/functions/info-related/commandName"},next:{title:"$cpu",permalink:"/es/docs/functions/info-related/cpu"}},b={},O=[{value:"Uso",id:"uso",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],g={toc:O},j="wrapper";function C(e){var n=e,{components:t}=n,r=p(n,["components"]);return(0,o.kt)(j,m(u(u({},g),r),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$commandsCount")," devolver\xe1 la cantidad de comandos."),(0,o.kt)("h2",u({},{id:"uso"}),"Uso"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$commandsCount\n")),(0,o.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,o.kt)("p",null,"Esto devolver\xe1 la cantidad de sus comandos:"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'commandsCount',\n    code: `\n  $commandsCount\n  `\n});\n")))}C.isMDXComponent=!0}}]);