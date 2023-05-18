const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BUILD_DIR = path.resolve(__dirname, 'src/main/resources/static');
const APP_DIR = path.resolve(__dirname, "src/main/js");

module.exports = {
  entry: { app: APP_DIR + "/App.js" },
  devtool: "inline-source-map",
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    new HtmlWebpackPlugin({
    	title: 'Colony Command Worker',
    	template: './src/main/js/index.html',
    	filename: BUILD_DIR + '/index.html'
    })
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
    path: BUILD_DIR + '/dist',
    filename: '[name].[contenthash].js',
    publicPath: '/dist/',
    clean: true
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  optimization: {
	  runtimeChunk: 'single',
	  minimize: true,
	  minimizer: [new TerserPlugin()],
	  moduleIds: 'deterministic',
	  splitChunks: {
		  chunks: 'all',
	      maxInitialRequests: Infinity,
	      minSize: 0,
		  cacheGroups: {
			  vendor: {
				  test: /[\\/]node_modules[\\/]/,
				  name(module) {
			            // get the name. E.g. node_modules/packageName/not/this/part.js
			            // or node_modules/packageName
			            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

			            // npm package names are URL-safe, but some servers don't like @ symbols
			            return `npm.${packageName.replace('@', '')}`;
				  }
			  }
		  }
	  }
  }

};

