define(['./core'], function(lightDom) {
	var append = (lightDom.fn.append = function(dom) {
		// dom参数支持 node节点 html片段
		if (!this[0]) {
			return false;
		}
		if (!dom) {
			return;
		}
		if (dom instanceof HTMLElement) {
			this[0].appendChild(dom);
		}
		if (typeof dom === 'string') {
			var domTemp = document.createElement('div'),
				nodes = null,
				fragment;
			domTemp.innerHTML = dom;
			nodes = domTemp.childNodes;
			if (!window.createDocumentFragment) {
				this.manipulation(this[0], function(target) {
					for (var i = 0; i < nodes.length; i++) {
						target.appendChild(nodes[i].cloneNode(true));
					}
				});
			} else {
				fragment = document.createDocumentFragment('');
				for (var i = 0; i < nodes.length; i++) {
					fragment.appendChild(nodes[i].cloneNode(true));
				}
				// this[0].appendChild(fragment);
				this.manipulation(this[0], function(target) {
					target.appendChild(fragment.cloneNode(true));
				});
			}
		}
	});
	return append;
});
