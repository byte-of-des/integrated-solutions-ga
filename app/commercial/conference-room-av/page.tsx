import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage/ServicePage'
import type { Project } from '@/data/types'
import projectsJson from '@/data/projects.json'

export const metadata: Metadata = {
  title: 'Conference Room AV Installation in Cumming, GA',
  description: 'Professional conference room AV and video conferencing systems in Cumming, Alpharetta & North Atlanta. Zoom, Teams, and Google Meet certified installations.',
}

export default function ConferenceRoomPage() {
  const projects = (projectsJson as Project[]).filter(p => p.service === 'conference-room-av')
  return (
    <ServicePage
      projects={projects}
      eyebrow="Commercial AV — Cumming, GA & North Atlanta"
      headline="Conference Room AV"
      subheadline="Video conferencing that actually works. We design and install conference rooms where every voice is heard, every face is visible, and every meeting starts on time."
      intro="A bad conference room is a productivity tax. Fuzzy video, echo-filled audio, and a Zoom that won't connect costs your team real time — and makes a bad impression on everyone dialing in. We build conference rooms that work the first time, every time — with reliable cameras, proper microphone coverage, display positioning that every seat can see, and one-touch meeting start."
      features={[
        { icon: 'video', title: 'PTZ & Wide-Angle Cameras', desc: "Camera coverage that shows the whole room or tracks the speaker automatically — everyone on the call sees who's talking." },
        { icon: 'mic', title: 'Ceiling & Table Microphones', desc: 'Beamforming microphones that pick up every voice in the room without echo or noise — even at the end of a large table.' },
        { icon: 'monitor', title: 'Displays & Video Walls', desc: 'Commercial displays sized and positioned so every seat has a clear view — from a single 75" to a dual-screen wall.' },
        { icon: 'gamepad2', title: 'One-Touch Control', desc: 'Press one button to start a Zoom, Teams, or Google Meet. No IT required, no cables to hunt for.' },
        { icon: 'wifi', title: 'Wireless Presentation', desc: 'Anyone in the room can share their screen wirelessly — no cables, no adapters, no waiting.' },
        { icon: 'plug', title: 'HDMI & USB-C Connectivity', desc: 'Tabletop connectivity panels for wired connections, cleanly integrated into the conference table.' },
      ]}
      process={[
        { num: '1', title: 'Room Assessment', desc: "We measure the room, assess acoustics and ambient noise, check the IT infrastructure, and understand how the room is used — formal presentations, small team calls, or hybrid meetings." },
        { num: '2', title: 'System Design & Proposal', desc: 'We design a system matched to your room size, meeting format, and budget — and show you exactly what you\'re getting before you spend a dollar.' },
        { num: '3', title: 'Installation', desc: 'Displays mounted, cameras installed, microphones placed, AV rack or credenza built, cabling dressed and labeled.' },
        { num: '4', title: 'Platform Integration & Training', desc: 'We configure your video conferencing platform, test calls from inside and outside the room, and train your team on daily use.' },
      ]}
      faqs={[
        { q: 'Which video conferencing platform do you support?', a: 'All of them — Zoom Rooms, Microsoft Teams Rooms, Google Meet Hardware, and standard USB peripheral setups that work with any platform.' },
        { q: 'Can you integrate with our existing IT infrastructure?', a: 'Yes. We coordinate with your IT team on network configuration, VLAN setup, and device management. We can also handle it all if you prefer a turnkey approach.' },
        { q: 'What\'s the turnaround time?', a: 'Standard conference room installs are typically completed in 1–2 days. We can often schedule within a week.' },
        { q: 'Do you offer maintenance and support after installation?', a: 'Yes — we offer support contracts and on-call service. Most issues can be resolved remotely; we\'re on-site fast when needed.' },
      ]}
      ctaHeadline="Build a conference room that works."
      ctaSub="Free room assessment and system design. Serving businesses in Cumming, Alpharetta, Johns Creek & North Atlanta."
    />
  )
}
