define(['./core'], function(lightDom) {
	var init = (lightDom.fn.init = function(selector) {
		if (!selector || selector.length <= 0) {
			return false;
		}
		if (typeof selector !== 'string') {
			throw Error('arguments must be a string');
		}

		this[0] = [];
		this[0] = this.splitSelector(selector);
	});
	init.prototype = lightDom.fn;
	return init;
});
