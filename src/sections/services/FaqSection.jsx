import { SectionIntro } from '../../components/services/SectionIntro'
import { FaqItem } from '../../components/services/FaqItem'

export function FaqSection({ items, openIndex, onToggle }) {
  return (
    <section className="mx-auto max-w-4xl px-4 pt-20 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="FAQ"
        title="Answers to the questions that usually come up before the first call."
        text="A clean accordion keeps the page scannable while still giving enough detail to move the conversation forward."
        align="center"
      />

      <div className="mt-10 space-y-4">
        {items.map((item, index) => (
          <FaqItem
            key={item.question}
            item={item}
            isOpen={openIndex === index}
            onToggle={() => onToggle(index)}
          />
        ))}
      </div>
    </section>
  )
}
