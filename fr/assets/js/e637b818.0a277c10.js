"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[49258],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,g=p["".concat(s,".").concat(f)]||p[f]||c[f]||l;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},20466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>O,frontMatter:()=>g,metadata:()=>v,toc:()=>b});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&d(e,n,t[n]);return e},c=(e,t)=>l(e,i(t)),f=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const g={title:"$guildChannelExists",description:"$guildChannelExists v\xe9rifiera dans une guilde donn\xe9e si le salon donn\xe9 existe.",id:"guildChannelExists"},m=void 0,v={unversionedId:"functions/guild-related/guildChannelExists",id:"version-6.4.0/functions/guild-related/guildChannelExists",title:"$guildChannelExists",description:"$guildChannelExists v\xe9rifiera dans une guilde donn\xe9e si le salon donn\xe9 existe.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/guildChannelExists.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildChannelExists",permalink:"/fr/docs/functions/guild-related/guildChannelExists",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690091566,formattedLastUpdatedAt:"23 juil. 2023",frontMatter:{title:"$guildChannelExists",description:"$guildChannelExists v\xe9rifiera dans une guilde donn\xe9e si le salon donn\xe9 existe.",id:"guildChannelExists"},sidebar:"docs",previous:{title:"$guildBoostLevel",permalink:"/fr/docs/functions/guild-related/guildBoostLevel"},next:{title:"$guildChannels",permalink:"/fr/docs/functions/guild-related/guildChannels"}},y={},b=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],h={toc:b},k="wrapper";function O(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(k,c(p(p({},h),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$guildChannelExists")," v\xe9rifiera dans une guilde donn\xe9e si le salon donn\xe9 existe."),(0,r.kt)("h2",p({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$guildChannelExists[IDserveur;salonDevant\xcatreV\xe9rifier]\n")),(0,r.kt)("h2",p({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Champ"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",p({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"IDserveur"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"entier"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"ID du serveur dans lequel le salon donn\xe9 doit \xeatre v\xe9rifi\xe9."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"salonDevant\xcatreV\xe9rifier"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"entier, cha\xeene de caract\xe8res"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"ID ou nom du salon \xe0 v\xe9rifier."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"vrai")))),(0,r.kt)("h2",p({},{id:"exemples"}),"Exemple(s)"),(0,r.kt)("p",null,"Cela v\xe9rifiera si un salon avec le nom ",(0,r.kt)("inlineCode",{parentName:"p"},"r\xe8gles")," existe dans le serveur, vous pouvez \xe9galement utiliser un ID \xe0 la place:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'salonExistant',\n    code: `\n  $guildChannelExists[$guildID;r\xe8gles]\n  `\n});\n")))}O.isMDXComponent=!0}}]);