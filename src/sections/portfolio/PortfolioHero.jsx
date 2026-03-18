import { AppLink } from '../../components/AppLink'
import { Reveal } from '../../components/services/Reveal'

export function PortfolioHero({ hero }) {
  return (
    <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden">
      <div className="relative min-h-[78vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(2,6,23,0.9) 0%, rgba(2,6,23,0.62) 48%, rgba(2,6,23,0.22) 100%), url(${hero.image})`,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.18),transparent_24%),linear-gradient(to_bottom,rgba(15,23,42,0.12),rgba(15,23,42,0.88))]" />

        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-end px-4 pb-12 pt-28 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-100 backdrop-blur-xl">
              Interior portfolio
            </span>
            <h1
              className="mt-6 text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-200 sm:text-xl">{hero.subtitle}</p>

            <AppLink
              to="#portfolio-projects"
              className="mt-8 inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              {hero.ctaLabel}
            </AppLink>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
