parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"jUof":[function(require,module,exports) {

},{"./../../fonts/Geometria.ttf":[["Geometria.000823c6.ttf","HyuR"],"HyuR"],"./../../fonts/Geometria-Medium.ttf":[["Geometria-Medium.45bab529.ttf","kBo0"],"kBo0"],"./../../fonts/Geometria-Italic.ttf":[["Geometria-Italic.ad3d7309.ttf","lMU5"],"lMU5"]}],"cOvS":[function(require,module,exports) {

},{}],"tyF0":[function(require,module,exports) {

},{"./../../images/icons/phone.svg":[["phone.2d74bbc1.svg","cqWl"],"cqWl"],"./../../images/icons/user.svg":[["user.14532dbd.svg","CQiw"],"CQiw"]}],"hYbX":[function(require,module,exports) {

},{}],"Fh9w":[function(require,module,exports) {

},{}],"mf3O":[function(require,module,exports) {

},{}],"UzPv":[function(require,module,exports) {

},{}],"CplH":[function(require,module,exports) {

},{}],"gN5a":[function(require,module,exports) {
"use strict";require("../sass/base/_reset.scss"),require("../sass/utils/_variables.scss"),require("../sass/components/_header.scss"),require("../sass/components/_recent.scss"),require("../sass/components/_subscribe.scss"),require("../sass/components/_ask.scss"),require("../sass/product.scss"),require("../sass/components/_footer.scss");const s=document.querySelectorAll(".js-content-btn"),e=document.querySelector(".js-add-product-btn"),r=document.querySelector(".js-success-message"),t=document.querySelector(".js-notification-close");function c(s){s.currentTarget.parentNode.classList.toggle("is-open")}function n(s){s.preventDefault(),i(),$.ajax({type:"POST",data:$(this).serialize(),url:"",success:function(s){i()},error:function(s){}})}function i(){r.classList.remove("visually-hidden"),t.addEventListener("click",o)}function o(){r.classList.add("visually-hidden"),t.removeEventListener("click",o)}s.forEach(s=>s.addEventListener("click",c)),e.addEventListener("click",n),$(".card__gallery").slick({infinite:!0,dots:!0,arrows:!0,prevArrow:$(".gallery__previos"),nextArrow:$(".gallery__next")});
},{"../sass/base/_reset.scss":"jUof","../sass/utils/_variables.scss":"UzPv","../sass/components/_header.scss":"tyF0","../sass/components/_recent.scss":"UzPv","../sass/components/_subscribe.scss":"UzPv","../sass/components/_ask.scss":"UzPv","../sass/product.scss":"UzPv","../sass/components/_footer.scss":"UzPv"}]},{},["gN5a"], null)
//# sourceMappingURL=/move-clothes/product.b0122468.js.map