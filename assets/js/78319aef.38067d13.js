"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[91509],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>f});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),m=o,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return r?t.createElement(f,l(l({ref:n},u),{},{components:r})):t.createElement(f,l({ref:n},u))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91545:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>y,contentTitle:()=>b,default:()=>g,frontMatter:()=>f,metadata:()=>v,toc:()=>h});var t=r(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,n,r)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,s=(e,n)=>{for(var r in n||(n={}))c.call(n,r)&&u(e,r,n[r]);if(i)for(var r of i(n))p.call(n,r)&&u(e,r,n[r]);return e},d=(e,n)=>a(e,l(n)),m=(e,n)=>{var r={};for(var t in e)c.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&i)for(var t of i(e))n.indexOf(t)<0&&p.call(e,t)&&(r[t]=e[t]);return r};const f={title:"bot.onFunctionError",description:"It makes the Client send the error to a specific channel."},b=void 0,v={unversionedId:"events/bot.onfunctionerror",id:"version-5.5.5/events/bot.onfunctionerror",title:"bot.onFunctionError",description:"It makes the Client send the error to a specific channel.",source:"@site/versioned_docs/version-5.5.5/events/bot.onfunctionerror.md",sourceDirName:"events",slug:"/events/bot.onfunctionerror",permalink:"/docs/5.5.5/events/bot.onfunctionerror",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"Jul 16, 2023",frontMatter:{title:"bot.onFunctionError",description:"It makes the Client send the error to a specific channel."},sidebar:"docs",previous:{title:"bot.onChannelUpdate",permalink:"/docs/5.5.5/events/bot.onchannelupdate"},next:{title:"bot.onGuildJoin",permalink:"/docs/5.5.5/events/bot.onguildjoin"}},y={},h=[{value:"Usage:",id:"usage",level:3},{value:"Example Command:",id:"example-command",level:3}],k={toc:h},O="wrapper";function g(e){var n=e,{components:r}=n,o=m(n,["components"]);return(0,t.kt)(O,d(s(s({},k),o),{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Property that can be used:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"channel"))),(0,t.kt)("p",null,"Function that can be used ",(0,t.kt)("a",s({parentName:"p"},{href:"/docs/5.5.5/functions/handleerror"}),"$handleError")),(0,t.kt)("p",null,"Callback to use is ",(0,t.kt)("inlineCode",{parentName:"p"},"bot.onFunctionError()")),(0,t.kt)("h3",s({},{id:"usage"}),"Usage:"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.functionErrorCommand({\nchannel: "channel id",\ncode: `your code`\n})\n\nbot.onFunctionError()\n')),(0,t.kt)("h3",s({},{id:"example-command"}),"Example Command:"),(0,t.kt)("p",null,"Non-Command Handler:"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.functionErrorCommand({\nchannel: "832704676096245800",\ncode: `$title[Error Occurred in $serverName]\n$description[Function: $handleError[function]\nCommand: $handleError[command]\nError: $handleError[error]]\n$color[RED]`\n})\n\nbot.onFunctionError()\n')),(0,t.kt)("p",null,"Command Handler:"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'//In your commands folder\nmodule.exports = ({\ntype: "functionErrorCommand",\nchannel: "832704676096245800",\ncode: `$title[Error In $serverName]\n$description[Function: $handleError[function]\nCommand: $handleError[command]\nError: $handleError[error]]\n$color[RED]`\n})\n\n//In your index.js file\nbot.onFunctionError()\n')),(0,t.kt)("p",null,"You can also use"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"$channelUsed")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"$guildID")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"$authorID"))))}g.isMDXComponent=!0}}]);