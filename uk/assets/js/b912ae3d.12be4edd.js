"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[43016],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,b=u["".concat(p,".").concat(f)]||u[f]||s[f]||o;return r?n.createElement(b,l(l({ref:t},d),{},{components:r})):n.createElement(b,l({ref:t},d))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},45777:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>g,frontMatter:()=>b,metadata:()=>k,toc:()=>v});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&d(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&d(e,r,t[r]);return e},s=(e,t)=>o(e,l(t)),f=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const b={title:"$webhookUpdate",description:"\u0414\u0430\u043d\u0456 $webhookUpdate \u0434\u043b\u044f \u043a\u0430\u043d\u0430\u043b\u0443, \u0432 \u044f\u043a\u043e\u043c\u0443 \u0431\u0443\u043b\u043e \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u0432\u0435\u0431\u0445\u0443\u043a. (\u043f\u043e\u0434\u0456\u044f webhookUpdate \u043f\u043e\u0434\u0456\u0457)",id:"webhookUpdate"},m=void 0,k={unversionedId:"functions/event-related/webhookUpdate",id:"version-6.4.0/functions/event-related/webhookUpdate",title:"$webhookUpdate",description:"\u0414\u0430\u043d\u0456 $webhookUpdate \u0434\u043b\u044f \u043a\u0430\u043d\u0430\u043b\u0443, \u0432 \u044f\u043a\u043e\u043c\u0443 \u0431\u0443\u043b\u043e \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u0432\u0435\u0431\u0445\u0443\u043a. (\u043f\u043e\u0434\u0456\u044f webhookUpdate \u043f\u043e\u0434\u0456\u0457)",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/event-related/webhookUpdate.md",sourceDirName:"functions/event-related",slug:"/functions/event-related/webhookUpdate",permalink:"/uk/docs/functions/event-related/webhookUpdate",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689718489,formattedLastUpdatedAt:"18 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$webhookUpdate",description:"\u0414\u0430\u043d\u0456 $webhookUpdate \u0434\u043b\u044f \u043a\u0430\u043d\u0430\u043b\u0443, \u0432 \u044f\u043a\u043e\u043c\u0443 \u0431\u0443\u043b\u043e \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u0432\u0435\u0431\u0445\u0443\u043a. (\u043f\u043e\u0434\u0456\u044f webhookUpdate \u043f\u043e\u0434\u0456\u0457)",id:"webhookUpdate"},sidebar:"docs",previous:{title:"$timeoutData",permalink:"/uk/docs/functions/event-related/timeoutData"},next:{title:"$addEmoji",permalink:"/uk/docs/functions/guild-related/addEmoji"}},y={},v=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2}],h={toc:v},w="wrapper";function g(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(w,s(u(u({},h),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$webhookUpdate")," \u043a\u0430\u043d\u0430\u043b, \u0432 \u044f\u043a\u043e\u043c\u0443 \u0431\u0443\u043b\u043e \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u0432\u0435\u0431\u0445\u0443\u043a. (\u043f\u043e\u0434\u0456\u044f webhookUpdate \u043f\u043e\u0434\u0456\u0457)"),(0,n.kt)("h2",u({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$webhookUpdate[option]\n")),(0,n.kt)("h2",u({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,n.kt)("th",u({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u043e\u043f\u0446\u0456\u044f"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u041c\u043e\u0436\u043b\u0438\u0432\u0456\u0441\u0442\u044c \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")))))}g.isMDXComponent=!0}}]);