const path = require('path');

const slswp = require('serverless-webpack');
const tsConfigPathPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  mode: slswp.lib.webpack.isLocal ? 'development' : 'production',
  context: __dirname,
  entry: slswp.lib.entries,
  devtool: slswp.lib.webpack.isLocal ? 'eval-cheap-module-source-map' : 'source-map',
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.json'],
    symlinks: false,
    cacheWithContext: false,
    plugins: [
      new tsConfigPathPlugin(),
    ],
  },
  optimization: {
    concatenateModules: false,
  },
  target: 'node',
  externals: [require('webpack-node-externals')()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, '.webpack'),
          path.resolve(__dirname, '.serverless')
        ],
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            experimentalWatchApi: true
          }
        }
      }
    ]
  },
  plugins: []
};