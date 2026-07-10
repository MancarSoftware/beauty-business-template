import { createMapsUrl, createWhatsAppUrl } from '../utils/whatsapp'

function Location({ business }) {
  const section = business.sections.location
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
      className="bg-[#fbf7f1] px-4 py-16 text-[#09231f] sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase text-[var(--brand-accent-dark)]">
              {section.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.98] md:text-6xl">
              {section.title}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#09231f]/62">
            {section.description}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="overflow-hidden border border-[#09231f]/12 bg-white">
            <div className="border-b border-[#09231f]/12 p-5">
              <p className="text-xs font-black uppercase text-[var(--brand-accent-dark)]">
                Direccion
              </p>
              <p className="mt-2 text-lg font-black">{business.address}</p>
            </div>

            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa de ${business.name}`}
              className="h-[420px] w-full grayscale"
            />
          </article>

          <aside className="border border-[#09231f] bg-[#09231f] p-6 text-white">
            <p className="text-xs font-black uppercase text-[var(--brand-accent)]">
              Horarios de atencion
            </p>

            <div className="mt-6 space-y-3">
              {business.scheduleBlocks.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between gap-4 border border-white/12 bg-white/[0.04] p-4"
                >
                  <span className="text-sm font-black uppercase">{item.day}</span>
                  <span className="text-sm text-white/64">{item.time}</span>
                </div>
              ))}
            </div>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {business.locationFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm font-bold">
                  <span className="h-2.5 w-2.5 bg-[var(--brand-accent)]" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-white/12 pt-6">
              <p className="text-sm text-white/58">{business.phone}</p>
              <p className="mt-1 text-sm text-white/58">{business.email}</p>
            </div>

            <div className="mt-8 grid gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-[var(--brand-accent)] px-6 py-4 text-center text-sm font-black uppercase text-white transition hover:bg-white hover:text-[#09231f]"
              >
                Reservar cita
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-white/20 px-6 py-4 text-center text-sm font-black uppercase text-white transition hover:bg-white hover:text-[#09231f]"
              >
                Abrir Google Maps
              </a>
            </div>
          </aside>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border border-[#09231f] bg-[var(--brand-accent)] p-6 text-white sm:p-8">
        <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div>
            <p className="text-xs font-black uppercase">Reserva directa</p>
            <h2 className="mt-3 text-4xl font-black uppercase leading-none">
              {business.contactCta.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base font-bold leading-7 text-white/78">
              {business.contactCta.text}
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-[#09231f] px-7 py-5 text-center text-sm font-black uppercase text-white transition hover:bg-white hover:text-[#09231f]"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default Location
