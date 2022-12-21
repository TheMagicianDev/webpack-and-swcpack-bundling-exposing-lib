const { config } = require('@swc/core/spack');

const path = require('path');

const p = (relativePath) => path.resolve(__dirname, relativePath);

module.exports = config({
  entry: {
    index: p('src/index.ts'),
  },
  output: {
    path: p('dist/prod/swc_bundle_minify'),
  },
  mode: 'production',
  target: 'browser',
  options: {
    module: {
      type: 'umd',
    },
    jsc: {
      parser: {
        syntax: 'typescript',
        decorators: true,
        dynamicImport: true,
        tsx: false,
      },
      minify: {
        compress: true,
        mangle: {
          keep_classnames: false,
          keep_private_props: false,
          keep_fnames: false,
          reserved: undefined,
          toplevel: true,
        },
        ecma: 'es5',
      },
    },
    minify: true,
    isModule: true,
  },
  // externalModules: ['node_modules\/(?!node-fetch)'],
});
