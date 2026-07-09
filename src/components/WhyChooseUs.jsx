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
    <section id="beneficios" className="bg-[#f2e7eb] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-start">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase text-[var(--brand-accent-dark)]">
            {section.eyebrow}
          </p>
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-[#130f12] md:text-6xl">
            {section.title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-700">
            {section.description}
          </p>

          <div className="mt-10 divide-y divide-[#d9c5ce] border-y border-[#d9c5ce]">
            {business.benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="grid gap-4 py-6 md:grid-cols-[80px_1fr]"
              >
                <p className="text-3xl font-semibold text-[var(--brand-accent-dark)]">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <div>
                  <h3 className="text-xl font-semibold text-[#130f12]">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-700">
                    {benefit.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="lg:sticky lg:top-28">
          <div className="overflow-hidden rounded-lg border border-[#d9c5ce] bg-white shadow-2xl shadow-[#9f4f68]/10">
            {image ? (
              <img
                src={image}
                alt="Tratamiento capilar en Bella Aura Studio"
                className="h-80 w-full object-cover"
              />
            ) : null}
            <div className="p-6">
              <p className="text-sm font-semibold text-[var(--brand-accent-dark)]">
                {section.cardTitle}
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-700">
                {section.cardText}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default WhyChooseUs
