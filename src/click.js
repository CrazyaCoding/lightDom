define(['./core'], function(lightDom) {
	var click = (lightDom.fn.click = function(cb) {
		this.bind('click', cb);
	});
	return click;
});
