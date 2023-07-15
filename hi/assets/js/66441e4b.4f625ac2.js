"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[24542],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[f]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>g,frontMatter:()=>m,metadata:()=>O,toc:()=>v});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&s(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&s(e,n,t[n]);return e},u=(e,t)=>i(e,a(t)),d=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$indexOf",description:"Returns the position of <char> in <text>. Returns 0 if there's no char in text."},y=void 0,O={unversionedId:"functions/indexof",id:"version-5.5.5/functions/indexof",title:"$indexOf",description:"Returns the position of <char> in <text>. Returns 0 if there's no char in text.",source:"@site/versioned_docs/version-5.5.5/functions/indexof.md",sourceDirName:"functions",slug:"/functions/indexof",permalink:"/hi/docs/5.5.5/functions/indexof",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$indexOf",description:"Returns the position of <char> in <text>. Returns 0 if there's no char in text."},sidebar:"docs",previous:{title:"$image",permalink:"/hi/docs/5.5.5/functions/image"},next:{title:"$interactionDefer",permalink:"/hi/docs/5.5.5/functions/interactiondefer"}},b={},v=[{value:"Example Command:",id:"example-command",level:4}],h={toc:v},x="wrapper";function g(e){var t=e,{components:n}=t,o=d(t,["components"]);return(0,r.kt)(x,u(f(f({},h),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns the first matching position of the given character in the given text."),(0,r.kt)("p",null,"Raw usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$indexOf[text;character]")," "),(0,r.kt)("h4",f({},{id:"example-command"}),"Example Command:"),(0,r.kt)("p",null,"The example below returns ",(0,r.kt)("inlineCode",{parentName:"p"},"3")," because the first ",(0,r.kt)("inlineCode",{parentName:"p"},"l")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello")," is at position 3."),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-text"}),'bot.command({\nname: "index",\ncode: `\n$indexOf[Hello;l]\n`\n})\n')))}g.isMDXComponent=!0}}]);