import { TestimonialCard } from '../../components/services/TestimonialCard'
import { SectionIntro } from '../../components/services/SectionIntro'

export function AboutTestimonialsSection({ testimonials }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="Testimonials"
        title="Clients come to us for design, but stay confident because of the process."
        text="Clear communication and thoughtful problem-solving matter just as much as the finished look."
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
