webpackJsonp([2,3],{

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(11);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    return "<div>\n	funny things\n</div>";
	},"useData":true});

/***/ },

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Marionette) {'use strict';
	
	var template = __webpack_require__(50);
	
	//import Model from '../../model/home/homeModel';
	var JSView = Marionette.View.extend({
	  el: '#app',
	  template: template,
	  initialize: function initialize() {}
	});
	
	module.exports = function () {
	  new JSView().render();
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvanMvdGVtcGxhdGUvamF2YXNjcmlwdC9qcy5sYXlvdXQuaGJzIiwid2VicGFjazovLy8uL2FwcC9qcy92aWV3L2phdmFzY3JpcHQvamF2YXNjcmlwdC5sYXlvdXQuanMiXSwibmFtZXMiOlsidGVtcGxhdGUiLCJyZXF1aXJlIiwiSlNWaWV3IiwiTWFyaW9uZXR0ZSIsIlZpZXciLCJleHRlbmQiLCJlbCIsImluaXRpYWxpemUiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsMEJBQXlCLHVEQUF1RDtBQUNoRixrRUFBaUU7QUFDakU7QUFDQSxFQUFDLGdCQUFnQixFOzs7Ozs7Ozs7QUNKakIsS0FBSUEsV0FBVyxtQkFBQUMsQ0FBUSxFQUFSLENBQWY7O0FBRUE7QUFDQSxLQUFJQyxTQUFTQyxXQUFXQyxJQUFYLENBQWdCQyxNQUFoQixDQUF1QjtBQUNsQ0MsT0FBSSxNQUQ4QjtBQUVsQ04sYUFBVUEsUUFGd0I7QUFHbENPLGVBQWEsc0JBQVksQ0FFeEI7QUFMaUMsRUFBdkIsQ0FBYjs7QUFRQUMsUUFBT0MsT0FBUCxHQUFpQixZQUFZO0FBQzVCLE9BQUlQLE1BQUosR0FBYVEsTUFBYjtBQUNBLEVBRkQsQyIsImZpbGUiOiIyLmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiL1VzZXJzL05hZGVzaWNvWS9EZXNrdG9wL2Jlbl9waGlsL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIjxkaXY+XFxuXHRmdW5ueSB0aGluZ3NcXG48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL2pzL3RlbXBsYXRlL2phdmFzY3JpcHQvanMubGF5b3V0Lmhic1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwidmFyIHRlbXBsYXRlID0gcmVxdWlyZSgnLi4vLi4vdGVtcGxhdGUvamF2YXNjcmlwdC9qcy5sYXlvdXQuaGJzJyk7XG5cbi8vaW1wb3J0IE1vZGVsIGZyb20gJy4uLy4uL21vZGVsL2hvbWUvaG9tZU1vZGVsJztcbnZhciBKU1ZpZXcgPSBNYXJpb25ldHRlLlZpZXcuZXh0ZW5kKHtcbiAgZWw6ICcjYXBwJyxcbiAgdGVtcGxhdGU6IHRlbXBsYXRlLFxuICBpbml0aWFsaXplIDogZnVuY3Rpb24gKCkge1xuICAgIFxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdG5ldyBKU1ZpZXcoKS5yZW5kZXIoKTtcbn07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9qcy92aWV3L2phdmFzY3JpcHQvamF2YXNjcmlwdC5sYXlvdXQuanMiXSwic291cmNlUm9vdCI6IiJ9