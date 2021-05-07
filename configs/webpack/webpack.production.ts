import path from 'path';
import { Configuration } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const config: Configuration = {
  output: {
    filename: '[name].bundle.[hash].js',
    path: path.resolve(process.cwd(), 'dist'),
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
