"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[53568],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(t),g=o,d=c["".concat(p,".").concat(g)]||c[g]||f[g]||a;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},63063:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>m,default:()=>k,frontMatter:()=>d,metadata:()=>y,toc:()=>h});var r=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,c=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&u(e,t,n[t]);if(l)for(var t of l(n))s.call(n,t)&&u(e,t,n[t]);return e},f=(e,n)=>a(e,i(n)),g=(e,n)=>{var t={};for(var r in e)p.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t};const d={title:"$songInfo",description:"Returns of info of the current playing song."},m=void 0,y={unversionedId:"functions/songinfo",id:"version-5.5.5/functions/songinfo",title:"$songInfo",description:"Returns of info of the current playing song.",source:"@site/versioned_docs/version-5.5.5/functions/songinfo.md",sourceDirName:"functions",slug:"/functions/songinfo",permalink:"/es/docs/5.5.5/functions/songinfo",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689452183,formattedLastUpdatedAt:"15 jul 2023",frontMatter:{title:"$songInfo",description:"Returns of info of the current playing song."},sidebar:"docs",previous:{title:"$songFilter",permalink:"/es/docs/5.5.5/functions/songfilter"},next:{title:"$splitText",permalink:"/es/docs/5.5.5/functions/splittext"}},b={},h=[{value:"Exapmple for current playing song:",id:"exapmple-for-current-playing-song",level:4},{value:"Example for next playing song:",id:"example-for-next-playing-song",level:4},{value:"Properties:",id:"properties",level:3}],v={toc:h},O="wrapper";function k(e){var n=e,{components:t}=n,o=g(n,["components"]);return(0,r.kt)(O,f(c(c({},v),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns the ","<","property",">"," of the currently playing song."),(0,r.kt)("p",null,"Raw usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$songInfo[property;position]")),(0,r.kt)("h4",c({},{id:"exapmple-for-current-playing-song"}),"Exapmple for current playing song:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "songInfo",\ncode: `\nCurrrently Playing: $songInfo[title]\n`\n})\n')),(0,r.kt)("h4",c({},{id:"example-for-next-playing-song"}),"Example for next playing song:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "next-song",\ncode: `\nNext Playing: $songInfo[title;1]\n`\n})\n')),(0,r.kt)("h3",c({},{id:"properties"}),"Properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"title - Song Title"),(0,r.kt)("li",{parentName:"ul"},"description - Description of the song's YouTube video."),(0,r.kt)("li",{parentName:"ul"},"duration - Duration of the song"),(0,r.kt)("li",{parentName:"ul"},"duration","_","left - Duration left for the song to end."),(0,r.kt)("li",{parentName:"ul"},"current","_","duration - The current duration of the song."),(0,r.kt)("li",{parentName:"ul"},"url - URL to the youtube video of the current song."),(0,r.kt)("li",{parentName:"ul"},"userID - ID of the sser that added the song."),(0,r.kt)("li",{parentName:"ul"},"thumbnail - The thumbnail of the song."),(0,r.kt)("li",{parentName:"ul"},"publisher - Channel that uploaded the song."),(0,r.kt)("li",{parentName:"ul"},"publisher","_","url - Link of the channel that uploaded the song.")),(0,r.kt)("p",null,"The cuurent song's position is ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"- so next one's is ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," and so on..."))}k.isMDXComponent=!0}}]);