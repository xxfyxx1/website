"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[34803],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,f=m["".concat(d,".").concat(u)]||m[u]||s[u]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8862:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>k,default:()=>w,frontMatter:()=>f,metadata:()=>g,toc:()=>N});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&p(e,n,t[n]);return e},s=(e,t)=>i(e,l(t)),u=(e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n};const f={title:"$ifAwaited",description:"$ifAwaited will check a condition and executed an awaited command depending on the condition being true or false.",id:"ifAwaited"},k=void 0,g={unversionedId:"functions/misc-related/ifAwaited",id:"version-6.4.0/functions/misc-related/ifAwaited",title:"$ifAwaited",description:"$ifAwaited will check a condition and executed an awaited command depending on the condition being true or false.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/misc-related/ifAwaited.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/ifAwaited",permalink:"/es/docs/functions/misc-related/ifAwaited",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$ifAwaited",description:"$ifAwaited will check a condition and executed an awaited command depending on the condition being true or false.",id:"ifAwaited"},sidebar:"docs",previous:{title:"$if",permalink:"/es/docs/functions/misc-related/if"},next:{title:"$isTicket",permalink:"/es/docs/functions/misc-related/isTicket"}},b={},N=[{value:"Modo de uso",id:"modo-de-uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Valid Mathematical Operators",id:"valid-mathematical-operators",level:4},{value:"Ejemplo(s)",id:"ejemplos",level:2}],y={toc:N},h="wrapper";function w(e){var t=e,{components:n}=t,r=u(t,["components"]);return(0,a.kt)(h,s(m(m({},y),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ifAwaited")," will check a condition and executed an awaited command depending on the condition being true or false."),(0,a.kt)("h2",m({},{id:"modo-de-uso"}),"Modo de uso"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$ifAwaited[condition;true;false?]\n")),(0,a.kt)("h2",m({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,a.kt)("th",m({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"condition"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Condition to check"),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"s\xed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"s\xed"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"What to do when the condition is true."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"s\xed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"false?"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"What to do when the condition is false."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"falso")))),(0,a.kt)("h4",m({},{id:"valid-mathematical-operators"}),"Valid Mathematical Operators"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Operator"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Mathematical Expression"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"=="),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"es igual a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"!="),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"not equal to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"<="),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"less than or equal to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),">","="),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"greater than or equal to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),">"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"greater than")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"<"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"less than")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\\ "),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"|")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"&&"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"logical conjunction")))),(0,a.kt)("h2",m({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("p",null,"This will execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"awaitedCommand")," awaited command as the statement is true:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "ifAwaited",\n    code: `\n    $ifAwaited[1==1;{execute:awaitedCommand}]\n    `\n});\n\nbot.awaitedCommand({\n    name: "awaitedCommand",\n    code: `\n    $sendMessage[That\'s true!;false]\n    `\n});\n')))}w.isMDXComponent=!0}}]);