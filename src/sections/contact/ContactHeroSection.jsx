import { motion as Motion } from 'framer-motion'
import { GradientButton } from '../../components/home/GradientButton'
import { Reveal } from '../../components/services/Reveal'

export function ContactHeroSection({ hero, onScrollDown }) {
  return (
    <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden">
      <div className="relative h-[60vh] min-h-[28rem]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${hero.image})`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.1),transparent_24%)]" />

        <div className="relative mx-auto flex h-full max-w-6xl items-center px-4">
          <Reveal className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-100 backdrop-blur-xl">
              Premium contact page
            </span>
            <h1
              className="mt-6 text-4xl leading-[0.95] text-white sm:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-200 sm:text-xl">{hero.subtitle}</p>

            <div className="mt-8">
              <GradientButton onClick={onScrollDown}>{'Get in Touch'}</GradientButton>
            </div>
          </Reveal>
        </div>

        <Motion.button
          type="button"
          onClick={onScrollDown}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.26em] text-stone-100/80"
        >
          <span>Scroll</span>
          <span className="inline-flex h-11 w-7 items-start justify-center rounded-full border border-white/20 bg-white/8 p-1 backdrop-blur-xl">
            <span className="h-2.5 w-1.5 animate-bounce rounded-full bg-white" />
          </span>
        </Motion.button>
      </div>
    </section>
  )
}
