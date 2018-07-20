define(['./core'], function(lightDom) {
	var length = (lightDom.fn.length = function() {
		return this[0] && this[0].length > 0
			? this[0].length
			: this[0] instanceof HTMLElement
				? 1
				: 0;
	});
	return length;
});
