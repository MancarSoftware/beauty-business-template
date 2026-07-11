import { createWhatsAppUrl } from '../utils/whatsapp'

function Hero({ business }) {
  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    business.whatsappMessage,
  )

  return (
    <section
      id="inicio"
      className="min-h-screen bg-[#fbfaf6] px-4 pb-16 pt-28 text-[#111827] sm:px-6 lg:px-12 lg:pt-12"
    >
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-8 w-fit border border-[#111827]/12 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#111827]/55">
            {business.hero.eyebrow}
          </p>

          <h1 className="max-w-5xl text-6xl font-black uppercase leading-[0.86] tracking-tight sm:text-7xl md:text-8xl xl:text-[7.5rem]">
            {business.hero.title}
          </h1>

          <div className="mt-8 grid max-w-3xl gap-6 border-t border-[#111827]/12 pt-8 md:grid-cols-[1fr_auto] md:items-end">
            <p className="text-lg leading-8 text-[#111827]/62">
              {business.hero.subtitle}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center bg-[#111827] px-7 py-4 text-sm font-black uppercase text-white transition hover:bg-[var(--brand-accent)] hover:text-[#111827]"
              >
                {business.hero.cta}
              </a>
              <a
                href={business.hero.secondaryHref}
                className="inline-flex justify-center border border-[#111827]/12 bg-white px-7 py-4 text-sm font-black uppercase text-[#111827] transition hover:border-[#111827] hover:bg-[#fbfaf6]"
              >
                {business.hero.secondaryCta}
              </a>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-5 top-10 z-10 hidden bg-white px-5 py-4 shadow-2xl shadow-[#111827]/12 md:block motion-float">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#227684]">
              valoracion
            </p>
            <p className="mt-1 text-3xl font-black">35 min</p>
          </div>

          <div className="aspect-[4/5] overflow-hidden bg-white p-3 shadow-2xl shadow-[#111827]/10">
            <img
              src={business.hero.image}
              alt={`Equipo de ${business.name} atendiendo a un paciente`}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="grid border-x border-b border-[#111827]/10 bg-white md:grid-cols-3">
            {business.hero.highlights.map((item) => (
              <div key={item.label} className="border-t border-[#111827]/10 p-4">
                <p className="text-3xl font-black">{item.value}</p>
                <p className="mt-1 text-[11px] font-black uppercase text-[#111827]/45">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
