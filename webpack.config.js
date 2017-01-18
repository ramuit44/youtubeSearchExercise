module.exports = {
  entry: [
    'whatwg-fetch',
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
    ],
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
                  test: /\.scss$/,
                  loaders: [ 'style', 'css', 'sass' ]
      },
      { test: /\.css$/, loader: "style-loader!css-loader" }



    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    host: '0.0.0.0',
    port: 8008,
    
  }
};
