const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
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
