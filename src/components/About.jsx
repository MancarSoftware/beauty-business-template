import { createWhatsAppUrl } from '../utils/whatsapp'

function About({ business }) {
  const section = business.sections.about
  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    business.whatsappMessage,
  )

  return (
    <section className="bg-white px-4 py-16 text-[#09231f] sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative">
          <img
            src={section.image}
            alt={`Interior de ${business.name}`}
            className="h-[560px] w-full object-cover"
          />
          <div className="absolute bottom-5 left-5 bg-[#09231f] px-6 py-5 text-white">
            <p className="text-5xl font-black leading-none">12+</p>
            <p className="mt-2 text-xs font-black uppercase text-white/64">
              anos cuidando experiencias
            </p>
          </div>
        </div>

        <div className="lg:pl-8">
          <p className="text-xs font-black uppercase text-[var(--brand-accent-dark)]">
            {section.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.98] md:text-6xl">
            {section.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#09231f]/66">
            {section.description}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {business.locationFeatures.map((feature) => (
              <div key={feature} className="border border-[#09231f]/12 bg-[#fbf7f1] p-4 text-sm font-black uppercase">
                {feature}
              </div>
            ))}
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex bg-[var(--brand-accent)] px-7 py-4 text-sm font-black uppercase text-white transition hover:bg-[#09231f]"
          >
            Conocer disponibilidad
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
