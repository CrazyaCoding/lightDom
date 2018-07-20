module.exports = {
	env: {
		browser: true,
		es6: true
	},
	extends: '58fe',
	parser: 'babel-eslint',
	globals: {
		$: true,
		define: true,
		WBAPP: true,
		M_BJOB: true
	},
	rules: {
		'no-redeclare': 'off', //重复声明变量
		'one-var': 'off', //只许用一个var
		'no-unneeded-ternary': 'off',
		'new-cap': 'off',
		camelcase: 'off', //语法驼峰
		'no-useless-escape': 'off'
		/*'no-trailing-spaces': 'off',
		'no-eval': 'off' */
	}
};
