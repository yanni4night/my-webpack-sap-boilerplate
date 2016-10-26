/**
 * Copyright (C) 2016 yanni4night.com
 * config.js
 *
 * changelog
 * 2016-10-25[09:56:47]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';

const highPriority = ['vendor'];

module.exports = {
    OUTPUT: 'dist',
    STATIC: 'static',
    sortChunks: (prev, next) => {
        const prevName = prev.names[0];
        const nextName = next.names[0];

        return highPriority.indexOf(prevName) < highPriority.indexOf(nextName);
    }
};