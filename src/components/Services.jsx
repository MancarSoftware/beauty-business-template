import SectionHeader from './SectionHeader'

function Services({ business }) {
  const section = business.sections?.services ?? {
    eyebrow: 'Servicios',
    title: 'Servicios profesionales para reservar por WhatsApp',
    description:
      'Elige el servicio que necesitas y confirma disponibilidad antes de tu visita.',
  }
  const featureImage = business.gallery?.[1]?.image ?? business.hero.image

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

        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
          <div className="relative min-h-[460px] overflow-hidden rounded-lg border border-[#ead8df] bg-[#2a2027]">
            {featureImage ? (
              <img
                src={featureImage}
                alt="Resultado de color en Bella Aura Studio"
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : null}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(19,15,18,0.84)_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-sm font-semibold uppercase text-[var(--brand-accent)]">
                Asesoria antes del servicio
              </p>
              <h3 className="mt-3 max-w-sm text-3xl font-semibold leading-tight">
                Color y forma pensados para tu rutina real
              </h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-zinc-200">
                Revisamos tono, largo, textura y mantenimiento antes de
                recomendarte un servicio.
              </p>
            </div>
          </div>

          <div className="divide-y divide-[#ead8df] rounded-lg border border-[#ead8df] bg-white">
            {business.services.map((service, index) => (
              <article
                key={service.name}
                className="group grid gap-4 p-5 transition hover:bg-[#fff1f6] md:grid-cols-[70px_1fr_auto] md:items-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-md bg-[#130f12] text-sm font-semibold text-[var(--brand-accent)] transition group-hover:bg-[var(--brand-accent-dark)] group-hover:text-white">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-[var(--brand-accent-dark)]">
                    {service.label}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-[#130f12]">
                    {service.name}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
                    {service.description}
                  </p>
                </div>

                <p className="w-fit rounded-md border border-[#ead8df] bg-white px-4 py-3 text-sm font-bold text-[#130f12] shadow-sm">
                  {service.price}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
