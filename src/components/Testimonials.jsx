function Testimonials({ business }) {
  const section = business.sections.testimonials

  return (
    <section className="bg-[#fbfaf6] px-4 py-20 text-[#111827] sm:px-6 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#227684]">
            {section.eyebrow}
          </p>
          <h2 className="mt-5 text-5xl font-black uppercase leading-[0.94] md:text-7xl">
            {section.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#111827]/62">
            {section.description}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="border-y border-[#111827]/12 py-10">
            <p className="text-4xl font-black leading-tight md:text-6xl">
              "{business.testimonials[0].quote}"
            </p>
            <div className="mt-10 flex items-center justify-between gap-4">
              <div>
                <p className="font-black uppercase">
                  {business.testimonials[0].name}
                </p>
                <p className="mt-1 text-sm text-[#111827]/50">
                  {business.testimonials[0].role}
                </p>
              </div>
              <span className="text-2xl font-black text-[#227684]">
                {business.testimonials[0].rating}
              </span>
            </div>
          </article>

          <div className="grid gap-4">
            {business.testimonials.slice(1).map((item) => (
              <article
                key={item.name}
                className="border border-[#111827]/12 bg-white p-6"
              >
                <p className="text-lg leading-8 text-[#111827]/72">
                  "{item.quote}"
                </p>
                <div className="mt-6 border-t border-[#111827]/10 pt-5">
                  <p className="font-black uppercase">{item.name}</p>
                  <p className="mt-1 text-sm text-[#111827]/50">{item.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
