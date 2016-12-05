var webpack = require('webpack');
var resolve = require('path').resolve;
var join = require('path').join;
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: resolve(__dirname, 'src'),
    entry: ['./js/index.js'],
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: ''
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/,
                loader: 'style!css!sass',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
    ]
}

if (process.env.NODE_ENV !== 'production') {
    module.exports.devtool = 'inline-source-maps';
    module.exports.entry.unshift(
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server'
    );
    module.exports.devServer = {
        hot: true,
        contenBase: resolve(__dirname, 'build'),
        publicPath: ''
    };
    module.exports.plugins.unshift(
        new webpack.NamedModulesPlugin()
    )
} else {
    module.exports.plugins.unshift(
        new ExtractTextPlugin('main.css')
    );
    module.exports.module.loaders[1].loader = ExtractTextPlugin.extract('css!sass');
}