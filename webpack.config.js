const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    sic: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js"
  },
  devServer: {
    hot: true,
    publicPath: '/static/',
    port: 9000,
    contentBase: [
      path.join(__dirname, "node_modules/govuk-frontend"),
    ],
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].styles.css',
    }),
  ],
  resolve: {
    extensions: ['.js', '.scss']
  }
};
