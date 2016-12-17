const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const resolve = require('path').resolve;

module.exports = {
	context: resolve(__dirname, 'src'),
	entry: ['./js/index.js'],
	output: {
		path: resolve(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/,
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jpg|otf|ttf|woff(2)?)$/,
				use: [{
					loader: 'file-loader',
					query: {
						name: '[path][name].[ext]',
					},
				}],
			},
		],
	},
	resolve: {
		alias: {
			assets: resolve(__dirname, 'src/assets')
		},
	},
	plugins: [
	],
};

if (process.env.NODE_ENV !== 'production') {
	module.exports.devtool = 'inline-source-maps';
	module.exports.module.rules[1].use = [
		'style-loader',
		'css-loader',
		'sass-loader',
	];
	module.exports.entry.unshift(
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server'
	);
	module.exports.devServer = {
		hot: true,
		contentBase: resolve(__dirname, 'dev'),
		publicPath: '',
	};
	module.exports.plugins.unshift(
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	);
}
else {
	module.exports.entry = {
		app: module.exports.entry,
		vendors: [
			'react',
			'react-dom',
			'react-http-request',
			'react-router',
		]
	};
	module.exports.module.rules[1].loader = ExtractTextPlugin.extract({
		loader: 'css-loader?minimize!sass-loader',
	});
	module.exports.plugins.unshift(
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new CleanPlugin(['build'], {
			exclude: ['index.html']
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendors',
			filename: 'vendor.bundle.js'
		}),
		new ExtractTextPlugin({
			filename: 'style.css',
			allChunks: true,
		}),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin()
	);
}