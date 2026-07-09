import { createWhatsAppUrl } from '../utils/whatsapp'

function Hero({ business }) {
  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    business.whatsappMessage,
  )

  const features = business.hero.features ?? []

  return (
    <section id="inicio" className="overflow-hidden bg-white pt-20">
      <div className="grid min-h-[760px] lg:grid-cols-[0.52fr_0.48fr]">
        <div className="relative flex items-center px-4 py-16 sm:px-6 lg:px-12 xl:px-20">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-[var(--brand-accent-dark)]">
              {business.hero.eyebrow}
            </p>

            <h1 className="font-display text-6xl font-black uppercase leading-[0.9] tracking-tight text-[#101010] md:text-7xl xl:text-8xl">
              {business.hero.title}
              <span className="mt-3 block text-[var(--brand-accent-dark)]">
                {business.hero.accentTitle}
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-zinc-600 md:text-lg">
              {business.hero.subtitle}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-md bg-[var(--brand-accent)] px-7 py-4 text-sm font-black uppercase text-white shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[var(--brand-accent-dark)]"
              >
                {business.hero.cta}
                <span>→</span>
              </a>

              <a
                href={business.hero.secondaryHref ?? '#planes'}
                className="inline-flex items-center justify-center gap-3 rounded-md border border-zinc-300 bg-white px-7 py-4 text-sm font-black uppercase text-[#101010] transition hover:-translate-y-0.5 hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent-dark)]"
              >
                {business.hero.secondaryCta ?? 'Ver planes'}
              </a>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {features.map((feature) => (
                <article key={feature.title} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-sm font-black text-[var(--brand-accent-dark)]">
                    ✓
                  </span>
                  <div>
                    <p className="text-xs font-black uppercase text-[#101010]">
                      {feature.title}
                    </p>
                    <p className="text-xs font-semibold uppercase text-zinc-500">
                      {feature.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="relative min-h-[520px] overflow-hidden bg-[#101010] lg:min-h-full">
          <div className="absolute -left-24 top-0 z-10 hidden h-full w-44 skew-x-[-16deg] bg-white lg:block" />

          {business.hero.image ? (
            <img
              src={business.hero.image}
              alt={`Entrenamiento en ${business.name}`}
              className="h-full w-full object-cover object-center grayscale"
            />
          ) : null}

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,16,16,0.10),rgba(16,16,16,0.25))]" />

          <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/15 bg-black/45 p-5 text-white backdrop-blur-md lg:hidden">
            <p className="text-xs font-black uppercase text-[var(--brand-accent)]">
              Primera visita
            </p>
            <p className="mt-1 text-xl font-black">Evaluación inicial</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
