import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage/ServicePage'
import type { Project } from '@/data/types'
import projectsJson from '@/data/projects.json'

export const metadata: Metadata = {
  title: 'TV & Sound Bar Mounting in Cumming, GA',
  description: 'Professional TV mounting and sound bar installation in Cumming, Alpharetta, Johns Creek & North Atlanta. Concealed cables, perfect placement, same-week scheduling.',
}

export default function TvMountingPage() {
  const projects = (projectsJson as Project[]).filter(p => p.service === 'tv-mounting')
  return (
    <ServicePage
      projects={projects}
      eyebrow="Cumming, GA & North Atlanta"
      headline="TV & Sound Bar Mounting"
      subheadline="Perfect placement, fully concealed wires, and a clean wall finish — installed by professionals who care about the details."
      intro="A TV on the wall looks great. A TV on the wall with perfectly hidden cables, a mount that's level to the millimeter, and a sound bar that sounds as good as it looks — that's what we do. We've mounted flat screens and sound systems in hundreds of homes across North Atlanta, from 32-inch bedroom TVs to 85-inch living room centerpieces."
      features={[
        { icon: 'tv', title: 'All TV Sizes & Brands', desc: 'We mount any size — from 32" to 98" — on any wall type including drywall, brick, stone, and tile.' },
        { icon: 'plug', title: 'In-Wall Wire Concealment', desc: 'No unsightly cords. We route power and HDMI cables through the wall for a factory-clean look.' },
        { icon: 'volume2', title: 'Sound Bar Installation', desc: 'Matching mount under the TV or flush-to-wall — we sync it with your system so everything just works.' },
        { icon: 'ruler', title: 'Perfect Level & Height', desc: 'We use laser levels to get it right the first time, at the optimal viewing height for your room.' },
        { icon: 'wrench', title: 'All Wall Types', desc: 'Stud walls, concrete, brick, tile — we have the hardware and experience for any installation.' },
        { icon: 'gamepad2', title: 'Equipment Setup', desc: 'We connect and configure your streaming devices, gaming consoles, and cable boxes before we leave.' },
      ]}
      process={[
        { num: '1', title: 'Free In-Home Quote', desc: "We assess your wall type, stud locations, and your room's layout to give you an accurate price — no surprises." },
        { num: '2', title: 'Installation Day', desc: 'We arrive on time, protect your floors, mount the TV, run the cables, and clean up completely.' },
        { num: '3', title: 'Everything Working Before We Leave', desc: 'We connect all your devices, tune the picture settings, and make sure every remote works properly.' },
      ]}
      faqs={[
        { q: 'How long does a TV mounting take?', a: 'Most single TV mounts with wire concealment take 1–2 hours. Larger installs with multiple TVs or difficult walls take longer — we\'ll give you an accurate estimate before booking.' },
        { q: 'Do you patch the wall if there\'s an existing hole?', a: 'Yes. We patch and paint any holes made during installation at no extra charge.' },
        { q: 'What wall types can you mount on?', a: 'Drywall, plaster, brick, concrete block, stone, and tile. Each requires different hardware — we carry it all.' },
        { q: 'Do you supply the TV mount?', a: 'Yes, we supply a quality mount matched to your TV size and weight. Or we can use a mount you\'ve already purchased.' },
        { q: 'Do you mount TVs above fireplaces?', a: "We do, but we'll be honest with you about heat concerns and viewing angle. If it's not a good setup for your room, we'll tell you." },
      ]}
      ctaHeadline="Get your TV mounted the right way."
      ctaSub="Free quotes, fast scheduling, and a clean finish every time. Serving Cumming, Alpharetta, Johns Creek, Milton & surrounding areas."
    />
  )
}
