import { useEffect, useRef, useState } from 'react'
import { Seo } from '../components/Seo'
import { SuccessToast } from '../components/contact/SuccessToast'
import { WhatsAppButton } from '../components/home/WhatsAppButton'
import { contactHero, contactInfo, mapEmbedUrl } from '../data/contactPageContent'
import { studioProfile } from '../data/siteContent'
import { ContactHeroSection } from '../sections/contact/ContactHeroSection'
import { ContactMainSection } from '../sections/contact/ContactMainSection'
import { MapSection } from '../sections/contact/MapSection'

export function ContactPage() {
  const formRef = useRef(null)
  const [toastMessage, setToastMessage] = useState('')

  useEffect(() => {
    if (!toastMessage) {
      return undefined
    }

    const timeout = window.setTimeout(() => setToastMessage(''), 3200)
    return () => window.clearTimeout(timeout)
  }, [toastMessage])

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="contact-page pb-8" style={{ fontFamily: 'var(--font-body)' }}>
      <Seo
        title="Contact Atelier Haven Interiors | Premium Interior Design Consultation"
        description="Contact Atelier Haven Interiors to discuss your residential, commercial, kitchen, bedroom, office, or 3D visualization project."
        keywords={[
          'interior design contact page',
          'book interior consultation',
          'interior design inquiry form',
          'premium interior design contact',
        ]}
        pathname="/contact"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: studioProfile.name,
          description: 'Interior design studio for premium residential and commercial spaces.',
          url: 'https://atelierhaven.design/contact',
          telephone: studioProfile.phone,
          email: studioProfile.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Plot No. 28, Road No. 45, Jubilee Hills',
            addressLocality: 'Hyderabad',
            addressRegion: 'Telangana',
            postalCode: '500033',
            addressCountry: 'IN',
          },
        }}
      />

      <ContactHeroSection hero={contactHero} onScrollDown={scrollToForm} />
      <ContactMainSection
        innerRef={formRef}
        info={contactInfo}
        onSuccess={setToastMessage}
        phone={studioProfile.phone}
      />
      <MapSection embedUrl={mapEmbedUrl} />
      <WhatsAppButton phone={studioProfile.phone} />
      <SuccessToast message={toastMessage} />
    </div>
  )
}
