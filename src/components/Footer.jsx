function Footer({ business }) {
  const quickLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Metodo', href: '#proceso' },
    { label: 'Programas', href: '#programas' },
    { label: 'Planes', href: '#planes' },
    { label: 'Ubicacion', href: '#ubicacion' },
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
    <footer className="border-t border-white/10 bg-[#050505] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center bg-[var(--brand-accent)] font-black text-[#050505]">
                {business.logoInitials}
              </span>
              <div>
                <h2 className="text-3xl font-black uppercase leading-none">
                  {business.shortName}
                </h2>
                <p className="mt-1 text-xs font-black uppercase text-white/45">
                  {business.type}
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md text-base leading-7 text-white/62">
              {business.footerNote ?? business.slogan}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs font-black uppercase text-[var(--brand-accent)]">
                Enlaces
              </h3>
              <ul className="mt-4 space-y-3 text-sm font-bold text-white/62">
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
              <h3 className="text-xs font-black uppercase text-[var(--brand-accent)]">
                Entrenamiento
              </h3>
              <ul className="mt-4 space-y-3 text-sm font-bold text-white/62">
                {business.footerServices.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase text-[var(--brand-accent)]">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm font-bold text-white/62">
              <li>{business.phone}</li>
              <li>{business.email}</li>
              <li>{business.address}</li>
            </ul>

            {socialLinks.length ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-white/15 px-4 py-2 text-xs font-black uppercase text-white/62 transition hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/42 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name}. Todos los derechos reservados.
          </p>

          <p>
            {developer.text}{' '}
            <a
              href={developer.url}
              target="_blank"
              rel="noreferrer"
              className="font-black text-[var(--brand-accent)] transition hover:text-white"
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
