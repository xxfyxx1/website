"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[44353],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(n),f=a,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||l;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},30639:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>h,frontMatter:()=>m,metadata:()=>y,toc:()=>k});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))d.call(t,n)&&s(e,n,t[n]);return e},u=(e,t)=>l(e,i(t)),f=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$isRoleManaged",description:"$isRoleManaged will check if a certain role is managed by Discord.",id:"isRoleManaged"},g=void 0,y={unversionedId:"functions/util-related/isRoleManaged",id:"version-6.4.0/functions/util-related/isRoleManaged",title:"$isRoleManaged",description:"$isRoleManaged will check if a certain role is managed by Discord.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/isRoleManaged.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/isRoleManaged",permalink:"/uk/docs/functions/util-related/isRoleManaged",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$isRoleManaged",description:"$isRoleManaged will check if a certain role is managed by Discord.",id:"isRoleManaged"},sidebar:"docs",previous:{title:"$isRoleEditable",permalink:"/uk/docs/functions/util-related/isRoleEditable"},next:{title:"$isSelfDeafened",permalink:"/uk/docs/functions/util-related/isSelfDeafened"}},b={},k=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],v={toc:k},O="wrapper";function h(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(O,u(p(p({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$isRoleManaged")," will check if a certain role is managed by Discord."),(0,r.kt)("h2",p({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$isRoleManaged[roleID;guildID?]\n")),(0,r.kt)("h2",p({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,r.kt)("th",p({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"roleID"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"integer"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"ID of the role you want to check if it's managed by Discord or not."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"guildID?"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"integer"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"ID of the guild where the role exists."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"\u043d\u0456")))),(0,r.kt)("h2",p({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,r.kt)("p",null,"This will check if a role called ",(0,r.kt)("inlineCode",{parentName:"p"},"Server Booster")," is managed by Discord and return either ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'isRoleManaged',\n    code: `\n  $isRoleManaged[$findRole[Server Booster];$guildID]\n  `\n});\n")))}h.isMDXComponent=!0}}]);