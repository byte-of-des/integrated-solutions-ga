'use client'
import { useState } from 'react'
import styles from './FaqAccordion.module.css'

const FAQS = [
  { q: 'How much does TV mounting cost?', a: 'TV mounting starts around $149–$299 depending on wall type, mounting height, and whether you want in-wall wire concealment. We give you a firm quote before any work begins — no surprises.' },
  { q: 'Do you serve all of North Atlanta?', a: 'We serve Forsyth, Fulton, Gwinnett, and Cherokee counties — including Cumming, Alpharetta, Johns Creek, Milton, Roswell, Dawsonville, Suwanee, and Buford. Not sure if we cover your area? Call us.' },
  { q: 'Can you hide wires in-wall?', a: 'Yes. In-wall wire concealment is one of our most popular add-ons. We fish power and HDMI cables through the wall so there are zero visible cords — a completely clean, factory look.' },
  { q: 'Do you install commercial AV systems?', a: 'Absolutely. We do conference room AV, commercial display installations, restaurant and bar systems, and business surveillance. Commercial work gets the same level of care and precision as residential.' },
  { q: 'How quickly can you schedule?', a: 'Most jobs can be scheduled within 3–5 business days. We also offer same-week availability for straightforward installs. Call or fill out a quote request and we\'ll get you on the calendar fast.' },
]

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className={styles.list}>
      {FAQS.map((f, i) => (
        <div key={i} className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}>
          <button className={styles.question} onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
            <span className={styles.qIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
            </span>
            {f.q}
            <svg className={styles.chevron} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          {open === i && <p className={styles.answer}>{f.a}</p>}
        </div>
      ))}
    </div>
  )
}
