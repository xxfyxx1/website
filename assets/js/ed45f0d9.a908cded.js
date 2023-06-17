"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[92717],{3905:(e,a,l)=>{l.d(a,{Zo:()=>v,kt:()=>g});var t=l(67294);function r(e,a,l){return a in e?Object.defineProperty(e,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[a]=l,e}function i(e,a){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),l.push.apply(l,t)}return l}function n(e){for(var a=1;a<arguments.length;a++){var l=null!=arguments[a]?arguments[a]:{};a%2?i(Object(l),!0).forEach((function(a){r(e,a,l[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(l,a))}))}return e}function s(e,a){if(null==e)return{};var l,t,r=function(e,a){if(null==e)return{};var l,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)l=i[t],a.indexOf(l)>=0||(r[l]=e[l]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)l=i[t],a.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var o=t.createContext({}),u=function(e){var a=t.useContext(o),l=a;return e&&(l="function"==typeof e?e(a):n(n({},a),e)),l},v=function(e){var a=u(e.components);return t.createElement(o.Provider,{value:a},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var l=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,v=s(e,["components","mdxType","originalType","parentName"]),p=u(l),c=r,g=p["".concat(o,".").concat(c)]||p[c]||b[c]||i;return l?t.createElement(g,n(n({ref:a},v),{},{components:l})):t.createElement(g,n({ref:a},v))}));function g(e,a){var l=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=l.length,n=new Array(i);n[0]=c;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[p]="string"==typeof e?e:r,n[1]=s;for(var u=2;u<i;u++)n[u]=l[u];return t.createElement.apply(null,n)}return t.createElement.apply(null,l)}c.displayName="MDXCreateElement"},64346:(e,a,l)=>{l.r(a),l.d(a,{assets:()=>o,contentTitle:()=>n,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var t=l(87462),r=(l(67294),l(3905));const i={title:"Variables",description:"Here you can see how to setup variables."},n=void 0,s={unversionedId:"guides/variables",id:"version-5.5.5/guides/variables",title:"Variables",description:"Here you can see how to setup variables.",source:"@site/versioned_docs/version-5.5.5/guides/variables.md",sourceDirName:"guides",slug:"/guides/variables",permalink:"/docs/5.5.5/guides/variables",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1686964928,formattedLastUpdatedAt:"Jun 17, 2023",frontMatter:{title:"Variables",description:"Here you can see how to setup variables."},sidebar:"docs",previous:{title:"Setup",permalink:"/docs/5.5.5/guides/setup"},next:{title:"Client Status",permalink:"/docs/5.5.5/guides/client-status"}},o={},u=[{value:"Setup Variables",id:"setup-variables",level:3},{value:"Information",id:"information",level:3},{value:"Usage",id:"usage",level:2},{value:"Usage with table",id:"usage-with-table",level:3},{value:"Example",id:"example",level:3},{value:"Multiple Variables",id:"multiple-variables",level:3},{value:"Channel Variables",id:"channel-variables",level:2},{value:"Setting the channel variable",id:"setting-the-channel-variable",level:3},{value:"Retrieving the channel value",id:"retrieving-the-channel-value",level:3},{value:"Message Variables",id:"message-variables",level:2},{value:"Setting the message variable",id:"setting-the-message-variable",level:3},{value:"Retrieving the message variable value",id:"retrieving-the-message-variable-value",level:3},{value:"Global Variables",id:"global-variables",level:2},{value:"Setting the global variable",id:"setting-the-global-variable",level:3},{value:"Retrieving the global variable value",id:"retrieving-the-global-variable-value",level:3},{value:"Global User Variables",id:"global-user-variables",level:2},{value:"Setting the global user variable",id:"setting-the-global-user-variable",level:3},{value:"Retrieving the global user variable value",id:"retrieving-the-global-user-variable-value",level:3},{value:"Local User Variables",id:"local-user-variables",level:2},{value:"Setting the local user variable",id:"setting-the-local-user-variable",level:3},{value:"Retrieving the local user variable value",id:"retrieving-the-local-user-variable-value",level:3},{value:"Server Variables",id:"server-variables",level:2},{value:"Setting the server variable",id:"setting-the-server-variable",level:3},{value:"Retrieving the server variable value",id:"retrieving-the-server-variable-value",level:3}],v={toc:u},p="wrapper";function b(e){let{components:a,...l}=e;return(0,r.kt)(p,(0,t.Z)({},v,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"It must be inside of your main file, in most of the cases this is ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js"))),(0,r.kt)("h3",{id:"setup-variables"},"Setup Variables"),(0,r.kt)("h3",{id:"information"},"Information"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("inlineCode",{parentName:"li"},"Variable")," => The variable name. (The variable ID to be used later on)"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("inlineCode",{parentName:"li"},"Value")," => The default value of the variable.")),(0,r.kt)("p",null,"It's always this default value unless you change it."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/setvar"},"$setVar")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/setuservar"},"$setUserVar")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/setservervar"},"$setServerVar")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/setglobaluservar"},"$setGlobalUserVar")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/setmessagevar"},"$setMessageVar")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/setchannelvar"},"$setChannelVar"))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.variables({\nvariable: "value"\n})\n')),(0,r.kt)("h3",{id:"usage-with-table"},"Usage with table"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.variables({\nvariable: \"value\"\n} ,'main') \n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"main")," is the default table name, this can be different for those who have changed the default table")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.variables({\nmoney: 0\n})\n")),(0,r.kt)("h3",{id:"multiple-variables"},"Multiple Variables"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.variables({\nmoney: 0,\nleref: "developer"\n})\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Integers do not need a string")),(0,r.kt)("h2",{id:"channel-variables"},"Channel Variables"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The variable value will be saved to a channel")),(0,r.kt)("h3",{id:"setting-the-channel-variable"},"Setting the channel variable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$setChannelVar[variable;value;channelID (optional)]\n")),(0,r.kt)("h3",{id:"retrieving-the-channel-value"},"Retrieving the channel value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$getChannelVar[variable;channelID (optional)]\n")),(0,r.kt)("h2",{id:"message-variables"},"Message Variables"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The variable value will be saved to a message")),(0,r.kt)("h3",{id:"setting-the-message-variable"},"Setting the message variable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$setMessageVar[variable;value;messageID]\n")),(0,r.kt)("h3",{id:"retrieving-the-message-variable-value"},"Retrieving the message variable value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$getMessageVar[variable;messageID]\n")),(0,r.kt)("h2",{id:"global-variables"},"Global Variables"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The value will be assigned to everyone and it will be the same for every guild")),(0,r.kt)("h3",{id:"setting-the-global-variable"},"Setting the global variable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$setVar[Variable;Value]\n")),(0,r.kt)("h3",{id:"retrieving-the-global-variable-value"},"Retrieving the global variable value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$getVar[Variable]\n")),(0,r.kt)("h2",{id:"global-user-variables"},"Global User Variables"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The value will be assigned to a user and it will be the same for every guild")),(0,r.kt)("h3",{id:"setting-the-global-user-variable"},"Setting the global user variable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$setGlobalUserVar[Variable;Value;User ID (optional)]\n")),(0,r.kt)("h3",{id:"retrieving-the-global-user-variable-value"},"Retrieving the global user variable value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$getGlobalUserVar[Variable;User ID (Optional)]\n")),(0,r.kt)("h2",{id:"local-user-variables"},"Local User Variables"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The value will be assigned to a user and it will be assigned per guild")),(0,r.kt)("h3",{id:"setting-the-local-user-variable"},"Setting the local user variable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$setUserVar[Variable;Value;User ID (Optional);Guild ID (Optional)]\n")),(0,r.kt)("h3",{id:"retrieving-the-local-user-variable-value"},"Retrieving the local user variable value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$getUserVar[Variable;User ID (Optional);Guild ID (Optional)]\n")),(0,r.kt)("h2",{id:"server-variables"},"Server Variables"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The value will be assigned per Guild.")),(0,r.kt)("h3",{id:"setting-the-server-variable"},"Setting the server variable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$setServerVar[Variable;Value;Guild ID (Optional)]\n")),(0,r.kt)("h3",{id:"retrieving-the-server-variable-value"},"Retrieving the server variable value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$getServerVar[Variable;Guild ID (Optional)]\n")))}b.isMDXComponent=!0}}]);