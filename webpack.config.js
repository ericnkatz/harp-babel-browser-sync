var webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill','./src/_js/script.js'],
    output: {
        path: __dirname,
        filename: './src/build/script.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015']
                }
            }
        ],
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map',   // Create Sourcemaps for the bundle

};
