const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  // code splitting into different bundles
  // entry: {
  //   main: './src/index.js',
  //   about: './src/about.js',
  //   contact: './src/contact.js'
  // },
  // output: {
  //   filename: '[name].bundle.js',
  //   path: path.resolve(__dirname, 'dist')
  // },
  // using html-webpack-plugin
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  // using html-webpack-plugin
  plugins: [new HtmlWebpackPlugin()],
  optimization: {
    // using splitChunks for additional code splitting
    // looks for repeated code in bundles and creates a "vendors" bundle
    // it appears you have to then get the filename from the console and include
    // this in your html files as well
    // splitChunks: {
    //   chunks: 'all'
    // }

    // using uglifyjs
    minimizer: [new UglifyJsPlugin()]
  },
  devServer: {
    // webpack-dev-server for live reloading
    contentBase: path.join(__dirname, 'dist'),
    port: 9000
  },
  module: {
    rules: [
      {
        // use babel loader on all JS files, excluding node_modules
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        // use style/css loader for importing styles
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        // use url-loader for images
        test: /\.(png|jpg)$/,
        use: [{ loader: 'url-loader' }]
      }
    ]
  }
};
