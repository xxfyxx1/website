"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[71136],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,d=c["".concat(l,".").concat(m)]||c[m]||f[m]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98073:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>k,frontMatter:()=>d,metadata:()=>y,toc:()=>g});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))u.call(t,r)&&p(e,r,t[r]);return e},f=(e,t)=>o(e,i(t)),m=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const d={title:"$user"},v=void 0,y={unversionedId:"functions/user",id:"version-5.5.5/functions/user",title:"$user",description:"This function returns the given user's specified property",source:"@site/versioned_docs/version-5.5.5/functions/user.md",sourceDirName:"functions",slug:"/functions/user",permalink:"/hi/docs/5.5.5/functions/user",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$user"},sidebar:"docs",previous:{title:"$useChannel",permalink:"/hi/docs/5.5.5/functions/usechannel"},next:{title:"$userAvatar",permalink:"/hi/docs/5.5.5/functions/useravatar"}},b={},g=[{value:"Usage",id:"usage",level:4},{value:"Options",id:"options",level:4},{value:"Available Properties",id:"available-properties",level:4}],O={toc:g},h="wrapper";function k(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(h,f(c(c({},O),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns the given user's specified property"),(0,n.kt)("h4",c({},{id:"usage"}),"Usage"),(0,n.kt)("p",null,"This function has 2 fields"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"User ID ","(","Required",")"),(0,n.kt)("li",{parentName:"ol"},"Property ","(","Required",")")),(0,n.kt)("p",null,"Raw Usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"$user[userID;property]")),(0,n.kt)("h4",c({},{id:"options"}),"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"User ID - The user the properties are based off of"),(0,n.kt)("li",{parentName:"ul"},"Property - The property we're getting from ","<","user",">")),(0,n.kt)("h4",c({},{id:"available-properties"}),"Available Properties"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"name - User's name"),(0,n.kt)("li",{parentName:"ul"},"id - User's ID"),(0,n.kt)("li",{parentName:"ul"},"tag - User's Tag"),(0,n.kt)("li",{parentName:"ul"},"discrim - User's discriminator"),(0,n.kt)("li",{parentName:"ul"},"mention - User's mention"),(0,n.kt)("li",{parentName:"ul"},"avatar - User's avatar URL"),(0,n.kt)("li",{parentName:"ul"},"isbot - Whether or not the user is a bot, Return's Boolean"),(0,n.kt)("li",{parentName:"ul"},"istyping - Whether or not the user is typing, Return's Boolean"),(0,n.kt)("li",{parentName:"ul"},"created - User's date and time of creation"),(0,n.kt)("li",{parentName:"ul"},"timestamp - How long ago the user was created"),(0,n.kt)("li",{parentName:"ul"},"lastmessageid - User's last message ID"),(0,n.kt)("li",{parentName:"ul"},"lastmessagechannelid - User's last channel ID")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "user",\ncode: `\n$user[535566311942651924;name]\n`\n})\n\n//Or specified user\n\nbot.command({\nname: "user",\ncode: `\n$user[$mentioned[1];name]\n`\n})\n')))}k.isMDXComponent=!0}}]);