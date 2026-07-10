import { useEffect } from 'react'

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    if (value) {
      element.setAttribute(key, value)
    }
  })
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('link')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    if (value) {
      element.setAttribute(key, value)
    }
  })
}

function Seo({ business }) {
  useEffect(() => {
    const seo = business.seo ?? {}
    const title = seo.title ?? `${business.name} | ${business.type}`
    const description = seo.description ?? business.description
    const image = seo.image ?? '/favicon.svg'
    const locale = seo.locale ?? 'es_EC'

    const socialLinks = Object.values(business.social ?? {}).filter(
      (url) => url && url !== '#',
    )

    document.title = title

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: description,
    })

    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow',
    })

    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'business.business',
    })

    upsertMeta('meta[property="og:locale"]', {
      property: 'og:locale',
      content: locale,
    })

    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: title,
    })

    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    })

    upsertMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: business.name,
    })

    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: image,
    })

    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    })

    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: title,
    })

    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    })

    upsertMeta('meta[name="theme-color"]', {
      name: 'theme-color',
      content: business.theme?.dark ?? '#101010',
    })

    if (seo.siteUrl) {
      upsertLink('link[rel="canonical"]', {
        rel: 'canonical',
        href: seo.siteUrl,
      })

      upsertMeta('meta[property="og:url"]', {
        property: 'og:url',
        content: seo.siteUrl,
      })
    }

    const schema = {
      '@context': 'https://schema.org',
      '@type': seo.businessType ?? 'ExerciseGym',
      name: business.name,
      description,
      telephone: business.phone,
      email: business.email,
      address: business.address,
      areaServed: seo.areaServed ?? 'Quito, Ecuador',
      priceRange: seo.priceRange ?? '$$',
      sameAs: socialLinks,
    }

    if (business.mapsUrl && business.mapsUrl !== '#') {
      schema.hasMap = business.mapsUrl
    }

    let structuredData = document.head.querySelector(
      'script[data-seo="local-business"]',
    )

    if (!structuredData) {
      structuredData = document.createElement('script')
      structuredData.type = 'application/ld+json'
      structuredData.setAttribute('data-seo', 'local-business')
      document.head.appendChild(structuredData)
    }

    structuredData.textContent = JSON.stringify(schema)
  }, [business])

  return null
}

export default Seo