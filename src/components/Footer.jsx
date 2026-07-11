function Footer({ business }) {
  const quickLinks = [
    { label: 'Tratamientos', href: '#tratamientos' },
    { label: 'Concierge', href: '#reserva' },
    { label: 'Experiencias', href: '#paquetes' },
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
    <footer className="bg-[#fff8f1] px-4 pb-8 text-[#09231f] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[3.5rem] bg-[#09231f] p-6 text-white shadow-2xl shadow-[#09231f]/18 sm:p-8">
        <div className="pb-10">
          <p className="w-fit rounded-full bg-white/10 px-5 py-2 text-xs font-black uppercase text-[var(--brand-accent)]">
            {business.type}
          </p>
          <h2 className="mt-5 max-w-5xl text-5xl font-black uppercase leading-[0.95] md:text-7xl">
            {business.slogan}
          </h2>
        </div>

        <div className="grid gap-10 rounded-[2.5rem] bg-white/8 p-6 lg:grid-cols-[1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--brand-accent)] font-black text-white">
                {business.logoInitials}
              </span>
              <h3 className="text-3xl font-black uppercase leading-none">
                {business.shortName}
              </h3>
            </div>
            <p className="mt-5 max-w-md text-base leading-7 text-white/62">
              {business.footerNote}
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
                    <a
                      href={link.href}
                      className="text-white/62 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-black uppercase text-[var(--brand-accent)]">
                Servicios
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
                    className="rounded-full bg-white/8 px-4 py-2 text-xs font-black uppercase text-white/62 transition hover:bg-white hover:text-[#09231f]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 text-sm text-white/42 md:flex-row md:items-center md:justify-between">
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
