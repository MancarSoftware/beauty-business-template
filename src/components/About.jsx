import { createWhatsAppUrl } from '../utils/whatsapp'

function About({ business }) {
  const section = business.sections.about
  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    business.whatsappMessage,
  )

  return (
    <section className="bg-[#fff8f1] px-4 py-16 text-[#09231f] sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative">
          <div className="overflow-hidden rounded-[4rem] rounded-br-[12rem] bg-white p-3 shadow-2xl shadow-[#09231f]/10">
            <img
              src={section.image}
              alt={`Interior de ${business.name}`}
              className="h-[560px] w-full rounded-[3.25rem] rounded-br-[10rem] object-cover"
            />
          </div>

          <div className="absolute -bottom-6 right-6 rounded-[2rem] bg-[#09231f] px-6 py-5 text-white shadow-2xl shadow-[#09231f]/25">
            <p className="text-5xl font-black leading-none">12+</p>
            <p className="mt-2 max-w-32 text-xs font-black uppercase text-white/64">
              anos cuidando experiencias
            </p>
          </div>
        </div>

        <div className="lg:pl-8">
          <p className="w-fit rounded-full bg-[#f2e4d8] px-5 py-2 text-xs font-black uppercase text-[var(--brand-accent-dark)]">
            {section.eyebrow}
          </p>
          <h2 className="mt-5 text-4xl font-black uppercase leading-[0.98] md:text-6xl">
            {section.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#09231f]/66">
            {section.description}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {business.locationFeatures.map((feature) => (
              <div
                key={feature}
                className="rounded-full bg-white px-5 py-4 text-sm font-black uppercase shadow-lg shadow-[#09231f]/8"
              >
                {feature}
              </div>
            ))}
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-[var(--brand-accent)] px-7 py-4 text-sm font-black uppercase text-white shadow-xl shadow-[var(--brand-accent)]/20 transition hover:bg-[#09231f]"
          >
            Conocer disponibilidad
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
