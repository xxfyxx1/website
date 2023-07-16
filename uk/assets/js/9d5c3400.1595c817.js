"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[32317],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,m=c["".concat(s,".").concat(d)]||c[d]||f[d]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},57555:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>O,frontMatter:()=>m,metadata:()=>k,toc:()=>y});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&p(e,r,t[r]);return e},f=(e,t)=>o(e,i(t)),d=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$userTag",description:"Gets specified user ID's username and discriminator."},g=void 0,k={unversionedId:"functions/usertag",id:"version-5.5.5/functions/usertag",title:"$userTag",description:"Gets specified user ID's username and discriminator.",source:"@site/versioned_docs/version-5.5.5/functions/usertag.md",sourceDirName:"functions",slug:"/functions/usertag",permalink:"/uk/docs/5.5.5/functions/usertag",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$userTag",description:"Gets specified user ID's username and discriminator."},sidebar:"docs",previous:{title:"$usersWithRole",permalink:"/uk/docs/5.5.5/functions/userswithrole"},next:{title:"$vanityURL",permalink:"/uk/docs/5.5.5/functions/vanityurl"}},v={},y=[{value:"Usage",id:"usage",level:3},{value:"Field",id:"field",level:3},{value:"Example",id:"example",level:2}],b={toc:y},N="wrapper";function O(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(N,f(c(c({},b),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns the users username",(0,n.kt)("sup",c({parentName:"p"},{id:"fnref-1"}),(0,n.kt)("a",c({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))," and tag",(0,n.kt)("sup",c({parentName:"p"},{id:"fnref-2"}),(0,n.kt)("a",c({parentName:"sup"},{href:"#fn-2",className:"footnote-ref"}),"2")),"."),(0,n.kt)("h3",c({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$userTag[userID?]\n")),(0,n.kt)("h3",c({},{id:"field"}),"Field"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",c({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",c({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",c({parentName:"tr"},{align:"left"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"left"}),"userID?"),(0,n.kt)("td",c({parentName:"tr"},{align:"left"}),"the id of the user we're going to get"),(0,n.kt)("td",c({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",c({parentName:"tr"},{align:"left"}),"no")))),(0,n.kt)("h2",c({},{id:"example"}),"Example"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Let's return author's tag:")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "user-tag",\n  code: `\n  $userTag \n  `\n// Would return Neodevil#0001\n});\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Now lets find Leref's tag:")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "user-tag",\n  code: `\n  $userTag[$findUser[Leref]] \n  `\n// Would return Leref#0001\n});\n')),(0,n.kt)("div",c({},{className:"footnotes"}),(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",c({parentName:"ol"},{id:"fn-1"}),"Neodevil",(0,n.kt)("a",c({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")),(0,n.kt)("li",c({parentName:"ol"},{id:"fn-2"}),"#0001",(0,n.kt)("a",c({parentName:"li"},{href:"#fnref-2",className:"footnote-backref"}),"\u21a9")))))}O.isMDXComponent=!0}}]);