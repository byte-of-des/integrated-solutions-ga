export interface NearbyArea {
  name: string
  slug: string  // exact route folder name, e.g. 'flowery-branch-ga'
}

export interface CityData {
  slug: string            // exact route folder name
  name: string
  county: string
  eyebrow: string
  headline: string
  sub: string
  metaDescription: string
  cityPhoto: string       // '/images/cities/placeholder.png' until real photo added
  localProse: string[]    // 3–4 paragraphs
  faqs: { q: string; a: string }[]
  nearbyAreas: NearbyArea[]
  mapEmbedSrc: string     // full Google Maps embed URL; '' = hide map section
}
