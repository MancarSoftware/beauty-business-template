function FAQ({ business }) {
  const section = business.faq

  if (!section?.items?.length) {
    return null
  }

  return (
    <section
      id="faq"
      className="bg-white px-4 py-16 text-[#101010] sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-5xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--brand-accent-dark)]">
            {section.eyebrow}
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl font-display text-4xl font-black uppercase leading-tight text-[#101010] md:text-5xl">
            {section.title}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-zinc-600 md:text-lg">
            {section.description}
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
          {section.items.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-black/10 bg-[#fbfaf7] p-5 shadow-sm transition open:bg-white"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
                <span className="text-sm font-black text-[#101010]">
                  {item.question}
                </span>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#101010] text-lg font-light text-white transition group-open:rotate-45 group-open:bg-[var(--brand-accent)]">
                  +
                </span>
              </summary>

              <p className="mt-4 text-sm leading-7 text-zinc-600">
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