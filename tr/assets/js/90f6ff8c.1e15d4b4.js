"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[86926],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15758:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>k,frontMatter:()=>g,metadata:()=>v,toc:()=>b});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&p(e,n,t[n]);return e},m=(e,t)=>l(e,s(t)),d=(e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const g={title:"$deleteMessage",description:"Delete a message with the given Message ID."},f=void 0,v={unversionedId:"functions/deletemessage",id:"version-5.5.5/functions/deletemessage",title:"$deleteMessage",description:"Delete a message with the given Message ID.",source:"@site/versioned_docs/version-5.5.5/functions/deletemessage.md",sourceDirName:"functions",slug:"/functions/deletemessage",permalink:"/tr/docs/5.5.5/functions/deletemessage",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 Tem 2023",frontMatter:{title:"$deleteMessage",description:"Delete a message with the given Message ID."},sidebar:"docs",previous:{title:"$deleteInvite",permalink:"/tr/docs/5.5.5/functions/deleteinvite"},next:{title:"$deleteMessageVar",permalink:"/tr/docs/5.5.5/functions/deletemessagevar"}},y={},b=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Example(s)",id:"examples",level:3}],h={toc:b},O="wrapper";function k(e){var t=e,{components:n}=t,a=d(t,["components"]);return(0,r.kt)(O,m(u(u({},h),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function deletes a message with the given message ID from the specified channel ID."),(0,r.kt)("h3",u({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$deleteMessage[messageID;channelID]\n")),(0,r.kt)("h3",u({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"FIELD"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"TYPE"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"MessageID"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"The ID of the message we are deleting")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"ChannelID"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"integer"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"The channel we're the message is")))),(0,r.kt)("h3",u({},{id:"examples"}),"Example(s)"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "delete-me",\ncode: `Deleted the message!\n$deleteMessage[$messageID;$channelID]\n`\n})\n')))}k.isMDXComponent=!0}}]);