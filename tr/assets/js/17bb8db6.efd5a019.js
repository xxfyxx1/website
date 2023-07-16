"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[28927],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},79907:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>v,frontMatter:()=>f,metadata:()=>k,toc:()=>b});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&s(e,r,t[r]);if(p)for(var r of p(t))l.call(t,r)&&s(e,r,t[r]);return e},d=(e,t)=>o(e,i(t)),m=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const f={title:"Character Escaping",description:"With this character usages you can let the bot return the given caracters without accepting this as a separator or as the end of a function."},h=void 0,k={unversionedId:"other/character-escaping",id:"version-5.5.5/other/character-escaping",title:"Character Escaping",description:"With this character usages you can let the bot return the given caracters without accepting this as a separator or as the end of a function.",source:"@site/versioned_docs/version-5.5.5/other/character-escaping.md",sourceDirName:"other",slug:"/other/character-escaping",permalink:"/tr/docs/5.5.5/other/character-escaping",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 Tem 2023",frontMatter:{title:"Character Escaping",description:"With this character usages you can let the bot return the given caracters without accepting this as a separator or as the end of a function."},sidebar:"docs",previous:{title:"Sharding",permalink:"/tr/docs/5.5.5/other/sharding"},next:{title:"Embed Errors",permalink:"/tr/docs/5.5.5/other/embed-errors"}},g={},b=[{value:"Escaping characters:",id:"escaping-characters",level:2},{value:"more:",id:"more",level:2}],y={toc:b},C="wrapper";function v(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(C,d(u(u({},y),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",u({},{id:"escaping-characters"}),"Escaping characters:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"[")," => ",(0,n.kt)("inlineCode",{parentName:"p"},"#RIGHT#")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"]")," => ",(0,n.kt)("inlineCode",{parentName:"p"},"#LEFT#")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},";")," => ",(0,n.kt)("inlineCode",{parentName:"p"},"#SEMI#")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},":")," => ",(0,n.kt)("inlineCode",{parentName:"p"},"#COLON#")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$")," => ",(0,n.kt)("inlineCode",{parentName:"p"},"#CHAR#")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},">")," => ",(0,n.kt)("inlineCode",{parentName:"p"},"#RIGHT_CLICK#")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"<")," => ",(0,n.kt)("inlineCode",{parentName:"p"},"#LEFT_CLICK#")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"=")," => ",(0,n.kt)("inlineCode",{parentName:"p"},"#EQUAL#")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"}")," => ",(0,n.kt)("inlineCode",{parentName:"p"},"#LEFT_BRACKET#")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"{")," => ",(0,n.kt)("inlineCode",{parentName:"p"},"#RIGHT_BRACKET#")),(0,n.kt)("h2",u({},{id:"more"}),"more:"),(0,n.kt)("p",null,"Backspace => ",(0,n.kt)("inlineCode",{parentName:"p"},"\\b"),"\\\nForm Feed => ",(0,n.kt)("inlineCode",{parentName:"p"},"\\f"),"\\\nNew Line =>\\\nCarriage Return =>\\\nHorizontal Tabulator =>\\\nVertical Tabulator => ",(0,n.kt)("inlineCode",{parentName:"p"},"\\v"),"\\\nSingle quote => ",(0,n.kt)("inlineCode",{parentName:"p"},"\\'"),"\\\nDouble quote => ",(0,n.kt)("inlineCode",{parentName:"p"},'\\"'),"\\\nBackslash => ",(0,n.kt)("inlineCode",{parentName:"p"},"\\")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"These character escapes are useful for using special characters inside functions, e.g. in the text field of ",(0,n.kt)("a",u({parentName:"p"},{href:"../functions/sendmessage"}),"$sendMessage"),".")))}v.isMDXComponent=!0}}]);