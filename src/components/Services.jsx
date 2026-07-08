import SectionHeader from './SectionHeader'

function Services({ business }) {
  return (
    <section id="servicios" className="bg-[#f7f4ee] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Servicios BarberPro"
          title="Cortes, barba, cejas y color atendidos por barberos profesionales"
          description="Elige el servicio que necesitas, confirma disponibilidad por WhatsApp y llega a tu cita con el horario reservado."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {business.services.map((service) => (
            <article
              key={service.name}
              className="group relative overflow-hidden rounded-lg border border-zinc-200/80 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-2xl hover:shadow-zinc-300/70"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-zinc-950 via-amber-300 to-zinc-950 opacity-0 transition group-hover:opacity-100" />
              <div className="mb-6 inline-flex rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-bold uppercase text-zinc-700 transition group-hover:border-amber-300 group-hover:bg-amber-50 group-hover:text-zinc-950">
                {service.label}
              </div>
              <h3 className="text-lg font-semibold text-zinc-950">
                {service.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {service.description}
              </p>
              <p className="mt-6 inline-flex rounded-md bg-amber-300 px-3 py-2 text-sm font-bold text-zinc-950">
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
