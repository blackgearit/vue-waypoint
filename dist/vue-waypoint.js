!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueWaypoint=e():t.VueWaypoint=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=17)}([function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<e.length;o++){var u=e[o];"number"==typeof u[0]&&i[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),t.push(u))}},t}},function(t,e){t.exports=function(t,e,n,i){var o,r=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(o=t,r=t.default);var l="function"==typeof r?r.options:r;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),n&&(l._scopeId=n),i){var a=l.computed||(l.computed={});Object.keys(i).forEach(function(t){var e=i[t];a[t]=function(){return e}})}return{esModule:o,exports:r,options:l}}},function(t,e,n){function i(t){for(var e=0;e<t.length;e++){var n=t[e],i=s[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(u(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var r=[],o=0;o<n.parts.length;o++)r.push(u(n.parts[o]));s[n.id]={id:n.id,refs:1,parts:r}}}}function o(t,e){for(var n=[],i={},o=0;o<e.length;o++){var r=e[o],u=r[0],l=r[1],a=r[2],c=r[3],s={css:l,media:a,sourceMap:c};i[u]?(s.id=t+":"+i[u].parts.length,i[u].parts.push(s)):(s.id=t+":0",n.push(i[u]={id:u,parts:[s]}))}return n}function r(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function u(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]'),o=null!=i;if(o&&h)return v;if(y){var u=p++;i=d||(d=r()),e=l.bind(null,i,u,!1),n=l.bind(null,i,u,!0)}else i=i||r(),e=a.bind(null,i),n=function(){i.parentNode.removeChild(i)};return o||e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function l(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var r=document.createTextNode(o),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(r,u[e]):t.appendChild(r)}}function a(t,e){var n=e.css,i=e.media,o=e.sourceMap;if(i&&t.setAttribute("media",i),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(16),s={},f=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,h=!1,v=function(){},y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var r=o(t,e);return i(r),function(e){for(var n=[],u=0;u<r.length;u++){var l=r[u],a=s[l.id];a.refs--,n.push(a)}e?(r=o(t,e),i(r)):r=[];for(var u=0;u<n.length;u++){var a=n[u];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete s[a.id]}}}};var w=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={lastScrollX:window.scrollX,lastScrollY:window.scrollY,direction:{x:"right",y:"down"},updateScrollDirection:function(){i.direction.x=i._mapperX(Math.sign(window.scrollX-i.lastScrollX)),i.direction.y=i._mapperY(Math.sign(window.scrollY-i.lastScrollY)),i.lastScrollX=window.scrollX,i.lastScrollY=window.scrollY},getScrollDirection:function(){return i.direction},_mapperX:function(t){return t>0?"right":t<0?"left":void 0},_mapperY:function(t){return t>0?"down":t<0?"up":void 0}};e.default=i},function(t,e,n){!function(e,n){t.exports=n()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e){try{var n=new window.CustomEvent("test");if(n.preventDefault(),n.defaultPrevented!==!0)throw new Error("Could not prevent default")}catch(t){var i=function(t,e){var n,i;return e=e||{bubbles:!1,cancelable:!1,detail:void 0},n=document.createEvent("CustomEvent"),n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),i=n.preventDefault,n.preventDefault=function(){i.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},n};i.prototype=window.Event.prototype,window.CustomEvent=i}},function(t,e,n){var i,o,r;!function(n,u){o=[],i=u,r="function"==typeof i?i.apply(e,o):i,!(void 0!==r&&(t.exports=r))}(this,function(){"use strict";var t="0.5.2",e=function(t,e){for(var n=1;e--;)n*=t--;return n},n=function(t,n){return n>t?0:e(t,n)/e(n,n)},i=function(t){return e(t,t)},o=function(t,e){var n=1;if(e)n=i(e);else{for(e=1;n<t;n*=++e);n>t&&(n/=e--)}for(var o=[0];e;n/=e--)o[e]=Math.floor(t/n),t%=n;return o},r=function(t,e){Object.keys(e).forEach(function(n){Object.defineProperty(t,n,{value:e[n],configurable:"next"==n})})},u=function(t,e){Object.defineProperty(t,e,{writable:!0})},l=function(t){var e,n=[];for(this.init();e=this.next();)n.push(t?t(e):e);return this.init(),n},a={toArray:l,map:l,forEach:function(t){var e;for(this.init();e=this.next();)t(e);this.init()},filter:function(t){var e,n=[];for(this.init();e=this.next();)t(e)&&n.push(e);return this.init(),n},lazyMap:function(t){return this._lazyMap=t,this},lazyFilter:function(t){if(Object.defineProperty(this,"next",{writable:!0}),"function"!=typeof t)this.next=this._next;else{"function"!=typeof this._next&&(this._next=this.next);var e=this._next.bind(this);this.next=function(){for(var n;n=e();)if(t(n))return n;return n}.bind(this)}return Object.defineProperty(this,"next",{writable:!1}),this}},c=function(t,e){var n=1<<t.length,i=function(){return n},o=Object.create(t.slice(),{length:{get:i}});return u(o,"index"),r(o,{valueOf:i,init:function(){o.index=0},nth:function(t){if(!(t>=n)){for(var e=0,i=[];t;t>>>=1,e++)1&t&&i.push(this[e]);return"function"==typeof o._lazyMap?o._lazyMap(i):i}},next:function(){return this.nth(this.index++)}}),r(o,a),o.init(),"function"==typeof e?o.map(e):o},s=function(t){var e=t&-t,n=t+e,i=n&-n,o=(i/e>>1)-1;return n|o},f=function(t,e,i){if(e||(e=t.length),e<1)throw new RangeError;if(e>t.length)throw new RangeError;var o=(1<<e)-1,l=n(t.length,e),c=1<<t.length,f=function(){return l},d=Object.create(t.slice(),{length:{get:f}});return u(d,"index"),r(d,{valueOf:f,init:function(){this.index=o},next:function(){if(!(this.index>=c)){for(var t=0,e=this.index,n=[];e;e>>>=1,t++)1&e&&(n[n.length]=this[t]);return this.index=s(this.index),"function"==typeof d._lazyMap?d._lazyMap(n):n}}}),r(d,a),d.init(),"function"==typeof i?d.map(i):d},d=function(t,e){var n=t,i=e,o=0;for(o=n.length-1;o>=0&&1==n[o];o--)i--;if(0==i){n[n.length]=1;for(var r=n.length-2;r>=0;r--)n[r]=r<e-1?1:0}else{for(var u=-1,l=-1,o=0;o<n.length;o++)if(0==n[o]&&u!=-1&&(l=o),1==n[o]&&(u=o),l!=-1&&u!=-1){n[l]=1,n[u]=0;break}i=e;for(var o=n.length-1;o>=u;o--)1==n[o]&&i--;for(var o=0;o<u;o++)n[o]=o<i?1:0}return n},p=function(t){for(var e=[],n=0;n<t;n++)e[n]=1;return e[0]=1,e},h=function(t,e,i){if(e||(e=t.length),e<1)throw new RangeError;if(e>t.length)throw new RangeError;var o=p(e),l=n(t.length,e),c=t.length,s=function(){return l},f=Object.create(t.slice(),{length:{get:s}});return u(f,"index"),r(f,{valueOf:s,init:function(){this.index=o.concat()},next:function(){if(!(this.index.length>c)){for(var t=0,n=this.index,i=[],o=0;o<n.length;o++,t++)n[o]&&(i[i.length]=this[t]);return d(this.index,e),"function"==typeof f._lazyMap?f._lazyMap(i):i}}}),r(f,a),f.init(),"function"==typeof i?f.map(i):f},v=function(t){var e=t.slice(),n=i(e.length);return e.index=0,e.next=function(){if(!(this.index>=n)){for(var t=this.slice(),i=o(this.index,this.length),r=[],u=this.length-1;u>=0;--u)r.push(t.splice(i[u],1)[0]);return this.index++,"function"==typeof e._lazyMap?e._lazyMap(r):r}},e},y=function(t,n,i){if(n||(n=t.length),n<1)throw new RangeError;if(n>t.length)throw new RangeError;var o=e(t.length,n),l=function(){return o},c=Object.create(t.slice(),{length:{get:l}});return u(c,"cmb"),u(c,"per"),r(c,{valueOf:function(){return o},init:function(){this.cmb=f(t,n),this.per=v(this.cmb.next())},next:function(){var t=this.per.next();if(!t){var e=this.cmb.next();if(!e)return;return this.per=v(e),this.next()}return"function"==typeof c._lazyMap?c._lazyMap(t):t}}),r(c,a),c.init(),"function"==typeof i?c.map(i):c},w=function(t){for(var n=0,i=1;i<=t;i++){var o=e(t,i);n+=o}return n},m=function(t,e){var n=w(t.length),i=function(){return n},o=Object.create(t.slice(),{length:{get:i}});return u(o,"cmb"),u(o,"per"),u(o,"nelem"),r(o,{valueOf:function(){return n},init:function(){this.nelem=1,this.cmb=f(t,this.nelem),this.per=v(this.cmb.next())},next:function(){var e=this.per.next();if(!e){var n=this.cmb.next();if(!n){if(this.nelem++,this.nelem>t.length)return;if(this.cmb=f(t,this.nelem),n=this.cmb.next(),!n)return}return this.per=v(n),this.next()}return"function"==typeof o._lazyMap?o._lazyMap(e):e}}),r(o,a),o.init(),"function"==typeof e?o.map(e):o},_=Array.prototype.slice,b=function(){if(!arguments.length)throw new RangeError;var t=_.call(arguments),e=t.reduce(function(t,e){return t*e.length},1),n=function(){return e},i=t.length,o=Object.create(t,{length:{get:n}});if(!e)throw new RangeError;return u(o,"index"),r(o,{valueOf:n,dim:i,init:function(){this.index=0},get:function(){if(arguments.length===this.length){for(var t=[],e=0;e<i;e++){var n=arguments[e];if(n>=this[e].length)return;t.push(this[e][n])}return"function"==typeof o._lazyMap?o._lazyMap(t):t}},nth:function(t){for(var e=[],n=0;n<i;n++){var r=this[n].length,u=t%r;e.push(this[n][u]),t-=u,t/=r}return"function"==typeof o._lazyMap?o._lazyMap(e):e},next:function(){if(!(this.index>=e)){var t=this.nth(this.index);return this.index++,t}}}),r(o,a),o.init(),o},g=function(t,e,n){if(e||(e=t.length),e<1)throw new RangeError;var i=t.length,o=Math.pow(i,e),l=function(){return o},c=Object.create(t.slice(),{length:{get:l}});return u(c,"index"),r(c,{valueOf:l,init:function(){c.index=0},nth:function(n){if(!(n>=o)){for(var r=[],u=0;u<e;u++){var l=n%i;r.push(t[l]),n-=l,n/=i}return"function"==typeof c._lazyMap?c._lazyMap(r):r}},next:function(){return this.nth(this.index++)}}),r(c,a),c.init(),"function"==typeof n?c.map(n):c},x=Object.create(null);return r(x,{C:n,P:e,factorial:i,factoradic:o,cartesianProduct:b,combination:f,bigCombination:h,permutation:y,permutationCombination:m,power:c,baseN:g,VERSION:t}),x})},function(t,e,n){!function(e,n){t.exports=n()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e){try{var n=new window.CustomEvent("test");if(n.preventDefault(),n.defaultPrevented!==!0)throw new Error("Could not prevent default")}catch(t){var i=function(t,e){var n,i;return e=e||{bubbles:!1,cancelable:!1,detail:void 0},n=document.createEvent("CustomEvent"),n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),i=n.preventDefault,n.preventDefault=function(){i.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},n};i.prototype=window.Event.prototype,window.CustomEvent=i}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(0);var i={install:function(t){t.prototype.$throttle=i._throttle},_throttle:function(t,e,n){n=n||this.$el;var i=!1,o=function(t){i||(i=!0,window.requestAnimationFrame(function(){n.dispatchEvent(new window.CustomEvent(e,{detail:{origin:t}})),i=!1}))};return n.addEventListener(t,o),o}};e.default=i,"undefined"!=typeof window&&window.Vue&&window.Vue.use(i)}])})},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};n(0);var r=n(2),u=i(r),l=n(1).combination,a={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{globalTriggers:["resize","scroll"]};a._windowGroup=[],a._customGroups={},u.default._throttle("resize","vue-collision-window_rect_update",window),window.addEventListener("vue-collision-window_rect_update",a._updateWindowRect),window.dispatchEvent(new window.CustomEvent("vue-collision-window_rect_update"));var n=!0,i=!1,r=void 0;try{for(var l,c=e.globalTriggers[Symbol.iterator]();!(n=(l=c.next()).done);n=!0){var s=l.value;u.default._throttle(s,"vue-collision-"+s,window),window.addEventListener("vue-collision-"+s,a.checkAllGroups)}}catch(t){i=!0,r=t}finally{try{!n&&c.return&&c.return()}finally{if(i)throw r}}t.directive("collision",{bind:function(t,e,n){if("undefined"==typeof e.modifiers.prevent&&a._windowGroup.push(n.child),"object"===o(e.value)&&e.value.length){var i=!0,r=!1,u=void 0;try{for(var l,c=e.value[Symbol.iterator]();!(i=(l=c.next()).done);i=!0){var s=l.value;a._pushVnodeToGroup(n.child,s)}}catch(t){r=!0,u=t}finally{try{!i&&c.return&&c.return()}finally{if(r)throw u}}}n.child._collisionObject={windowGroup:"undefined"==typeof e.modifiers.prevent,customGroupsList:"object"===o(e.value)?e.value:[],_lastRectangle:{width:void 0,height:void 0,top:void 0,left:void 0},_lastFrame:void 0},n.child._collisionObject._lastFrame=window.requestAnimationFrame(a._vnodeFrameCheck.bind(void 0,n))},updated:function(t,e,n,i){if("undefined"==typeof e.modifiers.prevent){var r=a._windowGroup.findIndex(function(t){return t===i.child});a._windowGroup[r]=n.child}if("object"===o(e.oldValue)&&e.oldValue.length){var u=e.oldValue.filter(function(t){return e.value.indexOf(t)<0}),l=!0,c=!1,s=void 0;try{for(var f,d=u[Symbol.iterator]();!(l=(f=d.next()).done);l=!0){var p=f.value;_removeVnodeFromGroup(i.child,p)}}catch(t){c=!0,s=t}finally{try{!l&&d.return&&d.return()}finally{if(c)throw s}}var h=e.value.filter(function(t){return e.oldValue.indexOf(t)<0}),v=!0,y=!1,w=void 0;try{for(var m,_=h[Symbol.iterator]();!(v=(m=_.next()).done);v=!0){var b=m.value;a._pushVnodeToGroup(n.child,b)}}catch(t){y=!0,w=t}finally{try{!v&&_.return&&_.return()}finally{if(y)throw w}}var g=e.value.filter(function(t){return e.oldValue.indexOf(t)>-1}),x=!0,O=!1,j=void 0;try{for(var G,E=g[Symbol.iterator]();!(x=(G=E.next()).done);x=!0){var C=G.value,M=a._customGroups[C].vnodes.findIndex(function(t){return t===i.child});a._customGroups[customGroup].vnodes[M]=n.child}}catch(t){O=!0,j=t}finally{try{!x&&E.return&&E.return()}finally{if(O)throw j}}(u.lenght>0||h.lenght>0||g.lenght>0)&&(a._customGroups[customGroup]._combinations=a._combine(a._customGroups[customGroup].vnodes))}n.child._collisionObject.customGroups="object"===o(e.value)?e.value:[],window.cancelAnimationFrame(n.child._collisionObject._lastFrame),n.child._collisionObject._lastFrame=window.requestAnimationFrame(a._vnodeFrameCheck.bind(void 0,n))},unbind:function(t,e,n){if("object"===o(e.value)&&e.oldValue.value){if("undefined"==typeof e.modifiers.prevent){var i=a._windowGroup.findIndex(function(t){return t===oldVNode.child});a._windowGroup.splice(i,1)}var r=!0,u=!1,l=void 0;try{for(var c,s=e.value[Symbol.iterator]();!(r=(c=s.next()).done);r=!0){var f=c.value;_removeVnodeFromGroup(n.child,f),a._customGroups[f]._combinations=a._combine(a._customGroups[f].vnodes)}}catch(t){u=!0,l=t}finally{try{!r&&s.return&&s.return()}finally{if(u)throw l}}}window.cancelAnimationFrame(n.child._collisionObject._lastFrame),delete n.child._collisionObject}}),t.mixin({mounted:function(){"undefined"!=typeof this._collisionObject&&a.checkGroups(this._collisionObject.windowGroup?[this]:[],a._filterByGroups(this._collisionObject.customGroupsList))},updated:function(){"undefined"!=typeof this._collisionObject&&a.checkGroups(this._collisionObject.windowGroup?[this]:[],a._filterByGroups(this._collisionObject.customGroupsList))}})},checkAllGroups:function(){a.checkGroups()},checkGroups:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a._windowGroup,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a._customGroups,n=!0,i=!1,o=void 0;try{for(var r,u=t[Symbol.iterator]();!(n=(r=u.next()).done);n=!0){var l=r.value;a._checkCollision(a._windowRect,l.$el.getBoundingClientRect())?l.$emit("collide",window):l.$emit("non-collide",window)}}catch(t){i=!0,o=t}finally{try{!n&&u.return&&u.return()}finally{if(i)throw o}}var c=!0,s=!1,f=void 0;try{for(var d,p=Object.keys(e)[Symbol.iterator]();!(c=(d=p.next()).done);c=!0){var h=d.value,v=!0,y=!1,w=void 0;try{for(var m,_=e[h].combinations[Symbol.iterator]();!(v=(m=_.next()).done);v=!0){var b=m.value;a._checkCollision(b[0].$el.getBoundingClientRect(),b[1].$el.getBoundingClientRect())?(b[0].$emit("collide-"+h,b[1]),b[1].$emit("collide-"+h,b[0])):(b[0].$emit("non-collide-"+h,b[1]),b[1].$emit("non-collide-"+h,b[0]))}}catch(t){y=!0,w=t}finally{try{!v&&_.return&&_.return()}finally{if(y)throw w}}}}catch(t){s=!0,f=t}finally{try{!c&&p.return&&p.return()}finally{if(s)throw f}}},_updateWindowRect:function(){a._windowRect=a._getWindowRect()},_getWindowRect:function(){return{left:0,top:0,width:window.innerWidth,height:window.innerHeight}},_pushVnodeToGroup:function(t,e){a._customGroups.hasOwnProperty(e)||(a._customGroups[e]={vnodes:[],combinations:[]}),a._customGroups[e].vnodes.push(t),a._customGroups[e].combinations=a._combine(a._customGroups[e].vnodes)},_removeVnodeFromGroup:function(t,e){var n=a._customGroups[e].vnodes.findIndex(function(e){return e===t});a._customGroups[e].vnodes.splice(n,1),a._customGroups[e].combinations=a._combine(a._customGroups[e].vnodes)},_filterByGroups:function(t){var e=[],n=!0,i=!1,o=void 0;try{for(var r,u=t[Symbol.iterator]();!(n=(r=u.next()).done);n=!0){var l=r.value;e.push(a._customGroups[l])}}catch(t){i=!0,o=t}finally{try{!n&&u.return&&u.return()}finally{if(i)throw o}}return e},_combine:function(t){var e=[];try{for(var n=l(t,2),i=void 0;i=n.next();)e.push(i)}catch(t){}return e},_checkCollision:function(t,e){return t.left<e.left+e.width&&t.left+t.width>e.left&&t.top<e.top+e.height&&t.height+t.top>e.top},_boxHasChanged:function(t,e){return t.top!==e.top||t.left!==e.left||t.width!==e.width||t.height!==e.height},_vnodeFrameCheck:function(t){var e=t.child._collisionObject._lastRectangle,n=t.child.$el.getBoundingClientRect();a._boxHasChanged(e,n)&&(a.checkGroups(t.child._collisionObject.windowGroup?[t.child]:[],a._filterByGroups(t.child._collisionObject.customGroupsList)),t.child._collisionObject._lastRectangle=n),t.child._collisionObject._lastFrame=window.requestAnimationFrame(a._vnodeFrameCheck.bind(void 0,t))}};e.default=a,"undefined"!=typeof window&&window.Vue&&window.Vue.use(a)}])})},function(t,e,n){n(15);var i=n(1)(n(7),n(13),null,null);t.exports=i.exports},function(t,e,n){!function(e,n){t.exports=n()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e){try{var n=new window.CustomEvent("test");if(n.preventDefault(),n.defaultPrevented!==!0)throw new Error("Could not prevent default")}catch(t){var i=function(t,e){var n,i;return e=e||{bubbles:!1,cancelable:!1,detail:void 0},n=document.createEvent("CustomEvent"),n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),i=n.preventDefault,n.preventDefault=function(){i.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},n};i.prototype=window.Event.prototype,window.CustomEvent=i}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(0);var i={install:function(t){t.prototype.$throttle=i._throttle},_throttle:function(t,e,n){n=n||this.$el;var i=!1,o=function(t){i||(i=!0,window.requestAnimationFrame(function(){n.dispatchEvent(new window.CustomEvent(e,{detail:{origin:t}})),i=!1}))};return n.addEventListener(t,o),o}};e.default=i,"undefined"!=typeof window&&window.Vue&&window.Vue.use(i)}])})},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(11),r=i(o);e.default={name:"waypoint",components:{WaypointCollider:r.default},data:function(){return{colliding:!1}},computed:{going:function(){return this.colliding?"in":"out"}},props:{active:{type:Boolean,default:!0},position:{type:String,default:void 0}},methods:{_vueWaypointHandle:function(t){this.colliding||(this.colliding=!0,this._emitWaypointEvent())},_vueWaypointHandleOff:function(t){this.colliding&&(this.colliding=!1,this._emitWaypointEvent())},_emitWaypointEvent:function(){this.active&&(this.$emit("waypoint-"+this.going),this.$emit("waypoint",this.$scrollDirection(),this.going))}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"waypoint-collider"}},function(t,e,n){e=t.exports=n(0)(),e.push([t.i,".vue-waypoint__waypoint__collider[data-v-176bc24a]{position:relative;width:100%;height:100%}",""])},function(t,e,n){e=t.exports=n(0)(),e.push([t.i,".vue-waypoint__waypoint{width:100%;height:0;z-index:-1}.vue-waypoint__waypoint.fill{position:absolute;width:100%;height:100%}.vue-waypoint__waypoint.top{position:absolute;top:0}.vue-waypoint__waypoint.right{position:absolute;right:0}.vue-waypoint__waypoint.bottom{position:absolute;bottom:0}.vue-waypoint__waypoint.left{position:absolute;left:0}",""])},function(t,e,n){n(14);var i=n(1)(n(8),n(12),"data-v-176bc24a",null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-waypoint__waypoint__collider"})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-waypoint__waypoint",class:[t.position]},[t.active?n("waypoint-collider",{directives:[{name:"collision",rawName:"v-collision"}],on:{collide:t._vueWaypointHandle,"non-collide":t._vueWaypointHandleOff}}):t._e()],1)},staticRenderFns:[]}},function(t,e,n){var i=n(9);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(2)("5b621014",i,!0)},function(t,e,n){var i=n(10);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(2)("c92a964a",i,!0)},function(t,e){t.exports=function(t,e){for(var n=[],i={},o=0;o<e.length;o++){var r=e[o],u=r[0],l=r[1],a=r[2],c=r[3],s={id:t+":"+o,css:l,media:a,sourceMap:c};i[u]?i[u].parts.push(s):n.push(i[u]={id:u,parts:[s]})}return n}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),r=i(o),u=n(6),l=i(u),a=n(3),c=i(a),s=n(5),f=i(s),d={install:function(t){t.use(l.default),t.use(r.default),this._throttledScrollListener=l.default._throttle("scroll","v-waypoint-throttled-scroll",window),window.addEventListener("v-waypoint-throttled-scroll",c.default.updateScrollDirection),t.prototype.$scrollDirection=function(){return c.default.getScrollDirection()},t.component("v-waypoint",f.default)}};e.default=d,"undefined"!=typeof window&&window.Vue&&window.Vue.use(d)}])});