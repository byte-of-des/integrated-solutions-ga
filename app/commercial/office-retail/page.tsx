import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage/ServicePage'
import type { Project } from '@/data/types'
import projectsJson from '@/data/projects.json'

export const metadata: Metadata = {
  title: 'Gym & Entertainment System Installation | ISG Georgia',
  description: 'Cardio-floor TVs, locker-room audio, and zone control for fitness centers and entertainment venues in Cumming, Alpharetta & North Atlanta.',
}

export default function OfficeRetailPage() {
  const projects = (projectsJson as Project[]).filter(p => p.service === 'office-retail')
  return (
    <ServicePage
      projects={projects}
      eyebrow="Commercial AV — Cumming, GA & North Atlanta"
      headline="Gym & Entertainment Systems"
      subheadline="Cardio-floor TVs, locker-room audio, and zone control for fitness centers and entertainment venues that members actually enjoy."
      intro="A gym without good AV is just a warehouse with equipment. Members stay longer, come back more often, and refer their friends when the TVs work and the music is right. We design and install fitness center AV that's durable enough for the environment, easy for staff to control, and keeps members engaged — from the cardio floor to the group fitness room to the locker rooms."
      features={[
        { icon: 'tv', title: 'Cardio Floor TV Arrays', desc: 'Displays mounted at the right height and angle for treadmills, ellipticals, and bikes — with individual headphone jack or Bluetooth audio options.' },
        { icon: 'volume2', title: 'Zone Audio', desc: 'Separate volume and source control for the cardio floor, free weights, group fitness, lobby, and locker rooms.' },
        { icon: 'sliders', title: 'Staff Control Interface', desc: 'One touchpad at the front desk to manage every TV and audio zone in the building — no technical knowledge required.' },
        { icon: 'monitor', title: 'Group Fitness Displays', desc: 'Large-format displays for group fitness rooms, yoga studios, and cycling classes — wall or ceiling mounted.' },
        { icon: 'flag', title: 'Durable Commercial Hardware', desc: 'Commercial-rated displays and brackets built for high-moisture, high-vibration environments — not consumer TVs that fail in months.' },
        { icon: 'radio', title: 'Background Music Licensing', desc: 'We integrate with licensed background music services (Soundtrack Your Brand, Rockbot) that keep you legally covered.' },
      ]}
      process={[
        { num: '1', title: 'Facility Walk', desc: 'We map every zone, measure equipment rows, assess ceiling heights, and document mounting surfaces and electrical availability.' },
        { num: '2', title: 'System Design', desc: 'We design display placement, speaker layout, amplifier sizing, and control logic — optimized for member experience and staff simplicity.' },
        { num: '3', title: 'Installation', desc: 'Displays mounted, speakers installed, cabling concealed, amplifiers and control equipment racked.' },
        { num: '4', title: 'Staff Training & Handoff', desc: 'We train front desk and management staff on the control system and leave behind documentation for onboarding new hires.' },
      ]}
      faqs={[
        { q: 'Can members control their individual cardio display?', a: 'Yes — we can integrate infrared repeaters or Bluetooth audio systems so members control their own screen or audio without affecting other equipment.' },
        { q: 'What about high-humidity areas like locker rooms?', a: 'We use humidity-rated speakers and displays in wet zones — standard consumer gear fails quickly in those environments.' },
        { q: 'Can you work around gym hours?', a: 'Yes — we schedule installation phases during off-peak hours and can section off areas to keep most of the facility open.' },
        { q: 'Do you handle commercial gyms and apartment fitness centers?', a: 'Both — we serve commercial fitness centers, hotel gyms, apartment amenity spaces, and corporate wellness facilities.' },
      ]}
      ctaHeadline="Give your members an AV experience they\'ll notice."
      ctaSub="Free facility walk and system design. Serving Cumming, Alpharetta, Johns Creek & North Atlanta."
    />
  )
}
