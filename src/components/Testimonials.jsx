import SectionHeader from './SectionHeader'

function Testimonials({ business }) {
  const section = business.sections.testimonials

  return (
    <section
      id="testimonios"
      className="bg-[#fbf7f1] px-4 py-16 text-[#09231f] sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {business.testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="border border-[#09231f]/12 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_0_rgba(9,35,31,0.92)]"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-5xl font-black leading-none text-[var(--brand-accent)]">
                  "
                </span>
                <span className="bg-[#09231f] px-3 py-2 text-sm font-black text-white">
                  {testimonial.rating}
                </span>
              </div>

              <p className="mt-8 min-h-[144px] text-lg leading-8 text-[#09231f]/76">
                {testimonial.quote}
              </p>

              <div className="mt-8 border-t border-[#09231f]/12 pt-5">
                <h3 className="text-lg font-black uppercase">
                  {testimonial.name}
                </h3>
                <p className="mt-1 text-sm font-bold text-[#09231f]/52">
                  {testimonial.role}
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
