'use client'
import { useEffect, useRef, useState, RefObject } from 'react'
import styles from './HeroIntro.module.css'

interface HeroIntroProps {
  splitRef: RefObject<HTMLDivElement | null>
  onReveal: () => void
}

export default function HeroIntro({ splitRef, onReveal }: HeroIntroProps) {
  const [done, setDone] = useState(false)
  const [logoVisible, setLogoVisible] = useState(false)
  const logoRef = useRef<HTMLDivElement>(null)
  const onRevealRef = useRef(onReveal)

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const alreadyShown = sessionStorage.getItem('isg-intro-shown') === '1'

    if (isMobile || reducedMotion || alreadyShown) {
      onRevealRef.current()
      setDone(true)
      return
    }

    // Bail if splitRef hasn't attached (defensive — should not happen in practice)
    if (!splitRef.current) {
      onRevealRef.current()
      setDone(true)
      return
    }

    let mounted = true

    // Find stagger targets before hiding (so we can restore them on reveal)
    const staggerTargets = Array.from(
      splitRef.current.querySelectorAll('[data-hero-item]')
    ) as HTMLElement[]

    // Hide hero content.
    // isg-hero-hidden > * { visibility: hidden } makes .left and .right invisible.
    // Setting opacity:0 on each stagger target is additional so on reveal they animate from 0.
    staggerTargets.forEach(el => { el.style.opacity = '0' })
    splitRef.current.classList.add('isg-hero-hidden')

    // Fade logo in after paint settles
    const fadeTimer = setTimeout(() => {
      if (mounted) setLogoVisible(true)
    }, 50)

    // Fire FLIP after logo hold period
    const flipTimer = setTimeout(flip, 900)

    function flip() {
      const logoEl = logoRef.current
      if (!logoEl || !mounted) { reveal(); return }

      const introRect = logoEl.getBoundingClientRect()
      const navImg = document.querySelector('[data-navbar-logo] img') as HTMLElement | null
      if (!navImg) { reveal(); return }
      const navRect = navImg.getBoundingClientRect()

      const dx = (navRect.left + navRect.width / 2) - (introRect.left + introRect.width / 2)
      const dy = (navRect.top + navRect.height / 2) - (introRect.top + introRect.height / 2)
      const scale = navRect.height / introRect.height

      logoEl.animate(
        [
          { transform: 'translate(0,0) scale(1)', opacity: 1 },
          { transform: `translate(${dx}px, ${dy}px) scale(${scale})`, opacity: 0 },
        ],
        { duration: 600, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', fill: 'forwards' }
      ).finished.then(reveal).catch(reveal)
    }

    function reveal() {
      if (!mounted) return

      // Restore hero content (splitRef.current is guaranteed non-null — checked above)
      splitRef.current!.classList.remove('isg-hero-hidden')

      // Stagger-reveal each [data-hero-item] element
      staggerTargets.forEach((el, i) => {
        el.style.removeProperty('opacity')
        el.style.animationDelay = `${i * 80}ms`
        el.classList.add('isg-fade-in')
      })

      sessionStorage.setItem('isg-intro-shown', '1')
      onRevealRef.current()
      setDone(true)
    }

    return () => {
      mounted = false
      clearTimeout(fadeTimer)
      clearTimeout(flipTimer)
    }
  }, [splitRef])

  if (done) return null

  return (
    <div className={styles.container} aria-hidden="true">
      <div
        ref={logoRef}
        className={`${styles.logo} ${logoVisible ? styles.logoVisible : ''}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo.png"
          alt=""
          className={styles.logoImg}
        />
      </div>
    </div>
  )
}
