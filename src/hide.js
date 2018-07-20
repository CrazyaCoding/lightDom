define(['./core'], function(lightDom) {
	var hide = (lightDom.fn.hide = function() {
		this.style({ display: 'none' });
	});
	return hide;
});
