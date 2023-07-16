"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[12162],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(t),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[m]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},72175:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>y,default:()=>j,frontMatter:()=>f,metadata:()=>b,toc:()=>O});var r=t(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,l=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&l(e,t,n[t]);if(s)for(var t of s(n))u.call(n,t)&&l(e,t,n[t]);return e},p=(e,n)=>i(e,a(n)),d=(e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&s)for(var r of s(e))n.indexOf(r)<0&&u.call(e,r)&&(t[r]=e[r]);return t};const f={title:"$mentionedUsersCount",description:"Returns amount of mentioned users in the command's message."},y=void 0,b={unversionedId:"functions/mentioneduserscount",id:"version-5.5.5/functions/mentioneduserscount",title:"$mentionedUsersCount",description:"Returns amount of mentioned users in the command's message.",source:"@site/versioned_docs/version-5.5.5/functions/mentioneduserscount.md",sourceDirName:"functions",slug:"/functions/mentioneduserscount",permalink:"/tr/docs/5.5.5/functions/mentioneduserscount",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 Tem 2023",frontMatter:{title:"$mentionedUsersCount",description:"Returns amount of mentioned users in the command's message."},sidebar:"docs",previous:{title:"$mentionedRolesCount",permalink:"/tr/docs/5.5.5/functions/mentionedrolescount"},next:{title:"$mentionType",permalink:"/tr/docs/5.5.5/functions/mentiontype"}},v={},O=[{value:"Example Commnd:",id:"example-commnd",level:4}],g={toc:O},h="wrapper";function j(e){var n=e,{components:t}=n,o=d(n,["components"]);return(0,r.kt)(h,p(m(m({},g),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"With this function you can check how many user mentions in the command's message are."),(0,r.kt)("p",null,"Raw usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$mentionedUsersCount")),(0,r.kt)("h4",m({},{id:"example-commnd"}),"Example Commnd:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-text"}),'bot.command({\nname: "channelmentions",\ncode: `\nYou have mentioned $mentionedUsersCount users in your message.`\n});\n')))}j.isMDXComponent=!0}}]);