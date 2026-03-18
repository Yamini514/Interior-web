import { SectionIntro } from '../../components/services/SectionIntro'
import { TestimonialCard } from '../../components/services/TestimonialCard'

export function TestimonialsSection({ testimonials }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="Testimonials"
        title="Clients remember the process as much as the finished room."
        text="The strongest proof for a service page is still a clear, specific client voice."
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
