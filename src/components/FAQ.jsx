function FAQ({ business }) {
  const section = business.faq

  if (!section?.items?.length) return null

  return (
    <section
      id="faq"
      className="bg-[#fbf7f1] px-4 py-16 text-[#09231f] sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_1fr]">
          <div>
            <p className="text-xs font-black uppercase text-[var(--brand-accent-dark)]">
              {section.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.98] md:text-6xl">
              {section.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-[#09231f]/62">
              {section.description}
            </p>
          </div>

          <div className="border-y border-[#09231f]/12">
            {section.items.map((item, index) => (
              <details
                key={item.question}
                className="group border-b border-[#09231f]/12 py-5 last:border-b-0"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="text-lg font-black uppercase">
                    <span className="mr-4 text-[var(--brand-accent-dark)]">
                      0{index + 1}
                    </span>
                    {item.question}
                  </span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center border border-[#09231f]/18 text-xl font-light transition group-open:rotate-45 group-open:bg-[#09231f] group-open:text-white">
                    +
                  </span>
                </summary>

                <p className="mt-5 max-w-2xl pl-0 text-base leading-8 text-[#09231f]/62 md:pl-12">
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
