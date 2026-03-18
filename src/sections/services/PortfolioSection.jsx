import { motion as Motion } from 'framer-motion'
import { SectionIntro } from '../../components/services/SectionIntro'

export function PortfolioSection({ items }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="Portfolio Showcase"
        title="A curated image grid that hints at materiality, mood, and execution quality."
        text="Hover interactions stay subtle: scale, light, and framing do the work instead of over-animating the interface."
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <Motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-[30px] border border-white/12 bg-white/8"
          >
            <div className="relative h-80 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
              <div className="absolute inset-x-5 bottom-5">
                <p className="text-lg text-white" style={{ fontFamily: 'var(--font-display)' }}>
                  {item.title}
                </p>
              </div>
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  )
}
