define(['./core'], function(lightDom) {
	var attr = (lightDom.fn.attr = function(key, value) {
		if (!key || !this[0]) {
			return false;
		}
		var elem = this[0] instanceof Array ? this[0][0] : this[0];

		if (!value) {
			return elem.attributes[key].value;
		}
		elem.attributes[key].value = value;
	});
	return attr;
});
