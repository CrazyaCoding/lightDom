// import browserType from '@shangs/js-util';

var lightDom = function(selector) {
	return new lightDom.fn.init(selector);
};

lightDom.fn = {
	constructor: lightDom,
	init: function(selector) {
		if (!selector || selector.length <= 0) {
			return false;
		}
		if (typeof selector !== 'string') {
			throw Error('arguments must be a string');
		}

		this[0] = [];

		this[0] = this.splitSelector(selector);
	},
	splitSelector(selector) {
		var selectorArr = selector.split(' ');
		if (selectorArr.length > 1) {
			return document.querySelectorAll(selector);
		} else {
			return this.getOneElem(selector);
		}
	},
	getOneElem(selector) {
		var elems = [],
			elem = null,
			firCharacter = selector.split('')[0],
			bodyCharacter = selector
				.split('')
				.slice(1)
				.join('');

		if (firCharacter === '#') {
			elem = this.getEleById(bodyCharacter);
		} else if (firCharacter === '.') {
			elem = this.getEleByClass(bodyCharacter);
		} else {
			elem = this.getEleByTag(selector);
		}
		if (elem && elem.length >= 0) {
			if (elem.length > 1) {
				// this[0] = [];
				for (var i = 0; i < elem.length; i++) {
					elems.push(elem[i]);
				}
			} else {
				elems = elem[0];
			}
		} else {
			elems = elem;
		}
		return elems;
	},
	test() {
		// console.log(this);
		console.log(this[0]);
	},
	getEleById(arg) {
		var dom = document.getElementById(arg);
		return dom;
	},
	getEleByClass(arg) {
		var dom = document.getElementsByClassName(arg);
		return dom ? dom : null;
	},
	getEleByTag(arg) {
		var dom = document.getElementsByTagName(arg);
		return dom ? dom : null;
	},
	append(dom) {
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
				manipulation(this[0], function(target) {
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
				manipulation(this[0], function(target) {
					target.appendChild(fragment.cloneNode(true));
				});
			}
		}
	},
	parent() {
		var parent = [];
		manipulation(this[0], function(target) {
			if (target.nodeType !== 11) {
				parent.push(target.parentNode);
			}
		});
		/* var parent = this[0].parentNode;
		return parent && parent.nodeType !== 11 ? parent : null; */
		return parent;
	},
	children() {
		if (!this[0]) {
			return false;
		}
		var childElems = [];
		manipulation(this[0], function(target) {
			var childs = target.childNodes;

			manipulation(childs, function(elem_child) {
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
	},
	remove() {
		var parent = this.parent(),
			elems = this[0];
		// parent.removeChild(this[0]);
		manipulation(parent, function(target) {
			manipulation(elems, function(elem) {
				target.removeChild(elem);
			});
		});
	},
	text(content) {
		if (!content) {
			return false;
		}
		manipulation(this[0], function(target) {
			target.innerHTML = content;
		});
		// this[0].innerHTML = content;
	},
	hide() {
		this.style({ display: 'none' });
	},
	show() {
		this.style({ display: 'block' });
	},
	style(styleObj) {
		if (!styleObj) {
			return false;
		}
		manipulation(this[0], function(target) {
			for (var key in styleObj) {
				target.style[key] = styleObj[key];
			}
		});
	},
	css(key, value) {
		if (!key || !this[0]) {
			return undefined;
		}
		var elem = this[0] instanceof Array ? this[0][0] : this[0];
		if (!value) {
			if (window.getComputedStyle) {
				return window.getComputedStyle(elem, '').getPropertyValue(key);
			} else if (window.currentStyle) {
				return window.currentStyle.getAttribute(camelize(key));
			}
		}
		elem.style[key] = value;
	},
	click(cb) {
		this.bind('click', cb);
	},
	event: [
		'click',
		'mousedown',
		'mouseenter',
		'mouseleave',
		'mousemove',
		'mouseover',
		'mouseout',
		'mouseup'
	],
	unbind(event, cb) {
		if (
			!this[0] ||
			Object.prototype.toString.call(cb) !== '[object Function]'
		) {
			return false;
		}
		event = event || this.event;
		if (typeof event !== 'string' || !(event instanceof Array)) {
			return false;
		}

		event = typeof event === 'string' ? event.split(' ') : event;
		for (var i = 0; i < event.length; i++) {
			if (window.removeEventListener) {
				manipulation(this[0], function(target) {
					target.removeEventListener(event[i], cb);
				});
			} else if (window.detachEvent) {
				manipulation(this[0], function(target) {
					target.detachEvent(event[i], cb);
				});
			}

			// this[0].removeEventListener(event[i], cb);
		}
	},
	bind(event, cb) {
		if (!this[0] || !event || typeof event !== 'string') {
			return false;
		}
		if (!cb) {
			throw Error('There must be a callback function');
		}
		event = event.split(' ');
		for (var i = 0; i < event.length; i++) {
			if (window.addEventListener) {
				manipulation(this[0], function(target) {
					target.addEventListener(event[i], cb);
				});
			} else if (window.attachEvent) {
				manipulation(this[0], function(target) {
					target.attachEvent('on' + event[i], cb);
				});
			}
		}
	},
	addClass(className) {
		manipulation(this[0], function(target) {
			target.className = target.className + ' ' + className;
		});
	},
	removeClass(className) {
		if (!className) {
			return false;
		}

		manipulation(this[0], function(target) {
			var classs = target.className.split(' ');
			var index = classs.indexOf(className);
			index !== -1 && classs.splice(index, 1);

			target.className = classs.join(' ');
		});
	},
	attr(key, value) {
		if (!key || !this[0]) {
			return false;
		}
		var elem = this[0] instanceof Array ? this[0][0] : this[0];

		if (!value) {
			return elem.attributes[key].value;
		}
		elem.attributes[key].value = value;
	}
};
lightDom.fn.init.prototype = lightDom.fn;

window.$$ = lightDom;

// 处理选择器选中单个或多个dom的情况
function manipulation(elems, func) {
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
}

function camelize(attr) {
	// /\-(\w)/g 正则内的 (\w) 是一个捕获，捕获的内容对应后面 function 的 letter
	// 意思是将 匹配到的 -x 结构的 x 转换为大写的 X (x 这里代表任意字母)
	return attr.replace(/\-(\w)/g, function(all, letter) {
		return letter.toUpperCase();
	});
}
