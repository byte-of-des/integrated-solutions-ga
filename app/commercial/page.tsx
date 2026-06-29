import type { Metadata } from 'next'
import Link from 'next/link'
import CtaBand from '@/components/CtaBand/CtaBand'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Commercial AV & Business Technology Services | ISG Georgia',
  description: 'Commercial AV installation for restaurants, bars, gyms, retail, and offices across North Atlanta — displays, surveillance, Ubiquiti/Unifi networking, data drops, zone audio, and one-touch automation.',
}

const SERVICES = [
  {
    href: '/commercial/displays',
    label: 'Commercial TV & Displays',
    desc: 'Restaurant and bar screens, lobby displays, digital signage, and multi-TV builds with clean cable management.',
  },
  {
    href: '/commercial/restaurant-bar',
    label: 'Restaurant & Bar A/V',
    desc: 'Zone audio, multiple TV feeds, and one-touch control so your staff isn\'t juggling ten remotes.',
  },
  {
    href: '/commercial/networking',
    label: 'Networking & Data Drops',
    desc: 'Structured cabling, Ubiquiti/Unifi access points, network closet builds, and enterprise-grade Wi-Fi for any commercial space.',
  },
  {
    href: '/commercial/surveillance',
    label: 'Business Surveillance',
    desc: 'Indoor and outdoor IP camera systems with remote monitoring, motion alerts, and secure cloud storage.',
  },
  {
    href: '/commercial/office-retail',
    label: 'Gym & Entertainment Systems',
    desc: 'Cardio-floor TVs, locker-room audio, and zone control for fitness centers and entertainment venues.',
  },
  {
    href: '/commercial/automation',
    label: 'One-Touch Zone Automation',
    desc: 'A single button press selects the right TVs and audio for each zone — no more staff wrestling with multiple remotes.',
  },
]

export default function CommercialPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.eyebrow}>Forsyth County &amp; North Atlanta</p>
          <h1 className={styles.headline}>Commercial Services</h1>
          <p className={styles.sub}>AV, networking, and automation solutions for restaurants, bars, gyms, retail, and offices across North Atlanta.</p>
        </div>
        <div className={styles.heroGrid} aria-hidden />
      </section>

      <section className={styles.services}>
        <div className="container">
          <div className={styles.grid}>
            {SERVICES.map(s => (
              <Link key={s.href} href={s.href} className={styles.card}>
                <h2 className={styles.cardTitle}>{s.label}</h2>
                <p className={styles.cardDesc}>{s.desc}</p>
                <span className={styles.cardCta}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        headline="Ready to upgrade your business AV?"
        sub="Get a fast, free estimate from Georgia's trusted local AV team."
      />
    </>
  )
}
