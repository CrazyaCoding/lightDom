define(['./core'], function(lightDom) {
	var children = (lightDom.fn.children = function() {
		if (!this[0]) {
			return false;
		}
		var childElems = [],
			that = this;
		that.manipulation(this[0], function(target) {
			var childs = target.childNodes;

			that.manipulation(childs, function(elem_child) {
				if (
					!(
						elem_child.nodeName === '#text' &&
						/\s/.test(elem_child.nodeValue)
					)
				) {
					childElems.push(elem_child);
				}
			});
		});
		return childElems;
	});
	return children;
});
