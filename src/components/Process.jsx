import { createWhatsAppUrl } from '../utils/whatsapp'
import SectionHeader from './SectionHeader'

function Process({ business }) {
  const section = business.sections?.process ?? {
    eyebrow: 'Cómo funciona',
    title: 'Empieza con un plan, no con improvisación',
    description:
      'Un proceso simple para entrenar con dirección desde el primer día.',
  }

  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    business.whatsappMessage,
  )

  return (
    <section
      id="proceso"
      className="bg-white px-4 py-16 text-[#101010] sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <article className="rounded-[2.5rem] bg-[#101010] p-8 text-white shadow-2xl shadow-black/20 lg:p-10">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--brand-accent)]">
              Primera visita
            </p>

            <h3 className="mt-5 font-display text-4xl font-black uppercase leading-tight md:text-5xl">
              Conoce tu punto de partida.
            </h3>

            <p className="mt-5 text-sm leading-7 text-zinc-300">
              Antes de elegir cualquier rutina, revisamos tu objetivo, nivel,
              disponibilidad y condición actual para recomendarte el plan más
              adecuado.
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-zinc-400">
                Recomendado para nuevos miembros
              </p>

              <p className="mt-3 text-2xl font-black text-[var(--brand-accent)]">
                Evaluación inicial
              </p>

              <p className="mt-2 text-sm leading-6 text-zinc-300">
                Agenda por WhatsApp y recibe orientación antes de empezar.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[var(--brand-accent)] px-6 py-4 text-sm font-black uppercase text-white transition hover:bg-[var(--brand-accent-dark)]"
            >
              Agendar evaluación
            </a>
          </article>

          <div className="grid gap-5 sm:grid-cols-2">
            {business.process.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[2rem] border border-black/10 bg-[#fbfaf7] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-black/10"
              >
                <div className="flex items-center justify-between gap-5">
                  <span className="font-display text-5xl font-black text-[var(--brand-accent-dark)]">
                    0{index + 1}
                  </span>

                  <span className="h-px flex-1 bg-zinc-200" />
                </div>

                <h3 className="mt-7 text-xl font-black uppercase leading-tight text-[#101010]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process