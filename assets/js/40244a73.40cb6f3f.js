"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[35061],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),m=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||p[d]||r;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var m=2;m<r;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var o=n(87462),a=(n(67294),n(3905));const r={title:"$allEmojiCount"},i=void 0,l={unversionedId:"functions/allemojicount",id:"version-5.5.5/functions/allemojicount",title:"$allEmojiCount",description:"This function returns the total amount of emojis the servers the bot is in have. This is the sum of all custom emojis of all servers the bot is member of.",source:"@site/versioned_docs/version-5.5.5/functions/allemojicount.md",sourceDirName:"functions",slug:"/functions/allemojicount",permalink:"/docs/5.5.5/functions/allemojicount",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687300612,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$allEmojiCount"},sidebar:"docs",previous:{title:"$allChannelsCount",permalink:"/docs/5.5.5/functions/allchannelscount"},next:{title:"$allMembersCount",permalink:"/docs/5.5.5/functions/allmemberscount"}},s={},m=[{value:"Types:",id:"types",level:4},{value:"Total emoji count:",id:"total-emoji-count",level:4},{value:"Animated Emojis:",id:"animated-emojis",level:4},{value:"normal Emojis:",id:"normal-emojis",level:4}],u={toc:m},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function returns the total amount of emojis the servers the bot is in have. This is the sum of all custom emojis of all servers the bot is member of."),(0,a.kt)("p",null,"Raw usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"$allEmojiCount[type (optional)]")),(0,a.kt)("h4",{id:"types"},"Types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"all")," or empty field => returns total amount of custom emojis the bot has access to (animated and normal)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"animated")," => returns amount of non-animated custom emojis emojis"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"normal")," => returns amount of non-animated custom emojis emojis")),(0,a.kt)("h4",{id:"total-emoji-count"},"Total emoji count:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "emojiCount",\ncode: `$allEmojiCount emojis`\n})\n')),(0,a.kt)("h4",{id:"animated-emojis"},"Animated Emojis:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "emojiCount",\ncode: `$allEmojiCount[animated] emojis`\n})\n')),(0,a.kt)("h4",{id:"normal-emojis"},"normal Emojis:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "emojiCount",\ncode: `$allEmojiCount[animated] emojis`\n})\n')))}p.isMDXComponent=!0}}]);