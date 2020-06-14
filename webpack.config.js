const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    inject: './src/inject/index.ts',
    background: './src/background/index.ts',
    popup: './src/popup/index.ts',
    options: './src/options/index.ts'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },

  plugins: [
    //plugin doc: https://www.npmjs.com/package/copy-webpack-plugin
    new CopyPlugin({patterns: [{from: 'static'}]})
  ]
};
