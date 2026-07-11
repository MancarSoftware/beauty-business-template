import { createWhatsAppUrl } from '../utils/whatsapp'

function WhatsAppButton({ business }) {
  return (
    <a
      href={createWhatsAppUrl(business.whatsapp, business.whatsappMessage)}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#08111f] px-5 py-4 text-sm font-black text-white shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:bg-[var(--brand-accent)] hover:text-[#08111f] focus:outline-none focus:ring-4 focus:ring-[var(--brand-accent)]/30"
    >
      <span className="h-2.5 w-2.5 rounded-full bg-white" />
      WhatsApp
    </a>
  )
}

export default WhatsAppButton
