import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Get a Free Quote',
  description: 'Contact ISG for a free AV installation quote in Cumming, Alpharetta, Johns Creek & North Atlanta. Call, email, or fill out our quick project form.',
}

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

export default function ContactPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.eyebrow}>Free Quote — No Obligation</p>
          <h1 className={styles.headline}>Let's Talk About Your Project</h1>
          <p className={styles.sub}>Tell us what you need and we'll get back to you within one business day with an honest estimate.</p>
        </div>
        <div className={styles.heroGrid} aria-hidden />
      </section>

      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.layout}>
            {/* Contact info */}
            <div className={styles.info}>
              <h2 className={styles.infoTitle}>Get in Touch</h2>
              <div className={styles.infoItems}>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.13h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.7a16 16 0 0 0 6.08 6.08l1.96-1.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span>
                  <div>
                    <p className={styles.infoLabel}>Phone</p>
                    <a href="tel:5550000000" className={styles.infoValue}>(555) 000-0000</a>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></span>
                  <div>
                    <p className={styles.infoLabel}>Email</p>
                    <a href="mailto:info@isg-av.com" className={styles.infoValue}>info@isg-av.com</a>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span>
                  <div>
                    <p className={styles.infoLabel}>Hours</p>
                    <p className={styles.infoValue}>Mon–Sat, 8 am – 7 pm</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></span>
                  <div>
                    <p className={styles.infoLabel}>Service Area</p>
                    <p className={styles.infoValue}>Cumming, Alpharetta, Johns Creek, Milton & North Atlanta</p>
                  </div>
                </div>
              </div>

              <div className={styles.badge}>
                <span>✓ Licensed &amp; Insured in Georgia</span>
                <span>✓ Same-Week Scheduling Available</span>
                <span>✓ Free In-Home Estimates</span>
              </div>
            </div>

            {/* Quote form */}
            <div className={styles.formWrap}>
              <h2 className={styles.formTitle}>Request a Quote</h2>
              <form className={styles.form} action="mailto:info@isg-av.com" method="POST" encType="text/plain">
                <div className={styles.row}>
                  <label className={styles.field}>
                    <span className={styles.label}>First Name</span>
                    <input className={styles.input} type="text" name="first_name" placeholder="Jane" required />
                  </label>
                  <label className={styles.field}>
                    <span className={styles.label}>Last Name</span>
                    <input className={styles.input} type="text" name="last_name" placeholder="Smith" required />
                  </label>
                </div>
                <label className={styles.field}>
                  <span className={styles.label}>Phone</span>
                  <input className={styles.input} type="tel" name="phone" placeholder="(555) 000-0000" required />
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>Email</span>
                  <input className={styles.input} type="email" name="email" placeholder="jane@email.com" required />
                </label>
                <fieldset className={styles.fieldset}>
                  <legend className={styles.label}>Service(s) Needed</legend>
                  <div className={styles.checkGrid}>
                    {SERVICES.map(s => (
                      <label key={s} className={styles.check}>
                        <input type="checkbox" name="services" value={s} />
                        <span>{s}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                <label className={styles.field}>
                  <span className={styles.label}>Tell us about your project</span>
                  <textarea className={styles.textarea} name="message" rows={4} placeholder="What are you looking to have done? Any details about your space help us give you an accurate quote." />
                </label>
                <button type="submit" className={`btn-primary ${styles.submit}`}>Send Quote Request →</button>
                <p className={styles.disclaimer}>We'll respond within one business day. No spam, no sales calls — just an honest answer.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
