import { useEffect } from 'react'

const BASE_URL = 'https://atelierhaven.design'

function setMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    const [, key, raw] = selector.match(/\[(.*?)="(.*?)"\]/)
    element.setAttribute(key, raw)
    document.head.appendChild(element)
  }

  element.setAttribute(attribute, value)
}

export function Seo({ title, description, keywords, pathname, schema }) {
  useEffect(() => {
    document.title = title

    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[name="keywords"]', 'content', keywords.join(', '))
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', `${BASE_URL}${pathname}`)
    setMeta('meta[property="twitter:title"]', 'content', title)
    setMeta('meta[property="twitter:description"]', 'content', description)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `${BASE_URL}${pathname}`)

    let schemaScript = document.head.querySelector('#seo-schema')
    if (!schemaScript) {
      schemaScript = document.createElement('script')
      schemaScript.id = 'seo-schema'
      schemaScript.type = 'application/ld+json'
      document.head.appendChild(schemaScript)
    }
    schemaScript.textContent = JSON.stringify(schema)
  }, [description, keywords, pathname, schema, title])

  return null
}
