(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require("./module/plugin");

var storage = chrome.storage.local;

var $menuatas = $(".meta-header-bar.mobile-hide ul")
,	$menukiri = $(".meta-header-bar.log-bar > ul")
,	login = $("#menu-right #after-login #dlabel-accordion").html()

if(login) {
	login = login.split(", ")[1].split(" ")[0];
} else {
	login = null;
}

console.log(login);

$("body").addClass("clean-theme");
$(".user-avatar img.photo").removeAttr("height").removeAttr("width");


//require('./module/widget').init(storage);
require('./module/thread').init(storage, login);
//require('./module/autosundul').init(storage, login);


},{"./module/plugin":2,"./module/thread":3}],2:[function(require,module,exports){
/*!
 * Tools.js
 * jQuery Tools v1.2.6 - The missing UI library for the Web
 * 
 * tabs/tabs.js
 * tabs/tabs.slideshow.js
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/
 * 
 */
(function(a){a.tools=a.tools||{version:"v1.2.6"},a.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialIndex:0,event:"click",rotate:!1,slideUpSpeed:400,slideDownSpeed:400,history:!1},addEffect:function(a,c){b[a]=c}};var b={"default":function(a,b){this.getPanes().hide().eq(a).show(),b.call()},fade:function(a,b){var c=this.getConf(),d=c.fadeOutSpeed,e=this.getPanes();d?e.fadeOut(d):e.hide(),e.eq(a).fadeIn(c.fadeInSpeed,b)},slide:function(a,b){var c=this.getConf();this.getPanes().slideUp(c.slideUpSpeed),this.getPanes().eq(a).slideDown(c.slideDownSpeed,b)},ajax:function(a,b){this.getPanes().eq(0).load(this.getTabs().eq(a).attr("href"),b)}},c,d;a.tools.tabs.addEffect("horizontal",function(b,e){if(!c){var f=this.getPanes().eq(b),g=this.getCurrentPane();d||(d=this.getPanes().eq(0).width()),c=!0,f.show(),g.animate({width:0},{step:function(a){f.css("width",d-a)},complete:function(){a(this).hide(),e.call(),c=!1}}),g.length||(e.call(),c=!1)}});function e(c,d,e){var f=this,g=c.add(this),h=c.find(e.tabs),i=d.jquery?d:c.children(d),j;h.length||(h=c.children()),i.length||(i=c.parent().find(d)),i.length||(i=a(d)),a.extend(this,{click:function(c,d){var i=h.eq(c);typeof c=="string"&&c.replace("#","")&&(i=h.filter("[href*="+c.replace("#","")+"]"),c=Math.max(h.index(i),0));if(e.rotate){var k=h.length-1;if(c<0)return f.click(k,d);if(c>k)return f.click(0,d)}if(!i.length){if(j>=0)return f;c=e.initialIndex,i=h.eq(c)}if(c===j)return f;d=d||a.Event(),d.type="onBeforeClick",g.trigger(d,[c]);if(!d.isDefaultPrevented()){b[e.effect].call(f,c,function(){j=c,d.type="onClick",g.trigger(d,[c])}),h.removeClass(e.current),i.addClass(e.current);return f}},getConf:function(){return e},getTabs:function(){return h},getPanes:function(){return i},getCurrentPane:function(){return i.eq(j)},getCurrentTab:function(){return h.eq(j)},getIndex:function(){return j},next:function(){return f.click(j+1)},prev:function(){return f.click(j-1)},destroy:function(){h.unbind(e.event).removeClass(e.current),i.find("a[href^=#]").unbind("click.T");return f}}),a.each("onBeforeClick,onClick".split(","),function(b,c){a.isFunction(e[c])&&a(f).bind(c,e[c]),f[c]=function(b){b&&a(f).bind(c,b);return f}}),e.history&&a.fn.history&&(a.tools.history.init(h),e.event="history"),h.each(function(b){a(this).bind(e.event,function(a){f.click(b,a);return a.preventDefault()})}),i.find("a[href^=#]").bind("click.T",function(b){f.click(a(this).attr("href"),b)}),location.hash&&e.tabs=="a"&&c.find("[href="+location.hash+"]").length?f.click(location.hash):(e.initialIndex===0||e.initialIndex>0)&&f.click(e.initialIndex)}a.fn.tabs=function(b,c){var d=this.data("tabs");d&&(d.destroy(),this.removeData("tabs")),a.isFunction(c)&&(c={onBeforeClick:c}),c=a.extend({},a.tools.tabs.conf,c),this.each(function(){d=new e(a(this),b,c),a(this).data("tabs",d)});return c.api?d:this}})(jQuery);
(function(a){var b;b=a.tools.tabs.slideshow={conf:{next:".forward",prev:".backward",disabledClass:"disabled",autoplay:!1,autopause:!0,interval:3e3,clickable:!0,api:!1}};function c(b,c){var d=this,e=b.add(this),f=b.data("tabs"),g,h=!0;function i(c){var d=a(c);return d.length<2?d:b.parent().find(c)}var j=i(c.next).click(function(){f.next()}),k=i(c.prev).click(function(){f.prev()});function l(){g=setTimeout(function(){f.next()},c.interval)}a.extend(d,{getTabs:function(){return f},getConf:function(){return c},play:function(){if(g)return d;var b=a.Event("onBeforePlay");e.trigger(b);if(b.isDefaultPrevented())return d;h=!1,e.trigger("onPlay"),e.bind("onClick",l),l();return d},pause:function(){if(!g)return d;var b=a.Event("onBeforePause");e.trigger(b);if(b.isDefaultPrevented())return d;g=clearTimeout(g),e.trigger("onPause"),e.unbind("onClick",l);return d},resume:function(){h||d.play()},stop:function(){d.pause(),h=!0}}),a.each("onBeforePlay,onPlay,onBeforePause,onPause".split(","),function(b,e){a.isFunction(c[e])&&a(d).bind(e,c[e]),d[e]=function(b){return a(d).bind(e,b)}}),c.autopause&&f.getTabs().add(j).add(k).add(f.getPanes()).hover(d.pause,d.resume),c.autoplay&&d.play(),c.clickable&&f.getPanes().click(function(){f.next()});if(!f.getConf().rotate){var m=c.disabledClass;f.getIndex()||k.addClass(m),f.onBeforeClick(function(a,b){k.toggleClass(m,!b),j.toggleClass(m,b==f.getTabs().length-1)})}}a.fn.slideshow=function(d){var e=this.data("slideshow");if(e)return e;d=a.extend({},b.conf,d),this.each(function(){e=new c(a(this),d),a(this).data("slideshow",e)});return d.api?e:this}})(jQuery);

/*! ===========================================================
 * tooltip.js
 * bootstrap-tooltip.js v2.0.2
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

!function(a){"use strict";var b=function(a,b){this.init("tooltip",a,b)};b.prototype={constructor:b,init:function(b,c,d){var e,f;this.type=b;this.$element=a(c);this.options=this.getOptions(d);this.enabled=true;if(this.options.trigger!="manual"){e=this.options.trigger=="hover"?"mouseenter":"focus";f=this.options.trigger=="hover"?"mouseleave":"blur";this.$element.on(e,this.options.selector,a.proxy(this.enter,this));this.$element.on(f,this.options.selector,a.proxy(this.leave,this))}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(b){b=a.extend({},a.fn[this.type].defaults,b,this.$element.data());if(b.delay&&typeof b.delay=="number"){b.delay={show:b.delay,hide:b.delay}}return b},enter:function(b){var c=a(b.currentTarget)[this.type](this._options).data(this.type);if(!c.options.delay||!c.options.delay.show){c.show()}else{c.hoverState="in";setTimeout(function(){if(c.hoverState=="in"){c.show()}},c.options.delay.show)}},leave:function(b){var c=a(b.currentTarget)[this.type](this._options).data(this.type);if(!c.options.delay||!c.options.delay.hide){c.hide()}else{c.hoverState="out";setTimeout(function(){if(c.hoverState=="out"){c.hide()}},c.options.delay.hide)}},show:function(){var a,b,c,d,e,f,g;if(this.hasContent()&&this.enabled){a=this.tip();this.setContent();if(this.options.animation){a.addClass("fade")}f=typeof this.options.placement=="function"?this.options.placement.call(this,a[0],this.$element[0]):this.options.placement;b=/in/.test(f);a.remove().css({top:0,left:0,display:"block"}).appendTo(b?this.$element:document.body);c=this.getPosition(b);d=a[0].offsetWidth;e=a[0].offsetHeight;switch(b?f.split(" ")[1]:f){case"bottom":g={top:c.top+c.height,left:c.left+c.width/2-d/2};break;case"top":g={top:c.top-e,left:c.left+c.width/2-d/2};break;case"left":g={top:c.top+c.height/2-e/2,left:c.left-d};break;case"right":g={top:c.top+c.height/2-e/2,left:c.left+c.width};break}a.css(g).addClass(f).addClass("in")}},setContent:function(){var a=this.tip();a.find(".tooltip-inner").html(this.getTitle());a.removeClass("fade in top bottom left right")},hide:function(){function d(){var b=setTimeout(function(){c.off(a.support.transition.end).remove()},500);c.one(a.support.transition.end,function(){clearTimeout(b);c.remove()})}var b=this,c=this.tip();c.removeClass("in");a.support.transition&&this.$tip.hasClass("fade")?d():c.remove()},fixTitle:function(){var a=this.$element;if(a.attr("title")||typeof a.attr("data-original-title")!="string"){a.attr("data-original-title",a.attr("title")||"").removeAttr("title")}},hasContent:function(){return this.getTitle()},getPosition:function(b){return a.extend({},b?{top:0,left:0}:this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var a,b=this.$element,c=this.options;a=b.attr("data-original-title")||(typeof c.title=="function"?c.title.call(b[0]):c.title);a=(a||"").toString().replace(/(^\s*|\s*$)/,"");return a},tip:function(){return this.$tip=this.$tip||a(this.options.template)},validate:function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null}},enable:function(){this.enabled=true},disable:function(){this.enabled=false},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(){this[this.tip().hasClass("in")?"hide":"show"]()}};a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("tooltip"),f=typeof c=="object"&&c;if(!e)d.data("tooltip",e=new b(this,f));if(typeof c=="string")e[c]()})};a.fn.tooltip.Constructor=b;a.fn.tooltip.defaults={animation:true,delay:0,selector:false,placement:"top",trigger:"hover",title:"",template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'}}(window.jQuery);!function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype,{constructor:b,setContent:function(){var b=this.tip(),c=this.getTitle(),d=this.getContent();b.find(".popover-title")[a.type(c)=="object"?"append":"html"](c);b.find(".popover-content > *")[a.type(d)=="object"?"append":"html"](d);b.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var a,b=this.$element,c=this.options;a=b.attr("data-content")||(typeof c.content=="function"?c.content.call(b[0]):c.content);a=a.toString().replace(/(^\s*|\s*$)/,"");return a},tip:function(){if(!this.$tip){this.$tip=a(this.options.template)}return this.$tip}});a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("popover"),f=typeof c=="object"&&c;if(!e)d.data("popover",e=new b(this,f));if(typeof c=="string")e[c]()})};a.fn.popover.Constructor=b;a.fn.popover.defaults=a.extend({},a.fn.tooltip.defaults,{placement:"right",content:"",template:'<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'})}(window.jQuery);
},{}],3:[function(require,module,exports){
module.exports = {
	init: function (storage, login) {
		var _t = this;
			if(login) {
			$('.row[id^="post"]').each(function(a,b) {
				var _p 		= $(this)
				,	author 	= _p.find(".user-name > a.nickname").html()
				;
				_t.myPost(_p, author, login);
				_t.meQuote(_p, author, login);
				
			});
		}
	},

	myPost: function(e, author, me) {
		
		if(" " +me+ " " == author) {
			e.addClass("my-post");
		}
	},

	meQuote: function(e, author, me) {
		e.find(".entry > .post-quote").each(function(a,b) {
			var itu = $(this)
			,	author = itu.find("span:last-child b").html();
			if(author == me) {
				e.addClass("my-quote");
				itu.find("> span:last-child").addClass('my-qt');
				console.log("my quote");
			}
		});
	}
};
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzb3VyY2UvanMvbWFpbiIsInNvdXJjZS9qcy9tb2R1bGUvcGx1Z2luLmpzIiwic291cmNlL2pzL21vZHVsZS90aHJlYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInJlcXVpcmUoXCIuL21vZHVsZS9wbHVnaW5cIik7XG5cbnZhciBzdG9yYWdlID0gY2hyb21lLnN0b3JhZ2UubG9jYWw7XG5cbnZhciAkbWVudWF0YXMgPSAkKFwiLm1ldGEtaGVhZGVyLWJhci5tb2JpbGUtaGlkZSB1bFwiKVxuLFx0JG1lbnVraXJpID0gJChcIi5tZXRhLWhlYWRlci1iYXIubG9nLWJhciA+IHVsXCIpXG4sXHRsb2dpbiA9ICQoXCIjbWVudS1yaWdodCAjYWZ0ZXItbG9naW4gI2RsYWJlbC1hY2NvcmRpb25cIikuaHRtbCgpXG5cbmlmKGxvZ2luKSB7XG5cdGxvZ2luID0gbG9naW4uc3BsaXQoXCIsIFwiKVsxXS5zcGxpdChcIiBcIilbMF07XG59IGVsc2Uge1xuXHRsb2dpbiA9IG51bGw7XG59XG5cbmNvbnNvbGUubG9nKGxvZ2luKTtcblxuJChcImJvZHlcIikuYWRkQ2xhc3MoXCJjbGVhbi10aGVtZVwiKTtcbiQoXCIudXNlci1hdmF0YXIgaW1nLnBob3RvXCIpLnJlbW92ZUF0dHIoXCJoZWlnaHRcIikucmVtb3ZlQXR0cihcIndpZHRoXCIpO1xuXG5cbi8vcmVxdWlyZSgnLi9tb2R1bGUvd2lkZ2V0JykuaW5pdChzdG9yYWdlKTtcbnJlcXVpcmUoJy4vbW9kdWxlL3RocmVhZCcpLmluaXQoc3RvcmFnZSwgbG9naW4pO1xuLy9yZXF1aXJlKCcuL21vZHVsZS9hdXRvc3VuZHVsJykuaW5pdChzdG9yYWdlLCBsb2dpbik7XG5cbiIsIi8qIVxuICogVG9vbHMuanNcbiAqIGpRdWVyeSBUb29scyB2MS4yLjYgLSBUaGUgbWlzc2luZyBVSSBsaWJyYXJ5IGZvciB0aGUgV2ViXG4gKiBcbiAqIHRhYnMvdGFicy5qc1xuICogdGFicy90YWJzLnNsaWRlc2hvdy5qc1xuICogXG4gKiBOTyBDT1BZUklHSFRTIE9SIExJQ0VOU0VTLiBETyBXSEFUIFlPVSBMSUtFLlxuICogXG4gKiBodHRwOi8vZmxvd3BsYXllci5vcmcvdG9vbHMvXG4gKiBcbiAqL1xuKGZ1bmN0aW9uKGEpe2EudG9vbHM9YS50b29sc3x8e3ZlcnNpb246XCJ2MS4yLjZcIn0sYS50b29scy50YWJzPXtjb25mOnt0YWJzOlwiYVwiLGN1cnJlbnQ6XCJjdXJyZW50XCIsb25CZWZvcmVDbGljazpudWxsLG9uQ2xpY2s6bnVsbCxlZmZlY3Q6XCJkZWZhdWx0XCIsaW5pdGlhbEluZGV4OjAsZXZlbnQ6XCJjbGlja1wiLHJvdGF0ZTohMSxzbGlkZVVwU3BlZWQ6NDAwLHNsaWRlRG93blNwZWVkOjQwMCxoaXN0b3J5OiExfSxhZGRFZmZlY3Q6ZnVuY3Rpb24oYSxjKXtiW2FdPWN9fTt2YXIgYj17XCJkZWZhdWx0XCI6ZnVuY3Rpb24oYSxiKXt0aGlzLmdldFBhbmVzKCkuaGlkZSgpLmVxKGEpLnNob3coKSxiLmNhbGwoKX0sZmFkZTpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuZ2V0Q29uZigpLGQ9Yy5mYWRlT3V0U3BlZWQsZT10aGlzLmdldFBhbmVzKCk7ZD9lLmZhZGVPdXQoZCk6ZS5oaWRlKCksZS5lcShhKS5mYWRlSW4oYy5mYWRlSW5TcGVlZCxiKX0sc2xpZGU6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmdldENvbmYoKTt0aGlzLmdldFBhbmVzKCkuc2xpZGVVcChjLnNsaWRlVXBTcGVlZCksdGhpcy5nZXRQYW5lcygpLmVxKGEpLnNsaWRlRG93bihjLnNsaWRlRG93blNwZWVkLGIpfSxhamF4OmZ1bmN0aW9uKGEsYil7dGhpcy5nZXRQYW5lcygpLmVxKDApLmxvYWQodGhpcy5nZXRUYWJzKCkuZXEoYSkuYXR0cihcImhyZWZcIiksYil9fSxjLGQ7YS50b29scy50YWJzLmFkZEVmZmVjdChcImhvcml6b250YWxcIixmdW5jdGlvbihiLGUpe2lmKCFjKXt2YXIgZj10aGlzLmdldFBhbmVzKCkuZXEoYiksZz10aGlzLmdldEN1cnJlbnRQYW5lKCk7ZHx8KGQ9dGhpcy5nZXRQYW5lcygpLmVxKDApLndpZHRoKCkpLGM9ITAsZi5zaG93KCksZy5hbmltYXRlKHt3aWR0aDowfSx7c3RlcDpmdW5jdGlvbihhKXtmLmNzcyhcIndpZHRoXCIsZC1hKX0sY29tcGxldGU6ZnVuY3Rpb24oKXthKHRoaXMpLmhpZGUoKSxlLmNhbGwoKSxjPSExfX0pLGcubGVuZ3RofHwoZS5jYWxsKCksYz0hMSl9fSk7ZnVuY3Rpb24gZShjLGQsZSl7dmFyIGY9dGhpcyxnPWMuYWRkKHRoaXMpLGg9Yy5maW5kKGUudGFicyksaT1kLmpxdWVyeT9kOmMuY2hpbGRyZW4oZCksajtoLmxlbmd0aHx8KGg9Yy5jaGlsZHJlbigpKSxpLmxlbmd0aHx8KGk9Yy5wYXJlbnQoKS5maW5kKGQpKSxpLmxlbmd0aHx8KGk9YShkKSksYS5leHRlbmQodGhpcyx7Y2xpY2s6ZnVuY3Rpb24oYyxkKXt2YXIgaT1oLmVxKGMpO3R5cGVvZiBjPT1cInN0cmluZ1wiJiZjLnJlcGxhY2UoXCIjXCIsXCJcIikmJihpPWguZmlsdGVyKFwiW2hyZWYqPVwiK2MucmVwbGFjZShcIiNcIixcIlwiKStcIl1cIiksYz1NYXRoLm1heChoLmluZGV4KGkpLDApKTtpZihlLnJvdGF0ZSl7dmFyIGs9aC5sZW5ndGgtMTtpZihjPDApcmV0dXJuIGYuY2xpY2soayxkKTtpZihjPmspcmV0dXJuIGYuY2xpY2soMCxkKX1pZighaS5sZW5ndGgpe2lmKGo+PTApcmV0dXJuIGY7Yz1lLmluaXRpYWxJbmRleCxpPWguZXEoYyl9aWYoYz09PWopcmV0dXJuIGY7ZD1kfHxhLkV2ZW50KCksZC50eXBlPVwib25CZWZvcmVDbGlja1wiLGcudHJpZ2dlcihkLFtjXSk7aWYoIWQuaXNEZWZhdWx0UHJldmVudGVkKCkpe2JbZS5lZmZlY3RdLmNhbGwoZixjLGZ1bmN0aW9uKCl7aj1jLGQudHlwZT1cIm9uQ2xpY2tcIixnLnRyaWdnZXIoZCxbY10pfSksaC5yZW1vdmVDbGFzcyhlLmN1cnJlbnQpLGkuYWRkQ2xhc3MoZS5jdXJyZW50KTtyZXR1cm4gZn19LGdldENvbmY6ZnVuY3Rpb24oKXtyZXR1cm4gZX0sZ2V0VGFiczpmdW5jdGlvbigpe3JldHVybiBofSxnZXRQYW5lczpmdW5jdGlvbigpe3JldHVybiBpfSxnZXRDdXJyZW50UGFuZTpmdW5jdGlvbigpe3JldHVybiBpLmVxKGopfSxnZXRDdXJyZW50VGFiOmZ1bmN0aW9uKCl7cmV0dXJuIGguZXEoail9LGdldEluZGV4OmZ1bmN0aW9uKCl7cmV0dXJuIGp9LG5leHQ6ZnVuY3Rpb24oKXtyZXR1cm4gZi5jbGljayhqKzEpfSxwcmV2OmZ1bmN0aW9uKCl7cmV0dXJuIGYuY2xpY2soai0xKX0sZGVzdHJveTpmdW5jdGlvbigpe2gudW5iaW5kKGUuZXZlbnQpLnJlbW92ZUNsYXNzKGUuY3VycmVudCksaS5maW5kKFwiYVtocmVmXj0jXVwiKS51bmJpbmQoXCJjbGljay5UXCIpO3JldHVybiBmfX0pLGEuZWFjaChcIm9uQmVmb3JlQ2xpY2ssb25DbGlja1wiLnNwbGl0KFwiLFwiKSxmdW5jdGlvbihiLGMpe2EuaXNGdW5jdGlvbihlW2NdKSYmYShmKS5iaW5kKGMsZVtjXSksZltjXT1mdW5jdGlvbihiKXtiJiZhKGYpLmJpbmQoYyxiKTtyZXR1cm4gZn19KSxlLmhpc3RvcnkmJmEuZm4uaGlzdG9yeSYmKGEudG9vbHMuaGlzdG9yeS5pbml0KGgpLGUuZXZlbnQ9XCJoaXN0b3J5XCIpLGguZWFjaChmdW5jdGlvbihiKXthKHRoaXMpLmJpbmQoZS5ldmVudCxmdW5jdGlvbihhKXtmLmNsaWNrKGIsYSk7cmV0dXJuIGEucHJldmVudERlZmF1bHQoKX0pfSksaS5maW5kKFwiYVtocmVmXj0jXVwiKS5iaW5kKFwiY2xpY2suVFwiLGZ1bmN0aW9uKGIpe2YuY2xpY2soYSh0aGlzKS5hdHRyKFwiaHJlZlwiKSxiKX0pLGxvY2F0aW9uLmhhc2gmJmUudGFicz09XCJhXCImJmMuZmluZChcIltocmVmPVwiK2xvY2F0aW9uLmhhc2grXCJdXCIpLmxlbmd0aD9mLmNsaWNrKGxvY2F0aW9uLmhhc2gpOihlLmluaXRpYWxJbmRleD09PTB8fGUuaW5pdGlhbEluZGV4PjApJiZmLmNsaWNrKGUuaW5pdGlhbEluZGV4KX1hLmZuLnRhYnM9ZnVuY3Rpb24oYixjKXt2YXIgZD10aGlzLmRhdGEoXCJ0YWJzXCIpO2QmJihkLmRlc3Ryb3koKSx0aGlzLnJlbW92ZURhdGEoXCJ0YWJzXCIpKSxhLmlzRnVuY3Rpb24oYykmJihjPXtvbkJlZm9yZUNsaWNrOmN9KSxjPWEuZXh0ZW5kKHt9LGEudG9vbHMudGFicy5jb25mLGMpLHRoaXMuZWFjaChmdW5jdGlvbigpe2Q9bmV3IGUoYSh0aGlzKSxiLGMpLGEodGhpcykuZGF0YShcInRhYnNcIixkKX0pO3JldHVybiBjLmFwaT9kOnRoaXN9fSkoalF1ZXJ5KTtcbihmdW5jdGlvbihhKXt2YXIgYjtiPWEudG9vbHMudGFicy5zbGlkZXNob3c9e2NvbmY6e25leHQ6XCIuZm9yd2FyZFwiLHByZXY6XCIuYmFja3dhcmRcIixkaXNhYmxlZENsYXNzOlwiZGlzYWJsZWRcIixhdXRvcGxheTohMSxhdXRvcGF1c2U6ITAsaW50ZXJ2YWw6M2UzLGNsaWNrYWJsZTohMCxhcGk6ITF9fTtmdW5jdGlvbiBjKGIsYyl7dmFyIGQ9dGhpcyxlPWIuYWRkKHRoaXMpLGY9Yi5kYXRhKFwidGFic1wiKSxnLGg9ITA7ZnVuY3Rpb24gaShjKXt2YXIgZD1hKGMpO3JldHVybiBkLmxlbmd0aDwyP2Q6Yi5wYXJlbnQoKS5maW5kKGMpfXZhciBqPWkoYy5uZXh0KS5jbGljayhmdW5jdGlvbigpe2YubmV4dCgpfSksaz1pKGMucHJldikuY2xpY2soZnVuY3Rpb24oKXtmLnByZXYoKX0pO2Z1bmN0aW9uIGwoKXtnPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtmLm5leHQoKX0sYy5pbnRlcnZhbCl9YS5leHRlbmQoZCx7Z2V0VGFiczpmdW5jdGlvbigpe3JldHVybiBmfSxnZXRDb25mOmZ1bmN0aW9uKCl7cmV0dXJuIGN9LHBsYXk6ZnVuY3Rpb24oKXtpZihnKXJldHVybiBkO3ZhciBiPWEuRXZlbnQoXCJvbkJlZm9yZVBsYXlcIik7ZS50cmlnZ2VyKGIpO2lmKGIuaXNEZWZhdWx0UHJldmVudGVkKCkpcmV0dXJuIGQ7aD0hMSxlLnRyaWdnZXIoXCJvblBsYXlcIiksZS5iaW5kKFwib25DbGlja1wiLGwpLGwoKTtyZXR1cm4gZH0scGF1c2U6ZnVuY3Rpb24oKXtpZighZylyZXR1cm4gZDt2YXIgYj1hLkV2ZW50KFwib25CZWZvcmVQYXVzZVwiKTtlLnRyaWdnZXIoYik7aWYoYi5pc0RlZmF1bHRQcmV2ZW50ZWQoKSlyZXR1cm4gZDtnPWNsZWFyVGltZW91dChnKSxlLnRyaWdnZXIoXCJvblBhdXNlXCIpLGUudW5iaW5kKFwib25DbGlja1wiLGwpO3JldHVybiBkfSxyZXN1bWU6ZnVuY3Rpb24oKXtofHxkLnBsYXkoKX0sc3RvcDpmdW5jdGlvbigpe2QucGF1c2UoKSxoPSEwfX0pLGEuZWFjaChcIm9uQmVmb3JlUGxheSxvblBsYXksb25CZWZvcmVQYXVzZSxvblBhdXNlXCIuc3BsaXQoXCIsXCIpLGZ1bmN0aW9uKGIsZSl7YS5pc0Z1bmN0aW9uKGNbZV0pJiZhKGQpLmJpbmQoZSxjW2VdKSxkW2VdPWZ1bmN0aW9uKGIpe3JldHVybiBhKGQpLmJpbmQoZSxiKX19KSxjLmF1dG9wYXVzZSYmZi5nZXRUYWJzKCkuYWRkKGopLmFkZChrKS5hZGQoZi5nZXRQYW5lcygpKS5ob3ZlcihkLnBhdXNlLGQucmVzdW1lKSxjLmF1dG9wbGF5JiZkLnBsYXkoKSxjLmNsaWNrYWJsZSYmZi5nZXRQYW5lcygpLmNsaWNrKGZ1bmN0aW9uKCl7Zi5uZXh0KCl9KTtpZighZi5nZXRDb25mKCkucm90YXRlKXt2YXIgbT1jLmRpc2FibGVkQ2xhc3M7Zi5nZXRJbmRleCgpfHxrLmFkZENsYXNzKG0pLGYub25CZWZvcmVDbGljayhmdW5jdGlvbihhLGIpe2sudG9nZ2xlQ2xhc3MobSwhYiksai50b2dnbGVDbGFzcyhtLGI9PWYuZ2V0VGFicygpLmxlbmd0aC0xKX0pfX1hLmZuLnNsaWRlc2hvdz1mdW5jdGlvbihkKXt2YXIgZT10aGlzLmRhdGEoXCJzbGlkZXNob3dcIik7aWYoZSlyZXR1cm4gZTtkPWEuZXh0ZW5kKHt9LGIuY29uZixkKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtlPW5ldyBjKGEodGhpcyksZCksYSh0aGlzKS5kYXRhKFwic2xpZGVzaG93XCIsZSl9KTtyZXR1cm4gZC5hcGk/ZTp0aGlzfX0pKGpRdWVyeSk7XG5cbi8qISA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogdG9vbHRpcC5qc1xuICogYm9vdHN0cmFwLXRvb2x0aXAuanMgdjIuMC4yXG4gKiBodHRwOi8vdHdpdHRlci5naXRodWIuY29tL2Jvb3RzdHJhcC9qYXZhc2NyaXB0Lmh0bWwjdG9vbHRpcHNcbiAqIEluc3BpcmVkIGJ5IHRoZSBvcmlnaW5hbCBqUXVlcnkudGlwc3kgYnkgSmFzb24gRnJhbWVcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb3B5cmlnaHQgMjAxMiBUd2l0dGVyLCBJbmMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbiFmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjt2YXIgYj1mdW5jdGlvbihhLGIpe3RoaXMuaW5pdChcInRvb2x0aXBcIixhLGIpfTtiLnByb3RvdHlwZT17Y29uc3RydWN0b3I6Yixpbml0OmZ1bmN0aW9uKGIsYyxkKXt2YXIgZSxmO3RoaXMudHlwZT1iO3RoaXMuJGVsZW1lbnQ9YShjKTt0aGlzLm9wdGlvbnM9dGhpcy5nZXRPcHRpb25zKGQpO3RoaXMuZW5hYmxlZD10cnVlO2lmKHRoaXMub3B0aW9ucy50cmlnZ2VyIT1cIm1hbnVhbFwiKXtlPXRoaXMub3B0aW9ucy50cmlnZ2VyPT1cImhvdmVyXCI/XCJtb3VzZWVudGVyXCI6XCJmb2N1c1wiO2Y9dGhpcy5vcHRpb25zLnRyaWdnZXI9PVwiaG92ZXJcIj9cIm1vdXNlbGVhdmVcIjpcImJsdXJcIjt0aGlzLiRlbGVtZW50Lm9uKGUsdGhpcy5vcHRpb25zLnNlbGVjdG9yLGEucHJveHkodGhpcy5lbnRlcix0aGlzKSk7dGhpcy4kZWxlbWVudC5vbihmLHRoaXMub3B0aW9ucy5zZWxlY3RvcixhLnByb3h5KHRoaXMubGVhdmUsdGhpcykpfXRoaXMub3B0aW9ucy5zZWxlY3Rvcj90aGlzLl9vcHRpb25zPWEuZXh0ZW5kKHt9LHRoaXMub3B0aW9ucyx7dHJpZ2dlcjpcIm1hbnVhbFwiLHNlbGVjdG9yOlwiXCJ9KTp0aGlzLmZpeFRpdGxlKCl9LGdldE9wdGlvbnM6ZnVuY3Rpb24oYil7Yj1hLmV4dGVuZCh7fSxhLmZuW3RoaXMudHlwZV0uZGVmYXVsdHMsYix0aGlzLiRlbGVtZW50LmRhdGEoKSk7aWYoYi5kZWxheSYmdHlwZW9mIGIuZGVsYXk9PVwibnVtYmVyXCIpe2IuZGVsYXk9e3Nob3c6Yi5kZWxheSxoaWRlOmIuZGVsYXl9fXJldHVybiBifSxlbnRlcjpmdW5jdGlvbihiKXt2YXIgYz1hKGIuY3VycmVudFRhcmdldClbdGhpcy50eXBlXSh0aGlzLl9vcHRpb25zKS5kYXRhKHRoaXMudHlwZSk7aWYoIWMub3B0aW9ucy5kZWxheXx8IWMub3B0aW9ucy5kZWxheS5zaG93KXtjLnNob3coKX1lbHNle2MuaG92ZXJTdGF0ZT1cImluXCI7c2V0VGltZW91dChmdW5jdGlvbigpe2lmKGMuaG92ZXJTdGF0ZT09XCJpblwiKXtjLnNob3coKX19LGMub3B0aW9ucy5kZWxheS5zaG93KX19LGxlYXZlOmZ1bmN0aW9uKGIpe3ZhciBjPWEoYi5jdXJyZW50VGFyZ2V0KVt0aGlzLnR5cGVdKHRoaXMuX29wdGlvbnMpLmRhdGEodGhpcy50eXBlKTtpZighYy5vcHRpb25zLmRlbGF5fHwhYy5vcHRpb25zLmRlbGF5LmhpZGUpe2MuaGlkZSgpfWVsc2V7Yy5ob3ZlclN0YXRlPVwib3V0XCI7c2V0VGltZW91dChmdW5jdGlvbigpe2lmKGMuaG92ZXJTdGF0ZT09XCJvdXRcIil7Yy5oaWRlKCl9fSxjLm9wdGlvbnMuZGVsYXkuaGlkZSl9fSxzaG93OmZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZSxmLGc7aWYodGhpcy5oYXNDb250ZW50KCkmJnRoaXMuZW5hYmxlZCl7YT10aGlzLnRpcCgpO3RoaXMuc2V0Q29udGVudCgpO2lmKHRoaXMub3B0aW9ucy5hbmltYXRpb24pe2EuYWRkQ2xhc3MoXCJmYWRlXCIpfWY9dHlwZW9mIHRoaXMub3B0aW9ucy5wbGFjZW1lbnQ9PVwiZnVuY3Rpb25cIj90aGlzLm9wdGlvbnMucGxhY2VtZW50LmNhbGwodGhpcyxhWzBdLHRoaXMuJGVsZW1lbnRbMF0pOnRoaXMub3B0aW9ucy5wbGFjZW1lbnQ7Yj0vaW4vLnRlc3QoZik7YS5yZW1vdmUoKS5jc3Moe3RvcDowLGxlZnQ6MCxkaXNwbGF5OlwiYmxvY2tcIn0pLmFwcGVuZFRvKGI/dGhpcy4kZWxlbWVudDpkb2N1bWVudC5ib2R5KTtjPXRoaXMuZ2V0UG9zaXRpb24oYik7ZD1hWzBdLm9mZnNldFdpZHRoO2U9YVswXS5vZmZzZXRIZWlnaHQ7c3dpdGNoKGI/Zi5zcGxpdChcIiBcIilbMV06Zil7Y2FzZVwiYm90dG9tXCI6Zz17dG9wOmMudG9wK2MuaGVpZ2h0LGxlZnQ6Yy5sZWZ0K2Mud2lkdGgvMi1kLzJ9O2JyZWFrO2Nhc2VcInRvcFwiOmc9e3RvcDpjLnRvcC1lLGxlZnQ6Yy5sZWZ0K2Mud2lkdGgvMi1kLzJ9O2JyZWFrO2Nhc2VcImxlZnRcIjpnPXt0b3A6Yy50b3ArYy5oZWlnaHQvMi1lLzIsbGVmdDpjLmxlZnQtZH07YnJlYWs7Y2FzZVwicmlnaHRcIjpnPXt0b3A6Yy50b3ArYy5oZWlnaHQvMi1lLzIsbGVmdDpjLmxlZnQrYy53aWR0aH07YnJlYWt9YS5jc3MoZykuYWRkQ2xhc3MoZikuYWRkQ2xhc3MoXCJpblwiKX19LHNldENvbnRlbnQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLnRpcCgpO2EuZmluZChcIi50b29sdGlwLWlubmVyXCIpLmh0bWwodGhpcy5nZXRUaXRsZSgpKTthLnJlbW92ZUNsYXNzKFwiZmFkZSBpbiB0b3AgYm90dG9tIGxlZnQgcmlnaHRcIil9LGhpZGU6ZnVuY3Rpb24oKXtmdW5jdGlvbiBkKCl7dmFyIGI9c2V0VGltZW91dChmdW5jdGlvbigpe2Mub2ZmKGEuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCkucmVtb3ZlKCl9LDUwMCk7Yy5vbmUoYS5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLGZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KGIpO2MucmVtb3ZlKCl9KX12YXIgYj10aGlzLGM9dGhpcy50aXAoKTtjLnJlbW92ZUNsYXNzKFwiaW5cIik7YS5zdXBwb3J0LnRyYW5zaXRpb24mJnRoaXMuJHRpcC5oYXNDbGFzcyhcImZhZGVcIik/ZCgpOmMucmVtb3ZlKCl9LGZpeFRpdGxlOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy4kZWxlbWVudDtpZihhLmF0dHIoXCJ0aXRsZVwiKXx8dHlwZW9mIGEuYXR0cihcImRhdGEtb3JpZ2luYWwtdGl0bGVcIikhPVwic3RyaW5nXCIpe2EuYXR0cihcImRhdGEtb3JpZ2luYWwtdGl0bGVcIixhLmF0dHIoXCJ0aXRsZVwiKXx8XCJcIikucmVtb3ZlQXR0cihcInRpdGxlXCIpfX0saGFzQ29udGVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmdldFRpdGxlKCl9LGdldFBvc2l0aW9uOmZ1bmN0aW9uKGIpe3JldHVybiBhLmV4dGVuZCh7fSxiP3t0b3A6MCxsZWZ0OjB9OnRoaXMuJGVsZW1lbnQub2Zmc2V0KCkse3dpZHRoOnRoaXMuJGVsZW1lbnRbMF0ub2Zmc2V0V2lkdGgsaGVpZ2h0OnRoaXMuJGVsZW1lbnRbMF0ub2Zmc2V0SGVpZ2h0fSl9LGdldFRpdGxlOmZ1bmN0aW9uKCl7dmFyIGEsYj10aGlzLiRlbGVtZW50LGM9dGhpcy5vcHRpb25zO2E9Yi5hdHRyKFwiZGF0YS1vcmlnaW5hbC10aXRsZVwiKXx8KHR5cGVvZiBjLnRpdGxlPT1cImZ1bmN0aW9uXCI/Yy50aXRsZS5jYWxsKGJbMF0pOmMudGl0bGUpO2E9KGF8fFwiXCIpLnRvU3RyaW5nKCkucmVwbGFjZSgvKF5cXHMqfFxccyokKS8sXCJcIik7cmV0dXJuIGF9LHRpcDpmdW5jdGlvbigpe3JldHVybiB0aGlzLiR0aXA9dGhpcy4kdGlwfHxhKHRoaXMub3B0aW9ucy50ZW1wbGF0ZSl9LHZhbGlkYXRlOmZ1bmN0aW9uKCl7aWYoIXRoaXMuJGVsZW1lbnRbMF0ucGFyZW50Tm9kZSl7dGhpcy5oaWRlKCk7dGhpcy4kZWxlbWVudD1udWxsO3RoaXMub3B0aW9ucz1udWxsfX0sZW5hYmxlOmZ1bmN0aW9uKCl7dGhpcy5lbmFibGVkPXRydWV9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLmVuYWJsZWQ9ZmFsc2V9LHRvZ2dsZUVuYWJsZWQ6ZnVuY3Rpb24oKXt0aGlzLmVuYWJsZWQ9IXRoaXMuZW5hYmxlZH0sdG9nZ2xlOmZ1bmN0aW9uKCl7dGhpc1t0aGlzLnRpcCgpLmhhc0NsYXNzKFwiaW5cIik/XCJoaWRlXCI6XCJzaG93XCJdKCl9fTthLmZuLnRvb2x0aXA9ZnVuY3Rpb24oYyl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBkPWEodGhpcyksZT1kLmRhdGEoXCJ0b29sdGlwXCIpLGY9dHlwZW9mIGM9PVwib2JqZWN0XCImJmM7aWYoIWUpZC5kYXRhKFwidG9vbHRpcFwiLGU9bmV3IGIodGhpcyxmKSk7aWYodHlwZW9mIGM9PVwic3RyaW5nXCIpZVtjXSgpfSl9O2EuZm4udG9vbHRpcC5Db25zdHJ1Y3Rvcj1iO2EuZm4udG9vbHRpcC5kZWZhdWx0cz17YW5pbWF0aW9uOnRydWUsZGVsYXk6MCxzZWxlY3RvcjpmYWxzZSxwbGFjZW1lbnQ6XCJ0b3BcIix0cmlnZ2VyOlwiaG92ZXJcIix0aXRsZTpcIlwiLHRlbXBsYXRlOic8ZGl2IGNsYXNzPVwidG9vbHRpcFwiPjxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+PGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj48L2Rpdj4nfX0od2luZG93LmpRdWVyeSk7IWZ1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO3ZhciBiPWZ1bmN0aW9uKGEsYil7dGhpcy5pbml0KFwicG9wb3ZlclwiLGEsYil9O2IucHJvdG90eXBlPWEuZXh0ZW5kKHt9LGEuZm4udG9vbHRpcC5Db25zdHJ1Y3Rvci5wcm90b3R5cGUse2NvbnN0cnVjdG9yOmIsc2V0Q29udGVudDpmdW5jdGlvbigpe3ZhciBiPXRoaXMudGlwKCksYz10aGlzLmdldFRpdGxlKCksZD10aGlzLmdldENvbnRlbnQoKTtiLmZpbmQoXCIucG9wb3Zlci10aXRsZVwiKVthLnR5cGUoYyk9PVwib2JqZWN0XCI/XCJhcHBlbmRcIjpcImh0bWxcIl0oYyk7Yi5maW5kKFwiLnBvcG92ZXItY29udGVudCA+ICpcIilbYS50eXBlKGQpPT1cIm9iamVjdFwiP1wiYXBwZW5kXCI6XCJodG1sXCJdKGQpO2IucmVtb3ZlQ2xhc3MoXCJmYWRlIHRvcCBib3R0b20gbGVmdCByaWdodCBpblwiKX0saGFzQ29udGVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmdldFRpdGxlKCl8fHRoaXMuZ2V0Q29udGVudCgpfSxnZXRDb250ZW50OmZ1bmN0aW9uKCl7dmFyIGEsYj10aGlzLiRlbGVtZW50LGM9dGhpcy5vcHRpb25zO2E9Yi5hdHRyKFwiZGF0YS1jb250ZW50XCIpfHwodHlwZW9mIGMuY29udGVudD09XCJmdW5jdGlvblwiP2MuY29udGVudC5jYWxsKGJbMF0pOmMuY29udGVudCk7YT1hLnRvU3RyaW5nKCkucmVwbGFjZSgvKF5cXHMqfFxccyokKS8sXCJcIik7cmV0dXJuIGF9LHRpcDpmdW5jdGlvbigpe2lmKCF0aGlzLiR0aXApe3RoaXMuJHRpcD1hKHRoaXMub3B0aW9ucy50ZW1wbGF0ZSl9cmV0dXJuIHRoaXMuJHRpcH19KTthLmZuLnBvcG92ZXI9ZnVuY3Rpb24oYyl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBkPWEodGhpcyksZT1kLmRhdGEoXCJwb3BvdmVyXCIpLGY9dHlwZW9mIGM9PVwib2JqZWN0XCImJmM7aWYoIWUpZC5kYXRhKFwicG9wb3ZlclwiLGU9bmV3IGIodGhpcyxmKSk7aWYodHlwZW9mIGM9PVwic3RyaW5nXCIpZVtjXSgpfSl9O2EuZm4ucG9wb3Zlci5Db25zdHJ1Y3Rvcj1iO2EuZm4ucG9wb3Zlci5kZWZhdWx0cz1hLmV4dGVuZCh7fSxhLmZuLnRvb2x0aXAuZGVmYXVsdHMse3BsYWNlbWVudDpcInJpZ2h0XCIsY29udGVudDpcIlwiLHRlbXBsYXRlOic8ZGl2IGNsYXNzPVwicG9wb3ZlclwiPjxkaXYgY2xhc3M9XCJhcnJvd1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJwb3BvdmVyLWlubmVyXCI+PGgzIGNsYXNzPVwicG9wb3Zlci10aXRsZVwiPjwvaDM+PGRpdiBjbGFzcz1cInBvcG92ZXItY29udGVudFwiPjxwPjwvcD48L2Rpdj48L2Rpdj48L2Rpdj4nfSl9KHdpbmRvdy5qUXVlcnkpOyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRpbml0OiBmdW5jdGlvbiAoc3RvcmFnZSwgbG9naW4pIHtcblx0XHR2YXIgX3QgPSB0aGlzO1xuXHRcdFx0aWYobG9naW4pIHtcblx0XHRcdCQoJy5yb3dbaWRePVwicG9zdFwiXScpLmVhY2goZnVuY3Rpb24oYSxiKSB7XG5cdFx0XHRcdHZhciBfcCBcdFx0PSAkKHRoaXMpXG5cdFx0XHRcdCxcdGF1dGhvciBcdD0gX3AuZmluZChcIi51c2VyLW5hbWUgPiBhLm5pY2tuYW1lXCIpLmh0bWwoKVxuXHRcdFx0XHQ7XG5cdFx0XHRcdF90Lm15UG9zdChfcCwgYXV0aG9yLCBsb2dpbik7XG5cdFx0XHRcdF90Lm1lUXVvdGUoX3AsIGF1dGhvciwgbG9naW4pO1xuXHRcdFx0XHRcblx0XHRcdH0pO1xuXHRcdH1cblx0fSxcblxuXHRteVBvc3Q6IGZ1bmN0aW9uKGUsIGF1dGhvciwgbWUpIHtcblx0XHRcblx0XHRpZihcIiBcIiArbWUrIFwiIFwiID09IGF1dGhvcikge1xuXHRcdFx0ZS5hZGRDbGFzcyhcIm15LXBvc3RcIik7XG5cdFx0fVxuXHR9LFxuXG5cdG1lUXVvdGU6IGZ1bmN0aW9uKGUsIGF1dGhvciwgbWUpIHtcblx0XHRlLmZpbmQoXCIuZW50cnkgPiAucG9zdC1xdW90ZVwiKS5lYWNoKGZ1bmN0aW9uKGEsYikge1xuXHRcdFx0dmFyIGl0dSA9ICQodGhpcylcblx0XHRcdCxcdGF1dGhvciA9IGl0dS5maW5kKFwic3BhbjpsYXN0LWNoaWxkIGJcIikuaHRtbCgpO1xuXHRcdFx0aWYoYXV0aG9yID09IG1lKSB7XG5cdFx0XHRcdGUuYWRkQ2xhc3MoXCJteS1xdW90ZVwiKTtcblx0XHRcdFx0aXR1LmZpbmQoXCI+IHNwYW46bGFzdC1jaGlsZFwiKS5hZGRDbGFzcygnbXktcXQnKTtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJteSBxdW90ZVwiKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufTsiXX0=
