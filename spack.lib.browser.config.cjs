const { config } = require('@swc/core/spack');

const path = require('path');

const p = (relativePath) => path.resolve(__dirname, relativePath);

module.exports = config({
  entry: {
    index: p('src/index.browser.ts'),
  },
  output: {
    path: p('dist/lib/swc-browser/swc_bundle'),
  },
  mode: 'none',
  target: 'browser',
  options: {
    jsc: {
      target: 'es5',
      keepClassNames: false,
      loose: false,
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
      minify: {
        module: true,
        ecma: 2015,
        toplevel: false,
        compress: {
          negate_iife: true,
        },
        format: {
          wrapIife: true,
        },
      },
    },
    sourceMaps: true,
    isModule: true,
    module: {
      type: 'commonjs',
      // globals: {
      //   HeroJs: 'default',
      // },
    },
  },
  // externalModules: ['node_modules\/(?!node-fetch)'],
});
