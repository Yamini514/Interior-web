import { motion as Motion } from 'framer-motion'
import { AboutIconBadge } from './AboutIcons'

export function FeatureCard({ feature }) {
  return (
    <Motion.article
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 240, damping: 22 }}
      className="relative h-full overflow-hidden rounded-[28px] border border-white/12 bg-white/8 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.22)] backdrop-blur-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-cyan-300/8" />
      <div className="relative">
        <AboutIconBadge icon={feature.icon} />
        <h3 className="mt-6 text-2xl text-white" style={{ fontFamily: 'var(--font-display)' }}>
          {feature.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-stone-300">{feature.description}</p>
      </div>
    </Motion.article>
  )
}
