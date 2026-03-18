import { motion as Motion } from 'framer-motion'
import { ServiceTiltCard } from '../../components/home/ServiceTiltCard'
import { GradientButton } from '../../components/home/GradientButton'
import { SectionIntro } from '../../components/services/SectionIntro'

export function ServicesPreviewSection({ services }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="Services Preview"
        title="Interior services presented with depth, light, and stronger interaction."
        text="Each card uses glassmorphism, tilt interaction, and motion so the homepage feels alive without becoming noisy."
      />

      <Motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
      >
        {services.map((service) => (
          <Motion.div
            key={service.title}
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <ServiceTiltCard service={service} />
          </Motion.div>
        ))}
      </Motion.div>

      <div className="mt-8">
        <GradientButton to="/services">See All Services</GradientButton>
      </div>
    </section>
  )
}
