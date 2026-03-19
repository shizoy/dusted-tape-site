import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const NAV_ITEMS = [
  { label: 'HOME',    href: null       },
  { label: 'RADIO',   href: '#radio'   },
  { label: 'MIXES',   href: '#mixes'   },
  { label: 'RELEASE', href: '#release' },
  { label: 'ABOUT',   href: '#about'   },
  { label: 'CONTACT', href: '#contact' },
]

const LINK_STYLE = { fontFamily: 'Space Mono, monospace' }

export default function Header() {
  const [isScrolled, setIsScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]     = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleHome = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300"
        style={{
          backgroundColor: isScrolled ? 'rgba(255,238,232,0.85)' : 'transparent',
          borderBottomColor: isScrolled ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.15)',
        }}
      >
        <div className="px-[30px] md:px-[245px] h-16 flex items-center">

          {/* Logo — left-aligned */}
          <div className="shrink-0">
            <img src="/logo.png" alt="Dusted Tape" className="h-8 w-auto" />
          </div>

          {/* Desktop nav — hidden on mobile */}
          <nav className="hidden md:flex items-center gap-8 ml-auto">
            {NAV_ITEMS.map(({ label, href }) => (
              <a
                key={label}
                href={href ?? '#'}
                onClick={href === null ? handleHome : undefined}
                className="text-[11px] tracking-widest transition-all duration-300 hover:opacity-60"
                style={{
                  ...LINK_STYLE,
                  color: isScrolled ? '#000000' : 'rgba(255,255,255,0.55)',
                }}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA — hidden on mobile */}
          <a
            href="https://open.spotify.com/artist/5s9l2vzkNCq3jXYO3nyRLJ"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex shrink-0 rounded-full text-[11px] tracking-widest text-black font-normal px-6 py-2.5 ml-8 transition-all duration-300 hover:opacity-85"
            style={{ ...LINK_STYLE, backgroundColor: '#FF5C00' }}
          >
            JOIN THE MOVEMENT
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden ml-auto flex flex-col justify-center items-center w-10 h-10 gap-[5px] cursor-pointer"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <motion.span
              className="block h-[1.5px] w-6 origin-center"
              style={{ backgroundColor: isScrolled ? '#000' : '#fff' }}
              animate={menuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block h-[1.5px] w-6"
              style={{ backgroundColor: isScrolled ? '#000' : '#fff' }}
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-[1.5px] w-6 origin-center"
              style={{ backgroundColor: isScrolled ? '#000' : '#fff' }}
              animate={menuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>

        </div>
      </header>

      {/* Fullscreen mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col md:hidden"
            style={{ backgroundColor: '#0A0705' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top spacer (header height) */}
            <div className="h-16 shrink-0" />

            {/* Nav links */}
            <nav className="flex flex-col px-[30px] pt-10 gap-8 flex-1">
              {NAV_ITEMS.map(({ label, href }, i) => (
                <motion.a
                  key={label}
                  href={href ?? '#'}
                  onClick={(e) => {
                    if (href === null) handleHome(e)
                    closeMenu()
                  }}
                  className="text-white text-[13px] tracking-[0.22em] border-b border-white/8 pb-8 hover:text-[#FF5C00] transition-colors duration-200"
                  style={LINK_STYLE}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.07, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  {label}
                </motion.a>
              ))}
            </nav>

            {/* CTA button at bottom */}
            <motion.div
              className="px-[30px] pb-12"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href="https://open.spotify.com/artist/5s9l2vzkNCq3jXYO3nyRLJ"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center w-full rounded-full text-[11px] tracking-widest text-black font-normal px-6 py-4 transition-opacity duration-200 hover:opacity-85"
                style={{ ...LINK_STYLE, backgroundColor: '#FF5C00' }}
              >
                JOIN THE MOVEMENT
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
