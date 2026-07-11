import { createWhatsAppUrl } from '../utils/whatsapp'
import SectionHeader from './SectionHeader'

function Treatments({ business }) {
  const section = business.sections.treatments
  const featured = business.treatments[0]

  return (
    <section
      id="tratamientos"
      className="bg-white px-4 py-20 text-[#17342f] sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="sticky top-32 hidden lg:block">
            <div className="overflow-hidden rounded-[3rem] rounded-tr-[12rem] bg-[#fbf3ec] p-3 shadow-2xl shadow-[#17342f]/10">
              <img
                src={featured.image}
                alt={featured.name}
                className="h-[620px] w-full rounded-[2.5rem] rounded-tr-[10rem] object-cover"
              />
            </div>
          </div>

          <div className="grid gap-5">
            {business.treatments.map((treatment, index) => (
              <article
                key={treatment.name}
                className="group rounded-[2.5rem] bg-[#fbf3ec] p-5 shadow-lg shadow-[#17342f]/6 transition duration-300 hover:-translate-y-1 hover:bg-[#17342f] hover:text-white hover:shadow-2xl hover:shadow-[#17342f]/14"
              >
                <div className="grid gap-5 md:grid-cols-[90px_1fr_auto] md:items-center">
                  <p className="font-display text-5xl italic text-[var(--brand-accent-dark)] group-hover:text-[#f1c8b9]">
                    0{index + 1}
                  </p>

                  <div>
                    <h3 className="font-display text-3xl leading-tight md:text-4xl">
                      {treatment.name}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#17342f]/62 group-hover:text-white/68">
                      {treatment.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 md:justify-end">
                    <span className="rounded-full bg-white px-4 py-2 text-xs font-black uppercase text-[#17342f]">
                      {treatment.duration}
                    </span>
                    <span className="rounded-full bg-[#f1c8b9] px-4 py-2 text-xs font-black uppercase text-[#17342f]">
                      {treatment.price}
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex justify-end">
                  <a
                    href={createWhatsAppUrl(
                      business.whatsapp,
                      treatment.whatsappMessage,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white px-6 py-3 text-xs font-black uppercase text-[#09231f] shadow-lg shadow-[#17342f]/8 transition group-hover:text-[#09231f] hover:bg-[var(--brand-accent)] hover:text-[#09231f]"
                  >
                    Reservar ritual
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
