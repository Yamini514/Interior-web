import { AppLink } from './AppLink'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p>Atelier Haven Interior Studio Website</p>
        <span>Premium interiors, 3D concept storytelling, and SEO-focused presentation.</span>
      </div>

      <nav className="footer-nav" aria-label="Footer">
        <AppLink to="/">Home</AppLink>
        <AppLink to="/services">Services</AppLink>
        <AppLink to="/portfolio">Portfolio</AppLink>
        <AppLink to="/about">About</AppLink>
        <AppLink to="/contact">Contact</AppLink>
      </nav>
    </footer>
  )
}
