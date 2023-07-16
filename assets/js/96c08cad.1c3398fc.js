"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[76775],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>b});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(t),d=o,b=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return t?n.createElement(b,i(i({ref:r},u),{},{components:t})):n.createElement(b,i({ref:r},u))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[f]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4088:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>g,contentTitle:()=>m,default:()=>k,frontMatter:()=>b,metadata:()=>v,toc:()=>y});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&u(e,t,r[t]);if(l)for(var t of l(r))c.call(r,t)&&u(e,t,r[t]);return e},p=(e,r)=>a(e,i(r)),d=(e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t};const b={title:"$getLeaderboardInfo"},m=void 0,v={unversionedId:"functions/getleaderboardinfo",id:"version-5.5.5/functions/getleaderboardinfo",title:"$getLeaderboardInfo",description:"This function allows the bot to grab info from any of the leaderboard functions",source:"@site/versioned_docs/version-5.5.5/functions/getleaderboardinfo.md",sourceDirName:"functions",slug:"/functions/getleaderboardinfo",permalink:"/docs/5.5.5/functions/getleaderboardinfo",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"Jul 16, 2023",frontMatter:{title:"$getLeaderboardInfo"},sidebar:"docs",previous:{title:"$getInviteInfo",permalink:"/docs/5.5.5/functions/getinviteinfo"},next:{title:"$getMessage",permalink:"/docs/5.5.5/functions/getmessage"}},g={},y=[],O={toc:y},h="wrapper";function k(e){var r=e,{components:t}=r,o=d(r,["components"]);return(0,n.kt)(h,p(f(f({},O),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function allows the bot to grab info from any of the leaderboard functions"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-php"}),"$getLeaderboardInfo[variable;id;user/globaluser/server;top/name/value]\n")),(0,n.kt)("p",null,"Property explanations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"variable - The variable where the leaderboard is based off of"),(0,n.kt)("li",{parentName:"ul"},"id - The user the info is based off of"),(0,n.kt)("li",{parentName:"ul"},"user - User variable"),(0,n.kt)("li",{parentName:"ul"},"globaluser - Global user variable"),(0,n.kt)("li",{parentName:"ul"},"server - Server variable"),(0,n.kt)("li",{parentName:"ul"},"top - Leaderboard position"),(0,n.kt)("li",{parentName:"ul"},"name - The username of the user"),(0,n.kt)("li",{parentName:"ul"},"value - Their variable value")),(0,n.kt)("p",null,"Using the function"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),"bot.command({\nname: 'leaderboard-info',\ncode: `User's Position: $getLeaderboardInfo[money;535566311942651924;user;top]`\n})\n")))}k.isMDXComponent=!0}}]);