import SectionHeader from './SectionHeader'

function Testimonials({ business }) {
  const section = business.sections?.testimonials ?? {
    eyebrow: 'Testimonios',
    title: 'Clientes que vuelven por el servicio',
    description: 'Opiniones de clientes sobre la atención y el resultado.',
  }
  const [featured, ...rest] = business.testimonials

  return (
    <section id="testimonios" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <article className="border-y border-[#ead8df] py-10 text-center">
          <p className="mx-auto max-w-5xl font-display text-4xl font-semibold leading-tight text-[#130f12] md:text-6xl">
            "{featured.quote}"
          </p>
          <div className="mt-8">
            <h3 className="font-semibold text-[#130f12]">{featured.name}</h3>
            <p className="mt-1 text-sm text-zinc-500">{featured.role}</p>
          </div>
        </article>

        <div className="grid border-b border-[#ead8df] md:grid-cols-2">
          {rest.map((testimonial) => (
            <article
              key={testimonial.name}
              className="border-t border-[#ead8df] py-7 md:border-r md:px-8 md:even:border-r-0"
            >
              <p className="text-lg leading-8 text-zinc-700">
                "{testimonial.quote}"
              </p>
              <div className="mt-6 flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-[#130f12]">
                    {testimonial.name}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500">
                    {testimonial.role}
                  </p>
                </div>
                <span className="rounded-full bg-[#f5e6ec] px-3 py-2 text-sm font-bold text-[var(--brand-accent-dark)]">
                  5.0
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
