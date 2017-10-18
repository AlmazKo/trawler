const path = require('path');

module.exports = {
    entry: {
        inject: './src/inject.ts',
        background: './src/background.ts'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [".ts"]
    },
    module: {
        loaders: [
            {  loader: "ts-loader" }
        ]
    }
};