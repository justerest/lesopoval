const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: ['./src/main.js'],

  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },

  mode: process.env.NODE_ENV,

  resolve: {
    alias: {
      '%': path.resolve(__dirname, 'src'),
    },
  },

  module: {
    rules: [{
      test: /\.html$/,
      use: [{ loader: 'html-loader', options: { interpolate: true } }],
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['env'],
      },
    },
    {
      test: /\.(scss|css)$/,
      use: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        }],
        fallback: 'style-loader',
      }),
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]',
        outputPath: 'fonts/',
      },
    },
    {
      test: /\.(png|jpg|gif)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]',
        outputPath: 'img/',
      },
    },
    {
      test: /\.svg$/,
      loader: 'svg-inline-loader',
      options: {
        removeTags: true,
        removingTags: ['style'],
      },
    }],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new ExtractTextPlugin('styles.[hash].css'),
  ],
};
