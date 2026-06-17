'use client'
import { useEffect, useRef } from 'react'
import styles from './HeroAnimation.module.css'

const CABLES = [
  { d: 'M -10 180 H 350 V 310 H 580',          cx: 580, cy: 310, delay: 0.3,  dur: 1.1 },
  { d: 'M 1410 80 H 1020 V 190 H 780 V 360',   cx: 780, cy: 360, delay: 0.55, dur: 1.35 },
  { d: 'M 120 610 V 390 H 300 V 255 H 465',    cx: 465, cy: 255, delay: 0.8,  dur: 1.1  },
  { d: 'M 1410 450 H 1130 V 290 H 950',        cx: 950, cy: 290, delay: 1.05, dur: 0.95 },
]

export default function HeroAnimation() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const paths = svg.querySelectorAll<SVGPathElement>('[data-cable]')
    const plugs  = svg.querySelectorAll<SVGCircleElement>('[data-plug]')
    const glows  = svg.querySelectorAll<SVGCircleElement>('[data-glow]')

    paths.forEach((path, i) => {
      const len = path.getTotalLength()
      const { delay, dur } = CABLES[i]

      path.setAttribute('stroke-dasharray', String(len))
      path.setAttribute('stroke-dashoffset', String(len))

      path.animate(
        [{ strokeDashoffset: len }, { strokeDashoffset: 0 }],
        { duration: dur * 1000, delay: delay * 1000, fill: 'forwards', easing: 'linear' }
      )
    })

    plugs.forEach((plug, i) => {
      const { delay, dur } = CABLES[i]
      plug.animate(
        [
          { opacity: 0, transform: 'scale(0.2)' },
          { opacity: 1, transform: 'scale(1.4)', offset: 0.4 },
          { opacity: 0.9, transform: 'scale(1)' },
        ],
        { duration: 350, delay: (delay + dur) * 1000, fill: 'forwards' }
      ).finished.then(() => {
        plug.animate(
          [
            { opacity: 0.9, transform: 'scale(1)' },
            { opacity: 0.3, transform: 'scale(0.6)' },
            { opacity: 0.9, transform: 'scale(1)' },
          ],
          { duration: 1600, iterations: Infinity, easing: 'ease-in-out' }
        )
      })
    })

    glows.forEach((glow, i) => {
      const { delay, dur } = CABLES[i]
      glow.animate(
        [
          { opacity: 0.85, transform: 'scale(1)' },
          { opacity: 0,    transform: 'scale(6)' },
        ],
        { duration: 900, delay: (delay + dur) * 1000, fill: 'forwards', easing: 'ease-out' }
      )
    })
  }, [])

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1400 600"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg}
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
    >
      {CABLES.map((c, i) => (
        <g key={i}>
          <path data-cable={i} d={c.d} className={styles.cable} />
          <circle data-plug={i} cx={c.cx} cy={c.cy} r={3.5} className={styles.plug} />
          <circle data-glow={i} cx={c.cx} cy={c.cy} r={5}   className={styles.glow} />
        </g>
      ))}
    </svg>
  )
}
