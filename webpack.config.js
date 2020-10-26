const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./config')
const argv = require('minimist')(process.argv.slice(2));
const modulePath = config.modulesPaths[argv.module]

module.exports = {
  entry: { main: `${modulePath}/index.js` },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './src/bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: `${modulePath}/index.html`,
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: `${modulePath}/css/[name].css`,
    }),
  ],

  devtool: 'source-map',
};
