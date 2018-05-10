import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'

export default {
  input: 'lib/easy_marker.js',
  output: {
    file: 'dist/easy-marker.dist.js',
    format: 'iife',
    name: 'EasyMarker',
  },
  plugins: [
    uglify(),
    resolve({
      main: true,
      jsnext: true,
    }),
    commonjs({
      include: 'node_modules/babel-runtime/**',
    }),
    babel({
      runtimeHelpers: true,
      presets: [
        [
          'env', {
            targets: { browsers: ['android>=4', 'ios>=8'] },
            modules: false,
          },
        ],
      ],
      plugins: [
        ['transform-runtime', {
          polyfill: true,
        }],
      ],
    }),
  ],
}
