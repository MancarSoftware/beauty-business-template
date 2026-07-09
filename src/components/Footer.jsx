function Footer({ business }) {
  const quickLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Lookbook', href: '#galeria' },
    { label: 'Precios', href: '#precios' },
    { label: 'Contacto', href: '#contacto' },
  ]

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
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name}. Todos los derechos
            reservados.
          </p>
          <p>{business.footerNote ?? business.slogan}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
