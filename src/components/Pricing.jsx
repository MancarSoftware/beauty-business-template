import { createWhatsAppUrl } from '../utils/whatsapp'
import SectionHeader from './SectionHeader'

function Pricing({ business }) {
  const section = business.sections?.pricing ?? {
    eyebrow: 'Membresías',
    title: 'Elige cómo quieres pertenecer',
    description: 'Tres formas de entrenar según el nivel de acompañamiento que buscas.',
  }

  return (
    <section
      id="planes"
      className="bg-[#ede7dc] px-4 py-16 text-[#101010] sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="overflow-hidden rounded-[2.5rem] border border-black/10 bg-white shadow-2xl shadow-black/10">
          {business.pricing.map((plan, index) => (
            <article
              key={plan.name}
              className={`grid gap-8 border-b border-black/10 p-7 last:border-b-0 lg:grid-cols-[0.18fr_0.32fr_0.28fr_0.22fr] lg:items-center lg:p-9 ${
                plan.featured ? 'bg-[#101010] text-white' : 'bg-white text-[#101010]'
              }`}
            >
              <div>
                <p
                  className={`font-display text-5xl font-black ${
                    plan.featured ? 'text-[var(--brand-accent)]' : 'text-zinc-300'
                  }`}
                >
                  0{index + 1}
                </p>
              </div>

              <div>
                <p
                  className={`mb-3 inline-flex rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.18em] ${
                    plan.featured
                      ? 'bg-[var(--brand-accent)] text-white'
                      : 'bg-[#ede7dc] text-[var(--brand-accent-dark)]'
                  }`}
                >
                  {plan.tag}
                </p>

                <h3
                  className={`font-display text-4xl font-black uppercase leading-tight ${
                    plan.featured ? 'text-white' : 'text-[#101010]'
                  }`}
                >
                  {plan.name}
                </h3>

                <p
                  className={`mt-4 max-w-md text-sm leading-7 ${
                    plan.featured ? 'text-zinc-300' : 'text-zinc-600'
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3">
                {plan.benefits.slice(0, 4).map((benefit) => (
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
                          : 'bg-[#ede7dc] text-[var(--brand-accent-dark)]'
                      }`}
                    >
                      ✓
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="lg:text-right">
                <div className="flex items-end gap-1 lg:justify-end">
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

                <a
                  href={createWhatsAppUrl(
                    business.whatsapp,
                    plan.whatsappMessage ??
                      `Hola ${business.name}, quiero información sobre ${plan.name}.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-4 text-sm font-black uppercase transition lg:w-auto ${
                    plan.featured
                      ? 'bg-[var(--brand-accent)] text-white hover:bg-[var(--brand-accent-dark)]'
                      : 'bg-[#101010] text-white hover:bg-[var(--brand-accent-dark)]'
                  }`}
                >
                  Elegir membresía
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing