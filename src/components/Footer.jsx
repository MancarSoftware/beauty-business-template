function Footer({ business }) {
  const quickLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Programas', href: '#programas' },
    { label: 'Planes', href: '#planes' },
    { label: 'Entrenadores', href: '#entrenadores' },
    { label: 'Horarios', href: '#ubicacion' },
    { label: 'FAQ', href: '#faq' },
  ]

  const socialLinks = Object.entries(business.social ?? {})
    .filter(([, href]) => href && href !== '#')
    .map(([label, href]) => ({
      label: label.charAt(0).toUpperCase() + label.slice(1),
      href,
    }))

  const developer = business.developer ?? {
    name: 'Mancar Software',
    text: 'Pagina creada por',
    url: 'https://www.facebook.com/share/1BNpTPm6Wz/',
  }

  return (
    <footer className="bg-[#101010] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-md bg-[var(--brand-accent)] font-black text-white">
                {business.logoInitials}
              </span>
              <div>
                <h2 className="font-display text-3xl font-black uppercase">
                  {business.shortName}
                </h2>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-accent)]">
                  Gym
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-zinc-300">
              {business.slogan}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-black uppercase text-[var(--brand-accent)]">
                Enlaces rapidos
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

            <div>
              <h3 className="text-sm font-black uppercase text-[var(--brand-accent)]">
                Programas
              </h3>

              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                {business.footerServices.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase text-[var(--brand-accent)]">
                Contacto
              </h3>

              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                <li>{business.phone}</li>
                <li>{business.email}</li>
                <li>{business.address}</li>
              </ul>

              {socialLinks.length ? (
                <div className="mt-5 flex gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/15 px-3 py-2 text-xs font-bold uppercase text-zinc-300 transition hover:border-[var(--brand-accent)] hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
          <div>
            <p>
              © {new Date().getFullYear()} {business.name}. Todos los derechos reservados.
            </p>

            <p className="mt-1">{business.footerNote ?? business.slogan}</p>
          </div>

          <p>
            {developer.text}{' '}
            <a
              href={developer.url}
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
