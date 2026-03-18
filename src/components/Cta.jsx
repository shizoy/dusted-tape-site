import { AnimatedText } from './AnimatedText'

const ORANGE_FILTER = 'invert(40%) sepia(90%) saturate(800%) hue-rotate(355deg) brightness(105%)'

export default function Cta() {
  return (
    <div style={{ backgroundColor: '#FFEEE8' }} className="pt-[260px]">
    <section className="relative w-full overflow-hidden" style={{ height: '620px' }}>

      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/cta-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">

        {/* Label pill */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 text-[11px] tracking-widest text-white mb-8"
          style={{ fontFamily: 'Space Mono, monospace' }}
        >
          <img
            src="/icon-transmission.svg"
            alt=""
            aria-hidden="true"
            className="w-3.5 h-3.5 object-contain"
            style={{ filter: ORANGE_FILTER }}
          />
          SIGNAL ACCESS
        </div>

        {/* Heading */}
        <AnimatedText delay={0.1} className="mb-10" style={{ maxWidth: '850px', textAlign: 'center' }}>
          <h2
            className="text-white font-medium text-center leading-[1.1]"
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
            }}
          >
            Explore full phonk mixes and original releases broadcast from the Dusted Tape system.
          </h2>
        </AnimatedText>

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href="https://open.spotify.com/artist/5s9l2vzkNCq3jXYO3nyRLJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-white text-black text-[11px] tracking-widest font-normal transition-colors duration-200 hover:bg-gray-200"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            LISTEN ON SPOTIFY
          </a>
          <a
            href="https://www.youtube.com/@DUSTEDTAPE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-white text-black text-[11px] tracking-widest font-normal transition-colors duration-200 hover:bg-gray-200"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            WATCH ON YOUTUBE
          </a>
        </div>

      </div>
    </section>
    </div>
  )
}
