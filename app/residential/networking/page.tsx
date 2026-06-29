import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage/ServicePage'
import type { Project } from '@/data/types'
import projectsJson from '@/data/projects.json'

export const metadata: Metadata = {
  title: 'Home Wi-Fi, Networking & Structured Cabling in Cumming, GA',
  description: 'Whole-home mesh Wi-Fi, structured cabling, and Unifi networking installations in Cumming, Alpharetta, Johns Creek & North Atlanta. Fix dead zones for good.',
}

export default function ResidentialNetworkingPage() {
  const projects = (projectsJson as Project[]).filter(p => p.service === 'networking')
  return (
    <ServicePage
      projects={projects}
      eyebrow="Cumming, GA & North Atlanta"
      headline="Wi-Fi, Networking & Cabling"
      subheadline="Fast, reliable Wi-Fi in every corner of your home — no dead zones, no buffering, no monthly service calls."
      intro="Modern homes run on Wi-Fi. Your streaming, your work calls, your security cameras, your smart home devices — all of it needs reliable, fast wireless coverage. We design and install whole-home mesh networks and structured cabling systems that eliminate dead zones permanently, whether you're in a 2,000 sq ft ranch or a 6,000 sq ft custom home with a finished basement and outbuildings."
      features={[
        { icon: 'wifi', title: 'Whole-Home Mesh Wi-Fi', desc: 'Eero, Ubiquiti/Unifi, and Google Nest deployments that blanket your entire home and property with reliable signal.' },
        { icon: 'plug', title: 'Structured Cabling (CAT6)', desc: 'Hardwired drops to TVs, offices, game rooms, and smart home hubs — wired connections are always faster and more reliable than Wi-Fi.' },
        { icon: 'server', title: 'Network Closet / Rack Builds', desc: 'A clean, organized network closet with patch panel, managed switch, and proper cable management — built to last.' },
        { icon: 'target', title: 'Dead Zone Elimination', desc: 'We survey your home with professional tools, identify exactly why certain areas have weak signal, and fix it permanently.' },
        { icon: 'flag', title: 'Outdoor Coverage', desc: 'Wi-Fi extended to detached garages, workshops, pool areas, and driveways for outdoor cameras and smart devices.' },
        { icon: 'hard-drive', title: 'Router & ISP Integration', desc: 'We configure your ISP modem, router, and mesh system as a unified network — no double-NAT, no conflicts.' },
      ]}
      process={[
        { num: '1', title: 'Home Survey & Coverage Test', desc: "We walk your home with a Wi-Fi analyzer to map current coverage, identify dead zones, and find the best access point placement." },
        { num: '2', title: 'System Design', desc: 'We design the network layout — where access points go, which rooms get wired drops, and how the whole thing ties together.' },
        { num: '3', title: 'Installation & Configuration', desc: 'Access points mounted, cabling run, rack or closet built, and the entire network configured and tested before we leave.' },
      ]}
      faqs={[
        { q: 'Will this fix my Wi-Fi dead zones for good?', a: 'Yes — we\'ve eliminated dead zones in hundreds of North Atlanta homes. We don\'t leave until the coverage maps clean.' },
        { q: 'Which mesh system do you recommend?', a: 'For most homes, Eero Pro is the best balance of performance and ease of use. For larger homes or tech-savvy owners, Ubiquiti/Unifi gives more control and better performance at scale.' },
        { q: 'Do I need to run new cables in my finished home?', a: 'Not always — we\'ll use your existing coax, telephone wire, or powerline adapters where they\'re sufficient, and run new CAT6 only where it\'s genuinely needed.' },
        { q: 'Can you extend Wi-Fi to my detached garage or shop?', a: 'Yes — we run underground conduit or use point-to-point wireless bridges to reach outbuildings cleanly.' },
      ]}
      ctaHeadline="Fix your Wi-Fi once and for all."
      ctaSub="Free home network assessment and quote. Serving Cumming, Alpharetta, Johns Creek, Milton & surrounding areas."
    />
  )
}
