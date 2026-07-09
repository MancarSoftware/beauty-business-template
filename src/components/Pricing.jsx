import { createWhatsAppUrl } from '../utils/whatsapp'
import SectionHeader from './SectionHeader'

function Pricing({ business }) {
  const section = business.sections?.pricing ?? {
    eyebrow: 'Precios',
    title: 'Elige tu servicio y agenda por WhatsApp',
    description:
      'Confirma disponibilidad, duración y precio antes de tu visita.',
  }

  return (
    <section
      id="precios"
      className="bg-[#fff8fa] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="overflow-hidden rounded-[2rem] border border-[#ead8df] bg-white shadow-xl shadow-[#9f4f68]/10">
          <div className="grid lg:grid-cols-[0.34fr_0.66fr]">
            <div className="bg-[#130f12] p-8 text-white md:p-10">
              <p className="text-sm font-semibold uppercase text-[var(--brand-accent)]">
                Guía de reserva
              </p>

              <h3 className="mt-5 font-display text-4xl font-semibold leading-tight">
                Elige por objetivo, no solo por precio.
              </h3>

              <p className="mt-5 text-sm leading-7 text-zinc-300">
                Si no sabes qué reservar, escríbenos una foto de referencia y te
                orientamos con el servicio correcto.
              </p>
            </div>

            <div className="divide-y divide-[#ead8df]">
              {business.pricing.map((plan) => (
                <article
                  key={plan.name}
                  className="grid gap-5 p-6 transition hover:bg-[#fff1f6] md:grid-cols-[1fr_100px_110px_auto] md:items-center"
                >
                  <div>
                    <p className="text-xs font-bold uppercase text-[var(--brand-accent-dark)]">
                      {plan.tag}
                    </p>

                    <h3 className="mt-2 font-display text-2xl font-semibold text-[#130f12] md:text-3xl">
                      {plan.name}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-zinc-600">
                      {plan.description}
                    </p>
                  </div>

                  <p className="text-sm font-semibold text-zinc-500">
                    {plan.duration}
                  </p>

                  <div>
                    <p className="text-xs font-bold uppercase text-zinc-400">
                      Desde
                    </p>

                    <p className="font-display text-3xl font-semibold text-[#130f12]">
                      {plan.price}
                    </p>
                  </div>

                  <a
                    href={createWhatsAppUrl(
                      business.whatsapp,
                      `Hola ${business.name}, quiero agendar el paquete ${plan.name}.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[#130f12] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[var(--brand-accent-dark)]"
                  >
                    Reservar
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing