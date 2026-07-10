function Testimonials({ business }) {
  const section = business.sections.testimonials
  const featured = business.testimonials[0]
  const rest = business.testimonials.slice(1)

  return (
    <section
      id="testimonios"
      className="bg-[#e8ddd0] px-4 py-16 text-[#09231f] sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-black uppercase text-[var(--brand-accent-dark)]">
              {section.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.98] md:text-6xl">
              {section.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#09231f]/64">
              {section.description}
            </p>
          </div>

          <div className="border border-[#09231f] bg-[#09231f] p-6 text-white sm:p-8">
            <p className="text-7xl font-black leading-none text-[var(--brand-accent)]">
              "
            </p>
            <p className="mt-6 text-2xl font-semibold leading-10">
              {featured.quote}
            </p>
            <div className="mt-8 flex items-end justify-between gap-4 border-t border-white/12 pt-5">
              <div>
                <h3 className="text-lg font-black uppercase">{featured.name}</h3>
                <p className="mt-1 text-sm text-white/55">{featured.role}</p>
              </div>
              <p className="bg-white px-3 py-2 text-sm font-black text-[#09231f]">
                {featured.rating}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {rest.map((testimonial) => (
            <article key={testimonial.name} className="border border-[#09231f]/14 bg-white p-6">
              <p className="text-lg leading-8 text-[#09231f]/72">
                {testimonial.quote}
              </p>
              <div className="mt-6 border-t border-[#09231f]/12 pt-4">
                <h3 className="text-base font-black uppercase">
                  {testimonial.name}
                </h3>
                <p className="mt-1 text-sm font-bold text-[#09231f]/48">
                  {testimonial.role} · {testimonial.rating}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
