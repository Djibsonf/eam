import { useState, useEffect } from 'react'
import logo from '../../assets/images/logo.png'

const WHATSAPP_NUMBER = '221772467752'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20cours%20d%27anglais.`

// Icônes SVG
function IconHome() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  )
}
function IconCours() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  )
}
function IconParcours() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>
      <circle cx="8" cy="10" r="1" fill="currentColor" stroke="none" opacity="0.6"/>
      <circle cx="16" cy="10" r="1" fill="currentColor" stroke="none" opacity="0.6"/>
    </svg>
  )
}
function IconApropos() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
      <circle cx="12" cy="8" r="4"/>
      <path d="M6 20v-2a6 6 0 0 1 12 0v2"/>
    </svg>
  )
}
function IconContact() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}
function IconWhatsApp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white" className="transition-all duration-300 group-hover:scale-110">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

// Liens du menu - "Services" devient "Nos Cours"
const navLinks = [
  { label: 'Accueil',  href: '#accueil',  Icon: IconHome     },
  { label: 'Nos cours', href: '#cours', Icon: IconCours  },
  { label: 'Parcours', href: '#parcours', Icon: IconParcours  },
  { label: 'À propos', href: '#apropos',  Icon: IconApropos   },
  { label: 'Contact',  href: '#contact',  Icon: IconContact   },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b-4 border-[#1B2A6B] bg-white/95 backdrop-blur-sm ${scrolled ? 'shadow-xl py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-3 group cursor-pointer">
            <img src={logo} alt="English A Must" className="h-12 w-auto object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" />
            <div className="hidden sm:block">
              <p className="text-[#1B2A6B] font-bold text-sm leading-tight tracking-wide group-hover:text-[#C0392B] transition-colors duration-300">English A Must</p>
              <p className="text-gray-400 text-[11px] leading-tight tracking-wide">Learning by doing</p>
            </div>
          </a>

          {/* Liens desktop */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ label, href, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  className="relative flex items-center gap-2 px-4 py-2.5 text-gray-700 font-semibold text-base rounded-xl hover:text-[#C0392B] transition-all duration-300 group overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
                  <span className="relative text-gray-400 group-hover:text-[#C0392B] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon />
                  </span>
                  <span className="relative">{label}</span>
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-[#1B2A6B] to-[#C0392B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* CTA WhatsApp */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 group"
          >
            <span className="group-hover:scale-110 transition-transform duration-300">
              <IconWhatsApp />
            </span>
            WhatsApp
          </a>

          {/* Burger mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-red-50 transition-all duration-300 group"
            aria-label="Menu"
          >
            <span className={`block h-0.5 bg-gradient-to-r from-[#1B2A6B] to-[#C0392B] transition-all duration-300 rounded-full ${menuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-5'}`} />
            <span className={`block h-0.5 bg-gradient-to-r from-[#1B2A6B] to-[#C0392B] transition-all duration-300 rounded-full ${menuOpen ? 'w-6 opacity-0' : 'w-5'}`} />
            <span className={`block h-0.5 bg-gradient-to-r from-[#1B2A6B] to-[#C0392B] transition-all duration-300 rounded-full ${menuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
          </button>
        </div>

        {/* Menu mobile */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="border-t border-gray-100 pt-4 pb-3 flex flex-col gap-1 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg">
            {navLinks.map(({ label, href, Icon }) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="flex items-center gap-3 px-4 py-3 text-gray-700 font-semibold text-base rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-red-50 hover:text-[#C0392B] transition-all duration-300 group"
              >
                <span className="text-gray-400 group-hover:text-[#C0392B] group-hover:scale-110 transition-all duration-300">
                  <Icon />
                </span>
                {label}
              </a>
            ))}
            <div className="border-t border-gray-100 mt-3 pt-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-md group"
              >
                <span className="group-hover:scale-110 transition-transform duration-300">
                  <IconWhatsApp />
                </span>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>
    </nav>
  )
}