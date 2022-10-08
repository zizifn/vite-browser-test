import { resolve } from 'path';

export default {
    // resolve: {
    //     alias: {
    //         './node': './browser'
    //     }
    // },
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, './src/index.js'),
            name: 'MyLib',
            // the proper extensions will be added
            fileName: 'my-vite-lib',
            formats: ['es', 'umd'],
        },
    }
}