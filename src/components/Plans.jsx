import { createWhatsAppUrl } from '../utils/whatsapp'
import SectionHeader from './SectionHeader'

function Plans({ business }) {
  const section = business.sections.plans

  return (
    <section
      id="paquetes"
      className="bg-[#172033] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          inverse
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {business.plans.map((item, index) => (
            <article
              key={item.name}
              className={`group relative min-h-[520px] overflow-hidden rounded-[2.25rem] p-6 transition duration-300 hover:-translate-y-2 ${
                item.featured
                  ? 'bg-[var(--brand-accent)] text-[#172033]'
                  : 'bg-white text-[#172033]'
              }`}
            >
              <span className="absolute right-5 top-4 text-8xl font-black opacity-10">
                {index + 1}
              </span>
              <p
                className={`w-fit rounded-full px-4 py-2 text-xs font-black uppercase ${
                  item.featured ? 'bg-white' : 'bg-[#fff7ec]'
                }`}
              >
                {item.tag}
              </p>

              <h3 className="relative mt-12 text-5xl font-black uppercase leading-none">
                {item.name}
              </h3>
              <p className="relative mt-5 min-h-[112px] text-base leading-7 text-current/65">
                {item.description}
              </p>

              <p className="relative mt-8 text-6xl font-black leading-none">
                {item.price}
              </p>

              <ul className="relative mt-8 flex-1 space-y-3">
                {item.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm font-bold">
                    <span
                      className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
                        item.featured ? 'bg-[#172033]' : 'bg-[var(--brand-accent)]'
                      }`}
                    />
                    {benefit}
                  </li>
                ))}
              </ul>

              <a
                href={createWhatsAppUrl(business.whatsapp, item.whatsappMessage)}
                target="_blank"
                rel="noreferrer"
                className={`relative mt-10 inline-flex w-full justify-center rounded-full px-7 py-4 text-sm font-black uppercase transition ${
                  item.featured
                    ? 'bg-[#172033] text-white hover:bg-white hover:text-[#172033]'
                    : 'bg-[#172033] text-white hover:bg-[var(--brand-accent)] hover:text-[#172033]'
                }`}
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
