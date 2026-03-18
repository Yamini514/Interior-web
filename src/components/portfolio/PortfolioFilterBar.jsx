import { motion as Motion } from 'framer-motion'

export function PortfolioFilterBar({ categories, activeCategory, onChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const isActive = category === activeCategory

        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`relative overflow-hidden rounded-full border px-5 py-3 text-sm font-medium transition ${
              isActive
                ? 'border-amber-200/35 bg-amber-100/12 text-white'
                : 'border-white/12 bg-white/6 text-stone-300 hover:border-white/20 hover:text-white'
            }`}
          >
            {isActive ? (
              <Motion.span
                layoutId="portfolio-filter-pill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-200/22 to-cyan-300/16"
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              />
            ) : null}
            <span className="relative">{category}</span>
          </button>
        )
      })}
    </div>
  )
}
