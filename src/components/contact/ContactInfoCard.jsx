import { motion as Motion } from 'framer-motion'
import { ContactIconBadge } from './ContactIcons'

export function ContactInfoCard({ item }) {
  const Wrapper = item.href ? 'a' : 'article'

  return (
    <Motion.div whileHover={{ y: -6, scale: 1.01 }} transition={{ type: 'spring', stiffness: 240, damping: 22 }}>
      <Wrapper
        {...(item.href ? { href: item.href, target: item.href.startsWith('http') ? '_blank' : undefined, rel: item.href.startsWith('http') ? 'noreferrer' : undefined } : {})}
        className="relative block overflow-hidden rounded-[28px] border border-white/12 bg-white/8 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.2)] backdrop-blur-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-cyan-300/8" />
        <div className="relative">
          <ContactIconBadge icon={item.icon} />
          <p className="mt-5 text-xs uppercase tracking-[0.28em] text-amber-200/75">{item.title}</p>
          <h3 className="mt-3 text-xl text-white" style={{ fontFamily: 'var(--font-display)' }}>
            {item.value}
          </h3>
          <p className="mt-3 text-sm leading-7 text-stone-300">{item.description}</p>
        </div>
      </Wrapper>
    </Motion.div>
  )
}
