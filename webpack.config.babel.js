import webpack from 'webpack';


export default {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    './app',
  ],

  output: {
    filename: 'app.bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?cacheDirectory'],
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css?modules&sourceMap!sass'],
      },
    ],
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
  },

  devServer: {
    hot: true,
    inline: true,
    progress: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  eslint: {
    configFile: '.eslintrc',
  },
};
