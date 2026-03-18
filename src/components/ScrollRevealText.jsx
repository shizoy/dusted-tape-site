import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export const ScrollRevealText = ({ text, className, style, initialOpacity = 0.15 }) => {
  const containerRef = useRef(null)

  // Split preserving <br /> tokens
  const elements = text.split(/(<br\s*\/?>)/g)

  // Pre-count total words for accurate progress mapping
  const totalWords = elements
    .filter(el => !el.match(/^<br\s*\/?>$/))
    .flatMap(el => el.split(' ').filter(Boolean)).length

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.95', 'start 0.5'],
  })

  let wordIdx = 0

  return (
    <p ref={containerRef} className={className} style={style}>
      {elements.map((element, i) => {
        if (element.match(/^<br\s*\/?>$/)) {
          return <br key={i} />
        }

        return element.split(' ').map((word, j) => {
          if (!word) return null
          const idx = wordIdx++
          const start = idx / totalWords
          const end = start + 1 / totalWords
          const opacity = useTransform(scrollYProgress, [start, end], [initialOpacity, 1])
          return (
            <motion.span key={`${i}-${j}`} style={{ opacity }} className="inline-block mr-[0.25em]">
              {word}
            </motion.span>
          )
        })
      })}
    </p>
  )
}
