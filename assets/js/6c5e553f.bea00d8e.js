"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[94885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,d=f["".concat(c,".").concat(m)]||f[m]||l[m]||s;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},36185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const s={title:"$resumeSong",description:"Resume the song from being paused"},i=void 0,a={unversionedId:"functions/resumesong",id:"version-5.5.5/functions/resumesong",title:"$resumeSong",description:"Resume the song from being paused",source:"@site/versioned_docs/version-5.5.5/functions/resumesong.md",sourceDirName:"functions",slug:"/functions/resumesong",permalink:"/docs/5.5.5/functions/resumesong",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1686146989,formattedLastUpdatedAt:"Jun 7, 2023",frontMatter:{title:"$resumeSong",description:"Resume the song from being paused"},sidebar:"docs",previous:{title:"$resolveEmojiID",permalink:"/docs/5.5.5/functions/resolveemojiid"},next:{title:"$role",permalink:"/docs/5.5.5/functions/role"}},c={},u=[],p={toc:u};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function resumes a song after being paused"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname:"resume",\ncode: `$resumeSong`\n})\n')))}l.isMDXComponent=!0}}]);