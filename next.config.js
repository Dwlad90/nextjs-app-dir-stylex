/** @type {import('next').NextConfig} */
const path = require('path');
const stylexPlugin = require('@stylexswc/nextjs-plugin');
const rootDir =  __dirname;

const nextConfig = {
  swcMinify: true,
  transpilePackages: [
    '@bonterratech/stitch-tokens',
    '@bonterratech/stitch-extension',
    "@stylexjs/open-props"
  ],
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    swcPlugins: [[
      "@stylexswc/swc-plugin",
      {
        dev: process.env.NODE_ENV === 'development',
        genConditionalClasses: true,
        treeshakeCompensation: true,
        aliases: {
          '@/*': [path.join(rootDir, '*')],
        },
        unstable_moduleResolution: {
          type: 'commonJS',
          rootDir: rootDir,
        },
      },
    ]],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = stylexPlugin({
  rootDir: rootDir,
})(nextConfig);