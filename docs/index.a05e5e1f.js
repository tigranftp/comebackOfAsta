document.addEventListener("DOMContentLoaded",()=>{new t(new Date("2024-02-02T03:27:00+0000").getTime()/1e3).start().ifEnded(()=>{console.log("The countdown has ended!")})});class t{constructor(t,e="flipdown",s={}){if("number"!=typeof t)throw Error(`FlipDown: Constructor expected unix timestamp, got ${typeof t} instead.`);"object"==typeof e&&(s=e,e="flipdown"),this.version="0.3.2",this.initialised=!1,this.now=this._getTime(),this.epoch=t,this.countdownEnded=!1,this.hasEndedCallback=null,this.element=document.getElementById(e),this.rotors=[],this.rotorLeafFront=[],this.rotorLeafRear=[],this.rotorTops=[],this.rotorBottoms=[],this.countdown=null,this.daysRemaining=0,this.clockValues={},this.clockStrings={},this.clockValuesAsString=[],this.prevClockValuesAsString=[],this.opts=this._parseOptions(s),this._setOptions(),console.log(`FlipDown ${this.version} (Theme: ${this.opts.theme})`)}start(){return this.initialised||this._init(),this.countdown=setInterval(this._tick.bind(this),1e3),this}ifEnded(t){return this.hasEndedCallback=function(){t(),this.hasEndedCallback=null},this}_getTime(){return new Date().getTime()/1e3}_hasCountdownEnded(){return this.epoch-this.now<0?(this.countdownEnded=!0,null!=this.hasEndedCallback&&(this.hasEndedCallback(),this.hasEndedCallback=null),!0):(this.countdownEnded=!1,!1)}_parseOptions(t){let e=["Days","Hours","Minutes","Seconds"];return t.headings&&4===t.headings.length&&(e=t.headings),{theme:t.hasOwnProperty("theme")?t.theme:"dark",headings:e}}_setOptions(){this.element.classList.add(`flipdown__theme-${this.opts.theme}`)}_init(){this.initialised=!0,this._hasCountdownEnded()?this.daysremaining=0:this.daysremaining=Math.floor((this.epoch-this.now)/86400).toString().length;for(var t=this.daysremaining<=2?2:this.daysremaining,e=0;e<t+6;e++)this.rotors.push(this._createRotor(0));for(var s=[],e=0;e<t;e++)s.push(this.rotors[e]);this.element.appendChild(this._createRotorGroup(s,0));for(var o=t,e=0;e<3;e++){for(var i=[],n=0;n<2;n++)i.push(this.rotors[o]),o++;this.element.appendChild(this._createRotorGroup(i,e+1))}return this.rotorLeafFront=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-leaf-front")),this.rotorLeafRear=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-leaf-rear")),this.rotorTop=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-top")),this.rotorBottom=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-bottom")),this._tick(),this._updateClockValues(!0),this}_createRotorGroup(t,e){var o=document.createElement("div");o.className="rotor-group";var i=document.createElement("div");return i.className="rotor-group-heading",i.setAttribute("data-before",this.opts.headings[e]),o.appendChild(i),s(o,t),o}_createRotor(t=0){var e=document.createElement("div"),o=document.createElement("div"),i=document.createElement("figure"),n=document.createElement("figure"),r=document.createElement("div"),a=document.createElement("div");return e.className="rotor",o.className="rotor-leaf",i.className="rotor-leaf-rear",n.className="rotor-leaf-front",r.className="rotor-top",a.className="rotor-bottom",i.textContent=t,r.textContent=t,a.textContent=t,s(e,[o,r,a]),s(o,[i,n]),e}_tick(){this.now=this._getTime();var t=this.epoch-this.now<=0?0:this.epoch-this.now;this.clockValues.d=Math.floor(t/86400),t-=86400*this.clockValues.d,this.clockValues.h=Math.floor(t/3600),t-=3600*this.clockValues.h,this.clockValues.m=Math.floor(t/60),t-=60*this.clockValues.m,this.clockValues.s=Math.floor(t),this._updateClockValues(),this._hasCountdownEnded()}_updateClockValues(t=!1){function s(){this.rotorTop.forEach((t,e)=>{t.textContent!=this.clockValuesAsString[e]&&(t.textContent=this.clockValuesAsString[e])})}function o(){this.rotorLeafRear.forEach((t,e)=>{if(t.textContent!=this.clockValuesAsString[e]){t.textContent=this.clockValuesAsString[e],t.parentElement.classList.add("flipped");var s=setInterval((function(){t.parentElement.classList.remove("flipped"),clearInterval(s)}).bind(this),500)}})}this.clockStrings.d=e(this.clockValues.d,2),this.clockStrings.h=e(this.clockValues.h,2),this.clockStrings.m=e(this.clockValues.m,2),this.clockStrings.s=e(this.clockValues.s,2),this.clockValuesAsString=(this.clockStrings.d+this.clockStrings.h+this.clockStrings.m+this.clockStrings.s).split(""),this.rotorLeafFront.forEach((t,e)=>{t.textContent=this.prevClockValuesAsString[e]}),this.rotorBottom.forEach((t,e)=>{t.textContent=this.prevClockValuesAsString[e]}),t?(s.call(this),o.call(this)):(setTimeout(s.bind(this),500),setTimeout(o.bind(this),500)),this.prevClockValuesAsString=this.clockValuesAsString}}function e(t,s){return(t=t.toString()).length<s?e("0"+t,s):t}function s(t,e){e.forEach(e=>{t.appendChild(e)})}