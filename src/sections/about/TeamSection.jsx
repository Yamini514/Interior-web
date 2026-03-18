import { TeamMemberCard } from '../../components/about/TeamMemberCard'
import { SectionIntro } from '../../components/services/SectionIntro'

export function TeamSection({ team }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="Meet the Team"
        title="A studio team that combines creativity, technical thinking, and delivery discipline."
        text="Each project benefits from the collaboration between design direction, detailed planning, visualization, and project execution."
        align="center"
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {team.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  )
}
