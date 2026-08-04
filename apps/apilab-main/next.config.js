//@ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.APILAB_STATIC_EXPORT === 'true' ? 'export' : undefined,
  images: {
    unoptimized: process.env.APILAB_STATIC_EXPORT === 'true',
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

module.exports = nextConfig;
