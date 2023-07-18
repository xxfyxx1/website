"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[58693],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),f=o,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||l;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},60259:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>y,default:()=>N,frontMatter:()=>m,metadata:()=>b,toc:()=>g});var n=r(3905),o=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&u(e,r,t[r]);return e},d=(e,t)=>l(e,a(t)),f=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$onlyForRoles",description:"$onlyForRoles \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u044c \u0447\u0438 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447, \u044f\u043a\u0438\u0439 \u0432\u0438\u043a\u043e\u043d\u0443\u0432\u0430\u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0443, \u043c\u0430\u0454 \u043e\u0434\u043d\u0443 \u0456\u0437 \u043f\u0435\u0440\u0435\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0445 \u0440\u043e\u043b\u0435\u0439 \u0456 \u043f\u043e\u0432\u0435\u0440\u043d\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u043f\u0440\u043e \u043f\u043e\u043c\u0438\u043b\u043a\u0443, \u044f\u043a\u0449\u043e \u043d\u0456.",id:"onlyForRoles"},y=void 0,b={unversionedId:"functions/util-related/onlyForRoles",id:"version-6.4.0/functions/util-related/onlyForRoles",title:"$onlyForRoles",description:"$onlyForRoles \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u044c \u0447\u0438 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447, \u044f\u043a\u0438\u0439 \u0432\u0438\u043a\u043e\u043d\u0443\u0432\u0430\u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0443, \u043c\u0430\u0454 \u043e\u0434\u043d\u0443 \u0456\u0437 \u043f\u0435\u0440\u0435\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0445 \u0440\u043e\u043b\u0435\u0439 \u0456 \u043f\u043e\u0432\u0435\u0440\u043d\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u043f\u0440\u043e \u043f\u043e\u043c\u0438\u043b\u043a\u0443, \u044f\u043a\u0449\u043e \u043d\u0456.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/onlyForRoles.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/onlyForRoles",permalink:"/uk/docs/functions/util-related/onlyForRoles",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689718489,formattedLastUpdatedAt:"18 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$onlyForRoles",description:"$onlyForRoles \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u044c \u0447\u0438 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447, \u044f\u043a\u0438\u0439 \u0432\u0438\u043a\u043e\u043d\u0443\u0432\u0430\u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0443, \u043c\u0430\u0454 \u043e\u0434\u043d\u0443 \u0456\u0437 \u043f\u0435\u0440\u0435\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0445 \u0440\u043e\u043b\u0435\u0439 \u0456 \u043f\u043e\u0432\u0435\u0440\u043d\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u043f\u0440\u043e \u043f\u043e\u043c\u0438\u043b\u043a\u0443, \u044f\u043a\u0449\u043e \u043d\u0456.",id:"onlyForRoles"},sidebar:"docs",previous:{title:"$onlyForIDs",permalink:"/uk/docs/functions/util-related/onlyForIDs"},next:{title:"$onlyIf",permalink:"/uk/docs/functions/util-related/onlyIf"}},k={},g=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],v={toc:g},O="wrapper";function N(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(O,d(s(s({},v),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$onlyForRoles")," \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u044c \u0447\u0438 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447, \u044f\u043a\u0438\u0439 \u0432\u0438\u043a\u043e\u043d\u0430\u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0443, \u043c\u0430\u0454 \u043e\u0434\u043d\u0443 \u0456\u0437 \u043f\u0435\u0440\u0435\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0445 \u0440\u043e\u043b\u0435\u0439 \u0456 \u043f\u043e\u0432\u0435\u0440\u043d\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u043f\u0440\u043e \u043f\u043e\u043c\u0438\u043b\u043a\u0443 , \u044f\u043a\u0449\u043e \u043d\u0456."),(0,n.kt)("h2",s({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$onlyForRoles[...roleIds;error]\n")),(0,n.kt)("h2",s({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,n.kt)("th",s({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"...roleIds"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a, \u0446\u0456\u043b\u0435"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u0420\u043e\u043b\u0456, \u0434\u043e \u044f\u043a\u0438\u0445 \u0432\u0438 \u0445\u043e\u0447\u0435\u0442\u0435 \u043e\u0431\u043c\u0435\u0436\u0438\u0442\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u0443."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u043f\u043e\u043c\u0438\u043b\u043a\u0430"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u043e\u0432\u0435\u0440\u043d\u0435\u043d\u043d\u044f, \u043a\u043e\u043b\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u043d\u0435 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043e \u0436\u043e\u0434\u0435\u043d \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u0456\u0437 \u043f\u0435\u0440\u0435\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u043c\u0438 \u0440\u043e\u043b\u044f\u043c\u0438."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"\u043d\u0456")))),(0,n.kt)("h2",s({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,n.kt)("p",null,"\u0426\u0435 \u043e\u0431\u043c\u0435\u0436\u0443\u0454 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u043b\u0438\u0448\u0435 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0445 \u043a\u0430\u043d\u0430\u043b\u0456\u0432:"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "\u0422\u0456\u043b\u044c\u043a\u0438 \u0424\u043e\u0440\u0440\u043e\u043b\u0456",\n    \u043a\u043e\u0434: `\n    Ok.\n    $onlyForRoles[roleID;roleID;You can\'t use that command!]\n    `\n});\n')))}N.isMDXComponent=!0}}]);