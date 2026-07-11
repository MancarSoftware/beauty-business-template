import { createWhatsAppUrl } from '../utils/whatsapp'

function Hero({ business }) {
  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    business.whatsappMessage,
  )

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#061a2b] px-4 pb-14 pt-28 text-white sm:px-6 lg:px-8 lg:pt-32"
    >
      <div className="absolute left-[-14rem] top-20 h-96 w-96 rounded-full bg-[var(--brand-accent)]/20 blur-3xl" />
      <div className="absolute right-[-10rem] top-0 h-[32rem] w-[32rem] rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[760px] max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          <p className="inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-[var(--brand-accent)]">
            {business.hero.eyebrow}
          </p>

          <h1 className="mt-8 max-w-4xl text-6xl font-black uppercase leading-[0.88] tracking-tight md:text-8xl">
            {business.hero.title}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
            {business.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center rounded-full bg-[var(--brand-accent)] px-8 py-4 text-sm font-black uppercase text-[#061a2b] shadow-2xl shadow-[var(--brand-accent)]/25 transition hover:-translate-y-1 hover:bg-white hover:text-[#061a2b]"
            >
              {business.hero.cta}
            </a>
            <a
              href={business.hero.secondaryHref}
              className="inline-flex justify-center rounded-full border border-white/20 bg-white px-8 py-4 text-sm font-black uppercase text-[#061a2b] transition hover:-translate-y-1 hover:bg-[var(--brand-secondary)] hover:text-[#061a2b]"
            >
              {business.hero.secondaryCta}
            </a>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            {business.hero.highlights.map((item) => (
              <div
                key={item.label}
                className="group border-l border-white/14 bg-white/[0.03] p-5 transition hover:bg-white hover:text-[#061a2b]"
              >
                <p className="text-4xl font-black text-[var(--brand-accent)] transition group-hover:text-[var(--brand-accent-dark)]">
                  {item.value}
                </p>
                <p className="mt-2 text-xs font-black uppercase text-white/48 transition group-hover:text-[#061a2b]/55">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-12 z-10 hidden w-48 border border-white/14 bg-white p-5 text-[#061a2b] shadow-2xl md:block motion-float">
            <p className="text-xs font-black uppercase text-[#087f83]">
              Diagnostico inicial
            </p>
            <p className="mt-3 text-4xl font-black">35 min</p>
            <p className="mt-1 text-sm text-[#061a2b]/58">
              Revision y plan claro
            </p>
          </div>

          <div className="overflow-hidden rounded-[3rem] bg-white p-3 shadow-2xl shadow-black/30">
            <img
              src={business.hero.image}
              alt={`Equipo de ${business.name} atendiendo a un paciente`}
              className="h-[520px] w-full rounded-[2.4rem] object-cover"
            />
          </div>

          <div className="absolute -bottom-10 right-4 w-[min(92%,28rem)] rounded-[2rem] bg-white p-5 text-[#061a2b] shadow-2xl shadow-black/20">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase text-[#087f83]">
                  Agenda express
                </p>
                <h2 className="mt-2 text-2xl font-black uppercase leading-tight">
                  Valoracion esta semana
                </h2>
              </div>
              <span className="rounded-full bg-[#e9fbff] px-4 py-2 text-xs font-black text-[#087f83]">
                WhatsApp
              </span>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs font-black uppercase">
              <span className="bg-[#e9fbff] px-3 py-3">Revision</span>
              <span className="bg-[#e9fbff] px-3 py-3">Fotos</span>
              <span className="bg-[#e9fbff] px-3 py-3">Plan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
