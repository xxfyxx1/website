"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[85106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,b=s["".concat(d,".").concat(u)]||s[u]||c[u]||l;return n?r.createElement(b,o(o({ref:t},m),{},{components:n})):r.createElement(b,o({ref:t},m))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>f,default:()=>v,frontMatter:()=>b,metadata:()=>g,toc:()=>h});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&m(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&m(e,n,t[n]);return e},c=(e,t)=>l(e,o(t)),u=(e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const b={title:"$oldMember",description:"$oldMember holds data for the member before it was updated, this is from discord cache and might be empty depending on whether it's cached, so use partial option before attempting to access any property. (memberUpdate event)",id:"oldMember"},f=void 0,g={unversionedId:"functions/event-related/oldMember",id:"version-6.4.0/functions/event-related/oldMember",title:"$oldMember",description:"$oldMember holds data for the member before it was updated, this is from discord cache and might be empty depending on whether it's cached, so use partial option before attempting to access any property. (memberUpdate event)",source:"@site/i18n/ar/docusaurus-plugin-content-docs/version-6.4.0/functions/event-related/oldMember.md",sourceDirName:"functions/event-related",slug:"/functions/event-related/oldMember",permalink:"/ar/docs/functions/event-related/oldMember",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"\u0661\u0666 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$oldMember",description:"$oldMember holds data for the member before it was updated, this is from discord cache and might be empty depending on whether it's cached, so use partial option before attempting to access any property. (memberUpdate event)",id:"oldMember"},sidebar:"docs",previous:{title:"$oldGuild",permalink:"/ar/docs/functions/event-related/oldGuild"},next:{title:"$oldMessage",permalink:"/ar/docs/functions/event-related/oldMessage"}},k={},h=[{value:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645",id:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645",level:2},{value:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a",id:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a",level:2},{value:"Options",id:"options",level:3},{value:"\u0645\u062b\u0627\u0644",id:"\u0645\u062b\u0627\u0644",level:2}],y={toc:h},N="wrapper";function v(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,r.kt)(N,c(s(s({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$oldMember")," holds data for the member before it was updated, this is from discord cache and might be empty depending on whether it's cached, so use partial option before attempting to access any property. (memberUpdate event)"),(0,r.kt)("h2",s({},{id:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645"}),"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$oldMember[option]\n")),(0,r.kt)("h2",s({},{id:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a"}),"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u0627\u0644\u0646\u0648\u0639"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u0627\u0644\u062f\u064a\u0633\u0643\u0628\u0631\u0628\u0634\u064a\u0646"),(0,r.kt)("th",s({parentName:"tr"},{align:"center"}),"\u0645\u0637\u0644\u0648\u0628"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"option"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Option to retrieve."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"true")))),(0,r.kt)("h3",s({},{id:"options"}),"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u0627\u0644\u0646\u0648\u0639"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u0627\u0644\u062f\u064a\u0633\u0643\u0628\u0631\u0628\u0634\u064a\u0646"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"id"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Returns User ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"name"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Returns Name of user.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"roles"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Returns User roles.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"permissions"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Returns User permissions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"nick"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Returns User nickname.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"highestRoleID"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Returns Higher role ID user has.")))),(0,r.kt)("h2",s({},{id:"\u0645\u062b\u0627\u0644"}),"\u0645\u062b\u0627\u0644"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Note: You need ",(0,r.kt)("inlineCode",{parentName:"strong"},"GuildMembers")," intent"))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-js"}),'bot.memberUpdateCommand({\n    channel: "channelid",\n    code: `\n    $username[$newMember[id]] has updated their nickname!\n- New Nickname: $newMember[nick]\n - Old Nickname: $oldMember[nick]\n\n   $username[$newMember[id]] has updated their name!\n- New Name: $newMember[name]\n - Old Name: $oldMember[name]`\n})\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This code will execute when ",(0,r.kt)("strong",{parentName:"li"},"member updates their guild nickname or discord username"))),(0,r.kt)("hr",null))}v.isMDXComponent=!0}}]);