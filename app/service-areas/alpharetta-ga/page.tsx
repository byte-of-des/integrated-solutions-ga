import type { Metadata } from 'next'
import Link from 'next/link'
import { Tv, Camera, Satellite, Film, Volume2, Wifi, Zap, Monitor } from 'lucide-react'
import CtaBand from '@/components/CtaBand/CtaBand'
import styles from './page.module.css'

const ICON_MAP = { tv: Tv, camera: Camera, satellite: Satellite, film: Film, volume2: Volume2, wifi: Wifi, zap: Zap, monitor: Monitor } as const

export const metadata: Metadata = {
  title: 'AV Installation in Alpharetta, GA | Integrated Solutions of Georgia',
  description: 'Professional AV and home technology installation in Alpharetta, GA — TV mounting, home theaters, Starlink, security cameras, Ubiquiti networking, smart home automation, and commercial AV.',
}

const SERVICES = [
  { icon: 'tv' as const,        label: 'TV & Sound Bar Mounting',  href: '/residential/tv-mounting' },
  { icon: 'camera' as const,    label: 'Security Cameras',         href: '/residential/security-cameras' },
  { icon: 'satellite' as const, label: 'Starlink Installation',    href: '/residential/starlink' },
  { icon: 'film' as const,      label: 'Home Theaters',            href: '/residential/home-theater' },
  { icon: 'volume2' as const,   label: 'Whole-Home Audio',         href: '/residential/whole-home-audio' },
  { icon: 'wifi' as const,      label: 'Wi-Fi & Networking',       href: '/residential/networking' },
  { icon: 'zap' as const,       label: 'Smart Home & Automation',  href: '/residential/automation' },
  { icon: 'monitor' as const,   label: 'Commercial AV',            href: '/commercial/displays' },
]

export default function AlpharettaPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.eyebrow}>North Fulton County, GA</p>
          <h1 className={styles.headline}>AV Installation in Alpharetta, GA</h1>
          <p className={styles.sub}>From smart home automation to whole-home audio, ISG brings professional AV installation to Alpharetta homeowners and businesses. Licensed, insured, and serving North Fulton County.</p>
          <div className={styles.actions}>
            <Link href="/contact" className="btn-primary">Get a Free Quote →</Link>
            <a href="tel:7709127642" className="btn-outline">Call 770-912-7642</a>
          </div>
        </div>
        <div className={styles.heroGrid} aria-hidden />
      </section>

      <section className={styles.services}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Services in Alpharetta, GA</h2>
          <div className={styles.serviceGrid}>
            {SERVICES.map(s => (
              <Link key={s.href} href={s.href} className={styles.serviceCard}>
                <span className={styles.serviceIcon}>{(() => { const Icon = ICON_MAP[s.icon]; return <Icon size={18} strokeWidth={1.75} /> })()}</span>
                <span className={styles.serviceLabel}>{s.label}</span>
                <span className={styles.serviceArrow}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.local}>
        <div className="container">
          <div className={styles.localInner}>
            <div>
              <h2 className={styles.localTitle}>Serving Alpharetta &amp; North Fulton County</h2>
              <p>Alpharetta homeowners expect a high standard — and that's exactly what we deliver. Whether you're upgrading a media room, installing a whole-home Ubiquiti network, or automating your lights and audio, we handle every detail with care.</p>
              <p>We serve neighborhoods throughout Alpharetta including Windward, North Point, Downtown Alpharetta, and surrounding communities in North Fulton County.</p>
            </div>
            <div className={styles.localHighlights}>
              <div className={styles.highlight}>
                <span className={styles.hlIcon}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg></span>
                <div>
                  <strong>Same-Week Scheduling</strong>
                  <p>Most jobs booked within 3–5 days</p>
                </div>
              </div>
              <div className={styles.highlight}>
                <span className={styles.hlIcon}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></span>
                <div>
                  <strong>North Atlanta Local</strong>
                  <p>Based in Cumming, minutes from Alpharetta</p>
                </div>
              </div>
              <div className={styles.highlight}>
                <span className={styles.hlIcon}>✓</span>
                <div>
                  <strong>Licensed &amp; Insured in GA</strong>
                  <p>Fully covered for every job</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        headline="Schedule your Alpharetta install."
        sub="Free in-home quote. We'll assess your space and give you an honest estimate — usually within 24 hours."
      />
    </>
  )
}
