import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage/ServicePage'
import type { Project } from '@/data/types'
import projectsJson from '@/data/projects.json'

export const metadata: Metadata = {
  title: 'Whole-Home & Outdoor Audio Installation in Cumming, GA',
  description: 'Whole-home audio and outdoor speaker installation in Cumming, Alpharetta, Johns Creek & North Atlanta. Music in every room, controlled from your phone.',
}

export default function WholeHomeAudioPage() {
  const projects = (projectsJson as Project[]).filter(p => p.service === 'whole-home-audio')
  return (
    <ServicePage
      projects={projects}
      eyebrow="Cumming, GA & North Atlanta"
      headline="Whole-Home & Outdoor Audio"
      subheadline="Music in every room and on the patio — independently controlled from your phone, seamlessly installed."
      intro="Good whole-home audio disappears into the house. You don't see cables. You don't see boxes. You just hear great sound in every room, at the right volume, playing what you want. We design and install multi-zone audio systems for homes across North Atlanta — from a single living room and back porch setup to a full house with dedicated amplifiers for a dozen zones."
      features={[
        { icon: 'volume2', title: 'In-Ceiling & In-Wall Speakers', desc: 'Architectural speakers flush-mounted in the ceiling or wall — invisible when off, impressive when on.' },
        { icon: 'radio', title: 'Outdoor Speakers', desc: 'Weather-rated speakers for patios, pools, decks, and pergolas — built to survive Georgia summers and winters.' },
        { icon: 'smartphone', title: 'Phone & Voice Control', desc: 'Control every zone from the Sonos or Denon HEOS app, or ask Alexa/Google to adjust the volume in any room.' },
        { icon: 'sliders', title: 'Multi-Zone Amplification', desc: 'Each room or zone gets its own independent volume — someone in the kitchen can turn it up without blasting the bedroom.' },
        { icon: 'plug', title: 'Concealed Wiring', desc: 'All speaker wire run inside walls and ceilings during installation — nothing visible anywhere in the house.' },
        { icon: 'wifi', title: 'Streaming Integration', desc: 'Spotify, Apple Music, Tidal, and local audio sources available in every zone through a single app.' },
      ]}
      process={[
        { num: '1', title: 'Room-by-Room Design', desc: "We walk your home, plan speaker placement for optimal coverage in each room, and design the amplifier system and wiring routes." },
        { num: '2', title: 'Installation', desc: 'Speakers installed, wiring run inside walls, amplifiers placed in a closet or equipment rack, and the whole system wired and labeled.' },
        { num: '3', title: 'System Setup & Calibration', desc: 'We configure the control app, set up your streaming accounts, calibrate speaker levels by zone, and hand the system to you ready to use.' },
      ]}
      faqs={[
        { q: 'What systems do you install?', a: 'We install Sonos (most popular for ease of use), Denon HEOS, and Russound for budget-conscious builds. We\'ll recommend the right platform for your home size and how you like to listen.' },
        { q: 'Can I add outdoor speakers to my existing indoor system?', a: 'Usually yes — if you have a Sonos or compatible amplifier with open channels, outdoor speakers can often be added without a full system replacement.' },
        { q: 'Do the speakers have to match throughout the house?', a: 'No — we often mix speaker brands and models by room to optimize for the acoustics and budget of each space.' },
        { q: 'How disruptive is the installation?', a: 'Less than you\'d expect. Running wire inside finished walls requires small access holes that we patch and paint. For new construction or renovation, it\'s much simpler.' },
      ]}
      ctaHeadline="Fill your home with great sound."
      ctaSub="Free in-home audio design and quote. Serving Cumming, Alpharetta, Johns Creek, Milton & surrounding areas."
    />
  )
}
