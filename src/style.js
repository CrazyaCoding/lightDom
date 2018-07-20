define(['./core'], function(lightDom) {
	var style = (lightDom.fn.style = function(styleObj) {
		if (!styleObj) {
			return false;
		}
		this.manipulation(this[0], function(target) {
			for (var key in styleObj) {
				target.style[key] = styleObj[key];
			}
		});
	});
	return style;
});
