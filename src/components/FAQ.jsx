function FAQ({ business }) {
  const section = business.faq

  if (!section?.items?.length) {
    return null
  }

  return (
    <section
      id="faq"
      className="bg-[#09231f] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase text-[var(--brand-accent)]">
              {section.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none md:text-6xl">
              {section.title}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-white/62">
            {section.description}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {section.items.map((item, index) => (
            <details
              key={item.question}
              className="group border border-white/12 bg-white/[0.04] p-5 transition open:border-[var(--brand-accent)] open:bg-white open:text-[#09231f]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                <span className="text-base font-black uppercase">
                  <span className="mr-3 text-[var(--brand-accent)]">
                    0{index + 1}
                  </span>
                  {item.question}
                </span>

                <span className="grid h-9 w-9 shrink-0 place-items-center border border-white/15 text-xl font-light transition group-open:rotate-45 group-open:border-[#09231f]">
                  +
                </span>
              </summary>

              <p className="mt-5 text-sm leading-7 text-white/62 group-open:text-[#09231f]/70">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
