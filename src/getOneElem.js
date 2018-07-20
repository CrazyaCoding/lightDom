define(['./core'], function(lightDom) {
	var getOneElem = (lightDom.fn.getOneElem = function(selector) {
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
	});
	return getOneElem;
});
