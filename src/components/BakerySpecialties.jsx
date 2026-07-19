import { createWhatsAppUrl } from '../utils/whatsapp'

function BakerySpecialties({ business }) {
  const section = business.sections.specialties

  return (
    <section
      id="especialidades"
      className="bg-[#fffaf3] px-4 py-16 sm:px-8 lg:px-10 lg:py-20"
    >
      <div className="mx-auto grid max-w-[90rem] gap-6 lg:grid-cols-[10rem_1fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-caramel)]">
            {section.eyebrow}
          </p>
          <h2 className="font-brand-serif mt-4 text-4xl leading-[1.02] tracking-[-0.05em] text-[var(--brand-dark)] sm:text-[2.8rem]">
            {section.title}
          </h2>
          <span className="mt-8 block h-px w-20 bg-[var(--brand-caramel)]" />
        </div>

        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {business.specialties.map((item, index) => (
            <article
              key={item.name}
              className="group rounded-[0.85rem] bg-[#f2ecdf] p-3 shadow-sm transition duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-[var(--brand-coffee)]/12"
            >
              <p className="font-brand-serif text-3xl leading-none text-[var(--brand-caramel)]">
                {String(index + 1).padStart(2, '0')}
              </p>

              <div className="mt-2 h-28 overflow-hidden rounded-[0.65rem]">
                <img
                  src={item.image}
                  alt={`${item.name} de ${business.name}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div className="mt-5">
                <h3 className="min-h-12 text-center text-sm font-black leading-tight text-[var(--brand-dark)] xl:text-[0.95rem]">
                  {item.name}
                </h3>
                <a
                  href={createWhatsAppUrl(business.whatsapp, item.whatsappMessage)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Consultar ${item.name}`}
                  className="mx-auto mt-4 grid h-9 w-9 place-items-center rounded-full border border-[var(--brand-caramel)] text-lg text-[var(--brand-caramel)] transition hover:bg-[var(--brand-caramel)] hover:text-white"
                >
                  ›
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
