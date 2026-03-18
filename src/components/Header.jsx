import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { label: 'HOME',    href: null       },
  { label: 'RADIO',   href: '#radio'   },
  { label: 'MIXES',   href: '#mixes'   },
  { label: 'RELEASE', href: '#release' },
  { label: 'ABOUT',   href: '#about'   },
  { label: 'CONTACT', href: '#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleHome = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? 'rgba(255,238,232,0.85)' : 'transparent',
        borderBottomColor: isScrolled ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.15)',
      }}
    >
      <div className="px-[245px] h-16 flex items-center gap-8">

        {/* Logo */}
        <div className="shrink-0">
          <img src="/logo.png" alt="Dusted Tape" className="h-8 w-auto" />
        </div>

        {/* Nav — ml-auto pushes it toward the CTA button */}
        <nav className="hidden md:flex items-center gap-8 ml-auto">
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={label}
              href={href ?? '#'}
              onClick={href === null ? handleHome : undefined}
              className="text-[11px] tracking-widest transition-all duration-300 hover:opacity-60"
              style={{
                fontFamily: 'Space Mono, monospace',
                color: isScrolled ? '#000000' : 'rgba(255,255,255,0.55)',
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA — link to Spotify */}
        <a
          href="https://open.spotify.com/artist/5s9l2vzkNCq3jXYO3nyRLJ"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full text-[11px] tracking-widest text-black font-normal px-6 py-2.5 transition-all duration-300 hover:opacity-85"
          style={{ fontFamily: 'Space Mono, monospace', backgroundColor: '#FF5C00' }}
        >
          JOIN THE MOVEMENT
        </a>

      </div>
    </header>
  )
}
