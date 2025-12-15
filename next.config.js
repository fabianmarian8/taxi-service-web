/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export pre GitHub Pages
  output: 'export',

  // Image optimization configuration
  // Používame custom loader, ktorý vyberie pre-optimalizované obrázky
  // generované pomocou scripts/optimize-images.js
  //
  // Výhody:
      // ✅ WebP format (90-95% menšie súbory)
      // ✅ Responsive sizes (správna veľkosť pre každé zariadenie)
      // ✅ Lazy loading (ušetrený bandwidth)
      // ✅ Funguje so static export (GitHub Pages, atď.)
    images: {
      unoptimized: false, // Necháme Next.js používať náš loader pre generovanie srcset
      loader: 'custom',
      loaderFile: './lib/imageLoader.ts',    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 192, 256, 384],
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
