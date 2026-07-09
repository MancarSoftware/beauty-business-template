import SectionHeader from './SectionHeader'

function Testimonials({ business }) {
  const section = business.sections?.testimonials ?? {
    eyebrow: 'Testimonios',
    title: 'Clientes que vuelven por el servicio',
    description: 'Opiniones de clientes sobre la atención y el resultado.',
  }
  const [featured, ...rest] = business.testimonials

  return (
    <section
      id="testimonios"
      className="bg-[#130f12] px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          inverse
        />

        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-lg border border-white/10 bg-white p-7 text-[#130f12] shadow-2xl shadow-black/30 md:p-10">
            <div className="flex items-start justify-between gap-6">
              <p className="text-6xl font-semibold leading-none text-[var(--brand-accent-dark)]">
                "
              </p>
              <span className="rounded-md bg-[#f5e6ec] px-3 py-2 text-sm font-bold text-[var(--brand-accent-dark)]">
                5.0
              </span>
            </div>
            <p className="mt-6 max-w-3xl text-2xl font-semibold leading-relaxed md:text-3xl">
              {featured.quote}
            </p>
            <div className="mt-10 border-t border-[#ead8df] pt-6">
              <h3 className="text-lg font-semibold">{featured.name}</h3>
              <p className="mt-1 text-sm text-zinc-600">{featured.role}</p>
            </div>
          </article>

          <div className="grid gap-5">
            {rest.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-lg border border-white/10 bg-white/6 p-6 text-white transition hover:bg-white/10"
              >
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-4xl leading-none text-[var(--brand-accent)]">
                    "
                  </p>
                  <span className="text-sm font-semibold text-[var(--brand-accent)]">
                    5.0
                  </span>
                </div>
                <p className="text-base leading-7 text-zinc-100">
                  {testimonial.quote}
                </p>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    {testimonial.role}
                  </p>
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
