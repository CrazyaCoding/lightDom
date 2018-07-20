define(['./core'], function(lightDom) {
	var unbind = (lightDom.fn.unbind = function(event, cb) {
		if (
			!this[0] ||
			Object.prototype.toString.call(cb) !== '[object Function]'
		) {
			return false;
		}
		event = event || [
			'click',
			'mousedown',
			'mouseenter',
			'mouseleave',
			'mousemove',
			'mouseover',
			'mouseout',
			'mouseup'
		];
		if (typeof event !== 'string' || !(event instanceof Array)) {
			return false;
		}

		event = typeof event === 'string' ? event.split(' ') : event;
		for (var i = 0; i < event.length; i++) {
			if (window.removeEventListener) {
				this.manipulation(this[0], function(target) {
					target.removeEventListener(event[i], cb);
				});
			} else if (window.detachEvent) {
				this.manipulation(this[0], function(target) {
					target.detachEvent(event[i], cb);
				});
			}

			// this[0].removeEventListener(event[i], cb);
		}
	});
	return unbind;
});
