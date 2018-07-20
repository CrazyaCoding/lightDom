define(['./core'], function(lightDom) {
	var getEleByTag = (lightDom.fn.getEleByTag = function(selector) {
		var dom = document.getElementsByTagName(selector);
		return dom ? dom : null;
	});
	return getEleByTag;
});
