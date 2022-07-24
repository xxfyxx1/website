"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[88212],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,d=p["".concat(l,".").concat(f)]||p[f]||c[f]||a;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},26234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"$membersCount",description:"Returns the amount of members, in the current Guild."},i=void 0,u={unversionedId:"functions/memberscount",id:"version-5.5.5/functions/memberscount",title:"$membersCount",description:"Returns the amount of members, in the current Guild.",source:"@site/versioned_docs/version-5.5.5/functions/memberscount.md",sourceDirName:"functions",slug:"/functions/memberscount",permalink:"/docs/functions/memberscount",draft:!1,tags:[],version:"5.5.5",frontMatter:{title:"$membersCount",description:"Returns the amount of members, in the current Guild."},sidebar:"docs",previous:{title:"$memberJoinPosition",permalink:"/docs/functions/memberjoinposition"},next:{title:"$mentioned",permalink:"/docs/functions/mentioned"}},l={},s=[{value:"Usage",id:"usage",level:3},{value:"Member Count of a certain status",id:"member-count-of-a-certain-status",level:2}],m={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function returns the amount of members in the current guild"),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$membersCount[guildID (optional);status (optional);countBots (optional)(yes/no)]\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "info",\ncode: `Members: $membersCount`\n})\n')),(0,o.kt)("p",null,"This only works in Guilds, otherwise will return an error.",(0,o.kt)("br",{parentName:"p"}),"\n","Prototype: $allMembersCount"),(0,o.kt)("h2",{id:"member-count-of-a-certain-status"},"Member Count of a certain status"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"$membersCount","[","$guildID;online","]"," - returns the amount of online people in the guild."),(0,o.kt)("li",{parentName:"ul"},"$membersCount","[","$guildID;Idle","]"," - returns the amount of idle people in the guild."),(0,o.kt)("li",{parentName:"ul"},"$membersCount","[","$guildID;dnd","]"," - returns the amount of  people in the guild."),(0,o.kt)("li",{parentName:"ul"},"$membersCount","[","$guildID;offline","]"," - returns the amount of offline people in the guild."),(0,o.kt)("li",{parentName:"ul"},"$membersCount","[","$guildID;all;no","]"," - returns the amount of all the humans in the guild.")),(0,o.kt)("p",null,"Show all users excluding bots:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "info",\ncode: `Members: $membersCount[$guildID;all;no]`\n})\n')))}c.isMDXComponent=!0}}]);