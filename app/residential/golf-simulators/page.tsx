import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage/ServicePage'
import type { Project } from '@/data/types'
import projectsJson from '@/data/projects.json'

export const metadata: Metadata = {
  title: 'Golf Simulator Installation in Cumming, GA',
  description: 'Professional home golf simulator room design and installation in Cumming, Alpharetta & North Atlanta. All brands — Foresight, TrackMan, SkyTrak, and more.',
}

export default function GolfSimulatorsPage() {
  const projects = (projectsJson as Project[]).filter(p => p.service === 'golf-simulators')
  return (
    <ServicePage
      projects={projects}
      eyebrow="Cumming, GA & North Atlanta"
      headline="Home Golf Simulator Installation"
      subheadline="Play your best courses year-round. We design and install complete golf simulator rooms — from impact screen to projector to launch monitor."
      intro="A great golf simulator room isn't just about the launch monitor — it's about the whole setup working together perfectly. The projector needs to be the right throw distance, at the right height, without any shadow from the golfer. The screen needs to be mounted at the right height and tension. The lighting can't wash out the image. We've built dozens of simulator rooms across North Atlanta and we know exactly what it takes to get it right."
      features={[
        { icon: 'flag', title: 'All Major Brands', desc: 'We install any launch monitor — Foresight GC3, GCQuad, TrackMan, SkyTrak, Uneekor, Mevo+ and more.' },
        { icon: 'target', title: 'Projector Optimization', desc: 'Short-throw and ultra-short-throw projector selection and installation for shadow-free, bright imagery.' },
        { icon: 'monitor', title: 'Impact Screen Setup', desc: 'Impact screen framing, tensioning, and mounting at the precise height for your setup.' },
        { icon: 'lightbulb', title: 'Lighting Design', desc: 'Proper lighting that illuminates the hitting area without washing out the projected image.' },
        { icon: 'volume2', title: 'Audio Integration', desc: 'Surround sound or stereo audio synced with your simulator software for full immersion.' },
        { icon: 'ruler', title: 'Room Assessment', desc: 'We assess ceiling height, room dimensions, and swing path before recommending any equipment.' },
      ]}
      process={[
        { num: '1', title: 'Room Measurement & Assessment', desc: 'We measure the room, check ceiling height at the ball strike zone, assess flooring, and identify any structural considerations.' },
        { num: '2', title: 'Equipment Recommendation', desc: 'Based on your budget and space, we recommend the right launch monitor, projector, screen, and simulator software combination.' },
        { num: '3', title: 'Build & Installation', desc: 'Screen frame construction, projector mounting, launch monitor placement, cabling, and full system configuration.' },
        { num: '4', title: 'Calibration & Testing', desc: 'We calibrate the projector, configure the simulator software, and play-test the system before handing it over.' },
      ]}
      faqs={[
        { q: 'What ceiling height do I need?', a: "For most golfers, you need a minimum of 9 feet of clearance at the point of ball contact. 10–11 feet is ideal. We'll assess your space and tell you honestly if it will work." },
        { q: 'Do you supply the equipment or just install?', a: "We can supply everything, handle installation only, or anything in between. We have relationships with all major brands and can get competitive pricing." },
        { q: 'What simulator software do you recommend?', a: "It depends on your priorities. E6 Connect has the best graphics. GSPro is popular for its value. TGC 2019 has the most courses. We'll help you choose based on your goals." },
        { q: 'How long does installation take?', a: "A standard setup takes 1–2 days. More complex builds with custom enclosures or significant AV integration may take 2–3 days." },
      ]}
      ctaHeadline="Build your simulator room."
      ctaSub="Free room assessment and equipment consultation. We've built dozens of simulator rooms across North Atlanta."
    />
  )
}
