"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[7590],{3905:(e,n,r)=>{r.d(n,{Zo:()=>i,kt:()=>p});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),m=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):d(d({},n),e)),r},i=function(e){var n=m(e.components);return t.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=m(r),p=a,f=u["".concat(c,".").concat(p)]||u[p]||s[p]||o;return r?t.createElement(f,d(d({ref:n},i),{},{components:r})):t.createElement(f,d({ref:n},i))}));function p(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,d=new Array(o);d[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,d[1]=l;for(var m=2;m<o;m++)d[m]=r[m];return t.createElement.apply(null,d)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},46246:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var t=r(87462),a=(r(67294),r(3905));const o={title:"Command Handler",description:"Command Handlers can be used for organizing your commands"},d=void 0,l={unversionedId:"guides/command-handler/README",id:"guides/command-handler/README",title:"Command Handler",description:"Command Handlers can be used for organizing your commands",source:"@site/docs/guides/command-handler/README.md",sourceDirName:"guides/command-handler",slug:"/guides/command-handler/",permalink:"/docs/6.0.0/guides/command-handler/",draft:!1,tags:[],version:"current",frontMatter:{title:"Command Handler",description:"Command Handlers can be used for organizing your commands"},sidebar:"docs",previous:{title:"Client Status",permalink:"/docs/6.0.0/guides/client-status"},next:{title:"$addActionRow",permalink:"/docs/6.0.0/functions/available-functions/addActionRow"}},c={},m=[{value:"Old Command Handler",id:"old-command-handler",level:2},{value:"New Command Handler",id:"new-command-handler",level:3},{value:"New Command Handler Type Method",id:"new-command-handler-type-method",level:3}],i={toc:m};function s(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},i,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"old-command-handler"},"Old Command Handler"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'- const loader = new aoijs.LoadCommands(bot)\n- loader.load(bot.cmd, "./commands/")\n')),(0,a.kt)("h3",{id:"new-command-handler"},"New Command Handler"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'+ bot.commands.load("./commands/")\n')),(0,a.kt)("h3",{id:"new-command-handler-type-method"},"New Command Handler Type Method"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'module.exports = {\n+ type: "basicCommand",\n  name: "command-name",\n  code: `code`\n}\n')))}s.isMDXComponent=!0}}]);