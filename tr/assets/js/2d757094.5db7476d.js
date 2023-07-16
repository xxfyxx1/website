"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[64294],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>g,frontMatter:()=>f,metadata:()=>v,toc:()=>w});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e},u=(e,t)=>i(e,o(t)),d=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$awaitCmdReactions",description:"Make bot response the reaction on command (author's message)."},y=void 0,v={unversionedId:"functions/awaitcmdreactions",id:"version-5.5.5/functions/awaitcmdreactions",title:"$awaitCmdReactions",description:"Make bot response the reaction on command (author's message).",source:"@site/versioned_docs/version-5.5.5/functions/awaitcmdreactions.md",sourceDirName:"functions",slug:"/functions/awaitcmdreactions",permalink:"/tr/docs/5.5.5/functions/awaitcmdreactions",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 Tem 2023",frontMatter:{title:"$awaitCmdReactions",description:"Make bot response the reaction on command (author's message)."},sidebar:"docs",previous:{title:"$authorID",permalink:"/tr/docs/5.5.5/functions/authorid"},next:{title:"$awaitComponentsUntil",permalink:"/tr/docs/5.5.5/functions/awaitcomponentsuntil"}},b={},w=[{value:"Usage",id:"usage",level:3},{value:"Filter Types",id:"filter-types",level:4},{value:"Suffixes",id:"suffixes",level:4},{value:"Example",id:"example",level:4}],k={toc:w},h="wrapper";function g(e){var t=e,{components:n}=t,a=d(t,["components"]);return(0,r.kt)(h,u(m(m({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function will make the bot reply when a user reacts with the given emoji to the command."),(0,r.kt)("h3",m({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$awaitCmdReactions[filter;time;reactions;awaited commands;error message?;awaited data?]\n//reaction1,reaction2?,...;awaitedCmd1,awaitedCmd2?,...\n")),(0,r.kt)("h4",m({},{id:"filter-types"}),"Filter Types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"everyone")," \u2014 makes it avaliable to react for everyone"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"userID")," \u2014 makes it avaliable to react for specific user id (for example ",(0,r.kt)("inlineCode",{parentName:"li"},"$authorID"),")")),(0,r.kt)("h4",m({},{id:"suffixes"}),"Suffixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s")," - Seconds"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"m")," - Minutes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"h")," - Hours"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"d")," - Days"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"w")," - Weeks")),(0,r.kt)("h4",m({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "await-cmd-reactions",\n  code: `\n  React with 1\ufe0f\u20e3 to command and I\'ll reply in 10 seconds\n\n  $awaitCmdReactions[$authorID;10s;1\ufe0f\u20e3;reactionMessage;Command Timed out!]\n  `\n//This will execute the awaited command if the user reacts\n});\n\nbot.awaitedCommand({\n  name: "reactionMessage",\n  code: `\n  Hi, you reacted to 1\ufe0f\u20e3 and now I, responded!\n  `\n});\n//This will be sending when the user reacted\n')))}g.isMDXComponent=!0}}]);