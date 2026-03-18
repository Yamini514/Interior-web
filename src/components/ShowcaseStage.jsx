export function ShowcaseStage({ project }) {
  return (
    <div className={`showcase-stage showcase-stage--${project.slug}`}>
      <div className="showcase-orb" />
      <div className="showcase-gridline" />
      <div className="showcase-browser">
        <div className="browser-topbar">
          <span />
          <span />
          <span />
        </div>
        <div className="browser-scene">
          <div className="browser-panel browser-panel-back" />
          <div className="browser-panel browser-panel-mid" />
          <div className="browser-panel browser-panel-front" />
          <div className="browser-pill browser-pill-one" />
          <div className="browser-pill browser-pill-two" />
          <div className="browser-floating browser-floating-top">3D walkthrough</div>
          <div className="browser-floating browser-floating-bottom">Material board</div>
        </div>
      </div>

      <div className="showcase-stack">
        <article className="stack-card stack-card-main">
          <span>Featured room</span>
          <strong>{project.title}</strong>
        </article>
        <article className="stack-card stack-card-side">
          <span>Animation</span>
          <strong>Motion-led reveal</strong>
        </article>
        <article className="stack-card stack-card-bottom">
          <span>SEO content</span>
          <strong>Search-friendly layout</strong>
        </article>
      </div>
    </div>
  )
}
