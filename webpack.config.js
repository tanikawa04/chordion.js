const webpack = require('webpack');
const path = require('path');

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'index.js',
    library: 'Chordion',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: '#eval-source-map'
};

module.exports = config;
