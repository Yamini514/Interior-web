import { motion as Motion } from 'framer-motion'
import { SectionIntro } from '../../components/services/SectionIntro'

export function MapSection({ embedUrl }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <SectionIntro
        eyebrow="Studio Location"
        title="Visit the studio or plan your consultation with exact location access."
        text="The map is embedded responsively so the page stays clean on mobile while still giving a direct location reference."
      />

      <Motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 overflow-hidden rounded-[34px] border border-white/12 bg-white/8 shadow-[0_28px_90px_rgba(15,23,42,0.22)] backdrop-blur-xl"
      >
        <div className="aspect-[16/9] w-full">
          <iframe
            title="Atelier Haven studio map"
            src={embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0"
            allowFullScreen
          />
        </div>
      </Motion.div>
    </section>
  )
}
