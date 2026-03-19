import { AnimatedText } from './AnimatedText'

const WHITE_FILTER = 'brightness(0) invert(1)'

const PLATFORMS_LEFT = [
  { label: 'Spotify',    href: 'https://open.spotify.com/artist/5s9l2vzkNCq3jXYO3nyRLJ' },
  { label: 'Youtube',    href: 'https://www.youtube.com/@DUSTEDTAPE'                      },
  { label: 'Soundcloud', href: 'https://soundcloud.com/dusted-tape'                       },
]
const PLATFORMS_RIGHT = [
  { label: 'Instagram',  href: 'https://www.instagram.com/dusted_tape/'                   },
  { label: 'Deviantart', href: 'https://www.deviantart.com/dustedtape'                    },
  { label: 'Pinterest',  href: 'https://www.pinterest.com/dustedtape/'                    },
]
const PROJECT_LINKS = [
  { label: 'Releases', href: '#release' },
  { label: 'Mixes',    href: '#mixes'   },
  { label: 'Radio',    href: '#radio'   },
]

const LABEL_STYLE = {
  fontFamily: 'Space Mono, monospace',
  fontSize: '10px',
  letterSpacing: '0.18em',
  color: 'rgba(255,255,255,0.35)',
}

const LINK_STYLE = {
  fontFamily: 'Space Mono, monospace',
  fontSize: '13px',
}

function NavLink({ children, href = '#' }) {
  const isExternal = href.startsWith('http')
  return (
    <a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="text-white/70 hover:text-[#FF5C00] transition-colors duration-200 max-md:!text-[14px]"
      style={LINK_STYLE}
    >
      {children}
    </a>
  )
}

const MARQUEE_TEXT = 'DUSTED TAPE'
const REPEATS = 6

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white overflow-hidden pt-32 max-md:pt-16">

      {/* ── Asymmetric padding wrapper: pl-245 pr-460 ── */}
      <div className="pl-[245px] pr-[320px] max-md:pl-[30px] max-md:pr-[30px]">

        {/* Grid: brand / platforms / project / contact */}
        <div className="grid grid-cols-12 gap-x-12 gap-y-8 items-start max-md:grid-cols-2 max-md:gap-x-6 max-md:gap-y-[60px]">

          {/* Col 1 — Brand (col-span-5) */}
          <div className="col-span-5 flex flex-col gap-4 max-md:col-span-2">
            <p className="uppercase" style={{ ...LABEL_STYLE, color: '#FF5C00' }}>
              DUSTED TAPE
            </p>
            <p
              className="text-white font-medium leading-[1.1]"
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: '22px' }}
          >
            Underground phonk broadcast<br />
            channel built for night drives and<br />
            heavy bass systems.
          </p>
          </div>

          {/* Col 2 — Platforms (col-span-3) */}
          <AnimatedText delay={0.1} className="col-span-3 flex flex-col gap-4 max-md:col-span-1">
            <p className="uppercase" style={LABEL_STYLE}>PLATFORMS</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2.5 max-md:grid-cols-1 max-md:gap-x-0">
              <div className="flex flex-col gap-2.5">
                {PLATFORMS_LEFT.map(p => <NavLink key={p.label} href={p.href}>{p.label}</NavLink>)}
              </div>
              <div className="flex flex-col gap-2.5">
                {PLATFORMS_RIGHT.map(p => <NavLink key={p.label} href={p.href}>{p.label}</NavLink>)}
              </div>
            </div>
          </AnimatedText>

          {/* Col 3 — Project (col-span-2) */}
          <AnimatedText delay={0.2} className="col-span-2 flex flex-col gap-4 max-md:col-span-1">
            <p className="uppercase" style={LABEL_STYLE}>PROJECT</p>
            <div className="flex flex-col gap-2.5">
              {PROJECT_LINKS.map(p => <NavLink key={p.label} href={p.href}>{p.label}</NavLink>)}
            </div>
          </AnimatedText>

          {/* Col 4 — Contact (col-span-2) */}
          <AnimatedText delay={0.3} className="col-span-2 flex flex-col gap-4 max-md:col-span-2">
            <p className="uppercase" style={LABEL_STYLE}>CONTACT</p>
            <a
              href="mailto:dustedtape@gmail.com"
              className="hover:underline transition-all duration-200 leading-tight whitespace-nowrap"
              style={{ fontFamily: 'Space Mono, monospace', fontSize: '18px', color: '#FF5C00' }}
            >
              dustedtape@gmail.com
            </a>
          </AnimatedText>

        </div>

        {/* ── Copyright bar ── */}
        <div className="flex justify-between items-center mt-32 mb-16 max-md:mt-[60px] max-md:mb-8">

          {/* Left — logo + copyright */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Dusted Tape" className="h-6 w-auto object-contain" />
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.30)' }}>
              © 2026 DUSTED TAPE — ALL RIGHTS RESERVED.
            </p>
          </div>

          {/* Right — scroll to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-white/15 hover:border-white/40 transition-colors duration-200 cursor-pointer max-md:w-8 max-md:h-8"
            aria-label="Scroll to top"
          >
            <img
              src="/icon-arrowup.svg"
              alt=""
              aria-hidden="true"
              className="w-4 h-4 object-contain"
              style={{ filter: WHITE_FILTER }}
            />
          </button>

        </div>

      </div>

      {/* ── Giant marquee — full width, no padding ── */}
      <div className="w-full overflow-hidden leading-none">
        <div
          className="flex whitespace-nowrap"
          style={{ animation: 'footerMarquee 38s linear infinite' }}
        >
          {Array.from({ length: REPEATS }).map((_, i) => (
            <span
              key={i}
              className="font-bold shrink-0 pr-16 select-none max-md:!text-[250px]"
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '420px',
                lineHeight: 1,
                color: '#1A0E09',
                letterSpacing: '-0.03em',
              }}
            >
              {MARQUEE_TEXT}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes footerMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-${100 / REPEATS * 3}%); }
        }
      `}</style>

    </footer>
  )
}
