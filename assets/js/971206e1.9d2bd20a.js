"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[59953],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||l;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},43536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const l={title:"$mfaLevel"},a=void 0,i={unversionedId:"functions/mfalevel",id:"version-5.5.5/functions/mfalevel",title:"$mfaLevel",description:"Returns the guild mfa level \\(true or false\\)",source:"@site/versioned_docs/version-5.5.5/functions/mfalevel.md",sourceDirName:"functions",slug:"/functions/mfalevel",permalink:"/docs/functions/mfalevel",draft:!1,tags:[],version:"5.5.5",frontMatter:{title:"$mfaLevel"},sidebar:"docs",previous:{title:"$messageWebhookID",permalink:"/docs/functions/messagewebhookid"},next:{title:"$minute",permalink:"/docs/functions/minute"}},s={},c=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage without optional field",id:"usage-without-optional-field",level:4},{value:"Usage with optional field",id:"usage-with-optional-field",level:4}],u={toc:c};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Returns the guild mfa level ","(","true or false",")"),(0,o.kt)("h4",{id:"fields"},"Fields"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Guild ID ","(","Optional",")")),(0,o.kt)("p",null,"Raw usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"$mfaLevel[Guild ID]")),(0,o.kt)("h4",{id:"options"},"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Guild ID - Guild's mfa level you want to check.")),(0,o.kt)("h4",{id:"usage-without-optional-field"},"Usage without optional field"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "mfalevel",\n    code: `$mfaLevel`\n})\n')),(0,o.kt)("h4",{id:"usage-with-optional-field"},"Usage with optional field"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "mfalevel",\n    code: `$mfaLevel[773352845738115102]`\n}) // This will check the mfaLevel of Aoi.js official server\n')))}f.isMDXComponent=!0}}]);