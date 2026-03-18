import { TestimonialCard } from '../../components/services/TestimonialCard'
import { SectionIntro } from '../../components/services/SectionIntro'

export function HomeTestimonialsSection({ testimonials }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="Testimonials"
        title="Clients remember the confidence of the process as much as the final interior."
        text="The homepage closes the trust gap by pairing visual polish with real client voice."
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
