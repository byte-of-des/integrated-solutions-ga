import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage/ServicePage'
import type { Project } from '@/data/types'
import projectsJson from '@/data/projects.json'

export const metadata: Metadata = {
  title: 'Lighting Control Installation in Cumming, GA',
  description: 'Lutron and smart lighting control installations in Cumming, Alpharetta, Johns Creek & North Atlanta. Dimmers, scenes, and whole-home lighting automation.',
}

export default function ResidentialLightingPage() {
  const projects = (projectsJson as Project[]).filter(p => p.service === 'lighting')
  return (
    <ServicePage
      projects={projects}
      eyebrow="Cumming, GA & North Atlanta"
      headline="Lighting Control"
      subheadline="The right light for every moment — automated, dimmed, and controlled from anywhere in the house."
      intro="Lighting is the single biggest factor in how a room feels. The same space with flat overhead lighting versus a warm, dimmed scene for dinner is barely recognizable as the same room. We install Lutron Caseta and RadioRA lighting control systems that let you set the perfect scene for every moment — and automate it so the right lights come on at the right time without you thinking about it."
      features={[
        { icon: 'lightbulb', title: 'Lutron Caseta & RadioRA', desc: 'The most reliable wireless dimmer systems available — work with any bulb type and integrate with every major smart home platform.' },
        { icon: 'moon', title: 'Scene Programming', desc: 'Dinner, movie night, morning routine, entertaining — each scene sets every light in the relevant rooms to the perfect level with one tap.' },
        { icon: 'smartphone', title: 'App & Voice Control', desc: 'Adjust any light or activate any scene from your phone, or ask Alexa, Google, or Siri.' },
        { icon: 'zap', title: 'Automated Schedules', desc: 'Lights that come on at sunset, fade out at bedtime, and greet you when you pull into the driveway.' },
        { icon: 'home', title: 'Whole-Home Integration', desc: 'Lighting tied into your AV, thermostat, and security system so scenes can trigger across your entire smart home.' },
        { icon: 'plug', title: 'Retrofit-Friendly', desc: 'Lutron Caseta installs in standard switch boxes with no neutral wire required — compatible with most existing home wiring.' },
      ]}
      process={[
        { num: '1', title: 'Lighting Design', desc: 'We walk your home and identify which lights to control, where keypads go, and what scenes will be most useful for how you live.' },
        { num: '2', title: 'Installation', desc: 'Lutron dimmers and keypads installed in place of existing switches, the Lutron bridge configured, and scenes programmed.' },
        { num: '3', title: 'App Setup & Training', desc: 'We set up the Lutron app on your family\'s phones, configure voice assistant integration, and walk everyone through the scenes.' },
      ]}
      faqs={[
        { q: 'Do I need to replace all my light bulbs?', a: 'No — Lutron dimmers work with LED, incandescent, and halogen bulbs. We\'ll check your existing bulbs and let you know if any need swapping.' },
        { q: 'Does my electrician need to be involved?', a: 'For most Lutron Caseta installations, no — the dimmers replace existing switches and we handle everything. For new circuits or panel work, we coordinate with your electrician.' },
        { q: 'What\'s the difference between Caseta and RadioRA?', a: 'Caseta is ideal for most homes — it\'s simpler, less expensive, and works with every smart home platform. RadioRA 3 supports larger systems (250+ devices), in-wall remotes, and more granular scene options. We\'ll recommend the right fit.' },
        { q: 'Can lighting control work with my existing recessed lights?', a: 'Yes — as long as they\'re on a circuit that can be dimmed, existing recessed lights work with Lutron dimmers without any changes to the fixtures.' },
      ]}
      ctaHeadline="Transform how your home feels with better lighting."
      ctaSub="Free lighting consultation and design. Serving Cumming, Alpharetta, Johns Creek, Milton & surrounding areas."
    />
  )
}
