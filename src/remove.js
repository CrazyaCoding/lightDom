define(['./core'], function(lightDom) {
	var remove = (lightDom.fn.remove = function() {
		var parent = this.parent(),
			elems = this[0],
			that = this;
		// parent.removeChild(this[0]);
		that.manipulation(parent, function(target) {
			that.manipulation(elems, function(elem) {
				target.removeChild(elem);
			});
		});
	});
	return remove;
});
