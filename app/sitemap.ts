import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zvolen-taxi.sk'
  
  // Zoznam všetkých ciest (Slovak + English)
  const routes = [
    // Slovak
    '',
    '/ako-objednat-taxi-bez-aplikacie',
    '/ako-podat-staznost',
    '/cennik-taxi-zvolen',
    '/kedy-volat-taxi-vopred',
    '/letiskova-preprava',
    '/nonstop-taxi',
    '/platba-v-taxiku',
    '/taxi-na-vlak-autobus',
    '/taxi-s-detskou-sedackou',
    // English
    '/en',
    '/en/airport-transfer',
    '/en/how-to-order-taxi',
    '/en/payment-options',
    '/en/child-seat',
    '/en/24-7-service',
    '/en/pricing',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/en' ? 'weekly' : 'monthly',
    priority: route === '' || route === '/en' ? 1 : 0.8,
  }))
}
