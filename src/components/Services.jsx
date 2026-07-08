import SectionHeader from './SectionHeader'

function Services({ business }) {
  return (
    <section id="servicios" className="bg-zinc-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Servicios"
          title="Todo lo necesario para mantener un estilo impecable"
          description="Servicios claros, precios referenciales y una experiencia pensada para reservar sin friccion."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {business.services.map((service) => (
            <article
              key={service.name}
              className="group rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl hover:shadow-zinc-200/70"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-950 text-sm font-bold text-amber-200">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-zinc-950">
                {service.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {service.description}
              </p>
              <p className="mt-5 text-sm font-bold text-amber-700">
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
