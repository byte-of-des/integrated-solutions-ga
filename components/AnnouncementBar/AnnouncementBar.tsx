import styles from './AnnouncementBar.module.css'

export default function AnnouncementBar() {
  return (
    <div className={styles.bar}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.items}>
          <span>Locally Owned in Georgia</span>
          <span className={styles.sep}>·</span>
          <span>Licensed &amp; Insured</span>
          <span className={styles.sep}>·</span>
          <span>Free On-Site Estimates</span>
        </span>
        <a href="tel:7709127642" className={styles.phone}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.13h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.7a16 16 0 0 0 6.08 6.08l1.96-1.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Call Now: (770) 912-7642
        </a>
      </div>
    </div>
  )
}
