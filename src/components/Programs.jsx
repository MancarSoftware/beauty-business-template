import { createWhatsAppUrl } from '../utils/whatsapp'
import SectionHeader from './SectionHeader'

function Programs({ business }) {
  const section = business.sections?.programs ?? {
    eyebrow: 'Programas',
    title: 'Entrenamiento según tu objetivo',
    description: 'Elige el programa ideal para empezar.',
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
              className="group flex min-h-[320px] flex-col rounded-[2rem] border border-zinc-200 bg-[#fbfaf7] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--brand-accent)] hover:bg-white hover:shadow-xl hover:shadow-black/10"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl font-black text-[var(--brand-accent-dark)]">
                  {program.icon}
                </span>

                <span className="h-px flex-1 bg-zinc-200" />
              </div>

              <h3 className="mt-8 text-xl font-black uppercase leading-tight text-[#101010]">
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
                className="mt-7 inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-xs font-black uppercase text-[#101010] transition group-hover:border-[var(--brand-accent)] group-hover:bg-[var(--brand-accent)] group-hover:text-white"
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