import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './RotatingText.css'

function splitText(text, splitBy) {
  if (splitBy === 'characters') return text.split('')
  if (splitBy === 'words') return text.split(' ')
  return [text]
}

function getStaggerOrder(len, staggerFrom) {
  if (staggerFrom === 'last') return (i) => (len - 1 - i)
  if (staggerFrom === 'center') return (i) => Math.abs(Math.floor(len / 2) - i)
  if (staggerFrom === 'random') {
    const order = Array.from({ length: len }, (_, i) => i).sort(() => Math.random() - 0.5)
    return (i) => order[i]
  }
  return (i) => i
}

export default function RotatingText({
  texts = [],
  splitBy = 'characters',
  staggerFrom = 'last',
  staggerDuration = 0.025,
  rotationInterval = 2000,
  className = '',
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length)
    }, rotationInterval)
    return () => clearInterval(timer)
  }, [texts.length, rotationInterval])

  const parts = splitText(texts[index], splitBy)
  const getOrder = useCallback(() => getStaggerOrder(parts.length, staggerFrom), [parts.length, staggerFrom])

  return (
    <span className={`rotating-text ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[index]}
          style={{ display: 'inline-flex', flexWrap: 'wrap' }}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {parts.map((part, i) => (
            <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
              <motion.span
                variants={{
                  hidden: { y: '100%', opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                  exit: { y: '-120%', opacity: 0 },
                }}
                transition={{
                  type: 'spring',
                  damping: 30,
                  stiffness: 400,
                  delay: getOrder()(i) * staggerDuration,
                }}
                style={{ display: 'inline-block' }}
              >
                {part}
                {splitBy === 'words' && i < parts.length - 1 ? '\u00A0' : ''}
              </motion.span>
            </span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
