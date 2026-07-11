import { createWhatsAppUrl } from '../utils/whatsapp'

function Hero({ business }) {
  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    business.whatsappMessage,
  )

  return (
    <section
      id="inicio"
      className="relative isolate min-h-screen overflow-hidden bg-[#08111f] px-4 pb-16 pt-32 text-white sm:px-6 lg:px-8 lg:pt-36"
    >
      <div className="motion-gradient absolute inset-0 opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(53,224,210,0.24),transparent_34%),radial-gradient(circle_at_86%_14%,rgba(255,207,90,0.2),transparent_30%),linear-gradient(180deg,rgba(8,17,31,0.25),#08111f_92%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,rgba(8,17,31,0),#f4fbff)]" />

      <div className="relative mx-auto grid min-h-[780px] max-w-7xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          <p className="w-fit rounded-full border border-white/14 bg-white/8 px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-[var(--brand-accent)] backdrop-blur">
            {business.hero.eyebrow}
          </p>

          <h1 className="mt-8 max-w-5xl text-6xl font-black uppercase leading-[0.86] tracking-tight md:text-8xl lg:text-9xl">
            {business.hero.title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
            {business.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center rounded-full bg-[var(--brand-accent)] px-8 py-4 text-sm font-black uppercase text-[#08111f] shadow-2xl shadow-[var(--brand-accent)]/25 transition hover:-translate-y-1 hover:bg-white"
            >
              {business.hero.cta}
            </a>
            <a
              href={business.hero.secondaryHref}
              className="inline-flex justify-center rounded-full border border-white/18 bg-white/10 px-8 py-4 text-sm font-black uppercase text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-[#08111f]"
            >
              {business.hero.secondaryCta}
            </a>
          </div>

          <div className="mt-12 grid max-w-3xl gap-3 sm:grid-cols-3">
            {business.hero.highlights.map((item) => (
              <article
                key={item.label}
                className="rounded-[1.5rem] border border-white/12 bg-white/8 p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white hover:text-[#08111f]"
              >
                <p className="text-4xl font-black text-[var(--brand-accent)]">
                  {item.value}
                </p>
                <p className="mt-2 text-xs font-black uppercase text-current/55">
                  {item.label}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-12 z-10 hidden rounded-[1.5rem] bg-white p-5 text-[#08111f] shadow-2xl shadow-black/25 md:block motion-float">
            <p className="text-xs font-black uppercase text-[#0c8b91]">
              Diagnostico digital
            </p>
            <p className="mt-3 text-4xl font-black">4.9</p>
            <p className="mt-1 text-sm font-semibold text-[#08111f]/55">
              pacientes satisfechos
            </p>
          </div>

          <div className="relative mx-auto max-w-[560px] rounded-[3rem] border border-white/14 bg-white/10 p-3 shadow-2xl shadow-black/35 backdrop-blur-xl">
            <img
              src={business.hero.image}
              alt={`Equipo de ${business.name} atendiendo a un paciente`}
              className="h-[620px] w-full rounded-[2.4rem] object-cover"
            />
          </div>

          <div className="absolute -bottom-8 right-3 w-[min(92%,28rem)] rounded-[2rem] bg-[#08111f] p-5 text-white shadow-2xl shadow-black/35 ring-1 ring-white/12">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase text-[var(--brand-accent)]">
                  Plan dental claro
                </p>
                <h2 className="mt-2 text-2xl font-black uppercase leading-tight">
                  Fotos, diagnostico y prioridades
                </h2>
              </div>
              <span className="motion-pulse-soft rounded-full bg-[var(--brand-secondary)] px-4 py-2 text-xs font-black text-[#08111f]">
                activo
              </span>
            </div>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="motion-progress h-full rounded-full bg-[var(--brand-accent)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
