import type { Metadata } from 'next'
import Link from 'next/link'
import CtaBand from '@/components/CtaBand/CtaBand'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Service Areas — North Atlanta AV Installation',
  description: 'ISG serves Cumming, Alpharetta, Johns Creek, Milton & surrounding North Atlanta communities with professional AV and home technology installation.',
}

const AREAS = [
  { name: 'Cumming, GA',       href: '/service-areas/cumming-ga',       primary: true, desc: 'Our home base in Forsyth County. Same-day and next-day availability.' },
  { name: 'Alpharetta, GA',    href: '/service-areas/alpharetta-ga',    desc: 'Technology-forward homes and businesses in North Fulton County.' },
  { name: 'Johns Creek, GA',   href: '/service-areas/johns-creek-ga',   desc: 'Residential and commercial installs throughout Johns Creek.' },
  { name: 'Milton, GA',        href: '/service-areas/milton-ga',        desc: 'Estate homes and equestrian properties in North Fulton County.' },
  { name: 'Gainesville, GA',   href: '/service-areas/gainesville-ga',   desc: 'Hall County residential and business installs near Lake Lanier.' },
  { name: 'Dawsonville, GA',   href: '/service-areas/dawsonville-ga',   desc: 'Serving Dawson County homes and businesses along GA-400.' },
  { name: 'Dahlonega, GA',     href: '/service-areas/dahlonega-ga',     desc: 'Lumpkin County homes and North Georgia mountain properties.' },
  { name: 'Flowery Branch, GA', href: '/service-areas/flowery-branch-ga', desc: 'Hall County lakeside communities and businesses.' },
  { name: 'Buford, GA',        href: '/service-areas/buford-ga',        desc: 'Hall and Gwinnett County residential and commercial installs.' },
  { name: 'Canton, GA',        href: '/service-areas/canton-ga',        desc: 'Cherokee County homes and rapidly growing communities.' },
  { name: 'Suwanee, GA',       href: '/service-areas/suwanee-ga',       desc: 'Gwinnett County residential and commercial work.' },
  { name: 'Roswell, GA',       href: '/service-areas/roswell-ga',       desc: 'Historic North Fulton community — residential and commercial.' },
]

export default function ServiceAreasPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.eyebrow}>North Atlanta & Surrounding Counties</p>
          <h1 className={styles.headline}>Where We Work</h1>
          <p className={styles.sub}>Based in Cumming, GA — we serve homeowners and businesses across Forsyth, Fulton, Gwinnett, Dawson, and Cherokee counties.</p>
        </div>
        <div className={styles.heroGrid} aria-hidden />
      </section>

      <section className={styles.areas}>
        <div className="container">
          <div className={styles.grid}>
            {AREAS.map(a => (
              <div key={a.name} className={`${styles.card} ${a.primary ? styles.cardPrimary : ''}`}>
                {a.primary && <span className={styles.primaryBadge}>Home Base</span>}
                <h2 className={styles.areaName}>{a.name}</h2>
                <p className={styles.areaDesc}>{a.desc}</p>
                {a.href
                  ? <Link href={a.href} className={styles.areaLink}>Learn more →</Link>
                  : <span className={styles.areaComing}>Page coming soon</span>
                }
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        headline="Don't see your city?"
        sub="We serve a broad area across North Atlanta. Give us a call or send a message — if we can get to you, we will."
        primaryLabel="Contact Us →"
        secondaryLabel="View Services"
        secondaryHref="/residential/tv-mounting"
      />
    </>
  )
}
