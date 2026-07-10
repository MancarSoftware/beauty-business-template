import { createWhatsAppUrl } from '../utils/whatsapp'
import SectionHeader from './SectionHeader'

function Pricing({ business }) {
  const section = business.sections?.pricing

  return (
    <section
      id="planes"
      className="bg-[#f4f1e8] px-4 py-16 text-[#050505] sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {business.pricing.map((plan) => (
            <article
              key={plan.name}
              className={`group relative flex min-h-[620px] flex-col border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[12px_12px_0_#050505] ${
                plan.featured
                  ? 'border-[#050505] bg-[#050505] text-white'
                  : 'border-[#050505]/14 bg-white text-[#050505]'
              }`}
            >
              <div className="flex items-start justify-between gap-5">
                <span
                  className={`px-4 py-2 text-xs font-black uppercase ${
                    plan.featured
                      ? 'bg-[var(--brand-accent)] text-[#050505]'
                      : 'bg-[#050505] text-white'
                  }`}
                >
                  {plan.tag}
                </span>
                <span className={plan.featured ? 'text-white/45' : 'text-zinc-500'}>
                  {plan.duration}
                </span>
              </div>

              <h3 className="mt-10 text-4xl font-black uppercase leading-none">
                {plan.name}
              </h3>
              <p
                className={`mt-4 min-h-[84px] text-base leading-7 ${
                  plan.featured ? 'text-white/68' : 'text-zinc-600'
                }`}
              >
                {plan.description}
              </p>

              <div className="my-10 border-y border-current/10 py-8">
                <div className="flex items-end gap-2">
                  <span className="text-7xl font-black leading-none">
                    {plan.price}
                  </span>
                  <span
                    className={`mb-2 text-sm font-black uppercase ${
                      plan.featured ? 'text-white/45' : 'text-zinc-500'
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                <p className="mt-3 text-sm font-black uppercase text-[var(--brand-punch)]">
                  {plan.equivalent}
                </p>
              </div>

              <ul className="flex-1 space-y-4">
                {plan.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm font-bold">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 bg-[var(--brand-accent)]" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <a
                href={createWhatsAppUrl(
                  business.whatsapp,
                  plan.whatsappMessage,
                )}
                target="_blank"
                rel="noreferrer"
                className={`mt-10 inline-flex justify-center px-7 py-4 text-sm font-black uppercase transition ${
                  plan.featured
                    ? 'bg-[var(--brand-accent)] !text-[#050505] hover:bg-white hover:!text-[#050505]'
                    : 'bg-[#050505] !text-white hover:bg-[var(--brand-accent)] hover:!text-[#050505]'
                }`}
              >
                Consultar plan
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
