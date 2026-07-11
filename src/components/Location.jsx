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
    `Hola ${business.name}, quiero agendar una cita dental.`,
  )

  return (
    <section
      id="ubicacion"
      className="bg-[#fff7ec] px-4 py-20 text-[#172033] sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-end">
          <div>
            <p className="w-fit rounded-full bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-accent-dark)]">
              {section.eyebrow}
            </p>
            <h2 className="mt-6 text-5xl font-black uppercase leading-[0.96] md:text-7xl">
              {section.title}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#172033]/62">
            {section.description}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <aside className="grid gap-4">
            <div className="rounded-[2rem] bg-white p-6 shadow-xl shadow-[#172033]/6">
              <p className="text-xs font-black uppercase text-[var(--brand-accent-dark)]">
                Direccion
              </p>
              <p className="mt-4 text-2xl font-black uppercase leading-tight">
                {business.address}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#172033] px-5 py-3 text-center text-xs font-black uppercase text-white transition hover:bg-[var(--brand-accent)] hover:text-[#172033]"
                >
                  Agendar cita
                </a>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#fff7ec] px-5 py-3 text-center text-xs font-black uppercase text-[#172033] transition hover:bg-[var(--brand-secondary)]"
                >
                  Google Maps
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-6 shadow-xl shadow-[#172033]/6">
              <p className="text-xs font-black uppercase text-[var(--brand-accent-dark)]">
                Horarios
              </p>
              <div className="mt-5 space-y-3">
                {business.scheduleBlocks.map((item) => (
                  <div
                    key={item.day}
                    className="grid gap-2 rounded-2xl bg-[#fff7ec] px-4 py-3 text-sm sm:grid-cols-[1fr_auto]"
                  >
                    <span className="font-black uppercase">{item.day}</span>
                    <span className="font-semibold text-[#172033]/58">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-2xl shadow-[#172033]/10">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="560"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa de ${business.name}`}
              className="h-[560px] w-full rounded-[2rem] grayscale"
            />
          </div>
        </div>

        <div className="mt-5 grid rounded-[2.5rem] bg-[#172033] text-white shadow-2xl shadow-[#172033]/18 lg:grid-cols-[1fr_auto]">
          <div className="p-6 sm:p-8">
            <p className="w-fit rounded-full bg-white/8 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-[var(--brand-accent)]">
              Reserva directa
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none">
              {business.contactCta.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/65">
              {business.contactCta.text}
            </p>
          </div>
          <div className="flex items-center p-6">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-full bg-white px-7 py-5 text-center text-sm font-black uppercase text-[#172033] transition hover:bg-[var(--brand-accent)]"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
