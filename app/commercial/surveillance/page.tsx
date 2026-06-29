import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage/ServicePage'
import type { Project } from '@/data/types'
import projectsJson from '@/data/projects.json'

export const metadata: Metadata = {
  title: 'Business Surveillance Camera Installation | ISG Georgia',
  description: 'IP security camera systems for businesses in Cumming, Alpharetta & North Atlanta. Indoor, outdoor, remote monitoring, motion alerts, and secure storage.',
}

export default function CommercialSurveillancePage() {
  const projects = (projectsJson as Project[]).filter(p => p.service === 'surveillance')
  return (
    <ServicePage
      projects={projects}
      eyebrow="Commercial Security — Cumming, GA & North Atlanta"
      headline="Business Surveillance"
      subheadline="IP camera systems that cover every angle — with remote monitoring, motion alerts, and footage you can actually use."
      intro="A security camera system is only as good as what it captures and how fast you can find it. We install commercial IP camera systems with the resolution, coverage, and storage to actually protect your business — not just hang cameras on the wall. Every system is designed around your specific layout, with remote access so you can check in from anywhere."
      features={[
        { icon: 'camera', title: 'Indoor & Outdoor Cameras', desc: 'Vandal-resistant dome cameras, wide-angle bullet cameras, and PTZ units for large lots or loading docks.' },
        { icon: 'monitor', title: 'NVR & Cloud Storage', desc: 'On-site NVR recording with optional cloud backup — footage stays accessible even if the recorder is tampered with.' },
        { icon: 'smartphone', title: 'Remote Monitoring', desc: 'Watch live or review recorded footage from your phone, tablet, or desktop — from anywhere, any time.' },
        { icon: 'bell', title: 'Motion Alerts', desc: 'Instant push notifications when cameras detect motion in defined zones — so you know about incidents in real time.' },
        { icon: 'hard-drive', title: 'High-Resolution Recording', desc: '4K and 2K cameras that capture clear, identifiable footage — not the blurry thumbnails that end up on the news.' },
        { icon: 'zap', title: 'PoE Installation', desc: 'Power over Ethernet means one cable per camera — clean installs with no separate power runs.' },
      ]}
      process={[
        { num: '1', title: 'Site Survey', desc: 'We walk the property and identify every blind spot, entry point, and high-risk area that needs coverage.' },
        { num: '2', title: 'System Design', desc: 'We spec the right cameras, NVR, and storage for your square footage, lighting conditions, and retention requirements.' },
        { num: '3', title: 'Installation & Configuration', desc: 'Cameras mounted, cabling run, NVR configured, motion zones set, and remote access tested from your phone before we leave.' },
        { num: '4', title: 'Training', desc: 'We walk you and your staff through live monitoring, footage review, and alert management — no learning curve.' },
      ]}
      faqs={[
        { q: 'How much footage storage do I need?', a: 'For most businesses, 2–4 weeks of continuous recording is standard. We size the NVR storage based on your camera count, resolution, and how long you need to retain footage.' },
        { q: 'Can I add cameras to an existing system?', a: 'Usually yes — if your existing NVR has open ports and uses standard PoE, we can add compatible cameras. We\'ll assess your current setup first.' },
        { q: 'Do you work with insurance requirements?', a: 'Yes. We can provide documentation on the system installed, and many of our clients use footage to resolve insurance claims. We design systems that meet common commercial insurance requirements.' },
        { q: 'What happens if the internet goes down?', a: 'On-site NVR systems record locally regardless of internet status. You lose remote access during an outage but recording continues.' },
      ]}
      ctaHeadline="Protect your business with a system that works."
      ctaSub="Free site survey and camera placement plan. Serving Cumming, Alpharetta, Johns Creek & North Atlanta."
    />
  )
}
