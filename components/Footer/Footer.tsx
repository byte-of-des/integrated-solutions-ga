import Link from 'next/link'
import styles from './Footer.module.css'

const RESIDENTIAL = [
  { href: '/residential/tv-mounting',       label: 'TV & Sound Bar Mounting' },
  { href: '/residential/home-theater',      label: 'Home Theaters' },
  { href: '/residential/security-cameras',  label: 'Security Cameras' },
  { href: '/residential/starlink',          label: 'Starlink Installation' },
  { href: '/residential/networking',        label: 'Wi-Fi & Networking' },
]

const COMMERCIAL = [
  { href: '/commercial/displays',       label: 'Commercial TV & Displays' },
  { href: '/commercial/restaurant-bar', label: 'Restaurant & Bar A/V' },
  { href: '/commercial/networking',     label: 'Networking & Data Drops' },
  { href: '/commercial/surveillance',   label: 'Business Surveillance' },
]

const SERVICE_AREAS = [
  { href: '/service-areas/cumming-ga',      label: 'Cumming, GA' },
  { href: '/service-areas/alpharetta-ga',   label: 'Alpharetta, GA' },
  { href: '/service-areas/johns-creek-ga',  label: 'Johns Creek, GA' },
  { href: '/service-areas/milton-ga',       label: 'Milton, GA' },
  { href: '/service-areas/gainesville-ga',  label: 'Gainesville, GA' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>

        {/* Brand col */}
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo2.png" alt="Integrated Solutions of Georgia" className={styles.logoImg} />
          </Link>
          <p className={styles.tagline}>Licensed, insured AV &amp; home technology installation serving Forsyth County and North Atlanta.</p>
          <div className={styles.contact}>
            <a href="tel:7709127642" className={styles.contactLine}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.13h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.7a16 16 0 0 0 6.08 6.08l1.96-1.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              770-912-7642
            </a>
            <a href="mailto:jeff@integratedsolutionsofga.com" className={styles.contactLine}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              jeff@integratedsolutionsofga.com
            </a>
            <span className={styles.contactLine}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              Mon–Sat, 8 am – 7 pm
            </span>
          </div>
          <p className={styles.badge}>✓ Licensed &amp; Insured in Georgia</p>
        </div>

        {/* Residential */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Residential</h3>
          <ul className={styles.linkList}>
            {RESIDENTIAL.map(l => (
              <li key={l.href}><Link href={l.href} className={styles.footLink}>{l.label}</Link></li>
            ))}
            <li><Link href="/residential" className={styles.viewAll}>View All Residential →</Link></li>
          </ul>
        </div>

        {/* Commercial */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Commercial</h3>
          <ul className={styles.linkList}>
            {COMMERCIAL.map(l => (
              <li key={l.href}><Link href={l.href} className={styles.footLink}>{l.label}</Link></li>
            ))}
            <li><Link href="/commercial" className={styles.viewAll}>View All Commercial →</Link></li>
          </ul>
        </div>

        {/* Company + Service Areas */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Company</h3>
          <ul className={styles.linkList}>
            <li><Link href="/about"   className={styles.footLink}>About Us</Link></li>
            <li><Link href="/gallery" className={styles.footLink}>Gallery</Link></li>
            <li><Link href="/contact" className={styles.footLink}>Free Quote</Link></li>
          </ul>

          <h3 className={`${styles.colTitle} ${styles.colTitleSpacer}`}>Service Areas</h3>
          <ul className={styles.linkList}>
            {SERVICE_AREAS.map(l => (
              <li key={l.href}><Link href={l.href} className={styles.footLink}>{l.label}</Link></li>
            ))}
            <li><Link href="/service-areas" className={styles.viewAll}>View All Areas →</Link></li>
          </ul>
        </div>

      </div>

      <div className={styles.bottom}>
        <div className="container">
          <span>© {new Date().getFullYear()} Integrated Solutions of Georgia. All rights reserved.</span>
          <div className={styles.bottomLinks}>
            <Link href="/privacy" className={styles.bottomLink}>Privacy</Link>
            <Link href="/terms"   className={styles.bottomLink}>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
