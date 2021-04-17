const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/src/index.html'),
  filename: './index.html',
  minify: {
    collapseWhitespace: isProd,
  }
})
const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    }
  }

  if (isProd) {
    config.minimizer = [
      new TerserWebpackPlugin()
    ];
  }
  return config;
}
module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  plugins: [
    htmlWebpackPlugin,
    new CleanWebpackPlugin(),
  ],
  optimization: optimization(),
  resolve: {
    extensions: ['.js', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  devServer: {
    port: 3001,
    hot: isDev
  }
};
