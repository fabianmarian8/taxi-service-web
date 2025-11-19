#!/usr/bin/env node

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const IMAGES_TO_OPTIMIZE = [
  // Hero image
  {
    src: 'lexi-anderson-G8wPrJyNqWQ-unsplash.webp',
    sizes: [640, 828, 1080, 1920],
    quality: 85,
    priority: true
  },
  // Logo
  {
    src: 'flux-1-kontext-pro_a_Modern_logo_design_f.png',
    sizes: [147], // Original size
    quality: 90,
    priority: true
  },
  // Service images
  {
    src: 'images/processed/airport-transfer.png',
    sizes: [640, 828, 1200],
    quality: 80
  },
  {
    src: 'images/processed/family-transfer.png',
    sizes: [640, 828, 1200],
    quality: 80
  },
  {
    src: 'images/processed/car-interior.png',
    sizes: [640, 828, 1200],
    quality: 80
  },
  {
    src: 'images/processed/hotel-night.png',
    sizes: [640, 828, 1200],
    quality: 80
  },
  // Partner logos
  {
    src: 'images/processed/bratislava-airport.png',
    sizes: [192],
    quality: 75
  },
  {
    src: 'images/processed/budapest-airport.png',
    sizes: [192],
    quality: 75
  },
  {
    src: 'images/processed/europa-shopping.png',
    sizes: [192],
    quality: 75
  },
  {
    src: 'images/processed/polana-hotel.jpg',
    sizes: [192],
    quality: 75
  },
  {
    src: 'images/processed/ministry-of-fun.png',
    sizes: [192],
    quality: 75
  },
  {
    src: 'images/processed/ministry-of-fun-white.png',
    sizes: [192],
    quality: 75
  },
];

async function optimizeImage(imageConfig) {
  const { src, sizes, quality } = imageConfig;
  const inputPath = path.join(PUBLIC_DIR, src);

  // Check if file exists
  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  Skipping ${src} - file not found`);
    return;
  }

  console.log(`🖼️  Processing: ${src}`);

  const ext = path.extname(src);
  const baseName = path.basename(src, ext);
  const dirName = path.dirname(src);

  // Create output directory
  const outputDir = path.join(PUBLIC_DIR, dirName, 'optimized');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  try {
    // Get original image metadata
    const metadata = await sharp(inputPath).metadata();

    for (const size of sizes) {
      const width = Math.min(size, metadata.width);

      // Create WebP version (best compression)
      const webpOutput = path.join(outputDir, `${baseName}-${width}w.webp`);
      await sharp(inputPath)
        .resize(width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality, effort: 6 })
        .toFile(webpOutput);

      const webpStats = fs.statSync(webpOutput);
      console.log(`   ✓ WebP ${width}w: ${(webpStats.size / 1024).toFixed(1)} KB`);

      // Keep original format as fallback (for browsers that don't support WebP)
      const fallbackExt = ext === '.png' ? '.png' : '.jpg';
      const fallbackOutput = path.join(outputDir, `${baseName}-${width}w${fallbackExt}`);

      if (fallbackExt === '.png') {
        await sharp(inputPath)
          .resize(width, null, {
            withoutEnlargement: true,
            fit: 'inside'
          })
          .png({ quality, compressionLevel: 9 })
          .toFile(fallbackOutput);
      } else {
        await sharp(inputPath)
          .resize(width, null, {
            withoutEnlargement: true,
            fit: 'inside'
          })
          .jpeg({ quality, mozjpeg: true })
          .toFile(fallbackOutput);
      }

      const fallbackStats = fs.statSync(fallbackOutput);
      console.log(`   ✓ ${fallbackExt.toUpperCase().slice(1)} ${width}w: ${(fallbackStats.size / 1024).toFixed(1)} KB`);
    }

    // Calculate total savings
    const originalStats = fs.statSync(inputPath);
    console.log(`   📊 Original: ${(originalStats.size / 1024).toFixed(1)} KB`);

  } catch (error) {
    console.error(`   ❌ Error processing ${src}:`, error.message);
  }

  console.log('');
}

async function main() {
  console.log('🚀 Starting image optimization...\n');

  const startTime = Date.now();

  for (const imageConfig of IMAGES_TO_OPTIMIZE) {
    await optimizeImage(imageConfig);
  }

  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);

  console.log(`✅ Optimization complete in ${duration}s`);
  console.log('\n📝 Next steps:');
  console.log('   1. Optimized images are in public/*/optimized/ directories');
  console.log('   2. WebP format will be used by modern browsers (smaller file size)');
  console.log('   3. Original format kept as fallback for older browsers');
  console.log('   4. Run "npm run build" to build with optimized images');
}

main().catch(console.error);
