import { createWhatsAppUrl } from '../utils/whatsapp'
import SectionHeader from './SectionHeader'

function Services({ business }) {
  const section = business.sections.services

  return (
    <section
      id="tratamientos"
      className="bg-white px-4 py-20 text-[#111827] sm:px-6 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          align="left"
        />

        <div className="border-t border-[#111827]/12">
          {business.services.map((service, index) => (
            <article
              key={service.name}
              className="group grid gap-5 border-b border-[#111827]/12 py-7 transition hover:bg-[#fbfaf6] md:grid-cols-[80px_1fr_180px_170px]"
            >
              <p className="text-2xl font-black text-[#111827]/30 transition group-hover:text-[#227684]">
                0{index + 1}
              </p>

              <div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-[#227684]">
                    {service.badge}
                  </span>
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-[#111827]/35">
                    {service.duration}
                  </span>
                </div>
                <h3 className="mt-3 text-2xl font-black uppercase md:text-3xl">
                  {service.name}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#111827]/62">
                  {service.description}
                </p>
              </div>

              <p className="text-xl font-black md:text-right">{service.price}</p>

              <a
                href={createWhatsAppUrl(
                  business.whatsapp,
                  service.whatsappMessage,
                )}
                target="_blank"
                rel="noreferrer"
                className="h-fit bg-[#111827] px-5 py-3 text-center text-xs font-black uppercase text-white transition hover:bg-[var(--brand-accent)] hover:text-[#111827]"
              >
                Consultar
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
