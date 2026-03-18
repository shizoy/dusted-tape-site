const mixesData = [
  { id: 1,  title: 'Dark Phonk Overdrive', date: 'DEC 19, 2025', time: '58 MIN', image: '/overdrive-img.jpg',    link: 'https://www.youtube.com/watch?v=GbeJ53Y4ROc&t=387s'   },
  { id: 2,  title: 'Distorted Streets',    date: 'DEC 19, 2025', time: '59 MIN', image: '/distorted-img.jpg',    link: 'https://www.youtube.com/watch?v=-D-DTV2WiNQ&t=32s'    },
  { id: 3,  title: 'Phonk Arcade',         date: 'DEC 26, 2025', time: '69 MIN', image: '/phonkarcade-img.jpg',  link: 'https://www.youtube.com/watch?v=SUMfu99AF4Y&t=1230s'  },
  { id: 4,  title: 'Neon Drift',           date: 'DEC 29, 2025', time: '59 MIN', image: '/neondrift-img.jpg',    link: 'https://www.youtube.com/watch?v=itm2Y7iMzPY&t=74s'    },
  { id: 5,  title: 'Orbital Drift',        date: 'JAN 01, 2026', time: '63 MIN', image: '/orbital-img.jpg',      link: 'https://www.youtube.com/watch?v=oG-Ib-1yxE8&t=70s'    },
  { id: 6,  title: 'Broken Mixer',         date: 'JAN 05, 2026', time: '59 MIN', image: '/brokenmixer-img.jpg',  link: 'https://www.youtube.com/watch?v=ugVRWclubJA&t=1581s'  },
  { id: 7,  title: 'Concrete Idol',        date: 'JAN 12, 2026', time: '60 MIN', image: '/idol-img.jpg',         link: 'https://www.youtube.com/watch?v=1w43JcIczhg&t=2593s'  },
  { id: 8,  title: 'Last Power Source',    date: 'JAN 17, 2026', time: '53 MIN', image: '/powersource-img.jpg',  link: 'https://www.youtube.com/watch?v=_53BsPeeEt0&t=649s'   },
  { id: 9,  title: 'Green Noise',          date: 'JAN 22, 2026', time: '65 MIN', image: '/greennoise-img.jpg',   link: 'https://www.youtube.com/watch?v=FRArYqZnwmU&t=1139s'  },
  { id: 10, title: 'Control State',        date: 'JAN 29, 2026', time: '59 MIN', image: '/controlstate-img.jpg', link: 'https://www.youtube.com/watch?v=qcaQIiJbMyc&t=2585s'  },
  { id: 11, title: 'Bloom Static',         date: 'FEB 05, 2026', time: '61 MIN', image: '/bloomstatic-img.jpg',  link: 'https://www.youtube.com/watch?v=4fXaghrGZIM&t=1594s'  },
  { id: 12, title: 'Deathwish',            date: 'FEB 11, 2026', time: '74 MIN', image: '/deathwish-img.jpg',    link: 'https://www.youtube.com/watch?v=9tEtti03pYA&t=1542s'  },
  { id: 13, title: 'System Reset',         date: 'FEB 16, 2026', time: '61 MIN', image: '/systemreset-img.jpg',  link: 'https://www.youtube.com/watch?v=P7iYcfyRMO0&t=1190s'  },
  { id: 14, title: 'Cyber Monk',           date: 'FEB 21, 2026', time: '61 MIN', image: '/cybermonk-img.jpg',    link: 'https://www.youtube.com/watch?v=_2j2yb-hEIU&t=76s'    },
  { id: 15, title: 'Memphis',              date: 'FEB 27, 2026', time: '59 MIN', image: '/memphis-img.jpg',      link: 'https://www.youtube.com/watch?v=1RXgcWVRj2w&t=184s'   },
  { id: 16, title: 'Iron Swine',           date: 'MAR 04, 2026', time: '66 MIN', image: '/swine-img.jpg',        link: 'https://www.youtube.com/watch?v=4ZSyashJL2o&t=3386s'  },
  { id: 17, title: 'War Machine',          date: 'MAR 09, 2026', time: '60 MIN', image: '/warmachine-img.jpg',   link: 'https://www.youtube.com/watch?v=efWHoUtst_0&t=84s'    },
  { id: 18, title: 'Null Prophet',         date: 'MAR 15, 2026', time: '66 MIN', image: '/nullprophet-img.jpg',  link: 'https://www.youtube.com/watch?v=iovO5OBfBQ0&t=173s'   },
]

import { useState, useRef } from 'react'
import { ScrollRevealText } from './ScrollRevealText'
import { motion } from 'framer-motion'

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-0.5" aria-hidden="true">
      <path d="M8 5.14v14l11-7-11-7z" />
    </svg>
  )
}

function MixCard({ mix, onPlay }) {
  return (
    <div className="flex flex-col gap-3 shrink-0 snap-start" style={{ width: '275px' }}>

      {/* Thumbnail — click opens modal player */}
      <button
        onClick={() => onPlay(mix.link)}
        className="block relative rounded-2xl overflow-hidden cursor-pointer"
        style={{ height: '300px', padding: 0, border: 'none', background: 'none' }}
        aria-label={`Play ${mix.title}`}
      >
        <img
          src={mix.image}
          alt={mix.title}
          className="absolute inset-0 w-full h-full object-cover"
          draggable="false"
        />

        {/* Duration badge — top right */}
        <span
          className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white text-black text-[10px] tracking-widest leading-none"
          style={{ fontFamily: 'Space Mono, monospace' }}
        >
          {mix.time}
        </span>

        {/* Play button — bottom right */}
        <span
          className="absolute bottom-3 right-3 flex items-center justify-center rounded-full bg-white text-black transition-transform duration-200 hover:scale-105"
          style={{ width: '40px', height: '40px' }}
        >
          <PlayIcon />
        </span>
      </button>

      {/* Info */}
      <div className="flex flex-col gap-1">
        <p
          className="text-[10px] tracking-widest text-black/35 uppercase"
          style={{ fontFamily: 'Space Mono, monospace' }}
        >
          {mix.date}
        </p>
        <h3
          className="text-base font-medium text-black leading-tight"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          {mix.title}
        </h3>
      </div>

    </div>
  )
}

export default function Mixes() {
  const [activeVideo, setActiveVideo] = useState(null)
  const scrollRef = useRef(null)

  const SCROLL_AMOUNT = 275 + 24 // card width + gap

  const scrollLeft  = () => scrollRef.current?.scrollBy({ left: -SCROLL_AMOUNT * 3, behavior: 'smooth' })
  const scrollRight = () => scrollRef.current?.scrollBy({ left:  SCROLL_AMOUNT * 3, behavior: 'smooth' })

  const getEmbedUrl = (url) => {
    if (!url) return ''
    const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11}).*/)
    const videoId = match ? match[1] : ''
    const timeMatch = url.match(/[?&]t=(\d+)/)
    const time = timeMatch ? `&start=${timeMatch[1]}` : ''
    return `https://www.youtube.com/embed/${videoId}?autoplay=1${time}`
  }

  return (
    <section id="mixes" style={{ backgroundColor: '#FFEEE8' }} className="pt-[320px] pb-24 overflow-hidden">

      {/* Heading block */}
      <div className="relative flex flex-col items-center w-full gap-6 mb-16 px-[245px]">

        {/* Label */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[11px] tracking-widest"
          style={{ fontFamily: 'Space Mono, monospace', color: '#000000', borderColor: '#CFCFCF' }}
        >
          <img
            src="/icon-labelmixes.svg"
            alt=""
            aria-hidden="true"
            className="w-3.5 h-3.5 object-contain self-start"
            style={{ filter: 'invert(40%) sepia(90%) saturate(800%) hue-rotate(355deg) brightness(105%)' }}
          />
          FEATURED MIXES
        </div>

        {/* Heading */}
        <ScrollRevealText
          text="Phonk transmissions built for night <br /> drives, heavy bass systems, <br /> and underground atmosphere."
          className="font-medium text-black text-center mx-auto"
          style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '40px', maxWidth: '800px' }}
        />

        {/* Navigation arrows — bottom right, aligned to grid */}
        <div className="absolute right-[245px] bottom-0 flex gap-3">
          <button
            onClick={scrollLeft}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition-colors cursor-pointer"
            aria-label="Scroll left"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button
            onClick={scrollRight}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition-colors cursor-pointer"
            aria-label="Scroll right"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 snap-x snap-mandatory pl-[245px] pr-16"
        style={{ overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', width: '100vw' }}
      >
        {mixesData.map((mix, index) => (
          <motion.div
            key={mix.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
          >
            <MixCard mix={mix} onPlay={setActiveVideo} />
          </motion.div>
        ))}
      </div>

      <style>{`
        section > div:last-of-type::-webkit-scrollbar { display: none; }
      `}</style>

      {/* Modal player */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-6xl bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10"
            style={{ aspectRatio: '16/9' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-[#FF5C00] text-white rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer"
              aria-label="Close player"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18"/><path d="M6 6l12 12"/>
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

    </section>
  )
}
