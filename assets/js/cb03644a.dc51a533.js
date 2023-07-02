"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[8552],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(n),y=o,f=m["".concat(p,".").concat(y)]||m[y]||u[y]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[m]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},4584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"$botTyping",description:"Displays the bot as typing"},i=void 0,c={unversionedId:"functions/bottyping",id:"version-5.5.5/functions/bottyping",title:"$botTyping",description:"Displays the bot as typing",source:"@site/versioned_docs/version-5.5.5/functions/bottyping.md",sourceDirName:"functions",slug:"/functions/bottyping",permalink:"/docs/5.5.5/functions/bottyping",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1688314942,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{title:"$botTyping",description:"Displays the bot as typing"},sidebar:"docs",previous:{title:"$botOwnerID",permalink:"/docs/5.5.5/functions/botownerid"},next:{title:"$broadcastEval",permalink:"/docs/5.5.5/functions/broadcasteval"}},p={},s=[{value:"Usage",id:"usage",level:3},{value:"Examples",id:"examples",level:2}],l={toc:s},m="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function just displays the bot as 'Typing'."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$botTyping\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "bot",\ncode: `I was just typing\n$botTyping`\n})\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This is what it will look like :-")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Heres what it would look like. Of course it would be your bots name",src:n(32899).Z,width:"211",height:"67"})))}u.isMDXComponent=!0},32899:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);