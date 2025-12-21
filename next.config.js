/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Cloudflare Pages
  output: 'export',

  // Image optimization configuration
  // Images are pre-optimized via scripts/optimize-images.js
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './lib/imageLoader.ts',
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 192, 256, 384],
  },

  // Base path remains empty for Cloudflare Pages custom domains
  basePath: '',

  trailingSlash: false,

  typescript: {
    ignoreBuildErrors: false,
  },
}

export default nextConfig;
