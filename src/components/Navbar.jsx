import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X } from '@phosphor-icons/react'
import './Navbar.css'

const links = [
  { label: 'O Grupo', href: '#empresa' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Obras', href: '#portfolio' },
  { label: 'Processo', href: '#processo' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <div className="nav-container-inner">
          <div className="nav-left">
            <a href="#" className="nav-brand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
              MOLTE<span className="brand-dot">.</span>
            </a>
          </div>

          <div className="nav-center">
            <ul className="nav-links">
              {links.map((l) => (
                <li key={l.label}>
                  <button className="nav-link" onClick={() => handleLink(l.href)}>
                    {l.label}
                    <span className="nav-underline" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav-right">
            <button className="nav-cta-pill" onClick={() => handleLink('#contato')}>
              Fale com Especialista
              <span className="nav-cta-glow"></span>
            </button>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              {menuOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mob-links">
              {links.map((l, i) => (
                <motion.button
                  key={l.label}
                  className="mob-link"
                  onClick={() => handleLink(l.href)}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * i + 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="mob-num">{String(i + 1).padStart(2, '0')}</span>
                  {l.label}
                </motion.button>
              ))}
            </div>
            <div className="mob-footer">
              <a href="https://api.whatsapp.com/send/?phone=5511961880078" target="_blank" rel="noreferrer" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                Solicitar Vistoria Gratuita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
