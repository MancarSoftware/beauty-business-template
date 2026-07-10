import { createMapsUrl, createWhatsAppUrl } from '../utils/whatsapp'

function Location({ business }) {
  const section = business.sections?.location
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
    `Hola ${business.name}, quiero agendar una visita al gimnasio.`,
  )

  return (
    <section
      id="ubicacion"
      className="bg-[#f4f1e8] px-4 py-16 text-[#050505] sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase text-[var(--brand-punch)]">
              {section.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.96] md:text-6xl">
              {section.title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
              {section.description}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {business.scheduleBlocks.map((item) => (
              <article key={item.day} className="border border-[#050505]/12 bg-white p-5">
                <p className="text-xs font-black uppercase text-zinc-500">
                  {item.day}
                </p>
                <p className="mt-3 text-2xl font-black uppercase">{item.time}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="overflow-hidden border border-[#050505]/12 bg-white">
            <div className="border-b border-[#050505]/12 p-5">
              <p className="text-xs font-black uppercase text-[var(--brand-punch)]">
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

          <aside className="flex flex-col border border-[#050505] bg-[#050505] p-6 text-white">
            <p className="text-xs font-black uppercase text-[var(--brand-accent)]">
              Ven preparado
            </p>
            <h3 className="mt-4 text-4xl font-black uppercase leading-none">
              Tu primera visita puede ser esta semana.
            </h3>

            <ul className="mt-8 grid gap-3">
              {business.locationFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 border border-white/10 bg-white/[0.04] p-4 text-sm font-bold"
                >
                  <span className="h-2.5 w-2.5 bg-[var(--brand-accent)]" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm text-white/55">{business.phone}</p>
              <p className="mt-1 text-sm text-white/55">{business.email}</p>
            </div>

            <div className="mt-auto grid gap-3 pt-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-[var(--brand-accent)] px-6 py-4 text-center text-sm font-black uppercase !text-[#050505] transition hover:bg-white hover:!text-[#050505]"
              >
                Agendar visita
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-white/20 bg-[#050505] px-6 py-4 text-center text-sm font-black uppercase !text-white transition hover:border-white hover:bg-white hover:!text-[#050505]"
              >
                Abrir Google Maps
              </a>
            </div>
          </aside>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border border-[#050505] bg-[var(--brand-accent)] p-6 text-[#050505] sm:p-8">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="text-xs font-black uppercase">WhatsApp directo</p>
            <h2 className="mt-3 text-4xl font-black uppercase leading-none">
              {business.contactCta.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base font-bold leading-7 text-[#050505]/72">
              {business.contactCta.text}
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-[#050505] px-7 py-5 text-center text-sm font-black uppercase !text-white transition hover:bg-white hover:!text-[#050505]"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default Location
