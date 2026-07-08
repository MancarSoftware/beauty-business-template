function WhyChooseUs({ business }) {
  const section = business.sections?.benefits ?? {
    eyebrow: 'Por qué elegirnos',
    title: 'Una experiencia profesional de inicio a fin',
    description:
      'Cada detalle está pensado para que reserves fácil y recibas una atención cuidada.',
    cardTitle: 'Experiencia personalizada',
    cardText:
      'Reserva por WhatsApp, llega a tu hora y recibe una recomendación según lo que necesitas.',
  }

  return (
    <section id="beneficios" className="bg-zinc-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="mb-3 text-sm font-semibold uppercase text-[var(--brand-accent)]">
            {section.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
            {section.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            {section.description}
          </p>
          <div className="mt-8 rounded-lg border border-[color:var(--brand-accent)] bg-white/5 p-5">
            <p className="text-sm font-semibold text-[var(--brand-accent)]">
              {section.cardTitle}
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              {section.cardText}
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {business.benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="rounded-lg border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/8"
            >
              <span className="mb-7 flex h-11 w-11 items-center justify-center rounded-md bg-[var(--brand-accent)] text-sm font-bold text-zinc-950">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-lg font-semibold text-white">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
