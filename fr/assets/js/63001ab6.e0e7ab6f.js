"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[15757],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},63715:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>k,default:()=>y,frontMatter:()=>m,metadata:()=>g,toc:()=>N});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&c(e,n,t[n]);return e},u=(e,t)=>i(e,o(t)),f=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n};const m={title:"$if",description:"Execute a code block with condition."},k=void 0,g={unversionedId:"functions/if",id:"version-5.5.5/functions/if",title:"$if",description:"Execute a code block with condition.",source:"@site/versioned_docs/version-5.5.5/functions/if.md",sourceDirName:"functions",slug:"/functions/if",permalink:"/fr/docs/5.5.5/functions/if",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 juil. 2023",frontMatter:{title:"$if",description:"Execute a code block with condition."},sidebar:"docs",previous:{title:"$humanizeMs",permalink:"/fr/docs/5.5.5/functions/humanizems"},next:{title:"$image",permalink:"/fr/docs/5.5.5/functions/image"}},h={},N=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Comparison Operators",id:"comparison-operators",level:4},{value:"Logical Operators",id:"logical-operators",level:4},{value:"Footnote",id:"footnote",level:6},{value:"Better understanding of operators",id:"better-understanding-of-operators",level:5},{value:"Examples",id:"examples",level:2}],b={toc:N},v="wrapper";function y(e){var t=e,{components:n}=t,r=f(t,["components"]);return(0,a.kt)(v,u(d(d({},b),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"An if else statement in aoi.js is a conditional statement that runs a different set of statements depending on whether an expression is ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,"\ud83d\udca1 It can also be used with ",(0,a.kt)("inlineCode",{parentName:"p"},"awaited")," command."),(0,a.kt)("h3",d({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$if[condition(s);true field;false field?]\n")),(0,a.kt)("h3",d({},{id:"fields"}),"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",d({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",d({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:"left"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"condition(s)"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"to compare if the values are equally same or not, it returns boolean"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"condition"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"true field"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"If the condition is returning ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),", the one is going to execute"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"false field"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"If the condition is returning ",(0,a.kt)("inlineCode",{parentName:"td"},"false"),", the one is going to execute"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"no")))),(0,a.kt)("h4",d({},{id:"comparison-operators"}),"Comparison Operators"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"==")," \u2014 Equal to "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"!=")," \u2014 Not equal to"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},">")," \u2014 Greater than"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<")," \u2014 Less than"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},">=")," \u2014 Greater than or equal to"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<=")," \u2014 Less than or equal to")),(0,a.kt)("h4",d({},{id:"logical-operators"}),"Logical Operators"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"&&")," \u2014 Logical and "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"||")," \u2014 Logical or")),(0,a.kt)("h6",d({},{id:"footnote"}),"Footnote"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"All functions can be used on ",(0,a.kt)("inlineCode",{parentName:"em"},"$if")," function!")),(0,a.kt)("h5",d({},{id:"better-understanding-of-operators"}),"Better understanding of operators"),(0,a.kt)("p",null,"We'll be using variables to show you how the operators works \ud83d\ude43"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Comparison examples")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"// GREATER and LESS THAN operators\n$checkCondition[3>2] // true\n$checkCondition[3<2] // false\n\n$checkCondition[10>=10] // true\n$checkCondition[8<=8] // true\n\n// EQUAL operator\n$checkCondition[2==2] // true\n\n// NOT EQUAL operator\n$checkCondition[3!=2] // true\n$checkCondition[Neo!=neo] // true\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Logical examples")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"// logical AND\n$checkCondition[(1==1)&&(0==0)] // true\n$checkCondition[(1!=1)&&(0==0)] // false\n\n// logical OR\n$checkCondition[1==1||1==0] // true\n")),(0,a.kt)("h2",d({},{id:"examples"}),"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"undefined")," type condition")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "if",\n  code: `\n  $if[$get[num]==;\n    Worked!;\n    \\`undefined\\` is not equal to 1.\n  ]\n  \n  $let[num;1]\n  `\n// Empty means "undefined" (1 == undefined) is not returning true message.\n});\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$if")," function but with awaited command")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.variables({\n  light: "on"\n});\n\nbot.command({\n  name: "if-awaited",\n  code: `\n  $if[$getVar[light]==on;{execute:lightsOff};{execute:lightsOn}]\n  `\n// Our variable doesn\'t equal to "off" so it returns false message.\n});\n\nbot.awaitedCommand({\n  name: "lightsOff",\n  code: `\n  $setVar[light;off]\n  \n  Turning off the lights.\n  `\n});\n\nbot.awaitedCommand({\n  name: "lightsOn",\n  code: `\n  $setVar[light;on]\n  \n  Turning on the lights.\n  `\n});\n')))}y.isMDXComponent=!0}}]);