"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[13021],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>b});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),u=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=u(e.components);return r.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),b=n,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||i;return t?r.createElement(m,l(l({ref:a},c),{},{components:t})):r.createElement(m,l({ref:a},c))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=p;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},80084:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=t(87462),n=(t(67294),t(3905));const i={title:"Variables",description:"This Guide will be covering variables, their usage and how to store variables in other files.",id:"variables"},l=void 0,o={unversionedId:"guides/variables",id:"guides/variables",title:"Variables",description:"This Guide will be covering variables, their usage and how to store variables in other files.",source:"@site/docs/guides/5variables.md",sourceDirName:"guides",slug:"/guides/variables",permalink:"/docs/guides/variables",draft:!1,tags:[],version:"current",lastUpdatedBy:"Leref",lastUpdatedAt:1686146989,formattedLastUpdatedAt:"Jun 7, 2023",frontMatter:{title:"Variables",description:"This Guide will be covering variables, their usage and how to store variables in other files.",id:"variables"},sidebar:"docs",previous:{title:"Client Status",permalink:"/docs/guides/status"},next:{title:"Interaction Commands",permalink:"/docs/guides/interactioncommands"}},s={},u=[{value:"Table of Content",id:"table-of-content",level:3},{value:"Using Variables",id:"using-variables",level:3},{value:"Variable Handlers",id:"variable-handlers",level:2}],c={toc:u};function d(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This guide will provide you with a comprehensive understanding of variables."),(0,n.kt)("h3",{id:"table-of-content"},"Table of Content"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"#using-variables"},"Using Variables"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"#variable-handler"},"Variable Handler")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"using-variables"},"Using Variables"),(0,n.kt)("p",null,"Variables are useful tools in programming that allow you to store values that can be accessed and manipulated throughout your code. To use a variable, you first need to declare it by giving it a name and assigning a value to it."),(0,n.kt)("p",null,"One way to do this is by using the following code snippet in your main file (usually named ",(0,n.kt)("inlineCode",{parentName:"p"},"index.js"),"):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'bot.variables({\n    variableName: boolean,\n    variableName: number,\n    variableName: object,\n    variableName: "string"\n});\n')),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"bot.variables()")," function takes an object as an argument, where each property represents a variable name and its corresponding value."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"variable-handlers"},"Variable Handlers"),(0,n.kt)("p",null,"Another way to use variables is by using a variable handler, which can help keep your main file organized and cleaner. To set up a variable handler, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'Create a directory called "',(0,n.kt)("strong",{parentName:"li"},"handler"),'".'),(0,n.kt)("li",{parentName:"ol"},'Create a file inside the directory named "',(0,n.kt)("strong",{parentName:"li"},"variables.js"),'".'),(0,n.kt)("li",{parentName:"ol"},"In your main file, add the following code:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"require('./handler/variables.js')(bot);\n")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"In the ",(0,n.kt)("inlineCode",{parentName:"li"},"variables.js")," file, create an array of objects, where each object represents a variable name and its corresponding value:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = (bot) => { \n bot.variables({\n    variableName: boolean,\n    variableName: number,\n    variableName: object,\n    variableName: "string"\n })\n}\n')),(0,n.kt)("p",null,"With these steps, you now have a working variable handler, which can help you keep your code organized and easier to manage."))}d.isMDXComponent=!0}}]);