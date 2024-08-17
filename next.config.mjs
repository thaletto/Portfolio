export default {
    basePath: process.env.GITHUB_ACTIONS ? '/Portfolio' : '',
    assetPrefix: process.env.GITHUB_ACTIONS ? '/Portfolio/' : '',
    output: 'export'
};