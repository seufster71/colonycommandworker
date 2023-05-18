const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BUILD_DIR = path.resolve(__dirname, "src/main/resources/static/dist");
const APP_DIR = path.resolve(__dirname, "src/main/js");

module.exports = {
  entry: { app: APP_DIR + "/App.js" },
  devtool: "inline-source-map",
  mode: "development",
  devServer: {
    liveReload: true,
    historyApiFallback: true,
    proxy: [
      { context: ["/api/**", "/libs/**"], target: "http://localhost:8090" },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Trade Analyzer",
      template: "./src/main/js/index.html",
      filename: BUILD_DIR + "/index.html",
    }),
    new webpack.LoaderOptionsPlugin({
      options: {},
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: APP_DIR,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              [
                "@babel/plugin-transform-typescript",
                {
                  onlyRemoveTypeImports: true,
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.jsx?/,
        include: APP_DIR,
        exclude: /node_modules/,
        use: "babel-loader",
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: "url-loader",
        options: { limit: 10000 },
      },
    ],
  },
  output: {
    path: BUILD_DIR,
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
};
