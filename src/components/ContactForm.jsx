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
    'w-full rounded-2xl border border-[#08111f]/10 bg-white px-5 py-4 text-base font-semibold text-[#08111f] outline-none transition placeholder:text-[#08111f]/35 focus:border-[#0c8b91] focus:ring-4 focus:ring-[var(--brand-accent)]/20'

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
    <section className="bg-[#f4fbff] px-4 py-20 text-[#08111f] sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[3rem] bg-white shadow-2xl shadow-[#08111f]/10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative bg-[#08111f] p-6 text-white sm:p-8 lg:p-10">
          <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--brand-accent),var(--brand-secondary))]" />
          <p className="w-fit rounded-full bg-white/8 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-[var(--brand-accent)]">
            Cita directa
          </p>
          <h2 className="mt-6 text-5xl font-black uppercase leading-[0.94] md:text-7xl">
            Cuentanos que necesitas revisar.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/66">
            Te respondemos por WhatsApp con horario disponible, duracion
            estimada y recomendaciones antes de llegar a la clinica.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] bg-white/8 p-5">
              <p className="text-3xl font-black">10 digitos</p>
              <p className="mt-2 text-xs font-black uppercase text-white/50">
                telefono validado
              </p>
            </div>
            <div className="rounded-[2rem] bg-white/8 p-5">
              <p className="text-3xl font-black">WhatsApp</p>
              <p className="mt-2 text-xs font-black uppercase text-white/50">
                envio inmediato
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
            className="rounded-full bg-[var(--brand-accent)] px-7 py-5 text-center text-sm font-black uppercase text-[#08111f] shadow-xl shadow-[var(--brand-accent)]/20 transition hover:bg-[#08111f] hover:text-white"
          >
            Enviar datos por WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
