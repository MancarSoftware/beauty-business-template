import { createWhatsAppUrl } from '../utils/whatsapp'
import SectionHeader from './SectionHeader'

function Programs({ business }) {
  const section = business.sections?.programs ?? {
    eyebrow: 'Entrenamientos',
    title: 'Programas para cada objetivo',
    description: 'Elige el programa ideal para tu meta.',
  }

  return (
    <section
      id="programas"
      className="bg-white px-4 py-16 text-[#101010] sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {business.programs.map((program) => (
            <article
              key={program.name}
              className="group flex min-h-[280px] flex-col rounded-[1.75rem] border border-zinc-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--brand-accent)] hover:shadow-xl hover:shadow-black/10"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff7e8] text-3xl font-black text-[var(--brand-accent-dark)] transition group-hover:bg-[var(--brand-accent)] group-hover:text-white">
                {program.icon}
              </div>

              <h3 className="mt-6 text-lg font-black uppercase tracking-tight text-[#101010]">
                {program.name}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-zinc-600">
                {program.description}
              </p>

              <a
                href={createWhatsAppUrl(
                  business.whatsapp,
                  program.whatsappMessage ??
                    `Hola ${business.name}, quiero información sobre ${program.name}.`,
                )}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full border border-[var(--brand-accent)] px-5 py-3 text-xs font-black uppercase text-[#101010] transition hover:bg-[var(--brand-accent)] hover:text-white"
              >
                Ver programa
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs
