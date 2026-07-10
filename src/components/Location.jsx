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
      className="bg-white px-4 py-16 text-[#09231f] sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="w-fit rounded-full bg-[#f2e4d8] px-5 py-2 text-xs font-black uppercase text-[var(--brand-accent-dark)]">
              {section.eyebrow}
            </p>
            <h2 className="mt-5 text-4xl font-black uppercase leading-[0.98] md:text-6xl">
              {section.title}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#09231f]/62">
            {section.description}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <aside className="grid gap-4 rounded-[3rem] bg-[#fff8f1] p-5 shadow-xl shadow-[#09231f]/8">
            <div className="rounded-[2rem] bg-white p-6">
              <p className="text-xs font-black uppercase text-[var(--brand-accent-dark)]">
                Contacto directo
              </p>
              <p className="mt-4 text-3xl font-black uppercase leading-tight">
                {business.phone}
              </p>
              <p className="mt-2 text-sm font-bold text-[#09231f]/55">
                {business.email}
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-6">
              <p className="text-xs font-black uppercase text-[var(--brand-accent-dark)]">
                Horarios
              </p>
              <div className="mt-5 space-y-3">
                {business.scheduleBlocks.map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between gap-5 rounded-full bg-[#fff8f1] px-4 py-3 text-sm"
                  >
                    <span className="font-black uppercase">{item.day}</span>
                    <span className="text-[#09231f]/58">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-6">
              <p className="text-xs font-black uppercase text-[var(--brand-accent-dark)]">
                Servicios del espacio
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {business.locationFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-full bg-[#fff8f1] px-4 py-3 text-sm font-bold"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="overflow-hidden rounded-[3rem] bg-white p-3 shadow-2xl shadow-[#09231f]/10">
            <div className="grid gap-4 rounded-[2.25rem] bg-[#fff8f1] p-5 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-xs font-black uppercase text-[var(--brand-accent-dark)]">
                  Direccion
                </p>
                <p className="mt-2 text-lg font-black">{business.address}</p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#09231f] px-5 py-3 text-center text-xs font-black uppercase text-white transition hover:bg-[var(--brand-accent)]"
                >
                  Reservar
                </a>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white px-5 py-3 text-center text-xs font-black uppercase text-[#09231f] transition hover:bg-[#09231f] hover:text-white"
                >
                  Google Maps
                </a>
              </div>
            </div>

            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="470"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa de ${business.name}`}
              className="mt-3 h-[470px] w-full rounded-[2.25rem] grayscale"
            />
          </div>
        </div>

        <div className="mt-5 grid rounded-[3rem] bg-[#09231f] text-white shadow-2xl shadow-[#09231f]/18 lg:grid-cols-[1fr_auto]">
          <div className="p-6 sm:p-8">
            <p className="w-fit rounded-full bg-white/10 px-5 py-2 text-xs font-black uppercase text-[var(--brand-accent)]">
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
              className="w-full rounded-full bg-white px-7 py-5 text-center text-sm font-black uppercase text-[#09231f] transition hover:bg-[var(--brand-accent)] hover:text-white"
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
