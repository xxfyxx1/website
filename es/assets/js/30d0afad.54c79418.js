"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[60167],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,f=u["".concat(s,".").concat(d)]||u[d]||p[d]||a;return t?r.createElement(f,i(i({ref:n},m),{},{components:t})):r.createElement(f,i({ref:n},m))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},72103:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>y,default:()=>j,frontMatter:()=>f,metadata:()=>h,toc:()=>v});var r=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,m=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&m(e,t,n[t]);if(c)for(var t of c(n))l.call(n,t)&&m(e,t,n[t]);return e},p=(e,n)=>a(e,i(n)),d=(e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&c)for(var r of c(e))n.indexOf(r)<0&&l.call(e,r)&&(t[r]=e[r]);return t};const f={title:"$mentionedChannelsCount",description:"Returns amount of mentioned channels in the command's message."},y=void 0,h={unversionedId:"functions/mentionedchannelscount",id:"version-5.5.5/functions/mentionedchannelscount",title:"$mentionedChannelsCount",description:"Returns amount of mentioned channels in the command's message.",source:"@site/versioned_docs/version-5.5.5/functions/mentionedchannelscount.md",sourceDirName:"functions",slug:"/functions/mentionedchannelscount",permalink:"/es/docs/5.5.5/functions/mentionedchannelscount",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$mentionedChannelsCount",description:"Returns amount of mentioned channels in the command's message."},sidebar:"docs",previous:{title:"$mentionedChannels",permalink:"/es/docs/5.5.5/functions/mentionedchannels"},next:{title:"$mentionedRoles",permalink:"/es/docs/5.5.5/functions/mentionedroles"}},b={},v=[{value:"Example Command:",id:"example-command",level:4}],O={toc:v},g="wrapper";function j(e){var n=e,{components:t}=n,o=d(n,["components"]);return(0,r.kt)(g,p(u(u({},O),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"With this function you can check how many channel mentions are in the command's message."),(0,r.kt)("p",null,"Raw usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$mentionedChannelsCount")),(0,r.kt)("h4",u({},{id:"example-command"}),"Example Command:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-text"}),'bot.command({\nname: "channelmentions",\ncode: `\nYou have $mentionedChannelsCount channel mentions in your message.`\n});\n')))}j.isMDXComponent=!0}}]);