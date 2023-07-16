"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[30066],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),m=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=m(r),f=n,d=s["".concat(p,".").concat(f)]||s[f]||u[f]||o;return r?a.createElement(d,i(i({ref:t},c),{},{components:r})):a.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},30782:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>h,frontMatter:()=>d,metadata:()=>k,toc:()=>g});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))m.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>o(e,i(t)),f=(e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&m.call(e,a)&&(r[a]=e[a]);return r};const d={title:"$formatDate"},y=void 0,k={unversionedId:"functions/formatdate",id:"version-5.5.5/functions/formatdate",title:"$formatDate",description:"This function formats a specified time to the given format",source:"@site/versioned_docs/version-5.5.5/functions/formatdate.md",sourceDirName:"functions",slug:"/functions/formatdate",permalink:"/fr/docs/5.5.5/functions/formatdate",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 juil. 2023",frontMatter:{title:"$formatDate"},sidebar:"docs",previous:{title:"$forEachUser",permalink:"/fr/docs/5.5.5/functions/foreachuser"},next:{title:"$get",permalink:"/fr/docs/5.5.5/functions/get"}},v={},g=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Time Options",id:"time-options",level:4},{value:"Format Options",id:"format-options",level:4},{value:"Usage",id:"usage",level:4}],O={toc:g},b="wrapper";function h(e){var t=e,{components:r}=t,n=f(t,["components"]);return(0,a.kt)(b,u(s(s({},O),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function formats a specified time to the given format"),(0,a.kt)("h4",s({},{id:"fields"}),"Fields"),(0,a.kt)("p",null,"This function has 1 required field"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Time ","(","Required",")"),(0,a.kt)("li",{parentName:"ol"},"Format ","(","Optional",")")),(0,a.kt)("p",null,"Raw Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"$formatDate[time;format (Optional)]")),(0,a.kt)("h4",s({},{id:"options"}),"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Time - The time to be formatted"),(0,a.kt)("li",{parentName:"ul"},"Format - The format on how you want the date to be returned")),(0,a.kt)("h4",s({},{id:"time-options"}),"Time Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"datestamp - Example: 1615571386000"),(0,a.kt)("li",{parentName:"ul"},"milliseconds - Example: 31556926000ms"),(0,a.kt)("li",{parentName:"ul"},"stringed date - Example: 1/17/2019, 9:09:19 PM"),(0,a.kt)("li",{parentName:"ul"},"ISO String - Example: 2021-3-12T14:48:00.000Z")),(0,a.kt)("h4",s({},{id:"format-options"}),"Format Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Blank ","(","No format provided",")"," - Example: Friday, 12 March 2021"),(0,a.kt)("li",{parentName:"ul"},"LT - Time - Example: 4:01 AM"),(0,a.kt)("li",{parentName:"ul"},"LTS - Time w/ seconds - Example: 3:58:5 AM"),(0,a.kt)("li",{parentName:"ul"},"L - Date - Example: 3/12/2021"),(0,a.kt)("li",{parentName:"ul"},"LLL - Specified Date - Example: March 12 2021 4:02 AM"),(0,a.kt)("li",{parentName:"ul"},"LLLL - - Specified Date w/ Day - Example: Friday, March 12 2021 4:02 AM"),(0,a.kt)("li",{parentName:"ul"},"dddd - Day - Example: Friday"),(0,a.kt)("li",{parentName:"ul"},"HH - Hour - Example: 15"),(0,a.kt)("li",{parentName:"ul"},"For more formats, check ",(0,a.kt)("a",s({parentName:"li"},{href:"https://thecodebarbarian.com/formatting-javascript-dates-with-moment-js.html"}),"here"))),(0,a.kt)("h4",s({},{id:"usage"}),"Usage"),(0,a.kt)("p",null,"Simple Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "formatDate",\ncode: `\n$formatDate[$dateStamp]\n`\n/*\nReturns: \nFriday, 12 March 2021\n*/\n})\n')),(0,a.kt)("p",null,"Usage w/ format options"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "formatDate",\ncode: `\n$formatDate[$dateStamp;LLLL]\n`\n/*\nReturns: \nFriday, March 12 2021 1:00 PM\n*/\n})\n')),(0,a.kt)("p",null,"Usage w/ format options & custom text"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "formatDate",\ncode: `\n$formatDate[$dateStamp;dddd at Hour HH]\n`\n/*\nReturns: \nFriday at Hour 13\n*/\n})\n')))}h.isMDXComponent=!0}}]);