'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

const RESIDENTIAL = [
  { href: '/residential/tv-mounting', label: 'TV & Sound Bar Mounting' },
  { href: '/residential/security-cameras', label: 'Security Cameras & Surveillance' },
  { href: '/residential/starlink', label: 'Starlink Installation' },
  { href: '/residential/home-theater', label: 'Home Theaters & Media Rooms' },
  { href: '/residential/whole-home-audio', label: 'Whole-Home & Outdoor Audio' },
  { href: '/residential/networking', label: 'Wi-Fi, Networking & Cabling' },
  { href: '/residential/automation', label: 'Smart Home & Automation' },
  { href: '/residential/lighting', label: 'Lighting Control' },
]

const COMMERCIAL = [
  { href: '/commercial/displays', label: 'Commercial TV & Displays' },
  { href: '/commercial/surveillance', label: 'Business Surveillance' },
  { href: '/commercial/networking', label: 'Networking & Data Drops' },
  { href: '/commercial/restaurant-bar', label: 'Restaurant & Bar A/V' },
  { href: '/commercial/office-retail', label: 'Gym & Entertainment Systems' },
  { href: '/commercial/automation', label: 'One-Touch Zone Automation' },
  { href: '/commercial/conference-room-av', label: 'Conference Room AV' },
]

const SERVICE_AREAS = [
  { href: '/service-areas', label: 'All Service Areas' },
  { href: '/service-areas/cumming-ga', label: 'Cumming, GA' },
  { href: '/service-areas/alpharetta-ga', label: 'Alpharetta, GA' },
  { href: '/service-areas/johns-creek-ga', label: 'Johns Creek, GA' },
  { href: '/service-areas/milton-ga', label: 'Milton, GA' },
  { href: '/service-areas/roswell-ga', label: 'Roswell, GA' },
  { href: '/service-areas/gainesville-ga', label: 'Gainesville, GA' },
  { href: '/service-areas/dawsonville-ga', label: 'Dawsonville, GA' },
  { href: '/service-areas/dahlonega-ga', label: 'Dahlonega, GA' },
  { href: '/service-areas/canton-ga', label: 'Canton, GA' },
  { href: '/service-areas/suwanee-ga', label: 'Suwanee, GA' },
  { href: '/service-areas/buford-ga', label: 'Buford, GA' },
  { href: '/service-areas/flowery-branch-ga', label: 'Flowery Branch, GA' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [resOpen, setResOpen] = useState(false)
  const [comOpen, setComOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
    setResOpen(false)
    setComOpen(false)
    setAreasOpen(false)
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
          <img src="/images/logo2.png" alt="Integrated Solutions of Georgia" className={styles.logoImg} fetchPriority="high" />
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
          <li className={styles.ddWrap}>
            <button className={`${styles.link} ${styles.ddTrigger} ${pathname.startsWith('/service-areas') ? styles.active : ''}`}>
              Service Areas <span className={styles.chevron} aria-hidden>▾</span>
            </button>
            <div className={styles.dd}>
              {SERVICE_AREAS.map(l => (
                <Link key={l.href} href={l.href} className={styles.ddItem}>{l.label}</Link>
              ))}
            </div>
          </li>
          <li>
            <Link href="/gallery" className={`${styles.link} ${pathname === '/gallery' ? styles.active : ''}`}>Gallery</Link>
          </li>
          <li>
            <Link href="/about" className={`${styles.link} ${pathname === '/about' ? styles.active : ''}`}>About</Link>
          </li>
        </ul>

        <div className={styles.ctaSep} aria-hidden="true" />
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

            <button className={`${styles.mLink} ${styles.mAccordion}`} onClick={() => setAreasOpen(v => !v)}>
              Service Areas <span>{areasOpen ? '▴' : '▾'}</span>
            </button>
            {areasOpen && (
              <div className={styles.mSub}>
                {SERVICE_AREAS.map(l => <Link key={l.href} href={l.href} className={styles.mSubLink}>{l.label}</Link>)}
              </div>
            )}
            <Link href="/gallery" className={styles.mLink}>Gallery</Link>
            <Link href="/about" className={styles.mLink}>About</Link>
            <Link href="/contact" className={`${styles.mLink} ${styles.mCta}`}>Get a Free Quote →</Link>
          </div>
        </div>
      )}
    </header>
  )
}
