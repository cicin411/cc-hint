import { defineConfig } from 'tsup';

export default defineConfig({
    entry: [
        'src/extension.ts'
    ],
    external: [
        'vscode',
    ],
    // 默认不会打包package里面的 dep,但是我们还是需要的,其实也可以不用这个库，这里面就练练手吧
    noExternal: ['pretty'],  
    format: [
        'cjs',
    ],
    shims: false,
    loader: {
        // 'json': 'json'
    },
});
