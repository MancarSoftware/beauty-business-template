import { useState } from 'react'

import { createWhatsAppUrl } from '../utils/whatsapp'

function ContactForm({ business }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: business.services[0]?.name ?? '',
    message: 'Hola, quiero agendar una valoracion dental.',
  })

  const fieldClass =
    'w-full border border-[#111827]/12 bg-white px-5 py-4 text-base font-semibold text-[#111827] outline-none transition placeholder:text-[#111827]/35 focus:border-[#111827] focus:ring-4 focus:ring-[var(--brand-accent)]/25'

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
      `Hola ${business.shortName}, quiero agendar una cita dental.`,
      '',
      `Nombre: ${formData.name || 'Por confirmar'}`,
      `Telefono: ${formData.phone || 'Por confirmar'}`,
      `Tratamiento de interes: ${formData.service || 'Por recomendar'}`,
      `Mensaje: ${formData.message || 'Quiero una valoracion.'}`,
    ].join('\n')

    window.open(createWhatsAppUrl(business.whatsapp, whatsappMessage), '_blank')
  }

  return (
    <section className="bg-white px-4 py-20 text-[#111827] sm:px-6 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#227684]">
            Cita directa
          </p>
          <h2 className="mt-5 text-5xl font-black uppercase leading-[0.94] md:text-7xl">
            Cuentanos que necesitas revisar.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#111827]/62">
            Te respondemos por WhatsApp con horario disponible, duracion
            estimada y recomendaciones antes de llegar a la clinica.
          </p>
          <div className="mt-10 grid max-w-xl border-y border-[#111827]/12 md:grid-cols-2">
            <div className="border-b border-[#111827]/12 py-5 md:border-b-0 md:border-r md:pr-5">
              <p className="text-3xl font-black">10 digitos</p>
              <p className="mt-2 text-xs font-black uppercase text-[#111827]/45">
                telefono validado
              </p>
            </div>
            <div className="py-5 md:pl-5">
              <p className="text-3xl font-black">WhatsApp</p>
              <p className="mt-2 text-xs font-black uppercase text-[#111827]/45">
                envio inmediato
              </p>
            </div>
          </div>
        </div>

        <form className="grid gap-5" onSubmit={handleSubmit}>
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
                className={fieldClass}
              />
            </label>

            <label className="grid gap-2 text-sm font-black uppercase">
              Telefono
              <input
                type="tel"
                name="phone"
                placeholder="0999999999"
                inputMode="numeric"
                maxLength={10}
                pattern="[0-9]*"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                className={fieldClass}
              />
            </label>
          </div>

          <label className="grid gap-2 text-sm font-black uppercase">
            Tratamiento de interes
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={fieldClass}
            >
              {business.services.map((service) => (
                <option key={service.name}>{service.name}</option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-sm font-black uppercase">
            Mensaje
            <textarea
              name="message"
              rows="5"
              placeholder="Hola, quiero agendar una valoracion dental."
              value={formData.message}
              onChange={handleChange}
              className={`${fieldClass} resize-none`}
            />
          </label>

          <button
            type="submit"
            className="bg-[#111827] px-7 py-5 text-center text-sm font-black uppercase text-white transition hover:bg-[var(--brand-accent)] hover:text-[#111827]"
          >
            Enviar datos por WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
