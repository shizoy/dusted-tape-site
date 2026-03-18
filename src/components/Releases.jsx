import { useState } from 'react'
import { AnimatedText } from './AnimatedText'
import { ScrollRevealText } from './ScrollRevealText'

const RELEASES = [
  {
    id: 'blue-signal',
    img: '/bluesignal-img.jpg',
    overlayColor: '#095DA2',
    label: 'DUSTED TAPE • SINGLE',
    title: 'BLUE SIGNAL',
    description: 'A DARK SIGNAL MOVING THROUGH THE BLUR. FREQUENCY-DISTORTED PHONK DRUM AND ANALOG STATIC FROM THE DIGITAL UNDERGROUND.',
    spotifyUrl: 'https://open.spotify.com/track/3Qbpr5RFQGtJ1cHva0Xrcd',
    tags: ['ANALOG SIGNAL DRIFT', 'SOLO PHONK FREQUENCIES', 'BLUE CHANNEL TRANSMISSION'],
    flip: false,
  },
  {
    id: 'shadow-circuit',
    img: '/shadow-img.jpg',
    overlayColor: '#F26E3A',
    label: 'DUSTED TAPE • SINGLE',
    title: 'SHADOW CIRCUIT',
    description: 'A DARK PHONK TRANSMISSION DRIVEN BY DISTORTED BASS, COLD SYNTH TEXTURES, AND UNDERGROUND CIRCUIT THINGS.',
    spotifyUrl: 'https://open.spotify.com/track/0rB0G9LeLUPSu3ZguS60ma',
    tags: ['DISTORTED BASS SYSTEM', 'SYNTH PHONK TEXTURES', 'NIGHT CIRCUIT ENERGY'],
    flip: true,
  },
  {
    id: 'sector-26',
    img: '/sector26-img.jpg',
    overlayColor: '#369B8F',
    label: 'DUSTED TAPE • SINGLE',
    title: 'SECTOR 26',
    description: 'HEAVY BASS SYSTEMS AND RAW UNDERGROUND PRESSURE. A PHONK TRANSMISSION EMERGING FROM SECTOR 26.',
    spotifyUrl: 'https://open.spotify.com/track/0z9KSodOmupBgwYkYfZ5bb',
    tags: ['HEAVY BASS SYSTEMS', 'RAW UNDERGROUND PRESSURE', 'SECTOR TRANSMISSION'],
    flip: false,
  },
]

const ORANGE_FILTER = 'invert(40%) sepia(90%) saturate(800%) hue-rotate(355deg) brightness(105%)'
const WHITE_FILTER = 'brightness(0) invert(1)'

function getSpotifyEmbedUrl(url) {
  if (!url) return ''
  return url.replace('open.spotify.com', 'open.spotify.com/embed')
}

function getYouTubeEmbedUrl(url) {
  if (!url) return ''
  const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11}).*/)
  const videoId = match ? match[1] : ''
  const timeMatch = url.match(/[?&]t=(\d+)/)
  const time = timeMatch ? `&start=${timeMatch[1]}` : ''
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0${time}`
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 ml-1" aria-hidden="true">
      <path d="M8 5.14v14l11-7-11-7z" />
    </svg>
  )
}

function ReleaseCard({ release, onPlay }) {
  return (
    <div className={`flex items-center gap-16 ${release.flip ? 'flex-row-reverse' : 'flex-row'}`}>

      {/* ── Image container 740×695 ── */}
      <div
        className="shrink-0 rounded-3xl flex flex-col items-center justify-between overflow-hidden"
        style={{
          width: '740px',
          height: '695px',
          background: 'linear-gradient(180deg, #FFEEE8 0%, #FFD3C4 100%)',
        }}
      >
        {/* Image 680×500 — floating shadow */}
        <div
          className="relative mt-7 rounded-2xl overflow-hidden shrink-0"
          style={{
            width: '680px',
            height: '500px',
            boxShadow: '0 15px 45px rgba(0,0,0,0.45)',
          }}
        >
          <img
            src={release.img}
            alt={release.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Colour gradient overlay */}
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background: `linear-gradient(to bottom, transparent 0%, ${release.overlayColor} 100%)`,
              opacity: 0.75,
            }}
          />

          {/* Spotify logo — top center */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[2]">
            <img
              src="/spotifygreen-logo.png"
              alt="Spotify"
              className="h-6 w-auto object-contain"
            />
          </div>

          {/* System report watermark — bottom center */}
          <div
            className="absolute bottom-3 left-0 right-0 text-center text-[9px] tracking-[0.22em] text-white/50 z-[2]"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            DUSTED TAPE // SYSTEM REPORT
          </div>

          {/* Play button — opens modal */}
          <button
            onClick={() => onPlay(release.spotifyUrl)}
            className="absolute inset-0 flex items-center justify-center cursor-pointer group z-[2]"
            aria-label={`Play ${release.title}`}
          >
            <span
              className="flex items-center justify-center w-16 h-16 rounded-full transition-transform duration-200 group-hover:scale-105"
              style={{ backgroundColor: '#1DB954' }}
            >
              <span className="text-white">
                <PlayIcon />
              </span>
            </span>
          </button>
        </div>

        {/* Tags — pushed to bottom */}
        <div className="flex flex-col gap-2.5 pb-8 self-start pl-8">
          {release.tags.map((tag) => (
            <div key={tag} className="flex items-center gap-2.5">
              <img
                src="/plus-icon.svg"
                alt=""
                aria-hidden="true"
                className="w-3 h-3 object-contain shrink-0"
                style={{ filter: WHITE_FILTER }}
              />
              <span
                className="text-[10px] tracking-widest"
                style={{ fontFamily: 'Space Mono, monospace', color: 'rgba(0,0,0,0.45)' }}
              >
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Text block ── */}
      <AnimatedText delay={0.15} className="flex flex-col gap-5 max-w-xs">
        <p
          className="text-[10px] tracking-[0.2em] text-black/35"
          style={{ fontFamily: 'Space Mono, monospace' }}
        >
          {release.label}
        </p>

        <h3
          className="text-black leading-tight tracking-tight"
          style={{ fontFamily: 'Outfit, sans-serif', fontSize: '38px', fontWeight: 500 }}
        >
          {release.title}
        </h3>

        <p
          className="text-[10px] leading-relaxed tracking-wider"
          style={{ fontFamily: 'Space Mono, monospace', color: '#6B6B6B' }}
        >
          {release.description}
        </p>

        {/* Spotify external link */}
        <a
          href={release.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[10px] tracking-widest font-normal text-black underline underline-offset-4 transition-opacity duration-200 hover:opacity-60"
          style={{ fontFamily: 'Space Mono, monospace' }}
        >
          LISTEN ON SPOTIFY
          <img
            src="/arrow-up-right.svg"
            alt=""
            aria-hidden="true"
            className="w-3 h-3 object-contain"
            style={{ filter: ORANGE_FILTER }}
          />
        </a>
      </AnimatedText>
    </div>
  )
}

export default function Releases() {
  const [activeTrack, setActiveTrack] = useState(null)

  return (
    <>
      <section id="release" style={{ backgroundColor: '#FFEEE8' }} className="pt-[320px] pb-24 px-[245px]">

        {/* Header row */}
        <div className="flex items-start justify-end gap-[305px] mb-20">

          <ScrollRevealText
            text="Raw phonk transmissions engineered <br /> inside the Dusted Tape system. <br /> Listen to the latest official releases."
            className="font-medium text-black text-right ml-auto"
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: '40px', lineHeight: '40px', maxWidth: '750px' }}
          />

          <div className="shrink-0 pt-1">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[11px] tracking-widest"
              style={{ fontFamily: 'Space Mono, monospace', color: '#000000', borderColor: '#CFCFCF' }}
            >
              <img
                src="/icon-transmission.svg"
                alt=""
                aria-hidden="true"
                className="w-3.5 h-3.5 object-contain self-start"
                style={{ filter: ORANGE_FILTER }}
              />
              LATEST TRANSMISSIONS
            </div>
          </div>

        </div>

        {/* Staggered releases */}
        <div className="flex flex-col gap-24">
          {RELEASES.map((release) => (
            <ReleaseCard
              key={release.id}
              release={release}
              onPlay={(url) => setActiveTrack(url)}
            />
          ))}
        </div>

      </section>

      {/* Modal — Spotify or YouTube */}
      {activeTrack && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
          onClick={() => setActiveTrack(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-black rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveTrack(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {activeTrack.includes('spotify') ? (
              <iframe
                src={getSpotifyEmbedUrl(activeTrack)}
                width="100%"
                height="352"
                style={{ borderRadius: '12px' }}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify player"
              />
            ) : (
              <div style={{ aspectRatio: '16/9' }}>
                <iframe
                  src={getYouTubeEmbedUrl(activeTrack)}
                  className="w-full h-full"
                  style={{ borderRadius: '12px' }}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  title="Video player"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
