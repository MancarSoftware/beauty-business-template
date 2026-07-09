import { createMapsUrl, createWhatsAppUrl } from '../utils/whatsapp'

function Location({ business }) {
  const section = business.sections?.location ?? {
    eyebrow: 'Horarios y ubicacion',
    title: 'Entrena cuando puedas',
    description: 'Consulta horarios y ubicacion.',
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
    `Hola ${business.name}, quiero informacion para empezar a entrenar.`,
  )

  return (
    <section id="ubicacion" className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase text-[var(--brand-accent-dark)]">
            {section.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-4xl font-black uppercase leading-tight text-[#101010] md:text-5xl">
            {section.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            {section.description}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr_0.7fr] lg:items-stretch">
          <article className="rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-black uppercase text-[var(--brand-accent-dark)]">
              Horarios
            </p>

            <div className="mt-7 space-y-4">
              {business.scheduleBlocks.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between gap-5 border-b border-zinc-200 pb-4 text-sm"
                >
                  <span className="font-black text-[#101010]">{item.day}</span>
                  <span className="font-semibold text-zinc-600">{item.time}</span>
                </div>
              ))}
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center rounded-full border border-[var(--brand-accent)] px-5 py-4 text-sm font-black uppercase text-[#101010] transition hover:bg-[var(--brand-accent)] hover:text-white"
            >
              Consultar horarios
            </a>
          </article>

          <article className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm">
            <div className="border-b border-zinc-200 p-6 text-center">
              <p className="text-sm font-black uppercase text-[var(--brand-accent-dark)]">
                Donde estamos
              </p>
              <p className="mt-2 text-sm font-semibold text-zinc-600">
                {business.address}
              </p>
            </div>

            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="330"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa de ${business.name}`}
              className="h-[330px] w-full"
            />

            <div className="p-5">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-[var(--brand-accent)] px-5 py-4 text-sm font-black uppercase text-white transition hover:bg-[var(--brand-accent-dark)]"
              >
                Como llegar
              </a>
            </div>
          </article>

          <article className="rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-black uppercase text-[var(--brand-accent-dark)]">
              Instalaciones
            </p>

            <ul className="mt-6 space-y-5">
              {business.locationFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm font-semibold text-zinc-700">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fff7e8] text-xs font-black text-[var(--brand-accent-dark)]">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-[#101010] p-6 text-white">
              <p className="text-sm font-black uppercase text-[var(--brand-accent)]">
                Contacto
              </p>
              <p className="mt-3 text-xl font-black">{business.phone}</p>
              <p className="mt-2 text-sm text-zinc-300">{business.email}</p>
            </div>
          </article>
        </div>
      </div>

      <div className="mt-16 bg-[#101010] px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-black uppercase text-[var(--brand-accent)]">
              WhatsApp
            </p>
            <h2 className="mt-3 font-display text-4xl font-black uppercase leading-tight md:text-5xl">
              {business.contactCta.title}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-300">
              {business.contactCta.text}
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[var(--brand-accent)] px-7 py-5 text-sm font-black uppercase text-white transition hover:bg-[var(--brand-accent-dark)]"
          >
            Escribenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default Location
