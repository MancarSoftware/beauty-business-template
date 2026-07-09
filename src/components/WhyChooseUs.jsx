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
  const image = business.gallery?.[3]?.image ?? business.hero.image

  return (
    <section
      id="beneficios"
      className="bg-[#130f12] px-4 py-24 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-[var(--brand-accent)]">
              {section.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-5xl font-semibold leading-tight md:text-7xl">
              Ritual de belleza, sin prisa y con criterio.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-zinc-300">
            {section.description}
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="relative min-h-[540px] overflow-hidden rounded-[40px] bg-white/6">
            {image ? (
              <img
                src={image}
                alt="Cuidado capilar en Bella Aura Studio"
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : null}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(19,15,18,0.70)_100%)]" />
            <div className="absolute bottom-0 p-7">
              <p className="text-sm font-semibold uppercase text-[var(--brand-accent)]">
                {section.cardTitle}
              </p>
              <p className="mt-3 max-w-md text-sm leading-7 text-zinc-100">
                {section.cardText}
              </p>
            </div>
          </div>

          <div className="grid border-y border-white/12 md:grid-cols-2">
            {business.benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="border-b border-white/12 py-7 md:border-r md:px-7 md:even:border-r-0"
              >
                <p className="font-display text-5xl text-[var(--brand-accent)]">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-6 text-xl font-semibold">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-300">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
