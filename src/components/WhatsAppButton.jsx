import { createWhatsAppUrl } from '../utils/whatsapp'

function WhatsAppButton({ business }) {
  return (
    <a
      href={createWhatsAppUrl(business.whatsapp, business.whatsappMessage)}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-3 right-3 z-50 inline-flex h-11 w-11 items-center justify-center gap-2 rounded-full bg-[var(--brand-dark)] text-sm font-black text-white shadow-2xl shadow-[var(--brand-coffee)]/30 transition hover:-translate-y-1 hover:bg-[var(--brand-caramel)] hover:text-[var(--brand-dark)] focus:outline-none focus:ring-4 focus:ring-[var(--brand-caramel)]/30 sm:bottom-5 sm:right-5 sm:h-auto sm:w-auto sm:px-5 sm:py-4"
    >
      <span className="text-xs font-black sm:hidden">WA</span>
      <span className="hidden h-2.5 w-2.5 rounded-full bg-white sm:block" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  )
}

export default WhatsAppButton
