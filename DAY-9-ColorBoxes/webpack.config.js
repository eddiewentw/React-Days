module.exports = {
	entry: './main.jsx',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				query: { presets: ['es2015', 'react'] }
			}
		]
	},
	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM'
	}
}
