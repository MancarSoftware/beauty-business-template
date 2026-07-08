import SectionHeader from './SectionHeader'
import { createWhatsAppUrl } from '../utils/whatsapp'

function Pricing({ business }) {
  const section = business.sections?.pricing ?? {
    eyebrow: 'Precios',
    title: 'Elige tu servicio y agenda por WhatsApp',
    description:
      'Confirma disponibilidad, duración y precio antes de tu visita.',
  }

  return (
    <section id="precios" className="bg-[#f7f4ee] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {business.pricing.map((plan) => {
            const message = `Hola ${business.name}, quiero agendar el paquete ${plan.name}.`

            return (
              <article
                key={plan.name}
                className={`relative overflow-hidden rounded-xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl ${
                  plan.featured
                    ? 'border-[color:var(--brand-accent)] bg-zinc-950 text-white shadow-zinc-400/70 xl:-translate-y-4'
                    : 'border-zinc-200 bg-white text-zinc-950 shadow-zinc-200/70'
                }`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 ${
                    plan.featured ? 'bg-[var(--brand-accent)]' : 'bg-zinc-950'
                  }`}
                />
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span
                    className={`rounded-md px-3 py-1 text-xs font-bold ${
                      plan.featured
                        ? 'bg-white/10 text-[var(--brand-accent)]'
                        : 'bg-zinc-100 text-zinc-700'
                    }`}
                  >
                    {plan.tag}
                  </span>
                  <span
                    className={`text-xs font-semibold ${
                      plan.featured ? 'text-zinc-300' : 'text-zinc-500'
                    }`}
                  >
                    {plan.duration}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold">{plan.name}</h3>
                <p
                  className={`mt-3 text-sm leading-6 ${
                    plan.featured ? 'text-zinc-300' : 'text-zinc-600'
                  }`}
                >
                  {plan.description}
                </p>
                <div className="mt-7 flex items-end gap-2">
                  <p className="text-5xl font-semibold">{plan.price}</p>
                  <p
                    className={`pb-2 text-sm ${
                      plan.featured ? 'text-zinc-400' : 'text-zinc-500'
                    }`}
                  >
                    desde
                  </p>
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3 text-sm">
                      <span
                        className={`mt-1 h-2 w-2 rounded-full ${
                          plan.featured ? 'bg-[var(--brand-accent)]' : 'bg-[var(--brand-accent-dark)]'
                        }`}
                      />
                      <span
                        className={
                          plan.featured ? 'text-zinc-200' : 'text-zinc-700'
                        }
                      >
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={createWhatsAppUrl(business.whatsapp, message)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 block rounded-md bg-[var(--brand-accent)] px-4 py-4 text-center text-sm font-bold text-zinc-950 transition hover:brightness-105"
                >
                  Agendar por WhatsApp
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Pricing
