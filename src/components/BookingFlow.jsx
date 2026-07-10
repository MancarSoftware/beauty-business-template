import { createWhatsAppUrl } from '../utils/whatsapp'

function BookingFlow({ business }) {
  const section = business.sections.process
  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    business.whatsappMessage,
  )

  return (
    <section
      id="reserva"
      className="bg-[#e8ddd0] px-4 py-16 text-[#09231f] sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden border border-[#09231f] bg-[#09231f] text-white lg:grid-cols-[0.85fr_1.15fr]">
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-black uppercase text-[var(--brand-accent)]">
              {section.eyebrow}
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-black uppercase leading-none md:text-6xl">
              {section.title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/68">
              {section.description}
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex bg-white px-7 py-4 text-sm font-black uppercase text-[#09231f] transition hover:bg-[var(--brand-accent)] hover:text-white"
            >
              Hablar con concierge
            </a>
          </div>

          <div className="grid border-t border-white/12 lg:border-l lg:border-t-0">
            {business.process.map((step, index) => (
              <article
                key={step.title}
                className="grid gap-5 border-b border-white/12 p-6 last:border-b-0 sm:grid-cols-[90px_1fr]"
              >
                <span className="text-5xl font-black text-[var(--brand-accent)]">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-2xl font-black uppercase leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-white/62">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingFlow
