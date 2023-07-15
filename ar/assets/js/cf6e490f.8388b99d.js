"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[28156],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,d=m["".concat(i,".").concat(g)]||m[g]||u[g]||s;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=g;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<s;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},10644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>O,frontMatter:()=>d,metadata:()=>y,toc:()=>v});var r=n(3905),a=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&c(e,n,t[n]);return e},u=(e,t)=>s(e,l(t)),g=(e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const d={title:"$messageType",description:"$messageType will return the type of a given message.",id:"messageType"},f=void 0,y={unversionedId:"functions/message-related/messageType",id:"version-6.4.0/functions/message-related/messageType",title:"$messageType",description:"$messageType will return the type of a given message.",source:"@site/i18n/ar/docusaurus-plugin-content-docs/version-6.4.0/functions/message-related/messageType.md",sourceDirName:"functions/message-related",slug:"/functions/message-related/messageType",permalink:"/ar/docs/functions/message-related/messageType",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"\u0661\u0665 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$messageType",description:"$messageType will return the type of a given message.",id:"messageType"},sidebar:"docs",previous:{title:"$messagePing",permalink:"/ar/docs/functions/message-related/messagePing"},next:{title:"$messageURL",permalink:"/ar/docs/functions/message-related/messageURL"}},b={},v=[{value:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645",id:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645",level:2},{value:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a",id:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a",level:2},{value:"\u0645\u062b\u0627\u0644",id:"\u0645\u062b\u0627\u0644",level:2}],h={toc:v},k="wrapper";function O(e){var t=e,{components:n}=t,a=g(t,["components"]);return(0,r.kt)(k,u(m(m({},h),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$messageType")," will return the type of a given message."),(0,r.kt)("h2",m({},{id:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645"}),"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$messageType[messageID?;channelID?]\n")),(0,r.kt)("h2",m({},{id:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a"}),"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"\u0627\u0644\u0646\u0648\u0639"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"\u0627\u0644\u062f\u064a\u0633\u0643\u0628\u0631\u0628\u0634\u064a\u0646"),(0,r.kt)("th",m({parentName:"tr"},{align:"center"}),"\u0645\u0637\u0644\u0648\u0628"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"messageID?"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ID of the message."),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"channelID?"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ID of the channel where the message is located in."),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"false")))),(0,r.kt)("h2",m({},{id:"\u0645\u062b\u0627\u0644"}),"\u0645\u062b\u0627\u0644"),(0,r.kt)("p",null,"This will return the message type of the message which executed the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'messageType',\n    code: `\n  $messageType[$messageID;$channelID]\n  `\n});\n")))}O.isMDXComponent=!0}}]);