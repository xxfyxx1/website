"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[12540],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>v});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(t),v=s,d=f["".concat(c,".").concat(v)]||f[v]||p[v]||o;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function v(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,a=new Array(o);a[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},20411:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(87462),s=(t(67294),t(3905));const o={title:"$serverChannelExists",description:"Checks if channels exists in the current server. Returns boolean"},a=void 0,i={unversionedId:"functions/serverchannelexists",id:"version-5.5.5/functions/serverchannelexists",title:"$serverChannelExists",description:"Checks if channels exists in the current server. Returns boolean",source:"@site/versioned_docs/version-5.5.5/functions/serverchannelexists.md",sourceDirName:"functions",slug:"/functions/serverchannelexists",permalink:"/docs/5.5.5/functions/serverchannelexists",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1686146989,formattedLastUpdatedAt:"Jun 7, 2023",frontMatter:{title:"$serverChannelExists",description:"Checks if channels exists in the current server. Returns boolean"},sidebar:"docs",previous:{title:"$serverBoostLevel",permalink:"/docs/5.5.5/functions/serverboostlevel"},next:{title:"$serverContentFilter",permalink:"/docs/5.5.5/functions/servercontentfilter"}},c={},l=[],u={toc:l};function p(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This function checks if a channel exists in the current server. Returns Boolean"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$serverChannelExists[channelID]\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "serverChannelExists",\ncode: `Does Channel Exist: $serverChannelExists[773361206496329728]`\n})\n')))}p.isMDXComponent=!0}}]);