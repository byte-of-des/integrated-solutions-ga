import type { Metadata } from 'next'
import Link from 'next/link'
import CtaBand from '@/components/CtaBand/CtaBand'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Residential AV & Home Technology Services | ISG Georgia',
  description: 'Professional residential AV installation across Forsyth County and North Atlanta — TV mounting, home theaters, security cameras, Starlink, whole-home audio, networking, smart home automation, and lighting control.',
}

const SERVICES = [
  {
    href: '/residential/tv-mounting',
    label: 'TV & Sound Bar Mounting',
    desc: 'Perfect placement, fully concealed cables, and a professional finish on any wall type.',
  },
  {
    href: '/residential/home-theater',
    label: 'Home Theaters & Media Rooms',
    desc: 'Projector or large-format display, Dolby Atmos surround, and one-touch control.',
  },
  {
    href: '/residential/security-cameras',
    label: 'Security Cameras & Surveillance',
    desc: 'Indoor and outdoor camera systems with remote monitoring and motion alerts.',
  },
  {
    href: '/residential/starlink',
    label: 'Starlink Installation',
    desc: 'Professional dish mounting, grounding, and whole-home Wi-Fi integration.',
  },
  {
    href: '/residential/whole-home-audio',
    label: 'Whole-Home & Outdoor Audio',
    desc: 'Multi-room and outdoor speaker systems with independent zone control.',
  },
  {
    href: '/residential/networking',
    label: 'Wi-Fi, Networking & Cabling',
    desc: 'Whole-home mesh, structured cabling, Ubiquiti/Unifi, and data closet builds.',
  },
  {
    href: '/residential/automation',
    label: 'Smart Home & Automation',
    desc: 'One-touch control for lights, AV, shades, and climate throughout your home.',
  },
  {
    href: '/residential/lighting',
    label: 'Lighting Control',
    desc: 'Programmable scenes and whole-home lighting automation from a single app or keypad.',
  },
]

export default function ResidentialPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.eyebrow}>Forsyth County &amp; North Atlanta</p>
          <h1 className={styles.headline}>Residential Services</h1>
          <p className={styles.sub}>Every service we offer for Georgia homeowners — from a single TV mount to a fully automated home.</p>
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
        headline="Ready to upgrade your home?"
        sub="Get a fast, free estimate from Georgia's trusted local AV team."
      />
    </>
  )
}
