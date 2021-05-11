import path from 'path';
import { Configuration } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const NODE_ROOT = process.cwd();

const config: Configuration = {
  output: {
    filename: '[name].bundle.[hash].js',
    path: path.resolve(NODE_ROOT, 'dist'),
  },
  optimization: {
    noEmitOnErrors: true,
  },
  devtool: 'hidden-source-map',
  plugins: [
    new CleanWebpackPlugin(),
  ],
};

export default config;
