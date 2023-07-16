"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[7589],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=s(t),m=r,u=h["".concat(c,".").concat(m)]||h[m]||d[m]||o;return t?a.createElement(u,l(l({ref:n},p),{},{components:t})):a.createElement(u,l({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[h]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},45567:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>f,default:()=>C,frontMatter:()=>u,metadata:()=>b,toc:()=>y});var a=t(3905),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,h=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&p(e,t,n[t]);if(i)for(var t of i(n))s.call(n,t)&&p(e,t,n[t]);return e},d=(e,n)=>o(e,l(n)),m=(e,n)=>{var t={};for(var a in e)c.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&i)for(var a of i(e))n.indexOf(a)<0&&s.call(e,a)&&(t[a]=e[a]);return t};const u={title:"bot.onChannelCreate",description:"An event that gets executed, if the bot sees a channel creation on a server. To let the bot listen to the event, add one bot.onChannelCreate() callback inside your main file."},f=void 0,b={unversionedId:"events/bot.onchannelcreate",id:"version-5.5.5/events/bot.onchannelcreate",title:"bot.onChannelCreate",description:"An event that gets executed, if the bot sees a channel creation on a server. To let the bot listen to the event, add one bot.onChannelCreate() callback inside your main file.",source:"@site/versioned_docs/version-5.5.5/events/bot.onchannelcreate.md",sourceDirName:"events",slug:"/events/bot.onchannelcreate",permalink:"/fr/docs/5.5.5/events/bot.onchannelcreate",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 juil. 2023",frontMatter:{title:"bot.onChannelCreate",description:"An event that gets executed, if the bot sees a channel creation on a server. To let the bot listen to the event, add one bot.onChannelCreate() callback inside your main file."},sidebar:"docs",previous:{title:"bot.onBanRemove",permalink:"/fr/docs/5.5.5/events/bot.onbanremove"},next:{title:"bot.onChannelDelete",permalink:"/fr/docs/5.5.5/events/bot.onchanneldelete"}},v={},y=[{value:"Usage:",id:"usage",level:4},{value:"Example Command:",id:"example-command",level:4},{value:"Options:",id:"options",level:4}],k={toc:y},g="wrapper";function C(e){var n=e,{components:t}=n,r=m(n,["components"]);return(0,a.kt)(g,d(h(h({},k),r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This command triggers every time a channel gets created on a server."),(0,a.kt)("h4",h({},{id:"usage"}),"Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-javascript"}),'bot.channelCreateCommand({ //Command\nchannel: "channel ID", //Channel where its being logged\ncode: `your code` //Code sent to <channel>\n})\n')),(0,a.kt)("h4",h({},{id:"example-command"}),"Example Command:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-javascript"}),'bot.channelCreateCommand({ \nchannel: "772414449839636490", \ncode: `\nChannel Created:\n$newChannel[name]\n`\n})\n')),(0,a.kt)("h4",h({},{id:"options"}),"Options:"),(0,a.kt)("p",null,"You can use the function ",(0,a.kt)("a",h({parentName:"p"},{href:"/fr/docs/5.5.5/functions/newchannel"}),"$newChannel","[","]"," "),"with the options below to return new channel data:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id")," - The ID of the channel "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," - The name of the channel "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"topic")," - The topic for this channel "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"position")," - The position of the channel "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"categoryID")," - The ID of the category this channel belongs to "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"guildID")," - The ID of the guild this channel belongs to "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lastMessageID")," - The ID of the last message sent here ","(","if any",")"," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type")," - The type of this channel "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nsfw")," - Whether the channel is nsfw or not "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"slowmode")," - The slow mode duration for this channel "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rawPosition")," - The raw position for this channel "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"deleted")," - Whether the channel was deleted or not "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"viewable")," - Whether the channel was be seen by the client or not "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"manageable")," - Whether the client can or not manage this channel "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"deleteable")," - Whether this channel can be deleted by the client or not")))}C.isMDXComponent=!0}}]);