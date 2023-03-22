import path  from 'path'
// import glob from 'glob'
// const resolve = require('@rollup/plugin-node-resolve');
// const typescript = require('@rollup/plugin-typescript');
// const commonjs = require('@rollup/plugin-commonjs');

import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import clear from 'rollup-plugin-clear'

// const input = {}
// glob.sync(path.resolve(path.join('src', '**', 'index.ts'))).forEach((url) => {
//   const parts = url.split(path.sep)
//   console.log(parts)
//   input[parts[parts.length - 2]] = url
// })
const input = path.resolve(path.join('src', 'index.ts'))
const distDir = path.resolve('dist')
const plugins = [
  resolve(),
  commonjs(),
  typescript(),
  clear({
    targets: [distDir]
  }),
]
export default {
  input,
  output: {
    dir: distDir,
    entryFileNames: '[name].js',
    format: 'esm'
  },
  // output: [{
  //   dir: path.join(distDir, 'cjs'),
  //   // entryFileNames: '[name].js',
  //   format: 'cjs'
  // }, {
  //   dir: path.join(distDir, 'esm'),
  //   // entryFileNames: '[name].js',
  //   format: 'esm'
  // }],
  plugins,
}