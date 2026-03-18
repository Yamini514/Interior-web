import { useEffect, useState } from 'react'
import { AppLink } from './AppLink'

export function HomeHero({ scenes, stats }) {
  const [activeScene, setActiveScene] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveScene((current) => (current + 1) % scenes.length)
    }, 5200)

    return () => window.clearInterval(interval)
  }, [scenes.length])

  return (
    <section className="home-hero">
      <div className="home-hero__stage">
        {scenes.map((scene, index) => (
          <article
            key={scene.id}
            className={`hero-scene ${index === activeScene ? 'is-active' : ''}`}
            style={{ backgroundImage: `linear-gradient(90deg, rgba(9, 10, 13, 0.78), rgba(9, 10, 13, 0.22)), url(${scene.image})` }}
          >
            <div className="hero-scene__wash" />
            <div className="hero-scene__content">
              <div className="hero-scene__meta">
                <span>{scene.accent}</span>
              </div>
              <p className="eyebrow">{scene.eyebrow}</p>
              <h1>{scene.title}</h1>
              <p className="page-hero__text">{scene.text}</p>

              {/* <div className="hero-actions">
                <AppLink className="button button-primary" to="/contact">
                  Start your journey
                </AppLink>
                <AppLink className="button button-secondary" to="/portfolio">
                  See portfolio
                </AppLink>
              </div> */}
            </div>
          </article>
        ))}

        {/* <div className="home-hero__dock">
          <div className="hero-dots" role="tablist" aria-label="Hero scenes">
            {scenes.map((scene, index) => (
              <button
                key={scene.id}
                className={`hero-dot ${index === activeScene ? 'is-active' : ''}`}
                type="button"
                aria-selected={index === activeScene}
                onClick={() => setActiveScene(index)}
              >
                <span>{scene.accent}</span>
              </button>
            ))}
          </div>

          <div className="hero-proof">
            {stats.slice(0, 3).map((stat) => (
              <article className="hero-proof__card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
