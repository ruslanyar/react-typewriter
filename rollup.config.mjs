import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import preserveDirectives from 'rollup-preserve-directives';
import resolve from '@rollup/plugin-node-resolve';
import { swc, defineRollupSwcOption } from 'rollup-plugin-swc3';

import pkgJson from './package.json' assert { type: 'json' };

export default [
  {
    input: 'src/index.ts',
    external: Object.keys(pkgJson.peerDependencies || {}),
    output: [
      {
        file: pkgJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: pkgJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      swc(
        defineRollupSwcOption({
          tsconfig: './tsconfig.json',
          exclude: [/node_modules/, '**/*.stories.{ts,tsx}'],
          minify: true,
          sourceMaps: true,
          jsc: {
            parser: { syntax: 'typescript', tsx: true },
            minify: { sourceMap: true },
          },
        })
      ),
      postcss({
        modules: true,
        minimize: true,
      }),
      commonjs(),
      resolve(),
      preserveDirectives(),
    ],
  },
  {
    input: 'src/index.ts',
    output: [{ file: pkgJson.types, format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
