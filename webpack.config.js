var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        app: './index.js',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'starterpack.js'
    },
    externals: {
        'reveal': 'Reveal'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loaders: ['file-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'demo.html',
            template: './demo.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'template.html',
            template: './template.html'
        })
    ],
    devServer: {
        noInfo: true,
        port: 8910
    }
};
