define([], function() {
	function camelize(attr) {
		// /\-(\w)/g 正则内的 (\w) 是一个捕获，捕获的内容对应后面 function 的 letter
		// 意思是将 匹配到的 -x 结构的 x 转换为大写的 X (x 这里代表任意字母)
		return attr.replace(/\-(\w)/g, function(all, letter) {
			return letter.toUpperCase();
		});
	}
	return camelize;
});
