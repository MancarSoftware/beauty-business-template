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
      className="relative overflow-hidden bg-[#f8f5ef] px-4 pt-28 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 py-12 lg:grid-cols-[0.95fr_0.85fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-[var(--brand-accent)]/30 bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-[var(--brand-accent-dark)] shadow-sm">
            {business.hero.eyebrow}
          </p>

          <h1 className="font-display text-5xl font-black uppercase leading-[0.95] tracking-tight text-[#101010] md:text-7xl xl:text-8xl">
            {business.hero.title}
            <span className="mt-3 block text-[var(--brand-accent-dark)]">
              {business.hero.accentTitle}
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-600 md:text-lg">
            {business.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#101010] px-8 py-4 text-sm font-black uppercase text-white shadow-xl shadow-black/15 transition hover:-translate-y-1 hover:bg-[var(--brand-accent-dark)]"
            >
              {business.hero.cta}
              <span>→</span>
            </a>

            <a
              href={business.hero.secondaryHref ?? '#planes'}
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-8 py-4 text-sm font-black uppercase text-[#101010] shadow-sm transition hover:-translate-y-1 hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent-dark)]"
            >
              {business.hero.secondaryCta ?? 'Ver planes'}
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-3xl border border-black/10 bg-white p-5 shadow-sm"
              >
                <p className="font-display text-3xl font-black text-[#101010]">
                  {feature.title}
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-wide text-zinc-500">
                  {feature.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-[var(--brand-accent)]/20 blur-3xl" />
          <div className="absolute -bottom-8 -right-8 h-52 w-52 rounded-full bg-black/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-white p-4 shadow-2xl shadow-black/15">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#101010]">
              {business.hero.image ? (
                <img
                  src={business.hero.image}
                  alt={`Entrenamiento en ${business.name}`}
                  className="h-[520px] w-full object-cover object-center opacity-85 grayscale"
                />
              ) : null}

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,16,16,0.05)_0%,rgba(16,16,16,0.88)_100%)]" />

              <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[var(--brand-accent)]">
                  Titan Fit Method
                </p>

                <h2 className="mt-3 max-w-md font-display text-3xl font-black uppercase leading-tight">
                  Entrena con estructura, no con improvisación.
                </h2>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    'Evaluación inicial',
                    'Rutina por objetivo',
                    'Seguimiento real',
                    'Asesoría directa',
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold backdrop-blur"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 left-6 right-6 rounded-3xl border border-black/10 bg-white p-5 shadow-xl shadow-black/15">
            <div className="flex items-center justify-between gap-5">
              <div>
                <p className="text-xs font-black uppercase text-zinc-500">
                  Plan recomendado
                </p>
                <p className="mt-1 text-xl font-black text-[#101010]">
                  Premium
                </p>
              </div>

              <p className="font-display text-3xl font-black text-[var(--brand-accent-dark)]">
                $79.900
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero