import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zvolen-taxi.sk'
  
  // Zoznam všetkých statických ciest
  const routes = [
    '',
    '/en',
    '/ako-objednat-taxi-bez-aplikacie',
    '/ako-podat-staznost',
    '/cennik-taxi-zvolen',
    '/kedy-volat-taxi-vopred',
    '/letiskova-preprava',
    '/nonstop-taxi',
    '/platba-v-taxiku',
    '/taxi-na-vlak-autobus',
    '/taxi-s-detskou-sedackou',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
