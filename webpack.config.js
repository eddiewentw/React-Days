var path = require('path');

const __day_path__ = 'DAY-13-Subscribe';

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
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			}
		]
	},
	resolve: {
		root: path.resolve(__dirname, __day_path__, 'src'),
		extensions: ['', '.jsx']
	},
	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM'
	}
}
