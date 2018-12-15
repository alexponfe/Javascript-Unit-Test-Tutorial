const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    testBundle: './src/testFiles.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './test'),
    publicPath: '',
  },
  node: {
    fs: 'empty',
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, './test'),
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000, // Convert images < 8kb to base64 strings
            name: 'images/[name].[ext]',
            quality: 85,
          },
        }],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [
                  precss,
                  autoprefixer,
                ];
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'mocha-loader'],
      },
      {
        test: /\.hbs$/,
        use: [
          'handlebars-loader',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|otf|eot|svg)(\?[a-z0-9]+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        }],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin('[name].css'),
    new CleanWebpackPlugin(['test', 'coverage']),
    new HtmlWebpackPlugin({
      title: 'testBundle',
      chunks: ['testBundle'],
      filename: 'index.html',
      template: 'src/templates/test.hbs',
    }),
  ],
};
