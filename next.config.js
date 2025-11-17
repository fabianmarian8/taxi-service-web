/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export pre GitHub Pages
  output: 'export',

  // Disable image optimization pre static export
  images: {
    unoptimized: true,
  },

  // Base path pre GitHub Pages (upraviť podľa potreby)
  basePath: '',

  // Disable trailing slashes
  trailingSlash: true,

  // TypeScript config
  typescript: {
    ignoreBuildErrors: false,
  },

  // ESLint config
  eslint: {
    ignoreDuringBuilds: false,
  },
}

export default nextConfig;
