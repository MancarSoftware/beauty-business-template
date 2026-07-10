import { createWhatsAppUrl } from '../utils/whatsapp'
import SectionHeader from './SectionHeader'

function Treatments({ business }) {
  const section = business.sections.treatments

  return (
    <section
      id="tratamientos"
      className="bg-white px-4 py-16 text-[#09231f] sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_1fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader
              eyebrow={section.eyebrow}
              title={section.title}
              description={section.description}
              align="left"
            />
          </div>

          <div className="border-y border-[#09231f]/12">
            {business.treatments.map((treatment, index) => (
              <article
                key={treatment.name}
                className="group grid gap-5 border-b border-[#09231f]/12 py-6 last:border-b-0 md:grid-cols-[90px_1fr_160px_180px]"
              >
                <p className="text-4xl font-black text-[var(--brand-accent-dark)]">
                  0{index + 1}
                </p>

                <div>
                  <h3 className="text-3xl font-black uppercase leading-none">
                    {treatment.name}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-[#09231f]/64">
                    {treatment.description}
                  </p>
                </div>

                <div className="text-sm font-black uppercase text-[#09231f]/60">
                  <p>{treatment.duration}</p>
                  <p className="mt-2 text-[var(--brand-accent-dark)]">
                    {treatment.price}
                  </p>
                </div>

                <div>
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="mb-4 h-28 w-full object-cover opacity-80 transition group-hover:opacity-100"
                  />
                  <a
                    href={createWhatsAppUrl(
                      business.whatsapp,
                      treatment.whatsappMessage,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full justify-center border border-[#09231f]/18 px-4 py-3 text-xs font-black uppercase text-[#09231f] transition hover:bg-[#09231f] hover:text-white"
                  >
                    Reservar
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

export default Treatments
