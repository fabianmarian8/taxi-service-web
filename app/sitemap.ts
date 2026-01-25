import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

// Mapovanie SK -> EN URL pre hreflang
const routeMapping: Record<string, string> = {
  '': '/en',
  '/ako-objednat-taxi-bez-aplikacie': '/en/how-to-order-taxi',
  '/ako-podat-staznost': '/en/complaints',
  '/cennik-taxi-zvolen': '/en/pricing',
  '/kedy-volat-taxi-vopred': '/en/when-to-book',
  '/letiskova-preprava': '/en/airport-transfer',
  '/nonstop-taxi': '/en/24-7-service',
  '/platba-v-taxiku': '/en/payment-options',
  '/taxi-na-vlak-autobus': '/en/station-transfer',
  '/taxi-s-detskou-sedackou': '/en/child-seat',
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zvolen-taxi.sk'
  const currentDate = new Date()

  const sitemapEntries: MetadataRoute.Sitemap = []

  // Generuj SK stránky s hreflang alternates
  Object.entries(routeMapping).forEach(([skRoute, enRoute]) => {
    // SK verzia
    sitemapEntries.push({
      url: `${baseUrl}${skRoute}`,
      lastModified: currentDate,
      changeFrequency: skRoute === '' ? 'weekly' : 'monthly',
      priority: skRoute === '' ? 1 : 0.8,
      alternates: {
        languages: {
          sk: `${baseUrl}${skRoute}`,
          en: `${baseUrl}${enRoute}`,
          'x-default': `${baseUrl}${skRoute}`,
        },
      },
    })

    // EN verzia
    sitemapEntries.push({
      url: `${baseUrl}${enRoute}`,
      lastModified: currentDate,
      changeFrequency: enRoute === '/en' ? 'weekly' : 'monthly',
      priority: enRoute === '/en' ? 1 : 0.8,
      alternates: {
        languages: {
          sk: `${baseUrl}${skRoute}`,
          en: `${baseUrl}${enRoute}`,
          'x-default': `${baseUrl}${skRoute}`,
        },
      },
    })
  })

  return sitemapEntries
}
