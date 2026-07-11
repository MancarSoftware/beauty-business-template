function Dentists({ business }) {
  const section = business.sections.dentists

  return (
    <section
      id="equipo"
      className="bg-white px-4 py-20 text-[#111827] sm:px-6 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionIntro section={section} />

        <div className="grid border-y border-[#111827]/12 lg:grid-cols-3">
          {business.dentists.map((dentist, index) => (
            <article
              key={dentist.name}
              className="group border-b border-[#111827]/12 py-8 lg:border-b-0 lg:border-r lg:px-7 last:lg:border-r-0"
            >
              <div className="grid aspect-square max-h-72 place-items-center bg-[#fbfaf6]">
                <div className="grid h-32 w-32 place-items-center rounded-full border border-[#111827]/12 bg-white text-4xl font-black text-[#227684] transition group-hover:scale-105">
                  {dentist.name
                    .split(' ')
                    .slice(0, 2)
                    .map((part) => part[0])
                    .join('')}
                </div>
              </div>

              <p className="mt-7 text-xs font-black uppercase tracking-[0.22em] text-[#111827]/35">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-3xl font-black uppercase leading-tight">
                {dentist.name}
              </h3>
              <p className="mt-3 text-sm font-black uppercase text-[#227684]">
                {dentist.role}
              </p>
              <p className="mt-5 text-base leading-7 text-[#111827]/62">
                {dentist.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionIntro({ section }) {
  return (
    <div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.24em] text-[#227684]">
          {section.eyebrow}
        </p>
        <h2 className="mt-5 text-5xl font-black uppercase leading-[0.94] md:text-7xl">
          {section.title}
        </h2>
      </div>
      <p className="max-w-2xl text-lg leading-8 text-[#111827]/62">
        {section.description}
      </p>
    </div>
  )
}

export default Dentists
