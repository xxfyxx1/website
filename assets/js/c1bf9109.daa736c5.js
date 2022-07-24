"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[51726],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>g});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),c=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return a.createElement(l.Provider,{value:r},e.children)},v={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),g=n,b=p["".concat(l,".").concat(g)]||p[g]||v[g]||s;return t?a.createElement(b,i(i({ref:r},u),{},{components:t})):a.createElement(b,i({ref:r},u))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,i=new Array(s);i[0]=p;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<s;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6501:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>v,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=t(87462),n=(t(67294),t(3905));const s={title:"Message Variables",description:"Variable that can be saved to a message"},i=void 0,o={unversionedId:"guides/variables/message-variables",id:"version-5.5.5/guides/variables/message-variables",title:"Message Variables",description:"Variable that can be saved to a message",source:"@site/versioned_docs/version-5.5.5/guides/variables/message-variables.md",sourceDirName:"guides/variables",slug:"/guides/variables/message-variables",permalink:"/docs/guides/variables/message-variables",draft:!1,tags:[],version:"5.5.5",frontMatter:{title:"Message Variables",description:"Variable that can be saved to a message"},sidebar:"docs",previous:{title:"Global Variables",permalink:"/docs/guides/variables/global-variables"},next:{title:"Server Variables",permalink:"/docs/guides/variables/server-variables"}},l={},c=[{value:"Setting the message var",id:"setting-the-message-var",level:2},{value:"Retrieving the message var",id:"retrieving-the-message-var",level:3}],u={toc:c};function v(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Make sure you've created the variable already"),(0,n.kt)("h2",{id:"setting-the-message-var"},"Setting the message var"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"$setMessageVar[variable;value;messageID]\n")),(0,n.kt)("h3",{id:"retrieving-the-message-var"},"Retrieving the message var"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"$getMessageVar[variable;messageID]\n")))}v.isMDXComponent=!0}}]);