define([], function(require, factory) {
	var lightDom = function(selector) {
		return new lightDom.fn.init(selector);
	};
	lightDom.fn = lightDom.prototype = {
		constructor: lightDom
	};
	return lightDom;
});
