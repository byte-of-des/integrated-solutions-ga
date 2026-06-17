import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar'
import Footer from '@/components/Footer/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'Integrated Solutions of Georgia | AV & Home Technology Installer',
    template: '%s | Integrated Solutions of Georgia',
  },
  description:
    'Integrated Solutions of Georgia — licensed and insured AV installation in Cumming, Alpharetta, Johns Creek & North Atlanta. TV mounting, home theaters, security cameras, Starlink, and commercial AV.',
  openGraph: {
    siteName: 'Integrated Solutions of Georgia',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {/* Hide hero content before first paint — removed by HeroIntro on mobile/reduced-motion skip */}
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add('isg-intro-pending')` }} />
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
