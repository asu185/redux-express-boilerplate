var path = require('path');
var webpack = require('webpack');
var definePlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
});

module.exports = {
  devtool: 'source-map',
  entry: {
    web: path.resolve('public/src/web/index.js'),
    mobile: path.resolve('public/src/mobile/index.js'),
  },
  output: {
    path: path.resolve('public'),
    filename: '[name].js',
    library: '[name]',
  },
  plugins: [definePlugin],
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
      { test: /\.(png|jpg|jpeg)$/, loader: 'url-loader?limit=1024&name=[hash].[ext]'},
    ],
  },
}
