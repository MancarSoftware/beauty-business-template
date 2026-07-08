import SectionHeader from './SectionHeader'

function Testimonials({ business }) {
  return (
    <section
      id="testimonios"
      className="bg-zinc-950 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Clientes BarberPro"
          title="Clientes que agendan, se atienden y vuelven"
          description="Nos recomiendan por la puntualidad, el detalle del degradado, el perfilado de barba y la atención directa por WhatsApp."
          inverse
        />

        <div className="grid gap-4 md:grid-cols-3">
          {business.testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-lg border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-white/8"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-4xl text-amber-200">"</p>
                <span className="rounded-md border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-sm font-bold text-amber-100">
                  5.0
                </span>
              </div>
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
