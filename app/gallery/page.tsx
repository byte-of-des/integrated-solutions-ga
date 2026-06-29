import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Gallery — Our Installations',
  description: 'Browse ISG installation photos — TV mounts, home theaters, security cameras, Starlink, and commercial AV in homes and businesses across North Atlanta.',
}

const CATEGORIES = ['All', 'TV Mounting', 'Home Theater', 'Security', 'Commercial', 'Networking']

export default function GalleryPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.headline}>Our Work</h1>
          <p className={styles.sub}>Real installs from homes and businesses across North Atlanta. Every photo is a job we completed — no stock images.</p>
        </div>
      </section>

      <section className={styles.gallery}>
        <div className="container">
          <div className={styles.filters}>
            {CATEGORIES.map(c => (
              <button key={c} className={`${styles.filter} ${c === 'All' ? styles.filterActive : ''}`}>{c}</button>
            ))}
          </div>

          {/* Photo grid — placeholder until real photos are added */}
          <div className={styles.grid}>
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className={styles.photoPlaceholder}>
                <div className={styles.photoInner}>
                  <span className={styles.photoIcon}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg></span>
                  <span className={styles.photoLabel}>Installation Photo</span>
                </div>
              </div>
            ))}
          </div>

          <p className={styles.note}>
            Photos loading soon — check back or <a href="/contact" className={styles.link}>contact us</a> to see project examples relevant to your space.
          </p>
        </div>
      </section>
    </>
  )
}
