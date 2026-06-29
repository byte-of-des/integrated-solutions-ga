import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage/ServicePage'
import type { Project } from '@/data/types'
import projectsJson from '@/data/projects.json'

export const metadata: Metadata = {
  title: 'Smart Home & Automation Installation in Cumming, GA',
  description: 'Smart home and automation installations in Cumming, Alpharetta, Johns Creek & North Atlanta. Control your lights, locks, thermostat, and AV from one app.',
}

export default function ResidentialAutomationPage() {
  const projects = (projectsJson as Project[]).filter(p => p.service === 'automation')
  return (
    <ServicePage
      projects={projects}
      eyebrow="Cumming, GA & North Atlanta"
      headline="Smart Home & Automation"
      subheadline="Control your lights, locks, thermostat, and AV from one app — or automate it all so your home just knows."
      intro="A smart home shouldn't require a manual. When it's done right, your home responds to how you live — lights that come on when you arrive, music that follows you room to room, and a thermostat that learns your schedule. We design and install smart home systems that are genuinely intuitive: easy for the whole family, reliable every day, and built around your actual routines rather than just piling on gadgets."
      features={[
        { icon: 'home', title: 'Unified Control', desc: 'Every device — lights, locks, thermostats, cameras, AV — controlled from one app on your phone or a wall-mounted touchpad.' },
        { icon: 'lightbulb', title: 'Smart Lighting', desc: 'Lutron Caseta and RadioRA dimmers that work with any bulb, never lose programming, and integrate with every major smart home platform.' },
        { icon: 'moon', title: 'Automated Scenes', desc: 'Good morning, movie night, vacation mode, and goodnight — one tap (or voice command) sets the whole house.' },
        { icon: 'smartphone', title: 'Voice & App Control', desc: 'Full Alexa, Google Home, and Apple HomeKit integration — your whole system works with whatever voice assistant you already use.' },
        { icon: 'bell', title: 'Smart Security Integration', desc: 'Smart locks, video doorbells, and cameras integrated into the same app as your lights and AV — see and control everything in one place.' },
        { icon: 'zap', title: 'Energy Management', desc: 'Smart thermostats and occupancy-based lighting that reduce your utility bills without you thinking about it.' },
      ]}
      process={[
        { num: '1', title: 'Lifestyle Assessment', desc: "We ask about your daily routines, which rooms matter most, and what frustrates you about your current setup — then design around your actual life." },
        { num: '2', title: 'System Design', desc: 'We recommend specific devices and platforms that work together reliably — not just the newest gadgets, but the ones that will still work in five years.' },
        { num: '3', title: 'Installation & Programming', desc: 'Devices installed, scenes programmed, and every automation tested before we hand it over — including a walkthrough with your whole household.' },
      ]}
      faqs={[
        { q: 'Which smart home platform do you work with?', a: 'We install and configure Apple HomeKit, Amazon Alexa, Google Home, and Savant. We\'ll recommend the right fit based on what devices you already have and how technical you want to get.' },
        { q: 'Can you integrate my existing smart devices?', a: 'Usually yes — we\'ll assess what you have and determine what can be unified into a single control system versus what needs to be replaced.' },
        { q: 'Is Lutron worth it compared to smart bulbs?', a: 'For a whole-home installation, yes — Lutron dimmers work with any bulb, are more reliable than smart bulbs, and never accidentally go offline because someone flipped the switch. Smart bulbs are great for single-room experiments, not whole-home systems.' },
        { q: 'What if I have guests who aren\'t tech-savvy?', a: 'All our systems include physical switches and simple interfaces that anyone can use without the app. The automation is a layer on top — it doesn\'t replace the basics.' },
      ]}
      ctaHeadline="Make your home work for you."
      ctaSub="Free smart home consultation and design. Serving Cumming, Alpharetta, Johns Creek, Milton & surrounding areas."
    />
  )
}
