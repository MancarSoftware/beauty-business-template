import { createWhatsAppUrl } from '../utils/whatsapp'
import SectionHeader from './SectionHeader'

function Pricing({ business }) {
  const section = business.sections?.pricing ?? {
    eyebrow: 'Membresías',
    title: 'Planes claros para empezar',
    description: 'Elige el plan ideal para tu objetivo.',
  }

  return (
    <section
      id="planes"
      className="bg-[#f8f5ef] px-4 py-16 text-[#101010] sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {business.pricing.map((plan) => (
            <article
              key={plan.name}
              className={`relative overflow-hidden rounded-[2.25rem] border p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10 ${
                plan.featured
                  ? 'border-[#101010] bg-[#101010] text-white'
                  : 'border-black/10 bg-white text-[#101010]'
              }`}
            >
              {plan.featured ? (
                <div className="absolute right-6 top-6 rounded-full bg-[var(--brand-accent)] px-4 py-2 text-xs font-black uppercase text-white">
                  {plan.tag}
                </div>
              ) : (
                <div className="absolute right-6 top-6 rounded-full bg-[#f8f5ef] px-4 py-2 text-xs font-black uppercase text-zinc-600">
                  {plan.tag}
                </div>
              )}

              <div className="pt-10">
                <h3
                  className={`text-2xl font-black uppercase ${
                    plan.featured ? 'text-white' : 'text-[#101010]'
                  }`}
                >
                  {plan.name}
                </h3>

                <p
                  className={`mt-4 text-sm leading-7 ${
                    plan.featured ? 'text-zinc-300' : 'text-zinc-600'
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mt-8 flex items-end gap-1">
                  <span
                    className={`font-display text-5xl font-black ${
                      plan.featured ? 'text-[var(--brand-accent)]' : 'text-[#101010]'
                    }`}
                  >
                    {plan.price}
                  </span>

                  <span
                    className={`pb-2 text-sm font-bold ${
                      plan.featured ? 'text-zinc-400' : 'text-zinc-500'
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className={`flex gap-3 text-sm ${
                      plan.featured ? 'text-zinc-200' : 'text-zinc-700'
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-black ${
                        plan.featured
                          ? 'bg-[var(--brand-accent)] text-white'
                          : 'bg-[#f8f5ef] text-[var(--brand-accent-dark)]'
                      }`}
                    >
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
                className={`mt-9 inline-flex w-full items-center justify-center rounded-full px-5 py-4 text-sm font-black uppercase transition ${
                  plan.featured
                    ? 'bg-[var(--brand-accent)] text-white hover:bg-[var(--brand-accent-dark)]'
                    : 'border border-black/10 bg-[#101010] text-white hover:bg-[var(--brand-accent-dark)]'
                }`}
              >
                Elegir plan
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing