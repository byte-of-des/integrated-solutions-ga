'use client'
import Link from 'next/link'
import {
  Tv, Camera, Crosshair, Satellite, Film, Volume2, Wifi, Home,
  Video, Monitor, ShieldCheck, Flag, Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import styles from './ServicesGrid.module.css'

const ICON_MAP: Record<string, LucideIcon> = {
  tv: Tv,
  camera: Camera,
  crosshair: Crosshair,
  satellite: Satellite,
  film: Film,
  volume2: Volume2,
  wifi: Wifi,
  home: Home,
  video: Video,
  monitor: Monitor,
  'shield-check': ShieldCheck,
  flag: Flag,
  zap: Zap,
}

interface Service {
  icon: string
  title: string
  desc: string
  href: string
}

interface ServicesGridProps {
  title?: string
  services: Service[]
}

export default function ServicesGrid({ title, services }: ServicesGridProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        {title && <h2 className={styles.title}>{title}</h2>}
        <div className={styles.grid}>
          {services.map(s => {
            const Icon = ICON_MAP[s.icon]
            return (
              <Link key={s.href} href={s.href} className={styles.card}>
                {Icon && (
                  <span className={styles.iconWrap}>
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                )}
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
                <span className={styles.arrow}>→</span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
