"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[31690],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=l,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>k,frontMatter:()=>m,metadata:()=>y,toc:()=>C});var a=n(3905),l=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&u(e,n,t[n]);return e},f=(e,t)=>r(e,o(t)),d=(e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n};const m={title:"$allChannelsCount",description:"Returns the amount of all the channels of all the guilds your bot is in."},h=void 0,y={unversionedId:"functions/allchannelscount",id:"version-5.5.5/functions/allchannelscount",title:"$allChannelsCount",description:"Returns the amount of all the channels of all the guilds your bot is in.",source:"@site/versioned_docs/version-5.5.5/functions/allchannelscount.md",sourceDirName:"functions",slug:"/functions/allchannelscount",permalink:"/ru/docs/5.5.5/functions/allchannelscount",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689539854,formattedLastUpdatedAt:"16 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$allChannelsCount",description:"Returns the amount of all the channels of all the guilds your bot is in."},sidebar:"docs",previous:{title:"$advanceCooldown",permalink:"/ru/docs/5.5.5/functions/advancecooldown"},next:{title:"$allEmojiCount",permalink:"/ru/docs/5.5.5/functions/allemojicount"}},g={},C=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Types",id:"types",level:4},{value:"Example",id:"example",level:2}],b={toc:C},v="wrapper";function k(e){var t=e,{components:n}=t,l=d(t,["components"]);return(0,a.kt)(v,f(p(p({},b),l),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function returns the amount of channels the bot has access to globally. You can optionally pass types of channels to count."),(0,a.kt)("h3",p({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$allChannelsCount[type?]\n")),(0,a.kt)("h3",p({},{id:"fields"}),"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",p({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",p({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",p({parentName:"tr"},{align:"left"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"left"}),"type"),(0,a.kt)("td",p({parentName:"tr"},{align:"left"}),"The channel types of specific one to get"),(0,a.kt)("td",p({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",p({parentName:"tr"},{align:"left"}),"no")))),(0,a.kt)("h4",p({},{id:"types"}),"Types"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Category")," \u2014 Shows Amount of Categories"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"News")," \u2014 Shows Amount of Announcement Type Channels"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PublicThread")," \u2014 Shows Amount of Public Threads"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PrivateThread")," \u2014 Shows Amount of Private Threads"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Stage")," \u2014 Shows Amount of Stage Channels"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Text")," \u2014 Shows Amount of Text Channels"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Voice")," \u2014 Shows Amount of Voice Channels")),(0,a.kt)("h2",p({},{id:"example"}),"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "all-channel-count",\n  code: `\n  $allChannelsCount Channels\n    \u2192 $allChannelsCount[Category] Categories\n    \u2192 $allChannelsCount[Text] Text Channels\n    \u2192 $allChannelsCount[Voice] Voice Channels\n    \u2192 $allChannelsCount[News] Announcement Channels\n    \u2192 $allChannelsCount[PublicThread] Public Thread Channels\n    \u2192 $allChannelsCount[PrivateThread] Private Thread Channels\n    \u2192 $allChannelsCount[Stage] Stage Channels\n  `\n});\n')))}k.isMDXComponent=!0}}]);