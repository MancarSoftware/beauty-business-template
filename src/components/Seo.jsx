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

function upsertJsonLd(id, schema) {
  let structuredData = document.head.querySelector(`script[data-seo="${id}"]`)

  if (!structuredData) {
    structuredData = document.createElement('script')
    structuredData.type = 'application/ld+json'
    structuredData.setAttribute('data-seo', id)
    document.head.appendChild(structuredData)
  }

  structuredData.textContent = JSON.stringify(schema)
}

function removeJsonLd(id) {
  const structuredData = document.head.querySelector(`script[data-seo="${id}"]`)
  structuredData?.remove()
}

function Seo({ business, page, product }) {
  useEffect(() => {
    const seo = business.seo ?? {}
    const title = product
      ? `${product.name} | ${business.name}`
      : page?.title
        ? `${page.title} | ${business.name}`
        : seo.title ?? `${business.name} | ${business.type}`
    const description =
      product?.description ?? page?.description ?? seo.description ?? business.description
    const image =
      product?.image ?? page?.image ?? seo.image ?? business.hero?.image ?? '/favicon.svg'
    const locale = seo.locale ?? 'es_EC'
    const currentUrl = window.location.href
    const pageUrl =
      seo.siteUrl ??
      (window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1'
        ? ''
        : currentUrl)

    const socialLinks = Object.values(business.social ?? {}).filter(
      (url) => url && url !== '#',
    )

    document.title = title

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: description,
    })

    if (seo.keywords?.length) {
      upsertMeta('meta[name="keywords"]', {
        name: 'keywords',
        content: seo.keywords.join(', '),
      })
    }

    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow',
    })

    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: product ? 'product' : 'business.business',
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

    upsertMeta('meta[property="og:image:alt"]', {
      property: 'og:image:alt',
      content: seo.imageAlt ?? `${business.name} en ${seo.areaServed ?? 'Quito'}`,
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

    upsertMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: image,
    })

    upsertMeta('meta[name="theme-color"]', {
      name: 'theme-color',
      content: business.theme?.dark ?? '#101010',
    })

    if (pageUrl) {
      upsertLink('link[rel="canonical"]', {
        rel: 'canonical',
        href: pageUrl,
      })

      upsertMeta('meta[property="og:url"]', {
        property: 'og:url',
        content: pageUrl,
      })
    }

    const services = business.specialties ?? []
    const products = business.products ?? []

    const offerCatalog = [
      ...services.map((treatment) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: treatment.name,
          description: treatment.description,
          serviceType: treatment.name,
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: seo.currency ?? 'USD',
          description: treatment.cta,
        },
      })),
      ...products.map((item) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: item.name,
          description: item.description,
          category: item.category,
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: seo.currency ?? 'USD',
          price: String(item.price).replace(/[^0-9.]/g, ''),
          description: item.price,
        },
      })),
    ]

    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': seo.businessType ?? 'Bakery',
      name: business.name,
      alternateName: business.shortName,
      description,
      image,
      telephone: business.phone,
      email: business.email,
      address: business.address,
      areaServed: seo.areaServed ?? 'Quito, Ecuador',
      priceRange: seo.priceRange ?? '$$',
      sameAs: socialLinks,
      slogan: business.slogan,
      openingHoursSpecification: (business.scheduleBlocks ?? []).map((item) => ({
        '@type': 'OpeningHoursSpecification',
        name: item.day,
        description: item.time,
      })),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `Productos y especialidades de ${
          business.shortName ?? business.name
        }`,
        itemListElement: offerCatalog,
      },
    }

    if (business.mapsUrl && business.mapsUrl !== '#') {
      localBusinessSchema.hasMap = business.mapsUrl
    }

    if (seo.geo) {
      localBusinessSchema.geo = {
        '@type': 'GeoCoordinates',
        latitude: seo.geo.latitude,
        longitude: seo.geo.longitude,
      }
    }

    upsertJsonLd('local-business', localBusinessSchema)

    upsertJsonLd('website', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: business.name,
      url: pageUrl || window.location.origin,
      inLanguage: 'es-EC',
      description,
    })

    if (product) {
      upsertJsonLd('product', {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        image: product.image,
        description: product.description,
        category: product.categoryLabel,
        brand: {
          '@type': 'Brand',
          name: business.name,
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: seo.currency ?? 'USD',
          price: String(product.price).replace(/[^0-9.]/g, ''),
          availability: product.available
            ? 'https://schema.org/InStock'
            : 'https://schema.org/OutOfStock',
          url: currentUrl,
        },
      })
    } else {
      removeJsonLd('product')
    }

    if (business.faq?.items?.length) {
      upsertJsonLd('faq', {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: business.faq.items.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      })
    }
  }, [business, page, product])

  return null
}

export default Seo
