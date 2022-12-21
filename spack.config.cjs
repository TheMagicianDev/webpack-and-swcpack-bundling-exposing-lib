const { config } = require('@swc/core/spack');

const path = require('path');

const p = (relativePath) => path.resolve(__dirname, relativePath);

module.exports = config({
  entry: {
    index: p('src/index.ts'),
  },
  output: {
    path: p('dist/swc_bundle'),
  },
  // mode: 'development',
  mode: 'none',
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
    isModule: true,
    module: undefined,
  },
  // externalModules: ['node_modules\/(?!node-fetch)'],
});
