import SectionHeader from './SectionHeader'
import { createWhatsAppUrl } from '../utils/whatsapp'

function Pricing({ business }) {
  return (
    <section id="precios" className="bg-zinc-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Precios y paquetes"
          title="Opciones claras para reservar con confianza"
          description="Paquetes comerciales pensados para que el cliente compare rápido y escriba directo por WhatsApp."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {business.pricing.map((plan) => {
            const message = `Hola ${business.name}, quiero agendar el paquete ${plan.name}.`

            return (
              <article
                key={plan.name}
                className={`rounded-lg border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                  plan.featured
                    ? 'border-amber-300 bg-zinc-950 text-white shadow-zinc-300/70'
                    : 'border-zinc-200 bg-white text-zinc-950 shadow-zinc-200/70'
                }`}
              >
                {plan.featured ? (
                  <p className="mb-4 inline-flex rounded-md bg-amber-300 px-3 py-1 text-xs font-bold text-zinc-950">
                    Mas reservado
                  </p>
                ) : null}
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p
                  className={`mt-3 text-sm leading-6 ${
                    plan.featured ? 'text-zinc-300' : 'text-zinc-600'
                  }`}
                >
                  {plan.description}
                </p>
                <p className="mt-6 text-4xl font-semibold">{plan.price}</p>

                <ul className="mt-6 space-y-3">
                  {plan.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3 text-sm">
                      <span
                        className={`mt-1 h-2 w-2 rounded-full ${
                          plan.featured ? 'bg-amber-300' : 'bg-amber-600'
                        }`}
                      />
                      <span
                        className={
                          plan.featured ? 'text-zinc-200' : 'text-zinc-700'
                        }
                      >
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={createWhatsAppUrl(business.whatsapp, message)}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-8 block rounded-md px-4 py-3 text-center text-sm font-bold transition ${
                    plan.featured
                      ? 'bg-amber-300 text-zinc-950 hover:bg-amber-200'
                      : 'bg-zinc-950 text-white hover:bg-zinc-800'
                  }`}
                >
                  Agendar paquete
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Pricing
