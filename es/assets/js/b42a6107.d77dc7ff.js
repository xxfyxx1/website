"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[82914],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),d=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return o.createElement(c.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=d(t),u=a,f=s["".concat(c,".").concat(u)]||s[u]||m[u]||r;return t?o.createElement(f,l(l({ref:n},p),{},{components:t})):o.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<r;d++)l[d]=t[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},59631:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>h,default:()=>y,frontMatter:()=>f,metadata:()=>w,toc:()=>k});var o=t(3905),a=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,s=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&p(e,t,n[t]);if(i)for(var t of i(n))d.call(n,t)&&p(e,t,n[t]);return e},m=(e,n)=>r(e,l(n)),u=(e,n)=>{var t={};for(var o in e)c.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&i)for(var o of i(e))n.indexOf(o)<0&&d.call(e,o)&&(t[o]=e[o]);return t};const f={title:"$channelCooldown",description:"$channelCooldown will set a cooldown bound to a specific channel after execution of the command.",id:"channelCooldown"},h=void 0,w={unversionedId:"functions/variables-related/channelCooldown",id:"version-6.4.0/functions/variables-related/channelCooldown",title:"$channelCooldown",description:"$channelCooldown will set a cooldown bound to a specific channel after execution of the command.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/variables-related/channelCooldown.md",sourceDirName:"functions/variables-related",slug:"/functions/variables-related/channelCooldown",permalink:"/es/docs/functions/variables-related/channelCooldown",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 jul 2023",frontMatter:{title:"$channelCooldown",description:"$channelCooldown will set a cooldown bound to a specific channel after execution of the command.",id:"channelCooldown"},sidebar:"docs",previous:{title:"$advanceCooldown",permalink:"/es/docs/functions/variables-related/advanceCooldown"},next:{title:"$cooldown",permalink:"/es/docs/functions/variables-related/cooldown"}},b={},k=[{value:"Modo de uso",id:"modo-de-uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],v={toc:k},g="wrapper";function y(e){var n=e,{components:t}=n,a=u(n,["components"]);return(0,o.kt)(g,m(s(s({},v),a),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$channelCooldown")," will set a channel-based cooldown."),(0,o.kt)("h2",s({},{id:"modo-de-uso"}),"Modo de uso"),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$channelCooldown[time;errorMessage]\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You are able to retrieve the remaining cooldown in the ",(0,o.kt)("inlineCode",{parentName:"li"},"$channelCooldown")," function by using ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"%time%"))," or any of the following below.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"%time%"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"%year%"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"%month%"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"%week%"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"%day%"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"%hour%"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"%min%"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"%sec%"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"%ms%"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"%fullTime%"))))),(0,o.kt)("h2",s({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",s({parentName:"tr"},{align:null}),"Campo"),(0,o.kt)("th",s({parentName:"tr"},{align:null}),"Tipo"),(0,o.kt)("th",s({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,o.kt)("th",s({parentName:"tr"},{align:"center"}),"Requerido"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",s({parentName:"tr"},{align:null}),"tiempo"),(0,o.kt)("td",s({parentName:"tr"},{align:null}),"consulta"),(0,o.kt)("td",s({parentName:"tr"},{align:null}),"Timer of the cooldown"),(0,o.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",s({parentName:"tr"},{align:null}),"errorMessage"),(0,o.kt)("td",s({parentName:"tr"},{align:null}),"consulta"),(0,o.kt)("td",s({parentName:"tr"},{align:null}),"Error message when given cooldown timer is still active."),(0,o.kt)("td",s({parentName:"tr"},{align:"center"}),"no")))),(0,o.kt)("h2",s({},{id:"ejemplos"}),"Ejemplo(s)"),(0,o.kt)("p",null,"This will set a cooldown for a command in the channel where the command was executed in and returns the remaining cooldown:"),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'channelCooldown',\n    code: `\n  hello\n  $channelCooldown[2m;Please wait %time% to execute this command again.]\n  `\n});\n")))}y.isMDXComponent=!0}}]);