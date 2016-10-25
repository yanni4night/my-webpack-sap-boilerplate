/**
 * Copyright (C) 2016 yanni4night.com
 * webpack.common.js
 *
 * changelog
 * 2016-10-25[12:00:29]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackShellPlugin = require('webpack-shell-plugin');

const CONFIG = require('./config.js');

module.exports = {
    entry: {
        vendor: './src/javascripts/vendor.js',
        main: './src/javascripts/main.js',
        about: './src/javascripts/about.js'
    },
    output: {
        publicPath: './',
        path: `${__dirname}/../${CONFIG.OUTPUT}`
    },
    resolve: {
        extensions: ['', '.js']
    },
    eslint: {
        configFile: `${__dirname}/.eslintrc`
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader")
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!less-loader")
        }]
    },
    bail: true,
    profile: true,
    plugins: [
        new WebpackShellPlugin({
            onBuildStart: [`rm -rf ${CONFIG.OUTPUT}`]
        }),
        new ExtractTextPlugin(`${CONFIG.STATIC}/styles/[name].[chunkhash].css`),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: `${CONFIG.STATIC}/scripts/[name].[hash].js`,
            chunks: ['main', 'about']
        }),
        new HtmlWebpackPlugin({
            title: 'index',
            filename: 'index.html',
            template: './src/tpls/index.html',
            chunks: ['vendor', 'common', 'main'],
            chunksSortMode: CONFIG.sortChunks
        }),
        new HtmlWebpackPlugin({
            title: 'about',
            filename: 'about.html',
            template: './src/tpls/about.html',
            chunks: ['vendor', 'common', 'about'],
            chunksSortMode: CONFIG.sortChunks
        })
    ]
};