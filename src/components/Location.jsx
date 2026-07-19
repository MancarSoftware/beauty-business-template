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
    `Hola ${business.name}, quiero hacer un pedido o reservar productos.`,
  )

  return (
    <section
      id="ubicacion"
      className="bg-white px-4 py-16 text-[var(--brand-dark)] sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-end">
          <div>
            <p className="w-fit rounded-full bg-[var(--brand-background)] px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-caramel)]">
              {section.eyebrow}
            </p>
            <h2 className="mt-6 text-4xl font-black uppercase leading-[0.94] md:text-6xl">
              {section.title}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[var(--brand-coffee)]/68">
            {section.description}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <aside className="grid gap-4">
            <div className="rounded-[2rem] bg-[var(--brand-surface)] p-6 shadow-xl shadow-[var(--brand-coffee)]/6">
              <p className="text-xs font-black uppercase text-[var(--brand-caramel)]">
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
                  className="rounded-full bg-[var(--brand-dark)] px-5 py-3 text-center text-xs font-black uppercase text-white transition hover:bg-[var(--brand-caramel)] hover:text-[var(--brand-dark)]"
                >
                  Pedir por WhatsApp
                </a>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white px-5 py-3 text-center text-xs font-black uppercase text-[var(--brand-dark)] transition hover:bg-[var(--brand-background)]"
                >
                  Google Maps
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[var(--brand-surface)] p-6 shadow-xl shadow-[var(--brand-coffee)]/6">
              <p className="text-xs font-black uppercase text-[var(--brand-caramel)]">
                Horarios
              </p>
              <div className="mt-5 space-y-3">
                {business.scheduleBlocks.map((item) => (
                  <div
                    key={item.day}
                    className="grid gap-2 rounded-2xl bg-white px-4 py-3 text-sm sm:grid-cols-[1fr_auto]"
                  >
                    <span className="font-black uppercase">{item.day}</span>
                    <span className="font-semibold text-[var(--brand-coffee)]/60">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="overflow-hidden rounded-[2.5rem] bg-[var(--brand-surface)] p-3 shadow-2xl shadow-[var(--brand-coffee)]/10">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="560"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa de ${business.name}`}
              className="h-[420px] w-full rounded-[2rem] grayscale sm:h-[560px]"
            />
          </div>
        </div>

        <div className="mt-5 grid rounded-[2.5rem] bg-[var(--brand-dark)] text-white shadow-2xl shadow-[var(--brand-coffee)]/18 lg:grid-cols-[1fr_auto]">
          <div className="p-6 sm:p-8">
            <p className="w-fit rounded-full bg-white/8 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-[var(--brand-caramel)]">
              Pedido directo
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
              className="w-full rounded-full bg-white px-7 py-5 text-center text-sm font-black uppercase text-[var(--brand-dark)] transition hover:bg-[var(--brand-caramel)]"
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
