define(['./core'], function(lightDom) {
	var bind = (lightDom.fn.bind = function(event, cb) {
		if (!this[0] || !event || typeof event !== 'string') {
			return false;
		}
		if (!cb) {
			throw Error('There must be a callback function');
		}
		event = event.split(' ');
		for (var i = 0; i < event.length; i++) {
			if (window.addEventListener) {
				this.manipulation(this[0], function(target) {
					target.addEventListener(event[i], cb);
				});
			} else if (window.attachEvent) {
				this.manipulation(this[0], function(target) {
					target.attachEvent('on' + event[i], cb);
				});
			}
		}
	});
	return bind;
});
