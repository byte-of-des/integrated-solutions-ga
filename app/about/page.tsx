import type { Metadata } from 'next'
import Link from 'next/link'
import AboutValues from '@/components/AboutValues/AboutValues'
import CtaBand from '@/components/CtaBand/CtaBand'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'About Integrated Solutions of Georgia',
  description: 'Integrated Solutions of Georgia is a licensed and insured AV installation company based in Cumming, GA, serving North Atlanta with professional home and commercial technology installations.',
}

const REVIEWS = [
  { name: 'Michael T.', location: 'Cumming, GA', text: "Mounted three TVs with full wire concealment. Everything looks factory-installed. I've had other companies do this before and the difference is obvious — these guys are on another level.", stars: 5 },
  { name: 'Sarah R.', location: 'Alpharetta, GA', text: "Our conference room AV was a disaster before Integrated Solutions came in. Now it just works. One button, everyone's on the call, nobody's fighting with cables. Worth every penny.", stars: 5 },
  { name: 'James K.', location: 'Johns Creek, GA', text: "Built out our golf simulator room. They were incredibly thorough — measured the ceiling height at the exact swing path, positioned everything perfectly. We're getting the accuracy we paid for.", stars: 5 },
]

export default function AboutPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.eyebrow}>Licensed & Insured in Georgia</p>
          <h1 className={styles.headline}>About Integrated Solutions of Georgia</h1>
          <p className={styles.sub}>Georgia's trusted AV and home technology installer — built on honest work, technical precision, and doing the job right the first time.</p>
        </div>
        <div className={styles.heroGrid} aria-hidden />
      </section>

      <section className={styles.story}>
        <div className={`container ${styles.storyInner}`}>
          <div className={styles.storyText}>
            <h2 className={styles.storyTitle}>Who We Are</h2>
            <p>Integrated Solutions of Georgia is a locally owned AV and home technology installation company based in Cumming, GA. We serve homeowners and businesses across North Atlanta — Forsyth County, Fulton County, and Gwinnett County.</p>
            <p>We do the work that makes a real difference: TV mounting with hidden wires instead of a cable cover strip. A security camera system with no blind spots instead of a couple of cameras pointed at the driveway. A conference room that starts a call in one touch instead of a tangle of adapters and a speakerphone from 2014.</p>
            <p>Every job we take, we approach like it's our own home or our own business. That means recommending the right solution for your situation — not the most expensive one — and not leaving until everything works the way it should.</p>
          </div>
          <div className={styles.storyBadges}>
            <div className={styles.statCard}>
              <span className={styles.statNum}>500+</span>
              <span className={styles.statLabel}>Installs Completed</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNum}>5★</span>
              <span className={styles.statLabel}>Average Review Rating</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNum}>Licensed</span>
              <span className={styles.statLabel}>& Insured in Georgia</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNum}>North Atlanta</span>
              <span className={styles.statLabel}>Locally Based & Owned</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className="container">
          <h2 className={styles.sectionTitle}>How We Work</h2>
          <AboutValues />
        </div>
      </section>

      <section className={styles.reviews}>
        <div className="container">
          <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
          <div className={styles.reviewGrid}>
            {REVIEWS.map(r => (
              <div key={r.name} className={styles.reviewCard}>
                <div className={styles.stars}>{'★'.repeat(r.stars)}</div>
                <p className={styles.reviewText}>"{r.text}"</p>
                <div className={styles.reviewer}>
                  <span className={styles.reviewerName}>{r.name}</span>
                  <span className={styles.reviewerLoc}>{r.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        headline="Let's talk about your project."
        sub="Free quotes, honest advice, and a team that shows up when we say we will."
      />
    </>
  )
}
