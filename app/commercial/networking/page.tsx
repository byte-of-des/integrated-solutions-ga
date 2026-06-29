import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage/ServicePage'
import type { Project } from '@/data/types'
import projectsJson from '@/data/projects.json'

export const metadata: Metadata = {
  title: 'Commercial Networking & Data Drops | ISG Georgia',
  description: 'Structured cabling, Ubiquiti/Unifi networking, and data drop installation for businesses in Cumming, Alpharetta & North Atlanta.',
}

export default function CommercialNetworkingPage() {
  const projects = (projectsJson as Project[]).filter(p => p.service === 'commercial-networking')
  return (
    <ServicePage
      projects={projects}
      eyebrow="Commercial Networking — Cumming, GA & North Atlanta"
      headline="Networking & Data Drops"
      subheadline="Enterprise-grade Wi-Fi, structured cabling, and network closet builds for businesses that can't afford downtime."
      intro="Slow Wi-Fi and dropped connections cost your business money every day. We design and install commercial networking infrastructure using Ubiquiti/Unifi and enterprise-grade structured cabling — so every corner of your space has fast, reliable connectivity. From a single suite build-out to a multi-floor office network, we handle the cabling, the closet, the access points, and the configuration."
      features={[
        { icon: 'wifi', title: 'Ubiquiti/Unifi Deployment', desc: 'Enterprise-grade access points with centralized management, band steering, and seamless roaming between APs.' },
        { icon: 'server', title: 'Network Closet Builds', desc: 'Patch panels, managed switches, cable management, and proper labeling — a closet that any tech can work in.' },
        { icon: 'plug', title: 'Structured Cabling (CAT6/6A)', desc: 'Certified data drops run to every workstation, conference room, POS terminal, and camera location.' },
        { icon: 'monitor', title: 'VLAN Segmentation', desc: 'Separate your guest Wi-Fi, POS network, security cameras, and internal traffic — so one compromised device doesn\'t take everything down.' },
        { icon: 'zap', title: 'PoE Switching', desc: 'Power cameras, phones, and access points over the network cable — no separate power required at each device.' },
        { icon: 'wrench', title: 'Network Audits & Upgrades', desc: 'Existing network underperforming? We audit, identify bottlenecks, and upgrade only what\'s needed.' },
      ]}
      process={[
        { num: '1', title: 'Site Assessment', desc: 'We measure the space, identify coverage gaps, locate the MDF/IDF, and document what cabling exists.' },
        { num: '2', title: 'Design & Scope', desc: 'We design the access point layout, cable routes, and switch/rack configuration — and give you a clear line-item proposal.' },
        { num: '3', title: 'Installation', desc: 'Cable pulls, terminations, patch panel dressing, rack build, AP mounting, and switch configuration.' },
        { num: '4', title: 'Testing & Handoff', desc: 'Every drop tested with a cable certifier, Wi-Fi coverage mapped, and management credentials handed over with documentation.' },
      ]}
      faqs={[
        { q: 'Do you install Comcast/AT&T business service?', a: 'We don\'t sell ISP service, but we\'ll coordinate with your ISP on the demarc and build everything from the modem/router forward.' },
        { q: 'Can you work in an occupied space?', a: 'Yes — we schedule cable pulls and closet work around your business hours and can phase work to minimize disruption.' },
        { q: 'Do I need CAT6 or CAT6A?', a: 'CAT6 supports 10Gbps up to 55 meters and is right for most commercial builds. CAT6A supports 10Gbps at full 100-meter runs and is preferred for new builds or high-density environments. We\'ll recommend the right spec for your layout.' },
        { q: 'Can you take over an existing Unifi system?', a: 'Yes — we can adopt existing Unifi hardware into a fresh controller, re-configure it properly, and take over ongoing management.' },
      ]}
      ctaHeadline="Build a network your business can rely on."
      ctaSub="Free site assessment and network design. Serving Cumming, Alpharetta, Johns Creek & North Atlanta."
    />
  )
}
