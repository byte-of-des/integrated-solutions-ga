import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage/ServicePage'
import type { Project } from '@/data/types'
import projectsJson from '@/data/projects.json'

export const metadata: Metadata = {
  title: 'Starlink Installation in Cumming, GA',
  description: 'Professional Starlink dish installation in Cumming, Alpharetta & North Atlanta. Optimal satellite placement, roof and pole mounting, indoor router setup.',
}

export default function StarlinkPage() {
  const projects = (projectsJson as Project[]).filter(p => p.service === 'starlink')
  return (
    <ServicePage
      projects={projects}
      eyebrow="Cumming, GA & North Atlanta"
      headline="Starlink Installation"
      subheadline="High-speed satellite internet, professionally installed. We find the clearest sky view on your property and mount it properly — so it works, reliably."
      intro="Starlink is genuinely fast — but only if it can see the sky. The single most important factor in Starlink performance is obstruction-free sky view, and that requires finding the right mounting location on your property. A dish blocked by trees or a chimney won't perform. We assess your property with the Starlink app, find the optimal location, and install it properly — roof mount, ground mount, or pole mount — with all cabling run cleanly to your router location."
      features={[
        { icon: 'satellite', title: 'Obstruction Assessment', desc: 'We use the Starlink app to find the spot on your property with the clearest 100° field of sky view.' },
        { icon: 'home', title: 'Roof & Pole Mounting', desc: 'Proper mounting hardware for roof (flashed or J-mount), ground poles, or exterior walls.' },
        { icon: 'plug', title: 'Clean Cable Runs', desc: 'Cable routed through walls, attic, or conduit — not snaking down the side of your house.' },
        { icon: 'wifi', title: 'Router Placement', desc: 'We position the router for optimal whole-home coverage, or integrate it with your existing mesh network.' },
        { icon: 'zap', title: 'Full System Test', desc: 'We run speed tests and verify performance before we pack up and leave.' },
        { icon: 'cloud-rain', title: 'Weather-Sealed Installation', desc: 'All exterior penetrations are properly flashed and sealed — no water intrusion.' },
      ]}
      process={[
        { num: '1', title: 'Sky View Assessment', desc: "We walk your property with the Starlink app to find the location with the fewest obstructions — this determines whether you'll get the speeds Starlink promises." },
        { num: '2', title: 'Mount Selection & Quote', desc: 'We recommend the right mount type for your property (roof, ground, pole) and give you a clear, itemized quote.' },
        { num: '3', title: 'Professional Installation', desc: 'Dish mounted, cables run, router positioned, and everything tested. We bring all the hardware.' },
      ]}
      faqs={[
        { q: 'Do I need to have a Starlink kit already?', a: "Yes — you order the Starlink kit from Starlink.com, and we provide the professional mounting and installation. We don't sell the Starlink hardware itself." },
        { q: 'What if my roof isn\'t the best location?', a: "We'll find the best spot — whether that's the roof, a ground pole in your yard, or a chimney mount. We only recommend a roof install if it's truly the best location for your signal." },
        { q: "Does a roof mount void my roof's warranty?", a: "It depends on your roofing material and warranty. For shake or tile roofs, we often recommend a non-penetrating mount instead. We'll advise you on the safest option." },
        { q: 'Can you replace my existing internet, or add Starlink alongside it?', a: 'Both. We can set Starlink as your primary connection, or configure it as a failover backup alongside your existing ISP.' },
      ]}
      ctaHeadline="Get Starlink installed right."
      ctaSub="Professional installation in Cumming, Alpharetta, Johns Creek & surrounding areas. Bring your own dish — we handle everything else."
    />
  )
}
