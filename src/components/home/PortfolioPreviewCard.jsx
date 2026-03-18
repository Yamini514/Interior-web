import { motion as Motion } from 'framer-motion'

export function PortfolioPreviewCard({ item }) {
  return (
    <Motion.article
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 240, damping: 22 }}
      className="group relative overflow-hidden rounded-[28px] border border-white/12 bg-white/8 shadow-[0_24px_80px_rgba(15,23,42,0.22)] backdrop-blur-xl"
    >
      <div className="relative h-80 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
        <div className="absolute inset-0 flex items-end justify-between p-5">
          <div>
            <p className="text-xs uppercase tracking-[0.26em] text-amber-200/75">{item.category}</p>
            <h3 className="mt-2 text-2xl text-white" style={{ fontFamily: 'var(--font-display)' }}>
              {item.title}
            </h3>
          </div>
          <span className="translate-y-4 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            View Project
          </span>
        </div>
      </div>
    </Motion.article>
  )
}
