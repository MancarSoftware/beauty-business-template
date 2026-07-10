import { createWhatsAppUrl } from '../utils/whatsapp'
import SectionHeader from './SectionHeader'

function Packages({ business }) {
  const section = business.sections.packages

  return (
    <section
      id="paquetes"
      className="bg-[#fff8f1] px-4 py-16 text-[#09231f] sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {business.packages.map((item) => (
            <article
              key={item.name}
              className={`flex min-h-[560px] flex-col rounded-[3rem] p-6 shadow-xl transition duration-300 hover:-translate-y-2 ${
                item.featured
                  ? 'bg-[#09231f] text-white shadow-[#09231f]/20'
                  : 'bg-white text-[#09231f] shadow-[#09231f]/8'
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <p
                  className={`rounded-full px-4 py-2 text-xs font-black uppercase ${
                    item.featured
                      ? 'bg-[var(--brand-accent)] text-white'
                      : 'bg-[#f2e4d8] text-[var(--brand-accent-dark)]'
                  }`}
                >
                  {item.tag}
                </p>
                <p
                  className={`text-sm font-black uppercase ${
                    item.featured ? 'text-white/50' : 'text-[#09231f]/45'
                  }`}
                >
                  {item.duration}
                </p>
              </div>

              <h3 className="mt-10 text-4xl font-black uppercase leading-none">
                {item.name}
              </h3>
              <p
                className={`mt-5 min-h-[112px] text-base leading-7 ${
                  item.featured ? 'text-white/68' : 'text-[#09231f]/64'
                }`}
              >
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
                className={`mt-10 inline-flex justify-center rounded-full px-7 py-4 text-sm font-black uppercase transition ${
                  item.featured
                    ? 'bg-white text-[#09231f] hover:bg-[var(--brand-accent)] hover:text-white'
                    : 'bg-[#09231f] text-white hover:bg-[var(--brand-accent)]'
                }`}
              >
                Reservar
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages
