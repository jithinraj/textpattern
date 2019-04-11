/* ========================================================================
 * Bootstrap: dropdown.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
!function(r){"use strict";var s='[data-toggle="dropdown"]',o=function(t){r(t).on("click.bs.dropdown",this.toggle)};function l(t){var e=t.attr("data-target");e||(e=(e=t.attr("href"))&&/#[A-Za-z]/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,""));var n="#"!==e?r(document).find(e):null;return n&&n.length?n:t.parent()}function a(o){o&&3===o.which||(r(".dropdown-backdrop").remove(),r(s).each(function(){var t=r(this),e=l(t),n={relatedTarget:this};e.hasClass("open")&&(o&&"click"==o.type&&/input|textarea/i.test(o.target.tagName)&&r.contains(e[0],o.target)||(e.trigger(o=r.Event("hide.bs.dropdown",n)),o.isDefaultPrevented()||(t.attr("aria-expanded","false"),e.removeClass("open").trigger(r.Event("hidden.bs.dropdown",n)))))}))}o.VERSION="3.4.1",o.prototype.toggle=function(t){var e=r(this);if(!e.is(".disabled, :disabled")){var n=l(e),o=n.hasClass("open");if(a(),!o){"ontouchstart"in document.documentElement&&!n.closest(".navbar-nav").length&&r(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(r(this)).on("click",a);var i={relatedTarget:this};if(n.trigger(t=r.Event("show.bs.dropdown",i)),t.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),n.toggleClass("open").trigger(r.Event("shown.bs.dropdown",i))}return!1}},o.prototype.keydown=function(t){if(/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)){var e=r(this);if(t.preventDefault(),t.stopPropagation(),!e.is(".disabled, :disabled")){var n=l(e),o=n.hasClass("open");if(!o&&27!=t.which||o&&27==t.which)return 27==t.which&&n.find(s).trigger("focus"),e.trigger("click");var i=n.find(".dropdown-menu li:not(.disabled):visible a");if(i.length){var a=i.index(t.target);38==t.which&&0<a&&a--,40==t.which&&a<i.length-1&&a++,~a||(a=0),i.eq(a).trigger("focus")}}}};var t=r.fn.dropdown;r.fn.dropdown=function(n){return this.each(function(){var t=r(this),e=t.data("bs.dropdown");e||t.data("bs.dropdown",e=new o(this)),"string"==typeof n&&e[n].call(t)})},r.fn.dropdown.Constructor=o,r.fn.dropdown.noConflict=function(){return r.fn.dropdown=t,this},r(document).on("click.bs.dropdown.data-api",a).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,o.prototype.toggle).on("keydown.bs.dropdown.data-api",s,o.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",o.prototype.keydown)}(jQuery),function(r){"use strict";var s=function(t,e){this.$element=r(t),this.options=r.extend({},s.DEFAULTS,e),this.$trigger=r('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};function i(t){var e,n=t.attr("data-target")||(e=t.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"");return r(document).find(n)}function l(o){return this.each(function(){var t=r(this),e=t.data("bs.collapse"),n=r.extend({},s.DEFAULTS,t.data(),"object"==typeof o&&o);!e&&n.toggle&&/show|hide/.test(o)&&(n.toggle=!1),e||t.data("bs.collapse",e=new s(this,n)),"string"==typeof o&&e[o]()})}s.VERSION="3.4.1",s.TRANSITION_DURATION=350,s.DEFAULTS={toggle:!0},s.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},s.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(t=e.data("bs.collapse"))&&t.transitioning)){var n=r.Event("show.bs.collapse");if(this.$element.trigger(n),!n.isDefaultPrevented()){e&&e.length&&(l.call(e,"hide"),t||e.data("bs.collapse",null));var o=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var i=function(){this.$element.removeClass("collapsing").addClass("collapse in")[o](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!r.support.transition)return i.call(this);var a=r.camelCase(["scroll",o].join("-"));this.$element.one("bsTransitionEnd",r.proxy(i,this)).emulateTransitionEnd(s.TRANSITION_DURATION)[o](this.$element[0][a])}}}},s.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=r.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var e=this.dimension();this.$element[e](this.$element[e]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var n=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!r.support.transition)return n.call(this);this.$element[e](0).one("bsTransitionEnd",r.proxy(n,this)).emulateTransitionEnd(s.TRANSITION_DURATION)}}},s.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},s.prototype.getParent=function(){return r(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(r.proxy(function(t,e){var n=r(e);this.addAriaAndCollapsedClass(i(n),n)},this)).end()},s.prototype.addAriaAndCollapsedClass=function(t,e){var n=t.hasClass("in");t.attr("aria-expanded",n),e.toggleClass("collapsed",!n).attr("aria-expanded",n)};var t=r.fn.collapse;r.fn.collapse=l,r.fn.collapse.Constructor=s,r.fn.collapse.noConflict=function(){return r.fn.collapse=t,this},r(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(t){var e=r(this);e.attr("data-target")||t.preventDefault();var n=i(e),o=n.data("bs.collapse")?"toggle":e.data();l.call(n,o)})}(jQuery),
/*!
	autosize 4.0.2
	license: MIT
	http://www.jacklmoore.com/autosize
*/
function(t,e){if("function"==typeof define&&define.amd)define(["module","exports"],e);else if("undefined"!=typeof exports)e(module,exports);else{var n={exports:{}};e(n,n.exports),t.autosize=n.exports}}(this,function(t,e){"use strict";var n,o,p="function"==typeof Map?new Map:(n=[],o=[],{has:function(t){return-1<n.indexOf(t)},get:function(t){return o[n.indexOf(t)]},set:function(t,e){-1===n.indexOf(t)&&(n.push(t),o.push(e))},delete:function(t){var e=n.indexOf(t);-1<e&&(n.splice(e,1),o.splice(e,1))}}),h=function(t){return new Event(t,{bubbles:!0})};try{new Event("test")}catch(t){h=function(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!1),e}}function i(i){if(i&&i.nodeName&&"TEXTAREA"===i.nodeName&&!p.has(i)){var t,n=null,o=null,a=null,r=function(){i.clientWidth!==o&&c()},s=function(e){window.removeEventListener("resize",r,!1),i.removeEventListener("input",c,!1),i.removeEventListener("keyup",c,!1),i.removeEventListener("autosize:destroy",s,!1),i.removeEventListener("autosize:update",c,!1),Object.keys(e).forEach(function(t){i.style[t]=e[t]}),p.delete(i)}.bind(i,{height:i.style.height,resize:i.style.resize,overflowY:i.style.overflowY,overflowX:i.style.overflowX,wordWrap:i.style.wordWrap});i.addEventListener("autosize:destroy",s,!1),"onpropertychange"in i&&"oninput"in i&&i.addEventListener("keyup",c,!1),window.addEventListener("resize",r,!1),i.addEventListener("input",c,!1),i.addEventListener("autosize:update",c,!1),i.style.overflowX="hidden",i.style.wordWrap="break-word",p.set(i,{destroy:s,update:c}),"vertical"===(t=window.getComputedStyle(i,null)).resize?i.style.resize="none":"both"===t.resize&&(i.style.resize="horizontal"),n="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(n)&&(n=0),c()}function l(t){var e=i.style.width;i.style.width="0px",i.offsetWidth,i.style.width=e,i.style.overflowY=t}function d(){if(0!==i.scrollHeight){var t=function(t){for(var e=[];t&&t.parentNode&&t.parentNode instanceof Element;)t.parentNode.scrollTop&&e.push({node:t.parentNode,scrollTop:t.parentNode.scrollTop}),t=t.parentNode;return e}(i),e=document.documentElement&&document.documentElement.scrollTop;i.style.height="",i.style.height=i.scrollHeight+n+"px",o=i.clientWidth,t.forEach(function(t){t.node.scrollTop=t.scrollTop}),e&&(document.documentElement.scrollTop=e)}}function c(){d();var t=Math.round(parseFloat(i.style.height)),e=window.getComputedStyle(i,null),n="content-box"===e.boxSizing?Math.round(parseFloat(e.height)):i.offsetHeight;if(n<t?"hidden"===e.overflowY&&(l("scroll"),d(),n="content-box"===e.boxSizing?Math.round(parseFloat(window.getComputedStyle(i,null).height)):i.offsetHeight):"hidden"!==e.overflowY&&(l("hidden"),d(),n="content-box"===e.boxSizing?Math.round(parseFloat(window.getComputedStyle(i,null).height)):i.offsetHeight),a!==n){a=n;var o=h("autosize:resized");try{i.dispatchEvent(o)}catch(t){}}}}function a(t){var e=p.get(t);e&&e.destroy()}function r(t){var e=p.get(t);e&&e.update()}var s=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((s=function(t){return t}).destroy=function(t){return t},s.update=function(t){return t}):((s=function(t,e){return t&&Array.prototype.forEach.call(t.length?t:[t],function(t){return i(t)}),t}).destroy=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],a),t},s.update=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],r),t}),e.default=s,t.exports=e.default}),function(){"use strict";var t=document.querySelectorAll("textarea:not(.code)");t.length&&autosize(t);var e=document.querySelector("body");document.getElementById("lightswitch").addEventListener("click",function(t){e.classList.contains("darkmode")?(e.classList.remove("darkmode"),localStorage.setItem("prefers-color-scheme","light")):(e.classList.add("darkmode"),localStorage.setItem("prefers-color-scheme","dark")),t.preventDefault()})}();