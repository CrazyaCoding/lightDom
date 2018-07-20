define(['./core'], function(lightDom) {
	var removeClass = (lightDom.fn.removeClass = function(className) {
		if (!className) {
			return false;
		}

		this.manipulation(this[0], function(target) {
			var classs = target.className.split(' ');
			var index = classs.indexOf(className);
			index !== -1 && classs.splice(index, 1);

			target.className = classs.join(' ');
		});
	});
	return removeClass;
});
