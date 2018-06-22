const path = require('path');

function resolve (filename = '') {
    return path.resolve(__dirname, filename);
}

module.exports = {
    entry: {
        main: resolve('./index.js'),
    },
    output: {
        path: resolve(),
        filename: '[name].min.js',
        library: 'npromise',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: resolve('./node_modules'),
                use: ['babel-loader?cacheDirectory', 'eslint-loader'],
            }
        ]
    }
}