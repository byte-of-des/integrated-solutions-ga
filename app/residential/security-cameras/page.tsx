import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage/ServicePage'

export const metadata: Metadata = {
  title: 'Security Camera Installation in Cumming, GA',
  description: 'Professional home security camera and surveillance system installation in Cumming, Alpharetta & North Atlanta. Wired and wireless systems with remote monitoring.',
}

export default function SecurityCamerasPage() {
  return (
    <ServicePage
      eyebrow="Cumming, GA & North Atlanta"
      headline="Security Cameras & Surveillance"
      subheadline="See your property from anywhere. Professional camera systems installed with zero blind spots and remote access from your phone."
      intro="Off-the-shelf security cameras are easy to install and easy to fool. A professionally designed and installed camera system is something else entirely — complete coverage, proper positioning, clean cable runs, and reliable storage. We design systems around your specific property, then install everything properly so it works when it matters most."
      features={[
        { icon: 'camera', title: 'Indoor & Outdoor Cameras', desc: 'Weatherproof outdoor cameras and discrete indoor units, matched to your coverage needs.' },
        { icon: 'smartphone', title: 'Remote Access', desc: 'Watch live footage and review recordings from your phone or tablet from anywhere in the world.' },
        { icon: 'hard-drive', title: 'Local & Cloud Storage', desc: 'NVR local recording with optional cloud backup — your footage is always available.' },
        { icon: 'moon', title: 'Night Vision & Color Night Vision', desc: 'Clear color footage even in total darkness with modern IR and color night vision technology.' },
        { icon: 'bell', title: 'Motion Alerts', desc: 'Smart motion detection sends you an alert the moment something moves on your property.' },
        { icon: 'wrench', title: 'Clean Installation', desc: 'All wiring run through walls or conduit. No exposed cables hanging down the side of your house.' },
      ]}
      process={[
        { num: '1', title: 'Property Assessment', desc: "We walk your property and identify every potential blind spot, entry point, and coverage zone before recommending equipment." },
        { num: '2', title: 'System Design & Quote', desc: 'We spec the right number of cameras, the right storage, and the right NVR for your property — no upsells, no fluff.' },
        { num: '3', title: 'Professional Installation', desc: 'Every camera mounted at the optimal angle, all wiring concealed, NVR configured and tested.' },
        { num: '4', title: 'App Setup & Training', desc: 'We set up your phone app, test remote access, and show you how to review footage and adjust alerts.' },
      ]}
      faqs={[
        { q: 'Wired or wireless — which is better?', a: 'Wired (PoE) systems are more reliable and higher quality. Wireless is convenient but susceptible to signal loss and battery issues. For a permanent home installation, we recommend wired.' },
        { q: 'How much footage do you store?', a: 'Depends on the system — typically 7–30 days of continuous recording. We design the storage to match your needs.' },
        { q: 'Can I add cameras later?', a: 'Yes. We design systems with expansion in mind and leave spare NVR channels when possible.' },
        { q: 'Do you install doorbell cameras?', a: 'Yes — standalone doorbell cameras and as part of a larger system.' },
      ]}
      ctaHeadline="Protect your home the right way."
      ctaSub="Professional security camera installation in Cumming, Alpharetta, Johns Creek & North Atlanta. Free property assessment included."
    />
  )
}
