import type { Metadata } from 'next'
import styles from './privacy.module.css'

export const metadata: Metadata = {
  title: 'Privacy Policy | Integrated Solutions of Georgia',
  description: 'Privacy policy for Integrated Solutions of Georgia.',
}

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <div className={`container ${styles.content}`}>
        <h1>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: June 29, 2026</p>

        <section>
          <h2>Information We Collect</h2>
          <p>When you submit a quote request or contact form on our website, we collect the information you provide — such as your name, phone number, email address, and project details. We do not collect any information beyond what you voluntarily submit.</p>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <p>We use your contact information solely to respond to your inquiry, schedule consultations, and provide the services you requested. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
        </section>

        <section>
          <h2>Cookies & Analytics</h2>
          <p>Our website may use standard analytics tools to understand how visitors interact with our site. This data is aggregated and anonymous. We do not use tracking cookies for advertising.</p>
        </section>

        <section>
          <h2>Data Security</h2>
          <p>We take reasonable precautions to protect your information. Your contact details are only accessible to our team and are never stored longer than necessary to complete your project.</p>
        </section>

        <section>
          <h2>Third-Party Links</h2>
          <p>Our site may contain links to external websites. We are not responsible for the privacy practices of those sites and encourage you to review their policies.</p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>If you have any questions about this privacy policy, please reach out:</p>
          <ul>
            <li>Email: <a href="mailto:jeff@integratedsolutionsofga.com">jeff@integratedsolutionsofga.com</a></li>
            <li>Phone: <a href="tel:7709127642">770-912-7642</a></li>
          </ul>
        </section>
      </div>
    </main>
  )
}
