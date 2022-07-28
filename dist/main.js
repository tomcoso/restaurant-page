(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>b});var a=t(81),r=t.n(a),o=t(645),i=t.n(o),c=t(667),s=t.n(c),d=new URL(t(661),t.b),l=new URL(t(109),t.b),p=new URL(t(455),t.b),m=new URL(t(397),t.b),u=i()(r()),f=s()(d),h=s()(l),g=s()(p),v=s()(m);u.push([n.id,"\n@font-face {\n    font-family: 'Moon Dance';\n    src: url("+f+") format('truetype');\n}\n@font-face {\n    font-family: 'Montserrat Alternates';\n    src: url("+h+") format('truetype');\n    font-weight: 800;\n\n    src: url("+g+");\n    font-weight: 500;\n}\n/* big */\n@media (min-width: 500px) {\n    :root{\n        --title-font: 7rem;\n        --tabs-font: 2.4rem;\n        --info-font: 1rem;\n        --display-font: 2.5rem;\n        --header-gap: 30px;\n        --about-grid: 1fr / 3fr 2fr;\n        --contact-grid: 1fr / 1fr 1fr;\n        --contact-info-grid: 1fr / 13vw 1fr;\n\n        --menu-img-row: 1 / 3;\n        --menu-desc-column: 2 / 3;\n    }\n}\n/* smol */\n@media (max-width: 500px) { \n    :root{\n        --title-font: max(20vw, 4.5rem);\n        --tabs-font: max(8vw, 1.5rem);\n        --info-font: 4vw;\n        --display-font: max(8vw, 1.5rem);\n        --header-gap: min(2vh, 10px);\n    }\n}\n@media (max-width: 800px) {\n    :root {\n        --about-grid: 2fr 1fr / 1fr;\n        --menu-img-row: 1 / 2;\n        --menu-desc-column: 1 / 3;\n\n        --contact-info-grid: repeat(2, min-content) / 1fr;\n    }\n}\n@media (max-width: 1000px) {\n    :root {\n        --contact-grid: repeat(2, min-content) / 1fr;\n    }\n}\n\n* {\n    margin: 0%;\n    padding: 0%;\n    box-sizing: border-box;\n}\n\n#content {\n    background: no-repeat url("+v+") border-box;\n    background-position: 50% 72%;\n    background-size: cover;\n    width: 100vw;\n    height: 100vh;\n    \n    display: grid;\n    grid: min-content 1fr / 1fr;\n    gap: 25px;\n    place-items: center;\n}\nheader {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: var(--header-gap);\n}\n\n#title {\n    width: 100vw;\n    height: clamp(70px, 12.5vh, 200px);\n    box-shadow: inset 0px 75px 20px -20px #000;\n    display: flex;\n    justify-content: center;\n}\n#title > h1 {\n    font-size: var(--title-font);\n    font-weight: normal;\n    color: white;\n    text-align: center;\n    width: min-content;\n    white-space: nowrap;\n    z-index: 0;\n\n    transform: rotate(2deg) translateY(-25%);\n    font-family: 'Moon Dance', monospace;\n}\n\n#tabs {\n    display: flex;\n    justify-content: space-evenly;\n    background-color: rgba(0, 0, 0, 0.2);\n    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.20);\n    width: 80%;\n    z-index: 1;\n\n    font-family: 'Moon Dance';\n    font-size: var(--tabs-font);\n\n    line-height: 0%;\n    padding: 12px;\n}\n#tabs > div:hover {\n    color: white;\n    transition: 300ms;\n}\n#tabs > div:active {\n    color: white;\n    transform: translateY(5px);\n}\n#tabs > div.current {\n    color: white;\n}\n\n#tabs div {\n    text-shadow: 0px 0px 20px white;\n    cursor: pointer\n}\n\nmain {\n    background-color: rgba(0, 0, 0, 0.6);\n    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.6);\n    margin-top: 20px;\n    padding: 15px 10px;\n    width: 80%;\n    height: 90%;\n\n    font-family: 'Montserrat', sans-serif;\n    color: white;\n    text-align: left;\n\n    overflow: scroll;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n}\nmain::-webkit-scrollbar {\n    display: none;\n}\n\nmain .home-wrapper {\n    height: 100%;\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n}\n\nmain .display {\n    padding: 1rem;\n}\nmain .display > div {\n    font-size: var(--display-font);\n    font-family: 'Montserrat Alternates';\n    font-weight: 800;\n    margin-bottom: 1.5rem;\n}\n\nmain .about-panel {\n    display: grid;\n    grid: var(--about-grid);\n    place-content: center;\n}\nmain .about-panel .image {\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    place-self: center;\n    margin-top: -20%;\n}\n\nmain .about-panel .image img {\n    height: 280px;\n}\n\nmain .about-panel .info {\n    font-size: var(--info-font);\n    font-family: 'Montserrat Alternates';\n    font-weight: 500;\n    line-height: 2rem;\n    margin-bottom: 3rem;\n    padding: 1rem;\n}\n\nmain .wrapper {\n    width: 100%;\n    height: 100%;\n    padding: 4% 0;\n\n    display: grid;\n    grid: repeat(auto-fit, 1fr) / 1fr;\n    place-items: center;\n    gap: 10%;\n}\n\nmain .card {\n    width: 90%;\n    height: min-content;\n\n    display: grid;\n    grid: repeat(2, min-content) / min-content 1fr;\n    gap: 1rem;\n\n    background-color: rgba(0, 0, 0, 0.6);\n    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.6);\n}\n.card .item-img {\n    height: min(20vw, 150px);\n    width: min(20vw, 150px);\n\n    outline: 2px solid #000;\n    border-radius: 5%;\n\n    grid-row: var(--menu-img-row);\n}\n\n.card .title {\n    font-family: 'Moon Dance';\n    font-size: var(--tabs-font);\n    margin-bottom: -20%;\n}\n\n.card .desc {\n    font-family: 'Montserrat Alternates';\n    font-weight: 500;\n    font-size: 1rem;\n\n    grid-column: var(--menu-desc-column);\n}\n\nmain .contact-wrapper {\n    width: 100%;\n    height: 100%;\n\n    display: grid;\n    grid: var(--contact-grid);\n    place-items: center;\n}\n\n.contact-wrapper .info {\n    display: grid;\n    grid: repeat(auto-fit, 1fr) / 1fr;\n    gap: 8vh;\n    place-content: center;\n\n    width: min-content;\n    height: 100%;\n    padding: 1rem;\n}\n\n.contact-wrapper .info div{\n    font-size: var(--info-font);\n    font-family: 'Montserrat Alternates';\n    font-weight: 800;\n    line-height: 2rem;\n    white-space: nowrap;\n    width: 100%;\n\n    display: grid;\n    grid: var(--contact-info-grid);\n    gap: min(3vw, 1rem);\n}\n.contact-wrapper .info div span:last-child {\n    font-weight: 500;\n}\n.contact-wrapper .info div:first-child span:last-child{\n    white-space: normal;\n}\n\n.contact-wrapper .iframe {\n    width: max(200px, 90%);\n    height: max(300px, 90%);\n    min-height: 300px;\n}",""]);const b=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);a&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var o={},i=[],c=0;c<n.length;c++){var s=n[c],d=a.base?s[0]+a.base:s[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var m=t(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var f=r(u,a);a.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=a(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=t(o[i]);e[c].references--}for(var s=a(n,r),d=0;d<o.length;d++){var l=t(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},109:(n,e,t)=>{n.exports=t.p+"be0c7493a022c76bed70.ttf"},455:(n,e,t)=>{n.exports=t.p+"ae41054b33bf901739c8.ttf"},661:(n,e,t)=>{n.exports=t.p+"69bc2883db3811002422.ttf"},397:(n,e,t)=>{n.exports=t.p+"cd0f7516fd9f45a50e1f.jpg"}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={id:a,exports:{}};return n[a](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");a.length&&(n=a[a.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),a=t(795),r=t.n(a),o=t(569),i=t.n(o),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),m=t.n(p),u=t(426),f={};f.styleTagTransform=m(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;const h=t.p+"f6ac209357e757ae404f.png",g=t.p+"bb2a798665233af668dd.png",v=t.p+"d5472908e11c355e5ed2.png",b=t.p+"61a07d4fd3880431ca49.png",w=t.p+"274c671ce10eeba5345e.ico",x=function(){const n=function(){const n=document.querySelector("body");if(!document.querySelector("#content")){const e=document.querySelector("head"),t=document.createElement("link");t.setAttribute("href",w),t.setAttribute("rel","icon"),e.append(t);const a=document.createElement("div");a.id="content",n.appendChild(a);const r=document.createElement("header"),o=document.createElement("div");o.id="title";const i=document.createElement("h1");i.textContent="Sin Azucar",o.append(i);const c=document.createElement("div");c.id="tabs";const s=document.createElement("div");s.textContent="Home";const d=document.createElement("div");d.textContent="Menu";const l=document.createElement("div");l.textContent="Contact",c.append(s,d,l),r.append(o,c),a.append(r)}if(document.querySelector("main"))document.querySelectorAll("main div").forEach((n=>n.remove()));else{const n=document.createElement("main");content.append(n)}};return{home:function(){n();const e=document.querySelector("main"),t=document.createElement("div");t.classList.add("home-wrapper");const a=document.createElement("div");a.classList.add("display");const r=document.createElement("div");r.textContent="Stop with the sugar!";const o=document.createElement("div");o.textContent="Come make your dreams reality.",a.append(r,o);const i=document.createElement("div");i.classList.add("about-panel");const c=document.createElement("div");c.classList.add("info"),c.innerHTML="Sin Azucar is a space that offers a syncretism of industry and nature. Each of our vegan cafes is a space for dialogue and thought.<br>It is our dream to create a place where ideas and people can connect through conversation and wonder.";const s=document.createElement("div");s.classList.add("image");const d=document.createElement("img");d.src=b,d.alt="Coffee Beans",s.append(d),i.append(c,s),t.append(a,i),e.append(t)},menu:function(){n();const e=document.querySelector("main"),t=document.createElement("div");function a(n,e,a){const r=document.createElement("div");r.classList.add("card");const o=document.createElement("div");o.classList.add("item-img"),o.setAttribute("style",`background-image: url(${a}); background-size: 100%;`);const i=document.createElement("p");i.classList.add("title"),i.textContent=n;const c=document.createElement("p");c.classList.add("desc"),c.textContent=e,r.append(o,i,c),t.append(r)}t.classList.add("wrapper"),a("Coconut Oatmeal with Grilled Pear","Organic oats cooked with coconut milk and cinnamon, topped with poppy seeds, coconut flakes and a delicious grilled half pear.",h),a("Cinnamon Roll","Delicious housemade cinnamon roll with our special touch of aniseed",v),a("Falafel Sandwich","Morrocan falafel on house made organic rye bread, with grilled tomatoes and smoked pumpkin and paprika, topped with our vegan cream cheese",g),a("Coconut Oatmeal with Grilled Pear","Organic oats cooked with coconut milk and cinnamon, topped with poppy seeds, coconut flakes and a delicious grilled half pear.",h),a("Cinnamon Roll","Delicious housemade cinnamon roll with our special touch of aniseed",v),a("Falafel Sandwich","Morrocan falafel on house made organic rye bread, with grilled tomatoes and smoked pumpkin and paprika, topped with our vegan cream cheese",g),e.append(t)},contact:function(){n();const e=document.querySelector("main"),t=document.createElement("div");t.classList.add("contact-wrapper");const a=document.createElement("div");a.classList.add("info");const r=document.createElement("div"),o=document.createElement("span");o.textContent="Address:";const i=document.createElement("span");i.textContent="Av. 9 de Julio s/n, C1043 CABA, Argentina",r.append(o,i);const c=document.createElement("div"),s=document.createElement("span");s.textContent="Email:";const d=document.createElement("span");d.textContent="sinazucar0@nomail.com",c.append(s,d);const l=document.createElement("div"),p=document.createElement("span");p.textContent="Phone number:";const m=document.createElement("span");m.textContent="(+123) 000 1234",l.append(p,m);const u=document.createElement("div"),f=document.createElement("span");f.textContent="Opening times:";const h=document.createElement("span");h.innerHTML="Monday-Thursday: 10am-11pm<br>Friday-Sunday: 9am-12pm",u.append(f,h),a.append(r,c,u,l);const g=document.createElement("div");g.classList.add("iframe");const v=document.createElement("iframe");v.setAttribute("width","100%"),v.setAttribute("height","100%"),v.setAttribute("frameborder","0"),v.setAttribute("style","border:0"),v.setAttribute("referrerpolicy","no-referrer-when-downgrade"),v.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0167132768415!2d-58.383759085114846!3d-34.603738880459595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1sen!2ses!4v1658933736418!5m2!1sen!2ses"),v.setAttribute("loading","lazy"),g.append(v),t.append(a,g),e.append(t)}}}();x.home();const y=document.querySelectorAll("#tabs div");y.forEach((n=>{"Home"===n.textContent&&n.classList.add("current")})),y.forEach((n=>n.addEventListener("click",(function(e){switch(e.target.textContent){case"Home":x.home(),y.forEach((n=>n.classList.remove("current"))),n.classList.add("current");break;case"Menu":x.menu(),y.forEach((n=>n.classList.remove("current"))),n.classList.add("current");break;case"Contact":x.contact(),y.forEach((n=>n.classList.remove("current"))),n.classList.add("current")}}))))})()})();