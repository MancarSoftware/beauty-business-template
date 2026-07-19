import { createWhatsAppUrl } from '../utils/whatsapp'

function BakeryHero({ business }) {
  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    business.whatsappMessage,
  )

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-36"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(201,134,58,0.24),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(90,56,37,0.16),transparent_30%)]" />
      <div className="absolute left-0 top-32 -z-10 hidden h-72 w-20 rounded-r-full bg-white/60 lg:block" />

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <p className="w-fit rounded-full border border-[var(--brand-border)] bg-white/60 px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-caramel)] shadow-sm">
            {business.hero.eyebrow}
          </p>

          <h1 className="mt-7 max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-tight text-[var(--brand-dark)] sm:text-6xl lg:text-7xl xl:text-8xl">
            {business.hero.title}
          </h1>

          <p className="mt-5 max-w-xl text-2xl font-semibold italic leading-snug text-[var(--brand-caramel)]">
            {business.hero.accent}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--brand-coffee)]/75 sm:text-lg">
            {business.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[var(--brand-dark)] px-8 py-4 text-center text-sm font-black uppercase text-white shadow-2xl shadow-[var(--brand-coffee)]/20 transition hover:-translate-y-1 hover:bg-[var(--brand-caramel)] hover:text-[var(--brand-dark)]"
            >
              {business.hero.cta}
            </a>
            <a
              href={business.hero.secondaryHref}
              className="rounded-full border border-[var(--brand-border)] bg-white px-8 py-4 text-center text-sm font-black uppercase text-[var(--brand-dark)] shadow-sm transition hover:-translate-y-1 hover:border-[var(--brand-caramel)]"
            >
              {business.hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-3 top-10 z-10 rounded-[1.5rem] bg-white px-5 py-4 shadow-2xl shadow-[var(--brand-coffee)]/18 sm:-left-8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[var(--brand-caramel)]">
              Firma Maison
            </p>
            <p className="mt-2 text-2xl font-black text-[var(--brand-dark)]">
              Pan del dia
            </p>
          </div>

          <div className="overflow-hidden rounded-t-[7rem] rounded-b-[2.5rem] bg-white p-3 shadow-2xl shadow-[var(--brand-coffee)]/16">
            <img
              src={business.hero.image}
              alt={business.hero.imageAlt}
              className="h-[460px] w-full rounded-t-[6rem] rounded-b-[2rem] object-cover sm:h-[620px]"
            />
          </div>

          <div className="mt-4 grid gap-3 sm:absolute sm:-bottom-8 sm:left-8 sm:right-8 sm:mt-0 sm:grid-cols-2">
            {business.hero.highlights.map((item) => (
              <article
                key={item.label}
                className="rounded-[1.4rem] border border-white/70 bg-white/88 p-4 shadow-xl shadow-[var(--brand-coffee)]/12 backdrop-blur"
              >
                <p className="text-2xl font-black text-[var(--brand-dark)]">
                  {item.value}
                </p>
                <p className="mt-1 text-xs font-black uppercase leading-5 text-[var(--brand-coffee)]/58">
                  {item.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BakeryHero
