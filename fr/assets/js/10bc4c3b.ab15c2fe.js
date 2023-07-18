"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[66970],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(t),d=a,m=s["".concat(c,".").concat(d)]||s[d]||f[d]||l;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},11814:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>h,default:()=>k,frontMatter:()=>m,metadata:()=>y,toc:()=>v});var r=t(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,s=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&u(e,t,n[t]);if(i)for(var t of i(n))p.call(n,t)&&u(e,t,n[t]);return e},f=(e,n)=>l(e,o(n)),d=(e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t};const m={title:"$channelID",description:"$channelID will return the channel ID of the given channel name.",id:"channelID"},h=void 0,y={unversionedId:"functions/info-related/channelID",id:"version-6.4.0/functions/info-related/channelID",title:"$channelID",description:"$channelID will return the channel ID of the given channel name.",source:"@site/versioned_docs/version-6.4.0/functions/info-related/channelID.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/channelID",permalink:"/fr/docs/functions/info-related/channelID",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689718489,formattedLastUpdatedAt:"18 juil. 2023",frontMatter:{title:"$channelID",description:"$channelID will return the channel ID of the given channel name.",id:"channelID"},sidebar:"docs",previous:{title:"$channelCount",permalink:"/fr/docs/functions/info-related/channelCount"},next:{title:"$channelNSFW",permalink:"/fr/docs/functions/info-related/channelNSFW"}},g={},v=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],b={toc:v},O="wrapper";function k(e){var n=e,{components:t}=n,a=d(n,["components"]);return(0,r.kt)(O,f(s(s({},b),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$channelID")," will return the channel ID of the given channel name."),(0,r.kt)("h2",s({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$channelID[name?]\n")),(0,r.kt)("h2",s({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",s({parentName:"tr"},{align:"center"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"name?"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"integer"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Channel name of the channel you want the channel ID of."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"false")))),(0,r.kt)("h2",s({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will return the channel ID of the channel where you execute the command in:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'channelID',\n    code: `\n  $channelID\n  `\n});\n")))}k.isMDXComponent=!0}}]);