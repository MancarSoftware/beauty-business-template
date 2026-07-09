import { useState } from 'react'
import { createWhatsAppUrl } from '../utils/whatsapp'

function Contact({ business }) {
  const formCopy = business.contactForm ?? {
    eyebrow: 'Reserva directa',
    title: 'Cuéntanos qué servicio necesitas',
    responseLabel: 'Respuesta por WhatsApp',
    initialMessage: `Hola, quiero agendar una cita en ${business.name}.`,
    submitLabel: 'Enviar por WhatsApp',
  }
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: formCopy.initialMessage,
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    const nextValue =
      name === 'phone' ? value.replace(/\D/g, '').slice(0, 10) : value

    setFormData((current) => ({ ...current, [name]: nextValue }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const message = [
      `Hola ${business.name}, quiero agendar una cita.`,
      `Nombre: ${formData.name || 'No indicado'}`,
      `Teléfono: ${formData.phone || 'No indicado'}`,
      `Mensaje: ${formData.message || 'No indicado'}`,
    ].join('\n')

    window.open(createWhatsAppUrl(business.whatsapp, message), '_blank')
  }

  return (
    <section id="contacto" className="bg-[#fff8fa] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-sm font-semibold uppercase text-[var(--brand-accent-dark)]">
            Contacto
          </p>
          <h2 className="mt-4 font-display text-5xl font-semibold leading-tight text-[#130f12] md:text-7xl">
            {business.contactCta.title}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-700">
            {business.contactCta.text}
          </p>

          <div className="mt-10 grid gap-4 border-y border-[#ead8df] py-6">
            <div className="flex items-center justify-between gap-6">
              <span className="text-sm font-bold uppercase text-zinc-500">
                Horario
              </span>
              <span className="text-right text-sm font-semibold text-[#130f12]">
                {business.schedule}
              </span>
            </div>
            <div className="flex items-center justify-between gap-6">
              <span className="text-sm font-bold uppercase text-zinc-500">
                WhatsApp
              </span>
              <span className="text-right text-sm font-semibold text-[#130f12]">
                {business.phone}
              </span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="border-t border-[#ead8df]">
          <div className="flex flex-col gap-2 border-b border-[#ead8df] py-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase text-[var(--brand-accent-dark)]">
                {formCopy.eyebrow}
              </p>
              <h3 className="mt-2 font-display text-3xl font-semibold text-[#130f12]">
                {formCopy.title}
              </h3>
            </div>
            <p className="text-sm font-semibold text-zinc-500">
              {formCopy.responseLabel}
            </p>
          </div>

          <div className="grid gap-6 border-b border-[#ead8df] py-6 md:grid-cols-2">
            <label className="grid gap-3 text-sm font-semibold text-[#130f12]">
              Nombre
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="border-b border-[#d9c5ce] bg-transparent px-0 py-3 font-normal outline-none transition placeholder:text-zinc-400 focus:border-[color:var(--brand-accent-dark)]"
              />
            </label>
            <label className="grid gap-3 text-sm font-semibold text-[#130f12]">
              Teléfono
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                inputMode="numeric"
                pattern="[0-9]{1,10}"
                maxLength="10"
                placeholder="0999999999"
                className="border-b border-[#d9c5ce] bg-transparent px-0 py-3 font-normal outline-none transition placeholder:text-zinc-400 focus:border-[color:var(--brand-accent-dark)]"
              />
            </label>
          </div>

          <label className="grid gap-3 border-b border-[#ead8df] py-6 text-sm font-semibold text-[#130f12]">
            Mensaje
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="resize-none border-b border-[#d9c5ce] bg-transparent px-0 py-3 font-normal outline-none transition focus:border-[color:var(--brand-accent-dark)]"
            />
          </label>

          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-[#130f12] px-5 py-4 text-sm font-bold text-white transition hover:bg-[var(--brand-accent-dark)]"
          >
            {formCopy.submitLabel}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
