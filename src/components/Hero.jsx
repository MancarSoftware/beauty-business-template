import { createWhatsAppUrl } from '../utils/whatsapp'

function Hero({ business }) {
  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    business.whatsappMessage,
  )

  return (
    <section id="inicio" className="relative overflow-hidden bg-[#09231f] text-white">
      <div className="absolute inset-0">
        <img
          src={business.hero.image}
          alt={`Experiencia de bienestar en ${business.name}`}
          className="h-full w-full object-cover opacity-48"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#09231f_0%,rgba(9,35,31,0.88)_46%,rgba(9,35,31,0.22)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,35,31,0)_0%,#09231f_100%)]" />
      </div>

      <div className="relative mx-auto grid min-h-[900px] max-w-7xl items-end gap-10 px-4 pb-8 pt-32 sm:px-6 lg:grid-cols-[1fr_0.76fr] lg:px-8 lg:pt-40">
        <div className="pb-10">
          <p className="mb-6 inline-flex bg-white/10 px-4 py-2 text-xs font-black uppercase text-[var(--brand-accent)]">
            {business.hero.eyebrow}
          </p>

          <h1 className="max-w-4xl text-6xl font-black uppercase leading-[0.9] md:text-7xl lg:text-8xl">
            {business.hero.title}
            <span className="block text-[var(--brand-accent)]">
              {business.hero.accentTitle}
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76 md:text-xl">
            {business.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center bg-[var(--brand-accent)] px-8 py-4 text-sm font-black uppercase text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#09231f]"
            >
              {business.hero.cta}
            </a>

            <a
              href={business.hero.secondaryHref}
              className="inline-flex justify-center border border-white/20 bg-white/5 px-8 py-4 text-sm font-black uppercase text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#09231f]"
            >
              {business.hero.secondaryCta}
            </a>
          </div>
        </div>

        <aside className="border border-white/14 bg-white/[0.06] p-5 backdrop-blur">
          <div className="border-b border-white/12 pb-5">
            <p className="text-xs font-black uppercase text-[var(--brand-accent)]">
              Recomendado hoy
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-none">
              Masaje relajante + aromaterapia
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/62">
              Una sesion para soltar tension, descansar la mente y salir con el
              cuerpo mas liviano.
            </p>
          </div>

          <div className="grid gap-3 py-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {business.hero.highlights.map((item) => (
              <div key={item.label} className="border border-white/12 bg-white/[0.05] p-4">
                <p className="text-3xl font-black">{item.value}</p>
                <p className="mt-2 text-[11px] font-black uppercase leading-5 text-white/50">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full justify-center bg-white px-6 py-4 text-sm font-black uppercase text-[#09231f] transition hover:bg-[var(--brand-accent)] hover:text-white"
          >
            Consultar disponibilidad
          </a>
        </aside>
      </div>
    </section>
  )
}

export default Hero
