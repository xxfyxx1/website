"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[28927],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91588:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={title:"Character Escaping",description:"With this character usages you can let the bot return the given caracters without accepting this as a separator or as the end of a function."},o=void 0,p={unversionedId:"other/character-escaping",id:"version-5.5.5/other/character-escaping",title:"Character Escaping",description:"With this character usages you can let the bot return the given caracters without accepting this as a separator or as the end of a function.",source:"@site/versioned_docs/version-5.5.5/other/character-escaping.md",sourceDirName:"other",slug:"/other/character-escaping",permalink:"/docs/5.5.5/other/character-escaping",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687300612,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"Character Escaping",description:"With this character usages you can let the bot return the given caracters without accepting this as a separator or as the end of a function."},sidebar:"docs",previous:{title:"Sharding",permalink:"/docs/5.5.5/other/sharding"},next:{title:"Embed Errors",permalink:"/docs/5.5.5/other/embed-errors"}},c={},l=[{value:"Escaping characters:",id:"escaping-characters",level:2},{value:"more:",id:"more",level:2}],s={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"escaping-characters"},"Escaping characters:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"[")," => ",(0,a.kt)("inlineCode",{parentName:"p"},"#RIGHT#")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"]")," => ",(0,a.kt)("inlineCode",{parentName:"p"},"#LEFT#")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},";")," => ",(0,a.kt)("inlineCode",{parentName:"p"},"#SEMI#")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},":")," => ",(0,a.kt)("inlineCode",{parentName:"p"},"#COLON#")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$")," => ",(0,a.kt)("inlineCode",{parentName:"p"},"#CHAR#")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},">")," => ",(0,a.kt)("inlineCode",{parentName:"p"},"#RIGHT_CLICK#")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<")," => ",(0,a.kt)("inlineCode",{parentName:"p"},"#LEFT_CLICK#")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"=")," => ",(0,a.kt)("inlineCode",{parentName:"p"},"#EQUAL#")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"}")," => ",(0,a.kt)("inlineCode",{parentName:"p"},"#LEFT_BRACKET#")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{")," => ",(0,a.kt)("inlineCode",{parentName:"p"},"#RIGHT_BRACKET#")),(0,a.kt)("h2",{id:"more"},"more:"),(0,a.kt)("p",null,"Backspace => ",(0,a.kt)("inlineCode",{parentName:"p"},"\\b"),"\\\nForm Feed => ",(0,a.kt)("inlineCode",{parentName:"p"},"\\f"),"\\\nNew Line =>\\\nCarriage Return =>\\\nHorizontal Tabulator =>\\\nVertical Tabulator => ",(0,a.kt)("inlineCode",{parentName:"p"},"\\v"),"\\\nSingle quote => ",(0,a.kt)("inlineCode",{parentName:"p"},"\\'"),"\\\nDouble quote => ",(0,a.kt)("inlineCode",{parentName:"p"},'\\"'),"\\\nBackslash => ",(0,a.kt)("inlineCode",{parentName:"p"},"\\")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"These character escapes are useful for using special characters inside functions, e.g. in the text field of ",(0,a.kt)("a",{parentName:"p",href:"../functions/sendmessage"},"$sendMessage"),".")))}d.isMDXComponent=!0}}]);