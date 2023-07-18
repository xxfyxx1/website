"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[77179],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),o=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=o(t.components);return n.createElement(m.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),p=o(a),k=r,g=p["".concat(m,".").concat(k)]||p[k]||u[k]||l;return a?n.createElement(g,i(i({ref:e},d),{},{components:a})):n.createElement(g,i({ref:e},d))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var s={};for(var m in e)hasOwnProperty.call(e,m)&&(s[m]=e[m]);s.originalType=t,s[p]="string"==typeof t?t:r,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},48725:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>h,contentTitle:()=>c,default:()=>f,frontMatter:()=>g,metadata:()=>N,toc:()=>b});var n=a(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,d=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,p=(t,e)=>{for(var a in e||(e={}))m.call(e,a)&&d(t,a,e[a]);if(s)for(var a of s(e))o.call(e,a)&&d(t,a,e[a]);return t},u=(t,e)=>l(t,i(e)),k=(t,e)=>{var a={};for(var n in t)m.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&s)for(var n of s(t))e.indexOf(n)<0&&o.call(t,n)&&(a[n]=t[n]);return a};const g={title:"$hasPerms",description:"$hasPerms will check if the user has the required permission.",id:"hasPerms"},c=void 0,N={unversionedId:"functions/util-related/hasPerms",id:"version-6.4.0/functions/util-related/hasPerms",title:"$hasPerms",description:"$hasPerms will check if the user has the required permission.",source:"@site/versioned_docs/version-6.4.0/functions/util-related/hasPerms.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/hasPerms",permalink:"/ru/docs/functions/util-related/hasPerms",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689718489,formattedLastUpdatedAt:"18 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$hasPerms",description:"$hasPerms will check if the user has the required permission.",id:"hasPerms"},sidebar:"docs",previous:{title:"$hasEmbeds",permalink:"/ru/docs/functions/util-related/hasEmbeds"},next:{title:"$hasPermsInChannel",permalink:"/ru/docs/functions/util-related/hasPermsInChannel"}},h={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],y={toc:b},P="wrapper";function f(t){var e=t,{components:a}=e,r=k(e,["components"]);return(0,n.kt)(P,u(p(p({},y),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$hasPerms")," will check if the user has the required permission."),(0,n.kt)("h2",p({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$hasPerms[guildID;userID;...perms]\n")),(0,n.kt)("h2",p({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",p({parentName:"tr"},{align:"center"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"guildID"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"ID of the guild where the client checks the permissions."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"userID"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"ID of the user."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"...perms"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permissions."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"true")))),(0,n.kt)("details",null,(0,n.kt)("summary",null," ",(0,n.kt)("h3",null," Discord API Permissions ")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Permission"),(0,n.kt)("th",p({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"createinvite"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to create guild invites")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"kickmembers"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to kick guild members")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"banmembers"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to ban guild members")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"administrator"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Administrator Permissions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"managechannels"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to manage guild channels")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"manageguild"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permissions to modify server settings")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"addreactions"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permissions to add reactions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"viewauditlog"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to view the guild's audit log")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"priorityspeaker"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Priority Speaker")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"stream"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to stream in voice channels")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"viewchannel"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to view a certain channel")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"sendmessages"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to send messages in a certain channel")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"sendttsmessages"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to send Text-To-Speech messages")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"managemessages"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to manage messages")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"embedlinks"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to embed links")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"attachfiles"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to attach files")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"readmessagehistory"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to read the message history within a certain channel")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"mentioneveryone"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to mention ",(0,n.kt)("inlineCode",{parentName:"td"},"@everyone")," and all roles")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"useexternalemojis"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to use external emojis")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"viewguildinsights"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to view guild insights")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"connect"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to connect to voice channels and stages")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"mutemembers"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to mute members in voice channels")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"deafenmembers"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to deafen members in voice channels")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"movemembers"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to move members between voice channels")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"usevad"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to use voice-activity-detection")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"changenickname"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to change your own nickname")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"managenicknames"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to manage other members nicknames")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"manageroles"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to manage roles")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"managewebhooks"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to manage webhooks")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"manageemojisandstickers"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to manage emojis and stickers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"useapplicationcommands"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to use application commands")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"requesttospeak"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to use request-to-speak in stages")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"manageevents"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to manage events")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"managethreads"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to manage threads")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"usepublicthreads"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to use public threads")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"useprivatethreads"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to use private threads")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"createpublicthreads"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to create public threads")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"createprivatethreads"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to create private threads")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"useexternalstickers"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to use extrernal stickers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"sendmessagesinthreads"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to send messages in threads")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"useembeddedactivities"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to start activities within voice channels")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"moderatemembers"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Permission to timeout and remove timeouts from guild members"))))),(0,n.kt)("h2",p({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,"This will return ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," when the author has ",(0,n.kt)("inlineCode",{parentName:"p"},"kick")," permissions and return ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," when they don't have those:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'hasPerms',\n    code: `\n  $hasPerms[$guildID;$authorID;kick]\n  `\n});\n")))}f.isMDXComponent=!0}}]);