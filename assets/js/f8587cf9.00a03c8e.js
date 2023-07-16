"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[70238],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||l;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},24204:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>O,frontMatter:()=>m,metadata:()=>y,toc:()=>v});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>l(e,o(t)),f=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$channelCount",description:"Displays the channel count in the server."},h=void 0,y={unversionedId:"functions/channelcount",id:"version-5.5.5/functions/channelcount",title:"$channelCount",description:"Displays the channel count in the server.",source:"@site/versioned_docs/version-5.5.5/functions/channelcount.md",sourceDirName:"functions",slug:"/functions/channelcount",permalink:"/docs/5.5.5/functions/channelcount",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"Jul 16, 2023",frontMatter:{title:"$channelCount",description:"Displays the channel count in the server."},sidebar:"docs",previous:{title:"$channelCooldown",permalink:"/docs/5.5.5/functions/channelcooldown"},next:{title:"$channelExists",permalink:"/docs/5.5.5/functions/channelexists"}},g={},v=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Types",id:"types",level:4},{value:"Examples",id:"examples",level:2}],k={toc:v},b="wrapper";function O(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(b,d(u(u({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function will display the total channel count on the server, including categories."),(0,r.kt)("h3",u({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$channelCount[guild ID?;type?]\n")),(0,r.kt)("h3",u({},{id:"fields"}),"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",u({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",u({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"guild ID"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"The id of the server whose number of channels are to be returned"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"type"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"The type of the channel"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"string"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"no")))),(0,r.kt)("h4",u({},{id:"types"}),"Types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"text"),(0,r.kt)("li",{parentName:"ul"},"voice"),(0,r.kt)("li",{parentName:"ul"},"stage"),(0,r.kt)("li",{parentName:"ul"},"category")),(0,r.kt)("h2",u({},{id:"examples"}),"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Without optional fields")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "channels",\n    code: `This guild has $channelCount channels!`\n});\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"With optional fields")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "channels",\n    code: `There are $channelCount[773352845738115102;stage] stage channels in Akarui Development server.`\n}); // Returns how many stage channels are there in Akarui Development server\n')))}O.isMDXComponent=!0}}]);