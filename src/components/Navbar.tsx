
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { label: 'Product', href: '#product' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '#docs' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <a href="#product" className="navbar-logo" aria-label="Home">
        <svg width="35" height="35" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="1.7"
          strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 11l2-5h11l4 5h2v6h-2" />
          <path d="M3 11v6h2" />
          <path d="M5 17h14" />
          <circle cx="7" cy="17" r="2" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      </a>

      <div className="navbar-links">
        {links.map(link => (
          <a key={link.label} href={link.href}>{link.label}</a>
        ))}
      </div>

      <a href="#contact" className="navbar-contact">Contact Us</a>

      <button
        className="navbar-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span className={menuOpen ? 'menu-line open' : 'menu-line'} />
        <span className={menuOpen ? 'menu-line open' : 'menu-line'} />
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {links.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mobile-contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
