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
      className="bg-[#fbfaf6] px-4 py-20 text-[#111827] sm:px-6 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#227684]">
              {section.eyebrow}
            </p>
            <h2 className="mt-5 text-5xl font-black uppercase leading-[0.94] md:text-7xl">
              {section.title}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#111827]/62">
            {section.description}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="border-y border-[#111827]/12">
            <div className="border-b border-[#111827]/12 py-7">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#227684]">
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
                  className="bg-[#111827] px-5 py-3 text-center text-xs font-black uppercase text-white transition hover:bg-[var(--brand-accent)] hover:text-[#111827]"
                >
                  Agendar cita
                </a>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-[#111827]/12 bg-white px-5 py-3 text-center text-xs font-black uppercase text-[#111827] transition hover:border-[#111827]"
                >
                  Google Maps
                </a>
              </div>
            </div>

            <div className="py-7">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#227684]">
                Horarios
              </p>
              <div className="mt-5 space-y-4">
                {business.scheduleBlocks.map((item) => (
                  <div
                    key={item.day}
                    className="grid gap-2 text-sm sm:grid-cols-[1fr_auto]"
                  >
                    <span className="font-black uppercase">{item.day}</span>
                    <span className="font-semibold text-[#111827]/58">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="overflow-hidden border border-[#111827]/12 bg-white p-3">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="560"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa de ${business.name}`}
              className="h-[560px] w-full grayscale"
            />
          </div>
        </div>

        <div className="mt-5 grid border border-[#111827]/12 bg-white lg:grid-cols-[1fr_auto]">
          <div className="p-6 sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#227684]">
              Reserva directa
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none">
              {business.contactCta.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#111827]/62">
              {business.contactCta.text}
            </p>
          </div>
          <div className="flex items-center p-6">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-[#111827] px-7 py-5 text-center text-sm font-black uppercase text-white transition hover:bg-[var(--brand-accent)] hover:text-[#111827]"
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
