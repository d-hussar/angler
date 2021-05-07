import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

type Configuration = WebpackConfiguration & {
  devServer?: WebpackDevServerConfiguration;
};

const config: Configuration = {
  output: {
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  devtool: 'eval',
  devServer: {
    port: 6060,
    contentBase: './dist',
  },
};

export default config;
