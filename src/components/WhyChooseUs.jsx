import SectionHeader from './SectionHeader'

function WhyChooseUs({ business }) {
  const section = business.sections.benefits

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {business.benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="rounded-[1.75rem] bg-white p-6 shadow-lg shadow-[var(--brand-coffee)]/7 ring-1 ring-[var(--brand-border)] transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--brand-background)] text-sm font-black text-[var(--brand-caramel)]">
                0{index + 1}
              </span>
              <h3 className="mt-6 text-xl font-black uppercase">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--brand-coffee)]/70">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
