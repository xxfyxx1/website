"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[27679],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25712:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>O,frontMatter:()=>f,metadata:()=>v,toc:()=>b});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>o(e,i(t)),m=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$interactionModal",description:"$interactionModal cr\xe9e un modal interactif.",id:"interactionModal"},g=void 0,v={unversionedId:"functions/interaction-related/interactionModal",id:"version-6.4.0/functions/interaction-related/interactionModal",title:"$interactionModal",description:"$interactionModal cr\xe9e un modal interactif.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/interaction-related/interactionModal.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/interactionModal",permalink:"/fr/docs/functions/interaction-related/interactionModal",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690091566,formattedLastUpdatedAt:"23 juil. 2023",frontMatter:{title:"$interactionModal",description:"$interactionModal cr\xe9e un modal interactif.",id:"interactionModal"},sidebar:"docs",previous:{title:"$image",permalink:"/fr/docs/functions/interaction-related/image"},next:{title:"$isAutoComplete",permalink:"/fr/docs/functions/interaction-related/isAutoComplete"}},y={},b=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],k={toc:b},x="wrapper";function O(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(x,d(p(p({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$interactionModal")," cr\xe9e un modal utilisateur interactif."),(0,r.kt)("h2",p({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$interactionModal[titre;IDpersonnalis\xe9;composants]\n")),(0,r.kt)("h2",p({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Champ"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",p({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"titre"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Le titre du modal qui sera affich\xe9e en tant qu'en-t\xeate du modal."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"IDpersonnalis\xe9"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"L'ID personnalis\xe9 du composant."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"composants"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Les composants de texte modal."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"vrai")))),(0,r.kt)("h2",p({},{id:"exemples"}),"Exemple(s)"),(0,r.kt)("p",null,"Ceci cr\xe9era un bouton et un modal qui enverra les donn\xe9es saisies au m\xeame salon et donnera une r\xe9ponse \xe9ph\xe9m\xe8re \xe0 l'utilisateur qui a soumis le formulaire :"),(0,r.kt)("p",null,'Veuillez noter que vous avez besoin de "',(0,r.kt)("strong",{parentName:"p"},"events: ",'["onMessage", "onInteractionCreate"]'),'" dans votre fichier principal (\xe9galement connu comme, dans la plupart des cas, index.js)'),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-js"}),'bot.command({\n    name: "interactionModal",\n    code: `\n\n$addButton[1;Appuez moi !;primary;IDexemple;false]\nbel exemple !`\n}); // Cr\xe9er un bouton qui va d\xe9clencher le modal.\n\nbot.interactionCommand({\n    name : "IDexemple",\n    prototype: "button", // Utiliser "prototype" comme cette interaction appartient \xe0 un bouton.\n    code: `\n$interactionModal[Exemple!;IDpersonnalis\xe9;\n  {actionRow:\n    {textInput:Quel est votre nom ?:1:entr\xe9eNom:true:Ton joli nom !:2:200}\n  }\n  {actionRow:\n    {textInput:Quel est votre \xe2ge ?:1:entr\xe9eAge:true:Votre jeune esprit !:1:3}\n  }\n  {actionRow:\n    {textInput:Quel est votre genre ?:2:entr\xe9eGenre:true:Tout fonctionnera !:1:10}\n  }\n]`\n}); /* Le modal lui-m\xeame, nous utilisons {textInput} pour accepter l\'entr\xe9e de l\'utilisateur.\n\nL\'utilisation correcte de {textInput} serait :\n\n{textInput:titre:type (1 : petit champ de texte, 2 : gros champ de texte):IDpersonnalis\xe9:requis( true, false ):placeholder:valMin:valMax}\n\n*/\n\nbot. nteractionCommand({\n    name "IDpersonnalis\xe9",\n    prototype: "modal", // Utiliser "prototype" comme cette interaction appartient \xe0 un modal.\n    code : `\n$interactionReply[Merci d\'avoir soumis ce formulaire!;;;;everyone;true]\n\n$title[$username a soumis un formulaire !;$userAvatar]\n$addField[Leur nom est...;$textInputValue[entr\xe9eNom]]]\n$addField[Leur \xe2ge est...;$textInputValue[entr\xe9eAge]]\n$addField[Leur sexe est...;$textInputValue[entr\xe9eGenre]]`\n}) ; /* Retourne les valeurs saisies pr\xe9c\xe9demment dans la fen\xeatre modale. Utilisation de $textInputValue pour les r\xe9cup\xe9rer.\n\nVous pouvez \xe9galement utiliser $channelSendMessage[IDsalon;contenu] pour envoyer les donn\xe9es \xe0 un autre salon.\n$channelSendMessage[$channelID;{newEmbed:{title:$username a soumis un formulaire !:$userAvatar}{field:Leur nom est..:$textInputValue[entr\xe9eNom]}{field:Leur \xe2ge est..:$textInputValue[entr\xe9eAge]}{field:Leur sexe est..:$textInputValue[entr\xe9eGenre]}}]\n*/\n')))}O.isMDXComponent=!0}}]);