import { createWhatsAppUrl } from '../utils/whatsapp'

function ContactForm({ business }) {
  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    'Hola Serena Spa, quiero que me ayuden a elegir un tratamiento.',
  )

  return (
    <section className="bg-[#fbf7f1] px-4 py-16 text-[#09231f] sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl overflow-hidden border border-[#09231f] bg-white lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-[#09231f] p-6 text-white sm:p-8 lg:p-10">
          <p className="text-xs font-black uppercase text-[var(--brand-accent)]">
            Agenda una cita
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-none md:text-6xl">
            Cuentanos que necesitas y preparamos tu experiencia.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/66">
            Nuestro equipo revisa tu objetivo, disponibilidad y tipo de piel o
            tension para recomendarte la mejor opcion antes de confirmar.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="border border-white/12 p-4">
              <p className="text-3xl font-black">24h</p>
              <p className="mt-2 text-xs font-black uppercase text-white/50">
                reserva recomendada
              </p>
            </div>
            <div className="border border-white/12 p-4">
              <p className="text-3xl font-black">1:1</p>
              <p className="mt-2 text-xs font-black uppercase text-white/50">
                recomendacion personalizada
              </p>
            </div>
          </div>
        </div>

        <form className="grid gap-5 p-6 sm:p-8 lg:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-black uppercase">
              Nombre
              <input
                type="text"
                placeholder="Tu nombre"
                className="border border-[#09231f]/16 bg-[#fbf7f1] px-4 py-4 text-base font-medium normal-case outline-none focus:border-[#09231f]"
              />
            </label>

            <label className="grid gap-2 text-sm font-black uppercase">
              Telefono
              <input
                type="tel"
                placeholder="+593..."
                inputMode="numeric"
                maxLength={10}
                pattern="[0-9]*"
                onInput={(event) => {
                  event.currentTarget.value = event.currentTarget.value
                    .replace(/\D/g, '')
                    .slice(0, 10)
                }}
                className="border border-[#09231f]/16 bg-[#fbf7f1] px-4 py-4 text-base font-medium normal-case outline-none focus:border-[#09231f]"
              />
            </label>
          </div>

          <label className="grid gap-2 text-sm font-black uppercase">
            Tratamiento de interes
            <select className="border border-[#09231f]/16 bg-[#fbf7f1] px-4 py-4 text-base font-medium normal-case outline-none focus:border-[#09231f]">
              {business.treatments.map((treatment) => (
                <option key={treatment.name}>{treatment.name}</option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-sm font-black uppercase">
            Mensaje
            <textarea
              rows="5"
              placeholder="Hola, quiero reservar una cita esta semana."
              className="resize-none border border-[#09231f]/16 bg-[#fbf7f1] px-4 py-4 text-base font-medium normal-case outline-none focus:border-[#09231f]"
            />
          </label>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-[var(--brand-accent)] px-7 py-5 text-center text-sm font-black uppercase text-white transition hover:bg-[#09231f]"
          >
            Enviar por WhatsApp
          </a>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
