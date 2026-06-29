'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import styles from './page.module.css'

const SERVICES = [
  { value: '', label: 'All Work' },
  { value: 'tv-mounting', label: 'TV Mounting' },
  { value: 'home-theater', label: 'Home Theater' },
  { value: 'security-cameras', label: 'Security Cameras' },
  { value: 'starlink', label: 'Starlink' },
  { value: 'golf-simulators', label: 'Golf Simulators' },
  { value: 'conference-room-av', label: 'Commercial AV' },
]

const CITIES = [
  { value: '', label: 'All Cities' },
  { value: 'cumming-ga', label: 'Cumming' },
  { value: 'alpharetta-ga', label: 'Alpharetta' },
  { value: 'johns-creek-ga', label: 'Johns Creek' },
  { value: 'milton-ga', label: 'Milton' },
  { value: 'gainesville-ga', label: 'Gainesville' },
  { value: 'dawsonville-ga', label: 'Dawsonville' },
  { value: 'dahlonega-ga', label: 'Dahlonega' },
  { value: 'flowery-branch-ga', label: 'Flowery Branch' },
  { value: 'buford-ga', label: 'Buford' },
  { value: 'canton-ga', label: 'Canton' },
  { value: 'suwanee-ga', label: 'Suwanee' },
  { value: 'roswell-ga', label: 'Roswell' },
]

export default function FilterBar({ service, city }: { service: string; city: string }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  function update(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString())
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    router.push(`/gallery?${params.toString()}`)
  }

  return (
    <div className={styles.filters}>
      <select
        className={styles.filterSelect}
        value={service}
        onChange={e => update('service', e.target.value)}
        aria-label="Filter by service"
      >
        {SERVICES.map(s => (
          <option key={s.value} value={s.value}>{s.label}</option>
        ))}
      </select>
      <select
        className={styles.filterSelect}
        value={city}
        onChange={e => update('city', e.target.value)}
        aria-label="Filter by city"
      >
        {CITIES.map(c => (
          <option key={c.value} value={c.value}>{c.label}</option>
        ))}
      </select>
    </div>
  )
}
