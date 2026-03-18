import { startTransition, useRef, useState } from 'react'
import { Seo } from '../components/Seo'
import {
  faqs,
  portfolioShots,
  pricingPlans,
  processSteps,
  servicesData,
  servicesHero,
  testimonials,
} from '../data/servicesPageContent'
import { FinalCtaSection } from '../sections/services/FinalCtaSection'
import { FaqSection } from '../sections/services/FaqSection'
import { PortfolioSection } from '../sections/services/PortfolioSection'
import { PricingSection } from '../sections/services/PricingSection'
import { ProcessSection } from '../sections/services/ProcessSection'
import { ServiceDetailsSection } from '../sections/services/ServiceDetailsSection'
import { ServicesGridSection } from '../sections/services/ServicesGridSection'
import { ServicesHero } from '../sections/services/ServicesHero'
import { TestimonialsSection } from '../sections/services/TestimonialsSection'

export function ServicesPage() {
  const detailsRef = useRef(null)
  const [activeServiceId, setActiveServiceId] = useState(servicesData[0].id)
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  const handleServiceSelect = (serviceId) => {
    startTransition(() => {
      setActiveServiceId(serviceId)
    })

    requestAnimationFrame(() => {
      detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  const handleServiceToggle = (serviceId) => {
    setActiveServiceId((current) => (current === serviceId ? '' : serviceId))
  }

  return (
    <div className="services-page pb-8" style={{ fontFamily: 'var(--font-body)' }}>
      <Seo
        title="Interior Design Services | Residential, Commercial, 3D Visualization"
        description="Explore premium interior design services for homes, offices, kitchens, bedrooms, commercial spaces, and 3D visualization."
        keywords={[
          'interior design services',
          'residential interior design',
          'commercial interior design',
          'modular kitchen design',
          '3d visualization services',
        ]}
        pathname="/services"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Interior design services',
          provider: {
            '@type': 'Organization',
            name: 'Atelier Haven',
          },
          areaServed: 'India',
          url: 'https://atelierhaven.design/services',
        }}
      />

      <ServicesHero hero={servicesHero} />
      <ServicesGridSection services={servicesData} onSelect={handleServiceSelect} />
      <ServiceDetailsSection
        innerRef={detailsRef}
        services={servicesData}
        activeServiceId={activeServiceId}
        onToggle={handleServiceToggle}
      />
      <ProcessSection steps={processSteps} />
      <PricingSection plans={pricingPlans} />
      <PortfolioSection items={portfolioShots} />
      <TestimonialsSection testimonials={testimonials} />
      <FaqSection
        items={faqs}
        openIndex={openFaqIndex}
        onToggle={(index) => setOpenFaqIndex((current) => (current === index ? -1 : index))}
      />
      <FinalCtaSection />
    </div>
  )
}
