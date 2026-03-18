import { motion as Motion } from 'framer-motion'

export function PortfolioCard({ project, onSelect }) {
  return (
    <Motion.button
      layout
      type="button"
      onClick={() => onSelect(project)}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 240, damping: 22 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/12 bg-white/8 text-left shadow-[0_24px_80px_rgba(15,23,42,0.22)] backdrop-blur-xl"
    >
      <div className="relative h-80 overflow-hidden">
        <img
          src={project.coverImage}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

        <div className="absolute inset-0 flex translate-y-4 items-end justify-between p-5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white">
            {project.category}
          </span>
          <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950">
            View Details
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs uppercase tracking-[0.28em] text-amber-200/75">{project.category}</p>
        <h3 className="mt-3 text-2xl text-white" style={{ fontFamily: 'var(--font-display)' }}>
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-7 text-stone-300">{project.summary}</p>
      </div>
    </Motion.button>
  )
}
