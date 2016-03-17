module.exports = {
	entry: './main.jsx',
	output: {
		path: __dirname,
		filename: 'xxx.js'
	},
	module: {
		loaders: [
			{ test: /\.jsx$/, loader: 'babel-loader' }
		]
	}
}
