function Footer({ business }) {
  const quickLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Promociones', href: '#promociones' },
    { label: 'Lookbook', href: '#galeria' },
    { label: 'Precios', href: '#precios' },
    { label: 'Preguntas frecuentes', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ]

  const socialLinks = Object.entries(business.social ?? {})
    .filter(([, href]) => href && href !== '#')
    .map(([label, href]) => ({
      label: label.charAt(0).toUpperCase() + label.slice(1),
      href,
    }))

  const developer = business.developer ?? {
    name: 'Mancar Software',
    text: 'Página creada por',
    url: 'https://www.facebook.com/share/1BNpTPm6Wz/',
  }

  const developerUrl =
    developer.url && developer.url !== '#'
      ? developer.url
      : 'https://www.facebook.com/share/1BNpTPm6Wz/'

  return (
    <footer className="bg-[#130f12] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/12 pb-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <h2 className="font-display text-5xl font-semibold md:text-7xl">
              {business.name}
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-300">
              {business.slogan}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase text-[var(--brand-accent)]">
                Servicios
              </h3>

              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                {business.footerServices.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase text-[var(--brand-accent)]">
                Navegación
              </h3>

              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="transition hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {socialLinks.length ? (
              <div>
                <h3 className="text-sm font-semibold uppercase text-[var(--brand-accent)]">
                  Redes
                </h3>

                <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                  {socialLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="transition hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
          <div>
            <p>
              © {new Date().getFullYear()} {business.name}. Todos los derechos
              reservados.
            </p>

            <p className="mt-1">{business.footerNote ?? business.slogan}</p>
          </div>

          <p>
            {developer.text}{' '}
            <a
              href={developerUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[var(--brand-accent)] transition hover:text-white"
            >
              {developer.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
