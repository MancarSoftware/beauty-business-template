import { useState } from 'react'

import { createWhatsAppUrl } from '../utils/whatsapp'

function ContactForm({ business }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: business.treatments[0]?.name ?? '',
    message: 'Hola, quiero reservar una cita esta semana.',
  })

  const inputClass =
    'rounded-full bg-[#fbf3ec] px-5 py-4 text-base font-medium normal-case outline-none ring-1 ring-[#17342f]/10 transition focus:ring-2 focus:ring-[var(--brand-accent)]'

  const handleChange = (event) => {
    const { name, value } = event.currentTarget

    setFormData((currentData) => ({
      ...currentData,
      [name]: name === 'phone' ? value.replace(/\D/g, '').slice(0, 10) : value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const whatsappMessage = [
      `Hola ${business.shortName}, quiero reservar una experiencia.`,
      '',
      `Nombre: ${formData.name || 'Por confirmar'}`,
      `Telefono: ${formData.phone || 'Por confirmar'}`,
      `Tratamiento de interes: ${formData.treatment || 'Por recomendar'}`,
      `Mensaje: ${formData.message || 'Quiero que me recomienden una opcion.'}`,
    ].join('\n')

    window.open(createWhatsAppUrl(business.whatsapp, whatsappMessage), '_blank')
  }

  return (
    <section className="bg-[#fbf3ec] px-4 py-20 text-[#17342f] sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[4rem] bg-white shadow-2xl shadow-[#17342f]/10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-[#17342f] p-6 text-white sm:p-8 lg:p-10">
          <p className="w-fit rounded-full bg-white/10 px-5 py-2 text-xs font-black uppercase text-[var(--brand-accent)]">
            Agenda una cita
          </p>
          <h2 className="mt-5 font-display text-5xl leading-[1.02] md:text-7xl">
            Cuentanos que necesitas y preparamos tu experiencia.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/66">
            Nuestro equipo revisa tu objetivo, disponibilidad y tipo de piel o
            tension para recomendarte la mejor opcion antes de confirmar.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] bg-white/8 p-5">
              <p className="text-3xl font-black">24h</p>
              <p className="mt-2 text-xs font-black uppercase text-white/50">
                reserva recomendada
              </p>
            </div>
            <div className="rounded-[2rem] bg-white/8 p-5">
              <p className="text-3xl font-black">1:1</p>
              <p className="mt-2 text-xs font-black uppercase text-white/50">
                recomendacion personalizada
              </p>
            </div>
          </div>
        </div>

        <form className="grid gap-5 p-6 sm:p-8 lg:p-10" onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-black uppercase">
              Nombre
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
              />
            </label>

            <label className="grid gap-2 text-sm font-black uppercase">
              Telefono
              <input
                type="tel"
                name="phone"
                placeholder="+593..."
                inputMode="numeric"
                maxLength={10}
                pattern="[0-9]*"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                className={inputClass}
              />
            </label>
          </div>

          <label className="grid gap-2 text-sm font-black uppercase">
            Tratamiento de interes
            <select
              name="treatment"
              value={formData.treatment}
              onChange={handleChange}
              className={inputClass}
            >
              {business.treatments.map((treatment) => (
                <option key={treatment.name}>{treatment.name}</option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-sm font-black uppercase">
            Mensaje
            <textarea
              name="message"
              rows="5"
              placeholder="Hola, quiero reservar una cita esta semana."
              value={formData.message}
              onChange={handleChange}
              className={`${inputClass} rounded-[2rem] resize-none`}
            />
          </label>

          <button
            type="submit"
            className="rounded-full bg-[var(--brand-accent)] px-7 py-5 text-center text-sm font-black uppercase text-[#09231f] shadow-xl shadow-[var(--brand-accent)]/20 transition hover:bg-[#17342f] hover:text-white"
          >
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
