import { createWhatsAppUrl } from '../utils/whatsapp'
import SectionHeader from './SectionHeader'

function Services({ business }) {
  const section = business.sections.services

  return (
    <section
      id="tratamientos"
      className="bg-[#f4fbff] px-4 py-20 text-[#08111f] sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {business.services.map((service, index) => (
            <article
              key={service.name}
              className="motion-rise group relative min-h-[390px] overflow-hidden rounded-[2.5rem] bg-white p-6 shadow-xl shadow-[#08111f]/7 transition duration-500 hover:-translate-y-3 hover:bg-[#08111f] hover:text-white hover:shadow-2xl hover:shadow-[#08111f]/20"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[var(--brand-accent)]/25 transition duration-500 group-hover:scale-[2.3] group-hover:bg-[var(--brand-accent)]/18" />
              <div className="absolute bottom-5 right-5 text-8xl font-black text-[#08111f]/5 transition group-hover:text-white/5">
                0{index + 1}
              </div>

              <div className="relative flex items-start justify-between gap-5">
                <span className="rounded-full bg-[#eefcff] px-4 py-2 text-xs font-black uppercase text-[#0c8b91] transition group-hover:bg-white group-hover:text-[#08111f]">
                  {service.badge}
                </span>
                <span className="text-sm font-black uppercase text-[#08111f]/42 transition group-hover:text-white/55">
                  {service.duration}
                </span>
              </div>

              <h3 className="relative mt-12 text-3xl font-black uppercase leading-tight">
                {service.name}
              </h3>
              <p className="relative mt-5 text-base leading-7 text-[#08111f]/62 transition group-hover:text-white/68">
                {service.description}
              </p>

              <div className="relative mt-8 flex items-center justify-between gap-4">
                <p className="text-xl font-black">{service.price}</p>
                <a
                  href={createWhatsAppUrl(
                    business.whatsapp,
                    service.whatsappMessage,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#08111f] px-5 py-3 text-center text-xs font-black uppercase text-white transition group-hover:bg-white group-hover:text-[#08111f] hover:bg-[var(--brand-accent)] hover:text-[#08111f]"
                >
                  Consultar
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
