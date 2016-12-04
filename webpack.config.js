var webpack = require( 'webpack' ),
    path = require( 'path' );

module.exports = {
  devtool: "inline-source-map",
  entry: "./src/js/client.js",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']	
        }
      }
    ]
  },
  output: {
    path: "/src",
    filename: "client.min.js",
    publicPath: "/"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};
