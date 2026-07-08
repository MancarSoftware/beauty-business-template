import SectionHeader from './SectionHeader'
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
    <section id="ubicacion" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-96 overflow-hidden rounded-xl bg-zinc-950 p-6 text-white shadow-2xl shadow-zinc-300/70">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:44px_44px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(231,183,200,0.24),transparent_28%)]" />
            <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color:var(--brand-accent)] bg-white/5" />
            <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--brand-accent)] shadow-[0_0_0_10px_rgba(231,183,200,0.15)]" />
            <div className="relative flex h-full min-h-80 flex-col justify-between">
              <div>
                <p className="text-sm font-semibold text-[var(--brand-accent)]">
                  {section.mapLabel}
                </p>
                <h3 className="mt-4 max-w-md text-3xl font-semibold">
                  {business.address}
                </h3>
              </div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-fit rounded-md bg-[var(--brand-accent)] px-5 py-3 text-sm font-bold text-zinc-950 transition hover:brightness-105"
              >
                Abrir Google Maps
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <article className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-zinc-950">Dirección</h3>
              <p className="mt-2 leading-7 text-zinc-600">{business.address}</p>
            </article>
            <article className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-zinc-950">Horarios</h3>
              <p className="mt-2 leading-7 text-zinc-600">
                {business.schedule}
              </p>
            </article>
            <article className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-zinc-950">Contacto</h3>
              <p className="mt-2 leading-7 text-zinc-600">{business.phone}</p>
              <p className="text-zinc-600">{business.email}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
