const path = require('path');

const config = {
	mode: 'production',
	entry: path.join(__dirname, '/src/index.js'),
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'lightDom.bundle.js'
	},
	/* devServer: {
		contentBase: './dist',
		hot: true
	}, */
	module: {
		rules: [
			/* {
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader'
			}, */
			/* {
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			} */
		]
	}
};

module.exports = config;
