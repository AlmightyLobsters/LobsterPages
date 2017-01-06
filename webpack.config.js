const webpack = require('webpack');
const join = require('path').join;

module.exports = {
    entry: {
        app: join(__dirname, 'src', 'js', 'index.js'),
        vendor: [
            'react',
            'react-dom',
            'react-router'
        ]
    },
    output: {
        path: join(__dirname, 'public', 'js'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
};
