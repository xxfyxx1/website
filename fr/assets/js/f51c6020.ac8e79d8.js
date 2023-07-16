"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[70512],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[f]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>h,frontMatter:()=>m,metadata:()=>g,toc:()=>v});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&l(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&l(e,n,t[n]);return e},u=(e,t)=>a(e,i(t)),d=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$stopSong",description:"Stop the bot from playing songs"},y=void 0,g={unversionedId:"functions/stopsong",id:"version-5.5.5/functions/stopsong",title:"$stopSong",description:"Stop the bot from playing songs",source:"@site/versioned_docs/version-5.5.5/functions/stopsong.md",sourceDirName:"functions",slug:"/functions/stopsong",permalink:"/fr/docs/5.5.5/functions/stopsong",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 juil. 2023",frontMatter:{title:"$stopSong",description:"Stop the bot from playing songs"},sidebar:"docs",previous:{title:"$status",permalink:"/fr/docs/5.5.5/functions/status"},next:{title:"$stringEndsWith",permalink:"/fr/docs/5.5.5/functions/stringendswith"}},b={},v=[],O={toc:v},j="wrapper";function h(e){var t=e,{components:n}=t,o=d(t,["components"]);return(0,r.kt)(j,u(f(f({},O),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function makes the bot stops all songs from queue and leaves VC"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname:"stop",\ncode:`$stopSong`\n})\n')))}h.isMDXComponent=!0}}]);