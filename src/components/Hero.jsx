import { createWhatsAppUrl } from '../utils/whatsapp'

function Hero({ business }) {
  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    business.whatsappMessage,
  )

  const features = business.hero.features ?? []

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#ede7dc] px-4 pt-28 text-[#101010] sm:px-6 lg:px-8"
    >
      <div className="absolute left-0 top-0 h-full w-[38%] bg-[#101010]" />
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[var(--brand-accent)]/20 blur-3xl" />

      <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 py-12 lg:grid-cols-[0.95fr_0.85fr]">
        <div className="relative z-10">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/80 px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-[var(--brand-accent-dark)] shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[var(--brand-accent)]" />
            {business.hero.eyebrow}
          </div>

          <h1 className="max-w-4xl font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-[#101010] md:text-7xl xl:text-8xl">
            {business.hero.title}
            <span className="block text-[var(--brand-accent-dark)]">
              {business.hero.accentTitle}
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-zinc-700 md:text-lg">
            {business.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#101010] px-8 py-4 text-sm font-black uppercase text-white shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-[var(--brand-accent-dark)]"
            >
              {business.hero.cta}
            </a>

            <a
              href={business.hero.secondaryHref ?? '#planes'}
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/80 px-8 py-4 text-sm font-black uppercase text-[#101010] shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent-dark)]"
            >
              {business.hero.secondaryCta ?? 'Ver membresías'}
            </a>
          </div>

          <div className="mt-14 grid max-w-2xl gap-4 sm:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="border-l border-black/15 pl-5"
              >
                <p className="font-display text-4xl font-black text-[#101010]">
                  {feature.title}
                </p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.18em] text-zinc-500">
                  {feature.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="relative ml-auto max-w-xl">
            <div className="absolute -left-8 -top-8 h-full w-full rounded-[2.5rem] border border-[var(--brand-accent)]/40" />

            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#101010] shadow-2xl shadow-black/30">
              {business.hero.image ? (
                <img
                  src={business.hero.image}
                  alt={`Entrenamiento en ${business.name}`}
                  className="h-[620px] w-full object-cover object-center opacity-85 grayscale"
                />
              ) : null}

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,16,16,0.05)_0%,rgba(16,16,16,0.92)_100%)]" />

              <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-6 text-white">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[var(--brand-accent)]">
                  Titan Method
                </p>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-white/60">
                  2026
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                <p className="max-w-sm font-display text-3xl font-black uppercase leading-tight">
                  Método, técnica y seguimiento para avanzar.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {['Evaluamos', 'Diseñamos', 'Entrenamos', 'Ajustamos'].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-full border border-white/15 bg-white/10 px-4 py-3 text-center text-xs font-black uppercase tracking-wide backdrop-blur"
                      >
                        {item}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-7 left-6 right-6 rounded-[2rem] border border-black/10 bg-white p-5 shadow-xl shadow-black/20">
              <div className="flex items-center justify-between gap-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-500">
                    Membresía destacada
                  </p>
                  <p className="mt-1 text-xl font-black uppercase text-[#101010]">
                    Performance
                  </p>
                </div>

                <p className="font-display text-3xl font-black text-[var(--brand-accent-dark)]">
                  $79.900
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero