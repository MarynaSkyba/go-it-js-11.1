parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"YZer":[function(require,module,exports) {

},{}],"dAXG":[function(require,module,exports) {
const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",o),e.addEventListener("click",a);let n=!1;function o(){n||(n=!0,intervalId=setInterval(r,1e3,1e3))}function r(){console.log(document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`)}function a(){clearInterval(intervalId),n=!1}function c(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}
},{}],"F3LX":[function(require,module,exports) {
const t={btnCount:document.querySelector("[data-startcount]"),clock:document.querySelector(".js-clockface"),input:document.getElementById("[date-selector]"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),hours:document.querySelector("[data-seconds]")};class e{constructor({targetDate:t}){this.targetDate=t,this.intervalId=null,this.isActive=!1,this.refs={btnCount:document.querySelector("[data-startcount]"),clock:document.querySelector(".js-clockface"),input:document.getElementById("[date-selector]"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")}}start(){this.isActive||(this.isActive=!0,setInterval(()=>{const t=new Date,e=this.targetDate-t,s=this.convertMs(e);this.updateClockface(s)},1e3))}convertMs(t){return{days:this.pad(Math.floor(t/864e5)),hours:this.paddays(Math.floor(t%864e5/36e5)),minutes:this.paddays(Math.floor(t%864e5%36e5/6e4)),seconds:this.paddays(Math.floor(t%864e5%36e5%6e4/1e3))}}pad(t){return String(t).padStart(3,"0")}paddays(t){return String(t).padStart(2,"0")}updateClockface({days:t,hours:e,minutes:s,seconds:o}){this.refs.days.textContent=`${t}`,this.refs.hours.textContent=`${e}`,this.refs.minutes.textContent=`${s}`,this.refs.seconds.textContent=`${o}`}}function s({days:t,hours:e,minutes:s,seconds:o}){this.refs.days.textContent=`${t}`,this.refs.hours.textContent=`${e}`,this.refs.minutes.textContent=`${s}`,this.refs.seconds.textContent=`${o}`}const o=new e({targetDate:new Date("Jul 27, 2021")});t.btnCount.addEventListener("click",()=>{o.start()});
},{}],"WOFb":[function(require,module,exports) {
const e=e=>Promise.resolve(e),o=e=>console.log(`Resolved after ${e} ms`);e(2e3).then(o),e(1e3).then(o),e(1500).then(o);
},{}],"aTW7":[function(require,module,exports) {
const e=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!1}],a=(e,a)=>new Promise(n=>{n(e.map(e=>e.name===a?{...e,active:!e.active}:e))});a(e,"Mango").then(console.table),a(e,"Ajax").then(console.table);
},{}],"VIZ7":[function(require,module,exports) {
const t=(t,n)=>Math.floor(Math.random()*(n-t+1)+t),n=n=>new Promise((a,o)=>{const e=t(200,500);setTimeout(()=>{Math.random()>.3&&a({id:n.id,time:e}),o(n.id)},e)}),a=({id:t,time:n})=>{console.log(`Transaction ${t} processed in ${n}ms`)},o=t=>{console.warn(`Error processing transaction ${t}. Please try again later.`)};n({id:70,amount:150}).then(a).catch(o),n({id:71,amount:230}).then(a).catch(o),n({id:72,amount:75}).then(a).catch(o),n({id:73,amount:100}).then(a).catch(o);
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./scss/main.css"),require("./task1"),require("./task2"),require("./task3.1"),require("./task3.2"),require("./task3.3");
},{"./scss/main.css":"YZer","./task1":"dAXG","./task2":"F3LX","./task3.1":"WOFb","./task3.2":"aTW7","./task3.3":"VIZ7"}]},{},["Focm"], null)
//# sourceMappingURL=/go-it-js-11.1/src.c097fdbe.js.map