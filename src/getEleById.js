define(['./core'], function(lightDom) {
	var getEleById = (lightDom.fn.getEleById = function(selector) {
		var dom = document.getElementById(selector);
		return dom;
	});
	return getEleById;
});
