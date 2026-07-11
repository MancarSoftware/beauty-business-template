function Testimonials({ business }) {
  const section = business.sections.testimonials

  return (
    <section className="bg-[#fff7ec] px-4 py-20 text-[#172033] sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <p className="mx-auto w-fit rounded-full bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-accent-dark)]">
            {section.eyebrow}
          </p>
          <h2 className="mt-6 text-5xl font-black uppercase leading-[0.96] md:text-7xl">
            {section.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#172033]/62">
            {section.description}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {business.testimonials.map((item, index) => (
            <article
              key={item.name}
              className={`rounded-[2rem] p-6 shadow-xl shadow-[#172033]/6 ${
                index === 1 ? 'bg-[#172033] text-white' : 'bg-white text-[#172033]'
              }`}
            >
              <div className="flex items-center justify-between">
                <p
                  className={`text-6xl font-black ${
                    index === 1 ? 'text-[var(--brand-accent)]' : 'text-[#d94f32]'
                  }`}
                >
                  "
                </p>
                <span
                  className={`rounded-full px-4 py-2 text-sm font-black ${
                    index === 1 ? 'bg-white text-[#172033]' : 'bg-[#fff7ec]'
                  }`}
                >
                  {item.rating}
                </span>
              </div>
              <p className="mt-6 min-h-[160px] text-lg leading-8 text-current/72">
                {item.quote}
              </p>
              <div className="mt-8 border-t border-current/10 pt-5">
                <p className="font-black uppercase">{item.name}</p>
                <p className="mt-1 text-sm text-current/55">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
