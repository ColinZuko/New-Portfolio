import { motion, useScroll, useTransform, useSpring, useVelocity, useReducedMotion } from 'framer-motion'

const rows = [
  { text: 'WEB DEVELOPMENT • UI/UX DESIGN • GAME TECH • ', dir: 1 },
  { text: 'REACT • FIGMA • TAILWIND • PHOTOSHOP • UNITY • ', dir: -1 },
]

// Giant text rows that slide with scroll and skew with scroll speed
const Marquee = () => {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const velocity = useSpring(useVelocity(scrollY), { stiffness: 300, damping: 50 })
  const skewX = useTransform(velocity, [-3000, 3000], [25, -25], { clamp: true })
  const right = useTransform(scrollY, (v) => `${-((v * 0.08) % 50)}%`)
  const left = useTransform(scrollY, (v) => `${-50 + ((v * 0.08) % 50)}%`)

  return (
    <div aria-hidden="true" className="overflow-hidden bg-primary py-6 text-primary-foreground">
      {rows.map((row) => (
        <motion.div
          key={row.text}
          style={reduce ? undefined : { x: row.dir === 1 ? right : left, skewX }}
          className="whitespace-nowrap text-6xl font-black tracking-tighter sm:text-8xl"
        >
          {row.text.repeat(6)}
        </motion.div>
      ))}
    </div>
  )
}

export default Marquee
