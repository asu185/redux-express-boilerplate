module.exports = {
  devtool: 'source-map',
  entry: {
    main: './public/main.js'
  },
  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js',
  },  
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets:['react']
      }
    }]
  }
}
