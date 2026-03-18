import { motion as Motion } from 'framer-motion'

export function TestimonialCard({ testimonial }) {
  return (
    <Motion.article
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 240, damping: 20 }}
      className="relative h-full overflow-hidden rounded-[28px] border border-white/12 bg-white/8 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.24)] backdrop-blur-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-cyan-300/8" />
      <div className="relative flex h-full flex-col">
        <span className="inline-flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-black/15 text-white">
          <svg aria-hidden="true" className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M9.5 8.5H6.8A2.8 2.8 0 0 0 4 11.3v2.9A2.8 2.8 0 0 0 6.8 17h2.7V8.5ZM20 8.5h-2.7a2.8 2.8 0 0 0-2.8 2.8v2.9a2.8 2.8 0 0 0 2.8 2.8H20V8.5Z" />
          </svg>
        </span>

        <div className="mt-5 flex gap-1 text-amber-300">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <span key={`${testimonial.name}-${index}`}>★</span>
          ))}
        </div>

        <p className="mt-4 flex-1 text-sm leading-7 text-stone-200">“{testimonial.text}”</p>
        <p className="mt-6 text-base font-semibold text-white">{testimonial.name}</p>
      </div>
    </Motion.article>
  )
}
