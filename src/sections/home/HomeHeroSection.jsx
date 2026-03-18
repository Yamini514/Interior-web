import { Suspense, lazy } from 'react'
import { motion as Motion } from 'framer-motion'
import { AppLink } from '../../components/AppLink'
import { GradientButton } from '../../components/home/GradientButton'
import { Reveal } from '../../components/services/Reveal'

const InteractiveHeroScene = lazy(() =>
  import('../../components/home/InteractiveHeroScene').then((module) => ({
    default: module.InteractiveHeroScene,
  })),
)

export function HomeHeroSection({ hero, onExplore }) {
  return (
    <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden">
      <div className="relative min-h-[92vh]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.18),transparent_24%),linear-gradient(180deg,#08111f_0%,#0f172a_100%)]" />

        <Suspense fallback={<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_42%)]" />}>
          <InteractiveHeroScene />
        </Suspense>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,15,31,0.78),rgba(8,15,31,0.38),rgba(8,15,31,0.72))]" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-4 pb-12 pt-28 sm:px-6 lg:px-8">
          <div className="grid w-full gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal className="max-w-3xl">
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-100 backdrop-blur-xl">
                3D interior studio
              </span>
              <h1
                className="mt-6 text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {hero.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-200 sm:text-xl">{hero.subtitle}</p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <GradientButton onClick={onExplore}>{hero.ctaLabel}</GradientButton>
                <AppLink
                  to="/services"
                  className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-white/15 bg-white/8 px-7 text-sm font-semibold text-white backdrop-blur-xl transition hover:-translate-y-0.5"
                >
                  View Services
                </AppLink>
              </div>
            </Reveal>

            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-4 sm:grid-cols-2"
            >
              <div className="rounded-[28px] border border-white/12 bg-white/10 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.22)] backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.28em] text-amber-200/75">Interactive hero</p>
                <p className="mt-3 text-lg leading-7 text-white">Mouse-reactive 3D scene with layered lighting and depth.</p>
              </div>
              <div className="rounded-[28px] border border-white/12 bg-white/10 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.22)] backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/75">Smooth motion</p>
                <p className="mt-3 text-lg leading-7 text-white">Scroll-linked reveals, tilt cards, and polished visual transitions.</p>
              </div>
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
