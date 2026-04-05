import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import Logo from './Logo'

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Plataforma', href: '#plataforma' },
  { label: 'Nosotros', href: '#nosotros' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-sm border-b border-white/50' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-[72px]">
        <Logo />

        <ul className="hidden lg:flex items-center gap-1 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => scrollTo(e, l.href)}
                className="text-[13px] font-medium text-muted hover:text-dark no-underline px-4 py-2 rounded-lg hover:bg-gray-50 transition-all"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            onClick={(e) => scrollTo(e, '#contacto')}
            className="hidden lg:inline-flex items-center gap-2 text-[13px] font-semibold text-white no-underline px-5 py-2.5 bg-primary rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
          >
            Solicitar Demo <ArrowRight size={14} />
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-dark rounded-lg hover:bg-gray-50"
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden glass border-t border-border overflow-hidden"
          >
            <div className="px-5 py-5 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => scrollTo(e, l.href)}
                  className="text-sm font-medium text-dark no-underline py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={(e) => scrollTo(e, '#contacto')}
                className="text-sm font-semibold text-white bg-primary text-center py-3 rounded-xl mt-2 no-underline"
              >
                Solicitar Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
