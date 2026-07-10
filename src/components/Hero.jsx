import { createWhatsAppUrl } from '../utils/whatsapp'

function Hero({ business }) {
  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    business.whatsappMessage,
  )

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#fbf7f1] px-4 pt-28 text-[#09231f] sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid min-h-[860px] max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
        <div className="pb-10 lg:pb-20">
          <p className="mb-7 w-fit border border-[#09231f]/14 bg-white px-4 py-2 text-xs font-black uppercase text-[var(--brand-accent-dark)]">
            {business.hero.eyebrow}
          </p>

          <h1 className="max-w-4xl text-6xl font-black uppercase leading-[0.9] md:text-7xl lg:text-8xl">
            {business.hero.title}
            <span className="block font-display italic normal-case text-[var(--brand-accent-dark)]">
              {business.hero.accentTitle}
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#09231f]/68 md:text-xl">
            {business.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center bg-[#09231f] px-8 py-4 text-sm font-black uppercase text-white transition hover:-translate-y-1 hover:bg-[var(--brand-accent)]"
            >
              {business.hero.cta}
            </a>

            <a
              href={business.hero.secondaryHref}
              className="inline-flex justify-center border border-[#09231f]/18 bg-white px-8 py-4 text-sm font-black uppercase text-[#09231f] transition hover:-translate-y-1 hover:border-[#09231f]"
            >
              {business.hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-12 z-10 hidden bg-[var(--brand-accent)] px-5 py-16 text-center text-xs font-black uppercase text-white [writing-mode:vertical-rl] lg:block">
            Agenda privada
          </div>

          <div className="grid gap-4 md:grid-cols-[0.72fr_1fr] md:items-end">
            <aside className="order-2 border border-[#09231f]/12 bg-white p-5 md:order-1">
              <p className="text-xs font-black uppercase text-[var(--brand-accent-dark)]">
                Protocolo de bienvenida
              </p>
              <div className="mt-5 space-y-4">
                {business.hero.highlights.map((item) => (
                  <div key={item.label} className="border-t border-[#09231f]/10 pt-4">
                    <p className="text-4xl font-black">{item.value}</p>
                    <p className="mt-1 text-xs font-black uppercase text-[#09231f]/52">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </aside>

            <div className="order-1 overflow-hidden border border-[#09231f]/12 bg-white p-3 md:order-2">
              <img
                src={business.hero.image}
                alt={`Experiencia de bienestar en ${business.name}`}
                className="h-[520px] w-full object-cover md:h-[660px]"
              />
            </div>
          </div>

          <div className="relative z-20 mx-auto -mt-16 max-w-xl border border-[#09231f] bg-[#09231f] p-5 text-white shadow-2xl shadow-[#09231f]/20 md:mr-8">
            <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <p className="text-xs font-black uppercase text-[var(--brand-accent)]">
                  Disponibilidad asistida
                </p>
                <p className="mt-2 text-2xl font-black uppercase leading-tight">
                  Consulta cabina y terapeuta por WhatsApp.
                </p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-white px-5 py-4 text-center text-xs font-black uppercase text-[#09231f] transition hover:bg-[var(--brand-accent)] hover:text-white"
              >
                Ver cupos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
