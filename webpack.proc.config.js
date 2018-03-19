var path = require('path');
var webpack = require('webpack');
var definePlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
});
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve('public/src/index.js'),
  },
  output: {
    path: path.resolve('public/dist'),
    publicPath: 'dist',
    filename: '[name].js',
    library: '[name]',
  },
  plugins: [
    definePlugin,
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  resolve: {
    modules: [
      path.resolve('public/src'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      { test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|jpg|jpeg)$/, loader: 'url-loader?name=[hash].[ext]'},
    ],
  },
}
