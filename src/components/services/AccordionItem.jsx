import { AnimatePresence, motion as Motion } from 'framer-motion'
import { IconBadge } from './ServiceIcons'

export function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-white/12 bg-white/8 shadow-[0_24px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7"
      >
        <div className="flex items-center gap-4">
          <IconBadge icon={item.icon} className="size-11" iconClassName="size-4" />
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-amber-200/75">Starting at {item.price}</p>
            <h3 className="mt-2 text-xl text-white sm:text-2xl" style={{ fontFamily: 'var(--font-display)' }}>
              {item.title}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3 text-right">
          <div className="hidden sm:block">
            <p className="text-sm text-stone-200">{item.timeline}</p>
            <p className="text-xs uppercase tracking-[0.28em] text-stone-400">Timeline</p>
          </div>
          <Motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/12 bg-black/20 text-white"
          >
            <svg
              aria-hidden="true"
              className="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Motion.span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <Motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid gap-6 border-t border-white/10 px-5 py-6 sm:px-7 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <p className="text-sm leading-7 text-stone-300">{item.detail}</p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {item.features.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-2xl border border-white/10 bg-black/15 px-4 py-3 text-sm leading-6 text-stone-200"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[24px] border border-white/10 bg-black/20">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                  <div className="absolute inset-x-5 bottom-5 flex flex-wrap gap-3">
                    <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-xs uppercase tracking-[0.22em] text-white">
                      {item.timeline}
                    </span>
                    <span className="rounded-full border border-amber-200/30 bg-amber-100/10 px-3 py-1.5 text-xs uppercase tracking-[0.22em] text-amber-100">
                      From {item.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
