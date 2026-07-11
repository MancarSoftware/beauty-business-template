function FAQ({ business }) {
  const section = business.faq

  if (!section?.items?.length) return null

  return (
    <section
      id="faq"
      className="bg-white px-4 py-20 text-[#111827] sm:px-6 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#227684]">
              {section.eyebrow}
            </p>
            <h2 className="mt-5 text-5xl font-black uppercase leading-[0.94] md:text-6xl">
              {section.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-[#111827]/62">
              {section.description}
            </p>
          </div>

          <div className="border-t border-[#111827]/12">
            {section.items.map((item, index) => (
              <details
                key={item.question}
                className="group border-b border-[#111827]/12 py-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="text-lg font-black uppercase">
                    <span className="mr-4 text-[#227684]">0{index + 1}</span>
                    {item.question}
                  </span>
                  <span className="text-3xl font-light transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-5 max-w-2xl text-base leading-8 text-[#111827]/62 md:pl-12">
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
