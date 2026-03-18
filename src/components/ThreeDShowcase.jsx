export function ThreeDShowcase({ model }) {
  return (
    <div className="model-card">
      <div className="model-frame">
        <iframe
          title={model.title}
          src={model.embedUrl}
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
          loading="lazy"
        />
      </div>

      <div className="model-card__meta">
        <span>Interactive 3D view</span>
        <strong>{model.title}</strong>
        <a href={model.creditUrl} target="_blank" rel="noreferrer">
          Model: {model.credit} ({model.license})
        </a>
      </div>
    </div>
  )
}
