// Import Webpack npm module
const webpack = require("webpack");
const path = require("path");
const { resolve } = require("path");

var BUILD_DIR = path.resolve(__dirname, "src/main/resources/static/build");
var APP_DIR = path.resolve(__dirname, "src/main/js");

module.exports = {
  // Which file is the entry point to the application
  entry: {
    app: APP_DIR + "/App.js",
  },
  devtool: "inline-source-map",
  devServer: {
    inline: true,
    contentBase: "./src/main/resources/static",
    proxy: { "/api/**": { target: "http://10.0.1.30:8090", secure: false } },
  },
  // Where to output the final bundled code to
  output: {
    path: path.resolve(__dirname, "src/main/resources/static/build"),
    filename: "bundle.js",
    publicPath: "build/",
  },
  module: {
    // How to process project files with loaders
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
      // Process any .js or .jsx file with eslint error checking
      {
        test: /\.jsx?/,
        include: APP_DIR,
        exclude: /node_modules/,
        use: "eslint-loader",
      },
      // Process any .js or .jsx file with babel
      {
        test: /\.jsx?/,
        include: APP_DIR,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: "style-loader!css-loader",
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: "url-loader",
        options: {
          limit: 10000,
        },
      },
    ],
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js"],
    },
  },
};
