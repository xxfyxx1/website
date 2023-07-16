"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[88212],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[m]="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},58572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>k,frontMatter:()=>d,metadata:()=>g,toc:()=>v});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(u)for(var n of u(t))s.call(t,n)&&c(e,n,t[n]);return e},p=(e,t)=>a(e,i(t)),f=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const d={title:"$membersCount",description:"Returns the amount of members, in the current Guild."},b=void 0,g={unversionedId:"functions/memberscount",id:"version-5.5.5/functions/memberscount",title:"$membersCount",description:"Returns the amount of members, in the current Guild.",source:"@site/versioned_docs/version-5.5.5/functions/memberscount.md",sourceDirName:"functions",slug:"/functions/memberscount",permalink:"/docs/5.5.5/functions/memberscount",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"Jul 16, 2023",frontMatter:{title:"$membersCount",description:"Returns the amount of members, in the current Guild."},sidebar:"docs",previous:{title:"$memberJoinPosition",permalink:"/docs/5.5.5/functions/memberjoinposition"},next:{title:"$mentioned",permalink:"/docs/5.5.5/functions/mentioned"}},y={},v=[{value:"Usage",id:"usage",level:3},{value:"Member Count of a certain status",id:"member-count-of-a-certain-status",level:2}],h={toc:v},O="wrapper";function k(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(O,p(m(m({},h),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns the amount of members in the current guild"),(0,r.kt)("h3",m({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$membersCount[guildID (optional);status (optional);countBots (optional)(yes/no)]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "info",\ncode: `Members: $membersCount`\n})\n')),(0,r.kt)("p",null,"This only works in Guilds, otherwise will return an error.",(0,r.kt)("br",{parentName:"p"}),"\n","Prototype: $allMembersCount"),(0,r.kt)("h2",m({},{id:"member-count-of-a-certain-status"}),"Member Count of a certain status"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"$membersCount","[","$guildID;online","]"," - returns the amount of online people in the guild."),(0,r.kt)("li",{parentName:"ul"},"$membersCount","[","$guildID;Idle","]"," - returns the amount of idle people in the guild."),(0,r.kt)("li",{parentName:"ul"},"$membersCount","[","$guildID;dnd","]"," - returns the amount of  people in the guild."),(0,r.kt)("li",{parentName:"ul"},"$membersCount","[","$guildID;offline","]"," - returns the amount of offline people in the guild."),(0,r.kt)("li",{parentName:"ul"},"$membersCount","[","$guildID;all;no","]"," - returns the amount of all the humans in the guild.")),(0,r.kt)("p",null,"Show all users excluding bots:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "info",\ncode: `Members: $membersCount[$guildID;all;no]`\n})\n')))}k.isMDXComponent=!0}}]);