"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[76998],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(t),d=o,m=s["".concat(c,".").concat(d)]||s[d]||f[d]||a;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u[s]="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},60249:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>y,default:()=>D,frontMatter:()=>m,metadata:()=>b,toc:()=>h});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&p(e,t,r[t]);if(u)for(var t of u(r))l.call(r,t)&&p(e,t,r[t]);return e},f=(e,r)=>a(e,i(r)),d=(e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&u)for(var n of u(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const m={title:"$authorID",description:"$authorID \u0432\u0435\u0440\u043d\u0451\u0442 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0432\u0448\u0435\u0433\u043e \u043a\u043e\u043c\u0430\u043d\u0434\u0443.",id:"authorID"},y=void 0,b={unversionedId:"functions/user-related/authorID",id:"version-6.4.0/functions/user-related/authorID",title:"$authorID",description:"$authorID \u0432\u0435\u0440\u043d\u0451\u0442 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0432\u0448\u0435\u0433\u043e \u043a\u043e\u043c\u0430\u043d\u0434\u0443.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/user-related/authorID.md",sourceDirName:"functions/user-related",slug:"/functions/user-related/authorID",permalink:"/ru/docs/functions/user-related/authorID",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689718489,formattedLastUpdatedAt:"18 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$authorID",description:"$authorID \u0432\u0435\u0440\u043d\u0451\u0442 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0432\u0448\u0435\u0433\u043e \u043a\u043e\u043c\u0430\u043d\u0434\u0443.",id:"authorID"},sidebar:"docs",previous:{title:"$authorBannerColor",permalink:"/ru/docs/functions/user-related/authorBannerColor"},next:{title:"$cacheMembers",permalink:"/ru/docs/functions/user-related/cacheMembers"}},v={},h=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],O={toc:h},g="wrapper";function D(e){var r=e,{components:t}=r,o=d(r,["components"]);return(0,n.kt)(g,f(s(s({},O),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$authorID")," \u0432\u0435\u0440\u043d\u0451\u0442 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0432\u0448\u0435\u0433\u043e \u043a\u043e\u043c\u0430\u043d\u0434\u0443."),(0,n.kt)("h2",s({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$authorID\n")),(0,n.kt)("h2",s({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,n.kt)("p",null,"\u042d\u0442\u043e \u0432\u0435\u0440\u043d\u0435\u0442 \u0432\u0430\u0448 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440:"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'authorID',\n    code: `\n  $authorID\n  `\n});\n")))}D.isMDXComponent=!0}}]);