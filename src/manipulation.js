define(['./core'], function(lightDom) {
	var manipulation = (lightDom.fn.manipulation = function(elems, func) {
		if (!elems) {
			return false;
		}
		func = func || function() {};

		if (
			!(elems instanceof Array) &&
			Object.prototype.toString.call(elems) !== '[object NodeList]'
		) {
			func(elems);
			return false;
		}
		for (var i = 0; i < elems.length; i++) {
			func(elems[i]);
		}
	});
	return manipulation;
});
