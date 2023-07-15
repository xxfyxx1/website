"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[73527],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(67294);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){u(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,u=function(e,n){if(null==e)return{};var t,r,u={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(u[t]=e[t]);return u}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}var l=r.createContext({}),f=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=f(e.components);return r.createElement(l.Provider,{value:n},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,u=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),s=f(t),m=u,d=s["".concat(l,".").concat(m)]||s[m]||p[m]||i;return t?r.createElement(d,o(o({ref:n},c),{},{components:t})):r.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,u=n&&n.mdxType;if("string"==typeof e||u){var i=t.length,o=new Array(i);o[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[s]="string"==typeof e?e:u,o[1]=a;for(var f=2;f<i;f++)o[f]=t[f];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},41320:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>h,default:()=>w,frontMatter:()=>d,metadata:()=>y,toc:()=>v});var r=t(3905),u=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?u(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,s=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&c(e,t,n[t]);if(a)for(var t of a(n))f.call(n,t)&&c(e,t,n[t]);return e},p=(e,n)=>i(e,o(n)),m=(e,n)=>{var t={};for(var r in e)l.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&a)for(var r of a(e))n.indexOf(r)<0&&f.call(e,r)&&(t[r]=e[r]);return t};const d={title:"$unshuffleQueue",description:"$unshuffleQueue will unshuffle the current queue.",id:"unshuffleQueue"},h=void 0,y={unversionedId:"official/aoi.music/functions/unshuffleQueue",id:"official/aoi.music/functions/unshuffleQueue",title:"$unshuffleQueue",description:"$unshuffleQueue will unshuffle the current queue.",source:"@site/extensions/official/aoi.music/functions/unshuffleQueue.md",sourceDirName:"official/aoi.music/functions",slug:"/official/aoi.music/functions/unshuffleQueue",permalink:"/ar/extensions/official/aoi.music/functions/unshuffleQueue",draft:!1,tags:[],version:"current",frontMatter:{title:"$unshuffleQueue",description:"$unshuffleQueue will unshuffle the current queue.",id:"unshuffleQueue"},sidebar:"docs",previous:{title:"$stopTrack",permalink:"/ar/extensions/official/aoi.music/functions/stopTrack"},next:{title:"$voicePing",permalink:"/ar/extensions/official/aoi.music/functions/voicePing"}},b={},v=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],O={toc:v},g="wrapper";function w(e){var n=e,{components:t}=n,u=m(n,["components"]);return(0,r.kt)(g,p(s(s({},O),u),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$unshuffleQueue")," will unshuffle the current queue. "),(0,r.kt)("h2",s({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$unshuffleQueue\n")),(0,r.kt)("h2",s({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will unshuffle the current queue:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'unshuffleQueue',\n    code: `\n    $unshuffleQueue\n  `\n});\n")))}w.isMDXComponent=!0}}]);