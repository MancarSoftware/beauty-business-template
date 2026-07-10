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
        <div className="grid gap-10 lg:grid-cols-[0.45fr_1fr]">
          <div>
            <SectionHeader
              eyebrow={section.eyebrow}
              title={section.title}
              description={section.description}
              align="left"
            />
          </div>

          <div className="border border-[#09231f]/14 bg-white">
            {business.packages.map((item) => (
              <article
                key={item.name}
                className={`grid gap-6 border-b border-[#09231f]/12 p-6 last:border-b-0 lg:grid-cols-[1fr_130px_1fr_170px] lg:items-center ${
                  item.featured ? 'bg-[#09231f] text-white' : ''
                }`}
              >
                <div>
                  <p
                    className={`mb-3 w-fit px-3 py-2 text-xs font-black uppercase ${
                      item.featured
                        ? 'bg-[var(--brand-accent)] text-white'
                        : 'bg-[#f1e6dc] text-[var(--brand-accent-dark)]'
                    }`}
                  >
                    {item.tag}
                  </p>
                  <h3 className="text-3xl font-black uppercase leading-none">
                    {item.name}
                  </h3>
                  <p
                    className={`mt-4 text-sm leading-7 ${
                      item.featured ? 'text-white/68' : 'text-[#09231f]/64'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                <div>
                  <p className="text-5xl font-black leading-none">{item.price}</p>
                  <p
                    className={`mt-2 text-xs font-black uppercase ${
                      item.featured ? 'text-white/48' : 'text-[#09231f]/45'
                    }`}
                  >
                    {item.duration}
                  </p>
                </div>

                <ul className="grid gap-2">
                  {item.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3 text-sm font-bold">
                      <span className="mt-1.5 h-2 w-2 shrink-0 bg-[var(--brand-accent)]" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <a
                  href={createWhatsAppUrl(business.whatsapp, item.whatsappMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex justify-center px-5 py-4 text-xs font-black uppercase transition ${
                    item.featured
                      ? 'bg-white text-[#09231f] hover:bg-[var(--brand-accent)] hover:text-white'
                      : 'border border-[#09231f]/18 text-[#09231f] hover:bg-[#09231f] hover:text-white'
                  }`}
                >
                  Reservar
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Packages
