define(['./core'], function(lightDom) {
	var html = (lightDom.fn.html = function(content) {
		if (!this[0]) {
			return false;
		}

		// 取值
		var elem = this[0] instanceof Array ? this[0][0] : this[0];
		if (!content && elem.nodeType === 1) {
			return elem.innerHTML;
		}

		// 取值
		this.manipulation(this[0], function(target) {
			target.innerHTML = content;
		});
		// this[0].innerHTML = content;
	});
	return html;
});
