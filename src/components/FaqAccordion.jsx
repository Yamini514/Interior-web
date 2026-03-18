import { useState } from 'react'

export function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <article className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.question}>
            <button
              className="faq-question"
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>{item.question}</span>
              <strong>{isOpen ? '-' : '+'}</strong>
            </button>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}
