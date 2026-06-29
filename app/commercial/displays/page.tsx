import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage/ServicePage'
import type { Project } from '@/data/types'
import projectsJson from '@/data/projects.json'

export const metadata: Metadata = {
  title: 'Commercial TV & Display Installation | ISG Georgia',
  description: 'Professional commercial TV mounting and display installation for restaurants, bars, lobbies, and retail spaces across Cumming, Alpharetta & North Atlanta.',
}

export default function CommercialDisplaysPage() {
  const projects = (projectsJson as Project[]).filter(p => p.service === 'commercial-displays')
  return (
    <ServicePage
      projects={projects}
      eyebrow="Commercial AV — Cumming, GA & North Atlanta"
      headline="Commercial TV & Displays"
      subheadline="Restaurant screens, lobby displays, digital signage, and multi-TV builds — installed clean, wired right, and built to last."
      intro="Commercial displays need to survive years of daily use, look great from every angle in the room, and be easy for staff to operate. We handle everything from a single lobby screen to a 12-TV sports bar build — with proper commercial-grade mounts, concealed wiring, and HDMI distribution that actually works. No dangling cables, no patched drywall, no guesswork."
      features={[
        { icon: 'monitor', title: 'Commercial-Grade Mounting', desc: 'Heavy-duty mounts rated for the display size and wall construction — concrete, metal stud, or wood frame.' },
        { icon: 'tv', title: 'Multi-TV Layouts', desc: 'We plan screen placement for maximum visibility from every seat or vantage point in the room.' },
        { icon: 'plug', title: 'Clean Cable Management', desc: 'All wiring run in-wall or through raceway — no exposed cables, no zip ties, no tape.' },
        { icon: 'sliders', title: 'HDMI Distribution', desc: 'Route one source (cable box, streaming device, digital signage player) to multiple screens simultaneously.' },
        { icon: 'zap', title: 'Digital Signage Setup', desc: 'We install and configure digital signage players so your menus, promos, and announcements update easily from any device.' },
        { icon: 'wrench', title: 'Existing Display Audit', desc: 'Have screens already installed that are underperforming? We assess, remount, or rewire existing installs.' },
      ]}
      process={[
        { num: '1', title: 'Site Walk & Layout Plan', desc: 'We walk the space with you, measure sightlines, identify mounting surfaces, and plan where every screen goes for maximum impact.' },
        { num: '2', title: 'Equipment Recommendations', desc: 'We recommend commercial-grade displays sized and specced for the environment — not consumer TVs that fail in six months.' },
        { num: '3', title: 'Installation', desc: 'Displays mounted, wiring concealed, HDMI distribution installed, and everything tested before we leave.' },
        { num: '4', title: 'Staff Handoff', desc: 'We show your staff exactly how to operate the system — inputs, sources, and any digital signage tools.' },
      ]}
      faqs={[
        { q: 'Should I use commercial or consumer TVs?', a: 'For anything running more than 8 hours a day, commercial displays are strongly recommended — they\'re rated for 16–18 hour operation, have brighter panels for high-ambient-light environments, and come with longer warranties.' },
        { q: 'Can you mount to concrete or brick walls?', a: 'Yes. We use appropriate anchors and hardware for any wall type — concrete, CMU block, brick, metal stud, or standard wood frame.' },
        { q: 'How many TVs can share one cable box or streaming source?', a: 'We can distribute a single HDMI source to virtually unlimited screens using commercial HDMI splitters and extenders over CAT6 or coax.' },
        { q: 'Do you handle the TV purchase or just installation?', a: 'Either way — we can source and supply the displays, or you can purchase them and we\'ll install. We\'re flexible.' },
      ]}
      ctaHeadline="Get your screens installed right."
      ctaSub="Free site assessment and quote. Serving businesses in Cumming, Alpharetta, Johns Creek & North Atlanta."
    />
  )
}
