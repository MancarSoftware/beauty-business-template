import { useEffect, useState } from 'react'
import { createWhatsAppUrl } from '../utils/whatsapp'

const navItems = [
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Tecnologia', href: '#tecnologia' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Paquetes', href: '#paquetes' },
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#061a2b]/8 bg-white/86 px-4 py-3 text-[#061a2b] shadow-lg shadow-[#061a2b]/5 backdrop-blur-xl sm:px-6 lg:px-8">
      <nav className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
        <a href="#inicio" className="flex items-center gap-3 text-[#061a2b]">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-[#061a2b] text-sm font-black text-white">
            {business.logoInitials}
          </span>
          <span>
            <span className="block text-lg font-black uppercase leading-5">
              {business.shortName}
            </span>
            <span className="block text-[11px] font-black uppercase tracking-[0.16em] text-[#087f83]">
              Clinica dental
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full bg-[#eefbff] p-1 text-xs font-black uppercase lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2.5 text-[#061a2b]/62 transition hover:bg-white hover:text-[#087f83]"
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
            className="rounded-full bg-[var(--brand-accent)] px-5 py-3 text-xs font-black uppercase text-[#061a2b] shadow-lg shadow-[var(--brand-accent)]/20 transition hover:-translate-y-0.5 hover:bg-[#061a2b] hover:text-white"
          >
            Agendar cita
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setIsOpen((current) => !current)}
          className="grid h-11 w-11 place-items-center rounded-full bg-[#061a2b] text-2xl font-light text-white lg:hidden"
        >
          {isOpen ? 'x' : '='}
        </button>
      </nav>

      <div
        className={`mx-auto mt-3 max-w-7xl overflow-hidden rounded-[1.5rem] bg-white shadow-2xl shadow-[#061a2b]/10 transition-all duration-300 lg:hidden ${
          isOpen ? 'max-h-[560px]' : 'max-h-0'
        }`}
      >
        <div className="grid gap-2 p-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-2xl bg-[#eefbff] px-4 py-4 text-sm font-black uppercase text-[#061a2b]"
            >
              {item.label}
            </a>
          ))}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="rounded-2xl bg-[var(--brand-accent)] px-4 py-4 text-center text-sm font-black uppercase text-[#061a2b]"
          >
            Agendar cita
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
