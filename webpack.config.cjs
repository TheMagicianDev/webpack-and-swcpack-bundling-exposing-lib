const path = require('path');

const p = (pth) => path.resolve(__dirname, pth);

module.exports = {
  entry: {
    index: './src/index.ts',
  },
  mode: 'development',
  devtool: false,
  target: ['web', 'es5'],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    extensionAlias: {
      '.js': ['.ts'],
    },
    // plugins: [
    //   new TsconfigPathsPlugin({
    //     baseUrl: './src',
    //     /* options: see below */
    //   }),
    // ],
  },
  output: {
    path: p('dist/webpack_bundle/'),
  },
};
