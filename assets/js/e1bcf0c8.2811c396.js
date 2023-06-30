"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[97946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Setup",description:"Ready to begin using aoi.js, this is the basic setup you'll need to begin using aoi.js.",id:"setup"},i=void 0,s={unversionedId:"guides/setup",id:"version-6.2.6/guides/setup",title:"Setup",description:"Ready to begin using aoi.js, this is the basic setup you'll need to begin using aoi.js.",source:"@site/versioned_docs/version-6.2.6/guides/1setup.md",sourceDirName:"guides",slug:"/guides/setup",permalink:"/docs/guides/setup",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1688131310,formattedLastUpdatedAt:"Jun 30, 2023",frontMatter:{title:"Setup",description:"Ready to begin using aoi.js, this is the basic setup you'll need to begin using aoi.js.",id:"setup"},sidebar:"docs",previous:{title:"Welcome to aoi.js Documentation",permalink:"/docs/"},next:{title:"Client Events",permalink:"/docs/guides/events"}},l={},p=[{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},c=u("Tabs"),d=u("TabItem"),m={toc:p},g="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(c,{groupId:"pref-install",mdxType:"Tabs"},(0,a.kt)(d,{value:"i-npm",label:"npm",mdxType:"TabItem"},(0,a.kt)("p",null,"  ",(0,a.kt)("strong",{parentName:"p"},"node.js 16.9.0 or newer is required.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install aoi.js\n"))),(0,a.kt)(d,{value:"i-yarn",label:"yarn",mdxType:"TabItem"},(0,a.kt)("p",null,"  ",(0,a.kt)("strong",{parentName:"p"},"node.js 16.9.0 or newer is required.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add aoi.js\n")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'const { AoiClient } = require("aoi.js");\n\nconst bot = new AoiClient({\n    token: "Discord Bot Token",\n    prefix: "Discord Bot Prefix",\n    intents: ["MessageContent", "Guilds", "GuildMessages"],\n    events: ["onMessage", "onInteractionCreate"],\n    database: {\n        type: "aoi.db",\n        db: require("@akarui/aoi.db"),\n        tables: ["main"],\n        path: "./database/",\n        extraOptions: {\n            dbType: "KeyValue"\n        }\n    }\n});\n\n// Ping Command Example\nbot.command({\n    name: "ping",\n    code: `Pong! $pingms`\n});\n\n/* Slash Interaction Command Example (ping)\nYou must execute the function below for the slash command to work:\n$createApplicationCommand[$guildID;ping;Pong!;true;slash]\n*/\n\nbot.interactionCommand({\n    name: "ping",\n    prototype: "slash",\n    code: `$interactionReply[Pong! $pingms;;;;everyone;false]`\n});\n')))}b.isMDXComponent=!0}}]);