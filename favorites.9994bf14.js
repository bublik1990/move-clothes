parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"jUof":[function(require,module,exports) {

},{"./../../fonts/Geometria.ttf":[["Geometria.000823c6.ttf","HyuR"],"HyuR"],"./../../fonts/Geometria-Medium.ttf":[["Geometria-Medium.45bab529.ttf","kBo0"],"kBo0"],"./../../fonts/Geometria-Italic.ttf":[["Geometria-Italic.ad3d7309.ttf","lMU5"],"lMU5"],"./../../fonts/Geometria-ExtraLight.ttf":[["Geometria-ExtraLight.a3de7ec7.ttf","5Epv"],"5Epv"],"./../../fonts/Geometria-Bold.ttf":[["Geometria-Bold.077fed0f.ttf","mpzk"],"mpzk"],"./../../fonts/Geometria-Light.ttf":[["Geometria-Light.57f3aab9.ttf","YFD0"],"YFD0"]}],"c+Ov":[function(require,module,exports) {

},{}],"48ty":[function(require,module,exports) {

},{"./../../images/icons/phone.svg":[["phone.2d74bbc1.svg","2cqW"],"2cqW"],"./../../images/icons/user.svg":[["user.14532dbd.svg","CQiw"],"CQiw"]}],"hYbX":[function(require,module,exports) {

},{}],"Fh9w":[function(require,module,exports) {

},{}],"+kUG":[function(require,module,exports) {

},{}],"X9Bg":[function(require,module,exports) {

},{}],"CplH":[function(require,module,exports) {

},{}],"4q+L":[function(require,module,exports) {
"use strict";require("../sass/base/_reset.scss"),require("../sass/utils/_variables.scss"),require("../sass/components/_header.scss"),require("../sass/components/_recent.scss"),require("../sass/components/_subscribe.scss"),require("../sass/components/_product.scss"),require("../sass/favorites.scss"),require("../sass/components/_footer.scss");const s=document.querySelectorAll(".product__delete");function e(){const s=this.closest(".product__item"),e=s.dataset.id;s.remove(),t(),$.ajax({type:"POST",data:e,url:"",success:function(e){s.remove(),t()}})}function t(){document.querySelectorAll(".product__item").length||(document.querySelector(".favorites__empty").classList.remove("is-hidden"),document.querySelector(".favorites__list").classList.add("is-hidden"))}s.forEach(s=>{s.addEventListener("click",e.bind(s))});
},{"../sass/base/_reset.scss":"jUof","../sass/utils/_variables.scss":"X9Bg","../sass/components/_header.scss":"48ty","../sass/components/_recent.scss":"X9Bg","../sass/components/_subscribe.scss":"X9Bg","../sass/components/_product.scss":"X9Bg","../sass/favorites.scss":"X9Bg","../sass/components/_footer.scss":"X9Bg"}]},{},["4q+L"], null)
//# sourceMappingURL=/move-clothes/favorites.9994bf14.js.map