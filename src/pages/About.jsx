import { Seo } from '../components/Seo'
import {
  aboutHero,
  aboutStats,
  aboutTestimonials,
  achievements,
  missionVision,
  storyContent,
  teamMembers,
  whyChooseUs,
} from '../data/aboutPageContent'
import { AboutCtaSection } from '../sections/about/AboutCtaSection'
import { AboutHero } from '../sections/about/AboutHero'
import { AboutStatsSection } from '../sections/about/AboutStatsSection'
import { AboutTestimonialsSection } from '../sections/about/AboutTestimonialsSection'
import { AchievementsSection } from '../sections/about/AchievementsSection'
import { MissionVisionSection } from '../sections/about/MissionVisionSection'
import { StorySection } from '../sections/about/StorySection'
import { TeamSection } from '../sections/about/TeamSection'
import { WhyChooseUsSection } from '../sections/about/WhyChooseUsSection'

export function AboutPage() {
  return (
    <div className="about-page pb-8" style={{ fontFamily: 'var(--font-body)' }}>
      <Seo
        title="About Us | Interior Design Studio Story, Team, and Vision"
        description="Learn about our interior design studio, our design philosophy, team, achievements, and the process behind our spaces."
        keywords={[
          'about interior design studio',
          'interior design team',
          'interior studio mission and vision',
          'why choose interior designers',
        ]}
        pathname="/about"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About Atelier Haven',
          description: 'Interior design studio story, team, and vision.',
          url: 'https://atelierhaven.design/about',
        }}
      />

      <AboutHero hero={aboutHero} />
      <StorySection story={storyContent} />
      <MissionVisionSection items={missionVision} />
      <WhyChooseUsSection features={whyChooseUs} />
      <TeamSection team={teamMembers} />
      <AboutStatsSection stats={aboutStats} />
      <AboutTestimonialsSection testimonials={aboutTestimonials} />
      <AchievementsSection achievements={achievements} />
      <AboutCtaSection />
    </div>
  )
}
