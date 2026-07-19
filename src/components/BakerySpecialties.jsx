import { createWhatsAppUrl } from '../utils/whatsapp'
import SectionHeader from './SectionHeader'

function BakerySpecialties({ business }) {
  const section = business.sections.specialties

  return (
    <section
      id="especialidades"
      className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {business.specialties.map((item, index) => (
            <article
              key={item.name}
              className="group overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-[var(--brand-coffee)]/8 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--brand-coffee)]/16"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.name} de ${business.name}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-black text-[var(--brand-dark)]">
                  0{index + 1}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-black uppercase leading-tight text-[var(--brand-dark)]">
                  {item.name}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--brand-coffee)]/72">
                  {item.description}
                </p>
                <a
                  href={createWhatsAppUrl(business.whatsapp, item.whatsappMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-full bg-[var(--brand-surface)] px-5 py-3 text-xs font-black uppercase text-[var(--brand-dark)] ring-1 ring-[var(--brand-border)] transition hover:bg-[var(--brand-caramel)] hover:text-white"
                >
                  {item.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BakerySpecialties
