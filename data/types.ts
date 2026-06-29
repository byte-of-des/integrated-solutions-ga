export interface ProjectPhoto {
  src: string  // path relative to /public, e.g. '/images/work/alpharetta-home-theater-1.jpg'
  alt: string
}

export interface Project {
  id: string
  title: string
  description: string
  caption: string
  city: string    // city slug matching CityData.slug, e.g. 'alpharetta-ga'
  service: string // route segment: 'tv-mounting' | 'home-theater' | 'security-cameras' | 'starlink' | 'golf-simulators' | 'conference-room-av'
  date: string    // YYYY-MM
  before: ProjectPhoto | null
  after: ProjectPhoto
}
