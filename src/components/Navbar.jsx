import { useEffect, useState } from 'react'
import { createWhatsAppUrl } from '../utils/whatsapp'

const navItems = [
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Concierge', href: '#reserva' },
  { label: 'Experiencias', href: '#paquetes' },
  { label: 'Estandar', href: '#experiencia' },
  { label: 'Ubicacion', href: '#ubicacion' },
]

function Navbar({ business }) {
  const [isOpen, setIsOpen] = useState(false)
  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    business.whatsappMessage,
  )

  useEffect(() => {
    if (!isOpen) return undefined

    const closeMenu = () => setIsOpen(false)
    window.addEventListener('touchmove', closeMenu, { passive: true })
    window.addEventListener('scroll', closeMenu, { passive: true })

    return () => {
      window.removeEventListener('touchmove', closeMenu)
      window.removeEventListener('scroll', closeMenu)
    }
  }, [isOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#09231f]/10 bg-[#fbf7f1]/92 text-[#09231f] backdrop-blur-xl">
      <div className="hidden border-b border-[#09231f]/10 bg-[#09231f] text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs font-bold uppercase text-white/72 lg:px-8">
          <span>{business.phone}</span>
          <span>Lunes a sabado · reserva previa por WhatsApp</span>
          <span>{business.email}</span>
        </div>
      </div>

      <nav className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-4 py-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center bg-[#09231f] text-sm font-black text-white">
            {business.logoInitials}
          </span>
          <span>
            <span className="block text-lg font-black uppercase leading-5">
              {business.shortName}
            </span>
            <span className="block text-[11px] font-black uppercase text-[#09231f]/48">
              Wellness concierge
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 text-xs font-black uppercase text-[#09231f]/58 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-[var(--brand-accent-dark)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden justify-end lg:flex">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="border border-[#09231f] px-5 py-3 text-xs font-black uppercase text-[#09231f] transition hover:bg-[#09231f] hover:text-white"
          >
            Solicitar cita
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setIsOpen((current) => !current)}
          className="grid h-11 w-11 place-items-center border border-[#09231f]/20 bg-white text-2xl font-light text-[#09231f] lg:hidden"
        >
          {isOpen ? 'x' : '='}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-[#09231f]/10 bg-[#fbf7f1] transition-all duration-300 lg:hidden ${
          isOpen ? 'max-h-[560px]' : 'max-h-0'
        }`}
      >
        <div className="mx-auto grid max-w-7xl gap-2 px-4 py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="border border-[#09231f]/10 bg-white px-4 py-4 text-sm font-black uppercase text-[#09231f]"
            >
              {item.label}
            </a>
          ))}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-2 bg-[#09231f] px-4 py-4 text-center text-sm font-black uppercase text-white"
          >
            Solicitar cita
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
