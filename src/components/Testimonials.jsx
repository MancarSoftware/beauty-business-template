import SectionHeader from './SectionHeader'

function Testimonials({ business }) {
  return (
    <section
      id="testimonios"
      className="bg-zinc-950 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Testimonios"
          title="Clientes que vuelven por el detalle"
          description="Opiniones ficticias para la demo, listas para reemplazar por comentarios reales."
          inverse
        />

        <div className="grid gap-4 md:grid-cols-3">
          {business.testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-lg border border-white/10 bg-white/5 p-6"
            >
              <p className="text-4xl text-amber-200">"</p>
              <p className="mt-4 text-base leading-7 text-zinc-200">
                {testimonial.quote}
              </p>
              <div className="mt-8 border-t border-white/10 pt-5">
                <h3 className="font-semibold text-white">{testimonial.name}</h3>
                <p className="mt-1 text-sm text-zinc-400">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
