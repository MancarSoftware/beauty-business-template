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
    <section id="ubicacion" className="bg-[#f2e7eb] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="grid overflow-hidden rounded-lg border border-[#d9c5ce] bg-white shadow-2xl shadow-[#9f4f68]/10 lg:grid-cols-[1fr_1fr]">
          <div className="relative min-h-[430px] bg-[#130f12] p-6 text-white">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:38px_38px]" />
            <div className="absolute inset-x-8 top-1/2 h-px bg-[var(--brand-accent)]/60" />
            <div className="absolute left-1/2 inset-y-8 w-px bg-[var(--brand-accent)]/60" />
            <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--brand-accent)] shadow-[0_0_0_12px_rgba(231,183,200,0.16)]" />

            <div className="relative flex h-full min-h-[380px] flex-col justify-between">
              <div>
                <p className="text-sm font-semibold text-[var(--brand-accent)]">
                  {section.mapLabel}
                </p>
                <h3 className="mt-4 max-w-md text-3xl font-semibold leading-tight">
                  Reserva tu espacio antes de venir
                </h3>
              </div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-fit rounded-md bg-[var(--brand-accent)] px-5 py-3 text-sm font-bold text-[#130f12] transition hover:brightness-105"
              >
                Abrir Google Maps
              </a>
            </div>
          </div>

          <div className="grid divide-y divide-[#ead8df]">
            <article className="p-6 md:p-8">
              <p className="text-sm font-bold uppercase text-[var(--brand-accent-dark)]">
                Dirección
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[#130f12]">
                {business.address}
              </h3>
            </article>
            <article className="p-6 md:p-8">
              <p className="text-sm font-bold uppercase text-[var(--brand-accent-dark)]">
                Horarios
              </p>
              <p className="mt-3 text-lg leading-7 text-zinc-700">
                {business.schedule}
              </p>
            </article>
            <article className="p-6 md:p-8">
              <p className="text-sm font-bold uppercase text-[var(--brand-accent-dark)]">
                Contacto
              </p>
              <p className="mt-3 text-lg leading-7 text-zinc-700">
                {business.phone}
              </p>
              <p className="text-zinc-700">{business.email}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
