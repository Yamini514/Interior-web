import { motion as Motion } from 'framer-motion'

export function TeamMemberCard({ member }) {
  return (
    <Motion.article
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 240, damping: 22 }}
      className="overflow-hidden rounded-[30px] border border-white/12 bg-white/8 shadow-[0_24px_80px_rgba(15,23,42,0.22)] backdrop-blur-xl"
    >
      <div className="relative h-80 overflow-hidden">
        <img src={member.image} alt={member.name} loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl text-white" style={{ fontFamily: 'var(--font-display)' }}>
          {member.name}
        </h3>
        <p className="mt-2 text-xs uppercase tracking-[0.28em] text-amber-200/75">{member.role}</p>
        <p className="mt-4 text-sm leading-7 text-stone-300">{member.description}</p>
      </div>
    </Motion.article>
  )
}
