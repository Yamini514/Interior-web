function isModifiedEvent(event) {
  return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
}

export function navigateTo(pathname) {
  if (!pathname || pathname.startsWith('http') || pathname.startsWith('mailto:') || pathname.startsWith('tel:')) {
    window.location.href = pathname
    return
  }

  if (pathname === window.location.pathname) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  window.history.pushState({}, '', pathname)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

export function AppLink({ children, className, onClick, to, ...props }) {
  const isExternal =
    !to || to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:') || to.startsWith('#')

  const handleClick = (event) => {
    onClick?.(event)

    if (event.defaultPrevented) {
      return
    }

    if (isExternal || isModifiedEvent(event) || props.target === '_blank') {
      return
    }

    event.preventDefault()
    navigateTo(to)
  }

  return (
    <a className={className} href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}
