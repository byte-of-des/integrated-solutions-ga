'use client'
import { useRef, useState } from 'react'
import Link from 'next/link'
import HeroAnimation from '@/components/HeroAnimation/HeroAnimation'
import HeroForm from '@/components/HeroForm/HeroForm'
import HeroIntro from '@/components/HeroIntro/HeroIntro'
import styles from './Hero.module.css'

interface HeroProps {
  eyebrow?: string
  headline: React.ReactNode
  subheadline?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export default function Hero({
  eyebrow,
  headline,
  subheadline,
  primaryCta = { label: 'Get a Free Quote', href: '/contact' },
  secondaryCta,
}: HeroProps) {
  const splitRef = useRef<HTMLDivElement>(null)
  const [heroAnimReady, setHeroAnimReady] = useState(false)

  return (
    <section className={styles.hero}>
      <div className={styles.overlay} aria-hidden />
      <div className={styles.grid} aria-hidden />
      {heroAnimReady && <HeroAnimation />}
      <HeroIntro splitRef={splitRef} onReveal={() => setHeroAnimReady(true)} />

      <div ref={splitRef} className={`container ${styles.split}`}>
        {/* Left — content */}
        <div className={styles.left}>
          {eyebrow && <p className={styles.eyebrow} data-hero-item>{eyebrow}</p>}
          <h1 className={styles.headline} data-hero-item>{headline}</h1>
          {subheadline && <p className={styles.sub} data-hero-item>{subheadline}</p>}
          <div className={styles.actions} data-hero-item>
            <Link href={primaryCta.href} className="btn-primary">{primaryCta.label} →</Link>
            {secondaryCta && (
              <a href="tel:7709127642" className="btn-outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.13h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.7a16 16 0 0 0 6.08 6.08l1.96-1.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {secondaryCta.label}
              </a>
            )}
          </div>
          <div className={styles.trust} data-hero-item>
            <span className={styles.trustItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              5-Star Rated
            </span>
            <span className={styles.trustItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
              </svg>
              Licensed &amp; Insured
            </span>
            <span className={styles.trustItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
              </svg>
              Same-Week Availability
            </span>
            <span className={styles.trustItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Local Georgia Team
            </span>
          </div>
        </div>

        {/* Right — quote form */}
        <div className={styles.right} data-hero-item>
          <HeroForm />
        </div>
      </div>
    </section>
  )
}
