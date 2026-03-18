import { motion as Motion } from 'framer-motion'
import { AppLink } from '../../components/AppLink'
import { ContactForm } from '../../components/contact/ContactForm'
import { ContactInfoCard } from '../../components/contact/ContactInfoCard'
import { GradientButton } from '../../components/home/GradientButton'

export function ContactMainSection({ innerRef, info, onSuccess, phone }) {
  return (
    <section ref={innerRef} className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="grid gap-6 md:grid-cols-2">
        <ContactForm onSuccess={onSuccess} />

        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-amber-200/75">Contact Details</p>
          <h2 className="mt-3 text-3xl text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Reach out directly or share your project brief through the form.
          </h2>
          {/* <p className="mt-4 text-sm leading-7 text-stone-300">
            The layout keeps the form spacious and easy to complete while the studio details stay
            visible and accessible.
          </p> */}

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
            className="mt-6 space-y-4"
          >
            {info.map((item) => (
              <Motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <ContactInfoCard item={item} />
              </Motion.div>
            ))}
          </Motion.div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <a
              href={`tel:${phone.replace(/\s+/g, '')}`}
              className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-white/15 bg-white/8 px-6 text-sm font-semibold text-white backdrop-blur-xl transition hover:-translate-y-0.5"
            >
              Call Now
            </a>
            <GradientButton to={`https://wa.me/${phone.replace(/[^\d]/g, '')}`}>WhatsApp</GradientButton>
          </div>

          {/* <div className="mt-6 rounded-[28px] border border-white/12 bg-white/8 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.2)] backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.28em] text-amber-200/75">Quick Links</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <AppLink
                to="/portfolio"
                className="inline-flex min-h-[2.8rem] items-center justify-center rounded-full border border-white/12 bg-black/15 px-5 text-sm text-white"
              >
                View Portfolio
              </AppLink>
              <AppLink
                to="/services"
                className="inline-flex min-h-[2.8rem] items-center justify-center rounded-full border border-white/12 bg-black/15 px-5 text-sm text-white"
              >
                Explore Services
              </AppLink>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
