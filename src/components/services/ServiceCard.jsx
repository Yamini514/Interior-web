import { motion as Motion } from 'framer-motion'
import { IconBadge } from './ServiceIcons'

export function ServiceCard({ service, onSelect }) {
  return (
    <Motion.button
      type="button"
      onClick={() => onSelect(service.id)}
      whileHover={{ y: -10, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 240, damping: 20 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/12 bg-white/8 p-6 text-left shadow-[0_24px_80px_rgba(15,23,42,0.28)] backdrop-blur-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-amber-300/10 opacity-70" />
      <div className="absolute -right-10 top-0 size-28 rounded-full bg-amber-300/10 blur-3xl transition duration-500 group-hover:bg-amber-200/20" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <IconBadge icon={service.icon} />
          <span className="rounded-full border border-white/12 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-stone-200/80">
            Explore
          </span>
        </div>

        <h3 className="mt-6 text-2xl leading-tight text-white" style={{ fontFamily: 'var(--font-display)' }}>
          {service.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-stone-300">{service.description}</p>

        <div className="mt-6 flex items-center justify-between text-sm text-stone-200">
          <span>Starting at {service.price}</span>
          <span className="transition duration-300 group-hover:translate-x-1">View details</span>
        </div>
      </div>
    </Motion.button>
  )
}
