import { motion } from 'framer-motion'

export function AnimatedText({ children, className, delay = 0, style }) {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        delay: 0.2 + delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <motion.div
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
