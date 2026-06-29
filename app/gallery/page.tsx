import { Suspense } from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import FilterBar from './FilterBar'
import type { Project } from '@/data/types'
import projectsJson from '@/data/projects.json'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Gallery — Our Installations | Integrated Solutions of Georgia',
  description: 'Browse ISG installation photos — TV mounts, home theaters, golf simulators, security cameras, and commercial AV in homes and businesses across North Atlanta.',
}

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string; city?: string }>
}) {
  const { service = '', city = '' } = await searchParams

  const allProjects = projectsJson as Project[]
  const filtered = allProjects.filter(p => {
    if (service && p.service !== service) return false
    if (city && p.city !== city) return false
    return true
  })

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.headline}>Our Work</h1>
          <p className={styles.sub}>Real installs from homes and businesses across North Atlanta.</p>
        </div>
      </section>

      <section className={styles.gallery}>
        <div className="container">
          <Suspense>
            <FilterBar service={service} city={city} />
          </Suspense>

          {filtered.length === 0 ? (
            <p className={styles.empty}>No projects match the selected filters.</p>
          ) : (
            <div className={styles.grid}>
              {filtered.map(p => (
                <div key={p.id} className={styles.card}>
                  <div className={styles.cardImg}>
                    <Image
                      src={p.after.src}
                      alt={p.after.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={styles.cardImgEl}
                    />
                    {p.before && (
                      <span className={styles.beforeAfterBadge}>Before &amp; After</span>
                    )}
                  </div>
                  <div className={styles.cardBody}>
                    <p className={styles.cardTitle}>{p.title}</p>
                    <p className={styles.cardCaption}>{p.caption}</p>
                    <div className={styles.cardBadges}>
                      <span className={styles.badge}>{p.service.replace(/-/g, ' ')}</span>
                      <span className={styles.badge}>{p.city.replace(/-ga$/, '').replace(/-/g, ' ')}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
