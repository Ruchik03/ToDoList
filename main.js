!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let o=document.getElementById("home"),r=document.getElementById("personal"),l=document.getElementById("work");function c(e){let t=document.createElement("div");t.setAttribute("id","taskContent");let n=document.createElement("input");n.setAttribute("type","checkbox"),n.setAttribute("name","checkbox");let c=document.createElement("span");c.style.borderBottom="4px solid";let d=document.createElement("span"),i=document.createElement("span");i.setAttribute("type","button"),i.classList.add("deleteIcon"),i.innerHTML='<img src="images/deleteIcon.png">',c.innerHTML=e.getTask(),d.innerHTML="Due: "+function(e){let t=e.slice(0,4),n=e.slice(5,7),o=e.slice(8,10);return n+"/"+o+"/"+t}(e.getDate());let u=e.getType(),a=e.getPriority();d.style.cssText="color: #0c548e; font-style: italic; font-size: .9rem;",function(e,t){t.style.borderBottomColor="high"==e?"red":"medium"==e?"orange":"green"}(a,c),t.appendChild(n),t.appendChild(c),t.appendChild(d),t.appendChild(i),function(e,t){let n=e.cloneNode(!0);n.setAttribute("id","ctaskContent1"),"personal"==t?r.appendChild(n):l.appendChild(n)}(t,u),o.appendChild(t)}function d(e){let t=document.getElementById(e);console.log(t);let n=t.childNodes;console.log(n[2]),console.log(n[3]),n[1].style.textDecoration="line-through",n[2].style.textDecoration="line-through"}const i=document.querySelector("#addbtn"),u=document.querySelector("#cancelbtn"),a=document.querySelector("#addTaskbtn"),s=document.querySelector("#modal");let m=document.querySelectorAll("input[name=checkbox]");function p(){s.style.display="none"}p(),console.log(m),i.addEventListener("click",(function(){s.style.display="block"})),u.addEventListener("click",p),a.addEventListener("click",()=>{const e=function(){let e=document.getElementById("task").value,t=document.getElementById("duedate").value,n=document.getElementById("priority").value,o=document.getElementById("type").value;return function(e,t,n,o){let r=e,l=t,c=n,d=o;return{getTask:()=>r,getDate:()=>l,getPriority:()=>c,getType:()=>d}}(e,t,n.split(" ")[0],o)}();p(),document.getElementById("myForm").reset(),c(e),m=document.querySelectorAll("input[name=checkbox]"),m.forEach(e=>{e.addEventListener("change",e=>{!function(e){let t=e.target.parentNode.id;d(t),"c"!=t.charAt(0)?(d("c"+t),e.target.checked=!0):(d(t.slice(1,t.length)),e.target.checked=!0)}(e)})})})}]);