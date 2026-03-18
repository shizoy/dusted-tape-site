import { useState } from 'react'
import { AnimatedText } from './AnimatedText'

const HERO_MIX_URL = 'https://www.youtube.com/watch?v=4ZSyashJL2o&t=3387s'

function getEmbedUrl(url) {
  if (!url) return ''
  const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11}).*/)
  const videoId = match ? match[1] : ''
  const timeMatch = url.match(/[?&]t=(\d+)/)
  const time = timeMatch ? `&start=${timeMatch[1]}` : ''
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0${time}`
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-0.5" aria-hidden="true">
      <path d="M8 5.14v14l11-7-11-7z" />
    </svg>
  )
}

function MixCard({ onPlay }) {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ width: '340px', backgroundColor: '#0f0f0f', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      {/* Thumbnail */}
      <div className="relative" style={{ height: '200px' }}>
        <img
          src="/mix-thumb.jpg"
          alt="Iron Swine - Dark Phonk Mix"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        {/* Play button */}
        <button
          onClick={onPlay}
          className="absolute inset-0 flex items-center justify-center cursor-pointer group"
          aria-label="Play mix"
        >
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black transition-transform duration-200 group-hover:scale-105">
            <PlayIcon />
          </span>
        </button>
      </div>

      {/* Track info */}
      <div className="px-4 py-3 text-center">
        <p
          className="text-[10px] tracking-[0.18em] text-white/90 leading-relaxed"
          style={{ fontFamily: 'Space Mono, monospace' }}
        >
          IRON SWINE — DARK PHONK MIX
        </p>
      </div>
    </div>
  )
}

export default function Hero() {
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <>
      <section className="relative h-screen overflow-hidden">

        {/* Video bg */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.85) 100%)',
          }}
        />

        {/* Content grid */}
        <div className="relative z-10 h-full px-[245px] grid grid-cols-1 lg:grid-cols-2">

          {/* Left — text */}
          <div className="flex flex-col justify-center gap-5 py-12">

            <p
              className="text-[11px] tracking-[0.22em] uppercase"
              style={{ fontFamily: 'Space Mono, monospace', color: '#FF5C00' }}
            >
              TRANSMISSION ACTIVE
            </p>

            <AnimatedText delay={0.1}>
              <h1
                className="text-[clamp(2.8rem,6vw,5.5rem)] font-medium text-white leading-[0.93] tracking-tight"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Underground<br />
                phonk system<br />
                active
              </h1>
            </AnimatedText>

            <AnimatedText delay={0.25}>
              <p
                className="text-sm text-white/55 leading-relaxed max-w-sm"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                DUSTED TAPE is a dark phonk transmission system. Heavy bass
                frequencies. Distorted Memphis samples. Industrial noise and
                underground energy. We broadcast phonk mixes, releases and dark sound
                systems designed to shake speakers and break silence. No mainstream
                filters. Only signal.
              </p>
            </AnimatedText>

            {/* CTA — link to YouTube channel */}
            <div className="mt-1">
              <a
                href="https://www.youtube.com/@DUSTEDTAPE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-white text-black text-[11px] font-normal tracking-widest transition-opacity duration-200 hover:opacity-85"
                style={{ fontFamily: 'Space Mono, monospace' }}
              >
                EXPLORE MIXES
              </a>
            </div>

          </div>

          {/* Right — mix card */}
          <div className="hidden lg:flex flex-col justify-end items-end pb-12">
            <MixCard onPlay={() => setActiveVideo(HERO_MIX_URL)} />
          </div>

        </div>

      </section>

      {/* Video modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-black"
            style={{ aspectRatio: '16/9' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src={getEmbedUrl(activeVideo)}
              className="w-full h-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              title="Mix player"
            />
          </div>
        </div>
      )}
    </>
  )
}
