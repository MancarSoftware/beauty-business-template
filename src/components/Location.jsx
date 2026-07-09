import { createMapsUrl, createWhatsAppUrl } from '../utils/whatsapp'

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

  const mapEmbedUrl =
    business.mapEmbedUrl ??
    `https://www.google.com/maps?q=${encodeURIComponent(
      business.address,
    )}&z=17&output=embed`

  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    `Hola ${business.name}, quiero reservar una cita.`,
  )

  return (
    <section
      id="ubicacion"
      className="bg-[#130f12] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold uppercase text-[var(--brand-accent)]">
              {section.eyebrow}
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-white md:text-5xl lg:mx-0 lg:text-6xl">
              {section.title}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-300 md:text-lg lg:mx-0">
              {section.description}
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center rounded-full bg-[var(--brand-accent)] px-6 py-4 text-sm font-bold text-[#130f12] transition hover:brightness-95"
              >
                Abrir Google Maps
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center rounded-full border border-white/20 bg-white px-6 py-4 text-sm font-bold text-[#130f12] transition hover:bg-[var(--brand-accent)] hover:text-[#130f12]"
              >
                Reservar
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/30">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa de ${business.name}`}
              className="h-[420px] w-full"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <article className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
            <p className="text-xs font-bold uppercase text-[var(--brand-accent)]">
              Estudio
            </p>

            <h3 className="mt-3 font-display text-2xl font-semibold">
              {section.mapLabel}
            </h3>
          </article>

          <article className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
            <p className="text-xs font-bold uppercase text-[var(--brand-accent)]">
              Dirección
            </p>

            <p className="mt-3 leading-7 text-zinc-200">
              {business.address}
            </p>
          </article>

          <article className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
            <p className="text-xs font-bold uppercase text-[var(--brand-accent)]">
              Atención
            </p>

            <p className="mt-3 leading-7 text-zinc-200">{business.schedule}</p>
            <p className="mt-2 text-zinc-400">{business.phone}</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Location