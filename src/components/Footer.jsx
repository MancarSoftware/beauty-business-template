function Footer({ business }) {
  const quickLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Precios', href: '#precios' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <footer className="bg-zinc-950 px-4 py-12 text-zinc-300 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <h2 className="text-xl font-semibold text-white">{business.name}</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            {business.slogan}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">
            Servicios principales
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-zinc-400">
            {business.footerServices.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Enlaces rápidos</h3>
          <ul className="mt-4 space-y-2 text-sm text-zinc-400">
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
          <h3 className="text-sm font-semibold text-white">Redes sociales</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {Object.entries(business.social).map(([name, url]) => (
              <a
                key={name}
                href={url}
                className="rounded-md border border-white/10 px-3 py-2 text-sm capitalize transition hover:border-amber-300 hover:text-white"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {business.name}. Todos los derechos
          reservados.
        </p>
        <p>Plantilla comercial para negocios de belleza y cuidado personal.</p>
      </div>
    </footer>
  )
}

export default Footer
