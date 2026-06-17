import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero/Hero'
import ServicesGrid from '@/components/ServicesGrid/ServicesGrid'
import CtaBand from '@/components/CtaBand/CtaBand'
import FaqAccordion from '@/components/FaqAccordion/FaqAccordion'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'ISG | Georgia AV & Home Technology Installer',
  description:
    'Licensed and insured AV installation in Cumming, Alpharetta, Johns Creek & North Atlanta. TV mounting, home theaters, security cameras, Starlink, and commercial AV.',
}

const SERVICES = [
  { icon: 'tv',      title: 'TV & Sound Bar Mounting',  desc: 'Perfect placement, hidden cables, professional finish — every time.',              href: '/residential/tv-mounting' },
  { icon: 'film',    title: 'Home Theaters',            desc: 'Projector or large-format display, Dolby Atmos surround, and one-touch control.',   href: '/residential/home-theater' },
  { icon: 'camera',  title: 'Security Cameras',         desc: 'Indoor and outdoor camera systems with remote monitoring and motion alerts.',         href: '/residential/security-cameras' },
  { icon: 'flag',    title: 'Golf Simulators',          desc: 'Professional-grade simulator rooms designed and installed to spec.',                  href: '/residential/golf-simulators' },
  { icon: 'wifi',    title: 'Wi-Fi & Networking',       desc: 'Whole-home mesh, structured cabling, and data closet builds.',                      href: '/residential/networking' },
  { icon: 'monitor', title: 'Commercial AV',            desc: 'Conference rooms, digital signage, and scalable AV for businesses.',                  href: '/commercial/conference-room-av' },
]

const REVIEWS = [
  { name: 'Michael T.', location: 'Cumming, GA',     text: 'Mounted three TVs with full wire concealment. Everything looks factory-installed. These guys are on another level.', stars: 5 },
  { name: 'Sarah R.',   location: 'Alpharetta, GA',  text: "Our conference room AV was a disaster before ISG came in. Now it just works. One button, everyone's on the call.",    stars: 5 },
  { name: 'James K.',   location: 'Johns Creek, GA', text: 'Built out our golf simulator room. Incredibly thorough — measured ceiling height at the exact swing path. Spot on.', stars: 5 },
]

const GALLERY = [
  '75" TV Mount in Cumming',
  'Conference Room AV in Alpharetta',
  'Custom Home Theater in Milton',
]

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Cumming, GA & North Atlanta"
        headline={<>Georgia&apos;s Expert AV &amp;<br />Home Tech Installer</>}
        subheadline="Integrated Solutions of Georgia — TV mounting, security cameras, golf simulators, Starlink, home theaters, and commercial AV from one licensed and insured team."
        secondaryCta={{ label: 'Call (555) 000-0000', href: 'tel:5550000000' }}
      />

      {/* Review platform trust bar */}
      <div className={styles.reviewBar}>
        <div className={`container ${styles.reviewBarInner}`}>
          <div className={styles.platform}>
            <span className={styles.google}>Google</span>
            <span className={styles.platformStars}>★★★★★</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.platform}>
            <span className={styles.angi}>Angi</span>
            <span className={styles.platformStars}>★★★★★</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.platform}>
            <span className={styles.yelp}>Yelp</span>
            <span className={styles.platformStars}>★★★★★</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.platform}>
            <span className={styles.homeAdvisor}>HomeAdvisor</span>
            <span className={styles.platformStars}>★★★★★</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.ratingTotal}>
            <span className={styles.ratingNum}>4.9/5</span>
            <span className={styles.ratingLabel}>Average Rating · 500+ Happy Clients</span>
          </div>
        </div>
      </div>

      {/* Services */}
      <ServicesGrid title="AV Installation Services in Georgia" services={SERVICES} />

      {/* Why Choose Us */}
      <section className={styles.whyChoose}>
        <div className="container">
          <div className={styles.whyInner}>
            <div className={styles.whyLeft}>
              <h2 className={styles.whyTitle}>Why Georgia Homeowners &amp; Businesses Choose ISG</h2>
              <ul className={styles.whyList}>
                {[
                  'Transparent, upfront pricing — no surprises',
                  'Clean professional installs with full wire concealment',
                  'Same-week and next-day scheduling available',
                  'Licensed & insured in Georgia',
                  'Friendly, experienced local technicians',
                  'Residential & commercial expertise under one roof',
                ].map(item => (
                  <li key={item} className={styles.whyItem}>
                    <svg className={styles.whyCheck} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <circle cx="12" cy="12" r="10" fill="rgba(37,99,235,0.1)" />
                      <path d="m9 12 2 2 4-4" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary">Get a Free Estimate →</Link>
            </div>
            <div className={styles.whyPhoto} aria-hidden>
              <div className={styles.whyPhotoPlaceholder}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
                <span>Team Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className={styles.areas}>
        <div className="container">
          <div className={styles.areasInner}>
            <div className={styles.areasMap} aria-hidden>
              <div className={styles.mapWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/georgia.png" alt="" className={styles.mapImg} />
                {[
                  { top: '26%', left: '38%' }, /* Cumming */
                  { top: '32%', left: '40%' }, /* Alpharetta */
                  { top: '36%', left: '36%' }, /* Roswell */
                  { top: '32%', left: '45%' }, /* Johns Creek */
                  { top: '43%', left: '38%' }, /* Atlanta */
                  { top: '38%', left: '49%' }, /* Duluth */
                  { top: '41%', left: '53%' }, /* Lawrenceville */
                  { top: '55%', left: '45%' }, /* Macon */
                ].map((pos, i) => (
                  <span
                    key={i}
                    className={styles.mapDot}
                    style={{ top: pos.top, left: pos.left, animationDelay: `${(i * 0.22).toFixed(2)}s` }}
                  />
                ))}
              </div>
            </div>
            <div className={styles.areasContent}>
              <h2 className={styles.areasTitle}>Proudly Serving Metro Atlanta &amp; Beyond</h2>
              <ul className={styles.citiesList}>
                {['Atlanta', 'Alpharetta', 'Cumming', 'Johns Creek', 'Milton', 'Roswell', 'Duluth', 'Lawrenceville'].map(c => (
                  <li key={c} className={styles.cityItem}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {c}
                  </li>
                ))}
              </ul>
              <p className={styles.areasDesc}>From Buckhead condos to suburban home theaters, we help Georgia homeowners and businesses upgrade their AV setup.</p>
              <Link href="/service-areas" className="btn-outline-dark">Check Your Area →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className={styles.reviews}>
        <div className="container">
          <h2 className={styles.reviewsTitle}>What Georgia Customers Are Saying</h2>
          <div className={styles.reviewGrid}>
            {REVIEWS.map(r => (
              <div key={r.name} className={styles.reviewCard}>
                <div className={styles.reviewStars}>{'★'.repeat(r.stars)}</div>
                <p className={styles.reviewText}>&ldquo;{r.text}&rdquo;</p>
                <div className={styles.reviewer}>
                  <span className={styles.reviewerName}>{r.name}</span>
                  <span className={styles.reviewerLoc}>{r.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className={styles.galleryPreview}>
        <div className="container">
          <h2 className={styles.galleryTitle}>Recent Installations</h2>
          <div className={styles.galleryGrid}>
            {GALLERY.map(label => (
              <div key={label} className={styles.galleryItem}>
                <div className={styles.galleryPhoto}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                    <circle cx="12" cy="13" r="3" />
                  </svg>
                </div>
                <p className={styles.galleryCaption}>{label}</p>
              </div>
            ))}
          </div>
          <div className={styles.galleryMore}>
            <Link href="/gallery" className="btn-outline-dark">View All Projects →</Link>
          </div>
        </div>
      </section>

      <CtaBand
        headline="Ready to Upgrade Your Home or Business AV Setup?"
        sub="Get a fast, free estimate from Georgia's trusted local AV team."
      />

      {/* FAQ */}
      <section className={styles.faq}>
        <div className="container">
          <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
          <FaqAccordion />
        </div>
      </section>
    </>
  )
}
