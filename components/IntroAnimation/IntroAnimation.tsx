'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './IntroAnimation.module.css'

type Phase = 'video' | 'logo' | 'exiting' | 'done'

export default function IntroAnimation() {
  const [phase, setPhase] = useState<Phase>('video')
  const logoRef = useRef<HTMLDivElement>(null)

  function handleVideoEnd() {
    setPhase('logo')
    setTimeout(() => setPhase('exiting'), 700)
    setTimeout(() => setPhase('done'), 1450)
  }

  // Fallback: if video fails to load/play, skip after 4s
  useEffect(() => {
    if (phase !== 'video') return
    const t = setTimeout(handleVideoEnd, 4000)
    return () => clearTimeout(t)
  }, [phase])

  // FLIP: animate intro logo to navbar logo position
  useEffect(() => {
    if (phase !== 'exiting' || !logoRef.current) return

    const introEl = logoRef.current
    const introRect = introEl.getBoundingClientRect()
    const navEl = document.querySelector('[data-navbar-logo]') as HTMLElement | null
    if (!navEl) return

    const navRect = navEl.getBoundingClientRect()
    const dx = navRect.left + navRect.width / 2 - (introRect.left + introRect.width / 2)
    const dy = navRect.top + navRect.height / 2 - (introRect.top + introRect.height / 2)
    const scale = navRect.height / introRect.height

    introEl.animate(
      [
        { transform: 'translate(0,0) scale(1)', opacity: 1 },
        { transform: `translate(${dx}px,${dy}px) scale(${scale * 0.85})`, opacity: 0 },
      ],
      { duration: 680, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', fill: 'forwards' }
    )
  }, [phase])

  if (phase === 'done') return null

  return (
    <div
      className={`${styles.overlay} ${phase === 'exiting' ? styles.exiting : ''}`}
      aria-hidden="true"
    >
      {/* Video */}
      {phase === 'video' && (
        <video
          className={styles.video}
          src="/videos/intro.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnd}
        />
      )}

      {/* Logo — appears after video ends, flies to navbar */}
      <div
        ref={logoRef}
        className={`${styles.logoMark} ${phase === 'logo' || phase === 'exiting' ? styles.logoVisible : ''}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo.png" alt="Integrated Solutions of Georgia" className={styles.logoImg} />
      </div>
    </div>
  )
}
