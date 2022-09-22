!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),f=o(c),s=n(8),d=o(s),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x=document.all&&!window.atob,j={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},O=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,j),(0,b.default)(w,j.once),w},_=function(){w=(0,h.default)(),O()},S=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},z=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},A=function(e){return j=i(j,e),w=(0,h.default)(),z(j.disable)||x?S():(document.querySelector("body").setAttribute("data-aos-easing",j.easing),document.querySelector("body").setAttribute("data-aos-duration",j.duration),document.querySelector("body").setAttribute("data-aos-delay",j.delay),"DOMContentLoaded"===j.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?O(!0):"load"===j.startEvent?window.addEventListener(j.startEvent,function(){O(!0)}):document.addEventListener(j.startEvent,function(){O(!0)}),window.addEventListener("resize",(0,f.default)(O,j.debounceDelay,!0)),window.addEventListener("orientationchange",(0,f.default)(O,j.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,j.once)},j.throttleDelay)),j.disableMutationObserver||(0,d.default)("[data-aos]",_),w)};e.exports={init:A,refresh:O,refreshHard:_}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(s,t),_?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=O();return c(e)?d(e):void(h=setTimeout(s,a(e)))}function d(e){return h=void 0,z&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),o(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,k=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(f);return t=u(t)||0,i(n)&&(_=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(f);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="Expected a function",s=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(s,t),_?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function f(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=j();return f(e)?d(e):void(h=setTimeout(s,u(e)))}function d(e){return h=void 0,z&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=f(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),i(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,O=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(_=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==s}function a(e){if("number"==typeof e)return e;if(r(e))return f;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?f:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",f=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e,t){var n=new r(o);a=t,n.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function o(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes),o=t.concat(n).filter(function(e){return e.hasAttribute&&e.hasAttribute("data-aos")}).length;o&&a()})}Object.defineProperty(t,"__esModule",{value:!0});var i=window.document,r=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,a=function(){};t.default=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});

/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e()}(this,(function(){"use strict";const t="transitionend",e=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&"#"!==i?i.trim():null}return e},i=t=>{const i=e(t);return i&&document.querySelector(i)?i:null},n=t=>{const i=e(t);return i?document.querySelector(i):null},s=e=>{e.dispatchEvent(new Event(t))},o=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),r=t=>o(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(t):null,a=(t,e,i)=>{Object.keys(i).forEach((n=>{const s=i[n],r=e[n],a=r&&o(r)?"element":null==(l=r)?`${l}`:{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();var l;if(!new RegExp(s).test(a))throw new TypeError(`${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`)}))},l=t=>!(!o(t)||0===t.getClientRects().length)&&"visible"===getComputedStyle(t).getPropertyValue("visibility"),c=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),h=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?h(t.parentNode):null},d=()=>{},u=t=>{t.offsetHeight},f=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},p=[],m=()=>"rtl"===document.documentElement.dir,g=t=>{var e;e=()=>{const e=f();if(e){const i=t.NAME,n=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=n,t.jQueryInterface)}},"loading"===document.readyState?(p.length||document.addEventListener("DOMContentLoaded",(()=>{p.forEach((t=>t()))})),p.push(e)):e()},_=t=>{"function"==typeof t&&t()},b=(e,i,n=!0)=>{if(!n)return void _(e);const o=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const n=Number.parseFloat(e),s=Number.parseFloat(i);return n||s?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(i)+5;let r=!1;const a=({target:n})=>{n===i&&(r=!0,i.removeEventListener(t,a),_(e))};i.addEventListener(t,a),setTimeout((()=>{r||s(i)}),o)},v=(t,e,i,n)=>{let s=t.indexOf(e);if(-1===s)return t[!i&&n?t.length-1:0];const o=t.length;return s+=i?1:-1,n&&(s=(s+o)%o),t[Math.max(0,Math.min(s,o-1))]},y=/[^.]*(?=\..*)\.|.*/,w=/\..*/,E=/::\d+$/,A={};let T=1;const O={mouseenter:"mouseover",mouseleave:"mouseout"},C=/^(mouseenter|mouseleave)/i,k=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function L(t,e){return e&&`${e}::${T++}`||t.uidEvent||T++}function x(t){const e=L(t);return t.uidEvent=e,A[e]=A[e]||{},A[e]}function D(t,e,i=null){const n=Object.keys(t);for(let s=0,o=n.length;s<o;s++){const o=t[n[s]];if(o.originalHandler===e&&o.delegationSelector===i)return o}return null}function S(t,e,i){const n="string"==typeof e,s=n?i:e;let o=P(t);return k.has(o)||(o=t),[n,s,o]}function N(t,e,i,n,s){if("string"!=typeof e||!t)return;if(i||(i=n,n=null),C.test(e)){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};n?n=t(n):i=t(i)}const[o,r,a]=S(e,i,n),l=x(t),c=l[a]||(l[a]={}),h=D(c,r,o?i:null);if(h)return void(h.oneOff=h.oneOff&&s);const d=L(r,e.replace(y,"")),u=o?function(t,e,i){return function n(s){const o=t.querySelectorAll(e);for(let{target:r}=s;r&&r!==this;r=r.parentNode)for(let a=o.length;a--;)if(o[a]===r)return s.delegateTarget=r,n.oneOff&&j.off(t,s.type,e,i),i.apply(r,[s]);return null}}(t,i,n):function(t,e){return function i(n){return n.delegateTarget=t,i.oneOff&&j.off(t,n.type,e),e.apply(t,[n])}}(t,i);u.delegationSelector=o?i:null,u.originalHandler=r,u.oneOff=s,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function I(t,e,i,n,s){const o=D(e[i],n,s);o&&(t.removeEventListener(i,o,Boolean(s)),delete e[i][o.uidEvent])}function P(t){return t=t.replace(w,""),O[t]||t}const j={on(t,e,i,n){N(t,e,i,n,!1)},one(t,e,i,n){N(t,e,i,n,!0)},off(t,e,i,n){if("string"!=typeof e||!t)return;const[s,o,r]=S(e,i,n),a=r!==e,l=x(t),c=e.startsWith(".");if(void 0!==o){if(!l||!l[r])return;return void I(t,l,r,o,s?i:null)}c&&Object.keys(l).forEach((i=>{!function(t,e,i,n){const s=e[i]||{};Object.keys(s).forEach((o=>{if(o.includes(n)){const n=s[o];I(t,e,i,n.originalHandler,n.delegationSelector)}}))}(t,l,i,e.slice(1))}));const h=l[r]||{};Object.keys(h).forEach((i=>{const n=i.replace(E,"");if(!a||e.includes(n)){const e=h[i];I(t,l,r,e.originalHandler,e.delegationSelector)}}))},trigger(t,e,i){if("string"!=typeof e||!t)return null;const n=f(),s=P(e),o=e!==s,r=k.has(s);let a,l=!0,c=!0,h=!1,d=null;return o&&n&&(a=n.Event(e,i),n(t).trigger(a),l=!a.isPropagationStopped(),c=!a.isImmediatePropagationStopped(),h=a.isDefaultPrevented()),r?(d=document.createEvent("HTMLEvents"),d.initEvent(s,l,!0)):d=new CustomEvent(e,{bubbles:l,cancelable:!0}),void 0!==i&&Object.keys(i).forEach((t=>{Object.defineProperty(d,t,{get:()=>i[t]})})),h&&d.preventDefault(),c&&t.dispatchEvent(d),d.defaultPrevented&&void 0!==a&&a.preventDefault(),d}},M=new Map,H={set(t,e,i){M.has(t)||M.set(t,new Map);const n=M.get(t);n.has(e)||0===n.size?n.set(e,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)},get:(t,e)=>M.has(t)&&M.get(t).get(e)||null,remove(t,e){if(!M.has(t))return;const i=M.get(t);i.delete(e),0===i.size&&M.delete(t)}};class B{constructor(t){(t=r(t))&&(this._element=t,H.set(this._element,this.constructor.DATA_KEY,this))}dispose(){H.remove(this._element,this.constructor.DATA_KEY),j.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((t=>{this[t]=null}))}_queueCallback(t,e,i=!0){b(t,e,i)}static getInstance(t){return H.get(r(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.1.3"}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}const R=(t,e="hide")=>{const i=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;j.on(document,i,`[data-bs-dismiss="${s}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),c(this))return;const o=n(this)||this.closest(`.${s}`);t.getOrCreateInstance(o)[e]()}))};class W extends B{static get NAME(){return"alert"}close(){if(j.trigger(this._element,"close.bs.alert").defaultPrevented)return;this._element.classList.remove("show");const t=this._element.classList.contains("fade");this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),j.trigger(this._element,"closed.bs.alert"),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=W.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}R(W,"close"),g(W);const $='[data-bs-toggle="button"]';class z extends B{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=z.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}function q(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function F(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}j.on(document,"click.bs.button.data-api",$,(t=>{t.preventDefault();const e=t.target.closest($);z.getOrCreateInstance(e).toggle()})),g(z);const U={setDataAttribute(t,e,i){t.setAttribute(`data-bs-${F(e)}`,i)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${F(e)}`)},getDataAttributes(t){if(!t)return{};const e={};return Object.keys(t.dataset).filter((t=>t.startsWith("bs"))).forEach((i=>{let n=i.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),e[n]=q(t.dataset[i])})),e},getDataAttribute:(t,e)=>q(t.getAttribute(`data-bs-${F(e)}`)),offset(t){const e=t.getBoundingClientRect();return{top:e.top+window.pageYOffset,left:e.left+window.pageXOffset}},position:t=>({top:t.offsetTop,left:t.offsetLeft})},V={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const i=[];let n=t.parentNode;for(;n&&n.nodeType===Node.ELEMENT_NODE&&3!==n.nodeType;)n.matches(e)&&i.push(n),n=n.parentNode;return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(", ");return this.find(e,t).filter((t=>!c(t)&&l(t)))}},K="carousel",X={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},Y={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},Q="next",G="prev",Z="left",J="right",tt={ArrowLeft:J,ArrowRight:Z},et="slid.bs.carousel",it="active",nt=".active.carousel-item";class st extends B{constructor(t,e){super(t),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._indicatorsElement=V.findOne(".carousel-indicators",this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return X}static get NAME(){return K}next(){this._slide(Q)}nextWhenVisible(){!document.hidden&&l(this._element)&&this.next()}prev(){this._slide(G)}pause(t){t||(this._isPaused=!0),V.findOne(".carousel-item-next, .carousel-item-prev",this._element)&&(s(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(t){this._activeElement=V.findOne(nt,this._element);const e=this._getItemIndex(this._activeElement);if(t>this._items.length-1||t<0)return;if(this._isSliding)return void j.one(this._element,et,(()=>this.to(t)));if(e===t)return this.pause(),void this.cycle();const i=t>e?Q:G;this._slide(i,this._items[t])}_getConfig(t){return t={...X,...U.getDataAttributes(this._element),..."object"==typeof t?t:{}},a(K,t,Y),t}_handleSwipe(){const t=Math.abs(this.touchDeltaX);if(t<=40)return;const e=t/this.touchDeltaX;this.touchDeltaX=0,e&&this._slide(e>0?J:Z)}_addEventListeners(){this._config.keyboard&&j.on(this._element,"keydown.bs.carousel",(t=>this._keydown(t))),"hover"===this._config.pause&&(j.on(this._element,"mouseenter.bs.carousel",(t=>this.pause(t))),j.on(this._element,"mouseleave.bs.carousel",(t=>this.cycle(t)))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const t=t=>this._pointerEvent&&("pen"===t.pointerType||"touch"===t.pointerType),e=e=>{t(e)?this.touchStartX=e.clientX:this._pointerEvent||(this.touchStartX=e.touches[0].clientX)},i=t=>{this.touchDeltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this.touchStartX},n=e=>{t(e)&&(this.touchDeltaX=e.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((t=>this.cycle(t)),500+this._config.interval))};V.find(".carousel-item img",this._element).forEach((t=>{j.on(t,"dragstart.bs.carousel",(t=>t.preventDefault()))})),this._pointerEvent?(j.on(this._element,"pointerdown.bs.carousel",(t=>e(t))),j.on(this._element,"pointerup.bs.carousel",(t=>n(t))),this._element.classList.add("pointer-event")):(j.on(this._element,"touchstart.bs.carousel",(t=>e(t))),j.on(this._element,"touchmove.bs.carousel",(t=>i(t))),j.on(this._element,"touchend.bs.carousel",(t=>n(t))))}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=tt[t.key];e&&(t.preventDefault(),this._slide(e))}_getItemIndex(t){return this._items=t&&t.parentNode?V.find(".carousel-item",t.parentNode):[],this._items.indexOf(t)}_getItemByOrder(t,e){const i=t===Q;return v(this._items,e,i,this._config.wrap)}_triggerSlideEvent(t,e){const i=this._getItemIndex(t),n=this._getItemIndex(V.findOne(nt,this._element));return j.trigger(this._element,"slide.bs.carousel",{relatedTarget:t,direction:e,from:n,to:i})}_setActiveIndicatorElement(t){if(this._indicatorsElement){const e=V.findOne(".active",this._indicatorsElement);e.classList.remove(it),e.removeAttribute("aria-current");const i=V.find("[data-bs-target]",this._indicatorsElement);for(let e=0;e<i.length;e++)if(Number.parseInt(i[e].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(t)){i[e].classList.add(it),i[e].setAttribute("aria-current","true");break}}}_updateInterval(){const t=this._activeElement||V.findOne(nt,this._element);if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);e?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=e):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(t,e){const i=this._directionToOrder(t),n=V.findOne(nt,this._element),s=this._getItemIndex(n),o=e||this._getItemByOrder(i,n),r=this._getItemIndex(o),a=Boolean(this._interval),l=i===Q,c=l?"carousel-item-start":"carousel-item-end",h=l?"carousel-item-next":"carousel-item-prev",d=this._orderToDirection(i);if(o&&o.classList.contains(it))return void(this._isSliding=!1);if(this._isSliding)return;if(this._triggerSlideEvent(o,d).defaultPrevented)return;if(!n||!o)return;this._isSliding=!0,a&&this.pause(),this._setActiveIndicatorElement(o),this._activeElement=o;const f=()=>{j.trigger(this._element,et,{relatedTarget:o,direction:d,from:s,to:r})};if(this._element.classList.contains("slide")){o.classList.add(h),u(o),n.classList.add(c),o.classList.add(c);const t=()=>{o.classList.remove(c,h),o.classList.add(it),n.classList.remove(it,h,c),this._isSliding=!1,setTimeout(f,0)};this._queueCallback(t,n,!0)}else n.classList.remove(it),o.classList.add(it),this._isSliding=!1,f();a&&this.cycle()}_directionToOrder(t){return[J,Z].includes(t)?m()?t===Z?G:Q:t===Z?Q:G:t}_orderToDirection(t){return[Q,G].includes(t)?m()?t===G?Z:J:t===G?J:Z:t}static carouselInterface(t,e){const i=st.getOrCreateInstance(t,e);let{_config:n}=i;"object"==typeof e&&(n={...n,...e});const s="string"==typeof e?e:n.slide;if("number"==typeof e)i.to(e);else if("string"==typeof s){if(void 0===i[s])throw new TypeError(`No method named "${s}"`);i[s]()}else n.interval&&n.ride&&(i.pause(),i.cycle())}static jQueryInterface(t){return this.each((function(){st.carouselInterface(this,t)}))}static dataApiClickHandler(t){const e=n(this);if(!e||!e.classList.contains("carousel"))return;const i={...U.getDataAttributes(e),...U.getDataAttributes(this)},s=this.getAttribute("data-bs-slide-to");s&&(i.interval=!1),st.carouselInterface(e,i),s&&st.getInstance(e).to(s),t.preventDefault()}}j.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",st.dataApiClickHandler),j.on(window,"load.bs.carousel.data-api",(()=>{const t=V.find('[data-bs-ride="carousel"]');for(let e=0,i=t.length;e<i;e++)st.carouselInterface(t[e],st.getInstance(t[e]))})),g(st);const ot="collapse",rt={toggle:!0,parent:null},at={toggle:"boolean",parent:"(null|element)"},lt="show",ct="collapse",ht="collapsing",dt="collapsed",ut=":scope .collapse .collapse",ft='[data-bs-toggle="collapse"]';class pt extends B{constructor(t,e){super(t),this._isTransitioning=!1,this._config=this._getConfig(e),this._triggerArray=[];const n=V.find(ft);for(let t=0,e=n.length;t<e;t++){const e=n[t],s=i(e),o=V.find(s).filter((t=>t===this._element));null!==s&&o.length&&(this._selector=s,this._triggerArray.push(e))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return rt}static get NAME(){return ot}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t,e=[];if(this._config.parent){const t=V.find(ut,this._config.parent);e=V.find(".collapse.show, .collapse.collapsing",this._config.parent).filter((e=>!t.includes(e)))}const i=V.findOne(this._selector);if(e.length){const n=e.find((t=>i!==t));if(t=n?pt.getInstance(n):null,t&&t._isTransitioning)return}if(j.trigger(this._element,"show.bs.collapse").defaultPrevented)return;e.forEach((e=>{i!==e&&pt.getOrCreateInstance(e,{toggle:!1}).hide(),t||H.set(e,"bs.collapse",null)}));const n=this._getDimension();this._element.classList.remove(ct),this._element.classList.add(ht),this._element.style[n]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=`scroll${n[0].toUpperCase()+n.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(ht),this._element.classList.add(ct,lt),this._element.style[n]="",j.trigger(this._element,"shown.bs.collapse")}),this._element,!0),this._element.style[n]=`${this._element[s]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(j.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,u(this._element),this._element.classList.add(ht),this._element.classList.remove(ct,lt);const e=this._triggerArray.length;for(let t=0;t<e;t++){const e=this._triggerArray[t],i=n(e);i&&!this._isShown(i)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(ht),this._element.classList.add(ct),j.trigger(this._element,"hidden.bs.collapse")}),this._element,!0)}_isShown(t=this._element){return t.classList.contains(lt)}_getConfig(t){return(t={...rt,...U.getDataAttributes(this._element),...t}).toggle=Boolean(t.toggle),t.parent=r(t.parent),a(ot,t,at),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=V.find(ut,this._config.parent);V.find(ft,this._config.parent).filter((e=>!t.includes(e))).forEach((t=>{const e=n(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}))}_addAriaAndCollapsedClass(t,e){t.length&&t.forEach((t=>{e?t.classList.remove(dt):t.classList.add(dt),t.setAttribute("aria-expanded",e)}))}static jQueryInterface(t){return this.each((function(){const e={};"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1);const i=pt.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t]()}}))}}j.on(document,"click.bs.collapse.data-api",ft,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=i(this);V.find(e).forEach((t=>{pt.getOrCreateInstance(t,{toggle:!1}).toggle()}))})),g(pt);var mt="top",gt="bottom",_t="right",bt="left",vt="auto",yt=[mt,gt,_t,bt],wt="start",Et="end",At="clippingParents",Tt="viewport",Ot="popper",Ct="reference",kt=yt.reduce((function(t,e){return t.concat([e+"-"+wt,e+"-"+Et])}),[]),Lt=[].concat(yt,[vt]).reduce((function(t,e){return t.concat([e,e+"-"+wt,e+"-"+Et])}),[]),xt="beforeRead",Dt="read",St="afterRead",Nt="beforeMain",It="main",Pt="afterMain",jt="beforeWrite",Mt="write",Ht="afterWrite",Bt=[xt,Dt,St,Nt,It,Pt,jt,Mt,Ht];function Rt(t){return t?(t.nodeName||"").toLowerCase():null}function Wt(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function $t(t){return t instanceof Wt(t).Element||t instanceof Element}function zt(t){return t instanceof Wt(t).HTMLElement||t instanceof HTMLElement}function qt(t){return"undefined"!=typeof ShadowRoot&&(t instanceof Wt(t).ShadowRoot||t instanceof ShadowRoot)}const Ft={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},n=e.attributes[t]||{},s=e.elements[t];zt(s)&&Rt(s)&&(Object.assign(s.style,i),Object.keys(n).forEach((function(t){var e=n[t];!1===e?s.removeAttribute(t):s.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var n=e.elements[t],s=e.attributes[t]||{},o=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});zt(n)&&Rt(n)&&(Object.assign(n.style,o),Object.keys(s).forEach((function(t){n.removeAttribute(t)})))}))}},requires:["computeStyles"]};function Ut(t){return t.split("-")[0]}function Vt(t,e){var i=t.getBoundingClientRect();return{width:i.width/1,height:i.height/1,top:i.top/1,right:i.right/1,bottom:i.bottom/1,left:i.left/1,x:i.left/1,y:i.top/1}}function Kt(t){var e=Vt(t),i=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:n}}function Xt(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&qt(i)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Yt(t){return Wt(t).getComputedStyle(t)}function Qt(t){return["table","td","th"].indexOf(Rt(t))>=0}function Gt(t){return(($t(t)?t.ownerDocument:t.document)||window.document).documentElement}function Zt(t){return"html"===Rt(t)?t:t.assignedSlot||t.parentNode||(qt(t)?t.host:null)||Gt(t)}function Jt(t){return zt(t)&&"fixed"!==Yt(t).position?t.offsetParent:null}function te(t){for(var e=Wt(t),i=Jt(t);i&&Qt(i)&&"static"===Yt(i).position;)i=Jt(i);return i&&("html"===Rt(i)||"body"===Rt(i)&&"static"===Yt(i).position)?e:i||function(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&zt(t)&&"fixed"===Yt(t).position)return null;for(var i=Zt(t);zt(i)&&["html","body"].indexOf(Rt(i))<0;){var n=Yt(i);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||e&&"filter"===n.willChange||e&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}return null}(t)||e}function ee(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}var ie=Math.max,ne=Math.min,se=Math.round;function oe(t,e,i){return ie(t,ne(e,i))}function re(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function ae(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}const le={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,n=t.name,s=t.options,o=i.elements.arrow,r=i.modifiersData.popperOffsets,a=Ut(i.placement),l=ee(a),c=[bt,_t].indexOf(a)>=0?"height":"width";if(o&&r){var h=function(t,e){return re("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:ae(t,yt))}(s.padding,i),d=Kt(o),u="y"===l?mt:bt,f="y"===l?gt:_t,p=i.rects.reference[c]+i.rects.reference[l]-r[l]-i.rects.popper[c],m=r[l]-i.rects.reference[l],g=te(o),_=g?"y"===l?g.clientHeight||0:g.clientWidth||0:0,b=p/2-m/2,v=h[u],y=_-d[c]-h[f],w=_/2-d[c]/2+b,E=oe(v,w,y),A=l;i.modifiersData[n]=((e={})[A]=E,e.centerOffset=E-w,e)}},effect:function(t){var e=t.state,i=t.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"!=typeof n||(n=e.elements.popper.querySelector(n)))&&Xt(e.elements.popper,n)&&(e.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ce(t){return t.split("-")[1]}var he={top:"auto",right:"auto",bottom:"auto",left:"auto"};function de(t){var e,i=t.popper,n=t.popperRect,s=t.placement,o=t.variation,r=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,h=t.roundOffsets,d=!0===h?function(t){var e=t.x,i=t.y,n=window.devicePixelRatio||1;return{x:se(se(e*n)/n)||0,y:se(se(i*n)/n)||0}}(r):"function"==typeof h?h(r):r,u=d.x,f=void 0===u?0:u,p=d.y,m=void 0===p?0:p,g=r.hasOwnProperty("x"),_=r.hasOwnProperty("y"),b=bt,v=mt,y=window;if(c){var w=te(i),E="clientHeight",A="clientWidth";w===Wt(i)&&"static"!==Yt(w=Gt(i)).position&&"absolute"===a&&(E="scrollHeight",A="scrollWidth"),w=w,s!==mt&&(s!==bt&&s!==_t||o!==Et)||(v=gt,m-=w[E]-n.height,m*=l?1:-1),s!==bt&&(s!==mt&&s!==gt||o!==Et)||(b=_t,f-=w[A]-n.width,f*=l?1:-1)}var T,O=Object.assign({position:a},c&&he);return l?Object.assign({},O,((T={})[v]=_?"0":"",T[b]=g?"0":"",T.transform=(y.devicePixelRatio||1)<=1?"translate("+f+"px, "+m+"px)":"translate3d("+f+"px, "+m+"px, 0)",T)):Object.assign({},O,((e={})[v]=_?m+"px":"",e[b]=g?f+"px":"",e.transform="",e))}const ue={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,n=i.gpuAcceleration,s=void 0===n||n,o=i.adaptive,r=void 0===o||o,a=i.roundOffsets,l=void 0===a||a,c={placement:Ut(e.placement),variation:ce(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,de(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:r,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,de(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}};var fe={passive:!0};const pe={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,n=t.options,s=n.scroll,o=void 0===s||s,r=n.resize,a=void 0===r||r,l=Wt(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&c.forEach((function(t){t.addEventListener("scroll",i.update,fe)})),a&&l.addEventListener("resize",i.update,fe),function(){o&&c.forEach((function(t){t.removeEventListener("scroll",i.update,fe)})),a&&l.removeEventListener("resize",i.update,fe)}},data:{}};var me={left:"right",right:"left",bottom:"top",top:"bottom"};function ge(t){return t.replace(/left|right|bottom|top/g,(function(t){return me[t]}))}var _e={start:"end",end:"start"};function be(t){return t.replace(/start|end/g,(function(t){return _e[t]}))}function ve(t){var e=Wt(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function ye(t){return Vt(Gt(t)).left+ve(t).scrollLeft}function we(t){var e=Yt(t),i=e.overflow,n=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+s+n)}function Ee(t){return["html","body","#document"].indexOf(Rt(t))>=0?t.ownerDocument.body:zt(t)&&we(t)?t:Ee(Zt(t))}function Ae(t,e){var i;void 0===e&&(e=[]);var n=Ee(t),s=n===(null==(i=t.ownerDocument)?void 0:i.body),o=Wt(n),r=s?[o].concat(o.visualViewport||[],we(n)?n:[]):n,a=e.concat(r);return s?a:a.concat(Ae(Zt(r)))}function Te(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Oe(t,e){return e===Tt?Te(function(t){var e=Wt(t),i=Gt(t),n=e.visualViewport,s=i.clientWidth,o=i.clientHeight,r=0,a=0;return n&&(s=n.width,o=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(r=n.offsetLeft,a=n.offsetTop)),{width:s,height:o,x:r+ye(t),y:a}}(t)):zt(e)?function(t){var e=Vt(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):Te(function(t){var e,i=Gt(t),n=ve(t),s=null==(e=t.ownerDocument)?void 0:e.body,o=ie(i.scrollWidth,i.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),r=ie(i.scrollHeight,i.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-n.scrollLeft+ye(t),l=-n.scrollTop;return"rtl"===Yt(s||i).direction&&(a+=ie(i.clientWidth,s?s.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}(Gt(t)))}function Ce(t){var e,i=t.reference,n=t.element,s=t.placement,o=s?Ut(s):null,r=s?ce(s):null,a=i.x+i.width/2-n.width/2,l=i.y+i.height/2-n.height/2;switch(o){case mt:e={x:a,y:i.y-n.height};break;case gt:e={x:a,y:i.y+i.height};break;case _t:e={x:i.x+i.width,y:l};break;case bt:e={x:i.x-n.width,y:l};break;default:e={x:i.x,y:i.y}}var c=o?ee(o):null;if(null!=c){var h="y"===c?"height":"width";switch(r){case wt:e[c]=e[c]-(i[h]/2-n[h]/2);break;case Et:e[c]=e[c]+(i[h]/2-n[h]/2)}}return e}function ke(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=void 0===n?t.placement:n,o=i.boundary,r=void 0===o?At:o,a=i.rootBoundary,l=void 0===a?Tt:a,c=i.elementContext,h=void 0===c?Ot:c,d=i.altBoundary,u=void 0!==d&&d,f=i.padding,p=void 0===f?0:f,m=re("number"!=typeof p?p:ae(p,yt)),g=h===Ot?Ct:Ot,_=t.rects.popper,b=t.elements[u?g:h],v=function(t,e,i){var n="clippingParents"===e?function(t){var e=Ae(Zt(t)),i=["absolute","fixed"].indexOf(Yt(t).position)>=0&&zt(t)?te(t):t;return $t(i)?e.filter((function(t){return $t(t)&&Xt(t,i)&&"body"!==Rt(t)})):[]}(t):[].concat(e),s=[].concat(n,[i]),o=s[0],r=s.reduce((function(e,i){var n=Oe(t,i);return e.top=ie(n.top,e.top),e.right=ne(n.right,e.right),e.bottom=ne(n.bottom,e.bottom),e.left=ie(n.left,e.left),e}),Oe(t,o));return r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}($t(b)?b:b.contextElement||Gt(t.elements.popper),r,l),y=Vt(t.elements.reference),w=Ce({reference:y,element:_,strategy:"absolute",placement:s}),E=Te(Object.assign({},_,w)),A=h===Ot?E:y,T={top:v.top-A.top+m.top,bottom:A.bottom-v.bottom+m.bottom,left:v.left-A.left+m.left,right:A.right-v.right+m.right},O=t.modifiersData.offset;if(h===Ot&&O){var C=O[s];Object.keys(T).forEach((function(t){var e=[_t,gt].indexOf(t)>=0?1:-1,i=[mt,gt].indexOf(t)>=0?"y":"x";T[t]+=C[i]*e}))}return T}function Le(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=i.boundary,o=i.rootBoundary,r=i.padding,a=i.flipVariations,l=i.allowedAutoPlacements,c=void 0===l?Lt:l,h=ce(n),d=h?a?kt:kt.filter((function(t){return ce(t)===h})):yt,u=d.filter((function(t){return c.indexOf(t)>=0}));0===u.length&&(u=d);var f=u.reduce((function(e,i){return e[i]=ke(t,{placement:i,boundary:s,rootBoundary:o,padding:r})[Ut(i)],e}),{});return Object.keys(f).sort((function(t,e){return f[t]-f[e]}))}const xe={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0===r||r,l=i.fallbackPlacements,c=i.padding,h=i.boundary,d=i.rootBoundary,u=i.altBoundary,f=i.flipVariations,p=void 0===f||f,m=i.allowedAutoPlacements,g=e.options.placement,_=Ut(g),b=l||(_!==g&&p?function(t){if(Ut(t)===vt)return[];var e=ge(t);return[be(t),e,be(e)]}(g):[ge(g)]),v=[g].concat(b).reduce((function(t,i){return t.concat(Ut(i)===vt?Le(e,{placement:i,boundary:h,rootBoundary:d,padding:c,flipVariations:p,allowedAutoPlacements:m}):i)}),[]),y=e.rects.reference,w=e.rects.popper,E=new Map,A=!0,T=v[0],O=0;O<v.length;O++){var C=v[O],k=Ut(C),L=ce(C)===wt,x=[mt,gt].indexOf(k)>=0,D=x?"width":"height",S=ke(e,{placement:C,boundary:h,rootBoundary:d,altBoundary:u,padding:c}),N=x?L?_t:bt:L?gt:mt;y[D]>w[D]&&(N=ge(N));var I=ge(N),P=[];if(o&&P.push(S[k]<=0),a&&P.push(S[N]<=0,S[I]<=0),P.every((function(t){return t}))){T=C,A=!1;break}E.set(C,P)}if(A)for(var j=function(t){var e=v.find((function(e){var i=E.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return T=e,"break"},M=p?3:1;M>0&&"break"!==j(M);M--);e.placement!==T&&(e.modifiersData[n]._skip=!0,e.placement=T,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function De(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function Se(t){return[mt,_t,gt,bt].some((function(e){return t[e]>=0}))}const Ne={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,n=e.rects.reference,s=e.rects.popper,o=e.modifiersData.preventOverflow,r=ke(e,{elementContext:"reference"}),a=ke(e,{altBoundary:!0}),l=De(r,n),c=De(a,s,o),h=Se(l),d=Se(c);e.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:h,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":d})}},Ie={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.offset,o=void 0===s?[0,0]:s,r=Lt.reduce((function(t,i){return t[i]=function(t,e,i){var n=Ut(t),s=[bt,mt].indexOf(n)>=0?-1:1,o="function"==typeof i?i(Object.assign({},e,{placement:t})):i,r=o[0],a=o[1];return r=r||0,a=(a||0)*s,[bt,_t].indexOf(n)>=0?{x:a,y:r}:{x:r,y:a}}(i,e.rects,o),t}),{}),a=r[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=r}},Pe={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=Ce({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},je={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0!==r&&r,l=i.boundary,c=i.rootBoundary,h=i.altBoundary,d=i.padding,u=i.tether,f=void 0===u||u,p=i.tetherOffset,m=void 0===p?0:p,g=ke(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:h}),_=Ut(e.placement),b=ce(e.placement),v=!b,y=ee(_),w="x"===y?"y":"x",E=e.modifiersData.popperOffsets,A=e.rects.reference,T=e.rects.popper,O="function"==typeof m?m(Object.assign({},e.rects,{placement:e.placement})):m,C={x:0,y:0};if(E){if(o||a){var k="y"===y?mt:bt,L="y"===y?gt:_t,x="y"===y?"height":"width",D=E[y],S=E[y]+g[k],N=E[y]-g[L],I=f?-T[x]/2:0,P=b===wt?A[x]:T[x],j=b===wt?-T[x]:-A[x],M=e.elements.arrow,H=f&&M?Kt(M):{width:0,height:0},B=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},R=B[k],W=B[L],$=oe(0,A[x],H[x]),z=v?A[x]/2-I-$-R-O:P-$-R-O,q=v?-A[x]/2+I+$+W+O:j+$+W+O,F=e.elements.arrow&&te(e.elements.arrow),U=F?"y"===y?F.clientTop||0:F.clientLeft||0:0,V=e.modifiersData.offset?e.modifiersData.offset[e.placement][y]:0,K=E[y]+z-V-U,X=E[y]+q-V;if(o){var Y=oe(f?ne(S,K):S,D,f?ie(N,X):N);E[y]=Y,C[y]=Y-D}if(a){var Q="x"===y?mt:bt,G="x"===y?gt:_t,Z=E[w],J=Z+g[Q],tt=Z-g[G],et=oe(f?ne(J,K):J,Z,f?ie(tt,X):tt);E[w]=et,C[w]=et-Z}}e.modifiersData[n]=C}},requiresIfExists:["offset"]};function Me(t,e,i){void 0===i&&(i=!1);var n=zt(e);zt(e)&&function(t){var e=t.getBoundingClientRect();e.width,t.offsetWidth,e.height,t.offsetHeight}(e);var s,o,r=Gt(e),a=Vt(t),l={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(n||!n&&!i)&&(("body"!==Rt(e)||we(r))&&(l=(s=e)!==Wt(s)&&zt(s)?{scrollLeft:(o=s).scrollLeft,scrollTop:o.scrollTop}:ve(s)),zt(e)?((c=Vt(e)).x+=e.clientLeft,c.y+=e.clientTop):r&&(c.x=ye(r))),{x:a.left+l.scrollLeft-c.x,y:a.top+l.scrollTop-c.y,width:a.width,height:a.height}}function He(t){var e=new Map,i=new Set,n=[];function s(t){i.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!i.has(t)){var n=e.get(t);n&&s(n)}})),n.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||s(t)})),n}var Be={placement:"bottom",modifiers:[],strategy:"absolute"};function Re(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function We(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,n=void 0===i?[]:i,s=e.defaultOptions,o=void 0===s?Be:s;return function(t,e,i){void 0===i&&(i=o);var s,r,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},Be,o),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},l=[],c=!1,h={state:a,setOptions:function(i){var s="function"==typeof i?i(a.options):i;d(),a.options=Object.assign({},o,a.options,s),a.scrollParents={reference:$t(t)?Ae(t):t.contextElement?Ae(t.contextElement):[],popper:Ae(e)};var r,c,u=function(t){var e=He(t);return Bt.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}((r=[].concat(n,a.options.modifiers),c=r.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{}),Object.keys(c).map((function(t){return c[t]}))));return a.orderedModifiers=u.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,n=void 0===i?{}:i,s=t.effect;if("function"==typeof s){var o=s({state:a,name:e,instance:h,options:n});l.push(o||function(){})}})),h.update()},forceUpdate:function(){if(!c){var t=a.elements,e=t.reference,i=t.popper;if(Re(e,i)){a.rects={reference:Me(e,te(i),"fixed"===a.options.strategy),popper:Kt(i)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var n=0;n<a.orderedModifiers.length;n++)if(!0!==a.reset){var s=a.orderedModifiers[n],o=s.fn,r=s.options,l=void 0===r?{}:r,d=s.name;"function"==typeof o&&(a=o({state:a,options:l,name:d,instance:h})||a)}else a.reset=!1,n=-1}}},update:(s=function(){return new Promise((function(t){h.forceUpdate(),t(a)}))},function(){return r||(r=new Promise((function(t){Promise.resolve().then((function(){r=void 0,t(s())}))}))),r}),destroy:function(){d(),c=!0}};if(!Re(t,e))return h;function d(){l.forEach((function(t){return t()})),l=[]}return h.setOptions(i).then((function(t){!c&&i.onFirstUpdate&&i.onFirstUpdate(t)})),h}}var $e=We(),ze=We({defaultModifiers:[pe,Pe,ue,Ft]}),qe=We({defaultModifiers:[pe,Pe,ue,Ft,Ie,xe,je,le,Ne]});const Fe=Object.freeze({__proto__:null,popperGenerator:We,detectOverflow:ke,createPopperBase:$e,createPopper:qe,createPopperLite:ze,top:mt,bottom:gt,right:_t,left:bt,auto:vt,basePlacements:yt,start:wt,end:Et,clippingParents:At,viewport:Tt,popper:Ot,reference:Ct,variationPlacements:kt,placements:Lt,beforeRead:xt,read:Dt,afterRead:St,beforeMain:Nt,main:It,afterMain:Pt,beforeWrite:jt,write:Mt,afterWrite:Ht,modifierPhases:Bt,applyStyles:Ft,arrow:le,computeStyles:ue,eventListeners:pe,flip:xe,hide:Ne,offset:Ie,popperOffsets:Pe,preventOverflow:je}),Ue="dropdown",Ve="Escape",Ke="Space",Xe="ArrowUp",Ye="ArrowDown",Qe=new RegExp("ArrowUp|ArrowDown|Escape"),Ge="click.bs.dropdown.data-api",Ze="keydown.bs.dropdown.data-api",Je="show",ti='[data-bs-toggle="dropdown"]',ei=".dropdown-menu",ii=m()?"top-end":"top-start",ni=m()?"top-start":"top-end",si=m()?"bottom-end":"bottom-start",oi=m()?"bottom-start":"bottom-end",ri=m()?"left-start":"right-start",ai=m()?"right-start":"left-start",li={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},ci={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class hi extends B{constructor(t,e){super(t),this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return li}static get DefaultType(){return ci}static get NAME(){return Ue}toggle(){return this._isShown()?this.hide():this.show()}show(){if(c(this._element)||this._isShown(this._menu))return;const t={relatedTarget:this._element};if(j.trigger(this._element,"show.bs.dropdown",t).defaultPrevented)return;const e=hi.getParentFromElement(this._element);this._inNavbar?U.setDataAttribute(this._menu,"popper","none"):this._createPopper(e),"ontouchstart"in document.documentElement&&!e.closest(".navbar-nav")&&[].concat(...document.body.children).forEach((t=>j.on(t,"mouseover",d))),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Je),this._element.classList.add(Je),j.trigger(this._element,"shown.bs.dropdown",t)}hide(){if(c(this._element)||!this._isShown(this._menu))return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){j.trigger(this._element,"hide.bs.dropdown",t).defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((t=>j.off(t,"mouseover",d))),this._popper&&this._popper.destroy(),this._menu.classList.remove(Je),this._element.classList.remove(Je),this._element.setAttribute("aria-expanded","false"),U.removeDataAttribute(this._menu,"popper"),j.trigger(this._element,"hidden.bs.dropdown",t))}_getConfig(t){if(t={...this.constructor.Default,...U.getDataAttributes(this._element),...t},a(Ue,t,this.constructor.DefaultType),"object"==typeof t.reference&&!o(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError(`${Ue.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(t){if(void 0===Fe)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=t:o(this._config.reference)?e=r(this._config.reference):"object"==typeof this._config.reference&&(e=this._config.reference);const i=this._getPopperConfig(),n=i.modifiers.find((t=>"applyStyles"===t.name&&!1===t.enabled));this._popper=qe(e,this._menu,i),n&&U.setDataAttribute(this._menu,"popper","static")}_isShown(t=this._element){return t.classList.contains(Je)}_getMenuElement(){return V.next(this._element,ei)[0]}_getPlacement(){const t=this._element.parentNode;if(t.classList.contains("dropend"))return ri;if(t.classList.contains("dropstart"))return ai;const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?ni:ii:e?oi:si}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,..."function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:e}){const i=V.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(l);i.length&&v(i,e,t===Ye,!i.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=hi.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(t&&(2===t.button||"keyup"===t.type&&"Tab"!==t.key))return;const e=V.find(ti);for(let i=0,n=e.length;i<n;i++){const n=hi.getInstance(e[i]);if(!n||!1===n._config.autoClose)continue;if(!n._isShown())continue;const s={relatedTarget:n._element};if(t){const e=t.composedPath(),i=e.includes(n._menu);if(e.includes(n._element)||"inside"===n._config.autoClose&&!i||"outside"===n._config.autoClose&&i)continue;if(n._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;"click"===t.type&&(s.clickEvent=t)}n._completeHide(s)}}static getParentFromElement(t){return n(t)||t.parentNode}static dataApiKeydownHandler(t){if(/input|textarea/i.test(t.target.tagName)?t.key===Ke||t.key!==Ve&&(t.key!==Ye&&t.key!==Xe||t.target.closest(ei)):!Qe.test(t.key))return;const e=this.classList.contains(Je);if(!e&&t.key===Ve)return;if(t.preventDefault(),t.stopPropagation(),c(this))return;const i=this.matches(ti)?this:V.prev(this,ti)[0],n=hi.getOrCreateInstance(i);if(t.key!==Ve)return t.key===Xe||t.key===Ye?(e||n.show(),void n._selectMenuItem(t)):void(e&&t.key!==Ke||hi.clearMenus());n.hide()}}j.on(document,Ze,ti,hi.dataApiKeydownHandler),j.on(document,Ze,ei,hi.dataApiKeydownHandler),j.on(document,Ge,hi.clearMenus),j.on(document,"keyup.bs.dropdown.data-api",hi.clearMenus),j.on(document,Ge,ti,(function(t){t.preventDefault(),hi.getOrCreateInstance(this).toggle()})),g(hi);const di=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ui=".sticky-top";class fi{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",(e=>e+t)),this._setElementAttributes(di,"paddingRight",(e=>e+t)),this._setElementAttributes(ui,"marginRight",(e=>e-t))}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const n=this.getWidth();this._applyManipulationCallback(t,(t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+n)return;this._saveInitialAttribute(t,e);const s=window.getComputedStyle(t)[e];t.style[e]=`${i(Number.parseFloat(s))}px`}))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(di,"paddingRight"),this._resetElementAttributes(ui,"marginRight")}_saveInitialAttribute(t,e){const i=t.style[e];i&&U.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,(t=>{const i=U.getDataAttribute(t,e);void 0===i?t.style.removeProperty(e):(U.removeDataAttribute(t,e),t.style[e]=i)}))}_applyManipulationCallback(t,e){o(t)?e(t):V.find(t,this._element).forEach(e)}isOverflowing(){return this.getWidth()>0}}const pi={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},mi={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},gi="show",_i="mousedown.bs.backdrop";class bi{constructor(t){this._config=this._getConfig(t),this._isAppended=!1,this._element=null}show(t){this._config.isVisible?(this._append(),this._config.isAnimated&&u(this._getElement()),this._getElement().classList.add(gi),this._emulateAnimation((()=>{_(t)}))):_(t)}hide(t){this._config.isVisible?(this._getElement().classList.remove(gi),this._emulateAnimation((()=>{this.dispose(),_(t)}))):_(t)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_getConfig(t){return(t={...pi,..."object"==typeof t?t:{}}).rootElement=r(t.rootElement),a("backdrop",t,mi),t}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),j.on(this._getElement(),_i,(()=>{_(this._config.clickCallback)})),this._isAppended=!0)}dispose(){this._isAppended&&(j.off(this._element,_i),this._element.remove(),this._isAppended=!1)}_emulateAnimation(t){b(t,this._getElement(),this._config.isAnimated)}}const vi={trapElement:null,autofocus:!0},yi={trapElement:"element",autofocus:"boolean"},wi=".bs.focustrap",Ei="backward";class Ai{constructor(t){this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:t,autofocus:e}=this._config;this._isActive||(e&&t.focus(),j.off(document,wi),j.on(document,"focusin.bs.focustrap",(t=>this._handleFocusin(t))),j.on(document,"keydown.tab.bs.focustrap",(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,j.off(document,wi))}_handleFocusin(t){const{target:e}=t,{trapElement:i}=this._config;if(e===document||e===i||i.contains(e))return;const n=V.focusableChildren(i);0===n.length?i.focus():this._lastTabNavDirection===Ei?n[n.length-1].focus():n[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?Ei:"forward")}_getConfig(t){return t={...vi,..."object"==typeof t?t:{}},a("focustrap",t,yi),t}}const Ti="modal",Oi="Escape",Ci={backdrop:!0,keyboard:!0,focus:!0},ki={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},Li="hidden.bs.modal",xi="show.bs.modal",Di="resize.bs.modal",Si="click.dismiss.bs.modal",Ni="keydown.dismiss.bs.modal",Ii="mousedown.dismiss.bs.modal",Pi="modal-open",ji="show",Mi="modal-static";class Hi extends B{constructor(t,e){super(t),this._config=this._getConfig(e),this._dialog=V.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new fi}static get Default(){return Ci}static get NAME(){return Ti}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||j.trigger(this._element,xi,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(Pi),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),j.on(this._dialog,Ii,(()=>{j.one(this._element,"mouseup.dismiss.bs.modal",(t=>{t.target===this._element&&(this._ignoreBackdropClick=!0)}))})),this._showBackdrop((()=>this._showElement(t))))}hide(){if(!this._isShown||this._isTransitioning)return;if(j.trigger(this._element,"hide.bs.modal").defaultPrevented)return;this._isShown=!1;const t=this._isAnimated();t&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove(ji),j.off(this._element,Si),j.off(this._dialog,Ii),this._queueCallback((()=>this._hideModal()),this._element,t)}dispose(){[window,this._dialog].forEach((t=>j.off(t,".bs.modal"))),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new bi({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Ai({trapElement:this._element})}_getConfig(t){return t={...Ci,...U.getDataAttributes(this._element),..."object"==typeof t?t:{}},a(Ti,t,ki),t}_showElement(t){const e=this._isAnimated(),i=V.findOne(".modal-body",this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,i&&(i.scrollTop=0),e&&u(this._element),this._element.classList.add(ji),this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,j.trigger(this._element,"shown.bs.modal",{relatedTarget:t})}),this._dialog,e)}_setEscapeEvent(){this._isShown?j.on(this._element,Ni,(t=>{this._config.keyboard&&t.key===Oi?(t.preventDefault(),this.hide()):this._config.keyboard||t.key!==Oi||this._triggerBackdropTransition()})):j.off(this._element,Ni)}_setResizeEvent(){this._isShown?j.on(window,Di,(()=>this._adjustDialog())):j.off(window,Di)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(Pi),this._resetAdjustments(),this._scrollBar.reset(),j.trigger(this._element,Li)}))}_showBackdrop(t){j.on(this._element,Si,(t=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:t.target===t.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())})),this._backdrop.show(t)}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(j.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const{classList:t,scrollHeight:e,style:i}=this._element,n=e>document.documentElement.clientHeight;!n&&"hidden"===i.overflowY||t.contains(Mi)||(n||(i.overflowY="hidden"),t.add(Mi),this._queueCallback((()=>{t.remove(Mi),n||this._queueCallback((()=>{i.overflowY=""}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;(!i&&t&&!m()||i&&!t&&m())&&(this._element.style.paddingLeft=`${e}px`),(i&&!t&&!m()||!i&&t&&m())&&(this._element.style.paddingRight=`${e}px`)}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=Hi.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}j.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',(function(t){const e=n(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),j.one(e,xi,(t=>{t.defaultPrevented||j.one(e,Li,(()=>{l(this)&&this.focus()}))}));const i=V.findOne(".modal.show");i&&Hi.getInstance(i).hide(),Hi.getOrCreateInstance(e).toggle(this)})),R(Hi),g(Hi);const Bi="offcanvas",Ri={backdrop:!0,keyboard:!0,scroll:!1},Wi={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},$i="show",zi=".offcanvas.show",qi="hidden.bs.offcanvas";class Fi extends B{constructor(t,e){super(t),this._config=this._getConfig(e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return Bi}static get Default(){return Ri}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||j.trigger(this._element,"show.bs.offcanvas",{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(new fi).hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add($i),this._queueCallback((()=>{this._config.scroll||this._focustrap.activate(),j.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:t})}),this._element,!0))}hide(){this._isShown&&(j.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove($i),this._backdrop.hide(),this._queueCallback((()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new fi).reset(),j.trigger(this._element,qi)}),this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(t){return t={...Ri,...U.getDataAttributes(this._element),..."object"==typeof t?t:{}},a(Bi,t,Wi),t}_initializeBackDrop(){return new bi({className:"offcanvas-backdrop",isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new Ai({trapElement:this._element})}_addEventListeners(){j.on(this._element,"keydown.dismiss.bs.offcanvas",(t=>{this._config.keyboard&&"Escape"===t.key&&this.hide()}))}static jQueryInterface(t){return this.each((function(){const e=Fi.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}j.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',(function(t){const e=n(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),c(this))return;j.one(e,qi,(()=>{l(this)&&this.focus()}));const i=V.findOne(zi);i&&i!==e&&Fi.getInstance(i).hide(),Fi.getOrCreateInstance(e).toggle(this)})),j.on(window,"load.bs.offcanvas.data-api",(()=>V.find(zi).forEach((t=>Fi.getOrCreateInstance(t).show())))),R(Fi),g(Fi);const Ui=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Vi=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Ki=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Xi=(t,e)=>{const i=t.nodeName.toLowerCase();if(e.includes(i))return!Ui.has(i)||Boolean(Vi.test(t.nodeValue)||Ki.test(t.nodeValue));const n=e.filter((t=>t instanceof RegExp));for(let t=0,e=n.length;t<e;t++)if(n[t].test(i))return!0;return!1};function Yi(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const n=(new window.DOMParser).parseFromString(t,"text/html"),s=[].concat(...n.body.querySelectorAll("*"));for(let t=0,i=s.length;t<i;t++){const i=s[t],n=i.nodeName.toLowerCase();if(!Object.keys(e).includes(n)){i.remove();continue}const o=[].concat(...i.attributes),r=[].concat(e["*"]||[],e[n]||[]);o.forEach((t=>{Xi(t,r)||i.removeAttribute(t.nodeName)}))}return n.body.innerHTML}const Qi="tooltip",Gi=new Set(["sanitize","allowList","sanitizeFn"]),Zi={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},Ji={AUTO:"auto",TOP:"top",RIGHT:m()?"left":"right",BOTTOM:"bottom",LEFT:m()?"right":"left"},tn={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:{"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},popperConfig:null},en={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},nn="fade",sn="show",on="show",rn="out",an=".tooltip-inner",ln=".modal",cn="hide.bs.modal",hn="hover",dn="focus";class un extends B{constructor(t,e){if(void 0===Fe)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(e),this.tip=null,this._setListeners()}static get Default(){return tn}static get NAME(){return Qi}static get Event(){return en}static get DefaultType(){return Zi}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(t){if(this._isEnabled)if(t){const e=this._initializeOnDelegatedTarget(t);e._activeTrigger.click=!e._activeTrigger.click,e._isWithActiveTrigger()?e._enter(null,e):e._leave(null,e)}else{if(this.getTipElement().classList.contains(sn))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),j.off(this._element.closest(ln),cn,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const t=j.trigger(this._element,this.constructor.Event.SHOW),e=h(this._element),i=null===e?this._element.ownerDocument.documentElement.contains(this._element):e.contains(this._element);if(t.defaultPrevented||!i)return;"tooltip"===this.constructor.NAME&&this.tip&&this.getTitle()!==this.tip.querySelector(an).innerHTML&&(this._disposePopper(),this.tip.remove(),this.tip=null);const n=this.getTipElement(),s=(t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t})(this.constructor.NAME);n.setAttribute("id",s),this._element.setAttribute("aria-describedby",s),this._config.animation&&n.classList.add(nn);const o="function"==typeof this._config.placement?this._config.placement.call(this,n,this._element):this._config.placement,r=this._getAttachment(o);this._addAttachmentClass(r);const{container:a}=this._config;H.set(n,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(a.append(n),j.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=qe(this._element,n,this._getPopperConfig(r)),n.classList.add(sn);const l=this._resolvePossibleFunction(this._config.customClass);l&&n.classList.add(...l.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((t=>{j.on(t,"mouseover",d)}));const c=this.tip.classList.contains(nn);this._queueCallback((()=>{const t=this._hoverState;this._hoverState=null,j.trigger(this._element,this.constructor.Event.SHOWN),t===rn&&this._leave(null,this)}),this.tip,c)}hide(){if(!this._popper)return;const t=this.getTipElement();if(j.trigger(this._element,this.constructor.Event.HIDE).defaultPrevented)return;t.classList.remove(sn),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((t=>j.off(t,"mouseover",d))),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1;const e=this.tip.classList.contains(nn);this._queueCallback((()=>{this._isWithActiveTrigger()||(this._hoverState!==on&&t.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),j.trigger(this._element,this.constructor.Event.HIDDEN),this._disposePopper())}),this.tip,e),this._hoverState=""}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const t=document.createElement("div");t.innerHTML=this._config.template;const e=t.children[0];return this.setContent(e),e.classList.remove(nn,sn),this.tip=e,this.tip}setContent(t){this._sanitizeAndSetContent(t,this.getTitle(),an)}_sanitizeAndSetContent(t,e,i){const n=V.findOne(i,t);e||!n?this.setElementContent(n,e):n.remove()}setElementContent(t,e){if(null!==t)return o(e)?(e=r(e),void(this._config.html?e.parentNode!==t&&(t.innerHTML="",t.append(e)):t.textContent=e.textContent)):void(this._config.html?(this._config.sanitize&&(e=Yi(e,this._config.allowList,this._config.sanitizeFn)),t.innerHTML=e):t.textContent=e)}getTitle(){const t=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(t)}updateAttachment(t){return"right"===t?"end":"left"===t?"start":t}_initializeOnDelegatedTarget(t,e){return e||this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return"function"==typeof t?t.call(this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:t=>this._handlePopperPlacementChange(t)}],onFirstUpdate:t=>{t.options.placement!==t.placement&&this._handlePopperPlacementChange(t)}};return{...e,..."function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_addAttachmentClass(t){this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`)}_getAttachment(t){return Ji[t.toUpperCase()]}_setListeners(){this._config.trigger.split(" ").forEach((t=>{if("click"===t)j.on(this._element,this.constructor.Event.CLICK,this._config.selector,(t=>this.toggle(t)));else if("manual"!==t){const e=t===hn?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,i=t===hn?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;j.on(this._element,e,this._config.selector,(t=>this._enter(t))),j.on(this._element,i,this._config.selector,(t=>this._leave(t)))}})),this._hideModalHandler=()=>{this._element&&this.hide()},j.on(this._element.closest(ln),cn,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const t=this._element.getAttribute("title"),e=typeof this._element.getAttribute("data-bs-original-title");(t||"string"!==e)&&(this._element.setAttribute("data-bs-original-title",t||""),!t||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",t),this._element.setAttribute("title",""))}_enter(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusin"===t.type?dn:hn]=!0),e.getTipElement().classList.contains(sn)||e._hoverState===on?e._hoverState=on:(clearTimeout(e._timeout),e._hoverState=on,e._config.delay&&e._config.delay.show?e._timeout=setTimeout((()=>{e._hoverState===on&&e.show()}),e._config.delay.show):e.show())}_leave(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusout"===t.type?dn:hn]=e._element.contains(t.relatedTarget)),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=rn,e._config.delay&&e._config.delay.hide?e._timeout=setTimeout((()=>{e._hoverState===rn&&e.hide()}),e._config.delay.hide):e.hide())}_isWithActiveTrigger(){for(const t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1}_getConfig(t){const e=U.getDataAttributes(this._element);return Object.keys(e).forEach((t=>{Gi.has(t)&&delete e[t]})),(t={...this.constructor.Default,...e,..."object"==typeof t&&t?t:{}}).container=!1===t.container?document.body:r(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),a(Qi,t,this.constructor.DefaultType),t.sanitize&&(t.template=Yi(t.template,t.allowList,t.sanitizeFn)),t}_getDelegateConfig(){const t={};for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t}_cleanTipClass(){const t=this.getTipElement(),e=new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g"),i=t.getAttribute("class").match(e);null!==i&&i.length>0&&i.map((t=>t.trim())).forEach((e=>t.classList.remove(e)))}_getBasicClassPrefix(){return"bs-tooltip"}_handlePopperPlacementChange(t){const{state:e}=t;e&&(this.tip=e.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(e.placement)))}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(t){return this.each((function(){const e=un.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}g(un);const fn={...un.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},pn={...un.DefaultType,content:"(string|element|function)"},mn={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"};class gn extends un{static get Default(){return fn}static get NAME(){return"popover"}static get Event(){return mn}static get DefaultType(){return pn}isWithContent(){return this.getTitle()||this._getContent()}setContent(t){this._sanitizeAndSetContent(t,this.getTitle(),".popover-header"),this._sanitizeAndSetContent(t,this._getContent(),".popover-body")}_getContent(){return this._resolvePossibleFunction(this._config.content)}_getBasicClassPrefix(){return"bs-popover"}static jQueryInterface(t){return this.each((function(){const e=gn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}g(gn);const _n="scrollspy",bn={offset:10,method:"auto",target:""},vn={offset:"number",method:"string",target:"(string|element)"},yn="active",wn=".nav-link, .list-group-item, .dropdown-item",En="position";class An extends B{constructor(t,e){super(t),this._scrollElement="BODY"===this._element.tagName?window:this._element,this._config=this._getConfig(e),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,j.on(this._scrollElement,"scroll.bs.scrollspy",(()=>this._process())),this.refresh(),this._process()}static get Default(){return bn}static get NAME(){return _n}refresh(){const t=this._scrollElement===this._scrollElement.window?"offset":En,e="auto"===this._config.method?t:this._config.method,n=e===En?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),V.find(wn,this._config.target).map((t=>{const s=i(t),o=s?V.findOne(s):null;if(o){const t=o.getBoundingClientRect();if(t.width||t.height)return[U[e](o).top+n,s]}return null})).filter((t=>t)).sort(((t,e)=>t[0]-e[0])).forEach((t=>{this._offsets.push(t[0]),this._targets.push(t[1])}))}dispose(){j.off(this._scrollElement,".bs.scrollspy"),super.dispose()}_getConfig(t){return(t={...bn,...U.getDataAttributes(this._element),..."object"==typeof t&&t?t:{}}).target=r(t.target)||document.documentElement,a(_n,t,vn),t}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),i=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=i){const t=this._targets[this._targets.length-1];this._activeTarget!==t&&this._activate(t)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(let e=this._offsets.length;e--;)this._activeTarget!==this._targets[e]&&t>=this._offsets[e]&&(void 0===this._offsets[e+1]||t<this._offsets[e+1])&&this._activate(this._targets[e])}}_activate(t){this._activeTarget=t,this._clear();const e=wn.split(",").map((e=>`${e}[data-bs-target="${t}"],${e}[href="${t}"]`)),i=V.findOne(e.join(","),this._config.target);i.classList.add(yn),i.classList.contains("dropdown-item")?V.findOne(".dropdown-toggle",i.closest(".dropdown")).classList.add(yn):V.parents(i,".nav, .list-group").forEach((t=>{V.prev(t,".nav-link, .list-group-item").forEach((t=>t.classList.add(yn))),V.prev(t,".nav-item").forEach((t=>{V.children(t,".nav-link").forEach((t=>t.classList.add(yn)))}))})),j.trigger(this._scrollElement,"activate.bs.scrollspy",{relatedTarget:t})}_clear(){V.find(wn,this._config.target).filter((t=>t.classList.contains(yn))).forEach((t=>t.classList.remove(yn)))}static jQueryInterface(t){return this.each((function(){const e=An.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}j.on(window,"load.bs.scrollspy.data-api",(()=>{V.find('[data-bs-spy="scroll"]').forEach((t=>new An(t)))})),g(An);const Tn="active",On="fade",Cn="show",kn=".active",Ln=":scope > li > .active";class xn extends B{static get NAME(){return"tab"}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(Tn))return;let t;const e=n(this._element),i=this._element.closest(".nav, .list-group");if(i){const e="UL"===i.nodeName||"OL"===i.nodeName?Ln:kn;t=V.find(e,i),t=t[t.length-1]}const s=t?j.trigger(t,"hide.bs.tab",{relatedTarget:this._element}):null;if(j.trigger(this._element,"show.bs.tab",{relatedTarget:t}).defaultPrevented||null!==s&&s.defaultPrevented)return;this._activate(this._element,i);const o=()=>{j.trigger(t,"hidden.bs.tab",{relatedTarget:this._element}),j.trigger(this._element,"shown.bs.tab",{relatedTarget:t})};e?this._activate(e,e.parentNode,o):o()}_activate(t,e,i){const n=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?V.children(e,kn):V.find(Ln,e))[0],s=i&&n&&n.classList.contains(On),o=()=>this._transitionComplete(t,n,i);n&&s?(n.classList.remove(Cn),this._queueCallback(o,t,!0)):o()}_transitionComplete(t,e,i){if(e){e.classList.remove(Tn);const t=V.findOne(":scope > .dropdown-menu .active",e.parentNode);t&&t.classList.remove(Tn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}t.classList.add(Tn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),u(t),t.classList.contains(On)&&t.classList.add(Cn);let n=t.parentNode;if(n&&"LI"===n.nodeName&&(n=n.parentNode),n&&n.classList.contains("dropdown-menu")){const e=t.closest(".dropdown");e&&V.find(".dropdown-toggle",e).forEach((t=>t.classList.add(Tn))),t.setAttribute("aria-expanded",!0)}i&&i()}static jQueryInterface(t){return this.each((function(){const e=xn.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}j.on(document,"click.bs.tab.data-api",'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),c(this)||xn.getOrCreateInstance(this).show()})),g(xn);const Dn="toast",Sn="hide",Nn="show",In="showing",Pn={animation:"boolean",autohide:"boolean",delay:"number"},jn={animation:!0,autohide:!0,delay:5e3};class Mn extends B{constructor(t,e){super(t),this._config=this._getConfig(e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return Pn}static get Default(){return jn}static get NAME(){return Dn}show(){j.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Sn),u(this._element),this._element.classList.add(Nn),this._element.classList.add(In),this._queueCallback((()=>{this._element.classList.remove(In),j.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()}),this._element,this._config.animation))}hide(){this._element.classList.contains(Nn)&&(j.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.add(In),this._queueCallback((()=>{this._element.classList.add(Sn),this._element.classList.remove(In),this._element.classList.remove(Nn),j.trigger(this._element,"hidden.bs.toast")}),this._element,this._config.animation)))}dispose(){this._clearTimeout(),this._element.classList.contains(Nn)&&this._element.classList.remove(Nn),super.dispose()}_getConfig(t){return t={...jn,...U.getDataAttributes(this._element),..."object"==typeof t&&t?t:{}},a(Dn,t,this.constructor.DefaultType),t}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){j.on(this._element,"mouseover.bs.toast",(t=>this._onInteraction(t,!0))),j.on(this._element,"mouseout.bs.toast",(t=>this._onInteraction(t,!1))),j.on(this._element,"focusin.bs.toast",(t=>this._onInteraction(t,!0))),j.on(this._element,"focusout.bs.toast",(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=Mn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return R(Mn),g(Mn),{Alert:W,Button:z,Carousel:st,Collapse:pt,Dropdown:hi,Modal:Hi,Offcanvas:Fi,Popover:gn,ScrollSpy:An,Tab:xn,Toast:Mn,Tooltip:un}}));
//# sourceMappingURL=bootstrap.bundle.min.js.map

(function () {

	'use trict';
// How long you want the animation to take, in ms
const animationDuration = 2000;
// Calculate how long each ‘frame’ should last if we want to update the animation 60 times per second
const frameDuration = 1000 / 60;
// Use that to calculate how many frames we need to complete the animation
const totalFrames = Math.round( animationDuration / frameDuration );
// An ease-out function that slows the count as it progresses
const easeOutQuad = t => t * ( 2 - t );


const numberWithCommas = n => {
	return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');	
}

// The animation function, which takes an Element
const animateCountUp = el => {
	let frame = 0;
	const countTo = parseInt( el.innerHTML, 10 );
	// Start the animation running 60 times per second
	const counter = setInterval( () => {
		frame++;
		// Calculate our progress as a value between 0 and 1
		// Pass that value to our easing function to get our
		// progress on a curve
		const progress = easeOutQuad( frame / totalFrames );
		// Use the progress value to calculate the current count
		const currentCount = Math.round( countTo * progress );

		// If the current count has changed, update the element
		if ( parseInt( el.innerHTML, 10 ) !== currentCount ) {
			el.innerHTML = numberWithCommas(currentCount);
		}

		// If we’ve reached our last frame, stop the animation
		if ( frame === totalFrames ) {
			clearInterval( counter );
		}
	}, frameDuration );
};

// Run the animation on all elements with a class of ‘countup’
const runAnimations = () => {
	const countupEls = document.querySelectorAll( '.countup' );
	countupEls.forEach( animateCountUp );
};




// In Viewed
var elements;
var windowHeight;

function init() {
	elements = document.querySelectorAll('.section-counter');
	windowHeight = window.innerHeight;
}

function checkPosition() {
	var i;
	for (i = 0; i < elements.length; i++) {
		var element = elements[i];
		var positionFromTop = elements[i].getBoundingClientRect().top;
		if (positionFromTop - windowHeight <= 0) {
			if( !element.classList.contains('viewed') ) {
				element.classList.add('viewed');
				runAnimations();
			} else {
				if ( element.classList.contains('viewed') ) {

				}
			}

		}
	}
}

window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', init);

init();
checkPosition();


})()

(function () {

	'use strict'


	AOS.init({
		duration: 800,
		easing: 'slide',
		once: true
	});

	var rellax = new Rellax('.rellax');

	var preloader = function() {

		var loader = document.querySelector('.loader');
		var overlay = document.getElementById('overlayer');

		function fadeOut(el) {
			el.style.opacity = 1;
			(function fade() {
				if ((el.style.opacity -= .1) < 0) {
					el.style.display = "none";
				} else {
					requestAnimationFrame(fade);
				}
			})();
		};

		setTimeout(function() {
			fadeOut(loader);
			fadeOut(overlay);
		}, 200);
	};
	preloader();
	

	var tinyslier = function() {

		

		var el = document.querySelectorAll('.wide-slider-testimonial');
		if ( el.length > 0 ) {
			var slider = tns({
				container: ".wide-slider-testimonial",
				items: 1,
				slideBy: 1,
				axis: "horizontal",
				swipeAngle: false,
				speed: 700,
				nav: true,
				loop: true,
				edgePadding: 40,
				controls: true,
				controlsPosition: "bottom",
				autoHeight: true,
				autoplay: true,
				mouseDrag: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false,
				controlsContainer: "#prevnext-testimonial",
				responsive: {
					350: {
						items: 1
					},
					
					500: {
						items: 2
					},
					600: {
						items: 3
					},
					900: {
						items: 5
					}
				},
			});
		}


		var destinationSlider = document.querySelectorAll('.destination-slider');

		if ( destinationSlider.length > 0 ) {
			var desSlider = tns({
				container: ".destination-slider",
				mouseDrag: true,
				items: 1,
				axis: "horizontal",
				swipeAngle: false,
				speed: 700,
				edgePadding: 50,
				nav: true,
				gutter: 30,
				autoplay: true,
				autoplayButtonOutput: false,
				controlsContainer: "#destination-controls",
				responsive: {
					350: {
						items: 1
					},
					
					500: {
						items: 2
					},
					600: {
						items: 3
					},
					900: {
						items: 5
					}
				},
			})
		}



	}
	tinyslier();


	var lightbox = function() {
		var lightboxVideo = GLightbox({
			selector: '.glightbox3'
		});
	};
	lightbox();



})();

/* flatpickr v4.6.6,, @license MIT */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self).flatpickr=n()}(this,(function(){"use strict";var e=function(){return(e=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)};function n(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var a=Array(e),i=0;for(n=0;n<t;n++)for(var o=arguments[n],r=0,l=o.length;r<l;r++,i++)a[i]=o[r];return a}var t=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],a={_disable:[],_enable:[],allowInput:!1,allowInvalidPreload:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:"object"==typeof window&&-1===window.navigator.userAgent.indexOf("MSIE"),ariaDateFormat:"F j, Y",autoFillDefaultTime:!0,clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enable:[],enableSeconds:!1,enableTime:!1,errorHandler:function(e){return"undefined"!=typeof console&&console.warn(e)},getWeek:function(e){var n=new Date(e.getTime());n.setHours(0,0,0,0),n.setDate(n.getDate()+3-(n.getDay()+6)%7);var t=new Date(n.getFullYear(),0,4);return 1+Math.round(((n.getTime()-t.getTime())/864e5-3+(t.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",monthSelectorType:"dropdown",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},i={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(e){var n=e%100;if(n>3&&n<21)return"th";switch(n%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1},o=function(e,n){return void 0===n&&(n=2),("000"+e).slice(-1*n)},r=function(e){return!0===e?1:0};function l(e,n,t){var a;return void 0===t&&(t=!1),function(){var i=this,o=arguments;null!==a&&clearTimeout(a),a=window.setTimeout((function(){a=null,t||e.apply(i,o)}),n),t&&!a&&e.apply(i,o)}}var c=function(e){return e instanceof Array?e:[e]};function d(e,n,t){if(!0===t)return e.classList.add(n);e.classList.remove(n)}function s(e,n,t){var a=window.document.createElement(e);return n=n||"",t=t||"",a.className=n,void 0!==t&&(a.textContent=t),a}function u(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function f(e,n){var t=s("div","numInputWrapper"),a=s("input","numInput "+e),i=s("span","arrowUp"),o=s("span","arrowDown");if(-1===navigator.userAgent.indexOf("MSIE 9.0")?a.type="number":(a.type="text",a.pattern="\\d*"),void 0!==n)for(var r in n)a.setAttribute(r,n[r]);return t.appendChild(a),t.appendChild(i),t.appendChild(o),t}function m(e){try{return"function"==typeof e.composedPath?e.composedPath()[0]:e.target}catch(n){return e.target}}var g=function(){},p=function(e,n,t){return t.months[n?"shorthand":"longhand"][e]},h={D:g,F:function(e,n,t){e.setMonth(t.months.longhand.indexOf(n))},G:function(e,n){e.setHours(parseFloat(n))},H:function(e,n){e.setHours(parseFloat(n))},J:function(e,n){e.setDate(parseFloat(n))},K:function(e,n,t){e.setHours(e.getHours()%12+12*r(new RegExp(t.amPM[1],"i").test(n)))},M:function(e,n,t){e.setMonth(t.months.shorthand.indexOf(n))},S:function(e,n){e.setSeconds(parseFloat(n))},U:function(e,n){return new Date(1e3*parseFloat(n))},W:function(e,n,t){var a=parseInt(n),i=new Date(e.getFullYear(),0,2+7*(a-1),0,0,0,0);return i.setDate(i.getDate()-i.getDay()+t.firstDayOfWeek),i},Y:function(e,n){e.setFullYear(parseFloat(n))},Z:function(e,n){return new Date(n)},d:function(e,n){e.setDate(parseFloat(n))},h:function(e,n){e.setHours(parseFloat(n))},i:function(e,n){e.setMinutes(parseFloat(n))},j:function(e,n){e.setDate(parseFloat(n))},l:g,m:function(e,n){e.setMonth(parseFloat(n)-1)},n:function(e,n){e.setMonth(parseFloat(n)-1)},s:function(e,n){e.setSeconds(parseFloat(n))},u:function(e,n){return new Date(parseFloat(n))},w:g,y:function(e,n){e.setFullYear(2e3+parseFloat(n))}},v={D:"(\\w+)",F:"(\\w+)",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"(\\w+)",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"(\\w+)",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},D={Z:function(e){return e.toISOString()},D:function(e,n,t){return n.weekdays.shorthand[D.w(e,n,t)]},F:function(e,n,t){return p(D.n(e,n,t)-1,!1,n)},G:function(e,n,t){return o(D.h(e,n,t))},H:function(e){return o(e.getHours())},J:function(e,n){return void 0!==n.ordinal?e.getDate()+n.ordinal(e.getDate()):e.getDate()},K:function(e,n){return n.amPM[r(e.getHours()>11)]},M:function(e,n){return p(e.getMonth(),!0,n)},S:function(e){return o(e.getSeconds())},U:function(e){return e.getTime()/1e3},W:function(e,n,t){return t.getWeek(e)},Y:function(e){return o(e.getFullYear(),4)},d:function(e){return o(e.getDate())},h:function(e){return e.getHours()%12?e.getHours()%12:12},i:function(e){return o(e.getMinutes())},j:function(e){return e.getDate()},l:function(e,n){return n.weekdays.longhand[e.getDay()]},m:function(e){return o(e.getMonth()+1)},n:function(e){return e.getMonth()+1},s:function(e){return e.getSeconds()},u:function(e){return e.getTime()},w:function(e){return e.getDay()},y:function(e){return String(e.getFullYear()).substring(2)}},w=function(e){var n=e.config,t=void 0===n?a:n,o=e.l10n,r=void 0===o?i:o,l=e.isMobile,c=void 0!==l&&l;return function(e,n,a){var i=a||r;return void 0===t.formatDate||c?n.split("").map((function(n,a,o){return D[n]&&"\\"!==o[a-1]?D[n](e,i,t):"\\"!==n?n:""})).join(""):t.formatDate(e,n,i)}},b=function(e){var n=e.config,t=void 0===n?a:n,o=e.l10n,r=void 0===o?i:o;return function(e,n,i,o){if(0===e||e){var l,c=o||r,d=e;if(e instanceof Date)l=new Date(e.getTime());else if("string"!=typeof e&&void 0!==e.toFixed)l=new Date(e);else if("string"==typeof e){var s=n||(t||a).dateFormat,u=String(e).trim();if("today"===u)l=new Date,i=!0;else if(/Z$/.test(u)||/GMT$/.test(u))l=new Date(e);else if(t&&t.parseDate)l=t.parseDate(e,s);else{l=t&&t.noCalendar?new Date((new Date).setHours(0,0,0,0)):new Date((new Date).getFullYear(),0,1,0,0,0,0);for(var f=void 0,m=[],g=0,p=0,D="";g<s.length;g++){var w=s[g],b="\\"===w,C="\\"===s[g-1]||b;if(v[w]&&!C){D+=v[w];var M=new RegExp(D).exec(e);M&&(f=!0)&&m["Y"!==w?"push":"unshift"]({fn:h[w],val:M[++p]})}else b||(D+=".");m.forEach((function(e){var n=e.fn,t=e.val;return l=n(l,t,c)||l}))}l=f?l:void 0}}if(l instanceof Date&&!isNaN(l.getTime()))return!0===i&&l.setHours(0,0,0,0),l;t.errorHandler(new Error("Invalid date provided: "+d))}}};function C(e,n,t){return void 0===t&&(t=!0),!1!==t?new Date(e.getTime()).setHours(0,0,0,0)-new Date(n.getTime()).setHours(0,0,0,0):e.getTime()-n.getTime()}var M=864e5;"function"!=typeof Object.assign&&(Object.assign=function(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];if(!e)throw TypeError("Cannot convert undefined or null to object");for(var a=function(n){n&&Object.keys(n).forEach((function(t){return e[t]=n[t]}))},i=0,o=n;i<o.length;i++){var r=o[i];a(r)}return e});function y(g,h){var D={config:e(e({},a),E.defaultConfig),l10n:i};function y(e){return e.bind(D)}function x(){var e=D.config;!1===e.weekNumbers&&1===e.showMonths||!0!==e.noCalendar&&window.requestAnimationFrame((function(){if(void 0!==D.calendarContainer&&(D.calendarContainer.style.visibility="hidden",D.calendarContainer.style.display="block"),void 0!==D.daysContainer){var n=(D.days.offsetWidth+1)*e.showMonths;D.daysContainer.style.width=n+"px",D.calendarContainer.style.width=n+(void 0!==D.weekWrapper?D.weekWrapper.offsetWidth:0)+"px",D.calendarContainer.style.removeProperty("visibility"),D.calendarContainer.style.removeProperty("display")}}))}function k(e){if(0===D.selectedDates.length){var n=void 0!==D.config.minDate?new Date(D.config.minDate.getTime()):new Date,t=S(),a=t.hours,i=t.minutes,l=t.seconds;n.setHours(a,i,l,0),D.setDate(n,!1)}void 0!==e&&"blur"!==e.type&&function(e){e.preventDefault();var n="keydown"===e.type,t=m(e),a=t;void 0!==D.amPM&&t===D.amPM&&(D.amPM.textContent=D.l10n.amPM[r(D.amPM.textContent===D.l10n.amPM[0])]);var i=parseFloat(a.getAttribute("min")),l=parseFloat(a.getAttribute("max")),c=parseFloat(a.getAttribute("step")),d=parseInt(a.value,10),s=e.delta||(n?38===e.which?1:-1:0),u=d+c*s;if(void 0!==a.value&&2===a.value.length){var f=a===D.hourElement,g=a===D.minuteElement;u<i?(u=l+u+r(!f)+(r(f)&&r(!D.amPM)),g&&Y(void 0,-1,D.hourElement)):u>l&&(u=a===D.hourElement?u-l-r(!D.amPM):i,g&&Y(void 0,1,D.hourElement)),D.amPM&&f&&(1===c?u+d===23:Math.abs(u-d)>c)&&(D.amPM.textContent=D.l10n.amPM[r(D.amPM.textContent===D.l10n.amPM[0])]),a.value=o(u)}}(e);var c=D._input.value;T(),we(),D._input.value!==c&&D._debouncedChange()}function T(){if(void 0!==D.hourElement&&void 0!==D.minuteElement){var e,n,t=(parseInt(D.hourElement.value.slice(-2),10)||0)%24,a=(parseInt(D.minuteElement.value,10)||0)%60,i=void 0!==D.secondElement?(parseInt(D.secondElement.value,10)||0)%60:0;void 0!==D.amPM&&(e=t,n=D.amPM.textContent,t=e%12+12*r(n===D.l10n.amPM[1]));var o=void 0!==D.config.minTime||D.config.minDate&&D.minDateHasTime&&D.latestSelectedDateObj&&0===C(D.latestSelectedDateObj,D.config.minDate,!0);if(void 0!==D.config.maxTime||D.config.maxDate&&D.maxDateHasTime&&D.latestSelectedDateObj&&0===C(D.latestSelectedDateObj,D.config.maxDate,!0)){var l=void 0!==D.config.maxTime?D.config.maxTime:D.config.maxDate;(t=Math.min(t,l.getHours()))===l.getHours()&&(a=Math.min(a,l.getMinutes())),a===l.getMinutes()&&(i=Math.min(i,l.getSeconds()))}if(o){var c=void 0!==D.config.minTime?D.config.minTime:D.config.minDate;(t=Math.max(t,c.getHours()))===c.getHours()&&(a=Math.max(a,c.getMinutes())),a===c.getMinutes()&&(i=Math.max(i,c.getSeconds()))}_(t,a,i)}}function I(e){var n=e||D.latestSelectedDateObj;n&&_(n.getHours(),n.getMinutes(),n.getSeconds())}function S(){var e=D.config.defaultHour,n=D.config.defaultMinute,t=D.config.defaultSeconds;if(void 0!==D.config.minDate){var a=D.config.minDate.getHours(),i=D.config.minDate.getMinutes();(e=Math.max(e,a))===a&&(n=Math.max(i,n)),e===a&&n===i&&(t=D.config.minDate.getSeconds())}if(void 0!==D.config.maxDate){var o=D.config.maxDate.getHours(),r=D.config.maxDate.getMinutes();(e=Math.min(e,o))===o&&(n=Math.min(r,n)),e===o&&n===r&&(t=D.config.maxDate.getSeconds())}return{hours:e,minutes:n,seconds:t}}function _(e,n,t){void 0!==D.latestSelectedDateObj&&D.latestSelectedDateObj.setHours(e%24,n,t||0,0),D.hourElement&&D.minuteElement&&!D.isMobile&&(D.hourElement.value=o(D.config.time_24hr?e:(12+e)%12+12*r(e%12==0)),D.minuteElement.value=o(n),void 0!==D.amPM&&(D.amPM.textContent=D.l10n.amPM[r(e>=12)]),void 0!==D.secondElement&&(D.secondElement.value=o(t)))}function O(e){var n=m(e),t=parseInt(n.value)+(e.delta||0);(t/1e3>1||"Enter"===e.key&&!/[^\d]/.test(t.toString()))&&Z(t)}function F(e,n,t,a){return n instanceof Array?n.forEach((function(n){return F(e,n,t,a)})):e instanceof Array?e.forEach((function(e){return F(e,n,t,a)})):(e.addEventListener(n,t,a),void D._handlers.push({element:e,event:n,handler:t,options:a}))}function N(){ge("onChange")}function A(e,n){var t=void 0!==e?D.parseDate(e):D.latestSelectedDateObj||(D.config.minDate&&D.config.minDate>D.now?D.config.minDate:D.config.maxDate&&D.config.maxDate<D.now?D.config.maxDate:D.now),a=D.currentYear,i=D.currentMonth;try{void 0!==t&&(D.currentYear=t.getFullYear(),D.currentMonth=t.getMonth())}catch(e){e.message="Invalid date supplied: "+t,D.config.errorHandler(e)}n&&D.currentYear!==a&&(ge("onYearChange"),J()),!n||D.currentYear===a&&D.currentMonth===i||ge("onMonthChange"),D.redraw()}function P(e){var n=m(e);~n.className.indexOf("arrow")&&Y(e,n.classList.contains("arrowUp")?1:-1)}function Y(e,n,t){var a=e&&m(e),i=t||a&&a.parentNode&&a.parentNode.firstChild,o=pe("increment");o.delta=n,i&&i.dispatchEvent(o)}function H(e,n,t,a){var i=Q(n,!0),o=s("span","flatpickr-day "+e,n.getDate().toString());return o.dateObj=n,o.$i=a,o.setAttribute("aria-label",D.formatDate(n,D.config.ariaDateFormat)),-1===e.indexOf("hidden")&&0===C(n,D.now)&&(D.todayDateElem=o,o.classList.add("today"),o.setAttribute("aria-current","date")),i?(o.tabIndex=-1,he(n)&&(o.classList.add("selected"),D.selectedDateElem=o,"range"===D.config.mode&&(d(o,"startRange",D.selectedDates[0]&&0===C(n,D.selectedDates[0],!0)),d(o,"endRange",D.selectedDates[1]&&0===C(n,D.selectedDates[1],!0)),"nextMonthDay"===e&&o.classList.add("inRange")))):o.classList.add("flatpickr-disabled"),"range"===D.config.mode&&function(e){return!("range"!==D.config.mode||D.selectedDates.length<2)&&(C(e,D.selectedDates[0])>=0&&C(e,D.selectedDates[1])<=0)}(n)&&!he(n)&&o.classList.add("inRange"),D.weekNumbers&&1===D.config.showMonths&&"prevMonthDay"!==e&&t%7==1&&D.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+D.config.getWeek(n)+"</span>"),ge("onDayCreate",o),o}function j(e){e.focus(),"range"===D.config.mode&&te(e)}function L(e){for(var n=e>0?0:D.config.showMonths-1,t=e>0?D.config.showMonths:-1,a=n;a!=t;a+=e)for(var i=D.daysContainer.children[a],o=e>0?0:i.children.length-1,r=e>0?i.children.length:-1,l=o;l!=r;l+=e){var c=i.children[l];if(-1===c.className.indexOf("hidden")&&Q(c.dateObj))return c}}function W(e,n){var t=X(document.activeElement||document.body),a=void 0!==e?e:t?document.activeElement:void 0!==D.selectedDateElem&&X(D.selectedDateElem)?D.selectedDateElem:void 0!==D.todayDateElem&&X(D.todayDateElem)?D.todayDateElem:L(n>0?1:-1);void 0===a?D._input.focus():t?function(e,n){for(var t=-1===e.className.indexOf("Month")?e.dateObj.getMonth():D.currentMonth,a=n>0?D.config.showMonths:-1,i=n>0?1:-1,o=t-D.currentMonth;o!=a;o+=i)for(var r=D.daysContainer.children[o],l=t-D.currentMonth===o?e.$i+n:n<0?r.children.length-1:0,c=r.children.length,d=l;d>=0&&d<c&&d!=(n>0?c:-1);d+=i){var s=r.children[d];if(-1===s.className.indexOf("hidden")&&Q(s.dateObj)&&Math.abs(e.$i-d)>=Math.abs(n))return j(s)}D.changeMonth(i),W(L(i),0)}(a,n):j(a)}function R(e,n){for(var t=(new Date(e,n,1).getDay()-D.l10n.firstDayOfWeek+7)%7,a=D.utils.getDaysInMonth((n-1+12)%12,e),i=D.utils.getDaysInMonth(n,e),o=window.document.createDocumentFragment(),r=D.config.showMonths>1,l=r?"prevMonthDay hidden":"prevMonthDay",c=r?"nextMonthDay hidden":"nextMonthDay",d=a+1-t,u=0;d<=a;d++,u++)o.appendChild(H(l,new Date(e,n-1,d),d,u));for(d=1;d<=i;d++,u++)o.appendChild(H("",new Date(e,n,d),d,u));for(var f=i+1;f<=42-t&&(1===D.config.showMonths||u%7!=0);f++,u++)o.appendChild(H(c,new Date(e,n+1,f%i),f,u));var m=s("div","dayContainer");return m.appendChild(o),m}function B(){if(void 0!==D.daysContainer){u(D.daysContainer),D.weekNumbers&&u(D.weekNumbers);for(var e=document.createDocumentFragment(),n=0;n<D.config.showMonths;n++){var t=new Date(D.currentYear,D.currentMonth,1);t.setMonth(D.currentMonth+n),e.appendChild(R(t.getFullYear(),t.getMonth()))}D.daysContainer.appendChild(e),D.days=D.daysContainer.firstChild,"range"===D.config.mode&&1===D.selectedDates.length&&te()}}function J(){if(!(D.config.showMonths>1||"dropdown"!==D.config.monthSelectorType)){var e=function(e){return!(void 0!==D.config.minDate&&D.currentYear===D.config.minDate.getFullYear()&&e<D.config.minDate.getMonth())&&!(void 0!==D.config.maxDate&&D.currentYear===D.config.maxDate.getFullYear()&&e>D.config.maxDate.getMonth())};D.monthsDropdownContainer.tabIndex=-1,D.monthsDropdownContainer.innerHTML="";for(var n=0;n<12;n++)if(e(n)){var t=s("option","flatpickr-monthDropdown-month");t.value=new Date(D.currentYear,n).getMonth().toString(),t.textContent=p(n,D.config.shorthandCurrentMonth,D.l10n),t.tabIndex=-1,D.currentMonth===n&&(t.selected=!0),D.monthsDropdownContainer.appendChild(t)}}}function K(){var e,n=s("div","flatpickr-month"),t=window.document.createDocumentFragment();D.config.showMonths>1||"static"===D.config.monthSelectorType?e=s("span","cur-month"):(D.monthsDropdownContainer=s("select","flatpickr-monthDropdown-months"),D.monthsDropdownContainer.setAttribute("aria-label",D.l10n.monthAriaLabel),F(D.monthsDropdownContainer,"change",(function(e){var n=m(e),t=parseInt(n.value,10);D.changeMonth(t-D.currentMonth),ge("onMonthChange")})),J(),e=D.monthsDropdownContainer);var a=f("cur-year",{tabindex:"-1"}),i=a.getElementsByTagName("input")[0];i.setAttribute("aria-label",D.l10n.yearAriaLabel),D.config.minDate&&i.setAttribute("min",D.config.minDate.getFullYear().toString()),D.config.maxDate&&(i.setAttribute("max",D.config.maxDate.getFullYear().toString()),i.disabled=!!D.config.minDate&&D.config.minDate.getFullYear()===D.config.maxDate.getFullYear());var o=s("div","flatpickr-current-month");return o.appendChild(e),o.appendChild(a),t.appendChild(o),n.appendChild(t),{container:n,yearElement:i,monthElement:e}}function U(){u(D.monthNav),D.monthNav.appendChild(D.prevMonthNav),D.config.showMonths&&(D.yearElements=[],D.monthElements=[]);for(var e=D.config.showMonths;e--;){var n=K();D.yearElements.push(n.yearElement),D.monthElements.push(n.monthElement),D.monthNav.appendChild(n.container)}D.monthNav.appendChild(D.nextMonthNav)}function q(){D.weekdayContainer?u(D.weekdayContainer):D.weekdayContainer=s("div","flatpickr-weekdays");for(var e=D.config.showMonths;e--;){var n=s("div","flatpickr-weekdaycontainer");D.weekdayContainer.appendChild(n)}return $(),D.weekdayContainer}function $(){if(D.weekdayContainer){var e=D.l10n.firstDayOfWeek,t=n(D.l10n.weekdays.shorthand);e>0&&e<t.length&&(t=n(t.splice(e,t.length),t.splice(0,e)));for(var a=D.config.showMonths;a--;)D.weekdayContainer.children[a].innerHTML="\n      <span class='flatpickr-weekday'>\n        "+t.join("</span><span class='flatpickr-weekday'>")+"\n      </span>\n      "}}function z(e,n){void 0===n&&(n=!0);var t=n?e:e-D.currentMonth;t<0&&!0===D._hidePrevMonthArrow||t>0&&!0===D._hideNextMonthArrow||(D.currentMonth+=t,(D.currentMonth<0||D.currentMonth>11)&&(D.currentYear+=D.currentMonth>11?1:-1,D.currentMonth=(D.currentMonth+12)%12,ge("onYearChange"),J()),B(),ge("onMonthChange"),ve())}function G(e){return!(!D.config.appendTo||!D.config.appendTo.contains(e))||D.calendarContainer.contains(e)}function V(e){if(D.isOpen&&!D.config.inline){var n=m(e),t=G(n),a=n===D.input||n===D.altInput||D.element.contains(n)||e.path&&e.path.indexOf&&(~e.path.indexOf(D.input)||~e.path.indexOf(D.altInput)),i="blur"===e.type?a&&e.relatedTarget&&!G(e.relatedTarget):!a&&!t&&!G(e.relatedTarget),o=!D.config.ignoredFocusElements.some((function(e){return e.contains(n)}));i&&o&&(void 0!==D.timeContainer&&void 0!==D.minuteElement&&void 0!==D.hourElement&&""!==D.input.value&&void 0!==D.input.value&&k(),D.close(),D.config&&"range"===D.config.mode&&1===D.selectedDates.length&&(D.clear(!1),D.redraw()))}}function Z(e){if(!(!e||D.config.minDate&&e<D.config.minDate.getFullYear()||D.config.maxDate&&e>D.config.maxDate.getFullYear())){var n=e,t=D.currentYear!==n;D.currentYear=n||D.currentYear,D.config.maxDate&&D.currentYear===D.config.maxDate.getFullYear()?D.currentMonth=Math.min(D.config.maxDate.getMonth(),D.currentMonth):D.config.minDate&&D.currentYear===D.config.minDate.getFullYear()&&(D.currentMonth=Math.max(D.config.minDate.getMonth(),D.currentMonth)),t&&(D.redraw(),ge("onYearChange"),J())}}function Q(e,n){void 0===n&&(n=!0);var t=D.parseDate(e,void 0,n);if(D.config.minDate&&t&&C(t,D.config.minDate,void 0!==n?n:!D.minDateHasTime)<0||D.config.maxDate&&t&&C(t,D.config.maxDate,void 0!==n?n:!D.maxDateHasTime)>0)return!1;if(0===D.config.enable.length&&0===D.config.disable.length)return!0;if(void 0===t)return!1;for(var a=D.config.enable.length>0,i=a?D.config.enable:D.config.disable,o=0,r=void 0;o<i.length;o++){if("function"==typeof(r=i[o])&&r(t))return a;if(r instanceof Date&&void 0!==t&&r.getTime()===t.getTime())return a;if("string"==typeof r&&void 0!==t){var l=D.parseDate(r,void 0,!0);return l&&l.getTime()===t.getTime()?a:!a}if("object"==typeof r&&void 0!==t&&r.from&&r.to&&t.getTime()>=r.from.getTime()&&t.getTime()<=r.to.getTime())return a}return!a}function X(e){return void 0!==D.daysContainer&&(-1===e.className.indexOf("hidden")&&-1===e.className.indexOf("flatpickr-disabled")&&D.daysContainer.contains(e))}function ee(e){!(e.target===D._input)||e.relatedTarget&&G(e.relatedTarget)||D.setDate(D._input.value,!0,e.target===D.altInput?D.config.altFormat:D.config.dateFormat)}function ne(e){var n=m(e),t=D.config.wrap?g.contains(n):n===D._input,a=D.config.allowInput,i=D.isOpen&&(!a||!t),o=D.config.inline&&t&&!a;if(13===e.keyCode&&t){if(a)return D.setDate(D._input.value,!0,n===D.altInput?D.config.altFormat:D.config.dateFormat),n.blur();D.open()}else if(G(n)||i||o){var r=!!D.timeContainer&&D.timeContainer.contains(n);switch(e.keyCode){case 13:r?(e.preventDefault(),k(),de()):se(e);break;case 27:e.preventDefault(),de();break;case 8:case 46:t&&!D.config.allowInput&&(e.preventDefault(),D.clear());break;case 37:case 39:if(r||t)D.hourElement&&D.hourElement.focus();else if(e.preventDefault(),void 0!==D.daysContainer&&(!1===a||document.activeElement&&X(document.activeElement))){var l=39===e.keyCode?1:-1;e.ctrlKey?(e.stopPropagation(),z(l),W(L(1),0)):W(void 0,l)}break;case 38:case 40:e.preventDefault();var c=40===e.keyCode?1:-1;D.daysContainer&&void 0!==n.$i||n===D.input||n===D.altInput?e.ctrlKey?(e.stopPropagation(),Z(D.currentYear-c),W(L(1),0)):r||W(void 0,7*c):n===D.currentYearElement?Z(D.currentYear-c):D.config.enableTime&&(!r&&D.hourElement&&D.hourElement.focus(),k(e),D._debouncedChange());break;case 9:if(r){var d=[D.hourElement,D.minuteElement,D.secondElement,D.amPM].concat(D.pluginElements).filter((function(e){return e})),s=d.indexOf(n);if(-1!==s){var u=d[s+(e.shiftKey?-1:1)];e.preventDefault(),(u||D._input).focus()}}else!D.config.noCalendar&&D.daysContainer&&D.daysContainer.contains(n)&&e.shiftKey&&(e.preventDefault(),D._input.focus())}}if(void 0!==D.amPM&&n===D.amPM)switch(e.key){case D.l10n.amPM[0].charAt(0):case D.l10n.amPM[0].charAt(0).toLowerCase():D.amPM.textContent=D.l10n.amPM[0],T(),we();break;case D.l10n.amPM[1].charAt(0):case D.l10n.amPM[1].charAt(0).toLowerCase():D.amPM.textContent=D.l10n.amPM[1],T(),we()}(t||G(n))&&ge("onKeyDown",e)}function te(e){if(1===D.selectedDates.length&&(!e||e.classList.contains("flatpickr-day")&&!e.classList.contains("flatpickr-disabled"))){for(var n=e?e.dateObj.getTime():D.days.firstElementChild.dateObj.getTime(),t=D.parseDate(D.selectedDates[0],void 0,!0).getTime(),a=Math.min(n,D.selectedDates[0].getTime()),i=Math.max(n,D.selectedDates[0].getTime()),o=!1,r=0,l=0,c=a;c<i;c+=M)Q(new Date(c),!0)||(o=o||c>a&&c<i,c<t&&(!r||c>r)?r=c:c>t&&(!l||c<l)&&(l=c));for(var d=0;d<D.config.showMonths;d++)for(var s=D.daysContainer.children[d],u=function(a,i){var c,d,u,f=s.children[a],m=f.dateObj.getTime(),g=r>0&&m<r||l>0&&m>l;return g?(f.classList.add("notAllowed"),["inRange","startRange","endRange"].forEach((function(e){f.classList.remove(e)})),"continue"):o&&!g?"continue":(["startRange","inRange","endRange","notAllowed"].forEach((function(e){f.classList.remove(e)})),void(void 0!==e&&(e.classList.add(n<=D.selectedDates[0].getTime()?"startRange":"endRange"),t<n&&m===t?f.classList.add("startRange"):t>n&&m===t&&f.classList.add("endRange"),m>=r&&(0===l||m<=l)&&(d=t,u=n,(c=m)>Math.min(d,u)&&c<Math.max(d,u))&&f.classList.add("inRange"))))},f=0,m=s.children.length;f<m;f++)u(f)}}function ae(){!D.isOpen||D.config.static||D.config.inline||le()}function ie(e){return function(n){var t=D.config["_"+e+"Date"]=D.parseDate(n,D.config.dateFormat),a=D.config["_"+("min"===e?"max":"min")+"Date"];void 0!==t&&(D["min"===e?"minDateHasTime":"maxDateHasTime"]=t.getHours()>0||t.getMinutes()>0||t.getSeconds()>0),D.selectedDates&&(D.selectedDates=D.selectedDates.filter((function(e){return Q(e)})),D.selectedDates.length||"min"!==e||I(t),we()),D.daysContainer&&(ce(),void 0!==t?D.currentYearElement[e]=t.getFullYear().toString():D.currentYearElement.removeAttribute(e),D.currentYearElement.disabled=!!a&&void 0!==t&&a.getFullYear()===t.getFullYear())}}function oe(){return D.config.wrap?g.querySelector("[data-input]"):g}function re(){"object"!=typeof D.config.locale&&void 0===E.l10ns[D.config.locale]&&D.config.errorHandler(new Error("flatpickr: invalid locale "+D.config.locale)),D.l10n=e(e({},E.l10ns.default),"object"==typeof D.config.locale?D.config.locale:"default"!==D.config.locale?E.l10ns[D.config.locale]:void 0),v.K="("+D.l10n.amPM[0]+"|"+D.l10n.amPM[1]+"|"+D.l10n.amPM[0].toLowerCase()+"|"+D.l10n.amPM[1].toLowerCase()+")",void 0===e(e({},h),JSON.parse(JSON.stringify(g.dataset||{}))).time_24hr&&void 0===E.defaultConfig.time_24hr&&(D.config.time_24hr=D.l10n.time_24hr),D.formatDate=w(D),D.parseDate=b({config:D.config,l10n:D.l10n})}function le(e){if(void 0!==D.calendarContainer){ge("onPreCalendarPosition");var n=e||D._positionElement,t=Array.prototype.reduce.call(D.calendarContainer.children,(function(e,n){return e+n.offsetHeight}),0),a=D.calendarContainer.offsetWidth,i=D.config.position.split(" "),o=i[0],r=i.length>1?i[1]:null,l=n.getBoundingClientRect(),c=window.innerHeight-l.bottom,s="above"===o||"below"!==o&&c<t&&l.top>t,u=window.pageYOffset+l.top+(s?-t-2:n.offsetHeight+2);if(d(D.calendarContainer,"arrowTop",!s),d(D.calendarContainer,"arrowBottom",s),!D.config.inline){var f=window.pageXOffset+l.left,m=!1,g=!1;"center"===r?(f-=(a-l.width)/2,m=!0):"right"===r&&(f-=a-l.width,g=!0),d(D.calendarContainer,"arrowLeft",!m&&!g),d(D.calendarContainer,"arrowCenter",m),d(D.calendarContainer,"arrowRight",g);var p=window.document.body.offsetWidth-(window.pageXOffset+l.right),h=f+a>window.document.body.offsetWidth,v=p+a>window.document.body.offsetWidth;if(d(D.calendarContainer,"rightMost",h),!D.config.static)if(D.calendarContainer.style.top=u+"px",h)if(v){var w=function(){for(var e=null,n=0;n<document.styleSheets.length;n++){var t=document.styleSheets[n];try{t.cssRules}catch(e){continue}e=t;break}return null!=e?e:(a=document.createElement("style"),document.head.appendChild(a),a.sheet);var a}();if(void 0===w)return;var b=window.document.body.offsetWidth,C=Math.max(0,b/2-a/2),M=w.cssRules.length,y="{left:"+l.left+"px;right:auto;}";d(D.calendarContainer,"rightMost",!1),d(D.calendarContainer,"centerMost",!0),w.insertRule(".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after"+y,M),D.calendarContainer.style.left=C+"px",D.calendarContainer.style.right="auto"}else D.calendarContainer.style.left="auto",D.calendarContainer.style.right=p+"px";else D.calendarContainer.style.left=f+"px",D.calendarContainer.style.right="auto"}}}function ce(){D.config.noCalendar||D.isMobile||(J(),ve(),B())}function de(){D._input.focus(),-1!==window.navigator.userAgent.indexOf("MSIE")||void 0!==navigator.msMaxTouchPoints?setTimeout(D.close,0):D.close()}function se(e){e.preventDefault(),e.stopPropagation();var n=function e(n,t){return t(n)?n:n.parentNode?e(n.parentNode,t):void 0}(m(e),(function(e){return e.classList&&e.classList.contains("flatpickr-day")&&!e.classList.contains("flatpickr-disabled")&&!e.classList.contains("notAllowed")}));if(void 0!==n){var t=n,a=D.latestSelectedDateObj=new Date(t.dateObj.getTime()),i=(a.getMonth()<D.currentMonth||a.getMonth()>D.currentMonth+D.config.showMonths-1)&&"range"!==D.config.mode;if(D.selectedDateElem=t,"single"===D.config.mode)D.selectedDates=[a];else if("multiple"===D.config.mode){var o=he(a);o?D.selectedDates.splice(parseInt(o),1):D.selectedDates.push(a)}else"range"===D.config.mode&&(2===D.selectedDates.length&&D.clear(!1,!1),D.latestSelectedDateObj=a,D.selectedDates.push(a),0!==C(a,D.selectedDates[0],!0)&&D.selectedDates.sort((function(e,n){return e.getTime()-n.getTime()})));if(T(),i){var r=D.currentYear!==a.getFullYear();D.currentYear=a.getFullYear(),D.currentMonth=a.getMonth(),r&&(ge("onYearChange"),J()),ge("onMonthChange")}if(ve(),B(),we(),i||"range"===D.config.mode||1!==D.config.showMonths?void 0!==D.selectedDateElem&&void 0===D.hourElement&&D.selectedDateElem&&D.selectedDateElem.focus():j(t),void 0!==D.hourElement&&void 0!==D.hourElement&&D.hourElement.focus(),D.config.closeOnSelect){var l="single"===D.config.mode&&!D.config.enableTime,c="range"===D.config.mode&&2===D.selectedDates.length&&!D.config.enableTime;(l||c)&&de()}N()}}D.parseDate=b({config:D.config,l10n:D.l10n}),D._handlers=[],D.pluginElements=[],D.loadedPlugins=[],D._bind=F,D._setHoursFromDate=I,D._positionCalendar=le,D.changeMonth=z,D.changeYear=Z,D.clear=function(e,n){void 0===e&&(e=!0);void 0===n&&(n=!0);D.input.value="",void 0!==D.altInput&&(D.altInput.value="");void 0!==D.mobileInput&&(D.mobileInput.value="");D.selectedDates=[],D.latestSelectedDateObj=void 0,!0===n&&(D.currentYear=D._initialDate.getFullYear(),D.currentMonth=D._initialDate.getMonth());if(!0===D.config.enableTime){var t=S(),a=t.hours,i=t.minutes,o=t.seconds;_(a,i,o)}D.redraw(),e&&ge("onChange")},D.close=function(){D.isOpen=!1,D.isMobile||(void 0!==D.calendarContainer&&D.calendarContainer.classList.remove("open"),void 0!==D._input&&D._input.classList.remove("active"));ge("onClose")},D._createElement=s,D.destroy=function(){void 0!==D.config&&ge("onDestroy");for(var e=D._handlers.length;e--;){var n=D._handlers[e];n.element.removeEventListener(n.event,n.handler,n.options)}if(D._handlers=[],D.mobileInput)D.mobileInput.parentNode&&D.mobileInput.parentNode.removeChild(D.mobileInput),D.mobileInput=void 0;else if(D.calendarContainer&&D.calendarContainer.parentNode)if(D.config.static&&D.calendarContainer.parentNode){var t=D.calendarContainer.parentNode;if(t.lastChild&&t.removeChild(t.lastChild),t.parentNode){for(;t.firstChild;)t.parentNode.insertBefore(t.firstChild,t);t.parentNode.removeChild(t)}}else D.calendarContainer.parentNode.removeChild(D.calendarContainer);D.altInput&&(D.input.type="text",D.altInput.parentNode&&D.altInput.parentNode.removeChild(D.altInput),delete D.altInput);D.input&&(D.input.type=D.input._type,D.input.classList.remove("flatpickr-input"),D.input.removeAttribute("readonly"));["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","monthsDropdownContainer","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach((function(e){try{delete D[e]}catch(e){}}))},D.isEnabled=Q,D.jumpToDate=A,D.open=function(e,n){void 0===n&&(n=D._positionElement);if(!0===D.isMobile){if(e){e.preventDefault();var t=m(e);t&&t.blur()}return void 0!==D.mobileInput&&(D.mobileInput.focus(),D.mobileInput.click()),void ge("onOpen")}if(D._input.disabled||D.config.inline)return;var a=D.isOpen;D.isOpen=!0,a||(D.calendarContainer.classList.add("open"),D._input.classList.add("active"),ge("onOpen"),le(n));!0===D.config.enableTime&&!0===D.config.noCalendar&&(!1!==D.config.allowInput||void 0!==e&&D.timeContainer.contains(e.relatedTarget)||setTimeout((function(){return D.hourElement.select()}),50))},D.redraw=ce,D.set=function(e,n){if(null!==e&&"object"==typeof e)for(var a in Object.assign(D.config,e),e)void 0!==ue[a]&&ue[a].forEach((function(e){return e()}));else D.config[e]=n,void 0!==ue[e]?ue[e].forEach((function(e){return e()})):t.indexOf(e)>-1&&(D.config[e]=c(n));D.redraw(),we(!0)},D.setDate=function(e,n,t){void 0===n&&(n=!1);void 0===t&&(t=D.config.dateFormat);if(0!==e&&!e||e instanceof Array&&0===e.length)return D.clear(n);fe(e,t),D.latestSelectedDateObj=D.selectedDates[D.selectedDates.length-1],D.redraw(),A(void 0,n),I(),0===D.selectedDates.length&&D.clear(!1);we(n),n&&ge("onChange")},D.toggle=function(e){if(!0===D.isOpen)return D.close();D.open(e)};var ue={locale:[re,$],showMonths:[U,x,q],minDate:[A],maxDate:[A]};function fe(e,n){var t=[];if(e instanceof Array)t=e.map((function(e){return D.parseDate(e,n)}));else if(e instanceof Date||"number"==typeof e)t=[D.parseDate(e,n)];else if("string"==typeof e)switch(D.config.mode){case"single":case"time":t=[D.parseDate(e,n)];break;case"multiple":t=e.split(D.config.conjunction).map((function(e){return D.parseDate(e,n)}));break;case"range":t=e.split(D.l10n.rangeSeparator).map((function(e){return D.parseDate(e,n)}))}else D.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(e)));D.selectedDates=D.config.allowInvalidPreload?t:t.filter((function(e){return e instanceof Date&&Q(e,!1)})),"range"===D.config.mode&&D.selectedDates.sort((function(e,n){return e.getTime()-n.getTime()}))}function me(e){return e.slice().map((function(e){return"string"==typeof e||"number"==typeof e||e instanceof Date?D.parseDate(e,void 0,!0):e&&"object"==typeof e&&e.from&&e.to?{from:D.parseDate(e.from,void 0),to:D.parseDate(e.to,void 0)}:e})).filter((function(e){return e}))}function ge(e,n){if(void 0!==D.config){var t=D.config[e];if(void 0!==t&&t.length>0)for(var a=0;t[a]&&a<t.length;a++)t[a](D.selectedDates,D.input.value,D,n);"onChange"===e&&(D.input.dispatchEvent(pe("change")),D.input.dispatchEvent(pe("input")))}}function pe(e){var n=document.createEvent("Event");return n.initEvent(e,!0,!0),n}function he(e){for(var n=0;n<D.selectedDates.length;n++)if(0===C(D.selectedDates[n],e))return""+n;return!1}function ve(){D.config.noCalendar||D.isMobile||!D.monthNav||(D.yearElements.forEach((function(e,n){var t=new Date(D.currentYear,D.currentMonth,1);t.setMonth(D.currentMonth+n),D.config.showMonths>1||"static"===D.config.monthSelectorType?D.monthElements[n].textContent=p(t.getMonth(),D.config.shorthandCurrentMonth,D.l10n)+" ":D.monthsDropdownContainer.value=t.getMonth().toString(),e.value=t.getFullYear().toString()})),D._hidePrevMonthArrow=void 0!==D.config.minDate&&(D.currentYear===D.config.minDate.getFullYear()?D.currentMonth<=D.config.minDate.getMonth():D.currentYear<D.config.minDate.getFullYear()),D._hideNextMonthArrow=void 0!==D.config.maxDate&&(D.currentYear===D.config.maxDate.getFullYear()?D.currentMonth+1>D.config.maxDate.getMonth():D.currentYear>D.config.maxDate.getFullYear()))}function De(e){return D.selectedDates.map((function(n){return D.formatDate(n,e)})).filter((function(e,n,t){return"range"!==D.config.mode||D.config.enableTime||t.indexOf(e)===n})).join("range"!==D.config.mode?D.config.conjunction:D.l10n.rangeSeparator)}function we(e){void 0===e&&(e=!0),void 0!==D.mobileInput&&D.mobileFormatStr&&(D.mobileInput.value=void 0!==D.latestSelectedDateObj?D.formatDate(D.latestSelectedDateObj,D.mobileFormatStr):""),D.input.value=De(D.config.dateFormat),void 0!==D.altInput&&(D.altInput.value=De(D.config.altFormat)),!1!==e&&ge("onValueUpdate")}function be(e){var n=m(e),t=D.prevMonthNav.contains(n),a=D.nextMonthNav.contains(n);t||a?z(t?-1:1):D.yearElements.indexOf(n)>=0?n.select():n.classList.contains("arrowUp")?D.changeYear(D.currentYear+1):n.classList.contains("arrowDown")&&D.changeYear(D.currentYear-1)}return function(){D.element=D.input=g,D.isOpen=!1,function(){var n=["wrap","weekNumbers","allowInput","allowInvalidPreload","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],i=e(e({},JSON.parse(JSON.stringify(g.dataset||{}))),h),o={};D.config.parseDate=i.parseDate,D.config.formatDate=i.formatDate,Object.defineProperty(D.config,"enable",{get:function(){return D.config._enable},set:function(e){D.config._enable=me(e)}}),Object.defineProperty(D.config,"disable",{get:function(){return D.config._disable},set:function(e){D.config._disable=me(e)}});var r="time"===i.mode;if(!i.dateFormat&&(i.enableTime||r)){var l=E.defaultConfig.dateFormat||a.dateFormat;o.dateFormat=i.noCalendar||r?"H:i"+(i.enableSeconds?":S":""):l+" H:i"+(i.enableSeconds?":S":"")}if(i.altInput&&(i.enableTime||r)&&!i.altFormat){var d=E.defaultConfig.altFormat||a.altFormat;o.altFormat=i.noCalendar||r?"h:i"+(i.enableSeconds?":S K":" K"):d+" h:i"+(i.enableSeconds?":S":"")+" K"}Object.defineProperty(D.config,"minDate",{get:function(){return D.config._minDate},set:ie("min")}),Object.defineProperty(D.config,"maxDate",{get:function(){return D.config._maxDate},set:ie("max")});var s=function(e){return function(n){D.config["min"===e?"_minTime":"_maxTime"]=D.parseDate(n,"H:i:S")}};Object.defineProperty(D.config,"minTime",{get:function(){return D.config._minTime},set:s("min")}),Object.defineProperty(D.config,"maxTime",{get:function(){return D.config._maxTime},set:s("max")}),"time"===i.mode&&(D.config.noCalendar=!0,D.config.enableTime=!0);Object.assign(D.config,o,i);for(var u=0;u<n.length;u++)D.config[n[u]]=!0===D.config[n[u]]||"true"===D.config[n[u]];t.filter((function(e){return void 0!==D.config[e]})).forEach((function(e){D.config[e]=c(D.config[e]||[]).map(y)})),D.isMobile=!D.config.disableMobile&&!D.config.inline&&"single"===D.config.mode&&!D.config.disable.length&&!D.config.enable.length&&!D.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for(u=0;u<D.config.plugins.length;u++){var f=D.config.plugins[u](D)||{};for(var m in f)t.indexOf(m)>-1?D.config[m]=c(f[m]).map(y).concat(D.config[m]):void 0===i[m]&&(D.config[m]=f[m])}i.altInputClass||(D.config.altInputClass=oe().className+" "+D.config.altInputClass);ge("onParseConfig")}(),re(),function(){if(D.input=oe(),!D.input)return void D.config.errorHandler(new Error("Invalid input element specified"));D.input._type=D.input.type,D.input.type="text",D.input.classList.add("flatpickr-input"),D._input=D.input,D.config.altInput&&(D.altInput=s(D.input.nodeName,D.config.altInputClass),D._input=D.altInput,D.altInput.placeholder=D.input.placeholder,D.altInput.disabled=D.input.disabled,D.altInput.required=D.input.required,D.altInput.tabIndex=D.input.tabIndex,D.altInput.type="text",D.input.setAttribute("type","hidden"),!D.config.static&&D.input.parentNode&&D.input.parentNode.insertBefore(D.altInput,D.input.nextSibling));D.config.allowInput||D._input.setAttribute("readonly","readonly");D._positionElement=D.config.positionElement||D._input}(),function(){D.selectedDates=[],D.now=D.parseDate(D.config.now)||new Date;var e=D.config.defaultDate||("INPUT"!==D.input.nodeName&&"TEXTAREA"!==D.input.nodeName||!D.input.placeholder||D.input.value!==D.input.placeholder?D.input.value:null);e&&fe(e,D.config.dateFormat);D._initialDate=D.selectedDates.length>0?D.selectedDates[0]:D.config.minDate&&D.config.minDate.getTime()>D.now.getTime()?D.config.minDate:D.config.maxDate&&D.config.maxDate.getTime()<D.now.getTime()?D.config.maxDate:D.now,D.currentYear=D._initialDate.getFullYear(),D.currentMonth=D._initialDate.getMonth(),D.selectedDates.length>0&&(D.latestSelectedDateObj=D.selectedDates[0]);void 0!==D.config.minTime&&(D.config.minTime=D.parseDate(D.config.minTime,"H:i"));void 0!==D.config.maxTime&&(D.config.maxTime=D.parseDate(D.config.maxTime,"H:i"));D.minDateHasTime=!!D.config.minDate&&(D.config.minDate.getHours()>0||D.config.minDate.getMinutes()>0||D.config.minDate.getSeconds()>0),D.maxDateHasTime=!!D.config.maxDate&&(D.config.maxDate.getHours()>0||D.config.maxDate.getMinutes()>0||D.config.maxDate.getSeconds()>0)}(),D.utils={getDaysInMonth:function(e,n){return void 0===e&&(e=D.currentMonth),void 0===n&&(n=D.currentYear),1===e&&(n%4==0&&n%100!=0||n%400==0)?29:D.l10n.daysInMonth[e]}},D.isMobile||function(){var e=window.document.createDocumentFragment();if(D.calendarContainer=s("div","flatpickr-calendar"),D.calendarContainer.tabIndex=-1,!D.config.noCalendar){if(e.appendChild((D.monthNav=s("div","flatpickr-months"),D.yearElements=[],D.monthElements=[],D.prevMonthNav=s("span","flatpickr-prev-month"),D.prevMonthNav.innerHTML=D.config.prevArrow,D.nextMonthNav=s("span","flatpickr-next-month"),D.nextMonthNav.innerHTML=D.config.nextArrow,U(),Object.defineProperty(D,"_hidePrevMonthArrow",{get:function(){return D.__hidePrevMonthArrow},set:function(e){D.__hidePrevMonthArrow!==e&&(d(D.prevMonthNav,"flatpickr-disabled",e),D.__hidePrevMonthArrow=e)}}),Object.defineProperty(D,"_hideNextMonthArrow",{get:function(){return D.__hideNextMonthArrow},set:function(e){D.__hideNextMonthArrow!==e&&(d(D.nextMonthNav,"flatpickr-disabled",e),D.__hideNextMonthArrow=e)}}),D.currentYearElement=D.yearElements[0],ve(),D.monthNav)),D.innerContainer=s("div","flatpickr-innerContainer"),D.config.weekNumbers){var n=function(){D.calendarContainer.classList.add("hasWeeks");var e=s("div","flatpickr-weekwrapper");e.appendChild(s("span","flatpickr-weekday",D.l10n.weekAbbreviation));var n=s("div","flatpickr-weeks");return e.appendChild(n),{weekWrapper:e,weekNumbers:n}}(),t=n.weekWrapper,a=n.weekNumbers;D.innerContainer.appendChild(t),D.weekNumbers=a,D.weekWrapper=t}D.rContainer=s("div","flatpickr-rContainer"),D.rContainer.appendChild(q()),D.daysContainer||(D.daysContainer=s("div","flatpickr-days"),D.daysContainer.tabIndex=-1),B(),D.rContainer.appendChild(D.daysContainer),D.innerContainer.appendChild(D.rContainer),e.appendChild(D.innerContainer)}D.config.enableTime&&e.appendChild(function(){D.calendarContainer.classList.add("hasTime"),D.config.noCalendar&&D.calendarContainer.classList.add("noCalendar");D.timeContainer=s("div","flatpickr-time"),D.timeContainer.tabIndex=-1;var e=s("span","flatpickr-time-separator",":"),n=f("flatpickr-hour",{"aria-label":D.l10n.hourAriaLabel});D.hourElement=n.getElementsByTagName("input")[0];var t=f("flatpickr-minute",{"aria-label":D.l10n.minuteAriaLabel});D.minuteElement=t.getElementsByTagName("input")[0],D.hourElement.tabIndex=D.minuteElement.tabIndex=-1,D.hourElement.value=o(D.latestSelectedDateObj?D.latestSelectedDateObj.getHours():D.config.time_24hr?D.config.defaultHour:function(e){switch(e%24){case 0:case 12:return 12;default:return e%12}}(D.config.defaultHour)),D.minuteElement.value=o(D.latestSelectedDateObj?D.latestSelectedDateObj.getMinutes():D.config.defaultMinute),D.hourElement.setAttribute("step",D.config.hourIncrement.toString()),D.minuteElement.setAttribute("step",D.config.minuteIncrement.toString()),D.hourElement.setAttribute("min",D.config.time_24hr?"0":"1"),D.hourElement.setAttribute("max",D.config.time_24hr?"23":"12"),D.minuteElement.setAttribute("min","0"),D.minuteElement.setAttribute("max","59"),D.timeContainer.appendChild(n),D.timeContainer.appendChild(e),D.timeContainer.appendChild(t),D.config.time_24hr&&D.timeContainer.classList.add("time24hr");if(D.config.enableSeconds){D.timeContainer.classList.add("hasSeconds");var a=f("flatpickr-second");D.secondElement=a.getElementsByTagName("input")[0],D.secondElement.value=o(D.latestSelectedDateObj?D.latestSelectedDateObj.getSeconds():D.config.defaultSeconds),D.secondElement.setAttribute("step",D.minuteElement.getAttribute("step")),D.secondElement.setAttribute("min","0"),D.secondElement.setAttribute("max","59"),D.timeContainer.appendChild(s("span","flatpickr-time-separator",":")),D.timeContainer.appendChild(a)}D.config.time_24hr||(D.amPM=s("span","flatpickr-am-pm",D.l10n.amPM[r((D.latestSelectedDateObj?D.hourElement.value:D.config.defaultHour)>11)]),D.amPM.title=D.l10n.toggleTitle,D.amPM.tabIndex=-1,D.timeContainer.appendChild(D.amPM));return D.timeContainer}());d(D.calendarContainer,"rangeMode","range"===D.config.mode),d(D.calendarContainer,"animate",!0===D.config.animate),d(D.calendarContainer,"multiMonth",D.config.showMonths>1),D.calendarContainer.appendChild(e);var i=void 0!==D.config.appendTo&&void 0!==D.config.appendTo.nodeType;if((D.config.inline||D.config.static)&&(D.calendarContainer.classList.add(D.config.inline?"inline":"static"),D.config.inline&&(!i&&D.element.parentNode?D.element.parentNode.insertBefore(D.calendarContainer,D._input.nextSibling):void 0!==D.config.appendTo&&D.config.appendTo.appendChild(D.calendarContainer)),D.config.static)){var l=s("div","flatpickr-wrapper");D.element.parentNode&&D.element.parentNode.insertBefore(l,D.element),l.appendChild(D.element),D.altInput&&l.appendChild(D.altInput),l.appendChild(D.calendarContainer)}D.config.static||D.config.inline||(void 0!==D.config.appendTo?D.config.appendTo:window.document.body).appendChild(D.calendarContainer)}(),function(){D.config.wrap&&["open","close","toggle","clear"].forEach((function(e){Array.prototype.forEach.call(D.element.querySelectorAll("[data-"+e+"]"),(function(n){return F(n,"click",D[e])}))}));if(D.isMobile)return void function(){var e=D.config.enableTime?D.config.noCalendar?"time":"datetime-local":"date";D.mobileInput=s("input",D.input.className+" flatpickr-mobile"),D.mobileInput.tabIndex=1,D.mobileInput.type=e,D.mobileInput.disabled=D.input.disabled,D.mobileInput.required=D.input.required,D.mobileInput.placeholder=D.input.placeholder,D.mobileFormatStr="datetime-local"===e?"Y-m-d\\TH:i:S":"date"===e?"Y-m-d":"H:i:S",D.selectedDates.length>0&&(D.mobileInput.defaultValue=D.mobileInput.value=D.formatDate(D.selectedDates[0],D.mobileFormatStr));D.config.minDate&&(D.mobileInput.min=D.formatDate(D.config.minDate,"Y-m-d"));D.config.maxDate&&(D.mobileInput.max=D.formatDate(D.config.maxDate,"Y-m-d"));D.input.getAttribute("step")&&(D.mobileInput.step=String(D.input.getAttribute("step")));D.input.type="hidden",void 0!==D.altInput&&(D.altInput.type="hidden");try{D.input.parentNode&&D.input.parentNode.insertBefore(D.mobileInput,D.input.nextSibling)}catch(e){}F(D.mobileInput,"change",(function(e){D.setDate(m(e).value,!1,D.mobileFormatStr),ge("onChange"),ge("onClose")}))}();var e=l(ae,50);D._debouncedChange=l(N,300),D.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&F(D.daysContainer,"mouseover",(function(e){"range"===D.config.mode&&te(m(e))}));F(window.document.body,"keydown",ne),D.config.inline||D.config.static||F(window,"resize",e);void 0!==window.ontouchstart?F(window.document,"touchstart",V):F(window.document,"click",V);F(window.document,"focus",V,{capture:!0}),!0===D.config.clickOpens&&(F(D._input,"focus",D.open),F(D._input,"click",D.open));void 0!==D.daysContainer&&(F(D.monthNav,"click",be),F(D.monthNav,["keyup","increment"],O),F(D.daysContainer,"click",se));if(void 0!==D.timeContainer&&void 0!==D.minuteElement&&void 0!==D.hourElement){F(D.timeContainer,["increment"],k),F(D.timeContainer,"blur",k,{capture:!0}),F(D.timeContainer,"click",P),F([D.hourElement,D.minuteElement],["focus","click"],(function(e){return m(e).select()})),void 0!==D.secondElement&&F(D.secondElement,"focus",(function(){return D.secondElement&&D.secondElement.select()})),void 0!==D.amPM&&F(D.amPM,"click",(function(e){k(e),N()}))}D.config.allowInput&&F(D._input,"blur",ee)}(),(D.selectedDates.length||D.config.noCalendar)&&(D.config.enableTime&&I(D.config.noCalendar?D.latestSelectedDateObj||D.config.minDate:void 0),we(!1)),x();var n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);!D.isMobile&&n&&le(),ge("onReady")}(),D}function x(e,n){for(var t=Array.prototype.slice.call(e).filter((function(e){return e instanceof HTMLElement})),a=[],i=0;i<t.length;i++){var o=t[i];try{if(null!==o.getAttribute("data-fp-omit"))continue;void 0!==o._flatpickr&&(o._flatpickr.destroy(),o._flatpickr=void 0),o._flatpickr=y(o,n||{}),a.push(o._flatpickr)}catch(e){console.error(e)}}return 1===a.length?a[0]:a}"undefined"!=typeof HTMLElement&&"undefined"!=typeof HTMLCollection&&"undefined"!=typeof NodeList&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(e){return x(this,e)},HTMLElement.prototype.flatpickr=function(e){return x([this],e)});var E=function(e,n){return"string"==typeof e?x(window.document.querySelectorAll(e),n):e instanceof Node?x([e],n):x(e,n)};return E.defaultConfig={},E.l10ns={en:e({},i),default:e({},i)},E.localize=function(n){E.l10ns.default=e(e({},E.l10ns.default),n)},E.setDefaults=function(n){E.defaultConfig=e(e({},E.defaultConfig),n)},E.parseDate=b({}),E.formatDate=w({}),E.compareDates=C,"undefined"!=typeof jQuery&&void 0!==jQuery.fn&&(jQuery.fn.flatpickr=function(e){return x(this,e)}),Date.prototype.fp_incr=function(e){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+("string"==typeof e?parseInt(e,10):e))},"undefined"!=typeof window&&(window.flatpickr=E),E}));

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).GLightbox=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function s(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var o=Date.now();function r(){var e={},t=!0,i=0,n=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],i++);for(var s=function(i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t&&"[object Object]"===Object.prototype.toString.call(i[n])?e[n]=r(!0,e[n],i[n]):e[n]=i[n])};i<n;i++){var l=arguments[i];s(l)}return e}function a(e,t){if((A(e)||e===window||e===document)&&(e=[e]),I(e)||O(e)||(e=[e]),0!=X(e))if(I(e)&&!O(e))for(var i=e.length,n=0;n<i&&!1!==t.call(e[n],e[n],n,e);n++);else if(O(e))for(var s in e)if(M(e,s)&&!1===t.call(e[s],e[s],s,e))break}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=e[o]=e[o]||[],s={all:n,evt:null,found:null};return t&&i&&X(n)>0&&a(n,(function(e,n){if(e.eventName==t&&e.fn.toString()==i.toString())return s.found=!0,s.evt=n,!1})),s}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.onElement,n=t.withCallback,s=t.avoidDuplicate,l=void 0===s||s,o=t.once,r=void 0!==o&&o,c=t.useCapture,d=void 0!==c&&c,u=arguments.length>2?arguments[2]:void 0,g=i||[];function v(e){C(n)&&n.call(u,e,this),r&&v.destroy()}return E(g)&&(g=document.querySelectorAll(g)),v.destroy=function(){a(g,(function(t){var i=h(t,e,v);i.found&&i.all.splice(i.evt,1),t.removeEventListener&&t.removeEventListener(e,v,d)}))},a(g,(function(t){var i=h(t,e,v);(t.addEventListener&&l&&!i.found||!l)&&(t.addEventListener(e,v,d),i.all.push({eventName:e,fn:v}))})),v}function d(e,t){a(t.split(" "),(function(t){return e.classList.add(t)}))}function u(e,t){a(t.split(" "),(function(t){return e.classList.remove(t)}))}function g(e,t){return e.classList.contains(t)}function v(e,t){for(;e!==document.body;){if(!(e=e.parentElement))return!1;if("function"==typeof e.matches?e.matches(t):e.msMatchesSelector(t))return e}}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||""===t)return!1;if("none"==t)return C(i)&&i(),!1;var n=S(),s=t.split(" ");a(s,(function(t){d(e,"g"+t)})),c(n,{onElement:e,avoidDuplicate:!1,once:!0,withCallback:function(e,t){a(s,(function(e){u(t,"g"+e)})),C(i)&&i()}})}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(""==t)return e.style.webkitTransform="",e.style.MozTransform="",e.style.msTransform="",e.style.OTransform="",e.style.transform="",!1;e.style.webkitTransform=t,e.style.MozTransform=t,e.style.msTransform=t,e.style.OTransform=t,e.style.transform=t}function m(e){e.style.display="block"}function y(e){e.style.display="none"}function x(e){var t=document.createDocumentFragment(),i=document.createElement("div");for(i.innerHTML=e;i.firstChild;)t.appendChild(i.firstChild);return t}function b(){return{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}}function S(){var e,t=document.createElement("fakeelement"),i={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(e in i)if(void 0!==t.style[e])return i[e]}function w(e,t,i,n){if(e())t();else{var s;i||(i=100);var l=setInterval((function(){e()&&(clearInterval(l),s&&clearTimeout(s),t())}),i);n&&(s=setTimeout((function(){clearInterval(l)}),n))}}function T(e,t,i){if(P(e))console.error("Inject assets error");else if(C(t)&&(i=t,t=!1),E(t)&&t in window)C(i)&&i();else{var n;if(-1!==e.indexOf(".css")){if((n=document.querySelectorAll('link[href="'+e+'"]'))&&n.length>0)return void(C(i)&&i());var s=document.getElementsByTagName("head")[0],l=s.querySelectorAll('link[rel="stylesheet"]'),o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.href=e,o.media="all",l?s.insertBefore(o,l[0]):s.appendChild(o),void(C(i)&&i())}if((n=document.querySelectorAll('script[src="'+e+'"]'))&&n.length>0){if(C(i)){if(E(t))return w((function(){return void 0!==window[t]}),(function(){i()})),!1;i()}}else{var r=document.createElement("script");r.type="text/javascript",r.src=e,r.onload=function(){if(C(i)){if(E(t))return w((function(){return void 0!==window[t]}),(function(){i()})),!1;i()}},document.body.appendChild(r)}}}function k(){return"navigator"in window&&window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i)}function C(e){return"function"==typeof e}function E(e){return"string"==typeof e}function A(e){return!(!e||!e.nodeType||1!=e.nodeType)}function L(e){return Array.isArray(e)}function I(e){return e&&e.length&&isFinite(e.length)}function O(t){return"object"===e(t)&&null!=t&&!C(t)&&!L(t)}function P(e){return null==e}function M(e,t){return null!==e&&hasOwnProperty.call(e,t)}function X(e){if(O(e)){if(e.keys)return e.keys().length;var t=0;for(var i in e)M(e,i)&&t++;return t}return e.length}function z(e){return!isNaN(parseFloat(e))&&isFinite(e)}function Y(e){if(e.events.hasOwnProperty("keyboard"))return!1;e.events.keyboard=c("keydown",{onElement:window,withCallback:function(t,i){var n=(t=t||window.event).keyCode;if(9==n){var l=!(!document.activeElement||!document.activeElement.nodeName)&&document.activeElement.nodeName.toLocaleLowerCase();if("input"==l||"textarea"==l||"button"==l)return;t.preventDefault();var o=document.querySelectorAll(".gbtn");if(!o||o.length<=0)return;var r=s(o).filter((function(e){return g(e,"focused")}));if(!r.length){var a=document.querySelector('.gbtn[tabindex="0"]');return void(a&&(a.focus(),d(a,"focused")))}o.forEach((function(e){return u(e,"focused")}));var h=r[0].getAttribute("tabindex");h=h||"0";var c=parseInt(h)+1;c>o.length-1&&(c="0");var v=document.querySelector('.gbtn[tabindex="'.concat(c,'"]'));v&&(v.focus(),d(v,"focused"))}39==n&&e.nextSlide(),37==n&&e.prevSlide(),27==n&&e.close()}})}function q(e){return Math.sqrt(e.x*e.x+e.y*e.y)}function D(e,t){var i=function(e,t){var i=q(e)*q(t);if(0===i)return 0;var n=function(e,t){return e.x*t.x+e.y*t.y}(e,t)/i;return n>1&&(n=1),Math.acos(n)}(e,t);return function(e,t){return e.x*t.y-t.x*e.y}(e,t)>0&&(i*=-1),180*i/Math.PI}var N=function(){function e(i){t(this,e),this.handlers=[],this.el=i}return n(e,[{key:"add",value:function(e){this.handlers.push(e)}},{key:"del",value:function(e){e||(this.handlers=[]);for(var t=this.handlers.length;t>=0;t--)this.handlers[t]===e&&this.handlers.splice(t,1)}},{key:"dispatch",value:function(){for(var e=0,t=this.handlers.length;e<t;e++){var i=this.handlers[e];"function"==typeof i&&i.apply(this.el,arguments)}}}]),e}();function _(e,t){var i=new N(e);return i.add(t),i}var B=function(){function e(i,n){t(this,e),this.element="string"==typeof i?document.querySelector(i):i,this.start=this.start.bind(this),this.move=this.move.bind(this),this.end=this.end.bind(this),this.cancel=this.cancel.bind(this),this.element.addEventListener("touchstart",this.start,!1),this.element.addEventListener("touchmove",this.move,!1),this.element.addEventListener("touchend",this.end,!1),this.element.addEventListener("touchcancel",this.cancel,!1),this.preV={x:null,y:null},this.pinchStartLen=null,this.zoom=1,this.isDoubleTap=!1;var s=function(){};this.rotate=_(this.element,n.rotate||s),this.touchStart=_(this.element,n.touchStart||s),this.multipointStart=_(this.element,n.multipointStart||s),this.multipointEnd=_(this.element,n.multipointEnd||s),this.pinch=_(this.element,n.pinch||s),this.swipe=_(this.element,n.swipe||s),this.tap=_(this.element,n.tap||s),this.doubleTap=_(this.element,n.doubleTap||s),this.longTap=_(this.element,n.longTap||s),this.singleTap=_(this.element,n.singleTap||s),this.pressMove=_(this.element,n.pressMove||s),this.twoFingerPressMove=_(this.element,n.twoFingerPressMove||s),this.touchMove=_(this.element,n.touchMove||s),this.touchEnd=_(this.element,n.touchEnd||s),this.touchCancel=_(this.element,n.touchCancel||s),this._cancelAllHandler=this.cancelAll.bind(this),window.addEventListener("scroll",this._cancelAllHandler),this.delta=null,this.last=null,this.now=null,this.tapTimeout=null,this.singleTapTimeout=null,this.longTapTimeout=null,this.swipeTimeout=null,this.x1=this.x2=this.y1=this.y2=null,this.preTapPosition={x:null,y:null}}return n(e,[{key:"start",value:function(e){if(e.touches){this.now=Date.now(),this.x1=e.touches[0].pageX,this.y1=e.touches[0].pageY,this.delta=this.now-(this.last||this.now),this.touchStart.dispatch(e,this.element),null!==this.preTapPosition.x&&(this.isDoubleTap=this.delta>0&&this.delta<=250&&Math.abs(this.preTapPosition.x-this.x1)<30&&Math.abs(this.preTapPosition.y-this.y1)<30,this.isDoubleTap&&clearTimeout(this.singleTapTimeout)),this.preTapPosition.x=this.x1,this.preTapPosition.y=this.y1,this.last=this.now;var t=this.preV;if(e.touches.length>1){this._cancelLongTap(),this._cancelSingleTap();var i={x:e.touches[1].pageX-this.x1,y:e.touches[1].pageY-this.y1};t.x=i.x,t.y=i.y,this.pinchStartLen=q(t),this.multipointStart.dispatch(e,this.element)}this._preventTap=!1,this.longTapTimeout=setTimeout(function(){this.longTap.dispatch(e,this.element),this._preventTap=!0}.bind(this),750)}}},{key:"move",value:function(e){if(e.touches){var t=this.preV,i=e.touches.length,n=e.touches[0].pageX,s=e.touches[0].pageY;if(this.isDoubleTap=!1,i>1){var l=e.touches[1].pageX,o=e.touches[1].pageY,r={x:e.touches[1].pageX-n,y:e.touches[1].pageY-s};null!==t.x&&(this.pinchStartLen>0&&(e.zoom=q(r)/this.pinchStartLen,this.pinch.dispatch(e,this.element)),e.angle=D(r,t),this.rotate.dispatch(e,this.element)),t.x=r.x,t.y=r.y,null!==this.x2&&null!==this.sx2?(e.deltaX=(n-this.x2+l-this.sx2)/2,e.deltaY=(s-this.y2+o-this.sy2)/2):(e.deltaX=0,e.deltaY=0),this.twoFingerPressMove.dispatch(e,this.element),this.sx2=l,this.sy2=o}else{if(null!==this.x2){e.deltaX=n-this.x2,e.deltaY=s-this.y2;var a=Math.abs(this.x1-this.x2),h=Math.abs(this.y1-this.y2);(a>10||h>10)&&(this._preventTap=!0)}else e.deltaX=0,e.deltaY=0;this.pressMove.dispatch(e,this.element)}this.touchMove.dispatch(e,this.element),this._cancelLongTap(),this.x2=n,this.y2=s,i>1&&e.preventDefault()}}},{key:"end",value:function(e){if(e.changedTouches){this._cancelLongTap();var t=this;e.touches.length<2&&(this.multipointEnd.dispatch(e,this.element),this.sx2=this.sy2=null),this.x2&&Math.abs(this.x1-this.x2)>30||this.y2&&Math.abs(this.y1-this.y2)>30?(e.direction=this._swipeDirection(this.x1,this.x2,this.y1,this.y2),this.swipeTimeout=setTimeout((function(){t.swipe.dispatch(e,t.element)}),0)):(this.tapTimeout=setTimeout((function(){t._preventTap||t.tap.dispatch(e,t.element),t.isDoubleTap&&(t.doubleTap.dispatch(e,t.element),t.isDoubleTap=!1)}),0),t.isDoubleTap||(t.singleTapTimeout=setTimeout((function(){t.singleTap.dispatch(e,t.element)}),250))),this.touchEnd.dispatch(e,this.element),this.preV.x=0,this.preV.y=0,this.zoom=1,this.pinchStartLen=null,this.x1=this.x2=this.y1=this.y2=null}}},{key:"cancelAll",value:function(){this._preventTap=!0,clearTimeout(this.singleTapTimeout),clearTimeout(this.tapTimeout),clearTimeout(this.longTapTimeout),clearTimeout(this.swipeTimeout)}},{key:"cancel",value:function(e){this.cancelAll(),this.touchCancel.dispatch(e,this.element)}},{key:"_cancelLongTap",value:function(){clearTimeout(this.longTapTimeout)}},{key:"_cancelSingleTap",value:function(){clearTimeout(this.singleTapTimeout)}},{key:"_swipeDirection",value:function(e,t,i,n){return Math.abs(e-t)>=Math.abs(i-n)?e-t>0?"Left":"Right":i-n>0?"Up":"Down"}},{key:"on",value:function(e,t){this[e]&&this[e].add(t)}},{key:"off",value:function(e,t){this[e]&&this[e].del(t)}},{key:"destroy",value:function(){return this.singleTapTimeout&&clearTimeout(this.singleTapTimeout),this.tapTimeout&&clearTimeout(this.tapTimeout),this.longTapTimeout&&clearTimeout(this.longTapTimeout),this.swipeTimeout&&clearTimeout(this.swipeTimeout),this.element.removeEventListener("touchstart",this.start),this.element.removeEventListener("touchmove",this.move),this.element.removeEventListener("touchend",this.end),this.element.removeEventListener("touchcancel",this.cancel),this.rotate.del(),this.touchStart.del(),this.multipointStart.del(),this.multipointEnd.del(),this.pinch.del(),this.swipe.del(),this.tap.del(),this.doubleTap.del(),this.longTap.del(),this.singleTap.del(),this.pressMove.del(),this.twoFingerPressMove.del(),this.touchMove.del(),this.touchEnd.del(),this.touchCancel.del(),this.preV=this.pinchStartLen=this.zoom=this.isDoubleTap=this.delta=this.last=this.now=this.tapTimeout=this.singleTapTimeout=this.longTapTimeout=this.swipeTimeout=this.x1=this.x2=this.y1=this.y2=this.preTapPosition=this.rotate=this.touchStart=this.multipointStart=this.multipointEnd=this.pinch=this.swipe=this.tap=this.doubleTap=this.longTap=this.singleTap=this.pressMove=this.touchMove=this.touchEnd=this.touchCancel=this.twoFingerPressMove=null,window.removeEventListener("scroll",this._cancelAllHandler),null}}]),e}();function W(e){var t=function(){var e,t=document.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in i)if(void 0!==t.style[e])return i[e]}(),i=g(e,"gslide-media")?e:e.querySelector(".gslide-media"),n=e.querySelector(".gslide-description");d(i,"greset"),p(i,"translate3d(0, 0, 0)");c(t,{onElement:i,once:!0,withCallback:function(e,t){u(i,"greset")}});i.style.opacity="",n&&(n.style.opacity="")}function H(e){if(e.events.hasOwnProperty("touch"))return!1;var t,i,n,s=b(),l=s.width,o=s.height,r=!1,a=null,h=null,c=null,f=!1,m=1,y=1,x=!1,S=!1,w=null,T=null,k=null,C=null,E=0,A=0,L=!1,I=!1,O={},P={},M=0,X=0,z=document.getElementById("glightbox-slider"),Y=document.querySelector(".goverlay"),q=new B(z,{touchStart:function(t){if(g(t.targetTouches[0].target,"ginner-container")||v(t.targetTouches[0].target,".gslide-desc"))return r=!1,!1;r=!0,P=t.targetTouches[0],O.pageX=t.targetTouches[0].pageX,O.pageY=t.targetTouches[0].pageY,M=t.targetTouches[0].clientX,X=t.targetTouches[0].clientY,a=e.activeSlide,h=a.querySelector(".gslide-media"),n=a.querySelector(".gslide-inline"),c=null,g(h,"gslide-image")&&(c=h.querySelector("img")),u(Y,"greset"),t.pageX>20&&t.pageX<window.innerWidth-20||t.preventDefault()},touchMove:function(s){if(r&&(P=s.targetTouches[0],!x&&!S)){if(n&&n.offsetHeight>o){var a=O.pageX-P.pageX;if(Math.abs(a)<=13)return!1}f=!0;var d,u=s.targetTouches[0].clientX,g=s.targetTouches[0].clientY,v=M-u,m=X-g;if(Math.abs(v)>Math.abs(m)?(L=!1,I=!0):(I=!1,L=!0),t=P.pageX-O.pageX,E=100*t/l,i=P.pageY-O.pageY,A=100*i/o,L&&c&&(d=1-Math.abs(i)/o,Y.style.opacity=d,e.settings.touchFollowAxis&&(E=0)),I&&(d=1-Math.abs(t)/l,h.style.opacity=d,e.settings.touchFollowAxis&&(A=0)),!c)return p(h,"translate3d(".concat(E,"%, 0, 0)"));p(h,"translate3d(".concat(E,"%, ").concat(A,"%, 0)"))}},touchEnd:function(){if(r){if(f=!1,S||x)return k=w,void(C=T);var t=Math.abs(parseInt(A)),i=Math.abs(parseInt(E));if(!(t>29&&c))return t<29&&i<25?(d(Y,"greset"),Y.style.opacity=1,W(h)):void 0;e.close()}},multipointEnd:function(){setTimeout((function(){x=!1}),50)},multipointStart:function(){x=!0,m=y||1},pinch:function(e){if(!c||f)return!1;x=!0,c.scaleX=c.scaleY=m*e.zoom;var t=m*e.zoom;if(S=!0,t<=1)return S=!1,t=1,C=null,k=null,w=null,T=null,void c.setAttribute("style","");t>4.5&&(t=4.5),c.style.transform="scale3d(".concat(t,", ").concat(t,", 1)"),y=t},pressMove:function(e){if(S&&!x){var t=P.pageX-O.pageX,i=P.pageY-O.pageY;k&&(t+=k),C&&(i+=C),w=t,T=i;var n="translate3d(".concat(t,"px, ").concat(i,"px, 0)");y&&(n+=" scale3d(".concat(y,", ").concat(y,", 1)")),p(c,n)}},swipe:function(t){if(!S)if(x)x=!1;else{if("Left"==t.direction){if(e.index==e.elements.length-1)return W(h);e.nextSlide()}if("Right"==t.direction){if(0==e.index)return W(h);e.prevSlide()}}}});e.events.touch=q}var j=function(){function e(i,n){var s=this,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(t(this,e),this.img=i,this.slide=n,this.onclose=l,this.img.setZoomEvents)return!1;this.active=!1,this.zoomedIn=!1,this.dragging=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.img.addEventListener("mousedown",(function(e){return s.dragStart(e)}),!1),this.img.addEventListener("mouseup",(function(e){return s.dragEnd(e)}),!1),this.img.addEventListener("mousemove",(function(e){return s.drag(e)}),!1),this.img.addEventListener("click",(function(e){return s.slide.classList.contains("dragging-nav")?(s.zoomOut(),!1):s.zoomedIn?void(s.zoomedIn&&!s.dragging&&s.zoomOut()):s.zoomIn()}),!1),this.img.setZoomEvents=!0}return n(e,[{key:"zoomIn",value:function(){var e=this.widowWidth();if(!(this.zoomedIn||e<=768)){var t=this.img;if(t.setAttribute("data-style",t.getAttribute("style")),t.style.maxWidth=t.naturalWidth+"px",t.style.maxHeight=t.naturalHeight+"px",t.naturalWidth>e){var i=e/2-t.naturalWidth/2;this.setTranslate(this.img.parentNode,i,0)}this.slide.classList.add("zoomed"),this.zoomedIn=!0}}},{key:"zoomOut",value:function(){this.img.parentNode.setAttribute("style",""),this.img.setAttribute("style",this.img.getAttribute("data-style")),this.slide.classList.remove("zoomed"),this.zoomedIn=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.onclose&&"function"==typeof this.onclose&&this.onclose()}},{key:"dragStart",value:function(e){e.preventDefault(),this.zoomedIn?("touchstart"===e.type?(this.initialX=e.touches[0].clientX-this.xOffset,this.initialY=e.touches[0].clientY-this.yOffset):(this.initialX=e.clientX-this.xOffset,this.initialY=e.clientY-this.yOffset),e.target===this.img&&(this.active=!0,this.img.classList.add("dragging"))):this.active=!1}},{key:"dragEnd",value:function(e){var t=this;e.preventDefault(),this.initialX=this.currentX,this.initialY=this.currentY,this.active=!1,setTimeout((function(){t.dragging=!1,t.img.isDragging=!1,t.img.classList.remove("dragging")}),100)}},{key:"drag",value:function(e){this.active&&(e.preventDefault(),"touchmove"===e.type?(this.currentX=e.touches[0].clientX-this.initialX,this.currentY=e.touches[0].clientY-this.initialY):(this.currentX=e.clientX-this.initialX,this.currentY=e.clientY-this.initialY),this.xOffset=this.currentX,this.yOffset=this.currentY,this.img.isDragging=!0,this.dragging=!0,this.setTranslate(this.img,this.currentX,this.currentY))}},{key:"onMove",value:function(e){if(this.zoomedIn){var t=e.clientX-this.img.naturalWidth/2,i=e.clientY-this.img.naturalHeight/2;this.setTranslate(this.img,t,i)}}},{key:"setTranslate",value:function(e,t,i){e.style.transform="translate3d("+t+"px, "+i+"px, 0)"}},{key:"widowWidth",value:function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}}]),e}(),V=function(){function e(){var i=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,e);var s=n.dragEl,l=n.toleranceX,o=void 0===l?40:l,r=n.toleranceY,a=void 0===r?65:r,h=n.slide,c=void 0===h?null:h,d=n.instance,u=void 0===d?null:d;this.el=s,this.active=!1,this.dragging=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.direction=null,this.lastDirection=null,this.toleranceX=o,this.toleranceY=a,this.toleranceReached=!1,this.dragContainer=this.el,this.slide=c,this.instance=u,this.el.addEventListener("mousedown",(function(e){return i.dragStart(e)}),!1),this.el.addEventListener("mouseup",(function(e){return i.dragEnd(e)}),!1),this.el.addEventListener("mousemove",(function(e){return i.drag(e)}),!1)}return n(e,[{key:"dragStart",value:function(e){if(this.slide.classList.contains("zoomed"))this.active=!1;else{"touchstart"===e.type?(this.initialX=e.touches[0].clientX-this.xOffset,this.initialY=e.touches[0].clientY-this.yOffset):(this.initialX=e.clientX-this.xOffset,this.initialY=e.clientY-this.yOffset);var t=e.target.nodeName.toLowerCase();e.target.classList.contains("nodrag")||v(e.target,".nodrag")||-1!==["input","select","textarea","button","a"].indexOf(t)?this.active=!1:(e.preventDefault(),(e.target===this.el||"img"!==t&&v(e.target,".gslide-inline"))&&(this.active=!0,this.el.classList.add("dragging"),this.dragContainer=v(e.target,".ginner-container")))}}},{key:"dragEnd",value:function(e){var t=this;e&&e.preventDefault(),this.initialX=0,this.initialY=0,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.active=!1,this.doSlideChange&&(this.instance.preventOutsideClick=!0,"right"==this.doSlideChange&&this.instance.prevSlide(),"left"==this.doSlideChange&&this.instance.nextSlide()),this.doSlideClose&&this.instance.close(),this.toleranceReached||this.setTranslate(this.dragContainer,0,0,!0),setTimeout((function(){t.instance.preventOutsideClick=!1,t.toleranceReached=!1,t.lastDirection=null,t.dragging=!1,t.el.isDragging=!1,t.el.classList.remove("dragging"),t.slide.classList.remove("dragging-nav"),t.dragContainer.style.transform="",t.dragContainer.style.transition=""}),100)}},{key:"drag",value:function(e){if(this.active){e.preventDefault(),this.slide.classList.add("dragging-nav"),"touchmove"===e.type?(this.currentX=e.touches[0].clientX-this.initialX,this.currentY=e.touches[0].clientY-this.initialY):(this.currentX=e.clientX-this.initialX,this.currentY=e.clientY-this.initialY),this.xOffset=this.currentX,this.yOffset=this.currentY,this.el.isDragging=!0,this.dragging=!0,this.doSlideChange=!1,this.doSlideClose=!1;var t=Math.abs(this.currentX),i=Math.abs(this.currentY);if(t>0&&t>=Math.abs(this.currentY)&&(!this.lastDirection||"x"==this.lastDirection)){this.yOffset=0,this.lastDirection="x",this.setTranslate(this.dragContainer,this.currentX,0);var n=this.shouldChange();if(!this.instance.settings.dragAutoSnap&&n&&(this.doSlideChange=n),this.instance.settings.dragAutoSnap&&n)return this.instance.preventOutsideClick=!0,this.toleranceReached=!0,this.active=!1,this.instance.preventOutsideClick=!0,this.dragEnd(null),"right"==n&&this.instance.prevSlide(),void("left"==n&&this.instance.nextSlide())}if(this.toleranceY>0&&i>0&&i>=t&&(!this.lastDirection||"y"==this.lastDirection)){this.xOffset=0,this.lastDirection="y",this.setTranslate(this.dragContainer,0,this.currentY);var s=this.shouldClose();return!this.instance.settings.dragAutoSnap&&s&&(this.doSlideClose=!0),void(this.instance.settings.dragAutoSnap&&s&&this.instance.close())}}}},{key:"shouldChange",value:function(){var e=!1;if(Math.abs(this.currentX)>=this.toleranceX){var t=this.currentX>0?"right":"left";("left"==t&&this.slide!==this.slide.parentNode.lastChild||"right"==t&&this.slide!==this.slide.parentNode.firstChild)&&(e=t)}return e}},{key:"shouldClose",value:function(){var e=!1;return Math.abs(this.currentY)>=this.toleranceY&&(e=!0),e}},{key:"setTranslate",value:function(e,t,i){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.style.transition=n?"all .2s ease":"",e.style.transform="translate3d("+t+"px, "+i+"px, 0)"}}]),e}();function F(e,t,i){var n=e.querySelector(".gslide-media"),s=new Image,l="gSlideTitle_"+t.index,o="gSlideDesc_"+t.index;s.addEventListener("load",(function(){C(i)&&i()}),!1),s.src=t.href,s.alt="",""!==t.title&&s.setAttribute("aria-labelledby",l),""!==t.description&&s.setAttribute("aria-describedby",o),n.insertBefore(s,n.firstChild)}function R(e,t,i){var n=this,s=e.querySelector(".ginner-container"),l="gvideo"+t.index,o=e.querySelector(".gslide-media"),r=this.getAllPlayers();d(s,"gvideo-container"),o.insertBefore(x('<div class="gvideo-wrapper"></div>'),o.firstChild);var a=e.querySelector(".gvideo-wrapper");T(this.settings.plyr.css,"Plyr");var h=t.href,c=location.protocol.replace(":",""),u="",g="",v=!1;"file"==c&&(c="http"),o.style.maxWidth=t.width,T(this.settings.plyr.js,"Plyr",(function(){if(h.match(/vimeo\.com\/([0-9]*)/)){var e=/vimeo.*\/(\d+)/i.exec(h);u="vimeo",g=e[1]}if(h.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||h.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)||h.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)){var s=function(e){var t="";t=void 0!==(e=e.replace(/(>|<)/gi,"").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2]?(t=e[2].split(/[^0-9a-z_\-]/i))[0]:e;return t}(h);u="youtube",g=s}if(null!==h.match(/\.(mp4|ogg|webm|mov)$/)){u="local";var o='<video id="'+l+'" ';o+='style="background:#000; max-width: '.concat(t.width,';" '),o+='preload="metadata" ',o+='x-webkit-airplay="allow" ',o+='webkit-playsinline="" ',o+="controls ",o+='class="gvideo-local">';var c=h.toLowerCase().split(".").pop(),f={mp4:"",ogg:"",webm:""};for(var p in f[c="mov"==c?"mp4":c]=h,f)if(f.hasOwnProperty(p)){var m=f[p];t.hasOwnProperty(p)&&(m=t[p]),""!==m&&(o+='<source src="'.concat(m,'" type="video/').concat(p,'">'))}v=x(o+="</video>")}var y=v||x('<div id="'.concat(l,'" data-plyr-provider="').concat(u,'" data-plyr-embed-id="').concat(g,'"></div>'));d(a,"".concat(u,"-video gvideo")),a.appendChild(y),a.setAttribute("data-id",l),a.setAttribute("data-index",t.index);var b=M(n.settings.plyr,"config")?n.settings.plyr.config:{},S=new Plyr("#"+l,b);S.on("ready",(function(e){var t=e.detail.plyr;r[l]=t,C(i)&&i()})),S.on("enterfullscreen",G),S.on("exitfullscreen",G)}))}function G(e){var t=v(e.target,".gslide-media");"enterfullscreen"==e.type&&d(t,"fullscreen"),"exitfullscreen"==e.type&&u(t,"fullscreen")}function Z(e,t,i){var n,s=this,l=e.querySelector(".gslide-media"),o=!(!M(t,"href")||!t.href)&&t.href.split("#").pop().trim(),r=!(!M(t,"content")||!t.content)&&t.content;if(r&&(E(r)&&(n=x('<div class="ginlined-content">'.concat(r,"</div>"))),A(r))){"none"==r.style.display&&(r.style.display="block");var a=document.createElement("div");a.className="ginlined-content",a.appendChild(r),n=a}if(o){var h=document.getElementById(o);if(!h)return!1;var u=h.cloneNode(!0);u.style.height=t.height,u.style.maxWidth=t.width,d(u,"ginlined-content"),n=u}if(!n)return console.error("Unable to append inline slide content",t),!1;l.style.height=t.height,l.style.width=t.width,l.appendChild(n),this.events["inlineclose"+o]=c("click",{onElement:l.querySelectorAll(".gtrigger-close"),withCallback:function(e){e.preventDefault(),s.close()}}),C(i)&&i()}function $(e,t,i){var n=e.querySelector(".gslide-media"),s=function(e){var t=e.url,i=e.allow,n=e.callback,s=e.appendTo,l=document.createElement("iframe");return l.className="vimeo-video gvideo",l.src=t,l.style.width="100%",l.style.height="100%",i&&l.setAttribute("allow",i),l.onload=function(){d(l,"node-ready"),C(n)&&n()},s&&s.appendChild(l),l}({url:t.href,callback:i});n.parentNode.style.maxWidth=t.width,n.parentNode.style.height=t.height,n.appendChild(s)}var U=function(){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,e),this.defaults={href:"",title:"",type:"",description:"",descPosition:"bottom",effect:"",width:"",height:"",content:!1,zoomable:!0,draggable:!0},O(i)&&(this.defaults=r(this.defaults,i))}return n(e,[{key:"sourceType",value:function(e){var t=e;if(null!==(e=e.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|svg)$/))return"image";if(e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)||e.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/))return"video";if(e.match(/vimeo\.com\/([0-9]*)/))return"video";if(null!==e.match(/\.(mp4|ogg|webm|mov)$/))return"video";if(null!==e.match(/\.(mp3|wav|wma|aac|ogg)$/))return"audio";if(e.indexOf("#")>-1&&""!==t.split("#").pop().trim())return"inline";return e.indexOf("goajax=true")>-1?"ajax":"external"}},{key:"parseConfig",value:function(e,t){var i=this,n=r({descPosition:t.descPosition},this.defaults);if(O(e)&&!A(e)){M(e,"type")||(M(e,"content")&&e.content?e.type="inline":M(e,"href")&&(e.type=this.sourceType(e.href)));var s=r(n,e);return this.setSize(s,t),s}var l="",o=e.getAttribute("data-glightbox"),h=e.nodeName.toLowerCase();if("a"===h&&(l=e.href),"img"===h&&(l=e.src),n.href=l,a(n,(function(s,l){M(t,l)&&"width"!==l&&(n[l]=t[l]);var o=e.dataset[l];P(o)||(n[l]=i.sanitizeValue(o))})),n.content&&(n.type="inline"),!n.type&&l&&(n.type=this.sourceType(l)),P(o)){if(!n.title&&"a"==h){var c=e.title;P(c)||""===c||(n.title=c)}if(!n.title&&"img"==h){var d=e.alt;P(d)||""===d||(n.title=d)}}else{var u=[];a(n,(function(e,t){u.push(";\\s?"+t)})),u=u.join("\\s?:|"),""!==o.trim()&&a(n,(function(e,t){var s=o,l=new RegExp("s?"+t+"s?:s?(.*?)("+u+"s?:|$)"),r=s.match(l);if(r&&r.length&&r[1]){var a=r[1].trim().replace(/;\s*$/,"");n[t]=i.sanitizeValue(a)}}))}if(n.description&&"."==n.description.substring(0,1)&&document.querySelector(n.description))n.description=document.querySelector(n.description).innerHTML;else{var g=e.querySelector(".glightbox-desc");g&&(n.description=g.innerHTML)}return this.setSize(n,t),this.slideConfig=n,n}},{key:"setSize",value:function(e,t){var i="video"==e.type?this.checkSize(t.videosWidth):this.checkSize(t.width),n=this.checkSize(t.height);return e.width=M(e,"width")&&""!==e.width?this.checkSize(e.width):i,e.height=M(e,"height")&&""!==e.height?this.checkSize(e.height):n,e}},{key:"checkSize",value:function(e){return z(e)?"".concat(e,"px"):e}},{key:"sanitizeValue",value:function(e){return"true"!==e&&"false"!==e?e:"true"===e}}]),e}(),J=function(){function e(i,n){t(this,e),this.element=i,this.instance=n}return n(e,[{key:"setContent",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(g(t,"loaded"))return!1;var n=this.instance.settings,s=this.slideConfig,l=k();C(n.beforeSlideLoad)&&n.beforeSlideLoad({index:s.index,slide:t,player:!1});var o=s.type,r=s.descPosition,a=t.querySelector(".gslide-media"),h=t.querySelector(".gslide-title"),c=t.querySelector(".gslide-desc"),u=t.querySelector(".gdesc-inner"),v=i,f="gSlideTitle_"+s.index,p="gSlideDesc_"+s.index;if(C(n.afterSlideLoad)&&(v=function(){C(i)&&i(),n.afterSlideLoad({index:s.index,slide:t,player:e.instance.getSlidePlayerInstance(s.index)})}),""==s.title&&""==s.description?u&&u.parentNode.parentNode.removeChild(u.parentNode):(h&&""!==s.title?(h.id=f,h.innerHTML=s.title):h.parentNode.removeChild(h),c&&""!==s.description?(c.id=p,l&&n.moreLength>0?(s.smallDescription=this.slideShortDesc(s.description,n.moreLength,n.moreText),c.innerHTML=s.smallDescription,this.descriptionEvents(c,s)):c.innerHTML=s.description):c.parentNode.removeChild(c),d(a.parentNode,"desc-".concat(r)),d(u.parentNode,"description-".concat(r))),d(a,"gslide-".concat(o)),d(t,"loaded"),"video"!==o){if("external"!==o)return"inline"===o?(Z.apply(this.instance,[t,s,v]),void(s.draggable&&new V({dragEl:t.querySelector(".gslide-inline"),toleranceX:n.dragToleranceX,toleranceY:n.dragToleranceY,slide:t,instance:this.instance}))):void("image"!==o?C(v)&&v():F(t,s,(function(){var i=t.querySelector("img");s.draggable&&new V({dragEl:i,toleranceX:n.dragToleranceX,toleranceY:n.dragToleranceY,slide:t,instance:e.instance}),s.zoomable&&i.naturalWidth>i.offsetWidth&&(d(i,"zoomable"),new j(i,t,(function(){e.instance.resize()}))),C(v)&&v()})));$.apply(this,[t,s,v])}else R.apply(this.instance,[t,s,v])}},{key:"slideShortDesc",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=i;if((e=e.trim()).length<=t)return e;var s=e.substr(0,t-1);return n?s+'... <a href="#" class="desc-more">'+i+"</a>":s}},{key:"descriptionEvents",value:function(e,t){var i=this,n=e.querySelector(".desc-more");if(!n)return!1;c("click",{onElement:n,withCallback:function(e,n){e.preventDefault();var s=document.body,l=v(n,".gslide-desc");if(!l)return!1;l.innerHTML=t.description,d(s,"gdesc-open");var o=c("click",{onElement:[s,v(l,".gslide-description")],withCallback:function(e,n){"a"!==e.target.nodeName.toLowerCase()&&(u(s,"gdesc-open"),d(s,"gdesc-closed"),l.innerHTML=t.smallDescription,i.descriptionEvents(l,t),setTimeout((function(){u(s,"gdesc-closed")}),400),o.destroy())}})}})}},{key:"create",value:function(){return x(this.instance.settings.slideHTML)}},{key:"getConfig",value:function(){var e=new U(this.instance.settings.slideExtraAttributes);return this.slideConfig=e.parseConfig(this.element,this.instance.settings),this.slideConfig}}]),e}(),K=k(),Q=null!==k()||void 0!==document.createTouch||"ontouchstart"in window||"onmsgesturechange"in window||navigator.msMaxTouchPoints,ee=document.getElementsByTagName("html")[0],te={selector:".glightbox",elements:null,skin:"clean",closeButton:!0,startAt:null,autoplayVideos:!0,autofocusVideos:!0,descPosition:"bottom",width:"900px",height:"506px",videosWidth:"960px",beforeSlideChange:null,afterSlideChange:null,beforeSlideLoad:null,afterSlideLoad:null,slideInserted:null,slideRemoved:null,slideExtraAttributes:null,onOpen:null,onClose:null,loop:!1,zoomable:!0,draggable:!0,dragAutoSnap:!1,dragToleranceX:40,dragToleranceY:65,preload:!0,oneSlidePerOpen:!1,touchNavigation:!0,touchFollowAxis:!0,keyboardNavigation:!0,closeOnOutsideClick:!0,plyr:{css:"https://cdn.plyr.io/3.6.3/plyr.css",js:"https://cdn.plyr.io/3.6.3/plyr.js",config:{ratio:"16:9",youtube:{noCookie:!0,rel:0,showinfo:0,iv_load_policy:3},vimeo:{byline:!1,portrait:!1,title:!1,transparent:!1}}},openEffect:"zoom",closeEffect:"zoom",slideEffect:"slide",moreText:"See more",moreLength:60,cssEfects:{fade:{in:"fadeIn",out:"fadeOut"},zoom:{in:"zoomIn",out:"zoomOut"},slide:{in:"slideInRight",out:"slideOutLeft"},slideBack:{in:"slideInLeft",out:"slideOutRight"},none:{in:"none",out:"none"}},svg:{close:'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',next:'<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',prev:'<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'},slideHTML:'<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',lightboxHTML:'<div id="glightbox-body" class="glightbox-container">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gnext gbtn" tabindex="0" aria-label="Next">{nextSVG}</button>\n    <button class="gprev gbtn" tabindex="1" aria-label="Previous">{prevSVG}</button>\n    <button class="gclose gbtn" tabindex="2" aria-label="Close">{closeSVG}</button>\n</div>\n</div>'},ie=function(){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,e),this.settings=r(te,i),this.effectsClasses=this.getAnimationClasses(),this.videoPlayers={},this.apiEvents=[],this.fullElementsList=!1}return n(e,[{key:"init",value:function(){var e=this,t=this.getSelector();t&&(this.baseEvents=c("click",{onElement:t,withCallback:function(t,i){t.preventDefault(),e.open(i)}})),this.elements=this.getElements()}},{key:"open",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(0==this.elements.length)return!1;this.activeSlide=null,this.prevActiveSlideIndex=null,this.prevActiveSlide=null;var i=z(t)?t:this.settings.startAt;if(A(e)){var n=e.getAttribute("data-gallery");n&&(this.fullElementsList=this.elements,this.elements=this.getGalleryElements(this.elements,n)),P(i)&&(i=this.getElementIndex(e))<0&&(i=0)}z(i)||(i=0),this.build(),f(this.overlay,"none"==this.settings.openEffect?"none":this.settings.cssEfects.fade.in);var s=document.body,l=window.innerWidth-document.documentElement.clientWidth;if(l>0){var o=document.createElement("style");o.type="text/css",o.className="gcss-styles",o.innerText=".gscrollbar-fixer {margin-right: ".concat(l,"px}"),document.head.appendChild(o),d(s,"gscrollbar-fixer")}d(s,"glightbox-open"),d(ee,"glightbox-open"),K&&(d(document.body,"glightbox-mobile"),this.settings.slideEffect="slide"),this.showSlide(i,!0),1==this.elements.length?(y(this.prevButton),y(this.nextButton)):(m(this.prevButton),m(this.nextButton)),this.lightboxOpen=!0,this.trigger("open"),C(this.settings.onOpen)&&this.settings.onOpen(),Q&&this.settings.touchNavigation&&H(this),this.settings.keyboardNavigation&&Y(this)}},{key:"openAt",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.open(null,e)}},{key:"showSlide",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];m(this.loader),this.index=parseInt(t);var n=this.slidesContainer.querySelector(".current");n&&u(n,"current"),this.slideAnimateOut();var s=this.slidesContainer.querySelectorAll(".gslide")[t];if(g(s,"loaded"))this.slideAnimateIn(s,i),y(this.loader);else{m(this.loader);var l=this.elements[t],o={index:this.index,slide:s,slideNode:s,slideConfig:l.slideConfig,slideIndex:this.index,trigger:l.node,player:null};this.trigger("slide_before_load",o),l.instance.setContent(s,(function(){y(e.loader),e.resize(),e.slideAnimateIn(s,i),e.trigger("slide_after_load",o)}))}this.slideDescription=s.querySelector(".gslide-description"),this.slideDescriptionContained=this.slideDescription&&g(this.slideDescription.parentNode,"gslide-media"),this.settings.preload&&(this.preloadSlide(t+1),this.preloadSlide(t-1)),this.updateNavigationClasses(),this.activeSlide=s}},{key:"preloadSlide",value:function(e){var t=this;if(e<0||e>this.elements.length-1)return!1;if(P(this.elements[e]))return!1;var i=this.slidesContainer.querySelectorAll(".gslide")[e];if(g(i,"loaded"))return!1;var n=this.elements[e],s=n.type,l={index:e,slide:i,slideNode:i,slideConfig:n.slideConfig,slideIndex:e,trigger:n.node,player:null};this.trigger("slide_before_load",l),"video"==s||"external"==s?setTimeout((function(){n.instance.setContent(i,(function(){t.trigger("slide_after_load",l)}))}),200):n.instance.setContent(i,(function(){t.trigger("slide_after_load",l)}))}},{key:"prevSlide",value:function(){this.goToSlide(this.index-1)}},{key:"nextSlide",value:function(){this.goToSlide(this.index+1)}},{key:"goToSlide",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.prevActiveSlide=this.activeSlide,this.prevActiveSlideIndex=this.index,!this.loop()&&(e<0||e>this.elements.length-1))return!1;e<0?e=this.elements.length-1:e>=this.elements.length&&(e=0),this.showSlide(e)}},{key:"insertSlide",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,i=new J(e,this),n=i.getConfig(),s=r({},n),l=i.create(),o=this.elements.length-1;t<0&&(t=this.elements.length),s.index=t,s.node=!1,s.instance=i,s.slideConfig=n,this.elements.splice(t,0,s);var a=null,h=null;if(this.slidesContainer){if(t>o)this.slidesContainer.appendChild(l);else{var c=this.slidesContainer.querySelectorAll(".gslide")[t];this.slidesContainer.insertBefore(l,c)}(this.settings.preload&&0==this.index&&0==t||this.index-1==t||this.index+1==t)&&this.preloadSlide(t),0==this.index&&0==t&&(this.index=1),this.updateNavigationClasses(),a=this.slidesContainer.querySelectorAll(".gslide")[t],h=this.getSlidePlayerInstance(t),s.slideNode=a}this.trigger("slide_inserted",{index:t,slide:a,slideNode:a,slideConfig:n,slideIndex:t,trigger:null,player:h}),C(this.settings.slideInserted)&&this.settings.slideInserted({index:t,slide:a,player:h})}},{key:"removeSlide",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;if(e<0||e>this.elements.length-1)return!1;var t=this.slidesContainer&&this.slidesContainer.querySelectorAll(".gslide")[e];t&&(this.getActiveSlideIndex()==e&&(e==this.elements.length-1?this.prevSlide():this.nextSlide()),t.parentNode.removeChild(t)),this.elements.splice(e,1),this.trigger("slide_removed",e),C(this.settings.slideRemoved)&&this.settings.slideRemoved(e)}},{key:"slideAnimateIn",value:function(e,t){var i=this,n=e.querySelector(".gslide-media"),s=e.querySelector(".gslide-description"),l={index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,slideNode:this.prevActiveSlide,slideIndex:this.prevActiveSlide,slideConfig:P(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].slideConfig,trigger:P(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].node,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},o={index:this.index,slide:this.activeSlide,slideNode:this.activeSlide,slideConfig:this.elements[this.index].slideConfig,slideIndex:this.index,trigger:this.elements[this.index].node,player:this.getSlidePlayerInstance(this.index)};if(n.offsetWidth>0&&s&&(y(s),s.style.display=""),u(e,this.effectsClasses),t)f(e,this.settings.cssEfects[this.settings.openEffect].in,(function(){i.settings.autoplayVideos&&i.slidePlayerPlay(e),i.trigger("slide_changed",{prev:l,current:o}),C(i.settings.afterSlideChange)&&i.settings.afterSlideChange.apply(i,[l,o])}));else{var r=this.settings.slideEffect,a="none"!==r?this.settings.cssEfects[r].in:r;this.prevActiveSlideIndex>this.index&&"slide"==this.settings.slideEffect&&(a=this.settings.cssEfects.slideBack.in),f(e,a,(function(){i.settings.autoplayVideos&&i.slidePlayerPlay(e),i.trigger("slide_changed",{prev:l,current:o}),C(i.settings.afterSlideChange)&&i.settings.afterSlideChange.apply(i,[l,o])}))}setTimeout((function(){i.resize(e)}),100),d(e,"current")}},{key:"slideAnimateOut",value:function(){if(!this.prevActiveSlide)return!1;var e=this.prevActiveSlide;u(e,this.effectsClasses),d(e,"prev");var t=this.settings.slideEffect,i="none"!==t?this.settings.cssEfects[t].out:t;this.slidePlayerPause(e),this.trigger("slide_before_change",{prev:{index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,slideNode:this.prevActiveSlide,slideIndex:this.prevActiveSlideIndex,slideConfig:P(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].slideConfig,trigger:P(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].node,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},current:{index:this.index,slide:this.activeSlide,slideNode:this.activeSlide,slideIndex:this.index,slideConfig:this.elements[this.index].slideConfig,trigger:this.elements[this.index].node,player:this.getSlidePlayerInstance(this.index)}}),C(this.settings.beforeSlideChange)&&this.settings.beforeSlideChange.apply(this,[{index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},{index:this.index,slide:this.activeSlide,player:this.getSlidePlayerInstance(this.index)}]),this.prevActiveSlideIndex>this.index&&"slide"==this.settings.slideEffect&&(i=this.settings.cssEfects.slideBack.out),f(e,i,(function(){var t=e.querySelector(".gslide-media"),i=e.querySelector(".gslide-description");t.style.transform="",u(t,"greset"),t.style.opacity="",i&&(i.style.opacity=""),u(e,"prev")}))}},{key:"getAllPlayers",value:function(){return this.videoPlayers}},{key:"getSlidePlayerInstance",value:function(e){var t="gvideo"+e,i=this.getAllPlayers();return!(!M(i,t)||!i[t])&&i[t]}},{key:"stopSlideVideo",value:function(e){if(A(e)){var t=e.querySelector(".gvideo-wrapper");t&&(e=t.getAttribute("data-index"))}console.log("stopSlideVideo is deprecated, use slidePlayerPause");var i=this.getSlidePlayerInstance(e);i&&i.playing&&i.pause()}},{key:"slidePlayerPause",value:function(e){if(A(e)){var t=e.querySelector(".gvideo-wrapper");t&&(e=t.getAttribute("data-index"))}var i=this.getSlidePlayerInstance(e);i&&i.playing&&i.pause()}},{key:"playSlideVideo",value:function(e){if(A(e)){var t=e.querySelector(".gvideo-wrapper");t&&(e=t.getAttribute("data-index"))}console.log("playSlideVideo is deprecated, use slidePlayerPlay");var i=this.getSlidePlayerInstance(e);i&&!i.playing&&i.play()}},{key:"slidePlayerPlay",value:function(e){if(A(e)){var t=e.querySelector(".gvideo-wrapper");t&&(e=t.getAttribute("data-index"))}var i=this.getSlidePlayerInstance(e);i&&!i.playing&&(i.play(),this.settings.autofocusVideos&&i.elements.container.focus())}},{key:"setElements",value:function(e){var t=this;this.settings.elements=!1;var i=[];e&&e.length&&a(e,(function(e,n){var s=new J(e,t),l=s.getConfig(),o=r({},l);o.slideConfig=l,o.instance=s,o.index=n,i.push(o)})),this.elements=i,this.lightboxOpen&&(this.slidesContainer.innerHTML="",this.elements.length&&(a(this.elements,(function(){var e=x(t.settings.slideHTML);t.slidesContainer.appendChild(e)})),this.showSlide(0,!0)))}},{key:"getElementIndex",value:function(e){var t=!1;return a(this.elements,(function(i,n){if(M(i,"node")&&i.node==e)return t=n,!0})),t}},{key:"getElements",value:function(){var e=this,t=[];this.elements=this.elements?this.elements:[],!P(this.settings.elements)&&L(this.settings.elements)&&this.settings.elements.length&&a(this.settings.elements,(function(i,n){var s=new J(i,e),l=s.getConfig(),o=r({},l);o.node=!1,o.index=n,o.instance=s,o.slideConfig=l,t.push(o)}));var i=!1;return this.getSelector()&&(i=document.querySelectorAll(this.getSelector())),i?(a(i,(function(i,n){var s=new J(i,e),l=s.getConfig(),o=r({},l);o.node=i,o.index=n,o.instance=s,o.slideConfig=l,o.gallery=i.getAttribute("data-gallery"),t.push(o)})),t):t}},{key:"getGalleryElements",value:function(e,t){return e.filter((function(e){return e.gallery==t}))}},{key:"getSelector",value:function(){return!this.settings.elements&&(this.settings.selector&&"data-"==this.settings.selector.substring(0,5)?"*[".concat(this.settings.selector,"]"):this.settings.selector)}},{key:"getActiveSlide",value:function(){return this.slidesContainer.querySelectorAll(".gslide")[this.index]}},{key:"getActiveSlideIndex",value:function(){return this.index}},{key:"getAnimationClasses",value:function(){var e=[];for(var t in this.settings.cssEfects)if(this.settings.cssEfects.hasOwnProperty(t)){var i=this.settings.cssEfects[t];e.push("g".concat(i.in)),e.push("g".concat(i.out))}return e.join(" ")}},{key:"build",value:function(){var e=this;if(this.built)return!1;var t=M(this.settings.svg,"next")?this.settings.svg.next:"",i=M(this.settings.svg,"prev")?this.settings.svg.prev:"",n=M(this.settings.svg,"close")?this.settings.svg.close:"",s=this.settings.lightboxHTML;s=x(s=(s=(s=s.replace(/{nextSVG}/g,t)).replace(/{prevSVG}/g,i)).replace(/{closeSVG}/g,n)),document.body.appendChild(s);var l=document.getElementById("glightbox-body");this.modal=l;var o=l.querySelector(".gclose");this.prevButton=l.querySelector(".gprev"),this.nextButton=l.querySelector(".gnext"),this.overlay=l.querySelector(".goverlay"),this.loader=l.querySelector(".gloader"),this.slidesContainer=document.getElementById("glightbox-slider"),this.events={},d(this.modal,"glightbox-"+this.settings.skin),this.settings.closeButton&&o&&(this.events.close=c("click",{onElement:o,withCallback:function(t,i){t.preventDefault(),e.close()}})),o&&!this.settings.closeButton&&o.parentNode.removeChild(o),this.nextButton&&(this.events.next=c("click",{onElement:this.nextButton,withCallback:function(t,i){t.preventDefault(),e.nextSlide()}})),this.prevButton&&(this.events.prev=c("click",{onElement:this.prevButton,withCallback:function(t,i){t.preventDefault(),e.prevSlide()}})),this.settings.closeOnOutsideClick&&(this.events.outClose=c("click",{onElement:l,withCallback:function(t,i){e.preventOutsideClick||g(document.body,"glightbox-mobile")||v(t.target,".ginner-container")||v(t.target,".gbtn")||g(t.target,"gnext")||g(t.target,"gprev")||e.close()}})),a(this.elements,(function(t,i){e.slidesContainer.appendChild(t.instance.create()),t.slideNode=e.slidesContainer.querySelectorAll(".gslide")[i]})),Q&&d(document.body,"glightbox-touch"),this.events.resize=c("resize",{onElement:window,withCallback:function(){e.resize()}}),this.built=!0}},{key:"resize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if((e=e||this.activeSlide)&&!g(e,"zoomed")){var t=b(),i=e.querySelector(".gvideo-wrapper"),n=e.querySelector(".gslide-image"),s=this.slideDescription,l=t.width,o=t.height;if(l<=768?d(document.body,"glightbox-mobile"):u(document.body,"glightbox-mobile"),i||n){var r=!1;if(s&&(g(s,"description-bottom")||g(s,"description-top"))&&!g(s,"gabsolute")&&(r=!0),n)if(l<=768){var a=n.querySelector("img");a.setAttribute("style","")}else if(r){var h=s.offsetHeight,c=n.querySelector("img");c.setAttribute("style","max-height: calc(100vh - ".concat(h,"px)")),s.setAttribute("style","max-width: ".concat(c.offsetWidth,"px;"))}if(i){var v=M(this.settings.plyr.config,"ratio")?this.settings.plyr.config.ratio:"16:9",f=v.split(":"),p=900,m=p/(parseInt(f[0])/parseInt(f[1]));if(m=Math.floor(m),r&&(o-=s.offsetHeight),o<m&&l>p){var y=i.offsetWidth,x=i.offsetHeight,S=o/x,w={width:y*S,height:x*S};i.parentNode.setAttribute("style","max-width: ".concat(w.width,"px")),r&&s.setAttribute("style","max-width: ".concat(w.width,"px;"))}else i.parentNode.style.maxWidth="".concat(p,"px"),r&&s.setAttribute("style","max-width: ".concat(p,"px;"))}}}}},{key:"reload",value:function(){this.init()}},{key:"updateNavigationClasses",value:function(){var e=this.loop();u(this.nextButton,"disabled"),u(this.prevButton,"disabled"),0==this.index&&this.elements.length-1==0?(d(this.prevButton,"disabled"),d(this.nextButton,"disabled")):0!==this.index||e?this.index!==this.elements.length-1||e||d(this.nextButton,"disabled"):d(this.prevButton,"disabled")}},{key:"loop",value:function(){var e=M(this.settings,"loopAtEnd")?this.settings.loopAtEnd:null;return e=M(this.settings,"loop")?this.settings.loop:e,e}},{key:"close",value:function(){var e=this;if(!this.lightboxOpen){if(this.events){for(var t in this.events)this.events.hasOwnProperty(t)&&this.events[t].destroy();this.events=null}return!1}if(this.closing)return!1;this.closing=!0,this.slidePlayerPause(this.activeSlide),this.fullElementsList&&(this.elements=this.fullElementsList),d(this.modal,"glightbox-closing"),f(this.overlay,"none"==this.settings.openEffect?"none":this.settings.cssEfects.fade.out),f(this.activeSlide,this.settings.cssEfects[this.settings.closeEffect].out,(function(){if(e.activeSlide=null,e.prevActiveSlideIndex=null,e.prevActiveSlide=null,e.built=!1,e.events){for(var t in e.events)e.events.hasOwnProperty(t)&&e.events[t].destroy();e.events=null}var i=document.body;u(ee,"glightbox-open"),u(i,"glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"),e.modal.parentNode.removeChild(e.modal),e.trigger("close"),C(e.settings.onClose)&&e.settings.onClose();var n=document.querySelector(".gcss-styles");n&&n.parentNode.removeChild(n),e.lightboxOpen=!1,e.closing=null}))}},{key:"destroy",value:function(){this.close(),this.clearAllEvents(),this.baseEvents&&this.baseEvents.destroy()}},{key:"on",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||!C(t))throw new TypeError("Event name and callback must be defined");this.apiEvents.push({evt:e,once:i,callback:t})}},{key:"once",value:function(e,t){this.on(e,t,!0)}},{key:"trigger",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=[];a(this.apiEvents,(function(t,s){var l=t.evt,o=t.once,r=t.callback;l==e&&(r(i),o&&n.push(s))})),n.length&&a(n,(function(e){return t.apiEvents.splice(e,1)}))}},{key:"clearAllEvents",value:function(){this.apiEvents.splice(0,this.apiEvents.length)}},{key:"version",value:function(){return"3.0.5"}}]),e}();return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=new ie(e);return t.init(),t}}));

(function(){

	'use strict'


	var siteMenuClone = function() {
		var jsCloneNavs = document.querySelectorAll('.js-clone-nav');
		var siteMobileMenuBody = document.querySelector('.site-mobile-menu-body');
		


		jsCloneNavs.forEach(nav => {
			var navCloned = nav.cloneNode(true);
			navCloned.setAttribute('class', 'site-nav-wrap');
			siteMobileMenuBody.appendChild(navCloned);
		});

		setTimeout(function(){

			var hasChildrens = document.querySelector('.site-mobile-menu').querySelectorAll(' .has-children');

			var counter = 0;
			hasChildrens.forEach( hasChild => {
				
				var refEl = hasChild.querySelector('a');

				var newElSpan = document.createElement('span');
				newElSpan.setAttribute('class', 'arrow-collapse collapsed');

				// prepend equivalent to jquery
				hasChild.insertBefore(newElSpan, refEl);

				var arrowCollapse = hasChild.querySelector('.arrow-collapse');
				arrowCollapse.setAttribute('data-toggle', 'collapse');
				arrowCollapse.setAttribute('data-target', '#collapseItem' + counter);

				var dropdown = hasChild.querySelector('.dropdown');
				dropdown.setAttribute('class', 'collapse');
				dropdown.setAttribute('id', 'collapseItem' + counter);

				counter++;
			});

		}, 1000);


		// Click js-menu-toggle

		var menuToggle = document.querySelectorAll(".js-menu-toggle");
		var mTog;
		menuToggle.forEach(mtoggle => {
			mTog = mtoggle;
			mtoggle.addEventListener("click", (e) => {
				if ( document.body.classList.contains('offcanvas-menu') ) {
					document.body.classList.remove('offcanvas-menu');
					mtoggle.classList.remove('active');
					mTog.classList.remove('active');
				} else {
					document.body.classList.add('offcanvas-menu');
					mtoggle.classList.add('active');
					mTog.classList.add('active');
				}
			});
		})



		var specifiedElement = document.querySelector(".site-mobile-menu");
		var mt, mtoggleTemp;
		document.addEventListener('click', function(event) {
			var isClickInside = specifiedElement.contains(event.target);
			menuToggle.forEach(mtoggle => {
				mtoggleTemp = mtoggle
				mt = mtoggle.contains(event.target);
			})

			if (!isClickInside && !mt) {
				if ( document.body.classList.contains('offcanvas-menu') ) {
					document.body.classList.remove('offcanvas-menu');
					mtoggleTemp.classList.remove('active');
				}
			}

		});

	}; 
	siteMenuClone();


})()

(function(q,g){"function"===typeof define&&define.amd?define([],g):"object"===typeof module&&module.exports?module.exports=g():q.Rellax=g()})("undefined"!==typeof window?window:global,function(){var q=function(g,u){function C(){if(3===a.options.breakpoints.length&&Array.isArray(a.options.breakpoints)){var f=!0,c=!0,b;a.options.breakpoints.forEach(function(a){"number"!==typeof a&&(c=!1);null!==b&&a<b&&(f=!1);b=a});if(f&&c)return}a.options.breakpoints=[576,768,1201];console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")}
	var a=Object.create(q.prototype),l=0,v=0,m=0,n=0,d=[],w=!0,A=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(a){return setTimeout(a,1E3/60)},p=null,x=!1;try{var k=Object.defineProperty({},"passive",{get:function(){x=!0}});window.addEventListener("testPassive",null,k);window.removeEventListener("testPassive",null,k)}catch(f){}var D=window.cancelAnimationFrame||window.mozCancelAnimationFrame||
	clearTimeout,E=window.transformProp||function(){var a=document.createElement("div");if(null===a.style.transform){var c=["Webkit","Moz","ms"],b;for(b in c)if(void 0!==a.style[c[b]+"Transform"])return c[b]+"Transform"}return"transform"}();a.options={speed:-2,verticalSpeed:null,horizontalSpeed:null,breakpoints:[576,768,1201],center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,verticalScrollAxis:"y",horizontalScrollAxis:"x",callback:function(){}};u&&Object.keys(u).forEach(function(d){a.options[d]=
		u[d]});u&&u.breakpoints&&C();g||(g=".rellax");k="string"===typeof g?document.querySelectorAll(g):[g];if(0<k.length){a.elems=k;if(a.options.wrapper&&!a.options.wrapper.nodeType)if(k=document.querySelector(a.options.wrapper))a.options.wrapper=k;else{console.warn("Rellax: The wrapper you're trying to use doesn't exist.");return}var F,B=function(){for(var f=0;f<d.length;f++)a.elems[f].style.cssText=d[f].style;d=[];v=window.innerHeight;n=window.innerWidth;f=a.options.breakpoints;F=n<f[0]?"xs":n>=f[0]&&n<
	f[1]?"sm":n>=f[1]&&n<f[2]?"md":"lg";H();for(f=0;f<a.elems.length;f++){var c=void 0,b=a.elems[f],e=b.getAttribute("data-rellax-percentage"),y=b.getAttribute("data-rellax-speed"),t=b.getAttribute("data-rellax-xs-speed"),g=b.getAttribute("data-rellax-mobile-speed"),h=b.getAttribute("data-rellax-tablet-speed"),k=b.getAttribute("data-rellax-desktop-speed"),l=b.getAttribute("data-rellax-vertical-speed"),m=b.getAttribute("data-rellax-horizontal-speed"),p=b.getAttribute("data-rellax-vertical-scroll-axis"),
	q=b.getAttribute("data-rellax-horizontal-scroll-axis"),u=b.getAttribute("data-rellax-zindex")||0,x=b.getAttribute("data-rellax-min"),A=b.getAttribute("data-rellax-max"),C=b.getAttribute("data-rellax-min-x"),D=b.getAttribute("data-rellax-max-x"),E=b.getAttribute("data-rellax-min-y"),L=b.getAttribute("data-rellax-max-y"),r=!0;t||g||h||k?c={xs:t,sm:g,md:h,lg:k}:r=!1;t=a.options.wrapper?a.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;a.options.relativeToWrapper&&
	(t=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)-a.options.wrapper.offsetTop);var z=a.options.vertical?e||a.options.center?t:0:0,I=a.options.horizontal?e||a.options.center?a.options.wrapper?a.options.wrapper.scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0:0;t=z+b.getBoundingClientRect().top;g=b.clientHeight||b.offsetHeight||b.scrollHeight;h=I+b.getBoundingClientRect().left;k=b.clientWidth||b.offsetWidth||b.scrollWidth;
	z=e?e:(z-t+v)/(g+v);e=e?e:(I-h+n)/(k+n);a.options.center&&(z=e=.5);c=r&&null!==c[F]?Number(c[F]):y?y:a.options.speed;l=l?l:a.options.verticalSpeed;m=m?m:a.options.horizontalSpeed;p=p?p:a.options.verticalScrollAxis;q=q?q:a.options.horizontalScrollAxis;y=J(e,z,c,l,m);b=b.style.cssText;r="";if(e=/transform\s*:/i.exec(b))r=b.slice(e.index),r=(e=r.indexOf(";"))?" "+r.slice(11,e).replace(/\s/g,""):" "+r.slice(11).replace(/\s/g,"");d.push({baseX:y.x,baseY:y.y,top:t,left:h,height:g,width:k,speed:c,verticalSpeed:l,
		horizontalSpeed:m,verticalScrollAxis:p,horizontalScrollAxis:q,style:b,transform:r,zindex:u,min:x,max:A,minX:C,maxX:D,minY:E,maxY:L})}K();w&&(window.addEventListener("resize",B),w=!1,G())},H=function(){var d=l,c=m;l=a.options.wrapper?a.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;m=a.options.wrapper?a.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset;
		a.options.relativeToWrapper&&(l=((document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset)-a.options.wrapper.offsetTop);return d!=l&&a.options.vertical||c!=m&&a.options.horizontal?!0:!1},J=function(d,c,b,e,g){var f={};d=100*(g?g:b)*(1-d);c=100*(e?e:b)*(1-c);f.x=a.options.round?Math.round(d):Math.round(100*d)/100;f.y=a.options.round?Math.round(c):Math.round(100*c)/100;return f},h=function(){window.removeEventListener("resize",h);window.removeEventListener("orientationchange",
			h);(a.options.wrapper?a.options.wrapper:window).removeEventListener("scroll",h);(a.options.wrapper?a.options.wrapper:document).removeEventListener("touchmove",h);p=A(G)},G=function(){H()&&!1===w?(K(),p=A(G)):(p=null,window.addEventListener("resize",h),window.addEventListener("orientationchange",h),(a.options.wrapper?a.options.wrapper:window).addEventListener("scroll",h,x?{passive:!0}:!1),(a.options.wrapper?a.options.wrapper:document).addEventListener("touchmove",h,x?{passive:!0}:!1))},K=function(){for(var f,
				c=0;c<a.elems.length;c++){var b=d[c].verticalScrollAxis.toLowerCase(),e=d[c].horizontalScrollAxis.toLowerCase();f=-1!=b.indexOf("x")?l:0;b=-1!=b.indexOf("y")?l:0;var g=-1!=e.indexOf("x")?m:0;e=-1!=e.indexOf("y")?m:0;f=J((f+g-d[c].left+n)/(d[c].width+n),(b+e-d[c].top+v)/(d[c].height+v),d[c].speed,d[c].verticalSpeed,d[c].horizontalSpeed);e=f.y-d[c].baseY;b=f.x-d[c].baseX;null!==d[c].min&&(a.options.vertical&&!a.options.horizontal&&(e=e<=d[c].min?d[c].min:e),a.options.horizontal&&!a.options.vertical&&
				(b=b<=d[c].min?d[c].min:b));null!=d[c].minY&&(e=e<=d[c].minY?d[c].minY:e);null!=d[c].minX&&(b=b<=d[c].minX?d[c].minX:b);null!==d[c].max&&(a.options.vertical&&!a.options.horizontal&&(e=e>=d[c].max?d[c].max:e),a.options.horizontal&&!a.options.vertical&&(b=b>=d[c].max?d[c].max:b));null!=d[c].maxY&&(e=e>=d[c].maxY?d[c].maxY:e);null!=d[c].maxX&&(b=b>=d[c].maxX?d[c].maxX:b);a.elems[c].style[E]="translate3d("+(a.options.horizontal?b:"0")+"px,"+(a.options.vertical?e:"0")+"px,"+d[c].zindex+"px) "+d[c].transform}a.options.callback(f)};
				a.destroy=function(){for(var f=0;f<a.elems.length;f++)a.elems[f].style.cssText=d[f].style;w||(window.removeEventListener("resize",B),w=!0);D(p);p=null};B();a.refresh=B;return a}console.warn("Rellax: The elements you're trying to select don't exist.")};return q});

                var tns = (function (){
                    var win = window;
                  
                    var raf = win.requestAnimationFrame
                    || win.webkitRequestAnimationFrame
                    || win.mozRequestAnimationFrame
                    || win.msRequestAnimationFrame
                    || function(cb) { return setTimeout(cb, 16); };
                  
                    var win$1 = window;
                  
                    var caf = win$1.cancelAnimationFrame
                    || win$1.mozCancelAnimationFrame
                    || function(id){ clearTimeout(id); };
                  
                    function extend() {
                      var obj, name, copy,
                      target = arguments[0] || {},
                      i = 1,
                      length = arguments.length;
                  
                      for (; i < length; i++) {
                        if ((obj = arguments[i]) !== null) {
                          for (name in obj) {
                            copy = obj[name];
                  
                            if (target === copy) {
                              continue;
                            } else if (copy !== undefined) {
                              target[name] = copy;
                            }
                          }
                        }
                      }
                      return target;
                    }
                  
                    function checkStorageValue (value) {
                      return ['true', 'false'].indexOf(value) >= 0 ? JSON.parse(value) : value;
                    }
                  
                    function setLocalStorage(storage, key, value, access) {
                      if (access) {
                        try { storage.setItem(key, value); } catch (e) {}
                      }
                      return value;
                    }
                  
                    function getSlideId() {
                      var id = window.tnsId;
                      window.tnsId = !id ? 1 : id + 1;
                      
                      return 'tns' + window.tnsId;
                    }
                  
                    function getBody () {
                      var doc = document,
                      body = doc.body;
                  
                      if (!body) {
                        body = doc.createElement('body');
                        body.fake = true;
                      }
                  
                      return body;
                    }
                  
                    var docElement = document.documentElement;
                  
                    function setFakeBody (body) {
                      var docOverflow = '';
                      if (body.fake) {
                        docOverflow = docElement.style.overflow;
                      //avoid crashing IE8, if background image is used
                      body.style.background = '';
                      //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
                      body.style.overflow = docElement.style.overflow = 'hidden';
                      docElement.appendChild(body);
                    }
                  
                    return docOverflow;
                  }
                  
                  function resetFakeBody (body, docOverflow) {
                    if (body.fake) {
                      body.remove();
                      docElement.style.overflow = docOverflow;
                      // Trigger layout so kinetic scrolling isn't disabled in iOS6+
                      // eslint-disable-next-line
                      docElement.offsetHeight;
                    }
                  }
                  
                  // get css-calc 
                  
                  function calc() {
                    var doc = document, 
                    body = getBody(),
                    docOverflow = setFakeBody(body),
                    div = doc.createElement('div'), 
                    result = false;
                  
                    body.appendChild(div);
                    try {
                      var str = '(10px * 10)',
                      vals = ['calc' + str, '-moz-calc' + str, '-webkit-calc' + str],
                      val;
                      for (var i = 0; i < 3; i++) {
                        val = vals[i];
                        div.style.width = val;
                        if (div.offsetWidth === 100) { 
                          result = val.replace(str, ''); 
                          break;
                        }
                      }
                    } catch (e) {}
                    
                    body.fake ? resetFakeBody(body, docOverflow) : div.remove();
                  
                    return result;
                  }
                  
                  // get subpixel support value
                  
                  function percentageLayout() {
                    // check subpixel layout supporting
                    var doc = document,
                    body = getBody(),
                    docOverflow = setFakeBody(body),
                    wrapper = doc.createElement('div'),
                    outer = doc.createElement('div'),
                    str = '',
                    count = 70,
                    perPage = 3,
                    supported = false;
                  
                    wrapper.className = "tns-t-subp2";
                    outer.className = "tns-t-ct";
                  
                    for (var i = 0; i < count; i++) {
                      str += '<div></div>';
                    }
                  
                    outer.innerHTML = str;
                    wrapper.appendChild(outer);
                    body.appendChild(wrapper);
                  
                    supported = Math.abs(wrapper.getBoundingClientRect().left - outer.children[count - perPage].getBoundingClientRect().left) < 2;
                  
                    body.fake ? resetFakeBody(body, docOverflow) : wrapper.remove();
                  
                    return supported;
                  }
                  
                  function mediaquerySupport () {
                    if (window.matchMedia || window.msMatchMedia) {
                      return true;
                    }
                    
                    var doc = document,
                    body = getBody(),
                    docOverflow = setFakeBody(body),
                    div = doc.createElement('div'),
                    style = doc.createElement('style'),
                    rule = '@media all and (min-width:1px){.tns-mq-test{position:absolute}}',
                    position;
                  
                    style.type = 'text/css';
                    div.className = 'tns-mq-test';
                  
                    body.appendChild(style);
                    body.appendChild(div);
                  
                    if (style.styleSheet) {
                      style.styleSheet.cssText = rule;
                    } else {
                      style.appendChild(doc.createTextNode(rule));
                    }
                  
                    position = window.getComputedStyle ? window.getComputedStyle(div).position : div.currentStyle['position'];
                  
                    body.fake ? resetFakeBody(body, docOverflow) : div.remove();
                  
                    return position === "absolute";
                  }
                  
                  // create and append style sheet
                  function createStyleSheet (media, nonce) {
                    // Create the <style> tag
                    var style = document.createElement("style");
                    // style.setAttribute("type", "text/css");
                  
                    // Add a media (and/or media query) here if you'd like!
                    // style.setAttribute("media", "screen")
                    // style.setAttribute("media", "only screen and (max-width : 1024px)")
                    if (media) { style.setAttribute("media", media); }
                  
                    // Add nonce attribute for Content Security Policy
                    if (nonce) { style.setAttribute("nonce", nonce); }
                  
                    // WebKit hack :(
                    // style.appendChild(document.createTextNode(""));
                  
                    // Add the <style> element to the page
                    document.querySelector('head').appendChild(style);
                  
                    return style.sheet ? style.sheet : style.styleSheet;
                  }
                  
                  // cross browsers addRule method
                  function addCSSRule(sheet, selector, rules, index) {
                    // return raf(function() {
                      'insertRule' in sheet ?
                      sheet.insertRule(selector + '{' + rules + '}', index) :
                      sheet.addRule(selector, rules, index);
                    // });
                  }
                  
                  // cross browsers addRule method
                  function removeCSSRule(sheet, index) {
                    // return raf(function() {
                      'deleteRule' in sheet ?
                      sheet.deleteRule(index) :
                      sheet.removeRule(index);
                    // });
                  }
                  
                  function getCssRulesLength(sheet) {
                    var rule = ('insertRule' in sheet) ? sheet.cssRules : sheet.rules;
                    return rule.length;
                  }
                  
                  function toDegree (y, x) {
                    return Math.atan2(y, x) * (180 / Math.PI);
                  }
                  
                  function getTouchDirection(angle, range) {
                    var direction = false,
                    gap = Math.abs(90 - Math.abs(angle));
                    
                    if (gap >= 90 - range) {
                      direction = 'horizontal';
                    } else if (gap <= range) {
                      direction = 'vertical';
                    }
                  
                    return direction;
                  }
                  
                  // https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
                  function forEach (arr, callback, scope) {
                    for (var i = 0, l = arr.length; i < l; i++) {
                      callback.call(scope, arr[i], i);
                    }
                  }
                  
                  var classListSupport = 'classList' in document.createElement('_');
                  
                  var hasClass = classListSupport ?
                  function (el, str) { return el.classList.contains(str); } :
                  function (el, str) { return el.className.indexOf(str) >= 0; };
                  
                  var addClass = classListSupport ?
                  function (el, str) {
                    if (!hasClass(el,  str)) { el.classList.add(str); }
                  } :
                  function (el, str) {
                    if (!hasClass(el,  str)) { el.className += ' ' + str; }
                  };
                  
                  var removeClass = classListSupport ?
                  function (el, str) {
                    if (hasClass(el,  str)) { el.classList.remove(str); }
                  } :
                  function (el, str) {
                    if (hasClass(el, str)) { el.className = el.className.replace(str, ''); }
                  };
                  
                  function hasAttr(el, attr) {
                    return el.hasAttribute(attr);
                  }
                  
                  function getAttr(el, attr) {
                    return el.getAttribute(attr);
                  }
                  
                  function isNodeList(el) {
                    // Only NodeList has the "item()" function
                    return typeof el.item !== "undefined"; 
                  }
                  
                  function setAttrs(els, attrs) {
                    els = (isNodeList(els) || els instanceof Array) ? els : [els];
                    if (Object.prototype.toString.call(attrs) !== '[object Object]') { return; }
                  
                    for (var i = els.length; i--;) {
                      for(var key in attrs) {
                        els[i].setAttribute(key, attrs[key]);
                      }
                    }
                  }
                  
                  function removeAttrs(els, attrs) {
                    els = (isNodeList(els) || els instanceof Array) ? els : [els];
                    attrs = (attrs instanceof Array) ? attrs : [attrs];
                  
                    var attrLength = attrs.length;
                    for (var i = els.length; i--;) {
                      for (var j = attrLength; j--;) {
                        els[i].removeAttribute(attrs[j]);
                      }
                    }
                  }
                  
                  function arrayFromNodeList (nl) {
                    var arr = [];
                    for (var i = 0, l = nl.length; i < l; i++) {
                      arr.push(nl[i]);
                    }
                    return arr;
                  }
                  
                  function hideElement(el, forceHide) {
                    if (el.style.display !== 'none') { el.style.display = 'none'; }
                  }
                  
                  function showElement(el, forceHide) {
                    if (el.style.display === 'none') { el.style.display = ''; }
                  }
                  
                  function isVisible(el) {
                    return window.getComputedStyle(el).display !== 'none';
                  }
                  
                  function whichProperty(props){
                    if (typeof props === 'string') {
                      var arr = [props],
                      Props = props.charAt(0).toUpperCase() + props.substr(1),
                      prefixes = ['Webkit', 'Moz', 'ms', 'O'];
                      
                      prefixes.forEach(function(prefix) {
                        if (prefix !== 'ms' || props === 'transform') {
                          arr.push(prefix + Props);
                        }
                      });
                  
                      props = arr;
                    }
                  
                    var el = document.createElement('fakeelement'),
                    len = props.length;
                    for(var i = 0; i < props.length; i++){
                      var prop = props[i];
                      if( el.style[prop] !== undefined ){ return prop; }
                    }
                  
                    return false; // explicit for ie9-
                  }
                  
                  function has3DTransforms(tf){
                    if (!tf) { return false; }
                    if (!window.getComputedStyle) { return false; }
                    
                    var doc = document,
                    body = getBody(),
                    docOverflow = setFakeBody(body),
                    el = doc.createElement('p'),
                    has3d,
                    cssTF = tf.length > 9 ? '-' + tf.slice(0, -9).toLowerCase() + '-' : '';
                  
                    cssTF += 'transform';
                  
                    // Add it to the body to get the computed style
                    body.insertBefore(el, null);
                  
                    el.style[tf] = 'translate3d(1px,1px,1px)';
                    has3d = window.getComputedStyle(el).getPropertyValue(cssTF);
                  
                    body.fake ? resetFakeBody(body, docOverflow) : el.remove();
                  
                    return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
                  }
                  
                  // get transitionend, animationend based on transitionDuration
                  // @propin: string
                  // @propOut: string, first-letter uppercase
                  // Usage: getEndProperty('WebkitTransitionDuration', 'Transition') => webkitTransitionEnd
                  function getEndProperty(propIn, propOut) {
                    var endProp = false;
                    if (/^Webkit/.test(propIn)) {
                      endProp = 'webkit' + propOut + 'End';
                    } else if (/^O/.test(propIn)) {
                      endProp = 'o' + propOut + 'End';
                    } else if (propIn) {
                      endProp = propOut.toLowerCase() + 'end';
                    }
                    return endProp;
                  }
                  
                  // Test via a getter in the options object to see if the passive property is accessed
                  var supportsPassive = false;
                  try {
                    var opts = Object.defineProperty({}, 'passive', {
                      get: function() {
                        supportsPassive = true;
                      }
                    });
                    window.addEventListener("test", null, opts);
                  } catch (e) {}
                  var passiveOption = supportsPassive ? { passive: true } : false;
                  
                  function addEvents(el, obj, preventScrolling) {
                    for (var prop in obj) {
                      var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 && !preventScrolling ? passiveOption : false;
                      el.addEventListener(prop, obj[prop], option);
                    }
                  }
                  
                  function removeEvents(el, obj) {
                    for (var prop in obj) {
                      var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 ? passiveOption : false;
                      el.removeEventListener(prop, obj[prop], option);
                    }
                  }
                  
                  function Events() {
                    return {
                      topics: {},
                      on: function (eventName, fn) {
                        this.topics[eventName] = this.topics[eventName] || [];
                        this.topics[eventName].push(fn);
                      },
                      off: function(eventName, fn) {
                        if (this.topics[eventName]) {
                          for (var i = 0; i < this.topics[eventName].length; i++) {
                            if (this.topics[eventName][i] === fn) {
                              this.topics[eventName].splice(i, 1);
                              break;
                            }
                          }
                        }
                      },
                      emit: function (eventName, data) {
                        data.type = eventName;
                        if (this.topics[eventName]) {
                          this.topics[eventName].forEach(function(fn) {
                            fn(data, eventName);
                          });
                        }
                      }
                    };
                  }
                  
                  function jsTransform(element, attr, prefix, postfix, to, duration, callback) {
                    var tick = Math.min(duration, 10),
                    unit = (to.indexOf('%') >= 0) ? '%' : 'px',
                    to = to.replace(unit, ''),
                    from = Number(element.style[attr].replace(prefix, '').replace(postfix, '').replace(unit, '')),
                    positionTick = (to - from) / duration * tick,
                    running;
                  
                    setTimeout(moveElement, tick);
                    function moveElement() {
                      duration -= tick;
                      from += positionTick;
                      element.style[attr] = prefix + from + unit + postfix;
                      if (duration > 0) { 
                        setTimeout(moveElement, tick); 
                      } else {
                        callback();
                      }
                    }
                  }
                  
                  // Object.keys
                  if (!Object.keys) {
                    Object.keys = function(object) {
                      var keys = [];
                      for (var name in object) {
                        if (Object.prototype.hasOwnProperty.call(object, name)) {
                          keys.push(name);
                        }
                      }
                      return keys;
                    };
                  }
                  
                  // ChildNode.remove
                  if(!("remove" in Element.prototype)){
                    Element.prototype.remove = function(){
                      if(this.parentNode) {
                        this.parentNode.removeChild(this);
                      }
                    };
                  }
                  
                  var tns = function(options) {
                    options = extend({
                      container: '.slider',
                      mode: 'carousel',
                      axis: 'horizontal',
                      items: 1,
                      gutter: 0,
                      edgePadding: 0,
                      fixedWidth: false,
                      autoWidth: false,
                      viewportMax: false,
                      slideBy: 1,
                      center: false,
                      controls: true,
                      controlsPosition: 'top',
                      controlsText: ['prev', 'next'],
                      controlsContainer: false,
                      prevButton: false,
                      nextButton: false,
                      nav: true,
                      navPosition: 'top',
                      navContainer: false,
                      navAsThumbnails: false,
                      arrowKeys: false,
                      speed: 300,
                      autoplay: false,
                      autoplayPosition: 'top',
                      autoplayTimeout: 5000,
                      autoplayDirection: 'forward',
                      autoplayText: ['start', 'stop'],
                      autoplayHoverPause: false,
                      autoplayButton: false,
                      autoplayButtonOutput: true,
                      autoplayResetOnVisibility: true,
                      animateIn: 'tns-fadeIn',
                      animateOut: 'tns-fadeOut',
                      animateNormal: 'tns-normal',
                      animateDelay: false,
                      loop: true,
                      rewind: false,
                      autoHeight: false,
                      responsive: false,
                      lazyload: false,
                      lazyloadSelector: '.tns-lazy-img',
                      touch: true,
                      mouseDrag: false,
                      swipeAngle: 15,
                      nested: false,
                      preventActionWhenRunning: false,
                      preventScrollOnTouch: false,
                      freezable: true,
                      onInit: false,
                      useLocalStorage: true,
                      nonce: false
                    }, options || {});
                  
                    var doc = document,
                    win = window,
                    KEYS = {
                      ENTER: 13,
                      SPACE: 32,
                      LEFT: 37,
                      RIGHT: 39
                    },
                    tnsStorage = {},
                    localStorageAccess = options.useLocalStorage;
                  
                    if (localStorageAccess) {
                      // check browser version and local storage access
                      var browserInfo = navigator.userAgent;
                      var uid = new Date;
                  
                      try {
                        tnsStorage = win.localStorage;
                        if (tnsStorage) {
                          tnsStorage.setItem(uid, uid);
                          localStorageAccess = tnsStorage.getItem(uid) == uid;
                          tnsStorage.removeItem(uid);
                        } else {
                          localStorageAccess = false;
                        }
                        if (!localStorageAccess) { tnsStorage = {}; }
                      } catch(e) {
                        localStorageAccess = false;
                      }
                  
                      if (localStorageAccess) {
                        // remove storage when browser version changes
                        if (tnsStorage['tnsApp'] && tnsStorage['tnsApp'] !== browserInfo) {
                          ['tC', 'tPL', 'tMQ', 'tTf', 't3D', 'tTDu', 'tTDe', 'tADu', 'tADe', 'tTE', 'tAE'].forEach(function(item) { tnsStorage.removeItem(item); });
                        }
                        // update browserInfo
                        localStorage['tnsApp'] = browserInfo;
                      }
                    }
                  
                    var CALC = tnsStorage['tC'] ? checkStorageValue(tnsStorage['tC']) : setLocalStorage(tnsStorage, 'tC', calc(), localStorageAccess),
                    PERCENTAGELAYOUT = tnsStorage['tPL'] ? checkStorageValue(tnsStorage['tPL']) : setLocalStorage(tnsStorage, 'tPL', percentageLayout(), localStorageAccess),
                    CSSMQ = tnsStorage['tMQ'] ? checkStorageValue(tnsStorage['tMQ']) : setLocalStorage(tnsStorage, 'tMQ', mediaquerySupport(), localStorageAccess),
                    TRANSFORM = tnsStorage['tTf'] ? checkStorageValue(tnsStorage['tTf']) : setLocalStorage(tnsStorage, 'tTf', whichProperty('transform'), localStorageAccess),
                    HAS3DTRANSFORMS = tnsStorage['t3D'] ? checkStorageValue(tnsStorage['t3D']) : setLocalStorage(tnsStorage, 't3D', has3DTransforms(TRANSFORM), localStorageAccess),
                    TRANSITIONDURATION = tnsStorage['tTDu'] ? checkStorageValue(tnsStorage['tTDu']) : setLocalStorage(tnsStorage, 'tTDu', whichProperty('transitionDuration'), localStorageAccess),
                    TRANSITIONDELAY = tnsStorage['tTDe'] ? checkStorageValue(tnsStorage['tTDe']) : setLocalStorage(tnsStorage, 'tTDe', whichProperty('transitionDelay'), localStorageAccess),
                    ANIMATIONDURATION = tnsStorage['tADu'] ? checkStorageValue(tnsStorage['tADu']) : setLocalStorage(tnsStorage, 'tADu', whichProperty('animationDuration'), localStorageAccess),
                    ANIMATIONDELAY = tnsStorage['tADe'] ? checkStorageValue(tnsStorage['tADe']) : setLocalStorage(tnsStorage, 'tADe', whichProperty('animationDelay'), localStorageAccess),
                    TRANSITIONEND = tnsStorage['tTE'] ? checkStorageValue(tnsStorage['tTE']) : setLocalStorage(tnsStorage, 'tTE', getEndProperty(TRANSITIONDURATION, 'Transition'), localStorageAccess),
                    ANIMATIONEND = tnsStorage['tAE'] ? checkStorageValue(tnsStorage['tAE']) : setLocalStorage(tnsStorage, 'tAE', getEndProperty(ANIMATIONDURATION, 'Animation'), localStorageAccess);
                  
                    // get element nodes from selectors
                    var supportConsoleWarn = win.console && typeof win.console.warn === "function",
                    tnsList = ['container', 'controlsContainer', 'prevButton', 'nextButton', 'navContainer', 'autoplayButton'],
                    optionsElements = {};
                  
                    tnsList.forEach(function(item) {
                      if (typeof options[item] === 'string') {
                        var str = options[item],
                        el = doc.querySelector(str);
                        optionsElements[item] = str;
                  
                        if (el && el.nodeName) {
                          options[item] = el;
                        } else {
                          if (supportConsoleWarn) { console.warn('Can\'t find', options[item]); }
                          return;
                        }
                      }
                    });
                  
                    // make sure at least 1 slide
                    if (options.container.children.length < 1) {
                      if (supportConsoleWarn) { console.warn('No slides found in', options.container); }
                      return;
                    }
                  
                    // update options
                    var responsive = options.responsive,
                    nested = options.nested,
                    carousel = options.mode === 'carousel' ? true : false;
                  
                    if (responsive) {
                      // apply responsive[0] to options and remove it
                      if (0 in responsive) {
                        options = extend(options, responsive[0]);
                        delete responsive[0];
                      }
                  
                      var responsiveTem = {};
                      for (var key in responsive) {
                        var val = responsive[key];
                        // update responsive
                        // from: 300: 2
                        // to:
                        //   300: {
                        //     items: 2
                        //   }
                        val = typeof val === 'number' ? {items: val} : val;
                        responsiveTem[key] = val;
                      }
                      responsive = responsiveTem;
                      responsiveTem = null;
                    }
                  
                    // update options
                    function updateOptions (obj) {
                      for (var key in obj) {
                        if (!carousel) {
                          if (key === 'slideBy') { obj[key] = 'page'; }
                          if (key === 'edgePadding') { obj[key] = false; }
                          if (key === 'autoHeight') { obj[key] = false; }
                        }
                  
                        // update responsive options
                        if (key === 'responsive') { updateOptions(obj[key]); }
                      }
                    }
                    if (!carousel) { updateOptions(options); }
                  
                  
                    // === define and set variables ===
                    if (!carousel) {
                      options.axis = 'horizontal';
                      options.slideBy = 'page';
                      options.edgePadding = false;
                  
                      var animateIn = options.animateIn,
                      animateOut = options.animateOut,
                      animateDelay = options.animateDelay,
                      animateNormal = options.animateNormal;
                    }
                  
                    var horizontal = options.axis === 'horizontal' ? true : false,
                    outerWrapper = doc.createElement('div'),
                    innerWrapper = doc.createElement('div'),
                    middleWrapper,
                    container = options.container,
                    containerParent = container.parentNode,
                    containerHTML = container.outerHTML,
                    slideItems = container.children,
                    slideCount = slideItems.length,
                    breakpointZone,
                    windowWidth = getWindowWidth(),
                    isOn = false;
                    if (responsive) { setBreakpointZone(); }
                    if (carousel) { container.className += ' tns-vpfix'; }
                  
                    // fixedWidth: viewport > rightBoundary > indexMax
                    var autoWidth = options.autoWidth,
                    fixedWidth = getOption('fixedWidth'),
                    edgePadding = getOption('edgePadding'),
                    gutter = getOption('gutter'),
                    viewport = getViewportWidth(),
                    center = getOption('center'),
                    items = !autoWidth ? Math.floor(getOption('items')) : 1,
                    slideBy = getOption('slideBy'),
                    viewportMax = options.viewportMax || options.fixedWidthViewportWidth,
                    arrowKeys = getOption('arrowKeys'),
                    speed = getOption('speed'),
                    rewind = options.rewind,
                    loop = rewind ? false : options.loop,
                    autoHeight = getOption('autoHeight'),
                    controls = getOption('controls'),
                    controlsText = getOption('controlsText'),
                    nav = getOption('nav'),
                    touch = getOption('touch'),
                    mouseDrag = getOption('mouseDrag'),
                    autoplay = getOption('autoplay'),
                    autoplayTimeout = getOption('autoplayTimeout'),
                    autoplayText = getOption('autoplayText'),
                    autoplayHoverPause = getOption('autoplayHoverPause'),
                    autoplayResetOnVisibility = getOption('autoplayResetOnVisibility'),
                    sheet = createStyleSheet(null, getOption('nonce')),
                    lazyload = options.lazyload,
                    lazyloadSelector = options.lazyloadSelector,
                        slidePositions, // collection of slide positions
                        slideItemsOut = [],
                        cloneCount = loop ? getCloneCountForLoop() : 0,
                        slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2,
                        hasRightDeadZone = (fixedWidth || autoWidth) && !loop ? true : false,
                        rightBoundary = fixedWidth ? getRightBoundary() : null,
                        updateIndexBeforeTransform = (!carousel || !loop) ? true : false,
                        // transform
                        transformAttr = horizontal ? 'left' : 'top',
                        transformPrefix = '',
                        transformPostfix = '',
                        // index
                        getIndexMax = (function () {
                          if (fixedWidth) {
                            return function() { return center && !loop ? slideCount - 1 : Math.ceil(- rightBoundary / (fixedWidth + gutter)); };
                          } else if (autoWidth) {
                            return function() {
                              for (var i = 0; i < slideCountNew; i++) {
                                if (slidePositions[i] >= - rightBoundary) { return i; }
                              }
                            };
                          } else {
                            return function() {
                              if (center && carousel && !loop) {
                                return slideCount - 1;
                              } else {
                                return loop || carousel ? Math.max(0, slideCountNew - Math.ceil(items)) : slideCountNew - 1;
                              }
                            };
                          }
                        })(),
                        index = getStartIndex(getOption('startIndex')),
                        indexCached = index,
                        displayIndex = getCurrentSlide(),
                        indexMin = 0,
                        indexMax = !autoWidth ? getIndexMax() : null,
                        // resize
                        resizeTimer,
                        preventActionWhenRunning = options.preventActionWhenRunning,
                        swipeAngle = options.swipeAngle,
                        moveDirectionExpected = swipeAngle ? '?' : true,
                        running = false,
                        onInit = options.onInit,
                        events = new Events(),
                        // id, class
                        newContainerClasses = ' tns-slider tns-' + options.mode,
                        slideId = container.id || getSlideId(),
                        disable = getOption('disable'),
                        disabled = false,
                        freezable = options.freezable,
                        freeze = freezable && !autoWidth ? getFreeze() : false,
                        frozen = false,
                        controlsEvents = {
                          'click': onControlsClick,
                          'keydown': onControlsKeydown
                        },
                        navEvents = {
                          'click': onNavClick,
                          'keydown': onNavKeydown
                        },
                        hoverEvents = {
                          'mouseover': mouseoverPause,
                          'mouseout': mouseoutRestart
                        },
                        visibilityEvent = {'visibilitychange': onVisibilityChange},
                        docmentKeydownEvent = {'keydown': onDocumentKeydown},
                        touchEvents = {
                          'touchstart': onPanStart,
                          'touchmove': onPanMove,
                          'touchend': onPanEnd,
                          'touchcancel': onPanEnd
                        }, dragEvents = {
                          'mousedown': onPanStart,
                          'mousemove': onPanMove,
                          'mouseup': onPanEnd,
                          'mouseleave': onPanEnd
                        },
                        hasControls = hasOption('controls'),
                        hasNav = hasOption('nav'),
                        navAsThumbnails = autoWidth ? true : options.navAsThumbnails,
                        hasAutoplay = hasOption('autoplay'),
                        hasTouch = hasOption('touch'),
                        hasMouseDrag = hasOption('mouseDrag'),
                        slideActiveClass = 'tns-slide-active',
                        slideClonedClass = 'tns-slide-cloned',
                        imgCompleteClass = 'tns-complete',
                        imgEvents = {
                          'load': onImgLoaded,
                          'error': onImgFailed
                        },
                        imgsComplete,
                        liveregionCurrent,
                        preventScroll = options.preventScrollOnTouch === 'force' ? true : false;
                  
                    // controls
                    if (hasControls) {
                      var controlsContainer = options.controlsContainer,
                      controlsContainerHTML = options.controlsContainer ? options.controlsContainer.outerHTML : '',
                      prevButton = options.prevButton,
                      nextButton = options.nextButton,
                      prevButtonHTML = options.prevButton ? options.prevButton.outerHTML : '',
                      nextButtonHTML = options.nextButton ? options.nextButton.outerHTML : '',
                      prevIsButton,
                      nextIsButton;
                    }
                  
                    // nav
                    if (hasNav) {
                      var navContainer = options.navContainer,
                      navContainerHTML = options.navContainer ? options.navContainer.outerHTML : '',
                      navItems,
                      pages = autoWidth ? slideCount : getPages(),
                      pagesCached = 0,
                      navClicked = -1,
                      navCurrentIndex = getCurrentNavIndex(),
                      navCurrentIndexCached = navCurrentIndex,
                      navActiveClass = 'tns-nav-active',
                      navStr = 'Carousel Page ',
                      navStrCurrent = ' (Current Slide)';
                    }
                  
                    // autoplay
                    if (hasAutoplay) {
                      var autoplayDirection = options.autoplayDirection === 'forward' ? 1 : -1,
                      autoplayButton = options.autoplayButton,
                      autoplayButtonHTML = options.autoplayButton ? options.autoplayButton.outerHTML : '',
                      autoplayHtmlStrings = ['<span class=\'tns-visually-hidden\'>', ' animation</span>'],
                      autoplayTimer,
                      animating,
                      autoplayHoverPaused,
                      autoplayUserPaused,
                      autoplayVisibilityPaused;
                    }
                  
                    if (hasTouch || hasMouseDrag) {
                      var initPosition = {},
                      lastPosition = {},
                      translateInit,
                      disX,
                      disY,
                      panStart = false,
                      rafIndex,
                      getDist = horizontal ?
                      function(a, b) { return a.x - b.x; } :
                      function(a, b) { return a.y - b.y; };
                    }
                  
                    // disable slider when slidecount <= items
                    if (!autoWidth) { resetVariblesWhenDisable(disable || freeze); }
                  
                    if (TRANSFORM) {
                      transformAttr = TRANSFORM;
                      transformPrefix = 'translate';
                  
                      if (HAS3DTRANSFORMS) {
                        transformPrefix += horizontal ? '3d(' : '3d(0px, ';
                        transformPostfix = horizontal ? ', 0px, 0px)' : ', 0px)';
                      } else {
                        transformPrefix += horizontal ? 'X(' : 'Y(';
                        transformPostfix = ')';
                      }
                  
                    }
                  
                    if (carousel) { container.className = container.className.replace('tns-vpfix', ''); }
                    initStructure();
                    initSheet();
                    initSliderTransform();
                  
                    // === COMMON FUNCTIONS === //
                    function resetVariblesWhenDisable (condition) {
                      if (condition) {
                        controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
                      }
                    }
                  
                    function getCurrentSlide () {
                      var tem = carousel ? index - cloneCount : index;
                      while (tem < 0) { tem += slideCount; }
                      return tem%slideCount + 1;
                    }
                  
                    function getStartIndex (ind) {
                      ind = ind ? Math.max(0, Math.min(loop ? slideCount - 1 : slideCount - items, ind)) : 0;
                      return carousel ? ind + cloneCount : ind;
                    }
                  
                    function getAbsIndex (i) {
                      if (i == null) { i = index; }
                  
                      if (carousel) { i -= cloneCount; }
                      while (i < 0) { i += slideCount; }
                  
                      return Math.floor(i%slideCount);
                    }
                  
                    function getCurrentNavIndex () {
                      var absIndex = getAbsIndex(),
                      result;
                  
                      result = navAsThumbnails ? absIndex :
                      fixedWidth || autoWidth ? Math.ceil((absIndex + 1) * pages / slideCount - 1) :
                      Math.floor(absIndex / items);
                  
                      // set active nav to the last one when reaches the right edge
                      if (!loop && carousel && index === indexMax) { result = pages - 1; }
                  
                      return result;
                    }
                  
                    function getItemsMax () {
                      // fixedWidth or autoWidth while viewportMax is not available
                      if (autoWidth || (fixedWidth && !viewportMax)) {
                        return slideCount - 1;
                      // most cases
                    } else {
                      var str = fixedWidth ? 'fixedWidth' : 'items',
                      arr = [];
                  
                      if (fixedWidth || options[str] < slideCount) { arr.push(options[str]); }
                  
                      if (responsive) {
                        for (var bp in responsive) {
                          var tem = responsive[bp][str];
                          if (tem && (fixedWidth || tem < slideCount)) { arr.push(tem); }
                        }
                      }
                  
                      if (!arr.length) { arr.push(0); }
                  
                      return Math.ceil(fixedWidth ? viewportMax / Math.min.apply(null, arr) : Math.max.apply(null, arr));
                    }
                  }
                  
                  function getCloneCountForLoop () {
                    var itemsMax = getItemsMax(),
                    result = carousel ? Math.ceil((itemsMax * 5 - slideCount)/2) : (itemsMax * 4 - slideCount);
                    result = Math.max(itemsMax, result);
                  
                    return hasOption('edgePadding') ? result + 1 : result;
                  }
                  
                  function getWindowWidth () {
                    return win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
                  }
                  
                  function getInsertPosition (pos) {
                    return pos === 'top' ? 'afterbegin' : 'beforeend';
                  }
                  
                  function getClientWidth (el) {
                    if (el == null) { return; }
                    var div = doc.createElement('div'), rect, width;
                    el.appendChild(div);
                    rect = div.getBoundingClientRect();
                    width = rect.right - rect.left;
                    div.remove();
                    return width || getClientWidth(el.parentNode);
                  }
                  
                  function getViewportWidth () {
                    var gap = edgePadding ? edgePadding * 2 - gutter : 0;
                    return getClientWidth(containerParent) - gap;
                  }
                  
                  function hasOption (item) {
                    if (options[item]) {
                      return true;
                    } else {
                      if (responsive) {
                        for (var bp in responsive) {
                          if (responsive[bp][item]) { return true; }
                        }
                      }
                      return false;
                    }
                  }
                  
                    // get option:
                    // fixed width: viewport, fixedWidth, gutter => items
                    // others: window width => all variables
                    // all: items => slideBy
                    function getOption (item, ww) {
                      if (ww == null) { ww = windowWidth; }
                  
                      if (item === 'items' && fixedWidth) {
                        return Math.floor((viewport + gutter) / (fixedWidth + gutter)) || 1;
                  
                      } else {
                        var result = options[item];
                  
                        if (responsive) {
                          for (var bp in responsive) {
                            // bp: convert string to number
                            if (ww >= parseInt(bp)) {
                              if (item in responsive[bp]) { result = responsive[bp][item]; }
                            }
                          }
                        }
                  
                        if (item === 'slideBy' && result === 'page') { result = getOption('items'); }
                        if (!carousel && (item === 'slideBy' || item === 'items')) { result = Math.floor(result); }
                  
                        return result;
                      }
                    }
                  
                    function getSlideMarginLeft (i) {
                      return CALC ?
                      CALC + '(' + i * 100 + '% / ' + slideCountNew + ')' :
                      i * 100 / slideCountNew + '%';
                    }
                  
                    function getInnerWrapperStyles (edgePaddingTem, gutterTem, fixedWidthTem, speedTem, autoHeightBP) {
                      var str = '';
                  
                      if (edgePaddingTem !== undefined) {
                        var gap = edgePaddingTem;
                        if (gutterTem) { gap -= gutterTem; }
                        str = horizontal ?
                        'margin: 0 ' + gap + 'px 0 ' + edgePaddingTem + 'px;' :
                        'margin: ' + edgePaddingTem + 'px 0 ' + gap + 'px 0;';
                      } else if (gutterTem && !fixedWidthTem) {
                        var gutterTemUnit = '-' + gutterTem + 'px',
                        dir = horizontal ? gutterTemUnit + ' 0 0' : '0 ' + gutterTemUnit + ' 0';
                        str = 'margin: 0 ' + dir + ';';
                      }
                  
                      if (!carousel && autoHeightBP && TRANSITIONDURATION && speedTem) { str += getTransitionDurationStyle(speedTem); }
                      return str;
                    }
                  
                    function getContainerWidth (fixedWidthTem, gutterTem, itemsTem) {
                      if (fixedWidthTem) {
                        return (fixedWidthTem + gutterTem) * slideCountNew + 'px';
                      } else {
                        return CALC ?
                        CALC + '(' + slideCountNew * 100 + '% / ' + itemsTem + ')' :
                        slideCountNew * 100 / itemsTem + '%';
                      }
                    }
                  
                    function getSlideWidthStyle (fixedWidthTem, gutterTem, itemsTem) {
                      var width;
                  
                      if (fixedWidthTem) {
                        width = (fixedWidthTem + gutterTem) + 'px';
                      } else {
                        if (!carousel) { itemsTem = Math.floor(itemsTem); }
                        var dividend = carousel ? slideCountNew : itemsTem;
                        width = CALC ?
                        CALC + '(100% / ' + dividend + ')' :
                        100 / dividend + '%';
                      }
                  
                      width = 'width:' + width;
                  
                      // inner slider: overwrite outer slider styles
                      return nested !== 'inner' ? width + ';' : width + ' !important;';
                    }
                  
                    function getSlideGutterStyle (gutterTem) {
                      var str = '';
                  
                      // gutter maybe interger || 0
                      // so can't use 'if (gutter)'
                      if (gutterTem !== false) {
                        var prop = horizontal ? 'padding-' : 'margin-',
                        dir = horizontal ? 'right' : 'bottom';
                        str = prop +  dir + ': ' + gutterTem + 'px;';
                      }
                  
                      return str;
                    }
                  
                    function getCSSPrefix (name, num) {
                      var prefix = name.substring(0, name.length - num).toLowerCase();
                      if (prefix) { prefix = '-' + prefix + '-'; }
                  
                      return prefix;
                    }
                  
                    function getTransitionDurationStyle (speed) {
                      return getCSSPrefix(TRANSITIONDURATION, 18) + 'transition-duration:' + speed / 1000 + 's;';
                    }
                  
                    function getAnimationDurationStyle (speed) {
                      return getCSSPrefix(ANIMATIONDURATION, 17) + 'animation-duration:' + speed / 1000 + 's;';
                    }
                  
                    function initStructure () {
                      var classOuter = 'tns-outer',
                      classInner = 'tns-inner',
                      hasGutter = hasOption('gutter');
                  
                      outerWrapper.className = classOuter;
                      innerWrapper.className = classInner;
                      outerWrapper.id = slideId + '-ow';
                      innerWrapper.id = slideId + '-iw';
                  
                      // set container properties
                      if (container.id === '') { container.id = slideId; }
                      newContainerClasses += PERCENTAGELAYOUT || autoWidth ? ' tns-subpixel' : ' tns-no-subpixel';
                      newContainerClasses += CALC ? ' tns-calc' : ' tns-no-calc';
                      if (autoWidth) { newContainerClasses += ' tns-autowidth'; }
                      newContainerClasses += ' tns-' + options.axis;
                      container.className += newContainerClasses;
                  
                      // add constrain layer for carousel
                      if (carousel) {
                        middleWrapper = doc.createElement('div');
                        middleWrapper.id = slideId + '-mw';
                        middleWrapper.className = 'tns-ovh';
                  
                        outerWrapper.appendChild(middleWrapper);
                        middleWrapper.appendChild(innerWrapper);
                      } else {
                        outerWrapper.appendChild(innerWrapper);
                      }
                  
                      if (autoHeight) {
                        var wp = middleWrapper ? middleWrapper : innerWrapper;
                        wp.className += ' tns-ah';
                      }
                  
                      containerParent.insertBefore(outerWrapper, container);
                      innerWrapper.appendChild(container);
                  
                      // add id, class, aria attributes
                      // before clone slides
                      forEach(slideItems, function(item, i) {
                        addClass(item, 'tns-item');
                        if (!item.id) { item.id = slideId + '-item' + i; }
                        if (!carousel && animateNormal) { addClass(item, animateNormal); }
                        setAttrs(item, {
                          'aria-hidden': 'true',
                          'tabindex': '-1'
                        });
                      });
                  
                      // ## clone slides
                      // carousel: n + slides + n
                      // gallery:      slides + n
                      if (cloneCount) {
                        var fragmentBefore = doc.createDocumentFragment(),
                        fragmentAfter = doc.createDocumentFragment();
                  
                        for (var j = cloneCount; j--;) {
                          var num = j%slideCount,
                          cloneFirst = slideItems[num].cloneNode(true);
                          addClass(cloneFirst, slideClonedClass);
                          removeAttrs(cloneFirst, 'id');
                          fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);
                  
                          if (carousel) {
                            var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
                            addClass(cloneLast, slideClonedClass);
                            removeAttrs(cloneLast, 'id');
                            fragmentBefore.appendChild(cloneLast);
                          }
                        }
                  
                        container.insertBefore(fragmentBefore, container.firstChild);
                        container.appendChild(fragmentAfter);
                        slideItems = container.children;
                      }
                  
                    }
                  
                    function initSliderTransform () {
                      // ## images loaded/failed
                      if (hasOption('autoHeight') || autoWidth || !horizontal) {
                        var imgs = container.querySelectorAll('img');
                  
                        // add img load event listener
                        forEach(imgs, function(img) {
                          var src = img.src;
                  
                          if (!lazyload) {
                            // not data img
                            if (src && src.indexOf('data:image') < 0) {
                              img.src = '';
                              addEvents(img, imgEvents);
                              addClass(img, 'loading');
                  
                              img.src = src;
                            // data img
                          } else {
                            imgLoaded(img);
                          }
                        }
                      });
                  
                        // set imgsComplete
                        raf(function(){ imgsLoadedCheck(arrayFromNodeList(imgs), function() { imgsComplete = true; }); });
                  
                        // reset imgs for auto height: check visible imgs only
                        if (hasOption('autoHeight')) { imgs = getImageArray(index, Math.min(index + items - 1, slideCountNew - 1)); }
                  
                        lazyload ? initSliderTransformStyleCheck() : raf(function(){ imgsLoadedCheck(arrayFromNodeList(imgs), initSliderTransformStyleCheck); });
                  
                      } else {
                        // set container transform property
                        if (carousel) { doContainerTransformSilent(); }
                  
                        // update slider tools and events
                        initTools();
                        initEvents();
                      }
                    }
                  
                    function initSliderTransformStyleCheck () {
                      if (autoWidth && slideCount > 1) {
                        // check styles application
                        var num = loop ? index : slideCount - 1;
                  
                        (function stylesApplicationCheck() {
                          var left = slideItems[num].getBoundingClientRect().left;
                          var right = slideItems[num - 1].getBoundingClientRect().right;
                  
                          (Math.abs(left - right) <= 1) ?
                          initSliderTransformCore() :
                          setTimeout(function(){ stylesApplicationCheck(); }, 16);
                        })();
                  
                      } else {
                        initSliderTransformCore();
                      }
                    }
                  
                  
                    function initSliderTransformCore () {
                      // run Fn()s which are rely on image loading
                      if (!horizontal || autoWidth) {
                        setSlidePositions();
                  
                        if (autoWidth) {
                          rightBoundary = getRightBoundary();
                          if (freezable) { freeze = getFreeze(); }
                          indexMax = getIndexMax(); // <= slidePositions, rightBoundary <=
                          resetVariblesWhenDisable(disable || freeze);
                        } else {
                          updateContentWrapperHeight();
                        }
                      }
                  
                      // set container transform property
                      if (carousel) { doContainerTransformSilent(); }
                  
                      // update slider tools and events
                      initTools();
                      initEvents();
                    }
                  
                    function initSheet () {
                      // gallery:
                      // set animation classes and left value for gallery slider
                      if (!carousel) {
                        for (var i = index, l = index + Math.min(slideCount, items); i < l; i++) {
                          var item = slideItems[i];
                          item.style.left = (i - index) * 100 / items + '%';
                          addClass(item, animateIn);
                          removeClass(item, animateNormal);
                        }
                      }
                  
                      // #### LAYOUT
                  
                      // ## INLINE-BLOCK VS FLOAT
                  
                      // ## PercentageLayout:
                      // slides: inline-block
                      // remove blank space between slides by set font-size: 0
                  
                      // ## Non PercentageLayout:
                      // slides: float
                      //         margin-right: -100%
                      //         margin-left: ~
                  
                      // Resource: https://docs.google.com/spreadsheets/d/147up245wwTXeQYve3BRSAD4oVcvQmuGsFteJOeA5xNQ/edit?usp=sharing
                      if (horizontal) {
                        if (PERCENTAGELAYOUT || autoWidth) {
                          addCSSRule(sheet, '#' + slideId + ' > .tns-item', 'font-size:' + win.getComputedStyle(slideItems[0]).fontSize + ';', getCssRulesLength(sheet));
                          addCSSRule(sheet, '#' + slideId, 'font-size:0;', getCssRulesLength(sheet));
                        } else if (carousel) {
                          forEach(slideItems, function (slide, i) {
                            slide.style.marginLeft = getSlideMarginLeft(i);
                          });
                        }
                      }
                  
                  
                      // ## BASIC STYLES
                      if (CSSMQ) {
                        // middle wrapper style
                        if (TRANSITIONDURATION) {
                          var str = middleWrapper && options.autoHeight ? getTransitionDurationStyle(options.speed) : '';
                          addCSSRule(sheet, '#' + slideId + '-mw', str, getCssRulesLength(sheet));
                        }
                  
                        // inner wrapper styles
                        str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth, options.speed, options.autoHeight);
                        addCSSRule(sheet, '#' + slideId + '-iw', str, getCssRulesLength(sheet));
                  
                        // container styles
                        if (carousel) {
                          str = horizontal && !autoWidth ? 'width:' + getContainerWidth(options.fixedWidth, options.gutter, options.items) + ';' : '';
                          if (TRANSITIONDURATION) { str += getTransitionDurationStyle(speed); }
                          addCSSRule(sheet, '#' + slideId, str, getCssRulesLength(sheet));
                        }
                  
                        // slide styles
                        str = horizontal && !autoWidth ? getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) : '';
                        if (options.gutter) { str += getSlideGutterStyle(options.gutter); }
                        // set gallery items transition-duration
                        if (!carousel) {
                          if (TRANSITIONDURATION) { str += getTransitionDurationStyle(speed); }
                          if (ANIMATIONDURATION) { str += getAnimationDurationStyle(speed); }
                        }
                        if (str) { addCSSRule(sheet, '#' + slideId + ' > .tns-item', str, getCssRulesLength(sheet)); }
                  
                      // non CSS mediaqueries: IE8
                      // ## update inner wrapper, container, slides if needed
                      // set inline styles for inner wrapper & container
                      // insert stylesheet (one line) for slides only (since slides are many)
                    } else {
                        // middle wrapper styles
                        update_carousel_transition_duration();
                  
                        // inner wrapper styles
                        innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, autoHeight);
                  
                        // container styles
                        if (carousel && horizontal && !autoWidth) {
                          container.style.width = getContainerWidth(fixedWidth, gutter, items);
                        }
                  
                        // slide styles
                        var str = horizontal && !autoWidth ? getSlideWidthStyle(fixedWidth, gutter, items) : '';
                        if (gutter) { str += getSlideGutterStyle(gutter); }
                  
                        // append to the last line
                        if (str) { addCSSRule(sheet, '#' + slideId + ' > .tns-item', str, getCssRulesLength(sheet)); }
                      }
                  
                      // ## MEDIAQUERIES
                      if (responsive && CSSMQ) {
                        for (var bp in responsive) {
                          // bp: convert string to number
                          bp = parseInt(bp);
                  
                          var opts = responsive[bp],
                          str = '',
                          middleWrapperStr = '',
                          innerWrapperStr = '',
                          containerStr = '',
                          slideStr = '',
                          itemsBP = !autoWidth ? getOption('items', bp) : null,
                          fixedWidthBP = getOption('fixedWidth', bp),
                          speedBP = getOption('speed', bp),
                          edgePaddingBP = getOption('edgePadding', bp),
                          autoHeightBP = getOption('autoHeight', bp),
                          gutterBP = getOption('gutter', bp);
                  
                          // middle wrapper string
                          if (TRANSITIONDURATION && middleWrapper && getOption('autoHeight', bp) && 'speed' in opts) {
                            middleWrapperStr = '#' + slideId + '-mw{' + getTransitionDurationStyle(speedBP) + '}';
                          }
                  
                          // inner wrapper string
                          if ('edgePadding' in opts || 'gutter' in opts) {
                            innerWrapperStr = '#' + slideId + '-iw{' + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP, speedBP, autoHeightBP) + '}';
                          }
                  
                          // container string
                          if (carousel && horizontal && !autoWidth && ('fixedWidth' in opts || 'items' in opts || (fixedWidth && 'gutter' in opts))) {
                            containerStr = 'width:' + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + ';';
                          }
                          if (TRANSITIONDURATION && 'speed' in opts) {
                            containerStr += getTransitionDurationStyle(speedBP);
                          }
                          if (containerStr) {
                            containerStr = '#' + slideId + '{' + containerStr + '}';
                          }
                  
                          // slide string
                          if ('fixedWidth' in opts || (fixedWidth && 'gutter' in opts) || !carousel && 'items' in opts) {
                            slideStr += getSlideWidthStyle(fixedWidthBP, gutterBP, itemsBP);
                          }
                          if ('gutter' in opts) {
                            slideStr += getSlideGutterStyle(gutterBP);
                          }
                          // set gallery items transition-duration
                          if (!carousel && 'speed' in opts) {
                            if (TRANSITIONDURATION) { slideStr += getTransitionDurationStyle(speedBP); }
                            if (ANIMATIONDURATION) { slideStr += getAnimationDurationStyle(speedBP); }
                          }
                          if (slideStr) { slideStr = '#' + slideId + ' > .tns-item{' + slideStr + '}'; }
                  
                          // add up
                          str = middleWrapperStr + innerWrapperStr + containerStr + slideStr;
                  
                          if (str) {
                            sheet.insertRule('@media (min-width: ' + bp / 16 + 'em) {' + str + '}', sheet.cssRules.length);
                          }
                        }
                      }
                    }
                  
                    function initTools () {
                      // == slides ==
                      updateSlideStatus();
                  
                      // == live region ==
                      outerWrapper.insertAdjacentHTML('afterbegin', '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + getLiveRegionStr() + '</span>  of ' + slideCount + '</div>');
                      liveregionCurrent = outerWrapper.querySelector('.tns-liveregion .current');
                  
                      // == autoplayInit ==
                      if (hasAutoplay) {
                        var txt = autoplay ? 'stop' : 'start';
                        if (autoplayButton) {
                          setAttrs(autoplayButton, {'data-action': txt});
                        } else if (options.autoplayButtonOutput) {
                          outerWrapper.insertAdjacentHTML(getInsertPosition(options.autoplayPosition), '<button type="button" data-action="' + txt + '">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + '</button>');
                          autoplayButton = outerWrapper.querySelector('[data-action]');
                        }
                  
                        // add event
                        if (autoplayButton) {
                          addEvents(autoplayButton, {'click': toggleAutoplay});
                        }
                  
                        if (autoplay) {
                          startAutoplay();
                          if (autoplayHoverPause) { addEvents(container, hoverEvents); }
                          if (autoplayResetOnVisibility) { addEvents(container, visibilityEvent); }
                        }
                      }
                  
                      // == navInit ==
                      if (hasNav) {
                        var initIndex = !carousel ? 0 : cloneCount;
                        // customized nav
                        // will not hide the navs in case they're thumbnails
                        if (navContainer) {
                          setAttrs(navContainer, {'aria-label': 'Carousel Pagination'});
                          navItems = navContainer.children;
                          forEach(navItems, function(item, i) {
                            setAttrs(item, {
                              'data-nav': i,
                              'tabindex': '-1',
                              'aria-label': navStr + (i + 1),
                              'aria-controls': slideId,
                            });
                          });
                  
                        // generated nav
                      } else {
                        var navHtml = '',
                        hiddenStr = navAsThumbnails ? '' : 'style="display:none"';
                        for (var i = 0; i < slideCount; i++) {
                            // hide nav items by default
                            navHtml += '<button type="button" data-nav="' + i +'" tabindex="-1" aria-controls="' + slideId + '" ' + hiddenStr + ' aria-label="' + navStr + (i + 1) +'"></button>';
                          }
                          navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + '</div>';
                          outerWrapper.insertAdjacentHTML(getInsertPosition(options.navPosition), navHtml);
                  
                          navContainer = outerWrapper.querySelector('.tns-nav');
                          navItems = navContainer.children;
                        }
                  
                        updateNavVisibility();
                  
                        // add transition
                        if (TRANSITIONDURATION) {
                          var prefix = TRANSITIONDURATION.substring(0, TRANSITIONDURATION.length - 18).toLowerCase(),
                          str = 'transition: all ' + speed / 1000 + 's';
                  
                          if (prefix) {
                            str = '-' + prefix + '-' + str;
                          }
                  
                          addCSSRule(sheet, '[aria-controls^=' + slideId + '-item]', str, getCssRulesLength(sheet));
                        }
                  
                        setAttrs(navItems[navCurrentIndex], {'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent});
                        removeAttrs(navItems[navCurrentIndex], 'tabindex');
                        addClass(navItems[navCurrentIndex], navActiveClass);
                  
                        // add events
                        addEvents(navContainer, navEvents);
                      }
                  
                  
                  
                      // == controlsInit ==
                      if (hasControls) {
                        if (!controlsContainer && (!prevButton || !nextButton)) {
                          outerWrapper.insertAdjacentHTML(getInsertPosition(options.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + slideId +'">' + controlsText[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + slideId +'">' + controlsText[1] + '</button></div>');
                  
                          controlsContainer = outerWrapper.querySelector('.tns-controls');
                        }
                  
                        if (!prevButton || !nextButton) {
                          prevButton = controlsContainer.children[0];
                          nextButton = controlsContainer.children[1];
                        }
                  
                        if (options.controlsContainer) {
                          setAttrs(controlsContainer, {
                            'aria-label': 'Carousel Navigation',
                            'tabindex': '0'
                          });
                        }
                  
                        if (options.controlsContainer || (options.prevButton && options.nextButton)) {
                          setAttrs([prevButton, nextButton], {
                            'aria-controls': slideId,
                            'tabindex': '-1',
                          });
                        }
                  
                        if (options.controlsContainer || (options.prevButton && options.nextButton)) {
                          setAttrs(prevButton, {'data-controls' : 'prev'});
                          setAttrs(nextButton, {'data-controls' : 'next'});
                        }
                  
                        prevIsButton = isButton(prevButton);
                        nextIsButton = isButton(nextButton);
                  
                        updateControlsStatus();
                  
                        // add events
                        if (controlsContainer) {
                          addEvents(controlsContainer, controlsEvents);
                        } else {
                          addEvents(prevButton, controlsEvents);
                          addEvents(nextButton, controlsEvents);
                        }
                      }
                  
                      // hide tools if needed
                      disableUI();
                    }
                  
                    function initEvents () {
                      // add events
                      if (carousel && TRANSITIONEND) {
                        var eve = {};
                        eve[TRANSITIONEND] = onTransitionEnd;
                        addEvents(container, eve);
                      }
                  
                      if (touch) { addEvents(container, touchEvents, options.preventScrollOnTouch); }
                      if (mouseDrag) { addEvents(container, dragEvents); }
                      if (arrowKeys) { addEvents(doc, docmentKeydownEvent); }
                  
                      if (nested === 'inner') {
                        events.on('outerResized', function () {
                          resizeTasks();
                          events.emit('innerLoaded', info());
                        });
                      } else if (responsive || fixedWidth || autoWidth || autoHeight || !horizontal) {
                        addEvents(win, {'resize': onResize});
                      }
                  
                      if (autoHeight) {
                        if (nested === 'outer') {
                          events.on('innerLoaded', doAutoHeight);
                        } else if (!disable) { doAutoHeight(); }
                      }
                  
                      doLazyLoad();
                      if (disable) { disableSlider(); } else if (freeze) { freezeSlider(); }
                  
                      events.on('indexChanged', additionalUpdates);
                      if (nested === 'inner') { events.emit('innerLoaded', info()); }
                      if (typeof onInit === 'function') { onInit(info()); }
                      isOn = true;
                    }
                  
                    function destroy () {
                      // sheet
                      sheet.disabled = true;
                      if (sheet.ownerNode) { sheet.ownerNode.remove(); }
                  
                      // remove win event listeners
                      removeEvents(win, {'resize': onResize});
                  
                      // arrowKeys, controls, nav
                      if (arrowKeys) { removeEvents(doc, docmentKeydownEvent); }
                      if (controlsContainer) { removeEvents(controlsContainer, controlsEvents); }
                      if (navContainer) { removeEvents(navContainer, navEvents); }
                  
                      // autoplay
                      removeEvents(container, hoverEvents);
                      removeEvents(container, visibilityEvent);
                      if (autoplayButton) { removeEvents(autoplayButton, {'click': toggleAutoplay}); }
                      if (autoplay) { clearInterval(autoplayTimer); }
                  
                      // container
                      if (carousel && TRANSITIONEND) {
                        var eve = {};
                        eve[TRANSITIONEND] = onTransitionEnd;
                        removeEvents(container, eve);
                      }
                      if (touch) { removeEvents(container, touchEvents); }
                      if (mouseDrag) { removeEvents(container, dragEvents); }
                  
                      // cache Object values in options && reset HTML
                      var htmlList = [containerHTML, controlsContainerHTML, prevButtonHTML, nextButtonHTML, navContainerHTML, autoplayButtonHTML];
                  
                      tnsList.forEach(function(item, i) {
                        var el = item === 'container' ? outerWrapper : options[item];
                  
                        if (typeof el === 'object' && el) {
                          var prevEl = el.previousElementSibling ? el.previousElementSibling : false,
                          parentEl = el.parentNode;
                          el.outerHTML = htmlList[i];
                          options[item] = prevEl ? prevEl.nextElementSibling : parentEl.firstElementChild;
                        }
                      });
                  
                  
                      // reset variables
                      tnsList = animateIn = animateOut = animateDelay = animateNormal = horizontal = outerWrapper = innerWrapper = container = containerParent = containerHTML = slideItems = slideCount = breakpointZone = windowWidth = autoWidth = fixedWidth = edgePadding = gutter = viewport = items = slideBy = viewportMax = arrowKeys = speed = rewind = loop = autoHeight = sheet = lazyload = slidePositions = slideItemsOut = cloneCount = slideCountNew = hasRightDeadZone = rightBoundary = updateIndexBeforeTransform = transformAttr = transformPrefix = transformPostfix = getIndexMax = index = indexCached = indexMin = indexMax = resizeTimer = swipeAngle = moveDirectionExpected = running = onInit = events = newContainerClasses = slideId = disable = disabled = freezable = freeze = frozen = controlsEvents = navEvents = hoverEvents = visibilityEvent = docmentKeydownEvent = touchEvents = dragEvents = hasControls = hasNav = navAsThumbnails = hasAutoplay = hasTouch = hasMouseDrag = slideActiveClass = imgCompleteClass = imgEvents = imgsComplete = controls = controlsText = controlsContainer = controlsContainerHTML = prevButton = nextButton = prevIsButton = nextIsButton = nav = navContainer = navContainerHTML = navItems = pages = pagesCached = navClicked = navCurrentIndex = navCurrentIndexCached = navActiveClass = navStr = navStrCurrent = autoplay = autoplayTimeout = autoplayDirection = autoplayText = autoplayHoverPause = autoplayButton = autoplayButtonHTML = autoplayResetOnVisibility = autoplayHtmlStrings = autoplayTimer = animating = autoplayHoverPaused = autoplayUserPaused = autoplayVisibilityPaused = initPosition = lastPosition = translateInit = disX = disY = panStart = rafIndex = getDist = touch = mouseDrag = null;
                      // check variables
                      // [animateIn, animateOut, animateDelay, animateNormal, horizontal, outerWrapper, innerWrapper, container, containerParent, containerHTML, slideItems, slideCount, breakpointZone, windowWidth, autoWidth, fixedWidth, edgePadding, gutter, viewport, items, slideBy, viewportMax, arrowKeys, speed, rewind, loop, autoHeight, sheet, lazyload, slidePositions, slideItemsOut, cloneCount, slideCountNew, hasRightDeadZone, rightBoundary, updateIndexBeforeTransform, transformAttr, transformPrefix, transformPostfix, getIndexMax, index, indexCached, indexMin, indexMax, resizeTimer, swipeAngle, moveDirectionExpected, running, onInit, events, newContainerClasses, slideId, disable, disabled, freezable, freeze, frozen, controlsEvents, navEvents, hoverEvents, visibilityEvent, docmentKeydownEvent, touchEvents, dragEvents, hasControls, hasNav, navAsThumbnails, hasAutoplay, hasTouch, hasMouseDrag, slideActiveClass, imgCompleteClass, imgEvents, imgsComplete, controls, controlsText, controlsContainer, controlsContainerHTML, prevButton, nextButton, prevIsButton, nextIsButton, nav, navContainer, navContainerHTML, navItems, pages, pagesCached, navClicked, navCurrentIndex, navCurrentIndexCached, navActiveClass, navStr, navStrCurrent, autoplay, autoplayTimeout, autoplayDirection, autoplayText, autoplayHoverPause, autoplayButton, autoplayButtonHTML, autoplayResetOnVisibility, autoplayHtmlStrings, autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused, initPosition, lastPosition, translateInit, disX, disY, panStart, rafIndex, getDist, touch, mouseDrag ].forEach(function(item) { if (item !== null) { console.log(item); } });
                  
                      for (var a in this) {
                        if (a !== 'rebuild') { this[a] = null; }
                      }
                      isOn = false;
                    }
                  
                  // === ON RESIZE ===
                    // responsive || fixedWidth || autoWidth || !horizontal
                    function onResize (e) {
                      raf(function(){ resizeTasks(getEvent(e)); });
                    }
                  
                    function resizeTasks (e) {
                      if (!isOn) { return; }
                      if (nested === 'outer') { events.emit('outerResized', info(e)); }
                      windowWidth = getWindowWidth();
                      var bpChanged,
                      breakpointZoneTem = breakpointZone,
                      needContainerTransform = false;
                  
                      if (responsive) {
                        setBreakpointZone();
                        bpChanged = breakpointZoneTem !== breakpointZone;
                        // if (hasRightDeadZone) { needContainerTransform = true; } // *?
                        if (bpChanged) { events.emit('newBreakpointStart', info(e)); }
                      }
                  
                      var indChanged,
                      itemsChanged,
                      itemsTem = items,
                      disableTem = disable,
                      freezeTem = freeze,
                      arrowKeysTem = arrowKeys,
                      controlsTem = controls,
                      navTem = nav,
                      touchTem = touch,
                      mouseDragTem = mouseDrag,
                      autoplayTem = autoplay,
                      autoplayHoverPauseTem = autoplayHoverPause,
                      autoplayResetOnVisibilityTem = autoplayResetOnVisibility,
                      indexTem = index;
                  
                      if (bpChanged) {
                        var fixedWidthTem = fixedWidth,
                        autoHeightTem = autoHeight,
                        controlsTextTem = controlsText,
                        centerTem = center,
                        autoplayTextTem = autoplayText;
                  
                        if (!CSSMQ) {
                          var gutterTem = gutter,
                          edgePaddingTem = edgePadding;
                        }
                      }
                  
                      // get option:
                      // fixed width: viewport, fixedWidth, gutter => items
                      // others: window width => all variables
                      // all: items => slideBy
                      arrowKeys = getOption('arrowKeys');
                      controls = getOption('controls');
                      nav = getOption('nav');
                      touch = getOption('touch');
                      center = getOption('center');
                      mouseDrag = getOption('mouseDrag');
                      autoplay = getOption('autoplay');
                      autoplayHoverPause = getOption('autoplayHoverPause');
                      autoplayResetOnVisibility = getOption('autoplayResetOnVisibility');
                  
                      if (bpChanged) {
                        disable = getOption('disable');
                        fixedWidth = getOption('fixedWidth');
                        speed = getOption('speed');
                        autoHeight = getOption('autoHeight');
                        controlsText = getOption('controlsText');
                        autoplayText = getOption('autoplayText');
                        autoplayTimeout = getOption('autoplayTimeout');
                  
                        if (!CSSMQ) {
                          edgePadding = getOption('edgePadding');
                          gutter = getOption('gutter');
                        }
                      }
                      // update options
                      resetVariblesWhenDisable(disable);
                  
                      viewport = getViewportWidth(); // <= edgePadding, gutter
                      if ((!horizontal || autoWidth) && !disable) {
                        setSlidePositions();
                        if (!horizontal) {
                          updateContentWrapperHeight(); // <= setSlidePositions
                          needContainerTransform = true;
                        }
                      }
                      if (fixedWidth || autoWidth) {
                        rightBoundary = getRightBoundary(); // autoWidth: <= viewport, slidePositions, gutter
                                                            // fixedWidth: <= viewport, fixedWidth, gutter
                        indexMax = getIndexMax(); // autoWidth: <= rightBoundary, slidePositions
                                                  // fixedWidth: <= rightBoundary, fixedWidth, gutter
                                                }
                  
                                                if (bpChanged || fixedWidth) {
                                                  items = getOption('items');
                                                  slideBy = getOption('slideBy');
                                                  itemsChanged = items !== itemsTem;
                  
                                                  if (itemsChanged) {
                          if (!fixedWidth && !autoWidth) { indexMax = getIndexMax(); } // <= items
                          // check index before transform in case
                          // slider reach the right edge then items become bigger
                          updateIndex();
                        }
                      }
                  
                      if (bpChanged) {
                        if (disable !== disableTem) {
                          if (disable) {
                            disableSlider();
                          } else {
                            enableSlider(); // <= slidePositions, rightBoundary, indexMax
                          }
                        }
                      }
                  
                      if (freezable && (bpChanged || fixedWidth || autoWidth)) {
                        freeze = getFreeze(); // <= autoWidth: slidePositions, gutter, viewport, rightBoundary
                                              // <= fixedWidth: fixedWidth, gutter, rightBoundary
                                              // <= others: items
                  
                                              if (freeze !== freezeTem) {
                                                if (freeze) {
                                                  doContainerTransform(getContainerTransformValue(getStartIndex(0)));
                                                  freezeSlider();
                                                } else {
                                                  unfreezeSlider();
                                                  needContainerTransform = true;
                                                }
                                              }
                                            }
                  
                      resetVariblesWhenDisable(disable || freeze); // controls, nav, touch, mouseDrag, arrowKeys, autoplay, autoplayHoverPause, autoplayResetOnVisibility
                      if (!autoplay) { autoplayHoverPause = autoplayResetOnVisibility = false; }
                  
                      if (arrowKeys !== arrowKeysTem) {
                        arrowKeys ?
                        addEvents(doc, docmentKeydownEvent) :
                        removeEvents(doc, docmentKeydownEvent);
                      }
                      if (controls !== controlsTem) {
                        if (controls) {
                          if (controlsContainer) {
                            showElement(controlsContainer);
                          } else {
                            if (prevButton) { showElement(prevButton); }
                            if (nextButton) { showElement(nextButton); }
                          }
                        } else {
                          if (controlsContainer) {
                            hideElement(controlsContainer);
                          } else {
                            if (prevButton) { hideElement(prevButton); }
                            if (nextButton) { hideElement(nextButton); }
                          }
                        }
                      }
                      if (nav !== navTem) {
                        if (nav) {
                          showElement(navContainer);
                          updateNavVisibility();
                        } else {
                          hideElement(navContainer);
                        }
                      }
                      if (touch !== touchTem) {
                        touch ?
                        addEvents(container, touchEvents, options.preventScrollOnTouch) :
                        removeEvents(container, touchEvents);
                      }
                      if (mouseDrag !== mouseDragTem) {
                        mouseDrag ?
                        addEvents(container, dragEvents) :
                        removeEvents(container, dragEvents);
                      }
                      if (autoplay !== autoplayTem) {
                        if (autoplay) {
                          if (autoplayButton) { showElement(autoplayButton); }
                          if (!animating && !autoplayUserPaused) { startAutoplay(); }
                        } else {
                          if (autoplayButton) { hideElement(autoplayButton); }
                          if (animating) { stopAutoplay(); }
                        }
                      }
                      if (autoplayHoverPause !== autoplayHoverPauseTem) {
                        autoplayHoverPause ?
                        addEvents(container, hoverEvents) :
                        removeEvents(container, hoverEvents);
                      }
                      if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) {
                        autoplayResetOnVisibility ?
                        addEvents(doc, visibilityEvent) :
                        removeEvents(doc, visibilityEvent);
                      }
                  
                      if (bpChanged) {
                        if (fixedWidth !== fixedWidthTem || center !== centerTem) { needContainerTransform = true; }
                  
                        if (autoHeight !== autoHeightTem) {
                          if (!autoHeight) { innerWrapper.style.height = ''; }
                        }
                  
                        if (controls && controlsText !== controlsTextTem) {
                          prevButton.innerHTML = controlsText[0];
                          nextButton.innerHTML = controlsText[1];
                        }
                  
                        if (autoplayButton && autoplayText !== autoplayTextTem) {
                          var i = autoplay ? 1 : 0,
                          html = autoplayButton.innerHTML,
                          len = html.length - autoplayTextTem[i].length;
                          if (html.substring(len) === autoplayTextTem[i]) {
                            autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];
                          }
                        }
                      } else {
                        if (center && (fixedWidth || autoWidth)) { needContainerTransform = true; }
                      }
                  
                      if (itemsChanged || fixedWidth && !autoWidth) {
                        pages = getPages();
                        updateNavVisibility();
                      }
                  
                      indChanged = index !== indexTem;
                      if (indChanged) {
                        events.emit('indexChanged', info());
                        needContainerTransform = true;
                      } else if (itemsChanged) {
                        if (!indChanged) { additionalUpdates(); }
                      } else if (fixedWidth || autoWidth) {
                        doLazyLoad();
                        updateSlideStatus();
                        updateLiveRegion();
                      }
                  
                      if (itemsChanged && !carousel) { updateGallerySlidePositions(); }
                  
                      if (!disable && !freeze) {
                        // non-mediaqueries: IE8
                        if (bpChanged && !CSSMQ) {
                          // middle wrapper styles
                  
                          // inner wrapper styles
                          if (edgePadding !== edgePaddingTem || gutter !== gutterTem) {
                            innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, speed, autoHeight);
                          }
                  
                          if (horizontal) {
                            // container styles
                            if (carousel) {
                              container.style.width = getContainerWidth(fixedWidth, gutter, items);
                            }
                  
                            // slide styles
                            var str = getSlideWidthStyle(fixedWidth, gutter, items) +
                            getSlideGutterStyle(gutter);
                  
                            // remove the last line and
                            // add new styles
                            removeCSSRule(sheet, getCssRulesLength(sheet) - 1);
                            addCSSRule(sheet, '#' + slideId + ' > .tns-item', str, getCssRulesLength(sheet));
                          }
                        }
                  
                        // auto height
                        if (autoHeight) { doAutoHeight(); }
                  
                        if (needContainerTransform) {
                          doContainerTransformSilent();
                          indexCached = index;
                        }
                      }
                  
                      if (bpChanged) { events.emit('newBreakpointEnd', info(e)); }
                    }
                  
                  
                  
                  
                  
                    // === INITIALIZATION FUNCTIONS === //
                    function getFreeze () {
                      if (!fixedWidth && !autoWidth) {
                        var a = center ? items - (items - 1) / 2 : items;
                        return  slideCount <= a;
                      }
                  
                      var width = fixedWidth ? (fixedWidth + gutter) * slideCount : slidePositions[slideCount],
                      vp = edgePadding ? viewport + edgePadding * 2 : viewport + gutter;
                  
                      if (center) {
                        vp -= fixedWidth ? (viewport - fixedWidth) / 2 : (viewport - (slidePositions[index + 1] - slidePositions[index] - gutter)) / 2;
                      }
                  
                      return width <= vp;
                    }
                  
                    function setBreakpointZone () {
                      breakpointZone = 0;
                      for (var bp in responsive) {
                        bp = parseInt(bp); // convert string to number
                        if (windowWidth >= bp) { breakpointZone = bp; }
                      }
                    }
                  
                    // (slideBy, indexMin, indexMax) => index
                    var updateIndex = (function () {
                      return loop ?
                      carousel ?
                          // loop + carousel
                          function () {
                            var leftEdge = indexMin,
                            rightEdge = indexMax;
                  
                            leftEdge += slideBy;
                            rightEdge -= slideBy;
                  
                            // adjust edges when has edge paddings
                            // or fixed-width slider with extra space on the right side
                            if (edgePadding) {
                              leftEdge += 1;
                              rightEdge -= 1;
                            } else if (fixedWidth) {
                              if ((viewport + gutter)%(fixedWidth + gutter)) { rightEdge -= 1; }
                            }
                  
                            if (cloneCount) {
                              if (index > rightEdge) {
                                index -= slideCount;
                              } else if (index < leftEdge) {
                                index += slideCount;
                              }
                            }
                          } :
                          // loop + gallery
                          function() {
                            if (index > indexMax) {
                              while (index >= indexMin + slideCount) { index -= slideCount; }
                            } else if (index < indexMin) {
                              while (index <= indexMax - slideCount) { index += slideCount; }
                            }
                          } :
                        // non-loop
                        function() {
                          index = Math.max(indexMin, Math.min(indexMax, index));
                        };
                      })();
                  
                      function disableUI () {
                        if (!autoplay && autoplayButton) { hideElement(autoplayButton); }
                        if (!nav && navContainer) { hideElement(navContainer); }
                        if (!controls) {
                          if (controlsContainer) {
                            hideElement(controlsContainer);
                          } else {
                            if (prevButton) { hideElement(prevButton); }
                            if (nextButton) { hideElement(nextButton); }
                          }
                        }
                      }
                  
                      function enableUI () {
                        if (autoplay && autoplayButton) { showElement(autoplayButton); }
                        if (nav && navContainer) { showElement(navContainer); }
                        if (controls) {
                          if (controlsContainer) {
                            showElement(controlsContainer);
                          } else {
                            if (prevButton) { showElement(prevButton); }
                            if (nextButton) { showElement(nextButton); }
                          }
                        }
                      }
                  
                      function freezeSlider () {
                        if (frozen) { return; }
                  
                      // remove edge padding from inner wrapper
                      if (edgePadding) { innerWrapper.style.margin = '0px'; }
                  
                      // add class tns-transparent to cloned slides
                      if (cloneCount) {
                        var str = 'tns-transparent';
                        for (var i = cloneCount; i--;) {
                          if (carousel) { addClass(slideItems[i], str); }
                          addClass(slideItems[slideCountNew - i - 1], str);
                        }
                      }
                  
                      // update tools
                      disableUI();
                  
                      frozen = true;
                    }
                  
                    function unfreezeSlider () {
                      if (!frozen) { return; }
                  
                      // restore edge padding for inner wrapper
                      // for mordern browsers
                      if (edgePadding && CSSMQ) { innerWrapper.style.margin = ''; }
                  
                      // remove class tns-transparent to cloned slides
                      if (cloneCount) {
                        var str = 'tns-transparent';
                        for (var i = cloneCount; i--;) {
                          if (carousel) { removeClass(slideItems[i], str); }
                          removeClass(slideItems[slideCountNew - i - 1], str);
                        }
                      }
                  
                      // update tools
                      enableUI();
                  
                      frozen = false;
                    }
                  
                    function disableSlider () {
                      if (disabled) { return; }
                  
                      sheet.disabled = true;
                      container.className = container.className.replace(newContainerClasses.substring(1), '');
                      removeAttrs(container, ['style']);
                      if (loop) {
                        for (var j = cloneCount; j--;) {
                          if (carousel) { hideElement(slideItems[j]); }
                          hideElement(slideItems[slideCountNew - j - 1]);
                        }
                      }
                  
                      // vertical slider
                      if (!horizontal || !carousel) { removeAttrs(innerWrapper, ['style']); }
                  
                      // gallery
                      if (!carousel) {
                        for (var i = index, l = index + slideCount; i < l; i++) {
                          var item = slideItems[i];
                          removeAttrs(item, ['style']);
                          removeClass(item, animateIn);
                          removeClass(item, animateNormal);
                        }
                      }
                  
                      // update tools
                      disableUI();
                  
                      disabled = true;
                    }
                  
                    function enableSlider () {
                      if (!disabled) { return; }
                  
                      sheet.disabled = false;
                      container.className += newContainerClasses;
                      doContainerTransformSilent();
                  
                      if (loop) {
                        for (var j = cloneCount; j--;) {
                          if (carousel) { showElement(slideItems[j]); }
                          showElement(slideItems[slideCountNew - j - 1]);
                        }
                      }
                  
                      // gallery
                      if (!carousel) {
                        for (var i = index, l = index + slideCount; i < l; i++) {
                          var item = slideItems[i],
                          classN = i < index + items ? animateIn : animateNormal;
                          item.style.left = (i - index) * 100 / items + '%';
                          addClass(item, classN);
                        }
                      }
                  
                      // update tools
                      enableUI();
                  
                      disabled = false;
                    }
                  
                    function updateLiveRegion () {
                      var str = getLiveRegionStr();
                      if (liveregionCurrent.innerHTML !== str) { liveregionCurrent.innerHTML = str; }
                    }
                  
                    function getLiveRegionStr () {
                      var arr = getVisibleSlideRange(),
                      start = arr[0] + 1,
                      end = arr[1] + 1;
                      return start === end ? start + '' : start + ' to ' + end;
                    }
                  
                    function getVisibleSlideRange (val) {
                      if (val == null) { val = getContainerTransformValue(); }
                      var start = index, end, rangestart, rangeend;
                  
                      // get range start, range end for autoWidth and fixedWidth
                      if (center || edgePadding) {
                        if (autoWidth || fixedWidth) {
                          rangestart = - (parseFloat(val) + edgePadding);
                          rangeend = rangestart + viewport + edgePadding * 2;
                        }
                      } else {
                        if (autoWidth) {
                          rangestart = slidePositions[index];
                          rangeend = rangestart + viewport;
                        }
                      }
                  
                      // get start, end
                      // - check auto width
                      if (autoWidth) {
                        slidePositions.forEach(function(point, i) {
                          if (i < slideCountNew) {
                            if ((center || edgePadding) && point <= rangestart + 0.5) { start = i; }
                            if (rangeend - point >= 0.5) { end = i; }
                          }
                        });
                  
                      // - check percentage width, fixed width
                    } else {
                  
                      if (fixedWidth) {
                        var cell = fixedWidth + gutter;
                        if (center || edgePadding) {
                          start = Math.floor(rangestart/cell);
                          end = Math.ceil(rangeend/cell - 1);
                        } else {
                          end = start + Math.ceil(viewport/cell) - 1;
                        }
                  
                      } else {
                        if (center || edgePadding) {
                          var a = items - 1;
                          if (center) {
                            start -= a / 2;
                            end = index + a / 2;
                          } else {
                            end = index + a;
                          }
                  
                          if (edgePadding) {
                            var b = edgePadding * items / viewport;
                            start -= b;
                            end += b;
                          }
                  
                          start = Math.floor(start);
                          end = Math.ceil(end);
                        } else {
                          end = start + items - 1;
                        }
                      }
                  
                      start = Math.max(start, 0);
                      end = Math.min(end, slideCountNew - 1);
                    }
                  
                    return [start, end];
                  }
                  
                  function doLazyLoad () {
                    if (lazyload && !disable) {
                      var arg = getVisibleSlideRange();
                      arg.push(lazyloadSelector);
                  
                      getImageArray.apply(null, arg).forEach(function (img) {
                        if (!hasClass(img, imgCompleteClass)) {
                            // stop propagation transitionend event to container
                            var eve = {};
                            eve[TRANSITIONEND] = function (e) { e.stopPropagation(); };
                            addEvents(img, eve);
                  
                            addEvents(img, imgEvents);
                  
                            // update src
                            img.src = getAttr(img, 'data-src');
                  
                            // update srcset
                            var srcset = getAttr(img, 'data-srcset');
                            if (srcset) { img.srcset = srcset; }
                  
                            addClass(img, 'loading');
                          }
                        });
                    }
                  }
                  
                  function onImgLoaded (e) {
                    imgLoaded(getTarget(e));
                  }
                  
                  function onImgFailed (e) {
                    imgFailed(getTarget(e));
                  }
                  
                  function imgLoaded (img) {
                    addClass(img, 'loaded');
                    imgCompleted(img);
                  }
                  
                  function imgFailed (img) {
                    addClass(img, 'failed');
                    imgCompleted(img);
                  }
                  
                  function imgCompleted (img) {
                    addClass(img, imgCompleteClass);
                    removeClass(img, 'loading');
                    removeEvents(img, imgEvents);
                  }
                  
                  function getImageArray (start, end, imgSelector) {
                    var imgs = [];
                    if (!imgSelector) { imgSelector = 'img'; }
                  
                    while (start <= end) {
                      forEach(slideItems[start].querySelectorAll(imgSelector), function (img) { imgs.push(img); });
                      start++;
                    }
                  
                    return imgs;
                  }
                  
                    // check if all visible images are loaded
                    // and update container height if it's done
                    function doAutoHeight () {
                      var imgs = getImageArray.apply(null, getVisibleSlideRange());
                      raf(function(){ imgsLoadedCheck(imgs, updateInnerWrapperHeight); });
                    }
                  
                    function imgsLoadedCheck (imgs, cb) {
                      // execute callback function if all images are complete
                      if (imgsComplete) { return cb(); }
                  
                      // check image classes
                      imgs.forEach(function (img, index) {
                        if (!lazyload && img.complete) { imgCompleted(img); } // Check image.complete
                        if (hasClass(img, imgCompleteClass)) { imgs.splice(index, 1); }
                      });
                  
                      // execute callback function if selected images are all complete
                      if (!imgs.length) { return cb(); }
                  
                      // otherwise execute this functiona again
                      raf(function(){ imgsLoadedCheck(imgs, cb); });
                    }
                  
                    function additionalUpdates () {
                      doLazyLoad();
                      updateSlideStatus();
                      updateLiveRegion();
                      updateControlsStatus();
                      updateNavStatus();
                    }
                  
                  
                    function update_carousel_transition_duration () {
                      if (carousel && autoHeight) {
                        middleWrapper.style[TRANSITIONDURATION] = speed / 1000 + 's';
                      }
                    }
                  
                    function getMaxSlideHeight (slideStart, slideRange) {
                      var heights = [];
                      for (var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++) {
                        heights.push(slideItems[i].offsetHeight);
                      }
                  
                      return Math.max.apply(null, heights);
                    }
                  
                    // update inner wrapper height
                    // 1. get the max-height of the visible slides
                    // 2. set transitionDuration to speed
                    // 3. update inner wrapper height to max-height
                    // 4. set transitionDuration to 0s after transition done
                    function updateInnerWrapperHeight () {
                      var maxHeight = autoHeight ? getMaxSlideHeight(index, items) : getMaxSlideHeight(cloneCount, slideCount),
                      wp = middleWrapper ? middleWrapper : innerWrapper;
                  
                      if (wp.style.height !== maxHeight) { wp.style.height = maxHeight + 'px'; }
                    }
                  
                    // get the distance from the top edge of the first slide to each slide
                    // (init) => slidePositions
                    function setSlidePositions () {
                      slidePositions = [0];
                      var attr = horizontal ? 'left' : 'top',
                      attr2 = horizontal ? 'right' : 'bottom',
                      base = slideItems[0].getBoundingClientRect()[attr];
                  
                      forEach(slideItems, function(item, i) {
                        // skip the first slide
                        if (i) { slidePositions.push(item.getBoundingClientRect()[attr] - base); }
                        // add the end edge
                        if (i === slideCountNew - 1) { slidePositions.push(item.getBoundingClientRect()[attr2] - base); }
                      });
                    }
                  
                    // update slide
                    function updateSlideStatus () {
                      var range = getVisibleSlideRange(),
                      start = range[0],
                      end = range[1];
                  
                      forEach(slideItems, function(item, i) {
                        // show slides
                        if (i >= start && i <= end) {
                          if (hasAttr(item, 'aria-hidden')) {
                            removeAttrs(item, ['aria-hidden', 'tabindex']);
                            addClass(item, slideActiveClass);
                          }
                        // hide slides
                      } else {
                        if (!hasAttr(item, 'aria-hidden')) {
                          setAttrs(item, {
                            'aria-hidden': 'true',
                            'tabindex': '-1'
                          });
                          removeClass(item, slideActiveClass);
                        }
                      }
                    });
                    }
                  
                    // gallery: update slide position
                    function updateGallerySlidePositions () {
                      var l = index + Math.min(slideCount, items);
                      for (var i = slideCountNew; i--;) {
                        var item = slideItems[i];
                  
                        if (i >= index && i < l) {
                          // add transitions to visible slides when adjusting their positions
                          addClass(item, 'tns-moving');
                  
                          item.style.left = (i - index) * 100 / items + '%';
                          addClass(item, animateIn);
                          removeClass(item, animateNormal);
                        } else if (item.style.left) {
                          item.style.left = '';
                          addClass(item, animateNormal);
                          removeClass(item, animateIn);
                        }
                  
                        // remove outlet animation
                        removeClass(item, animateOut);
                      }
                  
                      // removing '.tns-moving'
                      setTimeout(function() {
                        forEach(slideItems, function(el) {
                          removeClass(el, 'tns-moving');
                        });
                      }, 300);
                    }
                  
                    // set tabindex on Nav
                    function updateNavStatus () {
                      // get current nav
                      if (nav) {
                        navCurrentIndex = navClicked >= 0 ? navClicked : getCurrentNavIndex();
                        navClicked = -1;
                  
                        if (navCurrentIndex !== navCurrentIndexCached) {
                          var navPrev = navItems[navCurrentIndexCached],
                          navCurrent = navItems[navCurrentIndex];
                  
                          setAttrs(navPrev, {
                            'tabindex': '-1',
                            'aria-label': navStr + (navCurrentIndexCached + 1)
                          });
                          removeClass(navPrev, navActiveClass);
                  
                          setAttrs(navCurrent, {'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent});
                          removeAttrs(navCurrent, 'tabindex');
                          addClass(navCurrent, navActiveClass);
                  
                          navCurrentIndexCached = navCurrentIndex;
                        }
                      }
                    }
                  
                    function getLowerCaseNodeName (el) {
                      return el.nodeName.toLowerCase();
                    }
                  
                    function isButton (el) {
                      return getLowerCaseNodeName(el) === 'button';
                    }
                  
                    function isAriaDisabled (el) {
                      return el.getAttribute('aria-disabled') === 'true';
                    }
                  
                    function disEnableElement (isButton, el, val) {
                      if (isButton) {
                        el.disabled = val;
                      } else {
                        el.setAttribute('aria-disabled', val.toString());
                      }
                    }
                  
                    // set 'disabled' to true on controls when reach the edges
                    function updateControlsStatus () {
                      if (!controls || rewind || loop) { return; }
                  
                      var prevDisabled = (prevIsButton) ? prevButton.disabled : isAriaDisabled(prevButton),
                      nextDisabled = (nextIsButton) ? nextButton.disabled : isAriaDisabled(nextButton),
                      disablePrev = (index <= indexMin) ? true : false,
                      disableNext = (!rewind && index >= indexMax) ? true : false;
                  
                      if (disablePrev && !prevDisabled) {
                        disEnableElement(prevIsButton, prevButton, true);
                      }
                      if (!disablePrev && prevDisabled) {
                        disEnableElement(prevIsButton, prevButton, false);
                      }
                      if (disableNext && !nextDisabled) {
                        disEnableElement(nextIsButton, nextButton, true);
                      }
                      if (!disableNext && nextDisabled) {
                        disEnableElement(nextIsButton, nextButton, false);
                      }
                    }
                  
                    // set duration
                    function resetDuration (el, str) {
                      if (TRANSITIONDURATION) { el.style[TRANSITIONDURATION] = str; }
                    }
                  
                    function getSliderWidth () {
                      return fixedWidth ? (fixedWidth + gutter) * slideCountNew : slidePositions[slideCountNew];
                    }
                  
                    function getCenterGap (num) {
                      if (num == null) { num = index; }
                  
                      var gap = edgePadding ? gutter : 0;
                      return autoWidth ? ((viewport - gap) - (slidePositions[num + 1] - slidePositions[num] - gutter))/2 :
                      fixedWidth ? (viewport - fixedWidth) / 2 :
                      (items - 1) / 2;
                    }
                  
                    function getRightBoundary () {
                      var gap = edgePadding ? gutter : 0,
                      result = (viewport + gap) - getSliderWidth();
                  
                      if (center && !loop) {
                        result = fixedWidth ? - (fixedWidth + gutter) * (slideCountNew - 1) - getCenterGap() :
                        getCenterGap(slideCountNew - 1) - slidePositions[slideCountNew - 1];
                      }
                      if (result > 0) { result = 0; }
                  
                      return result;
                    }
                  
                    function getContainerTransformValue (num) {
                      if (num == null) { num = index; }
                  
                      var val;
                      if (horizontal && !autoWidth) {
                        if (fixedWidth) {
                          val = - (fixedWidth + gutter) * num;
                          if (center) { val += getCenterGap(); }
                        } else {
                          var denominator = TRANSFORM ? slideCountNew : items;
                          if (center) { num -= getCenterGap(); }
                          val = - num * 100 / denominator;
                        }
                      } else {
                        val = - slidePositions[num];
                        if (center && autoWidth) {
                          val += getCenterGap();
                        }
                      }
                  
                      if (hasRightDeadZone) { val = Math.max(val, rightBoundary); }
                  
                      val += (horizontal && !autoWidth && !fixedWidth) ? '%' : 'px';
                  
                      return val;
                    }
                  
                    function doContainerTransformSilent (val) {
                      resetDuration(container, '0s');
                      doContainerTransform(val);
                    }
                  
                    function doContainerTransform (val) {
                      if (val == null) { val = getContainerTransformValue(); }
                      container.style[transformAttr] = transformPrefix + val + transformPostfix;
                    }
                  
                    function animateSlide (number, classOut, classIn, isOut) {
                      var l = number + items;
                      if (!loop) { l = Math.min(l, slideCountNew); }
                  
                      for (var i = number; i < l; i++) {
                        var item = slideItems[i];
                  
                        // set item positions
                        if (!isOut) { item.style.left = (i - index) * 100 / items + '%'; }
                  
                        if (animateDelay && TRANSITIONDELAY) {
                          item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1000 + 's';
                        }
                        removeClass(item, classOut);
                        addClass(item, classIn);
                  
                        if (isOut) { slideItemsOut.push(item); }
                      }
                    }
                  
                    // make transfer after click/drag:
                    // 1. change 'transform' property for mordern browsers
                    // 2. change 'left' property for legacy browsers
                    var transformCore = (function () {
                      return carousel ?
                      function () {
                        resetDuration(container, '');
                        if (TRANSITIONDURATION || !speed) {
                            // for morden browsers with non-zero duration or
                            // zero duration for all browsers
                            doContainerTransform();
                            // run fallback function manually
                            // when duration is 0 / container is hidden
                            if (!speed || !isVisible(container)) { onTransitionEnd(); }
                  
                          } else {
                            // for old browser with non-zero duration
                            jsTransform(container, transformAttr, transformPrefix, transformPostfix, getContainerTransformValue(), speed, onTransitionEnd);
                          }
                  
                          if (!horizontal) { updateContentWrapperHeight(); }
                        } :
                        function () {
                          slideItemsOut = [];
                  
                          var eve = {};
                          eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
                          removeEvents(slideItems[indexCached], eve);
                          addEvents(slideItems[index], eve);
                  
                          animateSlide(indexCached, animateIn, animateOut, true);
                          animateSlide(index, animateNormal, animateIn);
                  
                          // run fallback function manually
                          // when transition or animation not supported / duration is 0
                          if (!TRANSITIONEND || !ANIMATIONEND || !speed || !isVisible(container)) { onTransitionEnd(); }
                        };
                      })();
                  
                      function render (e, sliderMoved) {
                        if (updateIndexBeforeTransform) { updateIndex(); }
                  
                      // render when slider was moved (touch or drag) even though index may not change
                      if (index !== indexCached || sliderMoved) {
                        // events
                        events.emit('indexChanged', info());
                        events.emit('transitionStart', info());
                        if (autoHeight) { doAutoHeight(); }
                  
                        // pause autoplay when click or keydown from user
                        if (animating && e && ['click', 'keydown'].indexOf(e.type) >= 0) { stopAutoplay(); }
                  
                        running = true;
                        transformCore();
                      }
                    }
                  
                    /*
                     * Transfer prefixed properties to the same format
                     * CSS: -Webkit-Transform => webkittransform
                     * JS: WebkitTransform => webkittransform
                     * @param {string} str - property
                     *
                     */
                     function strTrans (str) {
                      return str.toLowerCase().replace(/-/g, '');
                    }
                  
                    // AFTER TRANSFORM
                    // Things need to be done after a transfer:
                    // 1. check index
                    // 2. add classes to visible slide
                    // 3. disable controls buttons when reach the first/last slide in non-loop slider
                    // 4. update nav status
                    // 5. lazyload images
                    // 6. update container height
                    function onTransitionEnd (event) {
                      // check running on gallery mode
                      // make sure trantionend/animationend events run only once
                      if (carousel || running) {
                        events.emit('transitionEnd', info(event));
                  
                        if (!carousel && slideItemsOut.length > 0) {
                          for (var i = 0; i < slideItemsOut.length; i++) {
                            var item = slideItemsOut[i];
                            // set item positions
                            item.style.left = '';
                  
                            if (ANIMATIONDELAY && TRANSITIONDELAY) {
                              item.style[ANIMATIONDELAY] = '';
                              item.style[TRANSITIONDELAY] = '';
                            }
                            removeClass(item, animateOut);
                            addClass(item, animateNormal);
                          }
                        }
                  
                        /* update slides, nav, controls after checking ...
                         * => legacy browsers who don't support 'event'
                         *    have to check event first, otherwise event.target will cause an error
                         * => or 'gallery' mode:
                         *   + event target is slide item
                         * => or 'carousel' mode:
                         *   + event target is container,
                         *   + event.property is the same with transform attribute
                         */
                         if (!event ||
                          !carousel && event.target.parentNode === container ||
                          event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {
                  
                          if (!updateIndexBeforeTransform) {
                            var indexTem = index;
                            updateIndex();
                            if (index !== indexTem) {
                              events.emit('indexChanged', info());
                  
                              doContainerTransformSilent();
                            }
                          }
                  
                          if (nested === 'inner') { events.emit('innerLoaded', info()); }
                          running = false;
                          indexCached = index;
                        }
                      }
                  
                    }
                  
                    // # ACTIONS
                    function goTo (targetIndex, e) {
                      if (freeze) { return; }
                  
                      // prev slideBy
                      if (targetIndex === 'prev') {
                        onControlsClick(e, -1);
                  
                      // next slideBy
                    } else if (targetIndex === 'next') {
                      onControlsClick(e, 1);
                  
                      // go to exact slide
                    } else {
                      if (running) {
                        if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
                      }
                  
                      var absIndex = getAbsIndex(),
                      indexGap = 0;
                  
                      if (targetIndex === 'first') {
                        indexGap = - absIndex;
                      } else if (targetIndex === 'last') {
                        indexGap = carousel ? slideCount - items - absIndex : slideCount - 1 - absIndex;
                      } else {
                        if (typeof targetIndex !== 'number') { targetIndex = parseInt(targetIndex); }
                  
                        if (!isNaN(targetIndex)) {
                            // from directly called goTo function
                            if (!e) { targetIndex = Math.max(0, Math.min(slideCount - 1, targetIndex)); }
                  
                            indexGap = targetIndex - absIndex;
                          }
                        }
                  
                        // gallery: make sure new page won't overlap with current page
                        if (!carousel && indexGap && Math.abs(indexGap) < items) {
                          var factor = indexGap > 0 ? 1 : -1;
                          indexGap += (index + indexGap - slideCount) >= indexMin ? slideCount * factor : slideCount * 2 * factor * -1;
                        }
                  
                        index += indexGap;
                  
                        // make sure index is in range
                        if (carousel && loop) {
                          if (index < indexMin) { index += slideCount; }
                          if (index > indexMax) { index -= slideCount; }
                        }
                  
                        // if index is changed, start rendering
                        if (getAbsIndex(index) !== getAbsIndex(indexCached)) {
                          render(e);
                        }
                  
                      }
                    }
                  
                    // on controls click
                    function onControlsClick (e, dir) {
                      if (running) {
                        if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
                      }
                      var passEventObject;
                  
                      if (!dir) {
                        e = getEvent(e);
                        var target = getTarget(e);
                  
                        while (target !== controlsContainer && [prevButton, nextButton].indexOf(target) < 0) { target = target.parentNode; }
                  
                        var targetIn = [prevButton, nextButton].indexOf(target);
                        if (targetIn >= 0) {
                          passEventObject = true;
                          dir = targetIn === 0 ? -1 : 1;
                        }
                      }
                  
                      if (rewind) {
                        if (index === indexMin && dir === -1) {
                          goTo('last', e);
                          return;
                        } else if (index === indexMax && dir === 1) {
                          goTo('first', e);
                          return;
                        }
                      }
                  
                      if (dir) {
                        index += slideBy * dir;
                        if (autoWidth) { index = Math.floor(index); }
                        // pass e when click control buttons or keydown
                        render((passEventObject || (e && e.type === 'keydown')) ? e : null);
                      }
                    }
                  
                    // on nav click
                    function onNavClick (e) {
                      if (running) {
                        if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
                      }
                  
                      e = getEvent(e);
                      var target = getTarget(e), navIndex;
                  
                      // find the clicked nav item
                      while (target !== navContainer && !hasAttr(target, 'data-nav')) { target = target.parentNode; }
                      if (hasAttr(target, 'data-nav')) {
                        var navIndex = navClicked = Number(getAttr(target, 'data-nav')),
                        targetIndexBase = fixedWidth || autoWidth ? navIndex * slideCount / pages : navIndex * items,
                        targetIndex = navAsThumbnails ? navIndex : Math.min(Math.ceil(targetIndexBase), slideCount - 1);
                        goTo(targetIndex, e);
                  
                        if (navCurrentIndex === navIndex) {
                          if (animating) { stopAutoplay(); }
                          navClicked = -1; // reset navClicked
                        }
                      }
                    }
                  
                    // autoplay functions
                    function setAutoplayTimer () {
                      autoplayTimer = setInterval(function () {
                        onControlsClick(null, autoplayDirection);
                      }, autoplayTimeout);
                  
                      animating = true;
                    }
                  
                    function stopAutoplayTimer () {
                      clearInterval(autoplayTimer);
                      animating = false;
                    }
                  
                    function updateAutoplayButton (action, txt) {
                      setAttrs(autoplayButton, {'data-action': action});
                      autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;
                    }
                  
                    function startAutoplay () {
                      setAutoplayTimer();
                      if (autoplayButton) { updateAutoplayButton('stop', autoplayText[1]); }
                    }
                  
                    function stopAutoplay () {
                      stopAutoplayTimer();
                      if (autoplayButton) { updateAutoplayButton('start', autoplayText[0]); }
                    }
                  
                    // programaitcally play/pause the slider
                    function play () {
                      if (autoplay && !animating) {
                        startAutoplay();
                        autoplayUserPaused = false;
                      }
                    }
                    function pause () {
                      if (animating) {
                        stopAutoplay();
                        autoplayUserPaused = true;
                      }
                    }
                  
                    function toggleAutoplay () {
                      if (animating) {
                        stopAutoplay();
                        autoplayUserPaused = true;
                      } else {
                        startAutoplay();
                        autoplayUserPaused = false;
                      }
                    }
                  
                    function onVisibilityChange () {
                      if (doc.hidden) {
                        if (animating) {
                          stopAutoplayTimer();
                          autoplayVisibilityPaused = true;
                        }
                      } else if (autoplayVisibilityPaused) {
                        setAutoplayTimer();
                        autoplayVisibilityPaused = false;
                      }
                    }
                  
                    function mouseoverPause () {
                      if (animating) {
                        stopAutoplayTimer();
                        autoplayHoverPaused = true;
                      }
                    }
                  
                    function mouseoutRestart () {
                      if (autoplayHoverPaused) {
                        setAutoplayTimer();
                        autoplayHoverPaused = false;
                      }
                    }
                  
                    // keydown events on document
                    function onDocumentKeydown (e) {
                      e = getEvent(e);
                      var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);
                  
                      if (keyIndex >= 0) {
                        onControlsClick(e, keyIndex === 0 ? -1 : 1);
                      }
                    }
                  
                    // on key control
                    function onControlsKeydown (e) {
                      e = getEvent(e);
                      var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);
                  
                      if (keyIndex >= 0) {
                        if (keyIndex === 0) {
                          if (!prevButton.disabled) { onControlsClick(e, -1); }
                        } else if (!nextButton.disabled) {
                          onControlsClick(e, 1);
                        }
                      }
                    }
                  
                    // set focus
                    function setFocus (el) {
                      el.focus();
                    }
                  
                    // on key nav
                    function onNavKeydown (e) {
                      e = getEvent(e);
                      var curElement = doc.activeElement;
                      if (!hasAttr(curElement, 'data-nav')) { return; }
                  
                      // var code = e.keyCode,
                      var keyIndex = [KEYS.LEFT, KEYS.RIGHT, KEYS.ENTER, KEYS.SPACE].indexOf(e.keyCode),
                      navIndex = Number(getAttr(curElement, 'data-nav'));
                  
                      if (keyIndex >= 0) {
                        if (keyIndex === 0) {
                          if (navIndex > 0) { setFocus(navItems[navIndex - 1]); }
                        } else if (keyIndex === 1) {
                          if (navIndex < pages - 1) { setFocus(navItems[navIndex + 1]); }
                        } else {
                          navClicked = navIndex;
                          goTo(navIndex, e);
                        }
                      }
                    }
                  
                    function getEvent (e) {
                      e = e || win.event;
                      return isTouchEvent(e) ? e.changedTouches[0] : e;
                    }
                    function getTarget (e) {
                      return e.target || win.event.srcElement;
                    }
                  
                    function isTouchEvent (e) {
                      return e.type.indexOf('touch') >= 0;
                    }
                  
                    function preventDefaultBehavior (e) {
                      e.preventDefault ? e.preventDefault() : e.returnValue = false;
                    }
                  
                    function getMoveDirectionExpected () {
                      return getTouchDirection(toDegree(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;
                    }
                  
                    function onPanStart (e) {
                      if (running) {
                        if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
                      }
                  
                      if (autoplay && animating) { stopAutoplayTimer(); }
                  
                      panStart = true;
                      if (rafIndex) {
                        caf(rafIndex);
                        rafIndex = null;
                      }
                  
                      var $ = getEvent(e);
                      events.emit(isTouchEvent(e) ? 'touchStart' : 'dragStart', info(e));
                  
                      if (!isTouchEvent(e) && ['img', 'a'].indexOf(getLowerCaseNodeName(getTarget(e))) >= 0) {
                        preventDefaultBehavior(e);
                      }
                  
                      lastPosition.x = initPosition.x = $.clientX;
                      lastPosition.y = initPosition.y = $.clientY;
                      if (carousel) {
                        translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, ''));
                        resetDuration(container, '0s');
                      }
                    }
                  
                    function onPanMove (e) {
                      if (panStart) {
                        var $ = getEvent(e);
                        lastPosition.x = $.clientX;
                        lastPosition.y = $.clientY;
                  
                        if (carousel) {
                          if (!rafIndex) { rafIndex = raf(function(){ panUpdate(e); }); }
                        } else {
                          if (moveDirectionExpected === '?') { moveDirectionExpected = getMoveDirectionExpected(); }
                          if (moveDirectionExpected) { preventScroll = true; }
                        }
                  
                        if ((typeof e.cancelable !== 'boolean' || e.cancelable) && preventScroll) {
                          e.preventDefault();
                        }
                      }
                    }
                  
                    function panUpdate (e) {
                      if (!moveDirectionExpected) {
                        panStart = false;
                        return;
                      }
                      caf(rafIndex);
                      if (panStart) { rafIndex = raf(function(){ panUpdate(e); }); }
                  
                      if (moveDirectionExpected === '?') { moveDirectionExpected = getMoveDirectionExpected(); }
                      if (moveDirectionExpected) {
                        if (!preventScroll && isTouchEvent(e)) { preventScroll = true; }
                  
                        try {
                          if (e.type) { events.emit(isTouchEvent(e) ? 'touchMove' : 'dragMove', info(e)); }
                        } catch(err) {}
                  
                        var x = translateInit,
                        dist = getDist(lastPosition, initPosition);
                        if (!horizontal || fixedWidth || autoWidth) {
                          x += dist;
                          x += 'px';
                        } else {
                          var percentageX = TRANSFORM ? dist * items * 100 / ((viewport + gutter) * slideCountNew): dist * 100 / (viewport + gutter);
                          x += percentageX;
                          x += '%';
                        }
                  
                        container.style[transformAttr] = transformPrefix + x + transformPostfix;
                      }
                    }
                  
                    function onPanEnd (e) {
                      if (panStart) {
                        if (rafIndex) {
                          caf(rafIndex);
                          rafIndex = null;
                        }
                        if (carousel) { resetDuration(container, ''); }
                        panStart = false;
                  
                        var $ = getEvent(e);
                        lastPosition.x = $.clientX;
                        lastPosition.y = $.clientY;
                        var dist = getDist(lastPosition, initPosition);
                  
                        if (Math.abs(dist)) {
                          // drag vs click
                          if (!isTouchEvent(e)) {
                            // prevent "click"
                            var target = getTarget(e);
                            addEvents(target, {'click': function preventClick (e) {
                              preventDefaultBehavior(e);
                              removeEvents(target, {'click': preventClick});
                            }});
                          }
                  
                          if (carousel) {
                            rafIndex = raf(function() {
                              if (horizontal && !autoWidth) {
                                var indexMoved = - dist * items / (viewport + gutter);
                                indexMoved = dist > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
                                index += indexMoved;
                              } else {
                                var moved = - (translateInit + dist);
                                if (moved <= 0) {
                                  index = indexMin;
                                } else if (moved >= slidePositions[slideCountNew - 1]) {
                                  index = indexMax;
                                } else {
                                  var i = 0;
                                  while (i < slideCountNew && moved >= slidePositions[i]) {
                                    index = i;
                                    if (moved > slidePositions[i] && dist < 0) { index += 1; }
                                    i++;
                                  }
                                }
                              }
                  
                              render(e, dist);
                              events.emit(isTouchEvent(e) ? 'touchEnd' : 'dragEnd', info(e));
                            });
                          } else {
                            if (moveDirectionExpected) {
                              onControlsClick(e, dist > 0 ? -1 : 1);
                            }
                          }
                        }
                      }
                  
                      // reset
                      if (options.preventScrollOnTouch === 'auto') { preventScroll = false; }
                      if (swipeAngle) { moveDirectionExpected = '?'; }
                      if (autoplay && !animating) { setAutoplayTimer(); }
                    }
                  
                    // === RESIZE FUNCTIONS === //
                    // (slidePositions, index, items) => vertical_conentWrapper.height
                    function updateContentWrapperHeight () {
                      var wp = middleWrapper ? middleWrapper : innerWrapper;
                      wp.style.height = slidePositions[index + items] - slidePositions[index] + 'px';
                    }
                  
                    function getPages () {
                      var rough = fixedWidth ? (fixedWidth + gutter) * slideCount / viewport : slideCount / items;
                      return Math.min(Math.ceil(rough), slideCount);
                    }
                  
                    /*
                     * 1. update visible nav items list
                     * 2. add "hidden" attributes to previous visible nav items
                     * 3. remove "hidden" attrubutes to new visible nav items
                     */
                     function updateNavVisibility () {
                      if (!nav || navAsThumbnails) { return; }
                  
                      if (pages !== pagesCached) {
                        var min = pagesCached,
                        max = pages,
                        fn = showElement;
                  
                        if (pagesCached > pages) {
                          min = pages;
                          max = pagesCached;
                          fn = hideElement;
                        }
                  
                        while (min < max) {
                          fn(navItems[min]);
                          min++;
                        }
                  
                        // cache pages
                        pagesCached = pages;
                      }
                    }
                  
                    function info (e) {
                      return {
                        container: container,
                        slideItems: slideItems,
                        navContainer: navContainer,
                        navItems: navItems,
                        controlsContainer: controlsContainer,
                        hasControls: hasControls,
                        prevButton: prevButton,
                        nextButton: nextButton,
                        items: items,
                        slideBy: slideBy,
                        cloneCount: cloneCount,
                        slideCount: slideCount,
                        slideCountNew: slideCountNew,
                        index: index,
                        indexCached: indexCached,
                        displayIndex: getCurrentSlide(),
                        navCurrentIndex: navCurrentIndex,
                        navCurrentIndexCached: navCurrentIndexCached,
                        pages: pages,
                        pagesCached: pagesCached,
                        sheet: sheet,
                        isOn: isOn,
                        event: e || {},
                      };
                    }
                  
                    return {
                      version: '2.9.3',
                      getInfo: info,
                      events: events,
                      goTo: goTo,
                      play: play,
                      pause: pause,
                      isOn: isOn,
                      updateSliderHeight: updateInnerWrapperHeight,
                      refresh: initSliderTransform,
                      destroy: destroy,
                      rebuild: function() {
                        return tns(extend(options, optionsElements));
                      }
                    };
                  };
                  
                  return tns;
                  })();

//menu
//var tombolMenu = $(".Tombol-Menu");
//var menu = $("nav .menu ul");

//function klikMenu(){
  //  tombolMenu.click(function (){
     //   menu.toggle();
   // });
   // menu.click(function (){
       // menu.toggle();
    //});
//}

//$(document).ready(function(){
   // var width = $(window).width();
        //if(width < 990){
           // klikMenu();
        //}
//})

//check lebar
//$(window).resize(function(){
  //  var width=$(window).width();
    //if(width > 989){
      //  menu.css("display","block");
        //disply block
    //}else{
      //  menu.css("display","none");
    //}
    //klikMenu();
//});

//efek scrol
//$(document).ready(function(){
  //  var scroll_pos = 0;
    //$(document).scroll(function(){
      //  scroll_pos = $(this).scrollTop();
        //if(scroll_pos > 0){
          //  $("nav").addClass("putih");
        //}else{
          //  $("nav").removeClass("putih");
        //}
    //})  
//});
