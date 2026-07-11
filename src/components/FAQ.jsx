function FAQ({ business }) {
  const section = business.faq

  if (!section?.items?.length) return null

  return (
    <section
      id="faq"
      className="bg-white px-4 py-20 text-[#172033] sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_1fr]">
          <div>
            <p className="w-fit rounded-full bg-[#fff7ec] px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-accent-dark)]">
              {section.eyebrow}
            </p>
            <h2 className="mt-6 text-5xl font-black uppercase leading-[0.96] md:text-6xl">
              {section.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-[#172033]/62">
              {section.description}
            </p>
          </div>

          <div className="grid gap-3">
            {section.items.map((item, index) => (
              <details
                key={item.question}
                className="group rounded-[2rem] bg-[#fff7ec] p-5 transition open:bg-[#172033] open:text-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="text-lg font-black uppercase">
                    <span className="mr-4 text-[var(--brand-accent-dark)] group-open:text-[var(--brand-accent)]">
                      0{index + 1}
                    </span>
                    {item.question}
                  </span>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-xl font-light text-[#172033] transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-5 max-w-2xl text-base leading-8 text-[#172033]/62 group-open:text-white/68 md:pl-12">
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
