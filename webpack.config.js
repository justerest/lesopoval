const glob = require('glob-all');
const path = require('path');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');

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

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(
    new PurifyCSSPlugin({
      paths: glob.sync([
        path.join(__dirname, './src/**/*.html'),
        path.join(__dirname, './src/**/*.js'),
      ]),
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true,
        discardComments: { removeAll: true },
      },
    }),
    new BundleAnalyzerPlugin()
  );
}
