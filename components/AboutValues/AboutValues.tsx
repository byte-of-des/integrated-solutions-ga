import { Target, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react'
import styles from './AboutValues.module.css'

const VALUES = [
  { Icon: Target,        title: 'Precision First',  desc: "We measure twice, mount once. Every install is leveled, aligned, and tested before we consider the job done." },
  { Icon: MessageSquare, title: 'Honest Estimates', desc: "We give you an accurate quote upfront. No hidden fees, no upsells on equipment you don't need." },
  { Icon: Sparkles,      title: 'Clean Work',       desc: "We protect your floors and walls, route every cable cleanly, and leave the space cleaner than we found it." },
  { Icon: CheckCircle2,  title: 'Done Right',       desc: "We don't leave until everything works — every device connected, every remote functional, every setting configured." },
]

export default function AboutValues() {
  return (
    <div className={styles.grid}>
      {VALUES.map(v => (
        <div key={v.title} className={styles.card}>
          <span className={styles.icon}><v.Icon size={22} strokeWidth={1.75} /></span>
          <h3 className={styles.title}>{v.title}</h3>
          <p className={styles.desc}>{v.desc}</p>
        </div>
      ))}
    </div>
  )
}
