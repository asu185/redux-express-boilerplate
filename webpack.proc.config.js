var path = require('path');
var webpack = require('webpack');
var definePlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
});

module.exports = {
  entry: {
    main: path.resolve('public/src/main.jsx'),
  },
  output: {
    path: path.resolve('public/dist'),
    filename: 'bundle.js',
  },
  plugins: [definePlugin],
  resolve: {
    root: path.resolve('public/src'),
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ],
  },
}
