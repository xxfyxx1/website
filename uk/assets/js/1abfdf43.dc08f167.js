"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[41023],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),y=n,m=d["".concat(c,".").concat(y)]||d[y]||s[y]||o;return r?a.createElement(m,l(l({ref:t},u),{},{components:r})):a.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},50080:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>f,default:()=>A,frontMatter:()=>m,metadata:()=>b,toc:()=>g});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&u(e,r,t[r]);return e},s=(e,t)=>o(e,l(t)),y=(e,t)=>{var r={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r};const m={title:"$arrayAt",description:"$arrayAt \u043e\u0431\u0435\u0440\u0435 \u0456\u043d\u0434\u0435\u043a\u0441 (\u043f\u043e\u0437\u0438\u0446\u0456\u044e) \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043c\u0430\u0441\u0438\u0432\u0443, \u044f\u043a\u0438\u0439 \u0431\u0443\u0434\u0435 \u043f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u043e. \u041f\u043e\u0432\u0435\u0440\u043d\u0435 \u043d\u0456\u0447\u043e\u0433\u043e \u044f\u043a\u0449\u043e \u0434\u0430\u043d\u0438\u0439 \u0456\u043d\u0434\u0435\u043a\u0441 (\u043f\u043e\u0437\u0438\u0446\u0456\u044f) \u043d\u0435 \u043c\u043e\u0433\u043b\u0430 \u0431\u0443\u0442\u0438 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u0430.",id:"arrayAt"},f=void 0,b={unversionedId:"functions/array-related/arrayAt",id:"version-6.4.0/functions/array-related/arrayAt",title:"$arrayAt",description:"$arrayAt \u043e\u0431\u0435\u0440\u0435 \u0456\u043d\u0434\u0435\u043a\u0441 (\u043f\u043e\u0437\u0438\u0446\u0456\u044e) \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043c\u0430\u0441\u0438\u0432\u0443, \u044f\u043a\u0438\u0439 \u0431\u0443\u0434\u0435 \u043f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u043e. \u041f\u043e\u0432\u0435\u0440\u043d\u0435 \u043d\u0456\u0447\u043e\u0433\u043e \u044f\u043a\u0449\u043e \u0434\u0430\u043d\u0438\u0439 \u0456\u043d\u0434\u0435\u043a\u0441 (\u043f\u043e\u0437\u0438\u0446\u0456\u044f) \u043d\u0435 \u043c\u043e\u0433\u043b\u0430 \u0431\u0443\u0442\u0438 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u0430.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arrayAt.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayAt",permalink:"/uk/docs/functions/array-related/arrayAt",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690091566,formattedLastUpdatedAt:"23 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$arrayAt",description:"$arrayAt \u043e\u0431\u0435\u0440\u0435 \u0456\u043d\u0434\u0435\u043a\u0441 (\u043f\u043e\u0437\u0438\u0446\u0456\u044e) \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043c\u0430\u0441\u0438\u0432\u0443, \u044f\u043a\u0438\u0439 \u0431\u0443\u0434\u0435 \u043f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u043e. \u041f\u043e\u0432\u0435\u0440\u043d\u0435 \u043d\u0456\u0447\u043e\u0433\u043e \u044f\u043a\u0449\u043e \u0434\u0430\u043d\u0438\u0439 \u0456\u043d\u0434\u0435\u043a\u0441 (\u043f\u043e\u0437\u0438\u0446\u0456\u044f) \u043d\u0435 \u043c\u043e\u0433\u043b\u0430 \u0431\u0443\u0442\u0438 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u0430.",id:"arrayAt"},sidebar:"docs",previous:{title:"Soundcloud ID",permalink:"/uk/docs/guides/other/soundcloudid"},next:{title:"$arrayConcat",permalink:"/uk/docs/functions/array-related/arrayConcat"}},k={},g=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],v={toc:g},O="wrapper";function A(e){var t=e,{components:r}=t,n=y(t,["components"]);return(0,a.kt)(O,s(d(d({},v),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arrayAt")," \u0432\u0438\u0431\u0435\u0440\u0435 \u0456\u043d\u0434\u0435\u043a\u0441 (\u043f\u043e\u0437\u0438\u0446\u0456\u044e) \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043c\u0430\u0441\u0438\u0432\u0443, \u044f\u043a\u0438\u0439 \u0431\u0443\u0434\u0435 \u043f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u043e. \u041f\u043e\u0432\u0435\u0440\u043d\u0435 \u043d\u0456\u0447\u043e\u0433\u043e \u044f\u043a\u0449\u043e \u0434\u0430\u043d\u0438\u0439 \u0456\u043d\u0434\u0435\u043a\u0441 (\u043f\u043e\u0437\u0438\u0446\u0456\u044f) \u043d\u0435 \u043c\u043e\u0433\u043b\u0430 \u0431\u0443\u0442\u0438 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u0430."),(0,a.kt)("h2",d({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$arrayAt[name;index]\n")),(0,a.kt)("h2",d({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,a.kt)("th",d({parentName:"tr"},{align:"center"}),"\u041d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u043e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0456\u043c'\u044f"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430 \u043c\u0430\u0441\u0438\u0432\u0443."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0456\u043d\u0434\u0435\u043a\u0441"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u041f\u043e\u0437\u0438\u0446\u0456\u044f \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0430."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")))),(0,a.kt)("h2",d({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0426\u0435 \u043f\u043e\u0432\u0435\u0440\u043d\u0435 ",(0,a.kt)("inlineCode",{parentName:"li"},"Aoi.dashboard"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-at",\n    code: `\n  $arrayAt[Aoi;3]\n\n  $createArray[Aoi;Aoi.music;Aoi.panel;Aoi.dashboard;Aoi]\n  `\n    // \u043f\u043e\u0432\u0435\u0440\u043d\u0435 "Aoi.dashboard"\n});\n')))}A.isMDXComponent=!0}}]);