import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage/ServicePage'
import type { Project } from '@/data/types'
import projectsJson from '@/data/projects.json'

export const metadata: Metadata = {
  title: 'Commercial Zone Automation & One-Touch Control | ISG Georgia',
  description: 'One-touch AV and lighting zone automation for restaurants, bars, and businesses in Cumming, Alpharetta & North Atlanta. Stop wrestling with remotes.',
}

export default function CommercialAutomationPage() {
  const projects = (projectsJson as Project[]).filter(p => p.service === 'commercial-automation')
  return (
    <ServicePage
      projects={projects}
      eyebrow="Commercial Automation — Cumming, GA & North Atlanta"
      headline="One-Touch Zone Automation"
      subheadline="One button press sets the right TVs, audio, and lighting for every zone in your business — lunch service, happy hour, or closing time."
      intro="Managing AV and lighting across a busy commercial space shouldn't require a staff member with a tech degree. We program custom scenes so your team presses one button and the entire room responds — TVs on the right inputs, music at the right level, lights at the right setting. Sports game? One press. Private dining? One press. Closing the restaurant? One press. We build the automation around how your business actually runs."
      features={[
        { icon: 'sliders', title: 'Custom Scene Programming', desc: 'Pre-set scenes for every operational mode — open, lunch, happy hour, dinner service, private event, closing.' },
        { icon: 'lightbulb', title: 'Lighting Integration', desc: 'Lutron and other lighting systems integrated into the same control interface as your AV — one app, one touchpad, everything.' },
        { icon: 'smartphone', title: 'Mobile Control', desc: 'Staff can control every zone from a phone or tablet — no dedicated touchpad required unless preferred.' },
        { icon: 'volume2', title: 'Audio Zone Control', desc: 'Fade in background music, switch sources, and adjust volume by zone — all from the same interface.' },
        { icon: 'tv', title: 'TV & Input Automation', desc: 'Screens turn on to the right input automatically when a scene activates — no staff fumbling through HDMI menus.' },
        { icon: 'moon', title: 'Scheduled Automation', desc: 'Set it and forget it — scenes that activate on a schedule so opening and closing routines happen automatically.' },
      ]}
      process={[
        { num: '1', title: 'Workflow Mapping', desc: 'We sit down with you and map every operational mode, who controls what, and what "perfect" looks like for each scenario.' },
        { num: '2', title: 'System Design', desc: 'We design the control architecture, select the control platform, and spec the hardware — with a clear proposal before any work begins.' },
        { num: '3', title: 'Installation & Programming', desc: 'Hardware installed and every scene programmed and tested — we don\'t hand it over until it works exactly as designed.' },
        { num: '4', title: 'Staff Training', desc: 'We train every staff member who will use the system and adjust scenes based on their feedback during the first week.' },
      ]}
      faqs={[
        { q: 'What control platform do you use?', a: 'We use Savant, Control4, and Lutron depending on complexity and budget. For simpler builds, we use commercial touchpads and mobile apps that don\'t require a dedicated processor.' },
        { q: 'Can you automate an existing system that wasn\'t designed for it?', a: 'Often yes — we assess your current AV and lighting equipment and determine what can be integrated. Older gear sometimes needs to be replaced or supplemented.' },
        { q: 'How long does programming take?', a: 'A typical restaurant or bar automation build takes 1–3 days for installation plus half a day for programming and testing. More complex systems take longer.' },
        { q: 'What happens if something stops working?', a: 'We offer support contracts with remote access — most issues are resolved without an on-site visit. When we do need to come out, we\'re fast.' },
      ]}
      ctaHeadline="Run your business with one press of a button."
      ctaSub="Free consultation and system design. Serving Cumming, Alpharetta, Johns Creek & North Atlanta."
    />
  )
}
