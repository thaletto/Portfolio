

/**
 * @type {import('next').NextConfig}
 */
export default {
  output: 'export',
  basePath: process.env.GITHUB_ACTIONS ? '/Portfolio' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/Portfolio/' : '',
  images: { unoptimized: true }
}