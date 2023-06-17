"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[5250],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"bot.onJoin",description:"An event that gets executed, if the bot sees a user joining a server. To let the bot listen to the event, add one bot.onJoin() callback inside your main file."},i=void 0,s={unversionedId:"events/bot.onjoin",id:"version-5.5.5/events/bot.onjoin",title:"bot.onJoin",description:"An event that gets executed, if the bot sees a user joining a server. To let the bot listen to the event, add one bot.onJoin() callback inside your main file.",source:"@site/versioned_docs/version-5.5.5/events/bot.onjoin.md",sourceDirName:"events",slug:"/events/bot.onjoin",permalink:"/docs/5.5.5/events/bot.onjoin",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1686964928,formattedLastUpdatedAt:"Jun 17, 2023",frontMatter:{title:"bot.onJoin",description:"An event that gets executed, if the bot sees a user joining a server. To let the bot listen to the event, add one bot.onJoin() callback inside your main file."},sidebar:"docs",previous:{title:"bot.onInteractionCreate",permalink:"/docs/5.5.5/events/bot.oninteractioncreate"},next:{title:"bot.onLeave",permalink:"/docs/5.5.5/events/bot.onleave"}},l={},c=[{value:"Usage:",id:"usage",level:4},{value:"Example Command:",id:"example-command",level:4}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Callback that triggers every time a user joins a server."),(0,o.kt)("h4",{id:"usage"},"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.joinCommand({ //command\nchannel: "channel id", //channel where it will log\ncode: `your code` //Message sent to <channel>\n})\n')),(0,o.kt)("p",null,"Make sure the ","`","channel","`"," is in the server. So recommended to use server variables (if your bot isn't for 1 server)"),(0,o.kt)("h4",{id:"example-command"},"Example Command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.joinCommand({ \nchannel: "782446718704812032", \ncode: `\nWelcome to $serverName, $username!\n`\n/*\nCode Breakdown\n$serverName - The name of the server the user joined\n$username - The user who joined the server\n*/\n}) \n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GUILD_MEMBERS")," intent needed! Information in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.5.5/other/gateway-intents"},"Gateway Intents")," guide."),(0,o.kt)("p",null,"You can use all guild and member based functions like ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.5.5/functions/servername"},"$serverName")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.5.5/functions/guildid"},"$guildID")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.5.5/functions/username"},"$username")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.5.5/functions/authorid"},"$authorID")," in these commands."))}p.isMDXComponent=!0}}]);