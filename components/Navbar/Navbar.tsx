'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

const RESIDENTIAL = [
  { href: '/residential/tv-mounting', label: 'TV & Sound Bar Mounting' },
  { href: '/residential/security-cameras', label: 'Security Cameras & Surveillance' },
  { href: '/residential/golf-simulators', label: 'Golf Simulators' },
  { href: '/residential/starlink', label: 'Starlink Installation' },
  { href: '/residential/home-theater', label: 'Home Theaters & Media Rooms' },
  { href: '/residential/whole-home-audio', label: 'Whole-Home & Outdoor Audio' },
  { href: '/residential/networking', label: 'Wi-Fi, Networking & Cabling' },
  { href: '/residential/automation', label: 'Smart Home & Automation' },
  { href: '/residential/lighting', label: 'Lighting Control' },
]

const COMMERCIAL = [
  { href: '/commercial/conference-room-av', label: 'Conference Room AV' },
  { href: '/commercial/displays', label: 'Commercial TV & Displays' },
  { href: '/commercial/surveillance', label: 'Business Surveillance' },
  { href: '/commercial/networking', label: 'Commercial Networking' },
  { href: '/commercial/restaurant-bar', label: 'Restaurant & Bar A/V' },
  { href: '/commercial/office-retail', label: 'Office & Retail Systems' },
  { href: '/commercial/golf-simulators', label: 'Commercial Golf Simulators' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [resOpen, setResOpen] = useState(false)
  const [comOpen, setComOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
    setResOpen(false)
    setComOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} data-navbar-logo>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt="Integrated Solutions of Georgia" className={styles.logoImg} />
        </Link>

        {/* Desktop */}
        <ul className={styles.desktopNav} role="list">
          <li className={styles.ddWrap}>
            <button className={`${styles.link} ${styles.ddTrigger} ${pathname.startsWith('/residential') ? styles.active : ''}`}>
              Residential <span className={styles.chevron} aria-hidden>▾</span>
            </button>
            <div className={styles.dd}>
              {RESIDENTIAL.map(l => (
                <Link key={l.href} href={l.href} className={styles.ddItem}>{l.label}</Link>
              ))}
            </div>
          </li>
          <li className={styles.ddWrap}>
            <button className={`${styles.link} ${styles.ddTrigger} ${pathname.startsWith('/commercial') ? styles.active : ''}`}>
              Commercial <span className={styles.chevron} aria-hidden>▾</span>
            </button>
            <div className={styles.dd}>
              {COMMERCIAL.map(l => (
                <Link key={l.href} href={l.href} className={styles.ddItem}>{l.label}</Link>
              ))}
            </div>
          </li>
          <li>
            <Link href="/service-areas" className={`${styles.link} ${pathname.startsWith('/service-areas') ? styles.active : ''}`}>Service Areas</Link>
          </li>
          <li>
            <Link href="/gallery" className={`${styles.link} ${pathname === '/gallery' ? styles.active : ''}`}>Gallery</Link>
          </li>
          <li>
            <Link href="/about" className={`${styles.link} ${pathname === '/about' ? styles.active : ''}`}>About</Link>
          </li>
        </ul>

        <Link href="/contact" className={`btn-primary ${styles.ctaBtn}`}>Get a Free Quote</Link>

        {/* Hamburger */}
        <button
          className={styles.burger}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span className={`${styles.bar} ${open ? styles.b1 : ''}`} />
          <span className={`${styles.bar} ${open ? styles.b2 : ''}`} />
          <span className={`${styles.bar} ${open ? styles.b3 : ''}`} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className={styles.drawer}>
          <div className="container">
            <button className={`${styles.mLink} ${styles.mAccordion}`} onClick={() => setResOpen(v => !v)}>
              Residential <span>{resOpen ? '▴' : '▾'}</span>
            </button>
            {resOpen && (
              <div className={styles.mSub}>
                {RESIDENTIAL.map(l => <Link key={l.href} href={l.href} className={styles.mSubLink}>{l.label}</Link>)}
              </div>
            )}

            <button className={`${styles.mLink} ${styles.mAccordion}`} onClick={() => setComOpen(v => !v)}>
              Commercial <span>{comOpen ? '▴' : '▾'}</span>
            </button>
            {comOpen && (
              <div className={styles.mSub}>
                {COMMERCIAL.map(l => <Link key={l.href} href={l.href} className={styles.mSubLink}>{l.label}</Link>)}
              </div>
            )}

            <Link href="/service-areas" className={styles.mLink}>Service Areas</Link>
            <Link href="/gallery" className={styles.mLink}>Gallery</Link>
            <Link href="/about" className={styles.mLink}>About</Link>
            <Link href="/contact" className={`${styles.mLink} ${styles.mCta}`}>Get a Free Quote →</Link>
          </div>
        </div>
      )}
    </header>
  )
}
