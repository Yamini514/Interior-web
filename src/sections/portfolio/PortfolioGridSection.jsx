import { AnimatePresence, LayoutGroup, motion as Motion } from 'framer-motion'
import { PortfolioCard } from '../../components/portfolio/PortfolioCard'
import { PortfolioFilterBar } from '../../components/portfolio/PortfolioFilterBar'
import { SectionIntro } from '../../components/services/SectionIntro'

export function PortfolioGridSection({
  categories,
  activeCategory,
  onCategoryChange,
  projects,
  onSelect,
}) {
  return (
    <section id="portfolio-projects" className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="Project Library"
        title="Browse the portfolio by project type and open any card for full project details."
        text="Filtering keeps the page fast to scan, while the modal expands each project into a proper case-study preview."
      />

      <div className="mt-8">
        <LayoutGroup>
          <PortfolioFilterBar
            categories={categories}
            activeCategory={activeCategory}
            onChange={onCategoryChange}
          />
        </LayoutGroup>
      </div>

      <Motion.div layout className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {projects.map((project) => (
            <PortfolioCard key={project.id} project={project} onSelect={onSelect} />
          ))}
        </AnimatePresence>
      </Motion.div>
    </section>
  )
}
