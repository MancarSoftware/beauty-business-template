import { createWhatsAppUrl } from '../utils/whatsapp'
import SectionHeader from './SectionHeader'

function Plans({ business }) {
  const section = business.sections.plans

  return (
    <section
      id="paquetes"
      className="bg-[#f4fbff] px-4 py-20 text-[#08111f] sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {business.plans.map((item) => (
            <article
              key={item.name}
              className={`relative flex min-h-[540px] flex-col overflow-hidden rounded-[2.5rem] p-6 shadow-xl transition duration-300 hover:-translate-y-3 ${
                item.featured
                  ? 'bg-[#08111f] text-white shadow-[#08111f]/20'
                  : 'bg-white text-[#08111f] shadow-[#08111f]/8'
              }`}
            >
              <div className="absolute -right-20 top-20 h-48 w-48 rounded-full bg-[var(--brand-accent)]/20" />

              <p
                className={`relative w-fit rounded-full px-4 py-2 text-xs font-black uppercase ${
                  item.featured
                    ? 'bg-[var(--brand-accent)] text-[#08111f]'
                    : 'bg-[#eefcff] text-[#0c8b91]'
                }`}
              >
                {item.tag}
              </p>

              <h3 className="relative mt-10 text-4xl font-black uppercase leading-none">
                {item.name}
              </h3>
              <p className="relative mt-5 min-h-[112px] text-base leading-7 text-current/65">
                {item.description}
              </p>

              <p className="relative mt-8 text-6xl font-black leading-none">
                {item.price}
              </p>

              <ul className="relative mt-8 flex-1 space-y-3">
                {item.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm font-bold">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--brand-accent)]" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <a
                href={createWhatsAppUrl(business.whatsapp, item.whatsappMessage)}
                target="_blank"
                rel="noreferrer"
                className={`relative mt-10 inline-flex justify-center rounded-full px-7 py-4 text-sm font-black uppercase transition ${
                  item.featured
                    ? 'bg-white text-[#08111f] hover:bg-[var(--brand-accent)]'
                    : 'bg-[#08111f] text-white hover:bg-[var(--brand-accent)] hover:text-[#08111f]'
                }`}
              >
                Agendar paquete
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Plans
