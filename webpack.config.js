const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index-bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
	  },
	  {
		test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
		use: 'url-loader?limit=10000&mimetype=application/font-woff&name=style/[name].[ext]'
	},
	{
		test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
		use: 'url-loader?limit=10000&mimetype=application/font-woff&name=style/[name].[ext]'
	},
	{
		test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
		use: 'url-loader?limit=10000&mimetype=application/octet-stream&name=style/[name].[ext]'
	},
	{
		test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
		use: 'file-loader?name=/style/[name].[ext]'
	},
	{
		test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
		use: 'url-loader?limit=10000&mimetype=image/svg+xml&name=style/[name].[ext]'
	},
	{
		test: /\.(jpe?g|png|gif)$/i,
		use: 'url-loader?limit=10000!img?progressive=true&name=style/[name].[ext]'
	}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};