define(['./core'], function(lightDom) {
	var getEleByClass = (lightDom.fn.getEleByClass = function(selector) {
		var dom = document.getElementsByClassName(selector);
		return dom ? dom : null;
	});
	return getEleByClass;
});
