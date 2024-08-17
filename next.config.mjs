export default {
    basePath: process.env.GITHUB_ACTIONS ? '/thaletto.github.io' : '',
    assetPrefix: process.env.GITHUB_ACTIONS ? '/thaletto.github.io/' : '',
    output: 'export'
};