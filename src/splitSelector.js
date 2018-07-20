define(['./core'], function(lightDom) {
	lightDom.fn.splitSelector = function(selector) {
		var selectorArr = selector.split(' ');
		if (selectorArr.length > 1) {
			return document.querySelectorAll(selector);
		} else {
			return this.getOneElem(selector);
		}
	};
});
