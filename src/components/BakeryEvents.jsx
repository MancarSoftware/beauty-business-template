import { createWhatsAppUrl } from '../utils/whatsapp'

function BakeryEvents({ business }) {
  const section = business.sections.events

  return (
    <section
      id="eventos"
      className="bg-[var(--brand-surface)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="w-fit rounded-full bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-caramel)] shadow-sm">
              {section.eyebrow}
            </p>
            <h2 className="mt-6 max-w-4xl text-4xl font-black uppercase leading-[0.94] sm:text-5xl lg:text-7xl">
              {section.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--brand-coffee)]/72 sm:text-lg">
              {section.description}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {business.events.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] bg-white px-5 py-4 text-sm font-black uppercase text-[var(--brand-dark)] shadow-sm ring-1 ring-[var(--brand-border)]"
                >
                  {item}
                </div>
              ))}
            </div>

            <a
              href={createWhatsAppUrl(
                business.whatsapp,
                business.eventWhatsappMessage,
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-[var(--brand-dark)] px-8 py-4 text-sm font-black uppercase text-white transition hover:bg-[var(--brand-caramel)] hover:text-[var(--brand-dark)]"
            >
              {business.eventCta}
            </a>
          </div>

          <div className="relative">
            <div className="absolute -right-4 -top-4 hidden h-full w-full rounded-[2.5rem] border border-[var(--brand-border)] lg:block" />
            <img
              src={business.eventImage}
              alt="Mesa de postres y catering para evento"
              className="relative h-[520px] w-full rounded-[2.5rem] object-cover shadow-2xl shadow-[var(--brand-coffee)]/16"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BakeryEvents
