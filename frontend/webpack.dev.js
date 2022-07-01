const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devServer: {
    hot: true,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.css$/,
        loader: "css-loader",
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          plugins: ["react-refresh/babel"],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html"),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
}