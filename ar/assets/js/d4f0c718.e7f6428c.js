"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[38110],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||l;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5196:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>v,default:()=>k,frontMatter:()=>m,metadata:()=>g,toc:()=>b});var r=t(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&s(e,t,n[t]);if(i)for(var t of i(n))p.call(n,t)&&s(e,t,n[t]);return e},f=(e,n)=>l(e,o(n)),d=(e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t};const m={title:"$getChannelVar",description:"Get the Channel Value."},v=void 0,g={unversionedId:"functions/getchannelvar",id:"version-5.5.5/functions/getchannelvar",title:"$getChannelVar",description:"Get the Channel Value.",source:"@site/versioned_docs/version-5.5.5/functions/getchannelvar.md",sourceDirName:"functions",slug:"/functions/getchannelvar",permalink:"/ar/docs/5.5.5/functions/getchannelvar",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"\u0661\u0666 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$getChannelVar",description:"Get the Channel Value."},sidebar:"docs",previous:{title:"$getChannelSlowmode",permalink:"/ar/docs/5.5.5/functions/getchannelslowmode"},next:{title:"$getCooldownTime",permalink:"/ar/docs/5.5.5/functions/getcooldowntime"}},h={},b=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],y={toc:b},O="wrapper";function k(e){var n=e,{components:t}=n,a=d(n,["components"]);return(0,r.kt)(O,f(u(u({},y),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function gets the given variable value for the current or specified channel"),(0,r.kt)("h4",u({},{id:"fields"}),"Fields"),(0,r.kt)("p",null,"This function has 1 required field"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Variable ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Channel ID ","(","Optional",")")),(0,r.kt)("p",null,"Raw Usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$getChannelVar[variable;channelID (optional)]")),(0,r.kt)("h4",u({},{id:"options"}),"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Variable - The variable value we're getting for the ","<","channel",">"),(0,r.kt)("li",{parentName:"ul"},"Channel ID - The channel's variable value we're getting")),(0,r.kt)("h4",u({},{id:"usage"}),"Usage"),(0,r.kt)("p",null,"Current Channel's Variable Value"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "get", \ncode: `\n$getChannelVar[variable]`\n})\n')),(0,r.kt)("p",null,"Mentioned Channel's Variable Value"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "get", \ncode: `\n$getChannelVar[variable;$mentionedChannels[1]]`\n})\n')))}k.isMDXComponent=!0}}]);