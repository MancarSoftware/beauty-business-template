import { createWhatsAppUrl } from '../utils/whatsapp'
import SectionHeader from './SectionHeader'

function Plans({ business }) {
  const section = business.sections.plans

  return (
    <section
      id="paquetes"
      className="bg-[#111827] px-4 py-20 text-white sm:px-6 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          inverse
          align="left"
        />

        <div className="grid border-t border-white/14 lg:grid-cols-3">
          {business.plans.map((item) => (
            <article
              key={item.name}
              className="flex min-h-[500px] flex-col border-b border-white/14 py-8 lg:border-r lg:px-7 last:lg:border-r-0"
            >
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-accent)]">
                {item.tag}
              </p>
              <h3 className="mt-8 text-4xl font-black uppercase leading-none">
                {item.name}
              </h3>
              <p className="mt-5 min-h-[112px] text-base leading-7 text-white/62">
                {item.description}
              </p>

              <p className="mt-8 text-6xl font-black leading-none">{item.price}</p>

              <ul className="mt-8 flex-1 space-y-3">
                {item.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm font-bold">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--brand-accent)]" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <a
                href={createWhatsAppUrl(business.whatsapp, item.whatsappMessage)}
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex justify-center bg-white px-7 py-4 text-sm font-black uppercase text-[#111827] transition hover:bg-[var(--brand-accent)]"
              >
                Agendar paquete
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Plans
