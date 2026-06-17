'use client'
import { useEffect, useRef, useState, RefObject } from 'react'
import styles from './HeroIntro.module.css'

interface HeroIntroProps {
  splitRef: RefObject<HTMLDivElement | null>
  onReveal: () => void
}

export default function HeroIntro({ splitRef, onReveal }: HeroIntroProps) {
  const [done, setDone] = useState(false)
  const [videoVisible, setVideoVisible] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const onRevealRef = useRef(onReveal)
  useEffect(() => { onRevealRef.current = onReveal }, [onReveal])

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const alreadyShown = sessionStorage.getItem('isg-intro-shown') === '1'

    if (isMobile || reducedMotion || alreadyShown) {
      onRevealRef.current()
      setDone(true)
      return
    }
    if (!splitRef.current) {
      onRevealRef.current()
      setDone(true)
      return
    }

    let mounted = true
    let flipped = false

    // Temporarily lift overflow:hidden so the FLIP can exit the hero bounds
    const heroSection = splitRef.current.parentElement as HTMLElement | null

    const staggerTargets = Array.from(
      splitRef.current.querySelectorAll('[data-hero-item]')
    ) as HTMLElement[]

    staggerTargets.forEach(el => { el.style.opacity = '0' })
    splitRef.current.classList.add('isg-hero-hidden')
    document.documentElement.style.overflow = 'hidden'
    if (heroSection) heroSection.style.overflow = 'visible'

    // Fade video in after paint settles
    const fadeTimer = setTimeout(() => {
      if (mounted) setVideoVisible(true)
    }, 50)

    // Safety fallback: video duration (5s) + fade-in buffer
    const fallbackTimer = setTimeout(() => {
      if (mounted && !flipped) flip()
    }, 5600)

    function flip() {
      if (flipped) return
      flipped = true

      const videoEl = videoRef.current
      videoEl?.pause()
      if (!videoEl || !mounted) { reveal(); return }

      const introRect = videoEl.getBoundingClientRect()
      const navImg = document.querySelector('[data-navbar-logo] img') as HTMLElement | null
      if (!navImg) { reveal(); return }
      const navRect = navImg.getBoundingClientRect()

      const dx = (navRect.left + navRect.width / 2) - (introRect.left + introRect.width / 2)
      const dy = (navRect.top + navRect.height / 2) - (introRect.top + introRect.height / 2)
      const scale = navRect.height / introRect.height

      videoEl.animate(
        [
          { transform: 'translate(0,0) scale(1)', opacity: 1 },
          { transform: `translate(${dx}px, ${dy}px) scale(${scale})`, opacity: 0 },
        ],
        { duration: 700, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', fill: 'forwards' }
      ).finished.then(reveal).catch(reveal)
    }

    function reveal() {
      if (!mounted) return

      splitRef.current!.classList.remove('isg-hero-hidden')

      staggerTargets.forEach((el, i) => {
        el.style.removeProperty('opacity')
        el.style.animationDelay = `${i * 80}ms`
        el.classList.add('isg-fade-in')
        el.addEventListener('animationend', () => {
          el.classList.remove('isg-fade-in')
          el.style.removeProperty('animation-delay')
        }, { once: true })
      })

      document.documentElement.style.overflow = ''
      if (heroSection) heroSection.style.overflow = ''
      sessionStorage.setItem('isg-intro-shown', '1')
      onRevealRef.current()
      setDone(true)
    }

    function onTimeUpdate() {
      const el = videoRef.current
      if (!el || !isFinite(el.duration)) return
      if (el.currentTime >= el.duration - 1.0) flip()
    }

    const videoEl = videoRef.current
    videoEl?.addEventListener('timeupdate', onTimeUpdate)
    videoEl?.addEventListener('error', flip)

    return () => {
      mounted = false
      document.documentElement.style.overflow = ''
      if (heroSection) heroSection.style.overflow = ''
      clearTimeout(fadeTimer)
      clearTimeout(fallbackTimer)
      videoEl?.removeEventListener('timeupdate', onTimeUpdate)
      videoEl?.removeEventListener('error', flip)
    }
  }, [splitRef])

  if (done) return null

  return (
    <>
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={styles.container} aria-hidden="true">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          ref={videoRef}
          className={`${styles.video} ${videoVisible ? styles.videoVisible : ''}`}
          src="/videos/intro.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
        />
      </div>
    </>
  )
}
