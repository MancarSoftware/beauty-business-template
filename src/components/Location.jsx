import { createMapsUrl, createWhatsAppUrl } from '../utils/whatsapp'

function Location({ business }) {
  const section = business.sections?.location ?? {
    eyebrow: 'Horarios y ubicación',
    title: 'Entrena cuando puedas',
    description: 'Consulta horarios y ubicación.',
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
    `Hola ${business.name}, quiero información para empezar a entrenar.`,
  )

  return (
    <section
      id="ubicacion"
      className="bg-[#f8f5ef] px-4 py-16 text-[#101010] sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--brand-accent-dark)]">
            {section.eyebrow}
          </p>

          <h2 className="mt-4 font-display text-4xl font-black uppercase leading-tight text-[#101010] md:text-5xl">
            {section.title}
          </h2>

          <p className="mt-4 text-base leading-7 text-zinc-600">
            {section.description}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr_0.7fr]">
          <article className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm">
            <p className="text-sm font-black uppercase text-[var(--brand-accent-dark)]">
              Horarios
            </p>

            <div className="mt-7 space-y-4">
              {business.scheduleBlocks.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between gap-5 border-b border-zinc-200 pb-4 text-sm last:border-b-0"
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
              className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-[var(--brand-accent)] px-5 py-4 text-sm font-black uppercase text-white shadow-lg shadow-[var(--brand-accent)]/25 transition hover:-translate-y-1 hover:bg-[var(--brand-accent-dark)]"
            >
              Consultar horarios
            </a>
          </article>

          <article className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm">
            <div className="border-b border-zinc-200 p-6 text-center">
              <p className="text-sm font-black uppercase text-[var(--brand-accent-dark)]">
                Dónde estamos
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
                className="inline-flex w-full items-center justify-center rounded-full bg-[var(--brand-accent)] px-5 py-4 text-sm font-black uppercase text-white shadow-lg shadow-[var(--brand-accent)]/25 transition hover:-translate-y-1 hover:bg-[var(--brand-accent-dark)]"
              >
                Cómo llegar
              </a>
            </div>
          </article>

          <article className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm">
            <p className="text-sm font-black uppercase text-[var(--brand-accent-dark)]">
              Instalaciones
            </p>

            <ul className="mt-6 space-y-5">
              {business.locationFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm font-semibold text-zinc-700"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f8f5ef] text-xs font-black text-[var(--brand-accent-dark)]">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-[var(--brand-accent)]/25 bg-[#f8f5ef] p-6">
              <p className="text-sm font-black uppercase text-[var(--brand-accent-dark)]">
                Contacto
              </p>

              <p className="mt-3 text-xl font-black text-[#101010]">
                {business.phone}
              </p>

              <p className="mt-2 text-sm font-semibold text-zinc-600">
                {business.email}
              </p>
            </div>
          </article>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl rounded-[2.5rem] bg-[#101010] px-6 py-10 text-white shadow-2xl shadow-black/20 lg:px-10">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--brand-accent)]">
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
            className="inline-flex items-center justify-center rounded-full bg-[var(--brand-accent)] px-7 py-5 text-sm font-black uppercase text-white shadow-lg shadow-[var(--brand-accent)]/25 transition hover:-translate-y-1 hover:bg-[var(--brand-accent-dark)]"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default Location