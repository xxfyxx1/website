"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[92975],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(d,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(f,o(o({ref:e},s),{},{components:n})):a.createElement(f,o({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},94878:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"$addButton",id:"addbutton"},o=void 0,i={unversionedId:"functions/addbutton",id:"version-5.5.5/functions/addbutton",title:"$addButton",description:"This function will add a button to bot's message.",source:"@site/versioned_docs/version-5.5.5/functions/addbutton.md",sourceDirName:"functions",slug:"/functions/addbutton",permalink:"/docs/functions/addbutton",draft:!1,tags:[],version:"5.5.5",frontMatter:{title:"$addButton",id:"addbutton"},sidebar:"docs",previous:{title:"$activity",permalink:"/docs/functions/activity"},next:{title:"$addCmdReactions",permalink:"/docs/functions/addcmdreactions"}},d={},p=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Styles",id:"styles",level:4},{value:"Footnote",id:"footnote",level:6},{value:"Examples",id:"examples",level:2}],s={toc:p};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function will add a button to bot's message."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$addButton[index;label;style;customID;disable?;emoji?]\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"index"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The button to show up on the given embed"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"label"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Text on the button"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"style"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Button's style"),(0,r.kt)("td",{parentName:"tr",align:"left"},"str & num"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"customID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A custom ID for the button (changes for link ",(0,r.kt)("strong",{parentName:"td"},"style*"),")"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"disable"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Disabling the button"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"emoji"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The emoji that will show up next to the label."),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no")))),(0,r.kt)("h4",{id:"styles"},"Styles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1 & primary \u2500 Blue button"),(0,r.kt)("li",{parentName:"ul"},"2 & secondary \u2500 Gray button"),(0,r.kt)("li",{parentName:"ul"},"3 & success \u2500 Green button"),(0,r.kt)("li",{parentName:"ul"},"4 & danger \u2500 Red button"),(0,r.kt)("li",{parentName:"ul"},"5 & link \u2500 Redirect button")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Note"),": Using link style will make customID property as a link."))),(0,r.kt)("h6",{id:"footnote"},"Footnote"),(0,r.kt)("p",null,"Interaction commands needs this callback on main file (or handler):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.onInteractionCreate();\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For Normal Button:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "add-button",\n  code: `\n  Hello, World!\n  \n  $addButton[1;Welcome;primary;helloButton;no;\ud83d\udc4b]\n  `\n});\n\nbot.interactionCommand({\n  name: "helloButton",\n  prototype: \'button\',\n  code: `\n  $interactionReply[Bye, bye!]\n  `\n});\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For Redirected Button (link style):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "add-button",\n  code: `\n  Tap below to join Akarui Development!\n  \n  $addButton[1;Let\'s go!;link;https://discord.gg/eTBF9N5sy2;no]\n  `\n});\n')))}u.isMDXComponent=!0}}]);