import SectionHeader from './SectionHeader'

const iconPaths = {
  classic: (
    <>
      <path d="M7 6l10 12" />
      <path d="M17 6L7 18" />
      <path d="M5 5.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M15 18.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
    </>
  ),
  fade: (
    <>
      <path d="M7 7h10" />
      <path d="M6 12h12" />
      <path d="M8 17h8" />
      <path d="M4 4v16" />
      <path d="M20 4v16" />
    </>
  ),
  beard: (
    <>
      <path d="M8 5c0 3-2 4-2 7 0 4 3 7 6 7s6-3 6-7c0-3-2-4-2-7" />
      <path d="M9 13c1 1 2 1.5 3 1.5s2-.5 3-1.5" />
      <path d="M10 8h.01" />
      <path d="M14 8h.01" />
    </>
  ),
  brow: (
    <>
      <path d="M5 10c4-3 10-3 14 0" />
      <path d="M6 15c3 2 9 2 12 0" />
      <path d="M9 13h6" />
    </>
  ),
  style: (
    <>
      <path d="M12 3v18" />
      <path d="M8 7c3-3 5-3 8 0" />
      <path d="M7 13c4-2 6-2 10 0" />
      <path d="M9 18c2 1 4 1 6 0" />
    </>
  ),
}

function ServiceIcon({ type }) {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconPaths[type] ?? iconPaths.classic}
    </svg>
  )
}

function Services({ business }) {
  return (
    <section id="servicios" className="bg-[#f7f4ee] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Servicios"
          title="Todo lo necesario para mantener un estilo impecable"
          description="Servicios claros, precios referenciales y una experiencia pensada para reservar sin fricción."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {business.services.map((service) => (
            <article
              key={service.name}
              className="group relative overflow-hidden rounded-lg border border-zinc-200/80 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-2xl hover:shadow-zinc-300/70"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-zinc-950 via-amber-300 to-zinc-950 opacity-0 transition group-hover:opacity-100" />
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-950 transition group-hover:border-amber-300 group-hover:bg-amber-50">
                <ServiceIcon type={service.icon} />
              </div>
              <h3 className="text-lg font-semibold text-zinc-950">
                {service.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {service.description}
              </p>
              <p className="mt-6 inline-flex rounded-md bg-zinc-950 px-3 py-2 text-sm font-bold text-amber-200">
                {service.price}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
