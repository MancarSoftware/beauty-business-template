import { useEffect, useState } from 'react'
import { createWhatsAppUrl } from '../utils/whatsapp'

const navItems = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Promos', href: '#promociones' },
  { label: 'Ritual', href: '#beneficios' },
  { label: 'Lookbook', href: '#galeria' },
  { label: 'Precios', href: '#precios' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
]

function Navbar({ business }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    business.whatsappMessage,
  )

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16)

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fff8fa]/92 shadow-lg shadow-[#130f12]/8 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#ead8df] bg-[#fff8fa] font-display text-base font-semibold text-[#130f12] shadow-lg shadow-black/10">
            BA
          </span>
          <span>
            <span
              className={`block font-display text-xl leading-5 transition ${
                isScrolled ? 'text-[#130f12]' : 'text-white'
              }`}
            >
              {business.shortName}
            </span>
            <span
              className={`block text-xs transition ${
                isScrolled ? 'text-zinc-500' : 'text-zinc-200'
              }`}
            >
              {business.type}
            </span>
          </span>
        </a>

        <div
          className={`hidden items-center gap-7 rounded-full px-6 py-3 text-sm font-semibold transition md:flex ${
            isScrolled
              ? 'border border-[#ead8df] bg-white/80 text-[#130f12]'
              : 'border border-white/15 bg-white/10 text-white backdrop-blur'
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-[var(--brand-accent)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className={`hidden rounded-full px-5 py-3 text-sm font-bold transition md:inline-flex ${
            isScrolled
              ? 'bg-[#130f12] text-white hover:bg-[var(--brand-accent-dark)]'
              : 'bg-[#fff8fa] text-[#130f12] hover:bg-[var(--brand-accent)]'
          }`}
        >
          Reservar
        </a>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition md:hidden ${
            isScrolled
              ? 'border-[#ead8df] bg-white text-[#130f12]'
              : 'border-white/20 bg-white/10 text-white backdrop-blur'
          }`}
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
        className={`overflow-hidden border-t border-[#ead8df] bg-[#fff8fa] transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="mx-auto grid max-w-7xl gap-1 px-4 py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-3 text-sm font-semibold text-[#130f12] transition hover:bg-[#f5e6ec]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 rounded-full bg-[#130f12] px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Agendar por WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
