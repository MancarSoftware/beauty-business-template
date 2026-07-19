import { createWhatsAppUrl } from '../utils/whatsapp'

function HighlightIcon({ type }) {
  const iconClass = 'mx-auto h-8 w-8 text-[var(--brand-caramel)]'

  if (type === 'Torta') {
    return (
      <svg className={iconClass} viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M7 15h18v10H7zM10 15v-2c0-3 12-3 12 0v2M12 11V7M16 11V6M20 11V7"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    )
  }

  if (type === 'Cafe') {
    return (
      <svg className={iconClass} viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M8 13h14v5a7 7 0 0 1-14 0zM22 14h2a3 3 0 0 1 0 6h-2M10 25h12M12 8c-1-1-1-2 0-3M17 8c-1-1-1-2 0-3"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    )
  }

  if (type === 'Mesa') {
    return (
      <svg className={iconClass} viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M6 17h20M8 17a8 8 0 0 1 16 0M16 8V5M9 24h14M7 21h18"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    )
  }

  return (
    <svg className={iconClass} viewBox="0 0 32 32" aria-hidden="true">
      <path
        d="M16 27V5M16 10c-5 0-8 3-8 7 5 0 8-3 8-7ZM16 15c5 0 8 3 8 7-5 0-8-3-8-7Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

function BakeryHero({ business }) {
  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    business.whatsappMessage,
  )

  return (
    <section
      id="inicio"
      className="relative isolate min-h-screen overflow-hidden px-4 pb-14 pt-[8.5rem] sm:px-8 lg:px-10 lg:pb-20 lg:pt-36"
    >
      <img
        src={business.hero.image}
        alt=""
        className="absolute inset-y-0 right-0 -z-20 h-full w-full object-cover object-center lg:w-[70%]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#fffaf3_0%,rgba(255,250,243,0.96)_23%,rgba(255,250,243,0.7)_47%,rgba(255,250,243,0.14)_70%),linear-gradient(180deg,rgba(255,250,243,0.92),rgba(255,250,243,0.25)_46%,rgba(248,241,231,0.88)_100%)]" />

      <div className="mx-auto max-w-[90rem]">
        <div className="max-w-[49rem]">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-caramel)] sm:text-sm">
            {business.hero.eyebrow}
          </p>

          <h1 className="font-brand-serif mt-5 max-w-[49rem] text-5xl leading-[1] tracking-[-0.05em] text-[var(--brand-dark)] sm:text-6xl lg:text-[4.15rem] xl:text-[4.65rem]">
            Pan recien hecho, postres artesanales y momentos{' '}
            <span className="text-[var(--brand-caramel)]">para disfrutar.</span>
          </h1>

          <p className="mt-5 max-w-[33rem] text-base leading-8 text-[var(--brand-coffee)]/82 sm:text-lg">
            {business.hero.subtitle}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[var(--brand-caramel)] px-8 py-4 text-center text-sm font-black uppercase text-white shadow-2xl shadow-[var(--brand-coffee)]/20 transition hover:-translate-y-1 hover:bg-[var(--brand-dark)]"
            >
              {business.hero.cta}
            </a>
            <a
              href={business.hero.secondaryHref}
              className="rounded-full border border-[var(--brand-caramel)] bg-white/60 px-8 py-4 text-center text-sm font-black uppercase text-[var(--brand-caramel)] shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white"
            >
              {business.hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:ml-auto lg:mt-2 lg:w-[42rem] lg:grid-cols-4">
          {business.hero.highlights.map((item) => (
            <article
              key={item.label}
              className="rounded-[1.25rem] bg-white/86 p-5 text-center shadow-2xl shadow-[var(--brand-coffee)]/12 backdrop-blur-md"
            >
              <HighlightIcon type={item.value} />
              <p className="mt-3 text-sm font-black leading-5 text-[var(--brand-dark)]">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BakeryHero
