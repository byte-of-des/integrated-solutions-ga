import Link from 'next/link'
import styles from './CtaBand.module.css'

interface CtaBandProps {
  headline?: string
  sub?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function CtaBand({
  headline = 'Ready to get started?',
  sub = "Get a free quote today — we'll assess your space and give you a clear, honest estimate.",
  primaryLabel = 'Get a Free Quote →',
  primaryHref = '/contact',
  secondaryLabel = 'View Our Work',
  secondaryHref = '/gallery',
}: CtaBandProps) {
  return (
    <section className={styles.band}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <h2 className={styles.headline}>{headline}</h2>
          <p className={styles.sub}>{sub}</p>
        </div>
        <div className={styles.actions}>
          <Link href={primaryHref} className="btn-primary">{primaryLabel}</Link>
          <Link href={secondaryHref} className="btn-outline">{secondaryLabel}</Link>
        </div>
      </div>
    </section>
  )
}
