"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[19184],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(f,l(l({ref:t},p),{},{components:n})):i.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>O,frontMatter:()=>f,metadata:()=>k,toc:()=>y});var i=n(3905),r=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&p(e,n,t[n]);return e},u=(e,t)=>a(e,l(t)),m=(e,t)=>{var n={};for(var i in e)c.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&o)for(var i of o(e))t.indexOf(i)<0&&s.call(e,i)&&(n[i]=e[i]);return n};const f={title:"$isValidImageLink",description:"$isValidImageLink will check if the given image link is valid.",id:"isValidImageLink"},g=void 0,k={unversionedId:"functions/util-related/isValidImageLink",id:"version-6.4.0/functions/util-related/isValidImageLink",title:"$isValidImageLink",description:"$isValidImageLink will check if the given image link is valid.",source:"@site/i18n/hi/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/isValidImageLink.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/isValidImageLink",permalink:"/hi/docs/functions/util-related/isValidImageLink",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$isValidImageLink",description:"$isValidImageLink will check if the given image link is valid.",id:"isValidImageLink"},sidebar:"docs",previous:{title:"$isValidHex",permalink:"/hi/docs/functions/util-related/isValidHex"},next:{title:"$isValidInvite",permalink:"/hi/docs/functions/util-related/isValidInvite"}},v={},y=[{value:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917",id:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917",level:2},{value:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938",id:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938",level:2},{value:"\u091f\u094d\u0930\u0942 (\u0939\u093e)",id:"\u091f\u094d\u0930\u0942-\u0939\u093e",level:2}],b={toc:y},h="wrapper";function O(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,i.kt)(h,u(d(d({},b),r),{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$isValidImageLink")," will check if the given image link is valid."),(0,i.kt)("h2",d({},{id:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917"}),"\u092a\u094d\u0930\u094b\u092f\u094b\u0917"),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$isValidImageLink[URL]\n")),(0,i.kt)("h2",d({},{id:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938"}),"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",d({parentName:"tr"},{align:null}),"\u092b\u0940\u0932\u094d\u0921"),(0,i.kt)("th",d({parentName:"tr"},{align:null}),"\u091f\u093e\u0907\u092a"),(0,i.kt)("th",d({parentName:"tr"},{align:null}),"\u0921\u093f\u0938\u094d\u0915\u094d\u0930\u093f\u092a\u094d\u0936\u0928"),(0,i.kt)("th",d({parentName:"tr"},{align:"center"}),"\u091a\u093e\u0939\u093f\u090f"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",d({parentName:"tr"},{align:null}),"URL"),(0,i.kt)("td",d({parentName:"tr"},{align:null}),"\u0938\u094d\u091f\u094d\u0930\u093f\u0902\u0917"),(0,i.kt)("td",d({parentName:"tr"},{align:null}),"Direct Image link."),(0,i.kt)("td",d({parentName:"tr"},{align:"center"}),"true")))),(0,i.kt)("h2",d({},{id:"\u091f\u094d\u0930\u0942-\u0939\u093e"}),"\u091f\u094d\u0930\u0942 (\u0939\u093e)"),(0,i.kt)("p",null,"This will return ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," as the given image link is valid:"),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'isValidImageLink',\n    code: `\n  $isValidImageLink[https://cdn.discordapp.com/attachments/832704676096245800/1058914808109486221/Screenshot_2022-12-31_at_8.08.57_PM.png]\n  `\n});\n")))}O.isMDXComponent=!0}}]);