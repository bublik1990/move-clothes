parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"c+Ov":[function(require,module,exports) {

},{}],"jUof":[function(require,module,exports) {

},{"./../../fonts/Geometria.ttf":[["Geometria.000823c6.ttf","HyuR"],"HyuR"],"./../../fonts/Geometria-Medium.ttf":[["Geometria-Medium.45bab529.ttf","kBo0"],"kBo0"],"./../../fonts/Geometria-Italic.ttf":[["Geometria-Italic.ad3d7309.ttf","lMU5"],"lMU5"],"./../../fonts/Geometria-ExtraLight.ttf":[["Geometria-ExtraLight.a3de7ec7.ttf","5Epv"],"5Epv"],"./../../fonts/Geometria-Bold.ttf":[["Geometria-Bold.077fed0f.ttf","mpzk"],"mpzk"],"./../../fonts/Geometria-Light.ttf":[["Geometria-Light.57f3aab9.ttf","YFD0"],"YFD0"]}],"48ty":[function(require,module,exports) {

},{"./../../images/icons/phone.svg":[["phone.2d74bbc1.svg","2cqW"],"2cqW"],"./../../images/icons/user.svg":[["user.14532dbd.svg","CQiw"],"CQiw"]}],"+kUG":[function(require,module,exports) {

},{}],"zYoX":[function(require,module,exports) {

},{"./../images/icons/down-arrow.svg":[["down-arrow.3b385ef4.svg","6VSQ"],"6VSQ"]}],"CplH":[function(require,module,exports) {

},{}],"hmUl":[function(require,module,exports) {
"use strict";require("../sass/utils/_variables.scss"),require("../sass/base/_reset.scss"),require("../sass/components/_header.scss"),require("../sass/components/_product.scss"),require("../sass/order.scss"),require("../sass/components/_footer.scss");const e=document.querySelector(".js-more"),t=document.querySelector(".js-stage__details"),n=document.querySelector(".js-client-edit"),c=document.querySelector(".client"),o=document.querySelector(".js-finish-editing"),s=document.querySelector(".delivery"),r=document.querySelector(".payment"),i=document.querySelector(".js-cities"),l=document.querySelectorAll('.post__input[name="post"]'),u=document.querySelector(".js-departments"),a=document.querySelector(".js-post-button");function d(){t.classList.toggle("is-hidden")}function m(){c.classList.add("is-editable"),o.addEventListener("click",p),s.classList.add("is-blocked"),r.classList.add("is-blocked")}function p(){o.removeEventListener("click",p);const e=document.querySelector(".client__firstname"),t=document.querySelector(".client__lastname"),n=document.querySelector(".client__patronymic"),r=document.querySelector(".client__mail"),i=document.querySelector(".client__phone"),l=document.querySelector('input[name="client__firstname"]').value,u=document.querySelector('input[name="client__lastname"]').value,a=document.querySelector('input[name="client__patronymic"]').value,d=document.querySelector('input[name="client__mail"]').value,m=document.querySelector('input[name="client__phone"]').value;e.innerHTML=l,t.innerHTML=u,n.innerHTML=a,r.innerHTML=d,i.innerHTML=m,c.classList.remove("is-editable"),s.classList.remove("is-blocked")}function y(e){console.log(i.value);const t=document.querySelector('.post__input[name="post"]:checked').value;console.log(t);const n=[{code:"code1",department:"Department 1"},{code:"code2",department:"Department 2"},{code:"code3",department:"Department 3"}];_(n),$.ajax({type:"POST",data:{city:i.value,postType:t},url:"",dataType:"json",success:function(e){_(n)},error:function(e){S(e.responseJSON.errors),console.log("error")}})}function _(e){u.innerHTML=[...e].reduce((e,t)=>e+`<option value="${t.code}">${t.department}</option>`,"")}function q(){r.classList.remove("is-blocked")}function S(e){for(key in e){const t=document.querySelector(`label[for="id_${key}"] .errors`);for(const n of e[key]){let e=document.createElement("li");e.append(n),t.append(e)}}}e.addEventListener("click",d),n.addEventListener("click",m),i.addEventListener("change",y),l.forEach(e=>e.addEventListener("change",y)),a.addEventListener("click",q);
},{"../sass/utils/_variables.scss":"c+Ov","../sass/base/_reset.scss":"jUof","../sass/components/_header.scss":"48ty","../sass/components/_product.scss":"+kUG","../sass/order.scss":"zYoX","../sass/components/_footer.scss":"CplH"}]},{},["hmUl"], null)
//# sourceMappingURL=/move-clothes/order.110ca3fa.js.map