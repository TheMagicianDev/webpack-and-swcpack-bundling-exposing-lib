const { config } = require('@swc/core/spack');

const path = require('path');

const p = (relativePath) => path.resolve(__dirname, relativePath);

module.exports = config({
  entry: {
    index: p('src/index.ts'),
  },
  output: {
    path: p('dist/lib/swc_bundle'),
  },
  mode: 'production',
  target: 'browser',
  options: {
    jsc: {
      target: 'es5',
      parser: {
        syntax: 'typescript',
        tsx: false,
        decorators: true,
        dts: true,
        dynamicImport: true,
      },
      baseUrl: '.',
      paths: {
        '/*': ['./src/*'],
      },
    },
    sourceMaps: true,
    isModule: false,
    module: {
      type: 'umd',
      // globals: {
      //   HeroJs: 'default',
      // },
    },
  },
  // externalModules: ['node_modules\/(?!node-fetch)'],
});
