const __day_path__ = 'DAY-10-Scroll';

module.exports = {
	entry: `./${__day_path__}/src/main.jsx`,
	output: {
		path: `${__dirname}/${__day_path__}`,
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
