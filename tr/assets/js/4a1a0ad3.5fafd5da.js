"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[93596],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(n),c=a,b=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},80782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>h,default:()=>N,frontMatter:()=>b,metadata:()=>f,toc:()=>k});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))m.call(t,n)&&p(e,n,t[n]);return e},u=(e,t)=>i(e,o(t)),c=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n};const b={title:"bot.onMemberUpdate",description:"An event that gets executed, if the bot sees a guild member updated in one of it's servers. To let the bot listen to the event, add one bot.onMemberUpdate() callback inside your main file."},h=void 0,f={unversionedId:"events/bot.onmemberupdate",id:"version-5.5.5/events/bot.onmemberupdate",title:"bot.onMemberUpdate",description:"An event that gets executed, if the bot sees a guild member updated in one of it's servers. To let the bot listen to the event, add one bot.onMemberUpdate() callback inside your main file.",source:"@site/versioned_docs/version-5.5.5/events/bot.onmemberupdate.md",sourceDirName:"events",slug:"/events/bot.onmemberupdate",permalink:"/tr/docs/5.5.5/events/bot.onmemberupdate",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 Tem 2023",frontMatter:{title:"bot.onMemberUpdate",description:"An event that gets executed, if the bot sees a guild member updated in one of it's servers. To let the bot listen to the event, add one bot.onMemberUpdate() callback inside your main file."},sidebar:"docs",previous:{title:"bot.onLeave",permalink:"/tr/docs/5.5.5/events/bot.onleave"},next:{title:"bot.onMessage",permalink:"/tr/docs/5.5.5/events/bot.onmessage"}},v={},k=[{value:"Usage:",id:"usage",level:4},{value:"Example Command:",id:"example-command",level:4},{value:"Options:",id:"options",level:4}],g={toc:k},y="wrapper";function N(e){var t=e,{components:n}=t,a=c(t,["components"]);return(0,r.kt)(y,u(d(d({},g),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This callback triggers every time a member gets updated, e.g. role given/removed or nickname changed."),(0,r.kt)("h4",d({},{id:"usage"}),"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.memberUpdateCommand({ //command\nchannel: "channel id", //the channel where the bot will log\ncode: `your code` //Message that will be sent to <channel>\n})\n')),(0,r.kt)("h4",d({},{id:"example-command"}),"Example Command:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.memberUpdateCommand({ \nchannel: "772414449839636490", \ncode: `$newMember[name]\'s permissions has been updated from \n$oldMember[permissions] to $newMember[permissions]\n`\n})\n')),(0,r.kt)("h4",d({},{id:"options"}),"Options:"),(0,r.kt)("p",null,"You can use these functions $newMember","[","]"," and $oldMember with the options below to return new and old member data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," - The ID of the user "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," - The name of this user "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"guildID")," - The ID of the guild this member was updated on "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nick")," - The nickname of this user before it was updated, if any "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"roles")," - The role names of the user before it was updated "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"partial")," - Whether the member structure is cached or not "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"premiumStamp")," - The timestamp this user started boosting the server, or 0 if they're not boosting "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"joinedStamp")," - The timestamp when this user joined the server "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"voiceID")," - The ID of the voice channel this user's in "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"displayHex")," - Returns the hex color of this user's highest role "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"highestRoleID")," - The ID of the highest role of this user in the guild "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"permissions")," - The permissions for this member "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bannable")," - Whether if the user is bannable by the client or not "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kickable")," - Whether if the user is kickable by the client or not "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"manageable")," - Whether if the user can be managed by the client or not "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"displayColor")," - Displays the color of the highest role in this user "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status")," - The status for this user "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"activities")," - The activities for this user")))}N.isMDXComponent=!0}}]);