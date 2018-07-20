define(['./core'], function(lightDom) {
	var show = (lightDom.fn.show = function() {
		this.style({ display: 'block' });
	});
	return show;
});
