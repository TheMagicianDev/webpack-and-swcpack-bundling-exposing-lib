const path = require('path');

const p = (pth) => path.resolve(__dirname, pth);

module.exports = {
  entry: './src/index.ts',
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
  },
  output: {
    filename: 'index.js',
    path: p('dist/lib/webpack_bundle'),
    library: 'HeroJs',
  },
};
