import { createWhatsAppUrl } from '../utils/whatsapp'
import SectionHeader from './SectionHeader'

function Services({ business }) {
  const section = business.sections.services

  return (
    <section
      id="tratamientos"
      className="bg-white px-4 py-20 text-[#172033] sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="grid gap-5 lg:grid-cols-[0.55fr_1.45fr]">
          <aside className="rounded-[2.5rem] bg-[#172033] p-6 text-white lg:sticky lg:top-28 lg:h-fit">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-accent)]">
              Menu clinico
            </p>
            <h3 className="mt-5 text-4xl font-black uppercase leading-none">
              Elige por necesidad, no por nombres complicados.
            </h3>
            <p className="mt-5 text-base leading-7 text-white/62">
              Cada consulta empieza con diagnostico, fotos y una explicacion
              simple del orden recomendado.
            </p>
          </aside>

          <div className="grid gap-4">
            {business.services.map((service, index) => (
              <article
                key={service.name}
                className="group grid gap-5 rounded-[2rem] border border-[#172033]/10 bg-[#fff7ec] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-2xl hover:shadow-[#172033]/10 md:grid-cols-[76px_1fr_auto]"
              >
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white text-2xl font-black text-[var(--brand-accent-dark)] transition group-hover:bg-[var(--brand-accent)] group-hover:text-[#172033]">
                  {index + 1}
                </div>

                <div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-white px-3 py-1.5 text-[11px] font-black uppercase text-[#172033]/55">
                      {service.badge}
                    </span>
                    <span className="rounded-full bg-[var(--brand-secondary)]/30 px-3 py-1.5 text-[11px] font-black uppercase text-[#172033]">
                      {service.duration}
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-black uppercase">
                    {service.name}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#172033]/62">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-col justify-between gap-5 md:items-end">
                  <p className="text-xl font-black">{service.price}</p>
                  <a
                    href={createWhatsAppUrl(
                      business.whatsapp,
                      service.whatsappMessage,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[#172033] px-5 py-3 text-center text-xs font-black uppercase text-white transition hover:bg-[var(--brand-accent)] hover:text-[#172033]"
                  >
                    Consultar
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
