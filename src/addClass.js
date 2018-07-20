define(['./core'], function(lightDom) {
	var addClass = (lightDom.fn.addClass = function(className) {
		this.manipulation(this[0], function(target) {
			target.className = target.className + ' ' + className;
		});
	});
	return addClass;
});
