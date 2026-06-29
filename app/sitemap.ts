import type { MetadataRoute } from 'next'

const BASE = 'https://www.integratedsolutionsofga.com'

const CITY_SLUGS = [
  'cumming-ga', 'alpharetta-ga', 'johns-creek-ga', 'milton-ga',
  'gainesville-ga', 'dawsonville-ga', 'dahlonega-ga', 'flowery-branch-ga',
  'buford-ga', 'canton-ga', 'suwanee-ga', 'roswell-ga',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                           lastModified: new Date(), changeFrequency: 'monthly',  priority: 1.0 },
    { url: `${BASE}/about`,                lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.8 },
    { url: `${BASE}/contact`,              lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${BASE}/gallery`,              lastModified: new Date(), changeFrequency: 'weekly',   priority: 0.7 },
    { url: `${BASE}/service-areas`,        lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${BASE}/privacy`,              lastModified: new Date(), changeFrequency: 'yearly',   priority: 0.2 },

    // Residential service pages
    { url: `${BASE}/residential/tv-mounting`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/residential/home-theater`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/residential/security-cameras`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/residential/starlink`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Commercial service pages
    { url: `${BASE}/commercial`,                    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/commercial/conference-room-av`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/commercial/displays`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/commercial/surveillance`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/commercial/networking`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/commercial/restaurant-bar`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/commercial/office-retail`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/commercial/automation`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // City location pages
    ...CITY_SLUGS.map(slug => ({
      url: `${BASE}/service-areas/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
  ]
}
