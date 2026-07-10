function Testimonials({ business }) {
  const section = business.sections.testimonials
  const featured = business.testimonials[0]
  const rest = business.testimonials.slice(1)

  return (
    <section
      id="testimonios"
      className="bg-[#f2e4d8] px-4 py-16 text-[#09231f] sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="w-fit rounded-full bg-white/70 px-5 py-2 text-xs font-black uppercase text-[var(--brand-accent-dark)]">
              {section.eyebrow}
            </p>
            <h2 className="mt-5 text-4xl font-black uppercase leading-[0.98] md:text-6xl">
              {section.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#09231f]/64">
              {section.description}
            </p>
          </div>

          <div className="rounded-[3rem] bg-[#09231f] p-6 text-white shadow-2xl shadow-[#09231f]/18 sm:p-8">
            <p className="font-display text-8xl italic leading-none text-[var(--brand-accent)]">
              "
            </p>
            <p className="mt-4 text-2xl font-semibold leading-10">
              {featured.quote}
            </p>
            <div className="mt-8 flex items-end justify-between gap-4 rounded-[2rem] bg-white/8 p-5">
              <div>
                <h3 className="text-lg font-black uppercase">{featured.name}</h3>
                <p className="mt-1 text-sm text-white/55">{featured.role}</p>
              </div>
              <p className="rounded-full bg-white px-4 py-2 text-sm font-black text-[#09231f]">
                {featured.rating}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {rest.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[2.5rem] bg-white p-6 shadow-xl shadow-[#09231f]/8"
            >
              <p className="text-lg leading-8 text-[#09231f]/72">
                {testimonial.quote}
              </p>
              <div className="mt-6 rounded-full bg-[#fff8f1] px-5 py-4">
                <h3 className="text-base font-black uppercase">
                  {testimonial.name}
                </h3>
                <p className="mt-1 text-sm font-bold text-[#09231f]/48">
                  {testimonial.role} - {testimonial.rating}
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
