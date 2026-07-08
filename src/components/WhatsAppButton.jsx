import { createWhatsAppUrl } from '../utils/whatsapp'

function WhatsAppButton({ business }) {
  return (
    <a
      href={createWhatsAppUrl(business.whatsapp, business.whatsappMessage)}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-lg bg-[#25d366] text-sm font-black text-white shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:bg-[#20bd5a] focus:outline-none focus:ring-4 focus:ring-green-200"
    >
      WA
    </a>
  )
}

export default WhatsAppButton
