import SectionHeader from './SectionHeader'
import { createWhatsAppUrl } from '../utils/whatsapp'

function Pricing({ business }) {
  const section = business.sections?.pricing ?? {
    eyebrow: 'Precios',
    title: 'Elige tu servicio y agenda por WhatsApp',
    description:
      'Confirma disponibilidad, duración y precio antes de tu visita.',
  }
  const featuredPlan =
    business.pricing.find((plan) => plan.featured) ?? business.pricing[0]
  const regularPlans = business.pricing.filter((plan) => plan !== featuredPlan)

  return (
    <section id="precios" className="bg-[#fff8fa] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-lg border border-[#ead8df] bg-[#130f12] p-6 text-white shadow-2xl shadow-[#9f4f68]/20">
            <p className="w-fit rounded-md bg-[var(--brand-accent)] px-3 py-1 text-xs font-bold text-[#130f12]">
              {featuredPlan.tag}
            </p>
            <h3 className="mt-6 text-4xl font-semibold leading-tight">
              {featuredPlan.name}
            </h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-zinc-300">
              {featuredPlan.description}
            </p>

            <div className="mt-8 flex items-end gap-3">
              <p className="text-6xl font-semibold">{featuredPlan.price}</p>
              <p className="pb-3 text-sm text-zinc-400">desde</p>
            </div>
            <p className="mt-2 text-sm text-[var(--brand-accent)]">
              {featuredPlan.duration}
            </p>

            <ul className="mt-8 grid gap-3">
              {featuredPlan.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="rounded-md border border-white/10 bg-white/6 px-4 py-3 text-sm text-zinc-100"
                >
                  {benefit}
                </li>
              ))}
            </ul>

            <a
              href={createWhatsAppUrl(
                business.whatsapp,
                `Hola ${business.name}, quiero agendar el paquete ${featuredPlan.name}.`,
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-8 block rounded-md bg-[var(--brand-accent)] px-5 py-4 text-center text-sm font-bold text-[#130f12] transition hover:brightness-105"
            >
              Agendar este servicio
            </a>
          </article>

          <div className="divide-y divide-[#ead8df] rounded-lg border border-[#ead8df] bg-white">
            {regularPlans.map((plan) => (
              <article
                key={plan.name}
                className="grid gap-5 p-5 transition hover:bg-[#fff1f6] md:grid-cols-[1fr_auto] md:items-center"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-md bg-[#f5e6ec] px-3 py-1 text-xs font-bold text-[var(--brand-accent-dark)]">
                      {plan.tag}
                    </span>
                    <span className="text-sm font-semibold text-zinc-500">
                      {plan.duration}
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-[#130f12]">
                    {plan.name}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
                    {plan.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {plan.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="rounded-md border border-[#ead8df] px-3 py-2 text-xs font-semibold text-zinc-700"
                      >
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:text-right">
                  <p className="text-4xl font-semibold text-[#130f12]">
                    {plan.price}
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">desde</p>
                  <a
                    href={createWhatsAppUrl(
                      business.whatsapp,
                      `Hola ${business.name}, quiero agendar el paquete ${plan.name}.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex rounded-md bg-[#130f12] px-4 py-3 text-sm font-bold text-white transition hover:bg-[var(--brand-accent-dark)]"
                  >
                    Reservar
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
