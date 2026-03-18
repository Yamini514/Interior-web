import { AnimatePresence, motion as Motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function AboutHero({ hero }) {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % hero.slides.length)
    }, 4500)

    return () => window.clearInterval(interval)
  }, [hero.slides.length])

  return (
    <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden">
      <div className="relative h-[60vh] min-h-[28rem]">
        <AnimatePresence mode="wait">
          <Motion.div
            key={hero.slides[activeSlide]}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${hero.slides[activeSlide]})` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.12),transparent_24%)]" />

        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center">
          <Motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-stone-100 backdrop-blur-xl"
          >
            Our studio
          </Motion.span>
          <Motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 text-5xl leading-[0.95] text-white sm:text-6xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {hero.title}
          </Motion.h1>
          <Motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="mt-5 max-w-2xl text-lg leading-8 text-stone-200 sm:text-xl"
          >
            {hero.subtitle}
          </Motion.p>

          <div className="mt-8 flex items-center gap-3">
            {hero.slides.map((slide, index) => (
              <button
                key={slide}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 rounded-full transition ${
                  activeSlide === index ? 'w-10 bg-white' : 'w-2.5 bg-white/45'
                }`}
                aria-label={`Show about hero slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setActiveSlide((current) => (current - 1 + hero.slides.length) % hero.slides.length)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-xl"
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => setActiveSlide((current) => (current + 1) % hero.slides.length)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-xl"
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
