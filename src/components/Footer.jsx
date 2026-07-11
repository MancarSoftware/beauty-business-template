const footerLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Ubicacion', href: '#ubicacion' },
]

function Footer({ business }) {
  const currentYear = new Date().getFullYear()
  const socialLinks = Object.entries(business.social ?? {}).filter(
    ([, url]) => url && url !== '#',
  )
  const developer = business.developer

  return (
    <footer className="bg-[#111827] px-4 py-10 text-white sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/12 pb-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center border border-white/30 font-black">
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

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[var(--brand-accent)]">
              Enlaces
            </h3>
            <ul className="mt-4 space-y-3 text-sm font-bold">
              {footerLinks.map((link) => (
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
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[var(--brand-accent)]">
              Servicios
            </h3>
            <ul className="mt-4 space-y-3 text-sm font-bold text-white/62">
              {business.footerServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>

            {socialLinks.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map(([name, link]) => (
                  <a
                    key={name}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-white/15 px-4 py-2 text-xs font-black uppercase text-white/62 transition hover:bg-white hover:text-[#111827]"
                  >
                    {name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 text-sm text-white/42 md:flex-row md:items-center md:justify-between">
          <p>
            (c) {currentYear} {business.name}. Todos los derechos reservados.
          </p>
          {developer?.url && (
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
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer
