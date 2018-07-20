define(['./core', './util/camelize'], function(lightDom, camelize) {
	var css = (lightDom.fn.css = function(key, value) {
		if (!key || !this[0]) {
			return undefined;
		}
		var elem = this[0] instanceof Array ? this[0][0] : this[0];
		if (!value) {
			if (window.getComputedStyle) {
				return window.getComputedStyle(elem, '').getPropertyValue(key);
			} else if (window.currentStyle) {
				return window.currentStyle.getAttribute(camelize(key));
			}
		}
		elem.style[key] = value;
	});
	return css;
});
