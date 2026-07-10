import { createWhatsAppUrl } from '../utils/whatsapp'

function Hero({ business }) {
  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    business.whatsappMessage,
  )

  return (
    <section id="inicio" className="relative overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0">
        <img
          src={business.hero.image}
          alt={`Entrenamiento en ${business.name}`}
          className="h-full w-full object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.86)_42%,rgba(5,5,5,0.35)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0)_0%,#050505_100%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[900px] max-w-7xl flex-col justify-end px-4 pb-8 pt-32 sm:px-6 lg:px-8 lg:pt-40">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.75fr] lg:items-end">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 border border-[var(--brand-accent)]/35 bg-[var(--brand-accent)]/10 px-4 py-2 text-xs font-black uppercase text-[var(--brand-accent)]">
              <span className="h-2 w-2 bg-[var(--brand-accent)]" />
              {business.hero.eyebrow}
            </div>

            <h1 className="max-w-5xl text-6xl font-black uppercase leading-[0.88] text-white md:text-7xl lg:text-8xl">
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
                className="inline-flex items-center justify-center bg-[var(--brand-accent)] px-8 py-4 text-sm font-black uppercase text-[#050505] transition hover:-translate-y-1 hover:bg-white"
              >
                {business.hero.cta}
              </a>

              <a
                href={business.hero.secondaryHref ?? '#planes'}
                className="inline-flex items-center justify-center border border-white/20 bg-white/5 px-8 py-4 text-sm font-black uppercase text-white transition hover:-translate-y-1 hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)]"
              >
                {business.hero.secondaryCta ?? 'Ver membresias'}
              </a>
            </div>
          </div>

          <aside className="border border-white/14 bg-[#0d0d0d]/82 p-5 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-black uppercase text-[var(--brand-accent)]">
                  Estado del club
                </p>
                <p className="mt-2 text-3xl font-black uppercase leading-none">
                  Abierto hoy
                </p>
              </div>

              <span className="border border-[var(--brand-accent)]/40 px-3 py-2 text-xs font-black text-[var(--brand-accent)]">
                05:30 - 22:00
              </span>
            </div>

            <div className="grid gap-3 py-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {business.hero.features.map((feature) => (
                <div key={feature.title} className="border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-3xl font-black text-white">{feature.title}</p>
                  <p className="mt-2 text-[11px] font-black uppercase leading-5 text-white/50">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="border border-white/10 bg-white/[0.04] p-5">
              <div className="mb-4 flex items-center justify-between text-xs font-black uppercase text-white/50">
                <span>Clase proxima</span>
                <span className="text-[var(--brand-accent)]">Hoy</span>
              </div>

              {business.classSchedule.slice(0, 2).map((item) => (
                <div
                  key={`${item.time}-${item.className}`}
                  className="flex items-center justify-between gap-4 border-t border-white/10 py-4 first:border-t-0 first:pt-0 last:pb-0"
                >
                  <span className="text-2xl font-black text-[var(--brand-accent)]">
                    {item.time}
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm font-black uppercase">
                      {item.className}
                    </span>
                    <span className="text-xs text-white/50">
                      Coach {item.coach} - {item.level}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-12 grid border border-white/10 bg-white/[0.04] md:grid-cols-4">
          {business.stats.map((stat) => (
            <article
              key={stat.label}
              className="border-b border-white/10 p-5 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <p className="text-4xl font-black uppercase text-white">{stat.value}</p>
              <p className="mt-2 text-xs font-black uppercase text-white/45">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
