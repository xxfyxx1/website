"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[31376],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),u=o,b=p["".concat(l,".").concat(u)]||p[u]||m[u]||a;return n?r.createElement(b,c(c({ref:t},d),{},{components:n})):r.createElement(b,c({ref:t},d))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51904:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>w,frontMatter:()=>b,metadata:()=>y,toc:()=>g});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&d(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&d(e,n,t[n]);return e},m=(e,t)=>a(e,c(t)),u=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const b={title:"bot.readyCommand",description:"A command that gets executed by the bot, if the bot is back online (after bot was restarted) and connected to Discord again."},f=void 0,y={unversionedId:"events/bot.onready",id:"version-5.5.5/events/bot.onready",title:"bot.readyCommand",description:"A command that gets executed by the bot, if the bot is back online (after bot was restarted) and connected to Discord again.",source:"@site/versioned_docs/version-5.5.5/events/bot.onready.md",sourceDirName:"events",slug:"/events/bot.onready",permalink:"/uk/docs/5.5.5/events/bot.onready",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"bot.readyCommand",description:"A command that gets executed by the bot, if the bot is back online (after bot was restarted) and connected to Discord again."},sidebar:"docs",previous:{title:"bot.onReactionRemove",permalink:"/uk/docs/5.5.5/events/bot.onreactionremove"},next:{title:"bot.onRoleCreate",permalink:"/uk/docs/5.5.5/events/bot.onrolecreate"}},v={},g=[{value:"Usage:",id:"usage",level:4},{value:"Example command:",id:"example-command",level:4}],h={toc:g},O="wrapper";function w(e){var t=e,{components:n}=t,o=u(t,["components"]);return(0,r.kt)(O,m(p(p({},h),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This command will have the bot send a given message to the given channel when it turns online."),(0,r.kt)("h4",p({},{id:"usage"}),"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.readyCommand({ //command\n    channel: "channel ID", //The channel where the bot will log\n    code: `your code` //Message sent to <channel>\n})\n')),(0,r.kt)("h4",p({},{id:"example-command"}),"Example command:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.readyCommand({\n    channel: "772414449839636490",\n    code: `I\'m online and ready!`\n})\n')))}w.isMDXComponent=!0}}]);