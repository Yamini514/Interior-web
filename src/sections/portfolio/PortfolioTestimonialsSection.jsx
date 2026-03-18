import { TestimonialCard } from '../../components/services/TestimonialCard'
import { SectionIntro } from '../../components/services/SectionIntro'

export function PortfolioTestimonialsSection({ testimonials }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="Testimonials"
        title="Client feedback that speaks to design quality and delivery confidence."
        text="Strong portfolio pages should also show how the process felt, not only how the final images look."
        align="center"
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </section>
  )
}
