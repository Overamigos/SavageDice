import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const prod = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/main.js',
    output: {
        file: 'public/bundle.js',
        format: 'esm',
        sourcemap: true
    },
    plugins: [
        resolve(),
        commonjs(),
        prod && terser(),
    ]
};
