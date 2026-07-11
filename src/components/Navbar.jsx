import { useEffect, useState } from 'react'
import { createWhatsAppUrl } from '../utils/whatsapp'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Metodo', href: '#tecnologia' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Planes', href: '#paquetes' },
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
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#111827]/10 bg-[#fbfaf6]/92 px-4 py-3 backdrop-blur-xl lg:hidden">
        <nav className="flex items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center gap-3 text-[#111827]">
            <span className="grid h-11 w-11 place-items-center border border-[#111827] text-sm font-black">
              {business.logoInitials}
            </span>
            <span>
              <span className="block text-lg font-black uppercase leading-5">
                {business.shortName}
              </span>
              <span className="block text-[11px] font-black uppercase tracking-[0.18em] text-[#111827]/45">
                clinica dental
              </span>
            </span>
          </a>

          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setIsOpen((current) => !current)}
            className="grid h-11 w-11 place-items-center bg-[#111827] text-2xl font-light text-white"
          >
            {isOpen ? 'x' : '='}
          </button>
        </nav>

        <div
          className={`mt-3 overflow-hidden bg-white shadow-2xl shadow-[#111827]/10 transition-all duration-300 ${
            isOpen ? 'max-h-[620px]' : 'max-h-0'
          }`}
        >
          <div className="grid gap-1 p-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-[#111827]/8 px-3 py-4 text-sm font-black uppercase text-[#111827]"
              >
                {item.label}
              </a>
            ))}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 bg-[#111827] px-4 py-4 text-center text-sm font-black uppercase text-white"
            >
              Agendar cita
            </a>
          </div>
        </div>
      </header>

      <aside className="fixed inset-y-0 left-0 z-50 hidden w-72 border-r border-[#111827]/10 bg-[#fbfaf6] px-7 py-8 lg:flex lg:flex-col">
        <a href="#inicio" className="text-[#111827]">
          <span className="grid h-14 w-14 place-items-center border border-[#111827] text-lg font-black">
            {business.logoInitials}
          </span>
          <span className="mt-5 block text-2xl font-black uppercase leading-none">
            {business.shortName}
          </span>
          <span className="mt-2 block text-xs font-black uppercase tracking-[0.24em] text-[#111827]/45">
            odontologia privada
          </span>
        </a>

        <nav className="mt-16 grid gap-1">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="group grid grid-cols-[2.5rem_1fr] items-center border-t border-[#111827]/10 py-4 text-sm font-black uppercase text-[#111827]/58 transition hover:text-[#111827]"
            >
              <span className="text-xs text-[#111827]/35 transition group-hover:text-[var(--brand-accent-dark)]">
                0{index + 1}
              </span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#111827]/40">
            contacto
          </p>
          <p className="mt-3 text-sm font-black">{business.phone}</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 flex justify-center bg-[#111827] px-5 py-4 text-xs font-black uppercase text-white transition hover:bg-[var(--brand-accent)] hover:text-[#111827]"
          >
            Agendar cita
          </a>
        </div>
      </aside>
    </>
  )
}

export default Navbar
