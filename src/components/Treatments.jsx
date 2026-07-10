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
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {business.treatments.map((treatment, index) => (
            <article
              key={treatment.name}
              className="group rounded-[2.5rem] bg-[#fff8f1] p-4 shadow-xl shadow-[#09231f]/8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#09231f]/14"
            >
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src={treatment.image}
                  alt={treatment.name}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-3">
                <div className="mt-2 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-white px-3 py-2 text-xs font-black text-[var(--brand-accent-dark)] shadow-sm">
                    0{index + 1}
                  </span>
                  <span className="rounded-full bg-[#f2e4d8] px-3 py-2 text-xs font-black uppercase text-[#09231f]/58">
                    {treatment.duration}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-black uppercase leading-tight">
                  {treatment.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#09231f]/62">
                  {treatment.description}
                </p>
                <p className="mt-4 text-sm font-black uppercase text-[var(--brand-accent-dark)]">
                  {treatment.price}
                </p>

                <a
                  href={createWhatsAppUrl(
                    business.whatsapp,
                    treatment.whatsappMessage,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full justify-center rounded-full bg-white px-5 py-3 text-xs font-black uppercase text-[#09231f] shadow-lg shadow-[#09231f]/8 transition hover:bg-[#09231f] hover:text-white"
                >
                  Reservar
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
