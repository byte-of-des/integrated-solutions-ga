import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage/ServicePage'
import type { Project } from '@/data/types'
import projectsJson from '@/data/projects.json'

export const metadata: Metadata = {
  title: 'Home Theater Installation in Cumming, GA',
  description: 'Custom home theater design and installation in Cumming, Alpharetta & North Atlanta. Projectors, 4K displays, Dolby Atmos surround sound, and acoustic treatment.',
}

export default function HomeTheaterPage() {
  const projects = (projectsJson as Project[]).filter(p => p.service === 'home-theater')
  return (
    <ServicePage
      projects={projects}
      eyebrow="Cumming, GA & North Atlanta"
      headline="Home Theaters & Media Rooms"
      subheadline="A cinema-quality experience designed around your space. Projector or large-format display, immersive surround sound, and control that actually works."
      intro="A true home theater is more than a big TV and a soundbar. It's a room designed for immersive viewing — where the projector throw distance is calculated for your screen size, the speakers are positioned for Dolby Atmos staging, and the lighting can dim with a single button press. We've built dedicated home theaters and media room upgrades across North Atlanta, and we approach every project with the same level of precision."
      features={[
        { icon: 'film', title: 'Projector & 4K Displays', desc: 'Cinema projectors with 120"+ screens, or large-format 4K displays — we help you choose what\'s right for your room.' },
        { icon: 'volume2', title: 'Dolby Atmos Surround', desc: '7.1, 7.2.4, and larger speaker layouts with Dolby Atmos ceiling speakers for overhead sound.' },
        { icon: 'sliders', title: 'AV Receiver & Processing', desc: 'Premium AV receiver selection, calibration with Audyssey or Dirac, and proper setup for your speaker layout.' },
        { icon: 'lightbulb', title: 'Lighting Control', desc: 'Scene-based lighting that dims on playback and rises on pause — integrated with your AV system or smart home.' },
        { icon: 'gamepad2', title: 'Universal Control', desc: 'One remote (or phone) controls everything — projector, receiver, streaming, lights, and shades.' },
        { icon: 'server', title: 'Rack & Equipment Closet', desc: 'Rack-mounted equipment in a ventilated closet or AV rack — clean, serviceable, and properly managed.' },
      ]}
      process={[
        { num: '1', title: 'Room Assessment & Design', desc: 'We assess the room dimensions, ambient light, seating position, and acoustic properties to design the right system.' },
        { num: '2', title: 'System Specification', desc: 'We spec every component — projector, screen, speakers, receiver, subwoofer, and control system — and give you a detailed proposal.' },
        { num: '3', title: 'Installation', desc: 'Equipment installation, speaker placement and mounting, all cabling run and dressed, equipment rack or closet build.' },
        { num: '4', title: 'Calibration & Programming', desc: 'Speaker calibration with measurement mic, receiver tuning, control system programming, and full play-through test.' },
      ]}
      faqs={[
        { q: 'Projector or TV — which is better for a home theater?', a: "For a dedicated dark room, a projector and 120\"+ screen creates a more cinematic experience at a better price per inch. For a room with ambient light, a large 4K OLED or QLED may perform better. We'll help you evaluate based on your specific room." },
        { q: 'What\'s the minimum room size for a dedicated theater?', a: "You can build a great theater in a 12×16 ft room. Larger rooms give you more seating rows and bigger screens. The most important factor is controlling the ambient light." },
        { q: 'Do you do acoustic treatment?', a: "Yes — we can add acoustic panels, bass traps, and diffusers that improve sound quality significantly. We work with a range of options from functional to aesthetically integrated." },
        { q: 'Can you upgrade an existing media room?', a: "Absolutely. Whether it's adding Atmos ceiling speakers, upgrading the projector, or installing a control system — we can improve what you have." },
      ]}
      ctaHeadline="Build the theater you've always wanted."
      ctaSub="Free design consultation. We'll assess your room and show you exactly what's possible within your budget."
    />
  )
}
