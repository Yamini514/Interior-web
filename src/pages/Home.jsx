import Lenis from 'lenis'
import { useEffect } from 'react'
import { Seo } from '../components/Seo'
import { WhatsAppButton } from '../components/home/WhatsAppButton'
import {
  beforeAfterContent,
  homeHeroContent,
  homeServices,
  homeStats,
  homeTestimonials,
  portfolioPreview,
} from '../data/homePageContent'
import { studioProfile } from '../data/siteContent'
import { BeforeAfterSection } from '../sections/home/BeforeAfterSection'
import { HomeCtaSection } from '../sections/home/HomeCtaSection'
import { HomeHeroSection } from '../sections/home/HomeHeroSection'
import { HomeStatsSection } from '../sections/home/HomeStatsSection'
import { HomeTestimonialsSection } from '../sections/home/HomeTestimonialsSection'
import { PortfolioPreviewSection } from '../sections/home/PortfolioPreviewSection'
import { ServicesPreviewSection } from '../sections/home/ServicesPreviewSection'

export function HomePage() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      return undefined
    }

    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.08,
      duration: 1.1,
    })

    let frameId = 0

    const raf = (time) => {
      lenis.raf(time)
      frameId = window.requestAnimationFrame(raf)
    }

    frameId = window.requestAnimationFrame(raf)

    return () => {
      window.cancelAnimationFrame(frameId)
      lenis.destroy()
    }
  }, [])

  const scrollToPortfolio = () => {
    document.getElementById('portfolio-preview')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="home-page pb-8" style={{ fontFamily: 'var(--font-body)' }}>
      <Seo
        title="Atelier Haven Interiors | 3D Interactive Interior Design Studio"
        description="Discover a modern interior design homepage with an interactive 3D hero, smooth scrolling, tilt cards, portfolio previews, and transformation storytelling."
        keywords={[
          'interactive interior design website',
          '3d interior design homepage',
          'modern interior studio website',
          'luxury interior design studio',
        ]}
        pathname="/"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: studioProfile.name,
          description: 'Interior design studio with 3D concepts, premium residential interiors, and execution-ready planning.',
          url: 'https://atelierhaven.design/',
          telephone: studioProfile.phone,
          email: studioProfile.email,
        }}
      />

      <HomeHeroSection hero={homeHeroContent} onExplore={scrollToPortfolio} />
      <ServicesPreviewSection services={homeServices} />
      <PortfolioPreviewSection items={portfolioPreview} />
      <BeforeAfterSection content={beforeAfterContent} />
      <HomeStatsSection stats={homeStats} />
      <HomeTestimonialsSection testimonials={homeTestimonials} />
      <HomeCtaSection />
      <WhatsAppButton phone={studioProfile.phone} />
    </div>
  )
}
