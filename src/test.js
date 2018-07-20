define(['./core'], function(lightDom) {
	var test = (lightDom.fn.test = function() {
		console.log(this[0]);
	});
	return test;
});
