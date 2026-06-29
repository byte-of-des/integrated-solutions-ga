import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage/ServicePage'
import type { Project } from '@/data/types'
import projectsJson from '@/data/projects.json'

export const metadata: Metadata = {
  title: 'Restaurant & Bar AV Installation | ISG Georgia',
  description: 'Zone audio, multiple TV feeds, and one-touch control for restaurants and bars in Cumming, Alpharetta & North Atlanta. Stop juggling remotes.',
}

export default function RestaurantBarPage() {
  const projects = (projectsJson as Project[]).filter(p => p.service === 'restaurant-bar')
  return (
    <ServicePage
      projects={projects}
      eyebrow="Restaurant & Bar AV — Cumming, GA & North Atlanta"
      headline="Restaurant & Bar A/V"
      subheadline="Zone audio, multiple TV feeds, and one-touch control — so your staff runs the room, not the remote."
      intro="Great restaurant and bar AV is invisible when it works and a headache when it doesn't. We design and install systems where your staff can control every screen and every speaker zone from a single tablet or touchpad — no more hunting for remotes, no more muted TVs, no more dead zones where the music doesn't reach. We've built sports bars, upscale dining rooms, rooftop patios, and everything in between."
      features={[
        { icon: 'tv', title: 'Multi-TV Layouts', desc: 'Multiple screens showing different sources — sports, news, specials — all managed from one place.' },
        { icon: 'volume2', title: 'Zone Audio', desc: 'Independent volume control for the bar, dining room, patio, and kitchen — each space at the right level.' },
        { icon: 'sliders', title: 'One-Touch Control', desc: 'A single touchscreen or app controls every TV and speaker zone in the building — your staff learns it in minutes.' },
        { icon: 'radio', title: 'Background Music Integration', desc: 'Spotify, Pandora for Business, or your preferred service distributed to every zone through the same amplifier system.' },
        { icon: 'plug', title: 'Clean Cable Management', desc: 'Every cable run in-wall or through conduit — even in existing builds. No exposed wiring behind the bar.' },
        { icon: 'monitor', title: 'Outdoor AV', desc: 'Weather-rated displays and outdoor speakers for patios, rooftops, and drive-thru areas.' },
      ]}
      process={[
        { num: '1', title: 'Concept Walk', desc: 'We walk the space with you, map out every TV location and speaker zone, and understand how you want staff to control it all.' },
        { num: '2', title: 'System Design', desc: 'We design the AV rack, distribution system, speaker layout, and control interface — and price it out line by line.' },
        { num: '3', title: 'Installation', desc: 'Displays mounted, speakers installed, amplifiers racked, cabling concealed, and the control system programmed.' },
        { num: '4', title: 'Staff Training', desc: 'We train your entire staff on the control system before we leave — and leave behind a one-page cheat sheet.' },
      ]}
      faqs={[
        { q: 'Can you show different channels on different TVs?', a: 'Yes — we use HDMI matrix switchers and multi-tuner set-top boxes to distribute different sources to different screens independently.' },
        { q: 'What control system do you use?', a: 'We use Savant, Control4, and simpler solutions like Lutron Caseta or RTI depending on your budget and how complex the system is. We\'ll recommend the right fit.' },
        { q: 'Can you work in an open restaurant without shutting us down?', a: 'Yes — we schedule heavy work during off-hours and can phase installation to keep you operating.' },
        { q: 'Do you handle outdoor installs?', a: 'Yes — we install weather-rated displays and outdoor speakers rated for direct sunlight and rain exposure.' },
      ]}
      ctaHeadline="Build the bar or restaurant your guests remember."
      ctaSub="Free site walk and AV design. Serving businesses in Cumming, Alpharetta, Johns Creek & North Atlanta."
    />
  )
}
