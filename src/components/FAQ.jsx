function FAQ({ business }) {
  const section = business.faq

  if (!section?.items?.length) {
    return null
  }

  return (
    <section id="faq" className="bg-[#fff8fa] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase text-[var(--brand-accent-dark)]">
            {section.eyebrow}
          </p>

          <h2 className="mt-4 font-display text-5xl font-semibold leading-tight text-[#130f12] md:text-7xl">
            {section.title}
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-700">
            {section.description}
          </p>
        </div>

        <div className="divide-y divide-[#ead8df] border-y border-[#ead8df]">
          {section.items.map((item) => (
            <details key={item.question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
                <span className="text-lg font-semibold text-[#130f12]">
                  {item.question}
                </span>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#130f12] text-xl font-light text-white transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 max-w-2xl leading-7 text-zinc-600">
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