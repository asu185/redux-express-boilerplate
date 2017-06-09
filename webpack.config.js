var webpack = require('webpack');
var definePlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
});

module.exports = {
  devtool: 'source-map',
  entry: {
    main: './public/src/main.jsx'
  },
  output: {
    path: './public',
    filename: 'bundle.js',
  },
  plugins: [definePlugin],
  resolve: {
    root: './public/src',
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
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loaders: ['style', 'css'] },
    ],
  },
}
