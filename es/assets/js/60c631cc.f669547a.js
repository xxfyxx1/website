"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[60768],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>O,frontMatter:()=>f,metadata:()=>y,toc:()=>g});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))d.call(t,n)&&s(e,n,t[n]);return e},u=(e,t)=>l(e,i(t)),m=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$splitText",description:"$splitText devolver\xe1 un valor de $textSplit dependiendo del \xedndice dado.",id:"splitText"},v=void 0,y={unversionedId:"functions/util-related/splitText",id:"version-6.4.0/functions/util-related/splitText",title:"$splitText",description:"$splitText devolver\xe1 un valor de $textSplit dependiendo del \xedndice dado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/splitText.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/splitText",permalink:"/es/docs/functions/util-related/splitText",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690091566,formattedLastUpdatedAt:"23 jul 2023",frontMatter:{title:"$splitText",description:"$splitText devolver\xe1 un valor de $textSplit dependiendo del \xedndice dado.",id:"splitText"},sidebar:"docs",previous:{title:"$spliceTextJoin",permalink:"/es/docs/functions/util-related/spliceTextJoin"},next:{title:"$stringEndsWith",permalink:"/es/docs/functions/util-related/stringEndsWith"}},b={},g=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],x={toc:g},k="wrapper";function O(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(k,u(c(c({},x),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$splitText")," devolver\xe1 un valor de $textSplit dependiendo del \xedndice dado."),(0,r.kt)("h2",c({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$splitText[index]\n")),(0,r.kt)("h2",c({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\xedndice"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"integer"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\xcdndice de contenido ",(0,r.kt)("inlineCode",{parentName:"td"},"$textSplit"),"."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"verdadera")))),(0,r.kt)("h2",c({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto devolver\xe1 ",(0,r.kt)("inlineCode",{parentName:"p"},"aoi.js")," ya que es el segundo argumento de ",(0,r.kt)("inlineCode",{parentName:"p"},"$textSplit"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'splitText',\n    code: `\n  $splitText[2]\n  $textSplit[@akarui/aoi.db//aoi.js;//]\n  `\n});\n")))}O.isMDXComponent=!0}}]);