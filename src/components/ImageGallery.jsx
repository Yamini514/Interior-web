export function ImageGallery({ items, compact = false }) {
  return (
    <div className={`image-gallery ${compact ? 'image-gallery--compact' : ''}`}>
      {items.map((item) => (
        <article className="image-card" key={item.title}>
          <img className="image-card__media" src={item.image} alt={item.title} loading="lazy" />
          <div className="image-card__overlay">
            <span>{item.category}</span>
            <strong>{item.title}</strong>
            <a href={item.creditUrl} target="_blank" rel="noreferrer">
              Photo: {item.credit}
            </a>
          </div>
        </article>
      ))}
    </div>
  )
}
