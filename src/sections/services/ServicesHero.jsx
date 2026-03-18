import { motion as Motion } from 'framer-motion'
import { AppLink } from '../../components/AppLink'
import { Reveal } from '../../components/services/Reveal'

export function ServicesHero({ hero }) {
  return (
    <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden">
      <div className="relative min-h-[82vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(2,6,23,0.92) 0%, rgba(2,6,23,0.68) 45%, rgba(2,6,23,0.3) 100%), url(${hero.image})`,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.22),transparent_28%),linear-gradient(to_bottom,rgba(15,23,42,0.08),rgba(15,23,42,0.88))]" />
        <div className="absolute left-1/2 top-0 h-60 w-60 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[120px]" />

        <div className="relative mx-auto flex min-h-[82vh] max-w-7xl items-end px-4 pb-10 pt-28 sm:px-6 lg:px-8">
          <div className="grid w-full gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <Reveal className="max-w-3xl">
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-stone-100 backdrop-blur-xl">
                Premium interior services
              </span>
              <h1
                className="mt-6 max-w-4xl text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {hero.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-200 sm:text-xl">{hero.subtitle}</p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <AppLink
                  to="/contact"
                  className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
                >
                  {hero.ctaLabel}
                </AppLink>
                <AppLink
                  to="/portfolio"
                  className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-white/15 bg-white/8 px-7 text-sm font-semibold text-white backdrop-blur-xl transition hover:-translate-y-0.5"
                >
                  View Portfolio
                </AppLink>
              </div>
            </Reveal>

            <Motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
            >
              {hero.stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[26px] border border-white/15 bg-white/10 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.24)] backdrop-blur-xl"
                >
                  <p className="text-3xl text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-stone-200">{item.label}</p>
                </div>
              ))}
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
