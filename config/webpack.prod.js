/**
 * Copyright (C) 2016 yanni4night.com
 * webpack.prod.js
 *
 * changelog
 * 2016-10-25[12:07:30]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const CONFIG = require('./config.js');

module.exports = webpackMerge(commonConfig, {
    output: {
        filename: `${CONFIG.STATIC}/scripts/[name].[chunkhash].js`
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        })
    ]
});