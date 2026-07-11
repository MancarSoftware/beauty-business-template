import { useState } from 'react'

import { createWhatsAppUrl } from '../utils/whatsapp'

function TreatmentSelector({ business }) {
  const section = business.sections.selector
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selected = business.selectorOptions[selectedIndex]

  return (
    <section className="bg-[#08111f] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="w-fit rounded-full bg-white/8 px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-accent)]">
              {section.eyebrow}
            </p>
            <h2 className="mt-6 text-5xl font-black uppercase leading-[0.94] md:text-7xl">
              {section.title}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/62">
              {section.description}
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-3">
              {business.selectorOptions.map((option, index) => {
                const isActive = selectedIndex === index

                return (
                  <button
                    key={option.need}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className={`group grid gap-2 rounded-[1.75rem] p-5 text-left transition duration-300 ${
                      isActive
                        ? 'bg-[var(--brand-accent)] text-[#08111f] shadow-2xl shadow-[var(--brand-accent)]/20'
                        : 'bg-white/8 text-white hover:-translate-y-1 hover:bg-white hover:text-[#08111f]'
                    }`}
                  >
                    <span className="text-xs font-black uppercase tracking-[0.18em] opacity-55">
                      0{index + 1}
                    </span>
                    <span className="text-xl font-black uppercase leading-tight">
                      {option.need}
                    </span>
                  </button>
                )
              })}
            </div>

            <article className="relative overflow-hidden rounded-[2.5rem] bg-white p-6 text-[#08111f] shadow-2xl shadow-black/20">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[var(--brand-accent)]/25" />
              <div className="relative">
                <p className="w-fit rounded-full bg-[#eefcff] px-4 py-2 text-xs font-black uppercase text-[#0c8b91]">
                  {selected.urgency}
                </p>
                <h3 className="mt-7 text-4xl font-black uppercase leading-none md:text-5xl">
                  {selected.result}
                </h3>
                <p className="mt-6 text-base leading-8 text-[#08111f]/66">
                  {selected.description}
                </p>

                <div className="mt-8 rounded-[2rem] bg-[#08111f] p-5 text-white">
                  <p className="text-xs font-black uppercase text-[var(--brand-accent)]">
                    Mensaje sugerido
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    {selected.whatsappMessage}
                  </p>
                </div>

                <a
                  href={createWhatsAppUrl(
                    business.whatsapp,
                    selected.whatsappMessage,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex w-full justify-center rounded-full bg-[var(--brand-accent)] px-7 py-4 text-sm font-black uppercase text-[#08111f] transition hover:bg-[#08111f] hover:text-white"
                >
                  Escribir con esta consulta
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TreatmentSelector
