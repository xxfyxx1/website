"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[94299],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(a),f=n,u=d["".concat(p,".").concat(f)]||d[f]||m[f]||i;return a?r.createElement(u,l(l({ref:t},c),{},{components:a})):r.createElement(u,l({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},43088:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>k,default:()=>b,frontMatter:()=>u,metadata:()=>h,toc:()=>y});var r=a(3905),n=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&c(e,a,t[a]);if(o)for(var a of o(t))s.call(t,a)&&c(e,a,t[a]);return e},m=(e,t)=>i(e,l(t)),f=(e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&s.call(e,r)&&(a[r]=e[r]);return a};const u={title:"$createThread",description:"Creates a thread."},k=void 0,h={unversionedId:"functions/createthread",id:"version-5.5.5/functions/createthread",title:"$createThread",description:"Creates a thread.",source:"@site/versioned_docs/version-5.5.5/functions/createthread.md",sourceDirName:"functions",slug:"/functions/createthread",permalink:"/tr/docs/5.5.5/functions/createthread",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 Tem 2023",frontMatter:{title:"$createThread",description:"Creates a thread."},sidebar:"docs",previous:{title:"$createSticker",permalink:"/tr/docs/5.5.5/functions/createsticker"},next:{title:"$createVar",permalink:"/tr/docs/5.5.5/functions/createvar"}},g={},y=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Archive Options",id:"archive-options",level:4},{value:"Type Options",id:"type-options",level:4},{value:"Footnote",id:"footnote",level:6},{value:"Example",id:"example",level:2}],v={toc:y},N="wrapper";function b(e){var t=e,{components:a}=t,n=f(t,["components"]);return(0,r.kt)(N,m(d(d({},v),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function will create a thread for given channel ID."),(0,r.kt)("h3",d({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$createThread[channelID;name;archive;type;start message?;return ID?]\n")),(0,r.kt)("h3",d({},{id:"fields"}),"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",d({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",d({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",d({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"channelID"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"Channel ID of the thread will be created"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"name"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"The thread channel is name"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"string"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"archive"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"Automatically archiving thread time"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"str & num"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"type"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"Type of the thread"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"string"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"start message"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"Starting message by giving message ID"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"return ID"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"Returning thread's ID"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"string"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"no")))),(0,r.kt)("h4",d({},{id:"archive-options"}),"Archive Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"60")," \u2014 This option makes the thread stays active for ",(0,r.kt)("strong",{parentName:"li"},"1 hour"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1140")," \u2014 This option makes the thread stays active for ",(0,r.kt)("strong",{parentName:"li"},"1 day"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"4320")," \u2014 This option makes the thread stays active for ",(0,r.kt)("strong",{parentName:"li"},"3 days"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"10080")," \u2014 This option makes the thread stays active for ",(0,r.kt)("strong",{parentName:"li"},"1 week"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MAX")," \u2014 This option makes the thread stays active for ",(0,r.kt)("strong",{parentName:"li"},"maximum archive time for the server"),".")),(0,r.kt)("h4",d({},{id:"type-options"}),"Type Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PUBLIC")," \u2014 This option makes the thread visible to everyone."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PRIVATE")," \u2014 This option ensures that the threads can only be seen by people ",(0,r.kt)("strong",{parentName:"li"},"who have been added in it."))),(0,r.kt)("h6",d({},{id:"footnote"}),"Footnote"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"*",(0,r.kt)("inlineCode",{parentName:"strong"},"type")),' property cannot be settled to "',(0,r.kt)("strong",{parentName:"li"},"private"),'" if the guild is not atleast level 2.*')),(0,r.kt)("h2",d({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n  name: \"create-thread\",\n  code: `\n  Let's talk about cats!\n  \n  $createThread[channelID;Talking about cats!;MAX;PUBLIC;971437578681212988;yes]\n  `\n//It will create a thread for maximum archive time along on give ID with returning thread's ID.\n});\n")))}b.isMDXComponent=!0}}]);