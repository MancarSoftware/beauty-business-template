import { useEffect, useState } from 'react'
import { createWhatsAppUrl } from '../utils/whatsapp'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Precios', href: '#precios' },
  { label: 'Ubicación', href: '#ubicacion' },
]

function Navbar({ business }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const initials = business.shortName
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    business.whatsappMessage,
  )

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-[#ead8df]/25 bg-[#130f12]/86 shadow-2xl shadow-black/20 backdrop-blur-xl'
          : 'bg-gradient-to-b from-[#130f12]/72 to-transparent backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="relative flex h-11 w-11 items-center justify-center rounded-lg border border-[color:var(--brand-accent)] bg-[#f8edf2] text-sm font-bold text-[#130f12] shadow-lg shadow-black/30">
            <span className="absolute inset-1 rounded-md border border-[#130f12]/10" />
            <span className="relative">{initials}</span>
          </span>
          <span>
            <span className="block text-base font-semibold leading-5 text-white">
              {business.shortName}
            </span>
            <span className="block text-xs text-zinc-300">
              {business.type}
            </span>
          </span>
        </a>

        <div className="hidden items-center rounded-lg border border-white/12 bg-white/10 px-2 py-2 backdrop-blur md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-zinc-200 transition hover:bg-white/12 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-[var(--brand-accent)] px-4 py-2 text-sm font-bold text-zinc-950 transition hover:brightness-105"
          >
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white md:hidden"
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                isOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-5 bg-current transition ${
                isOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-white/10 bg-zinc-950/95 transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="mx-auto grid max-w-7xl gap-1 px-4 py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-3 text-sm font-medium text-zinc-200 transition hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 rounded-md bg-[var(--brand-accent)] px-4 py-3 text-center text-sm font-semibold text-zinc-950"
          >
            Agendar por WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
