import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import { glob } from 'glob'
import type { RollupOptions } from 'rollup'
import bookmarklet from 'rollup-plugin-bookmarklet'
import dotenv from "rollup-plugin-dotenv"

const entryPaths = glob.sync('src/**/main.ts')
const configs: RollupOptions[] = entryPaths.map(entryPath => ({
  input: entryPath,
  output: {
    file: entryPath.replace(/^src\//, 'dist/').replace(/\/(.+)\/main\.ts$/, '/$1.min.js'),
    format: 'iife'
  },
  plugins: [
    typescript(),
    terser(),
    bookmarklet(),
    dotenv(),
  ]
}))

export default configs
