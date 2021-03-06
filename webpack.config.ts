import path from 'path';
import {
  Configuration,
  DefinePlugin,
} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpackMerge from 'webpack-merge';

import development from './configs/webpack/webpack.development';
import production from './configs/webpack/webpack.production';

type WEBPACK_ENV = 'production' | 'development';

const NODE_ENV = process.env.NODE_ENV as WEBPACK_ENV;
const devMode = NODE_ENV !== 'production';

const config: Configuration = webpackMerge({
  mode: NODE_ENV,
  entry: {
    app: path.resolve(__dirname, 'src/index.tsx'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'ts-loader',
        ],
        exclude: /node_modules/,
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'angler.js',
      template: path.resolve(__dirname, 'stories/template.html'),
    }),
    new DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
    }),
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: [
      '.js',
      '.ts',
      '.tsx',
    ],
  },
}, devMode ? development : production);

export default config;
