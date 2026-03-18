import { GradientButton } from '../../components/home/GradientButton'
import { Reveal } from '../../components/services/Reveal'

export function HomeCtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 lg:px-8">
      <Reveal className="relative overflow-hidden rounded-[36px] border border-white/12 bg-gradient-to-r from-cyan-300/14 via-white/10 to-amber-200/16 px-6 py-12 shadow-[0_30px_100px_rgba(15,23,42,0.26)] backdrop-blur-xl sm:px-10">
        <div className="absolute -left-8 top-0 h-36 w-36 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute -right-8 bottom-0 h-36 w-36 rounded-full bg-amber-300/20 blur-3xl" />

        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-100/80">Ready when you are</p>
            <h2
              className="mt-4 text-3xl leading-tight text-white sm:text-4xl lg:text-5xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Bring your next interior vision into focus.
            </h2>
          </div>

          <GradientButton to="/contact">Start Your Project</GradientButton>
        </div>
      </Reveal>
    </section>
  )
}
