import { useState } from 'react'
import { ScrollRevealText } from './ScrollRevealText'

const RADIO_URL = 'https://www.youtube.com/watch?v=mr8hS1jLiUY'

function getEmbedUrl(url) {
  if (!url) return ''
  const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11}).*/)
  const videoId = match ? match[1] : ''
  const timeMatch = url.match(/[?&]t=(\d+)/)
  const time = timeMatch ? `&start=${timeMatch[1]}` : ''
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0${time}`
}

function BroadcastIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
      <path d="M2 12a10 10 0 0 1 20 0" />
      <path d="M6 12a6 6 0 0 1 12 0" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-0.5" aria-hidden="true">
      <path d="M8 5.14v14l11-7-11-7z" />
    </svg>
  )
}

export default function Radio() {
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <>
      <section id="radio" style={{ backgroundColor: '#FFEEE8' }} className="pt-[100px] pb-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">

          {/* Eyebrow pill */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[11px] tracking-widest"
            style={{ fontFamily: 'Space Mono, monospace', color: '#000000', borderColor: '#CFCFCF' }}
          >
            <span style={{ color: '#FF5C00' }}><BroadcastIcon /></span>
            LIVE BROADCAST
          </div>

          {/* Headings */}
          <ScrollRevealText
            text="Your daily dose of underground chaos. Continuous bass transmissions engineered to destroy silence and ignite the revolution."
            className="font-medium text-black text-center mx-auto"
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              lineHeight: '40px',
              maxWidth: '820px',
            }}
          />

          {/* Card */}
          <div className="w-full rounded-2xl overflow-hidden relative" style={{ minHeight: '380px' }}>

            {/* Background — always the still image */}
            <img
              src="/radio-bg.jpg"
              alt="Radio background"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.22) 40%, rgba(0,0,0,0.72) 100%)',
              }}
            />

            {/* YouTube pill badge — top-left */}
            <div className="absolute top-7 left-7 z-10">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-sm">
                <img src="/youtube-logo-wh.png" alt="YouTube" className="h-3 w-auto object-contain" />
              </div>
            </div>

            {/* Card content — pinned to bottom */}
            <div
              className="absolute inset-0 z-10 flex flex-col justify-end p-7"
              style={{ minHeight: '380px' }}
            >
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">

                {/* Left: live indicator + title */}
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                    <span
                      className="text-[10px] tracking-[0.18em] text-white/65"
                      style={{ fontFamily: 'Space Mono, monospace' }}
                    >
                      LIVE NOW
                    </span>
                  </div>
                  <h3
                    className="text-3xl sm:text-4xl font-medium text-white leading-[1.0]"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    Underground phonk<br />transmissions
                  </h3>
                </div>

                {/* Right: buttons */}
                <div className="flex items-center gap-3 shrink-0">

                  {/* YouTube link pill */}
                  <a
                    href={RADIO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-3 rounded-full bg-white text-black text-[10px] tracking-widest font-normal transition-opacity duration-200 hover:opacity-85"
                    style={{ fontFamily: 'Space Mono, monospace' }}
                  >
                    LISTEN ON YOUTUBE
                  </a>

                  {/* Play button — opens modal */}
                  <button
                    onClick={() => setActiveVideo(RADIO_URL)}
                    className="flex items-center justify-center w-11 h-11 rounded-full text-white transition-transform duration-200 hover:scale-105 cursor-pointer shrink-0"
                    style={{ backgroundColor: '#FF5C00' }}
                    aria-label="Play broadcast"
                  >
                    <PlayIcon />
                  </button>

                </div>
              </div>
            </div>

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
              title="Radio player"
            />
          </div>
        </div>
      )}
    </>
  )
}
