import { createWhatsAppUrl } from '../utils/whatsapp'
import SectionHeader from './SectionHeader'

function Packages({ business }) {
  const section = business.sections.packages

  return (
    <section
      id="paquetes"
      className="bg-[#fbf7f1] px-4 py-16 text-[#09231f] sm:px-6 lg:px-8 lg:py-24"
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
              className={`flex min-h-[580px] flex-col border p-6 transition duration-300 hover:-translate-y-1 ${
                item.featured
                  ? 'border-[#09231f] bg-[#09231f] text-white shadow-[12px_12px_0_var(--brand-accent)]'
                  : 'border-[#09231f]/12 bg-white hover:shadow-[12px_12px_0_rgba(9,35,31,0.92)]'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className={`px-4 py-2 text-xs font-black uppercase ${
                    item.featured
                      ? 'bg-[var(--brand-accent)] text-white'
                      : 'bg-[#09231f] text-white'
                  }`}
                >
                  {item.tag}
                </span>
                <span
                  className={`text-sm font-black uppercase ${
                    item.featured ? 'text-white/48' : 'text-[#09231f]/48'
                  }`}
                >
                  {item.duration}
                </span>
              </div>

              <h3 className="mt-10 text-4xl font-black uppercase leading-none">
                {item.name}
              </h3>
              <p
                className={`mt-5 min-h-[112px] text-base leading-7 ${
                  item.featured ? 'text-white/68' : 'text-[#09231f]/68'
                }`}
              >
                {item.description}
              </p>

              <div className="my-8 border-y border-current/12 py-8">
                <p className="text-6xl font-black leading-none">{item.price}</p>
              </div>

              <ul className="flex-1 space-y-4">
                {item.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm font-bold">
                    <span className="mt-1.5 h-2.5 w-2.5 shrink-0 bg-[var(--brand-accent)]" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <a
                href={createWhatsAppUrl(business.whatsapp, item.whatsappMessage)}
                target="_blank"
                rel="noreferrer"
                className={`mt-10 inline-flex justify-center px-7 py-4 text-sm font-black uppercase transition ${
                  item.featured
                    ? 'bg-[var(--brand-accent)] text-white hover:bg-white hover:text-[#09231f]'
                    : 'bg-[#09231f] text-white hover:bg-[var(--brand-accent)]'
                }`}
              >
                Reservar paquete
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages
