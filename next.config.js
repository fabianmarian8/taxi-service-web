/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export pre GitHub Pages
  output: 'export',

  // Image optimization configuration
  // NOTE: S 'output: export' sú obrázky unoptimized, ale Next.js Image
  // komponenty stále poskytujú lazy loading a responsive sizing
  //
  // Pre plnú optimalizáciu obrázkov:
  // - Ak hostíte na Vercel: odstráňte 'output: export' a 'unoptimized: true'
  // - Ak chcete static export: použite custom image loader (Cloudinary, Imgix, atď.)
  images: {
    unoptimized: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Base path pre GitHub Pages (upraviť podľa potreby)
  basePath: '',

  // Disable trailing slashes
  trailingSlash: false,

  // TypeScript config
  typescript: {
    ignoreBuildErrors: false,
  },
}

export default nextConfig;
