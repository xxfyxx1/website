"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[67886],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||l;return r?o.createElement(m,i(i({ref:t},u),{},{components:r})):o.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:n,i[1]=a;for(var s=2;s<l;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},65724:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>k,frontMatter:()=>m,metadata:()=>b,toc:()=>g});var o=r(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(a)for(var r of a(t))s.call(t,r)&&u(e,r,t[r]);return e},f=(e,t)=>l(e,i(t)),d=(e,t)=>{var r={};for(var o in e)c.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&a)for(var o of a(e))t.indexOf(o)<0&&s.call(e,o)&&(r[o]=e[o]);return r};const m={title:"$resolveColor"},v=void 0,b={unversionedId:"functions/resolvecolor",id:"version-5.5.5/functions/resolvecolor",title:"$resolveColor",description:"This function converts rgb color into hex or color number.",source:"@site/versioned_docs/version-5.5.5/functions/resolvecolor.md",sourceDirName:"functions",slug:"/functions/resolvecolor",permalink:"/docs/5.5.5/functions/resolvecolor",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"Jul 16, 2023",frontMatter:{title:"$resolveColor"},sidebar:"docs",previous:{title:"$resetVar",permalink:"/docs/5.5.5/functions/resetvar"},next:{title:"$resolveEmojiID",permalink:"/docs/5.5.5/functions/resolveemojiid"}},y={},g=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage without optional field",id:"usage-without-optional-field",level:4},{value:"Usage with optional field",id:"usage-with-optional-field",level:4}],h={toc:g},O="wrapper";function k(e){var t=e,{components:r}=t,n=d(t,["components"]);return(0,o.kt)(O,f(p(p({},h),n),{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function converts rgb color into hex or color number."),(0,o.kt)("h4",p({},{id:"fields"}),"Fields"),(0,o.kt)("p",null,"This function has 3 required fields."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Red ","(","Required",")"),(0,o.kt)("li",{parentName:"ol"},"Green ","(","Required",")"),(0,o.kt)("li",{parentName:"ol"},"Blue ","(","Required",")"),(0,o.kt)("li",{parentName:"ol"},"toHex ","(","Optional",")")),(0,o.kt)("p",null,"Raw usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"$resolveColor[Red; Green; Blue;toHex (optional) (yes/no)]")),(0,o.kt)("h4",p({},{id:"options"}),"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Red - Amount of red into the color"),(0,o.kt)("li",{parentName:"ul"},"Green - Amount of green into the color"),(0,o.kt)("li",{parentName:"ul"},"Blue - Amount of blue into the color"),(0,o.kt)("li",{parentName:"ul"},"toHex - If the bot should convert it to hex or return the color number.")),(0,o.kt)("h4",p({},{id:"usage-without-optional-field"}),"Usage without optional field"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "color",\n    code: `Pink color number is: $resolveColor[255;192;203]`\n})\n')),(0,o.kt)("h4",p({},{id:"usage-with-optional-field"}),"Usage with optional field"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "hex",\n    code: `Pink color hex is: $resolveColor[255;192;203;yes]`\n})\n')))}k.isMDXComponent=!0}}]);