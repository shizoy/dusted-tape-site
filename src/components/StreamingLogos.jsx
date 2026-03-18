const LOGOS = [
  { src: '/Amazon-logo.png',      alt: 'Amazon Music'  },
  { src: '/deezer-logo.png',      alt: 'Deezer'        },
  { src: '/Youtube-Music-logo.png', alt: 'YouTube Music' },
  { src: '/spotify-logo.png',     alt: 'Spotify'       },
  { src: '/Apple-logo.png',       alt: 'Apple Music'   },
  { src: '/Soundcloud-logo.png',  alt: 'SoundCloud'    },
  { src: '/Tidal-logo.png',       alt: 'TIDAL'         },
  { src: '/TikTok-logo.png',      alt: 'TikTok'        },
]

function PlanetIcon() {
  return (
    <img src="/planet.svg" alt="" aria-hidden="true" className="w-3.5 h-3.5 object-contain" style={{ filter: 'invert(40%) sepia(90%) saturate(800%) hue-rotate(355deg) brightness(105%)' }} />
  )
}

function LogoItem({ src, alt }) {
  return (
    <div className="flex items-center justify-center shrink-0 px-12">
      <img
        src={src}
        alt={alt}
        className="h-6 w-auto object-contain opacity-85"
        draggable="false"
      />
    </div>
  )
}

export default function StreamingLogos() {
  return (
    <section style={{ backgroundColor: '#FFEEE8' }} className="pt-[320px] pb-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">

        {/* Eyebrow pill */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[11px] tracking-widest"
          style={{ fontFamily: 'Space Mono, monospace', color: '#000000', borderColor: '#CFCFCF' }}
        >
          <PlanetIcon />
          LISTEN EVERYWHERE
        </div>

      </div>

      {/* Marquee strip — full bleed */}
      <div className="w-full mt-[30px] overflow-hidden" style={{ borderTop: '1px solid #000', borderBottom: '1px solid #000' }}>
          <div className="flex items-center py-[60px] marquee-track">
          {/* Two full sets for seamless loop */}
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <LogoItem key={i} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>

      {/* Bottom caption */}
      <div className="max-w-5xl mx-auto flex flex-col items-center mt-[30px]">
        <p
          className="text-[10px] tracking-[0.18em] text-black/50 text-center leading-relaxed"
          style={{ fontFamily: 'Space Mono, monospace' }}
        >
          STREAMING ACROSS ALL MAJOR SYSTEMS.<br />
          PLUG INTO THE SIGNAL WHEREVER YOU LISTEN.
        </p>
      </div>

      <style>{`
        .marquee-track {
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </section>
  )
}
