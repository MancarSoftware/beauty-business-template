import { createWhatsAppUrl } from '../utils/whatsapp'

function About({ business }) {
  const section = business.sections.about
  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    business.whatsappMessage,
  )

  return (
    <section className="bg-[#fbf3ec] px-4 py-20 text-[#17342f] sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative">
          <div className="overflow-hidden rounded-[50%_50%_2.5rem_2.5rem] bg-white p-3 shadow-2xl shadow-[#17342f]/12">
            <img
              src={section.image}
              alt={`Interior de ${business.name}`}
              className="h-[600px] w-full rounded-[50%_50%_2rem_2rem] object-cover"
            />
          </div>

          <div className="absolute -bottom-8 right-8 rounded-full bg-[#17342f] px-8 py-7 text-white shadow-2xl shadow-[#17342f]/20">
            <p className="font-display text-5xl italic leading-none">12+</p>
            <p className="mt-2 max-w-32 text-center text-xs font-black uppercase text-white/64">
              anos de calma
            </p>
          </div>
        </div>

        <div className="lg:pl-8">
          <p className="w-fit rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase text-[var(--brand-accent-dark)] shadow-sm">
            {section.eyebrow}
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-5xl leading-[1.02] md:text-7xl">
            {section.title}
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-[#17342f]/66">
            {section.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            {business.locationFeatures.map((feature) => (
              <span
                key={feature}
                className="rounded-full bg-white px-5 py-3 text-sm font-black uppercase shadow-lg shadow-[#17342f]/6"
              >
                {feature}
              </span>
            ))}
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex rounded-full bg-[var(--brand-accent)] px-8 py-4 text-sm font-black uppercase text-[#09231f] shadow-xl shadow-[var(--brand-accent)]/20 transition hover:-translate-y-1 hover:bg-[#17342f] hover:text-white"
          >
            Conocer disponibilidad
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
