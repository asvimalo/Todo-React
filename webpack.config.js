'use strict';

var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './app/components'
    ],
    alias: {
    //   Greeter: 'public/components/Greeter.jsx',
      applicationStyles: 'app/styles/app.scss',
    //   GreeterForm: 'public/components/GreeterFrom.jsx'
    },
    extensions: ['','.js','.jsx']

  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react','es2015','stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
        //exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
