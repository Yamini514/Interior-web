import { motion as Motion } from 'framer-motion'
import { AppLink } from '../AppLink'

export function PricingCard({ plan }) {
  return (
    <Motion.article
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 240, damping: 20 }}
      className={`relative flex h-full flex-col overflow-hidden rounded-[30px] border p-7 shadow-[0_28px_90px_rgba(15,23,42,0.26)] backdrop-blur-xl ${
        plan.popular
          ? 'border-amber-200/35 bg-gradient-to-b from-amber-200/18 via-white/10 to-white/8'
          : 'border-white/12 bg-white/8'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-slate-900/20" />
      {plan.popular ? (
        <span className="relative mb-5 w-fit rounded-full border border-amber-200/35 bg-amber-100/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-100">
          Most Popular
        </span>
      ) : null}

      <div className="relative flex h-full flex-col">
        <p className="text-sm uppercase tracking-[0.26em] text-stone-300">{plan.name}</p>
        <div className="mt-4 flex items-end gap-2">
          <strong className="text-4xl text-white" style={{ fontFamily: 'var(--font-display)' }}>
            {plan.price}
          </strong>
          <span className="pb-1 text-sm text-stone-400">starting</span>
        </div>

        <p className="mt-4 text-sm leading-7 text-stone-300">{plan.description}</p>

        <div className="mt-6 space-y-3">
          {plan.features.map((feature) => (
            <div key={feature} className="flex items-start gap-3 text-sm leading-6 text-stone-200">
              <span className="mt-1 inline-flex size-5 items-center justify-center rounded-full bg-emerald-300/15 text-emerald-200">
                <svg
                  aria-hidden="true"
                  className="size-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m5 12 4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <AppLink
          to="/contact"
          className={`relative mt-8 inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition hover:-translate-y-0.5 ${
            plan.popular ? 'bg-white text-slate-950' : 'border border-white/15 bg-white/8 text-white'
          }`}
        >
          Get Started
        </AppLink>
      </div>
    </Motion.article>
  )
}
