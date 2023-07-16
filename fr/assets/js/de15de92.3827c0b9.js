"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[70898],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||l;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},72563:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>O,frontMatter:()=>d,metadata:()=>g,toc:()=>y});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>l(e,o(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const d={title:"$hasPermsInChannel",description:"Checks whether the specified user or role has given perms"},h=void 0,g={unversionedId:"functions/haspermsinchannel",id:"version-5.5.5/functions/haspermsinchannel",title:"$hasPermsInChannel",description:"Checks whether the specified user or role has given perms",source:"@site/versioned_docs/version-5.5.5/functions/haspermsinchannel.md",sourceDirName:"functions",slug:"/functions/haspermsinchannel",permalink:"/fr/docs/5.5.5/functions/haspermsinchannel",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 juil. 2023",frontMatter:{title:"$hasPermsInChannel",description:"Checks whether the specified user or role has given perms"},sidebar:"docs",previous:{title:"$hasPerms",permalink:"/fr/docs/5.5.5/functions/hasperms"},next:{title:"$hasRoles",permalink:"/fr/docs/5.5.5/functions/hasroles"}},k={},y=[{value:"Usage",id:"usage",level:2},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2}],b={toc:y},v="wrapper";function O(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(v,u(m(m({},b),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns whether or not the specified user/role has the given perms in the specified channel. Returns boolean."),(0,n.kt)("h2",m({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$hasPermsInChannel[channelID;uorrID;perms...]\n")),(0,n.kt)("h3",m({},{id:"fields"}),"Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",m({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",m({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:"left"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"channel ID"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"The id of the channel"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"uorr ID"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"The id of the role or user whose perms are to be checked"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"perms"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"The perms that are to be checked"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"str & num"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"yes")))),(0,n.kt)("h2",m({},{id:"example"}),"Example"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"With user ID")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "has-perm",\n  code: `\n  $hasPermsInChannel[$channelID;$userID[Ayaka];admin]\n  `\n});\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"With role ID")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "has-perm",\n  code: `\n  $hasPermsInChannel[$channelID;$roleID[Developer];admin]\n  `\n});\n')))}O.isMDXComponent=!0}}]);