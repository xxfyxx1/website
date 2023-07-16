"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[55209],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=o,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},f),{},{components:n})):r.createElement(m,i({ref:t},f))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52607:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>b,default:()=>g,frontMatter:()=>m,metadata:()=>y,toc:()=>h});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&f(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&f(e,n,t[n]);return e},u=(e,t)=>a(e,i(t)),d=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$footer",description:"Set a footer, to the embed."},b=void 0,y={unversionedId:"functions/footer",id:"version-5.5.5/functions/footer",title:"$footer",description:"Set a footer, to the embed.",source:"@site/versioned_docs/version-5.5.5/functions/footer.md",sourceDirName:"functions",slug:"/functions/footer",permalink:"/uk/docs/5.5.5/functions/footer",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$footer",description:"Set a footer, to the embed."},sidebar:"docs",previous:{title:"$findUser",permalink:"/uk/docs/5.5.5/functions/finduser"},next:{title:"$forEachChannel",permalink:"/uk/docs/5.5.5/functions/foreachchannel"}},k={},h=[],O={toc:h},v="wrapper";function g(e){var t=e,{components:n}=t,o=d(t,["components"]);return(0,r.kt)(v,u(s(s({},O),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function adds a footer to the embed"),(0,r.kt)("p",null,"Fields"),(0,r.kt)("p",null,"This function has 2 required fields"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Index ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Text ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"URL ","(","Optional",")")),(0,r.kt)("p",null,"Raw Usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$footer[index;text;url (optional)]")),(0,r.kt)("p",null,"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Index - Seperates diffrent footers to diffrent embeds"),(0,r.kt)("li",{parentName:"ul"},"Text - The text that goes in the footer"),(0,r.kt)("li",{parentName:"ul"},"URL - The icon next to the text")),(0,r.kt)("p",null,"Usage"),(0,r.kt)("p",null,"Without the optional field"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "footer", \ncode: `\n$description[1;Hello world!]\n$footer[1;Say hello back!]` \n})\n')),(0,r.kt)("p",null,"With different index"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "multi-footer",\ncode: `\n$description[1;Hello world!]\n$footer[1;Say hello back!]\n\n$description[2;Description 2]\n$footer[2;Footer 2]\n\n$description[3;Description 3]\n$footer[3;Footer 3!]\n`\n})\n')),(0,r.kt)("p",null,"With the optional field"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "footer", \ncode: `\n$description[1;Hello world!]\n$footer[1;Say hello back!;https://cdn.discordapp.com/attachments/773361503226298369/773555092666318848/773437619207012422.png]` \n})\n')))}g.isMDXComponent=!0}}]);