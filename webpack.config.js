var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        background: './extension/src/background.js',
        options: './extension/src/options.js'
    },
    output: {
        path: path.resolve(__dirname, './extension'),
        filename: './dist/[name].js',
        publicPath: ''
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};