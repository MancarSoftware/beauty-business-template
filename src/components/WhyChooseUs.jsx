import SectionHeader from './SectionHeader'

function WhyChooseUs({ business }) {
  const section = business.sections?.benefits
  const trainersSection = business.sections?.trainers

  return (
    <section
      id="entrenadores"
      className="bg-[#050505] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeader
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
            inverse
            align="left"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {business.benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="group border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:border-[var(--brand-accent)] hover:bg-white hover:text-[#050505]"
              >
                <p className="text-xs font-black uppercase text-[var(--brand-accent)] group-hover:text-[var(--brand-punch)]">
                  0{index + 1}
                </p>
                <h3 className="mt-5 text-xl font-black uppercase leading-tight">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/62 group-hover:text-[#050505]/70">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 border border-white/10 bg-white/[0.04] p-5 sm:p-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase text-[var(--brand-accent)]">
                {trainersSection.eyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-none md:text-5xl">
                {trainersSection.title}
              </h2>
              <p className="mt-5 text-base leading-7 text-white/62">
                {trainersSection.description}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {business.trainers.map((trainer) => (
                <article
                  key={trainer.name}
                  className="group overflow-hidden border border-white/10 bg-[#050505]"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <span className="absolute left-4 top-4 bg-[var(--brand-accent)] px-3 py-2 text-xs font-black text-[#050505]">
                      {trainer.initials}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-black uppercase">
                      {trainer.name}
                    </h3>
                    <p className="mt-2 text-sm font-bold text-white/52">
                      {trainer.role}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
