import { useState } from 'react'
import { createWhatsAppUrl } from '../utils/whatsapp'

function Contact({ business }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: 'Hola, quiero agendar una cita.',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
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
    <section id="contacto" className="bg-zinc-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase text-amber-700">
            Contacto
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-zinc-950 md:text-5xl">
            {business.contactCta.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            {business.contactCta.text}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {Object.entries(business.social).map(([name, url]) => (
              <a
                key={name}
                href={url}
                className="rounded-md border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold capitalize text-zinc-800 transition hover:border-amber-300 hover:text-zinc-950"
              >
                {name}
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-lg border border-zinc-200 bg-white p-5 shadow-xl shadow-zinc-200/80 md:p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-zinc-800">
              Nombre
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="rounded-md border border-zinc-200 px-4 py-3 font-normal outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-zinc-800">
              Teléfono
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+593..."
                className="rounded-md border border-zinc-200 px-4 py-3 font-normal outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
              />
            </label>
          </div>

          <label className="mt-5 grid gap-2 text-sm font-semibold text-zinc-800">
            Mensaje
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="resize-none rounded-md border border-zinc-200 px-4 py-3 font-normal outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
            />
          </label>

          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-zinc-950 px-5 py-4 text-sm font-bold text-white transition hover:bg-zinc-800"
          >
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
