import type { CityData } from '@/data/cities/types'
import type { Project } from '@/data/types'
import Image from 'next/image'
import Link from 'next/link'
import { Tv, Camera, Satellite, Film, Monitor } from 'lucide-react'
import CtaBand from '@/components/CtaBand/CtaBand'
import reviewsJson from '@/data/reviews.json'
import projectsJson from '@/data/projects.json'
import styles from './LocationPage.module.css'

const SERVICES = [
  { Icon: Tv,       label: 'TV & Sound Bar Mounting', href: '/residential/tv-mounting' },
  { Icon: Film,     label: 'Home Theaters',           href: '/residential/home-theater' },
  { Icon: Camera,   label: 'Security Cameras',        href: '/residential/security-cameras' },
  { Icon: Satellite,label: 'Starlink Installation',   href: '/residential/starlink' },
  { Icon: Monitor,  label: 'Commercial AV',           href: '/commercial/conference-room-av' },
]

interface Review {
  name: string
  rating: number
  date: string
  text: string
  services: string[]
}

export default function LocationPage({ city }: { city: CityData }) {
  const reviews = (reviewsJson as Review[])
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3)

  const allProjects = projectsJson as Project[]
  const cityProjects = allProjects.filter(p => p.city === city.slug)
  const displayProjects = (cityProjects.length > 0 ? cityProjects : allProjects).slice(0, 3)
  const projectsLabel = cityProjects.length > 0 ? `Our Work in ${city.name}` : 'Our Work'

  const faqSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: city.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }).replace(/<\/script>/gi, '<\\/script>')

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      {/* 1. Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src={city.cityPhoto}
            alt={`${city.name}, Georgia`}
            fill
            className={styles.heroBgImg}
            priority
            sizes="100vw"
          />
          <div className={styles.heroBgOverlay} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.eyebrow}>{city.eyebrow}</p>
          <h1 className={styles.headline}>{city.headline}</h1>
          <p className={styles.sub}>{city.sub}</p>
          <div className={styles.actions}>
            <Link href="/contact" className="btn-primary">Get a Free Quote →</Link>
            <a href="tel:7709127642" className="btn-outline">Call 770-912-7642</a>
          </div>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className={styles.services}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Services in {city.name}, GA</h2>
          <div className={styles.serviceGrid}>
            {SERVICES.map(({ Icon, label, href }) => (
              <Link key={href} href={href} className={styles.serviceCard}>
                <span className={styles.serviceIcon}><Icon size={18} strokeWidth={1.75} /></span>
                <span className={styles.serviceLabel}>{label}</span>
                <span className={styles.serviceArrow}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Local Prose */}
      <section className={styles.prose}>
        <div className="container">
          <div className={styles.proseInner}>
            <h2 className={styles.proseTitle}>Serving {city.name} &amp; {city.county}</h2>
            {city.localProse.map((para, i) => (
              <p key={i} className={styles.prosePara}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Testimonials */}
      <section className={styles.reviews}>
        <div className="container">
          <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
          <div className={styles.reviewGrid}>
            {reviews.map(r => (
              <div key={r.name} className={styles.reviewCard}>
                <p className={styles.reviewStars}>★★★★★</p>
                <p className={styles.reviewText}>"{r.text}"</p>
                <p className={styles.reviewName}>{r.name.toLowerCase().replace(/\b\w/g, c => c.toUpperCase())}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Work Gallery */}
      <section className={styles.gallery}>
        <div className="container">
          <h2 className={styles.sectionTitle}>{projectsLabel}</h2>
          <div className={styles.projectGrid}>
            {displayProjects.map(p => (
              <div key={p.id} className={styles.projectCard}>
                <div className={styles.projectImgWrap}>
                  <Image
                    src={p.after.src}
                    alt={p.after.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={styles.projectImg}
                  />
                </div>
                <div className={styles.projectBody}>
                  <p className={styles.projectCaption}>{p.caption}</p>
                  <span className={styles.projectBadge}>{p.service.replace(/-/g, ' ')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className={styles.faq}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            {city.faqs.map(f => (
              <details key={f.q} className={styles.faqItem}>
                <summary className={styles.faqQ}>{f.q}</summary>
                <p className={styles.faqA}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Nearby Areas */}
      <section className={styles.nearby}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Also Serving Nearby Communities</h2>
          <div className={styles.nearbyGrid}>
            {city.nearbyAreas.map(a => (
              <Link key={a.slug} href={`/service-areas/${a.slug}`} className={styles.nearbyChip}>
                {a.name}, GA →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Map */}
      {city.mapEmbedSrc && (
        <section className={styles.map}>
          <div className="container">
            <iframe
              src={city.mapEmbedSrc}
              title={`Map of ${city.name}, Georgia`}
              width="100%"
              height="400"
              loading="lazy"
              className={styles.mapIframe}
              allowFullScreen
            />
          </div>
        </section>
      )}

      {/* 9. CTA Band */}
      <CtaBand
        headline={`Schedule your ${city.name} install.`}
        sub="Free in-home quote. We'll assess your space and give you an honest estimate — usually within 24 hours."
      />
    </>
  )
}
