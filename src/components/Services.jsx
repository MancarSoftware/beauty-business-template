import { createWhatsAppUrl } from '../utils/whatsapp'
import SectionHeader from './SectionHeader'

function Services({ business }) {
  const section = business.sections.services

  return (
    <section
      id="tratamientos"
      className="bg-[#f6fdff] px-4 py-20 text-[#061a2b] sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="grid border border-[#061a2b]/10 bg-white shadow-2xl shadow-[#061a2b]/8 md:grid-cols-2 xl:grid-cols-3">
          {business.services.map((service, index) => (
            <article
              key={service.name}
              className="group relative min-h-[360px] overflow-hidden border-b border-r border-[#061a2b]/10 p-6 transition duration-300 hover:bg-[#061a2b] hover:text-white"
            >
              <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[var(--brand-accent)]/20 transition duration-500 group-hover:scale-[2.4] group-hover:bg-[var(--brand-accent)]/16" />

              <div className="relative flex items-start justify-between gap-5">
                <span className="text-5xl font-black text-[#087f83] transition group-hover:text-[var(--brand-accent)]">
                  0{index + 1}
                </span>
                <span className="rounded-full bg-[#eefbff] px-4 py-2 text-xs font-black uppercase text-[#087f83] transition group-hover:bg-white group-hover:text-[#061a2b]">
                  {service.badge}
                </span>
              </div>

              <h3 className="relative mt-10 text-3xl font-black uppercase leading-tight">
                {service.name}
              </h3>
              <p className="relative mt-5 text-base leading-7 text-[#061a2b]/62 transition group-hover:text-white/70">
                {service.description}
              </p>

              <div className="relative mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-[#eefbff] px-4 py-2 text-xs font-black uppercase text-[#061a2b]">
                  {service.duration}
                </span>
                <span className="rounded-full bg-[#fff4cc] px-4 py-2 text-xs font-black uppercase text-[#061a2b]">
                  {service.price}
                </span>
              </div>

              <a
                href={createWhatsAppUrl(
                  business.whatsapp,
                  service.whatsappMessage,
                )}
                target="_blank"
                rel="noreferrer"
                className="relative mt-8 inline-flex rounded-full bg-[#061a2b] px-6 py-3 text-xs font-black uppercase text-white transition group-hover:bg-white group-hover:text-[#061a2b] hover:bg-[var(--brand-accent)] hover:text-[#061a2b]"
              >
                Consultar tratamiento
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
