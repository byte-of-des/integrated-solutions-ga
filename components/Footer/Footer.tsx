import Link from 'next/link'
import styles from './Footer.module.css'

const SERVICES = [
  { href: '/residential/tv-mounting',      label: 'TV & Sound Bar Mounting' },
  { href: '/residential/home-theater',     label: 'Home Theaters' },
  { href: '/residential/security-cameras', label: 'Security Cameras' },
  { href: '/residential/starlink',         label: 'Starlink Installation' },
  { href: '/commercial/conference-room-av', label: 'Commercial AV' },
]

const QUICK_LINKS = [
  { href: '/gallery',  label: 'Gallery' },
  { href: '/about',    label: 'About Us' },
  { href: '/contact',  label: 'Free Quote' },
  { href: '/service-areas', label: 'Service Areas' },
]

const SERVICE_AREAS = [
  { href: '/service-areas/cumming-ga',       label: 'Cumming, GA' },
  { href: '/service-areas/alpharetta-ga',    label: 'Alpharetta, GA' },
  { href: '/service-areas/johns-creek-ga',   label: 'Johns Creek, GA' },
  { href: '/service-areas/milton-ga',        label: 'Milton, GA' },
  { href: '/service-areas/gainesville-ga',   label: 'Gainesville, GA' },
  { href: '/service-areas/dawsonville-ga',   label: 'Dawsonville, GA' },
  { href: '/service-areas/dahlonega-ga',     label: 'Dahlonega, GA' },
  { href: '/service-areas/flowery-branch-ga', label: 'Flowery Branch, GA' },
  { href: '/service-areas/buford-ga',        label: 'Buford, GA' },
  { href: '/service-areas/canton-ga',        label: 'Canton, GA' },
  { href: '/service-areas/suwanee-ga',       label: 'Suwanee, GA' },
  { href: '/service-areas/roswell-ga',       label: 'Roswell, GA' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>

      {/* Main 4-column band */}
      <div className={`container ${styles.grid}`}>

        {/* Brand */}
        <div className={styles.brand}>
          <Link href="/" className={styles.logoWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo2.png" alt="Integrated Solutions of Georgia" className={styles.logoImg} />
          </Link>
          <p className={styles.tagline}>North Atlanta's trusted AV &amp; home technology specialists — licensed, insured, and locally owned.</p>
          <p className={styles.licenseBadge}>✓ Licensed &amp; Insured in Georgia</p>
        </div>

        {/* Our Services */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Our Services</h3>
          <ul className={styles.linkList}>
            {SERVICES.map(l => (
              <li key={l.href}><Link href={l.href} className={styles.footLink}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Quick Links</h3>
          <ul className={styles.linkList}>
            {QUICK_LINKS.map(l => (
              <li key={l.href}><Link href={l.href} className={styles.footLink}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact Now */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Contact Now</h3>
          <ul className={styles.contactList}>
            <li>
              <a href="tel:7709127642" className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.13h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.7a16 16 0 0 0 6.08 6.08l1.96-1.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <strong>(770) 912-7642</strong>
              </a>
            </li>
            <li>
              <a href="mailto:jeff@integratedsolutionsofga.com" className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                jeff@integratedsolutionsofga.com
              </a>
            </li>
            <li className={styles.contactItem}>
              <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span><strong>Hours:</strong> Mon–Sat, 8 am – 7 pm</span>
            </li>
            <li className={styles.contactItem}>
              <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span><strong>License:</strong> Licensed &amp; insured in Georgia</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Service Areas band */}
      <div className={styles.areasBand}>
        <div className="container">
          <h3 className={styles.areasTitle}>Service Areas</h3>
          <ul className={styles.areasGrid}>
            {SERVICE_AREAS.map(l => (
              <li key={l.href}><Link href={l.href} className={styles.areaLink}>{l.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <span>© {new Date().getFullYear()} Integrated Solutions of Georgia. All rights reserved.</span>
            <div className={styles.bottomLinks}>
              <Link href="/privacy" className={styles.bottomLink}>Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
