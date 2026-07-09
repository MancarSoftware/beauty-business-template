import { createWhatsAppUrl } from '../utils/whatsapp'
import SectionHeader from './SectionHeader'

function Pricing({ business }) {
  const section = business.sections?.pricing ?? {
    eyebrow: 'Planes',
    title: 'Planes y membresias',
    description: 'Elige el plan ideal para empezar.',
  }

  return (
    <section
      id="planes"
      className="bg-white px-4 py-16 text-[#101010] sm:px-6 lg:px-8 lg:py-20"
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
              className={`relative rounded-[2rem] border bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 ${
                plan.featured
                  ? 'border-[var(--brand-accent)] ring-2 ring-[var(--brand-accent)]'
                  : 'border-zinc-200'
              }`}
            >
              {plan.featured ? (
                <div className="absolute left-6 right-6 top-0 -translate-y-1/2 rounded-full bg-[var(--brand-accent)] px-4 py-2 text-center text-xs font-black uppercase text-white">
                  {plan.tag}
                </div>
              ) : null}

              <div className="text-center">
                <p className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff7e8] text-2xl font-black text-[var(--brand-accent-dark)]">
                  {plan.icon}
                </p>

                <h3 className="mt-5 text-xl font-black uppercase text-[#101010]">
                  {plan.name}
                </h3>

                <div className="mt-4 flex items-end justify-center gap-1">
                  <span className="font-display text-5xl font-black text-[#101010]">
                    {plan.price}
                  </span>
                  <span className="pb-2 text-sm font-bold text-zinc-500">
                    {plan.period}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-zinc-600">
                  {plan.description}
                </p>
              </div>

              <ul className="mt-7 space-y-3">
                {plan.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm text-zinc-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fff7e8] text-xs font-black text-[var(--brand-accent-dark)]">
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
                    `Hola ${business.name}, quiero informacion sobre el plan ${plan.name}.`,
                )}
                target="_blank"
                rel="noreferrer"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-4 text-sm font-black uppercase transition ${
                  plan.featured
                    ? 'bg-[var(--brand-accent)] text-white hover:bg-[var(--brand-accent-dark)]'
                    : 'border border-[var(--brand-accent)] text-[#101010] hover:bg-[var(--brand-accent)] hover:text-white'
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
