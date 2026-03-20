import { AnimatedText } from './AnimatedText'
import { ScrollRevealText } from './ScrollRevealText'

function OrangeIcon({ src, alt = '', size = 'w-6 h-6' }) {
  return (
    <img
      src={src}
      alt={alt}
      aria-hidden={!alt}
      className={`${size} object-contain`}
      style={{ filter: 'invert(40%) sepia(90%) saturate(800%) hue-rotate(355deg) brightness(105%)' }}
    />
  )
}

function ModulesIcon() {
  return <OrangeIcon src="/icon-modules.svg" size="w-3.5 h-3.5" />
}

function ArrowIcon() {
  return <OrangeIcon src="/arrow-up-right.svg" size="w-3 h-3" />
}

const MODULES = [
  {
    icon: '/icon-mixes.svg',
    title: 'Phonk Mixes',
    lines: ['Long-form underground mixes', 'built for night drives, focus,', 'and pressure.'],
    link: 'EXPLORE MIXES',
    href: 'https://www.youtube.com/@DUSTEDTAPE/videos',
  },
  {
    icon: '/icon-releases.svg',
    title: 'Releases',
    lines: ['Original phonk singles', 'engineered inside the DUSTED', 'TAPE system.'],
    link: 'LISTEN',
    href: 'https://open.spotify.com/artist/5s9l2vzkNCq3jXYO3nyRLJ',
  },
  {
    icon: '/icon-visual.svg',
    title: 'Visual Archive',
    lines: ['Industrial cyberpunk artwork that', 'powers the visual identity of', 'the signal.'],
    link: 'VIEW ART',
    href: 'https://www.deviantart.com/dustedtape',
  },
  {
    icon: '/icon-radio.svg',
    title: 'Live Radio',
    lines: ['Continuous phonk', 'broadcast streams.', 'No interruptions.'],
    link: 'START STREAM',
    href: 'https://www.youtube.com/watch?v=mr8hS1jLiUY',
  },
]

export default function Modules() {
  return (
    <section style={{ backgroundColor: '#FFEEE8' }} className="max-md:pt-[150px] md:pt-[450px] pb-24 px-[30px] md:px-[245px]">

      {/* ── DESKTOP layout — hidden on mobile ── */}
      <div className="hidden md:block">
        <div className="flex items-start gap-[450px]">

          {/* Left: label */}
          <div className="shrink-0 pt-1">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[11px] tracking-widest"
              style={{ fontFamily: 'Space Mono, monospace', color: '#000000', borderColor: '#CFCFCF' }}
            >
              <ModulesIcon />
              SIGNAL MODULES
            </div>
          </div>

          {/* Right: heading + grid */}
          <div className="flex-1 flex flex-col gap-12 pl-[80px]">

            <ScrollRevealText
              text="Explore the signal, the sound, and <br /> the visuals behind the broadcast system."
              className="text-3xl sm:text-4xl font-medium text-black leading-[1.05]"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {MODULES.map((mod, index) => (
                <AnimatedText key={mod.title} delay={0.1 + index * 0.1}>
                  <div className="flex flex-col gap-3">
                    <OrangeIcon src={mod.icon} alt={mod.title} size="w-6 h-6" />
                    <h3
                      className="text-base font-medium text-black leading-tight"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      {mod.title}
                    </h3>
                    <p
                      className="text-[11px] leading-relaxed -mt-1"
                      style={{ fontFamily: 'Space Mono, monospace', color: '#6B6B6B' }}
                    >
                      {mod.lines.map((line, i) => (
                        <span key={i}>{line}{i < mod.lines.length - 1 && <br />}</span>
                      ))}
                    </p>
                    <a
                      href={mod.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[10px] font-normal tracking-widest underline underline-offset-4 transition-opacity duration-200 hover:opacity-60 mt-auto"
                      style={{ fontFamily: 'Space Mono, monospace', color: '#000000' }}
                    >
                      {mod.link}
                      <ArrowIcon />
                    </a>
                  </div>
                </AnimatedText>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ── MOBILE layout — hidden on desktop ── */}
      <div className="md:hidden flex flex-col">

        {/* Label — self-start keeps pill compact, mb-[25px] sets exact gap to heading */}
        <div
          className="inline-flex self-start md:self-auto items-center gap-2 px-4 py-1.5 rounded-full border text-[11px] tracking-widest mb-[25px]"
          style={{ fontFamily: 'Space Mono, monospace', color: '#000000', borderColor: '#CFCFCF' }}
        >
          <ModulesIcon />
          SIGNAL MODULES
        </div>

        {/* Heading */}
        <h2
          className="text-black font-medium text-left text-[25px] leading-[26px] w-full"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          Explore the signal, the sound, and the visuals behind the broadcast system.
        </h2>

        {/* 2×2 grid — mt-12 gap below heading */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 mt-12">
          {MODULES.map((mod) => (
            <div key={mod.title} className="flex flex-col gap-3 text-left">

              <OrangeIcon src={mod.icon} alt={mod.title} size="w-6 h-6" />

              <h3
                className="text-base font-medium text-black leading-snug"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                {mod.title}
              </h3>

              <p
                className="text-[11px] leading-relaxed opacity-70 text-black"
                style={{ fontFamily: 'Space Mono, monospace' }}
              >
                {mod.lines.join(' ')}
              </p>

              <a
                href={mod.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[10px] font-normal tracking-widest underline underline-offset-4 transition-opacity duration-200 hover:opacity-60 mt-auto"
                style={{ fontFamily: 'Space Mono, monospace', color: '#000000' }}
              >
                {mod.link}
                <ArrowIcon />
              </a>

            </div>
          ))}
        </div>

      </div>

    </section>
  )
}
