"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[86466],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),f=a,u=c["".concat(s,".").concat(f)]||c[f]||m[f]||o;return n?r.createElement(u,i(i({ref:t},d),{},{components:n})):r.createElement(u,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},87414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>b,default:()=>v,frontMatter:()=>u,metadata:()=>g,toc:()=>h});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&d(e,n,t[n]);return e},m=(e,t)=>o(e,i(t)),f=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const u={title:"$editWebhookMessage",description:"Used to edit the message sent by the specified webhook."},b=void 0,g={unversionedId:"functions/editwebhookmessage",id:"version-5.5.5/functions/editwebhookmessage",title:"$editWebhookMessage",description:"Used to edit the message sent by the specified webhook.",source:"@site/versioned_docs/version-5.5.5/functions/editwebhookmessage.md",sourceDirName:"functions",slug:"/functions/editwebhookmessage",permalink:"/es/docs/5.5.5/functions/editwebhookmessage",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$editWebhookMessage",description:"Used to edit the message sent by the specified webhook."},sidebar:"docs",previous:{title:"$editTextSplitElement",permalink:"/es/docs/5.5.5/functions/edittextsplitelement"},next:{title:"$emoji",permalink:"/es/docs/5.5.5/functions/emoji"}},k={},h=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Examples",id:"examples",level:2}],y={toc:h},N="wrapper";function v(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(N,m(c(c({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function will edit the message sent by the specified webhook."),(0,r.kt)("h3",c({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$editWebhookMessage[id;token;messageID;message;returnID?]\n")),(0,r.kt)("h3",c({},{id:"fields"}),"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",c({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",c({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"id"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"The id of the webhook"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"token"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"The token of the webhook"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"alphanumeric"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"messageID"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"The id of the message to be edited"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"The new message that is to be added"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"string"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"returnID"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"Whether to return the id of the message sent"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"yes/no"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"no")))),(0,r.kt)("h2",c({},{id:"examples"}),"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "edit",\n  code: `\n$editWebhookMessage[793312378162642975;paNWUYLC22oL-t2hbYeu3zrwWXNfVxjn4TmDDVTISNVRbytCbptYM4DETJDTPzG-1JcA;$messageID;This is a new message;no]\n  `\n}); /*\nHow to find your webhookID/Token\nurl: https://ptb.discordapp.com/api/webhooks/793312378162642975/paNWUYLC22oL-t2hbYeu3zrwWXNfVxjn4TmDDVTISNVRbytCbptYM4DETJDTPzG-1JcA\nYour ID: 793312378162642975\nYour Token: paNWUYLC22oL-t2hbYeu3zrwWXNfVxjn4TmDDVTISNVRbytCbptYM4DETJDTPzG-1JcA\n*/\n\n')))}v.isMDXComponent=!0}}]);