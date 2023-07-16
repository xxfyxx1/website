"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[74715],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66139:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>N,frontMatter:()=>h,metadata:()=>v,toc:()=>k});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e},u=(e,t)=>o(e,i(t)),m=(e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n};const h={title:"bot.onVoiceStateUpdate",description:"An event that gets executed, if the bot sees a user updating their voice status. To let the bot listen to the event, add one bot.onVoiceStateUpdate() callback inside your mainfile."},f=void 0,v={unversionedId:"events/bot.onvoicestateupdate",id:"version-5.5.5/events/bot.onvoicestateupdate",title:"bot.onVoiceStateUpdate",description:"An event that gets executed, if the bot sees a user updating their voice status. To let the bot listen to the event, add one bot.onVoiceStateUpdate() callback inside your mainfile.",source:"@site/versioned_docs/version-5.5.5/events/bot.onvoicestateupdate.md",sourceDirName:"events",slug:"/events/bot.onvoicestateupdate",permalink:"/ar/docs/5.5.5/events/bot.onvoicestateupdate",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"\u0661\u0666 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"bot.onVoiceStateUpdate",description:"An event that gets executed, if the bot sees a user updating their voice status. To let the bot listen to the event, add one bot.onVoiceStateUpdate() callback inside your mainfile."},sidebar:"docs",previous:{title:"bot.onUserUpdate",permalink:"/ar/docs/5.5.5/events/bot.onuserupdate"},next:{title:"Hyperlink",permalink:"/ar/docs/5.5.5/other/hyperlink"}},b={},k=[{value:"Usage:",id:"usage",level:4},{value:"Example Command:",id:"example-command",level:4},{value:"Options:",id:"options",level:4}],g={toc:k},y="wrapper";function N(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,a.kt)(y,u(d(d({},g),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This callback triggers whenever someone joins a voice channel, leaves a voice channel or updates their vc options. "),(0,a.kt)("h4",d({},{id:"usage"}),"Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.voiceStateUpdateCommand({ //Command\nchannel: "id" // Log Channel\ncode: `code` //Your code\n})\n')),(0,a.kt)("h4",d({},{id:"example-command"}),"Example Command:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.voiceStateUpdateCommand({ \nchannel: "772414449839636490" \ncode: `\n$userTag[$newState[id]] has joined the vc $newState[channelName]\n$onlyIf[$newState[channelID]!=;]\n$onlyIf[$oldState[channelID]==;]\n` \n})\n')),(0,a.kt)("h4",d({},{id:"options"}),"Options:"),(0,a.kt)("p",null,"You can use the functions $newState","[","]"," and $oldState","[","]"," with the options below to return old and new voice state data."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"guildID")," =",">"," The ID of the guild the voice state update happened in "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"guildName")," =",">"," The name of the guild this voice state update happened"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," =",">"," The name of the user that updated its voice state "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id")," =",">"," The ID of the user that updated its voice state"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"channelID")," =",">"," The ID of the voice channel this voice state update occurred in"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"channelName")," =",">"," The name of the voice channel this voice state update occurred in"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"serverDeaf")," =",">"," Whether the user is server deafened"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"selfDeaf")," =",">"," Whether the user is self deafened"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"selfMute")," =",">"," Whether the user is self muted"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"serverMute")," =",">"," Whether the user is server muted"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sessionID")," =",">"," The ID of this voice session"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"streaming")," =",">"," Whether this user is streaming"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"deaf"),"=",">"," Whether the user is either self-deafened or server-deafened"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mute")," =",">"," Whether the user is either self-muted or server-muted"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"speaking")," =",">"," Whether the user is speaking")))}N.isMDXComponent=!0}}]);