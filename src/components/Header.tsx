import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/profile'

const navLinks = [
  { href: '#hero', label: 'Início' },
  { href: '#about', label: 'Sobre' },
  { href: '#metrics', label: 'Números' },
  { href: '#contact', label: 'Contato' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="print:hidden bg-offwhite border-b border-bege/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-8">
            <a href="#hero" className="flex items-center gap-2.5 group">
              <span className="font-cursive text-3xl md:text-4xl text-dourado">{profile.name}</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-marrom-claro hover:text-dourado transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-dourado after:to-rosa-metalico after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-marrom-claro hover:text-dourado hover:bg-bege/30 transition-all"
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-6 pb-6 pt-2 flex flex-col gap-2 bg-offwhite/95 backdrop-blur-xl border-b border-bege/30">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-marrom-claro hover:text-dourado hover:bg-bege/20 transition-all text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
