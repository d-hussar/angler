import path from 'path';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

type Configuration = WebpackConfiguration & {
  devServer?: WebpackDevServerConfiguration;
};

const NODE_ROOT = process.cwd();

const config: Configuration = {
  entry: {
    app: path.resolve(NODE_ROOT, 'stories/index.tsx'),
  },
  output: {
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  devtool: 'eval',
  devServer: {
    port: 6060,
    contentBase: './dist',
  },
  resolve: {
    alias: {
      sourceDir: path.resolve(NODE_ROOT, 'src'),
    },
  },
};

export default config;
