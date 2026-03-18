import { AnimatedText } from './AnimatedText'
import { ScrollRevealText } from './ScrollRevealText'

const ORANGE_FILTER = 'invert(40%) sepia(90%) saturate(800%) hue-rotate(355deg) brightness(105%)'

const MANIFEST_TEXT =
  'Phonk transmissions built for night drives, heavy bass systems, ' +
  'and underground energy. Dusted Tape is an underground phonk ' +
  'broadcast channel combining long form mixes, original singles, ' +
  'and industrial cyberpunk visuals into one signal. Founded by a ' +
  'visual designer and sound curator, the project explores the ' +
  'intersection of music, design, and machine aesthetics.'

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: '#FFEEE8' }} className="pt-[320px] px-[245px]">

      {/* Label */}
      <AnimatedText className="mb-6">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[11px] tracking-widest"
          style={{ fontFamily: 'Space Mono, monospace', color: '#000000', borderColor: '#CFCFCF' }}
        >
          <img
            src="/icon-dustedtape.svg"
            alt=""
            aria-hidden="true"
            className="w-3.5 h-3.5 object-contain self-start"
            style={{ filter: ORANGE_FILTER }}
          />
          ABOUT DUSTED TAPE
        </div>
      </AnimatedText>

      {/* Two-column block — 12-col grid */}
      <div className="w-full grid grid-cols-12 gap-8">

        {/* Left — manifest block */}
        <div
          className="col-span-8 flex flex-col justify-between rounded-3xl p-10 h-[470px]"
          style={{ background: 'linear-gradient(180deg, #FFEEE8 0%, #FFD3C4 100%)' }}
        >
          {/* Top: quote icon */}
          <img
            src="/icon-quote.svg"
            alt=""
            aria-hidden="true"
            className="w-8 h-8 object-contain self-start"
            style={{ filter: ORANGE_FILTER }}
          />

          {/* Middle: manifest text — scroll reveal word by word */}
          <ScrollRevealText
            text={MANIFEST_TEXT}
            className="text-black font-medium text-left"
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '34px',
              lineHeight: '35px',
              paddingRight: '5rem',
            }}
          />

          {/* Bottom: signature */}
          <div className="flex flex-col gap-1">
            <p
              className="text-[10px] tracking-widest"
              style={{ fontFamily: 'Space Mono, monospace', color: '#FF5C00' }}
            >
              BOHDAN FISHBEIN
            </p>
            <p
              className="text-[10px] tracking-widest"
              style={{ fontFamily: 'Space Mono, monospace', color: 'rgba(0,0,0,0.40)' }}
            >
              FOUNDER / CREATIVE DIRECTOR DUSTED TAPE
            </p>
          </div>

        </div>

        {/* Right — photo */}
        <div className="col-span-4 rounded-3xl overflow-hidden h-[470px]">
          <img
            src="/photoID.jpg"
            alt="Bohdan Fishbein — Founder, Dusted Tape"
            className="w-full h-full object-cover"
          />
        </div>

      </div>

    </section>
  )
}
