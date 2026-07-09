import { createMapsUrl } from '../utils/whatsapp'

function Location({ business }) {
  const section = business.sections?.location ?? {
    eyebrow: 'Ubicación',
    title: 'Visítanos con reserva previa',
    description: 'Agenda por WhatsApp para confirmar disponibilidad antes de venir.',
    mapLabel: business.name,
  }
  const mapsUrl =
    business.mapsUrl && business.mapsUrl !== '#'
      ? business.mapsUrl
      : createMapsUrl(business.address)

  return (
    <section id="ubicacion" className="bg-[#130f12] px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-[var(--brand-accent)]">
              {section.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-5xl font-semibold leading-tight md:text-7xl">
              {section.title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-300">
              {section.description}
            </p>
          </div>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="w-fit rounded-full bg-[var(--brand-accent)] px-6 py-4 text-sm font-bold text-[#130f12] transition hover:brightness-105 lg:justify-self-end"
          >
            Abrir Google Maps
          </a>
        </div>

        <div className="mt-14 grid border-y border-white/12 md:grid-cols-3">
          <article className="border-b border-white/12 py-8 md:border-b-0 md:border-r md:px-8">
            <p className="text-xs font-bold uppercase text-[var(--brand-accent)]">
              Estudio
            </p>
            <h3 className="mt-4 font-display text-4xl font-semibold">
              {section.mapLabel}
            </h3>
          </article>
          <article className="border-b border-white/12 py-8 md:border-b-0 md:border-r md:px-8">
            <p className="text-xs font-bold uppercase text-[var(--brand-accent)]">
              Dirección
            </p>
            <p className="mt-4 text-lg leading-8 text-zinc-200">
              {business.address}
            </p>
          </article>
          <article className="py-8 md:px-8">
            <p className="text-xs font-bold uppercase text-[var(--brand-accent)]">
              Atención
            </p>
            <p className="mt-4 text-lg leading-8 text-zinc-200">
              {business.schedule}
            </p>
            <p className="mt-3 text-zinc-400">{business.phone}</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Location
