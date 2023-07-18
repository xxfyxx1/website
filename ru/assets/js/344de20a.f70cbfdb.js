"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[92529],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(f,i(i({ref:t},s),{},{components:n})):o.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60775:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>w,frontMatter:()=>f,metadata:()=>g,toc:()=>v});var o=n(3905),a=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&s(e,n,t[n]);if(p)for(var n of p(t))c.call(t,n)&&s(e,n,t[n]);return e},u=(e,t)=>r(e,i(t)),d=(e,t)=>{var n={};for(var o in e)l.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&p)for(var o of p(e))t.indexOf(o)<0&&c.call(e,o)&&(n[o]=e[o]);return n};const f={title:"Autocomplete",description:"This page covers everything about the autocomplete property of Application Commands.",id:"interaction-autocomplete"},h=void 0,g={unversionedId:"guides/application-cmds/interaction-autocomplete",id:"version-6.4.0/guides/application-cmds/interaction-autocomplete",title:"Autocomplete",description:"This page covers everything about the autocomplete property of Application Commands.",source:"@site/versioned_docs/version-6.4.0/guides/application-cmds/4autocomplete.md",sourceDirName:"guides/application-cmds",slug:"/guides/application-cmds/interaction-autocomplete",permalink:"/ru/docs/guides/application-cmds/interaction-autocomplete",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689718489,formattedLastUpdatedAt:"18 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"Autocomplete",description:"This page covers everything about the autocomplete property of Application Commands.",id:"interaction-autocomplete"},sidebar:"docs",previous:{title:"Subcommand Groups",permalink:"/ru/docs/guides/application-cmds/interaction-subcommandgroups"},next:{title:"Localization",permalink:"/ru/docs/guides/application-cmds/interaction-localization"}},y={},v=[{value:"Usage",id:"usage",level:4}],b={toc:v},O="wrapper";function w(e){var t=e,{components:n}=t,a=d(t,["components"]);return(0,o.kt)(O,u(m(m({},b),a),{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are multiple ways of using ",(0,o.kt)("inlineCode",{parentName:"p"},"$autoCompleteRespond"),", you can either use JSON or the simple aoi.js way."),(0,o.kt)("h4",m({},{id:"usage"}),"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$autoCompleteRespond[OptionName;OptionReply;...]\n")),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-php"}),'$autoCompleteRespond[[{ \n    "name" : "Option Name One",\n    "value" : "Option Reply 1"\n  }, {\n    "name" : "Option Name Two",\n    "value" : "Option Reply 2"\n  }]]\n')),(0,o.kt)("p",null,'Create the slash command, this will create a global application command with the name of "example" with an option which uses autoComplete:'),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: \'createApplicationCommand\',\n    code: `\n  $createApplicationCommand[global;example;Awesome example interaction command with auto-complete!;true;slash;[{\n    "name": "option", \n    "description": "First option!",\n    "required": false,\n    "type": 3, \n    "autocomplete": true\n}]]`\n});\n')),(0,o.kt)("p",null,"Checking if autoComplete equals ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", if so it will respond with the given respond (addition of the code above):"),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "example",\n    prototype: "slash",\n    $if: "old",\n    code: `\n  $if[$isAutocomplete==true]\n  $autoCompleteRespond[First option;You selected the first option, therefore I\'m responding with this!;Second option;You selected the first second, therefore I\'m responding with this!]\n  $else\n  $interactionReply[$slashOption[option]]\n  $endif\n  `\n});\n')),(0,o.kt)("p",null,'Create the slash-command, this will create a global application command with the name "example": '),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: \'createApplicationCommand\',\n    code: `\n  $createApplicationCommand[global;example;Awesome example interaction command with auto-complete!;true;slash;[{\n    "name": "option",\n    "description": "First option with autocomplete.",\n    "required": false, \n    "type": 3,\n    "autocomplete": true \n  }, {\n    "name": "anotheroption",\n    "description": "Another option.",\n    "required": false,\n    "type": 3\n}]]`\n});\n')),(0,o.kt)("p",null,"Using JSON and checking if autoComplete equals ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", if so it will respond with the given response :"),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "example",\n    prototype: "slash",\n    $if: "old",\n    code: `\n  $if[$isAutocomplete==true]\n  $autoCompleteRespond[[{ \n    "name" : "First Option",\n    "value" : "You selected the first option, therefore I\\\'m responding with this!"\n  }, {\n    "name" : "Second Option",\n    "value" : "You selected the second option, therefore I\\\'m responding with this!"\n  }]]\n  $else\n  $interactionReply[$slashOption[option] - autocomplete #SEMI# $slashOption[anotheroption] - false autocomplete;;;;everyone]\n  $endif\n  `\n});\n')))}w.isMDXComponent=!0}}]);