"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[11123],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,g=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return t?r.createElement(g,i(i({ref:n},d),{},{components:t})):r.createElement(g,i({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},53783:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const o={title:"Serverinfo command",description:"Requires GuildPresences in intents",authors:{name:"@arkwell",title:"Member",url:"https://discord.com/users/405070001356275712",image_url:"https://cdn.discordapp.com/avatars/405070001356275712/a_4eba9c78ecdc4cf568a3ec1a03d52db4.png"},tags:["v6","aoi.js"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},i=void 0,l={permalink:"/wikis/posts/serverinfo-command-6bdeo",source:"@site/forums/posts/serverinfo-command-6bdeo.md",title:"Serverinfo command",description:"Requires GuildPresences in intents",date:"2023-06-20T22:36:52.000Z",formattedDate:"June 20, 2023",tags:[{label:"v6",permalink:"/wikis/tags/v-6"},{label:"aoi.js",permalink:"/wikis/tags/aoi-js"}],hasTruncateMarker:!1,authors:[{name:"@arkwell",title:"Member",url:"https://discord.com/users/405070001356275712",image_url:"https://cdn.discordapp.com/avatars/405070001356275712/a_4eba9c78ecdc4cf568a3ec1a03d52db4.png",imageURL:"https://cdn.discordapp.com/avatars/405070001356275712/a_4eba9c78ecdc4cf568a3ec1a03d52db4.png"}],frontMatter:{title:"Serverinfo command",description:"Requires GuildPresences in intents",authors:{name:"@arkwell",title:"Member",url:"https://discord.com/users/405070001356275712",image_url:"https://cdn.discordapp.com/avatars/405070001356275712/a_4eba9c78ecdc4cf568a3ec1a03d52db4.png",imageURL:"https://cdn.discordapp.com/avatars/405070001356275712/a_4eba9c78ecdc4cf568a3ec1a03d52db4.png"},tags:["v6","aoi.js"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Roblox group info command",permalink:"/wikis/posts/roblox-group-info-command-ebigj"},nextItem:{title:"Translate",permalink:"/wikis/posts/translate-qalbzj"}},c={authorsImageUrls:[void 0]},s=[],d={toc:s},u="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = [{\n    name: "serverinfo",\n    code: `\n$addField[Channels;Total: $channelCount[$guildID]\nText: $channelCount[$guildID;Text]\nVoice: $channelCount[$guildID;Voice]\nCategory: $channelCount[$guildID;Category]\nNews: $channelCount[$guildID;Announcement]\nThreads: $channelCount[$guildID;PublicThread]]\n$addField[Emojis;Total: $emojiCount[$guildID]]\n$addField[Roles;$roleCount[$guildID;true]]\n$addField[Members;Total: $membersCount[$guildID]\nHumans: $membersCount[$guildID;all;false]\nBots: $sub[$membersCount[$guildID;all;true];$membersCount[$guildID;all;false]]\nOnline: $membersCount[$guildID;online;true]]\n$addField[Boosts;$guildBoostCount[$guildID] (Level $guildBoostLevel[$guildID])]\n$addField[Creation;$creationDate[$guildID;time]]\n$addField[Guild ID;$guildID]\n$addField[Owner;<@$ownerID[$guildID]>]\n$title[Server Information - $guildName[$guildID]]\n  `\n}]; \n')))}p.isMDXComponent=!0}}]);