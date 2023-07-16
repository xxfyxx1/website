"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[39086],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,m=s["".concat(c,".").concat(d)]||s[d]||f[d]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>b,default:()=>h,frontMatter:()=>m,metadata:()=>y,toc:()=>v});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&p(e,n,t[n]);return e},f=(e,t)=>o(e,i(t)),d=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$banCount",description:"Returns amount of banned users."},b=void 0,y={unversionedId:"functions/bancount",id:"version-5.5.5/functions/bancount",title:"$banCount",description:"Returns amount of banned users.",source:"@site/versioned_docs/version-5.5.5/functions/bancount.md",sourceDirName:"functions",slug:"/functions/bancount",permalink:"/ar/docs/5.5.5/functions/bancount",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"\u0661\u0666 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$banCount",description:"Returns amount of banned users."},sidebar:"docs",previous:{title:"$ban",permalink:"/ar/docs/5.5.5/functions/ban"},next:{title:"$blacklist",permalink:"/ar/docs/5.5.5/functions/blacklist"}},g={},v=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2}],O={toc:v},k="wrapper";function h(e){var t=e,{components:n}=t,a=d(t,["components"]);return(0,r.kt)(k,f(s(s({},O),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$banCount")," returns how many bans the current guild has, ",(0,r.kt)("em",{parentName:"p"},"lets hope its not thay much hehe!")),(0,r.kt)("h3",s({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$banCount[guild id?]\n")),(0,r.kt)("h3",s({},{id:"fields"}),"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",s({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",s({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"guild id?"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"Returns amount of bans in the given guild id"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"no")))),(0,r.kt)("h2",s({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "ban-count",\n  code: `\n  $username: How many members got ban?\n  \n  $username[$clientID]: $banCount[697039582922801182] members!\n  `\n// Returns 13 \n});\n')))}h.isMDXComponent=!0}}]);