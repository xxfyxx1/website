"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[45393],{3905:(e,r,a)=>{a.d(r,{Zo:()=>d,kt:()=>y});var t=a(67294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function l(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?l(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=t.createContext({}),p=function(e){var r=t.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},d=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(a),m=n,y=s["".concat(c,".").concat(m)]||s[m]||u[m]||l;return a?t.createElement(y,o(o({ref:r},d),{},{components:a})):t.createElement(y,o({ref:r},d))}));function y(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[s]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},99504:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>k,contentTitle:()=>f,default:()=>O,frontMatter:()=>y,metadata:()=>v,toc:()=>g});var t=a(3905),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,r,a)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,s=(e,r)=>{for(var a in r||(r={}))c.call(r,a)&&d(e,a,r[a]);if(i)for(var a of i(r))p.call(r,a)&&d(e,a,r[a]);return e},u=(e,r)=>l(e,o(r)),m=(e,r)=>{var a={};for(var t in e)c.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&i)for(var t of i(e))r.indexOf(t)<0&&p.call(e,t)&&(a[t]=e[t]);return a};const y={title:"$arrayEvery",description:"$arrayEvery va a revisar si es que todos los elementos en el array cumplen con la condici\xf3n indicada.",id:"arrayEvery"},f=void 0,v={unversionedId:"functions/array-related/arrayEvery",id:"version-6.4.0/functions/array-related/arrayEvery",title:"$arrayEvery",description:"$arrayEvery va a revisar si es que todos los elementos en el array cumplen con la condici\xf3n indicada.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arrayEvery.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayEvery",permalink:"/es/docs/functions/array-related/arrayEvery",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$arrayEvery",description:"$arrayEvery va a revisar si es que todos los elementos en el array cumplen con la condici\xf3n indicada.",id:"arrayEvery"},sidebar:"docs",previous:{title:"$arrayConcat",permalink:"/es/docs/functions/array-related/arrayConcat"},next:{title:"$arrayFilter",permalink:"/es/docs/functions/array-related/arrayFilter"}},k={},g=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Operadores de comparaci\xf3n",id:"operadores-de-comparaci\xf3n",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],b={toc:g},N="wrapper";function O(e){var r=e,{components:a}=r,n=m(r,["components"]);return(0,t.kt)(N,u(s(s({},b),n),{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"$arrayEvery")," va a revisar si es que todos los elementos en el array cumplen con la condici\xf3n indicada."),(0,t.kt)("h2",s({},{id:"uso"}),"Uso"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$arrayEvery[nombre;consulta;Tipo de consulta?]\n")),(0,t.kt)("h2",s({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",s({parentName:"tr"},{align:null}),"Campos"),(0,t.kt)("th",s({parentName:"tr"},{align:null}),"Tipo"),(0,t.kt)("th",s({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,t.kt)("th",s({parentName:"tr"},{align:"center"}),"Requerido"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",s({parentName:"tr"},{align:null}),"nombre"),(0,t.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,t.kt)("td",s({parentName:"tr"},{align:null}),"Nombre del array."),(0,t.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadera")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",s({parentName:"tr"},{align:null}),"consulta"),(0,t.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,t.kt)("td",s({parentName:"tr"},{align:null}),"El elemento que vamos a revisar dentro de cada elemento del array."),(0,t.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadera")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",s({parentName:"tr"},{align:null}),"tipo de consulta"),(0,t.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,t.kt)("td",s({parentName:"tr"},{align:null}),"El operador de comparaci\xf3n."),(0,t.kt)("td",s({parentName:"tr"},{align:"center"}),"falso")))),(0,t.kt)("h2",s({},{id:"operadores-de-comparaci\xf3n"}),"Operadores de comparaci\xf3n"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"includes")," \u2014 Incluye"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"startsWith")," \u2014 Comienza con"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"endsWith")," \u2014 Termina en"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"==")," \u2014 Es igual a"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"!=")," \u2014 Es diferente a"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},">")," \u2014 Mayor que"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"<")," \u2014 Menor que"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},">=")," \u2014 Mayor o igual que"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"<=")," \u2014 Menor o igual que")),(0,t.kt)("h2",s({},{id:"ejemplos"}),"Ejemplo(s)"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-every",\n    code: `\n  $arrayEvery[array;30;==]\n  $createArray[array;1;2;3;0;30]\n  `\n    // Va a entregar "false". Porque 1 no es igual a 30. Puedes pensar que es el operador l\xf3gico de condiciones "y (&&)".\n});\n')))}O.isMDXComponent=!0}}]);