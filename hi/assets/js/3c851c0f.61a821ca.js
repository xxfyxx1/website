"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[95305],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),d=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(t),s=a,h=p["".concat(u,".").concat(s)]||p[s]||f[s]||l;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=s;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},18691:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>m,default:()=>O,frontMatter:()=>h,metadata:()=>g,toc:()=>b});var r=t(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))u.call(n,t)&&c(e,t,n[t]);if(o)for(var t of o(n))d.call(n,t)&&c(e,t,n[t]);return e},f=(e,n)=>l(e,i(n)),s=(e,n)=>{var t={};for(var r in e)u.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&o)for(var r of o(e))n.indexOf(r)<0&&d.call(e,r)&&(t[r]=e[r]);return t};const h={title:"$findGuildChannel",description:"$findGuildChannel will search a guild channel within a guild.",id:"findGuildChannel"},m=void 0,g={unversionedId:"functions/util-related/findGuildChannel",id:"version-6.4.0/functions/util-related/findGuildChannel",title:"$findGuildChannel",description:"$findGuildChannel will search a guild channel within a guild.",source:"@site/i18n/hi/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/findGuildChannel.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/findGuildChannel",permalink:"/hi/docs/functions/util-related/findGuildChannel",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$findGuildChannel",description:"$findGuildChannel will search a guild channel within a guild.",id:"findGuildChannel"},sidebar:"docs",previous:{title:"$findChannel",permalink:"/hi/docs/functions/util-related/findChannel"},next:{title:"$findNumbers",permalink:"/hi/docs/functions/util-related/findNumbers"}},y={},b=[{value:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917",id:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917",level:2},{value:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938",id:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938",level:2},{value:"\u091f\u094d\u0930\u0942 (\u0939\u093e)",id:"\u091f\u094d\u0930\u0942-\u0939\u093e",level:2}],k={toc:b},v="wrapper";function O(e){var n=e,{components:t}=n,a=s(n,["components"]);return(0,r.kt)(v,f(p(p({},k),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$findGuildChannel")," will search a guild channel within a guild."),(0,r.kt)("h2",p({},{id:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917"}),"\u092a\u094d\u0930\u094b\u092f\u094b\u0917"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$findGuildChannel[channelResolver;returnSelf?;guildID?]\n")),(0,r.kt)("h2",p({},{id:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938"}),"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"\u092b\u0940\u0932\u094d\u0921"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"\u091f\u093e\u0907\u092a"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"\u0921\u093f\u0938\u094d\u0915\u094d\u0930\u093f\u092a\u094d\u0936\u0928"),(0,r.kt)("th",p({parentName:"tr"},{align:"center"}),"\u091a\u093e\u0939\u093f\u090f"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"channelResolver"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"\u0938\u094d\u091f\u094d\u0930\u093f\u0902\u0917"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Name of the channel you are trying to find."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"returnSelf?"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Return the channel where the command got executed in when nothing found."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"\u0905\u0938\u0924\u094d\u092f (\u0928\u0939\u0940\u0902)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"guildID?"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"integer"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"ID of the guild where the channel is present in."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"\u0905\u0938\u0924\u094d\u092f (\u0928\u0939\u0940\u0902)")))),(0,r.kt)("h2",p({},{id:"\u091f\u094d\u0930\u0942-\u0939\u093e"}),"\u091f\u094d\u0930\u0942 (\u0939\u093e)"),(0,r.kt)("p",null,"This will return the channel ID of an channel called ",(0,r.kt)("inlineCode",{parentName:"p"},"#rules")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'findGuildChannel',\n    code: `\n  $findGuildChannel[rules;false;$guildID]\n  `\n});\n")))}O.isMDXComponent=!0}}]);