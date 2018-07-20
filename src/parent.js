define(['./core'], function(lightDom) {
	var parent = (lightDom.fn.parent = function() {
		var parent = [];
		this.manipulation(this[0], function(target) {
			if (target.nodeType !== 11) {
				parent.push(target.parentNode);
			}
		});
		/* var parent = this[0].parentNode;
		return parent && parent.nodeType !== 11 ? parent : null; */
		return parent;
	});
	return parent;
});
