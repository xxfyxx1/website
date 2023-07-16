"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[43415],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||l;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},37448:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>N,frontMatter:()=>d,metadata:()=>k,toc:()=>y});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))p.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>l(e,i(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const d={title:"$clear",description:"Clears up to 100 messages newer than 2 weeks. Clears more than 100 only if user filter is used."},g=void 0,k={unversionedId:"functions/clear",id:"version-5.5.5/functions/clear",title:"$clear",description:"Clears up to 100 messages newer than 2 weeks. Clears more than 100 only if user filter is used.",source:"@site/versioned_docs/version-5.5.5/functions/clear.md",sourceDirName:"functions",slug:"/functions/clear",permalink:"/hi/docs/5.5.5/functions/clear",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$clear",description:"Clears up to 100 messages newer than 2 weeks. Clears more than 100 only if user filter is used."},sidebar:"docs",previous:{title:"$checkContains",permalink:"/hi/docs/5.5.5/functions/checkcontains"},next:{title:"$clearQueue",permalink:"/hi/docs/5.5.5/functions/clearqueue"}},h={},y=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Types of user filters",id:"types-of-user-filters",level:4},{value:"Example",id:"example",level:2}],b={toc:y},v="wrapper";function N(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(v,m(u(u({},b),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function clears the specified amount of messages from the given channel"),(0,n.kt)("h3",u({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$clear[amt;userFilter?;return_amount?;channelID?]\n")),(0,n.kt)("h3",u({},{id:"fields"}),"Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",u({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",u({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:"left"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"amt"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"The amount of messages to be deleted"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"userFilter"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"The user the bot is deleting messages from"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"returnAmount"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"Returns the amount of deleted messages"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"yes/no"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"channel ID"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"The channel the bot is deleting messages from"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"no")))),(0,n.kt)("h4",u({},{id:"types-of-user-filters"}),"Types of user filters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"unPins")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bot")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"everyone")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"userId"))),(0,n.kt)("h2",u({},{id:"example"}),"Example"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Without Optional Fields")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "clear",\n  code: `$clear[50]`\n  //This will delete 50 latest messages from the current channel\n});\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"With Optional Fields")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "clear",\n    code: `$clear[50;$authorID;yes;$channelID]`\n    //This will search in the latest 50 messages and will delete those from the author and returns the amount of deleted messages.\n});\n')))}N.isMDXComponent=!0}}]);