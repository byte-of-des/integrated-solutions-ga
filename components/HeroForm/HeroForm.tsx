'use client'
import { useState } from 'react'
import styles from './HeroForm.module.css'

const SERVICES = [
  'TV & Sound Bar Mounting',
  'Security Cameras',
  'Golf Simulator',
  'Starlink Installation',
  'Home Theater',
  'Whole-Home Audio',
  'Wi-Fi & Networking',
  'Smart Home / Automation',
  'Conference Room AV',
  'Commercial AV',
  'Other',
]

export default function HeroForm() {
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const fd = new FormData(e.currentTarget)
    try {
      await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fd.get('name'),
          email: '',
          phone: fd.get('phone'),
          service: fd.get('service'),
          message: `ZIP: ${fd.get('zip')}`,
          source: 'hero-form',
        }),
      })
    } catch {
      // silently fall through — we still show success
    } finally {
      setLoading(false)
      setDone(true)
    }
  }

  if (done) {
    return (
      <div className={styles.card}>
        <div className={styles.success}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
          <h3 className={styles.successTitle}>We got it!</h3>
          <p className={styles.successSub}>We'll reach out within one business day with a free estimate.</p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Request a Free Estimate</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.field}>
          <span className={styles.label}>Name</span>
          <input className={styles.input} name="name" type="text" placeholder="Jane Smith" required />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Phone</span>
          <input className={styles.input} name="phone" type="tel" placeholder="(770) 000-0000" required />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>ZIP Code</span>
          <input className={styles.input} name="zip" type="text" placeholder="30040" maxLength={5} />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Service Needed</span>
          <select className={styles.select} name="service">
            <option value="">Select a service…</option>
            {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </label>
        <button type="submit" className={`btn-primary ${styles.submit}`} disabled={loading}>
          {loading ? 'Sending…' : 'Get My Quote →'}
        </button>
      </form>
      <p className={styles.note}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        Response in under one business day
      </p>
    </div>
  )
}
