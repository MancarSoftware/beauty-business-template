import SectionHeader from './SectionHeader'

function Services({ business }) {
  const section = business.sections?.services ?? {
    eyebrow: 'Servicios',
    title: 'Servicios profesionales para reservar por WhatsApp',
    description:
      'Elige el servicio que necesitas y confirma disponibilidad antes de tu visita.',
  }

  return (
    <section
      id="servicios"
      className="bg-[#fff8fa] px-4 py-24 text-[#130f12] sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="border-y border-[#ead8df]">
          {business.services.map((service, index) => {
            const image = business.gallery[index % business.gallery.length]?.image

            return (
              <article
                key={service.name}
                className="group grid gap-5 border-b border-[#ead8df] py-6 last:border-b-0 lg:grid-cols-[90px_180px_1fr_auto] lg:items-center"
              >
                <p className="font-display text-5xl leading-none text-[#d9c5ce] transition group-hover:text-[var(--brand-accent-dark)]">
                  {String(index + 1).padStart(2, '0')}
                </p>

                <div className="h-32 overflow-hidden rounded-full border border-[#ead8df] bg-white lg:h-40">
                  {image ? (
                    <img
                      src={image}
                      alt={service.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  ) : null}
                </div>

                <div>
                  <p className="text-xs font-bold uppercase text-[var(--brand-accent-dark)]">
                    {service.label}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-semibold text-[#130f12] md:text-4xl">
                    {service.name}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600">
                    {service.description}
                  </p>
                </div>

                <p className="font-display text-3xl font-semibold text-[#130f12]">
                  {service.price.replace('Desde ', '')}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
