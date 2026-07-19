function FAQ({ business }) {
  const section = business.sections.faq
  const faq = business.faq

  if (!faq?.items?.length) return null

  return (
    <section
      id="faq"
      className="bg-[var(--brand-background)] px-4 py-16 text-[var(--brand-dark)] sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_1fr]">
          <div>
            <p className="w-fit rounded-full bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-caramel)]">
              {section.eyebrow}
            </p>
            <h2 className="mt-5 text-5xl font-black uppercase leading-[0.94] md:text-6xl">
              {section.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--brand-coffee)]/68">
              {section.description}
            </p>
          </div>

          <div className="grid gap-3">
            {faq.items.map((item, index) => (
              <details
                key={item.question}
                className="group rounded-[2rem] bg-white p-5 shadow-lg shadow-[var(--brand-coffee)]/5 transition open:bg-[var(--brand-dark)] open:text-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="text-lg font-black uppercase">
                    <span className="mr-4 text-[var(--brand-caramel)]">
                      0{index + 1}
                    </span>
                    {item.question}
                  </span>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--brand-background)] text-3xl font-light text-[var(--brand-dark)] transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--brand-coffee)]/68 group-open:text-white/68 md:pl-12">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
