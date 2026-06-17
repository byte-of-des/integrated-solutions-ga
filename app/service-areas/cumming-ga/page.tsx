import type { Metadata } from 'next'
import Link from 'next/link'
import { Tv, Lock, Flag, Satellite, Film, Volume2, Wifi, Building2 } from 'lucide-react'
import CtaBand from '@/components/CtaBand/CtaBand'
import styles from './page.module.css'

const ICON_MAP = { tv: Tv, lock: Lock, flag: Flag, satellite: Satellite, film: Film, volume2: Volume2, wifi: Wifi, building2: Building2 } as const

export const metadata: Metadata = {
  title: 'AV Installation in Cumming, GA',
  description: 'ISG is based in Cumming, GA — serving Forsyth County with professional TV mounting, home theaters, security cameras, Starlink, and commercial AV installation.',
}

const SERVICES = [
  { icon: 'tv' as const, label: 'TV & Sound Bar Mounting', href: '/residential/tv-mounting' },
  { icon: 'lock' as const, label: 'Security Cameras', href: '/residential/security-cameras' },
  { icon: 'flag' as const, label: 'Golf Simulators', href: '/residential/golf-simulators' },
  { icon: 'satellite' as const, label: 'Starlink Installation', href: '/residential/starlink' },
  { icon: 'film' as const, label: 'Home Theaters', href: '/residential/home-theater' },
  { icon: 'volume2' as const, label: 'Whole-Home Audio', href: '/residential/whole-home-audio' },
  { icon: 'wifi' as const, label: 'Wi-Fi & Networking', href: '/residential/networking' },
  { icon: 'building2' as const, label: 'Conference Room AV', href: '/commercial/conference-room-av' },
]

export default function CummingPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.eyebrow}>Forsyth County, GA · Home Base</p>
          <h1 className={styles.headline}>AV Installation in Cumming, GA</h1>
          <p className={styles.sub}>We're based in Cumming — which means same-day and next-day availability, and a team that knows the area. TV mounting, home theaters, Starlink, security cameras, and commercial AV.</p>
          <div className={styles.actions}>
            <Link href="/contact" className="btn-primary">Get a Free Quote →</Link>
            <a href="tel:5550000000" className="btn-outline">Call (555) 000-0000</a>
          </div>
        </div>
        <div className={styles.heroGrid} aria-hidden />
      </section>

      <section className={styles.services}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Services in Cumming, GA</h2>
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
              <h2 className={styles.localTitle}>Locally Based in Forsyth County</h2>
              <p>We're not driving two hours to your house. We're based right here in Cumming, which means faster response times, same-week scheduling, and a team that's available when something needs attention after the install.</p>
              <p>We serve the entire Cumming area — from the Lake Lanier corridor to downtown Cumming to the South Forsyth neighborhoods along GA-400.</p>
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
                  <strong>Local Team</strong>
                  <p>We live and work in Forsyth County</p>
                </div>
              </div>
              <div className={styles.highlight}>
                <span className={styles.hlIcon}>✓</span>
                <div>
                  <strong>Licensed & Insured in GA</strong>
                  <p>Fully covered for every job</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        headline="Schedule your Cumming install."
        sub="Free in-home quote. We'll assess your space and give you an honest estimate — usually within 24 hours."
      />
    </>
  )
}
