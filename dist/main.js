(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>f});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(704),t.b),l=new URL(t(606),t.b),u=i()(r()),p=s()(d),m=s()(l);u.push([e.id,"@font-face {\n    font-family: 'MyFont';\n    src: url("+p+") format('woff2'),\n      url("+p+") format('woff');\n}\n\n* {\n    margin: 0;\n}\n\nbody {\n    background-color: black;\n}\n\n/* Header Styling */\n#header {\n    color:#57171c;\n    background-color: #cfcbbc;\n    padding: 24px;\n    display: flex;\n    justify-content: space-between;\n    font-family: \"MyFont\";\n}\n\n.headerTitle {\n    font-size: 30px;\n}\n\n.home, .menu, .about {\n    color:#781720;\n    background-color: #b0ac9d;\n    border-radius: 20px;\n    width: 100px;\n    font-size: large;\n    opacity: 0.8;\n}\n\n.home:hover, .menu:hover, .about:hover {\n    opacity: 1;\n    transform: scale(1.2);\n}\n\n/* styling for home tab */\n.burgerPic {\n    width: 100%;\n    height: auto;\n} \n\n.squidPic {\n    position: absolute;\n    top:300px;\n    height: 350px;\n    width: 350px;\n}\n\n.imageTxt {\n    position: relative;\n    top:75px;\n    left: 45px;\n    color: red;\n    font-size: 40px;\n}\n\n/* styling for menu tab */\n.menuContainer {\n    display: grid;\n    grid-template-rows: repeat(2, 300px); /* CONTINUE FROM HERE EDWARD :) */\n    grid-template-columns: repeat(3, 200px);\n    padding: 50px;\n    justify-content: space-evenly;\n    gap:80px;\n}\n\n.menuHeader {\n    color: darkred;\n}\n\n.menuDiv {\n    padding: 20px;\n    border-radius: 30px;\n    align-items: center;\n    text-align: center;\n    width: 200px;\n    border: 2px solid brown;\n    border-top: 6px solid brown;\n    border-right: 6px solid brown;\n    background-color: #c9af98;\n    opacity: 0.5;\n}\n\n.menuName {\n    color:darkred;\n    font-size: 20px;\n    font-weight: bold;\n}\n\n.menuInfo {\n    font-size: 20px;\n    margin-top: 40px;\n    color:blue;\n}\n\n/* styling for about tab */\n.aboutContainer {\n    display: grid;\n    grid-template-rows: repeat(2, 1fr); /* CONTINUE FROM HERE EDWARD :) */\n    padding: 50px;\n    justify-content: center;\n    gap:80px;\n    background-image: url("+m+");\n    height: 700px;\n}\n\n.aboutDiv {\n    padding: 20px;\n    border-radius: 30px;\n    align-items: center;\n    text-align: center;\n    width: 300px;\n    border: 2px solid brown;\n    border-top: 6px solid brown;\n    border-right: 6px solid brown;\n    background-color: #c9af98;\n    opacity: 0.9;\n}\n\n.aboutInfo {\n    color:darkred;\n    font-size: 20px;\n    font-weight: bold;\n}\n\n.phonePic {\n    height: 300px;\n    margin-left: 20px;    \n}\n\n\n\n\n\n\n\n\n\n",""]);const f=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=r(m,o);o.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},704:(e,n,t)=>{e.exports=t.p+"faaad004d3fec9f6b77c.woff"},606:(e,n,t)=>{e.exports=t.p+"5e6fbbd239d2f353cbdd.jpg"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),m=t(28),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=t.p+"e0c57691de26d70c9d5c.jpg",b=t.p+"dab465cc19ad9f066cfe.png";let g=!1;const v=document.getElementById("content"),x=document.createElement("div");function y(){g=!0,v.appendChild(x);const e=document.createElement("p"),n=document.createElement("p");e.classList.add("imageTxt"),n.classList.add("imageTxt"),e.textContent="The Juiciest burgers a man has ever laid his God forbidden eyes on.",n.textContent="Just look at Squidward's reaction!",x.appendChild(e),x.appendChild(n);const t=new Image;t.src=b,t.classList.add("squidPic"),x.appendChild(t);const o=new Image;o.src=h,o.classList.add("burgerPic"),x.appendChild(o)}function C(){for(g=!1;x.firstChild;)x.removeChild(x.firstChild)}let E=!1;const w=document.getElementById("content"),T=document.createElement("div");T.classList.add("menuContainer");const L=(e,n)=>({title:e,description:n}),M=[L("Old Fashioned: $8.95","Lettuce, Tomatoes, Cheese, Onions, Pickles, Mustard"),L("Sloppy Joe's: $7.95","Tomatoes, Onions, Pickles, Mustard, Cheese, Chili"),L("The Supreme: $10.95","SourDough Bread, Lettuce, Tomatoes, Double Meat, Double Cheese, Onions, Pickles, Mustard"),L("The Bitch'n Ed: $12.95","Triple Meat, Triple Cheese, Lettuce, Tomatoes, Cheese, Onions, Pickles, Mushrooms, BBQ Sauce, Mustard"),L("The Kid Burger: $5.95","Jr. Patty, Lettuce, Tomatoes, Cheese, Onions"),L("Mozzarella Sticks: $3.95","4 Piece Mozzarella Sticks with Marinara Dipping Sauce")];function S(){for(E=!1;T.firstChild;)T.removeChild(T.firstChild);w.removeChild(T)}var k=t(606);let I=!1;const P=document.getElementById("content"),D=document.createElement("div");function O(){for(I=!1;D.firstChild;)D.removeChild(D.firstChild);P.removeChild(D)}D.classList.add("aboutContainer"),y();const B=document.getElementById("header"),N=document.createElement("p");N.classList.add("headerTitle"),N.textContent="Ed's BITCH'N Burgers",B.appendChild(N);const R=document.createElement("button");R.classList.add("home"),R.textContent="Home",B.appendChild(R);const j=document.createElement("button");j.classList.add("menu"),j.textContent="Menu",B.appendChild(j);const z=document.createElement("button");z.classList.add("about"),z.textContent="About",B.appendChild(z),document.querySelector(".home").addEventListener("click",(()=>{g||(y(),1==E?S():O())})),document.querySelector(".menu").addEventListener("click",(()=>{E||(E=!0,w.appendChild(T),M.forEach((e=>{const n=document.createElement("div"),t=document.createElement("p"),o=document.createElement("p");n.classList.add("menuDiv"),t.classList.add("menuName"),o.classList.add("menuInfo"),t.innerText=e.title,o.innerText=e.description,n.append(t,o),T.appendChild(n)})),g?C():O())})),document.querySelector(".about").addEventListener("click",(()=>{I||(function(){I=!0,P.appendChild(D);const e=document.createElement("div"),n=document.createElement("div");e.classList.add("aboutDiv"),n.classList.add("aboutDiv");const t=document.createElement("p"),o=document.createElement("p");t.classList.add("aboutInfo"),o.classList.add("aboutInfo"),t.textContent="Reach us at 123-456-7890",o.textContent="Email: edsburgers@fakeemail.com",e.appendChild(t),n.appendChild(o),D.append(e,n);const r=new Image;r.src=k,r.classList.add("phonePic")}(),g?C():S())}))})()})();