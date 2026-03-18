import { startTransition, useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ProjectModal } from '../components/portfolio/ProjectModal'
import { Seo } from '../components/Seo'
import {
  portfolioCategories,
  portfolioHero,
  portfolioProjects,
  portfolioStats,
  portfolioTestimonials,
} from '../data/portfolioPageContent'
import { FeaturedProjectsSection } from '../sections/portfolio/FeaturedProjectsSection'
import { PortfolioCtaSection } from '../sections/portfolio/PortfolioCtaSection'
import { PortfolioGridSection } from '../sections/portfolio/PortfolioGridSection'
import { PortfolioHero } from '../sections/portfolio/PortfolioHero'
import { PortfolioStatsSection } from '../sections/portfolio/PortfolioStatsSection'
import { PortfolioTestimonialsSection } from '../sections/portfolio/PortfolioTestimonialsSection'

export function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const projects = portfolioProjects

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects
    }

    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter, projects])

  const featuredProjects = useMemo(
    () => projects.filter((project) => project.featured).slice(0, 3),
    [projects],
  )

  return (
    <div className="portfolio-page pb-8" style={{ fontFamily: 'var(--font-body)' }}>
      <Seo
        title="Interior Design Portfolio | Residential, Commercial, Kitchens, Offices"
        description="Explore our interior design portfolio with featured residential, commercial, kitchen, bedroom, and office projects."
        keywords={[
          'interior design portfolio',
          'residential interior projects',
          'commercial interior portfolio',
          'kitchen design portfolio',
          'office design portfolio',
        ]}
        pathname="/portfolio"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Atelier Haven Portfolio',
          description: 'Interior design portfolio featuring residential, commercial, kitchen, bedroom, and office projects.',
          url: 'https://atelierhaven.design/portfolio',
        }}
      />

      <PortfolioHero hero={portfolioHero} />
      <PortfolioStatsSection stats={portfolioStats} />
      <FeaturedProjectsSection
        projects={featuredProjects}
        onSelect={(project) => startTransition(() => setSelectedProject(project))}
      />
      <PortfolioGridSection
        categories={portfolioCategories}
        activeCategory={activeFilter}
        onCategoryChange={(category) => startTransition(() => setActiveFilter(category))}
        projects={filteredProjects}
        onSelect={(project) => startTransition(() => setSelectedProject(project))}
      />
      <PortfolioTestimonialsSection testimonials={portfolioTestimonials} />
      <PortfolioCtaSection />

      <AnimatePresence>{selectedProject ? <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} /> : null}</AnimatePresence>
    </div>
  )
}
