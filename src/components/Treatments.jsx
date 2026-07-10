import { createWhatsAppUrl } from '../utils/whatsapp'
import SectionHeader from './SectionHeader'

function Treatments({ business }) {
  const section = business.sections.treatments

  return (
    <section
      id="tratamientos"
      className="bg-[var(--brand-soft)] px-4 py-16 text-[#09231f] sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="grid gap-5 md:grid-cols-2">
          {business.treatments.map((treatment, index) => (
            <article
              key={treatment.name}
              className={`group grid overflow-hidden border border-[#09231f]/12 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[12px_12px_0_rgba(9,35,31,0.92)] ${
                index === 0 ? 'lg:grid-cols-[1.1fr_0.9fr] md:col-span-2' : ''
              }`}
            >
              <div className={index === 0 ? 'min-h-[390px]' : 'min-h-[300px]'}>
                <img
                  src={treatment.image}
                  alt={treatment.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-between p-6 lg:p-8">
                <div>
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="bg-[#09231f] px-4 py-2 text-xs font-black uppercase text-white">
                      {treatment.duration}
                    </span>
                    <span className="text-sm font-black uppercase text-[var(--brand-accent-dark)]">
                      {treatment.price}
                    </span>
                  </div>

                  <h3 className="text-3xl font-black uppercase leading-none md:text-4xl">
                    {treatment.name}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-8 text-[#09231f]/68">
                    {treatment.description}
                  </p>
                </div>

                <a
                  href={createWhatsAppUrl(
                    business.whatsapp,
                    treatment.whatsappMessage,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex w-fit bg-[var(--brand-accent)] px-6 py-4 text-sm font-black uppercase text-white transition hover:bg-[#09231f]"
                >
                  Reservar tratamiento
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Treatments
