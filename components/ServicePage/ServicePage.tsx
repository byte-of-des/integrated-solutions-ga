'use client'
import Link from 'next/link'
import {
  Tv, Plug, Volume2, Ruler, Wrench, Gamepad2, Home, Satellite, Zap, CloudRain,
  Camera, Smartphone, HardDrive, Moon, Bell, Flag, Target, Monitor, Lightbulb,
  Film, SlidersHorizontal, Server, Video, Mic, Wifi, Radio,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import CtaBand from '@/components/CtaBand/CtaBand'
import styles from './ServicePage.module.css'

const ICON_MAP: Record<string, LucideIcon> = {
  tv: Tv, plug: Plug, volume2: Volume2, ruler: Ruler, wrench: Wrench,
  gamepad2: Gamepad2, home: Home, satellite: Satellite, zap: Zap,
  'cloud-rain': CloudRain, camera: Camera, smartphone: Smartphone,
  'hard-drive': HardDrive, moon: Moon, bell: Bell, flag: Flag, target: Target,
  monitor: Monitor, lightbulb: Lightbulb, film: Film, sliders: SlidersHorizontal,
  server: Server, video: Video, mic: Mic, wifi: Wifi, radio: Radio,
}

interface Feature {
  icon: string
  title: string
  desc: string
}

interface Step {
  num: string
  title: string
  desc: string
}

interface Faq {
  q: string
  a: string
}

export interface ServicePageProps {
  eyebrow?: string
  headline: string
  subheadline: string
  intro: string
  features: Feature[]
  process?: Step[]
  faqs?: Faq[]
  ctaHeadline?: string
  ctaSub?: string
}

export default function ServicePage({
  eyebrow = 'Cumming, GA & North Atlanta',
  headline,
  subheadline,
  intro,
  features,
  process,
  faqs,
  ctaHeadline,
  ctaSub,
}: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.headline}>{headline}</h1>
          <p className={styles.subheadline}>{subheadline}</p>
          <div className={styles.heroCtas}>
            <Link href="/contact" className="btn-primary">Get a Free Quote →</Link>
            <Link href="/gallery" className="btn-outline">View Our Work</Link>
          </div>
        </div>
        <div className={styles.heroGrid} aria-hidden />
      </section>

      {/* Intro */}
      <section className={styles.intro}>
        <div className="container">
          <p className={styles.introText}>{intro}</p>
        </div>
      </section>

      {/* Features */}
      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.sectionTitle}>What We Do</h2>
          <div className={styles.featureGrid}>
            {features.map(f => (
              <div key={f.title} className={styles.featureCard}>
                {(() => { const Icon = ICON_MAP[f.icon]; return Icon ? <span className={styles.featureIcon}><Icon size={22} strokeWidth={1.75} /></span> : null })()}
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      {process && process.length > 0 && (
        <section className={styles.process}>
          <div className="container">
            <h2 className={styles.sectionTitle}>How It Works</h2>
            <div className={styles.processSteps}>
              {process.map((s, i) => (
                <div key={s.title} className={styles.step}>
                  <div className={styles.stepNum}>{s.num}</div>
                  {i < process.length - 1 && <div className={styles.stepLine} aria-hidden />}
                  <div className={styles.stepBody}>
                    <h3 className={styles.stepTitle}>{s.title}</h3>
                    <p className={styles.stepDesc}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
        <section className={styles.faqs}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqList}>
              {faqs.map(f => (
                <div key={f.q} className={styles.faq}>
                  <h3 className={styles.faqQ}>{f.q}</h3>
                  <p className={styles.faqA}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand headline={ctaHeadline} sub={ctaSub} />
    </>
  )
}
