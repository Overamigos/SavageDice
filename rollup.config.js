import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const watch = !process.env.ROLLUP_WATCH;

const plugins = [
    resolve(),
    commonjs(),
    watch && terser(),
    !watch && serve({ contentBase: './public', verbose: true }),
    !watch && livereload(),
];

export default [
    {
        input: 'src/index.js',
        output: {
            file: 'public/index.js',
            format: 'esm',
            sourcemap: true
        },
        plugins,
    },
];
