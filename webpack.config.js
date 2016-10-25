/**
 * Copyright (C) 2016 yanni4night.com
 * webpack.config.js
 *
 * changelog
 * 2016-10-25[08:57:17]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
const env = process.env.NODE_ENV;

switch (env) {
case 'production':
case 'prod':
    module.exports = require('./config/webpack.prod.js');
    break;
case 'test':
    module.exports = require('./config/webpack.test.js');
    break;
case 'development':
case 'dev':
default:
    module.exports = require('./config/webpack.dev.js');;
}
