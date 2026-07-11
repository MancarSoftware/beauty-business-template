import { createWhatsAppUrl } from '../utils/whatsapp'

function Hero({ business }) {
  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    business.whatsappMessage,
  )

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-[#fff7ec] px-4 pb-20 pt-28 text-[#172033] sm:px-6 lg:px-8 lg:pt-32"
    >
      <div className="absolute inset-x-0 top-0 h-28 bg-[repeating-linear-gradient(90deg,rgba(23,32,51,0.08)_0_1px,transparent_1px_120px)]" />
      <div className="absolute right-[-16rem] top-24 h-[34rem] w-[34rem] rounded-full bg-[var(--brand-secondary)]/35 blur-3xl" />
      <div className="absolute bottom-[-18rem] left-[-12rem] h-[32rem] w-[32rem] rounded-full bg-[var(--brand-accent)]/25 blur-3xl" />

      <div className="relative mx-auto grid min-h-[760px] max-w-7xl gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
        <div>
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <p className="rounded-full bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-accent-dark)] shadow-sm">
              {business.hero.eyebrow}
            </p>
            <p className="rounded-full border border-[#172033]/10 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-[#172033]/55">
              agenda directa
            </p>
          </div>

          <h1 className="max-w-5xl text-6xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl lg:text-9xl">
            {business.hero.title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#172033]/68 md:text-xl">
            {business.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center rounded-full bg-[#172033] px-8 py-4 text-sm font-black uppercase text-white shadow-2xl shadow-[#172033]/20 transition hover:-translate-y-1 hover:bg-[var(--brand-accent)] hover:text-[#172033]"
            >
              {business.hero.cta}
            </a>
            <a
              href={business.hero.secondaryHref}
              className="inline-flex justify-center rounded-full bg-white px-8 py-4 text-sm font-black uppercase text-[#172033] shadow-lg shadow-[#172033]/8 transition hover:-translate-y-1 hover:bg-[var(--brand-secondary)]"
            >
              {business.hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-8 z-10 hidden rotate-[-6deg] bg-[var(--brand-accent)] px-6 py-5 text-[#172033] shadow-2xl md:block motion-float">
            <p className="text-xs font-black uppercase">Primera cita</p>
            <p className="mt-1 text-4xl font-black">35 min</p>
          </div>

          <div className="relative mx-auto aspect-[4/5] max-w-[520px] overflow-hidden rounded-[48%_48%_2rem_2rem] bg-white p-4 shadow-2xl shadow-[#172033]/12">
            <img
              src={business.hero.image}
              alt={`Equipo de ${business.name} atendiendo a un paciente`}
              className="h-full w-full rounded-[48%_48%_1.5rem_1.5rem] object-cover"
            />
          </div>

          <div className="absolute -bottom-8 left-1/2 w-[min(92%,32rem)] -translate-x-1/2 rounded-[2rem] bg-white p-5 text-[#172033] shadow-2xl shadow-[#172033]/16">
            <div className="grid gap-3 sm:grid-cols-3">
              {business.hero.highlights.map((item) => (
                <div key={item.label} className="rounded-2xl bg-[#fff7ec] p-4">
                  <p className="text-3xl font-black">{item.value}</p>
                  <p className="mt-1 text-[11px] font-black uppercase text-[#172033]/48">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
