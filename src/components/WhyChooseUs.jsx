import SectionHeader from './SectionHeader'

function WhyChooseUs({ business }) {
  const section = business.sections?.benefits ?? {
    eyebrow: 'Por que elegirnos',
    title: 'Entrena con estructura y seguimiento',
    description: 'Una experiencia pensada para ayudarte a avanzar.',
  }

  return (
    <section
      id="entrenadores"
      className="bg-[#f7f7f7] px-4 py-16 text-[#101010] sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {business.benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-[1.5rem] border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <p className="text-3xl">{benefit.icon}</p>
              <h3 className="mt-5 text-lg font-black uppercase text-[#101010]">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <div className="mx-auto mb-8 max-w-4xl text-center">
            <p className="text-sm font-black uppercase text-[var(--brand-accent-dark)]">
              {business.sections?.trainers?.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-4xl font-black uppercase text-[#101010] md:text-5xl">
              {business.sections?.trainers?.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-600">
              {business.sections?.trainers?.description}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {business.trainers.map((trainer) => (
              <article
                key={trainer.name}
                className="overflow-hidden rounded-[1.5rem] bg-[#101010] p-5 text-white shadow-xl shadow-black/10"
              >
                <div className="flex h-36 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#2a2a2a,#101010)] text-4xl font-black text-[var(--brand-accent)]">
                  {trainer.initials}
                </div>
                <h3 className="mt-5 text-lg font-black uppercase text-[var(--brand-accent)]">
                  {trainer.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  {trainer.role}
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
