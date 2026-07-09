function FAQ({ business }) {
  const section = business.faq

  if (!section?.items?.length) {
    return null
  }

  return (
    <section id="faq" className="bg-[#fff8fa] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase text-[var(--brand-accent-dark)]">
            {section.eyebrow}
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight text-[#130f12] md:text-5xl lg:text-6xl">
            {section.title}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-zinc-600 md:text-lg">
            {section.description}
          </p>
        </div>

        <div className="mx-auto max-w-4xl divide-y divide-[#ead8df] border-y border-[#ead8df]">
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