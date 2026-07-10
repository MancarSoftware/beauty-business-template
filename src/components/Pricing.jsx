import { createWhatsAppUrl } from '../utils/whatsapp'
import SectionHeader from './SectionHeader'

function Pricing({ business }) {
  const section = business.sections?.pricing ?? {
    eyebrow: 'Planes',
    title: 'Elige tu plan de entrenamiento',
    description:
      'Planes por tiempo para entrenar con acceso completo y beneficios claros.',
  }

  return (
    <section
      id="planes"
      className="bg-white px-4 py-16 text-[#101010] sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="grid gap-7 lg:grid-cols-3">
          {business.pricing.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex min-h-[620px] flex-col rounded-[2rem] border bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10 ${
                plan.featured
                  ? 'border-[var(--brand-accent)] shadow-xl shadow-[var(--brand-accent)]/10'
                  : 'border-zinc-200'
              }`}
            >
              {plan.featured ? (
                <div className="absolute right-7 top-7 rounded-full bg-[var(--brand-accent)] px-4 py-2 text-xs font-black uppercase text-white">
                  Recomendado
                </div>
              ) : null}

              <div className="text-center">
                <h3 className="font-display text-4xl font-black text-[#101010]">
                  {plan.name}
                </h3>

                <p className="mt-4 text-base font-medium text-zinc-600">
                  {plan.duration}
                </p>
              </div>

              <div className="mt-16 flex items-end justify-center text-[#101010]">
                <span className="-mb-1 mr-2 text-3xl font-medium">$</span>

                <span className="font-display text-7xl font-black leading-none tracking-tight">
                  {plan.price.replace('$', '')}
                </span>

                <span className="mb-2 ml-2 text-xl font-medium text-zinc-700">
                  {plan.period}
                </span>
              </div>

              <p className="mt-16 text-center text-base font-medium text-zinc-700">
                {plan.equivalent}
              </p>

              <ul className="mt-6 flex-1 space-y-7">
                {plan.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-4 text-base font-medium text-zinc-800"
                  >
                    <span className="text-xl font-black text-[var(--brand-accent)]">
                      ✓
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <a
                href={createWhatsAppUrl(
                  business.whatsapp,
                  plan.whatsappMessage ??
                    `Hola ${business.name}, quiero información sobre el plan ${plan.name}.`,
                )}
                target="_blank"
                rel="noreferrer"
                className={`mt-10 inline-flex w-fit items-center justify-center rounded-full px-8 py-4 text-sm font-black transition ${
                  plan.featured
                    ? 'bg-[var(--brand-accent)] text-white shadow-xl shadow-[var(--brand-accent)]/25 hover:bg-[var(--brand-accent-dark)]'
                    : 'border-2 border-[var(--brand-accent)] bg-white text-[var(--brand-accent-dark)] hover:bg-[var(--brand-accent)] hover:text-white'
                }`}
              >
                Elegir Plan
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing