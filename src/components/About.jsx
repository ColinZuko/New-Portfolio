import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import about from '../assets/about.jpg'

const stats = [
  { value: '3+', label: 'Years of Education' },
  { value: '3+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Completed' },
]

const title = 'About Me'

const Letter = ({ char, i, progress }) => {
  // every letter flies in from its own depth
  const y = useTransform(progress, [0, 0.45], [(i % 2 ? 1 : -1) * (120 + i * 40), 0])
  const rotate = useTransform(progress, [0, 0.45], [(i % 3 - 1) * 90, 0])
  return <motion.span className="inline-block" style={{ y, rotate }}>{char === ' ' ? ' ' : char}</motion.span>
}

const About = () => {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const clip = useTransform(scrollYProgress, [0.1, 0.45], ['inset(40% 40% 40% 40% round 3rem)', 'inset(0% 0% 0% 0% round 1.5rem)'])
  const imgY = useTransform(scrollYProgress, [0, 1], ['-25%', '25%'])
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.6, 1.15, 1.4])
  const textY = useTransform(scrollYProgress, [0, 1], [200, -200])
  const bgX = useTransform(scrollYProgress, [0, 1], ['30%', '-60%'])
  const statYs = [
    useTransform(scrollYProgress, [0, 1], [60, -60]),
    useTransform(scrollYProgress, [0, 1], [140, -140]),
    useTransform(scrollYProgress, [0, 1], [220, -220]),
  ]
  const m = (style) => (reduce ? undefined : style)

  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-card py-32 sm:py-48">
      <motion.p
        aria-hidden="true"
        style={m({ x: bgX })}
        className="pointer-events-none absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-[22vw] font-black leading-none tracking-tighter text-foreground/[0.04] select-none"
      >
        WHO AM I WHO AM I
      </motion.p>

      <div className="relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <motion.div style={m({ clipPath: clip })} className="mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl">
          <motion.img
            src={about}
            alt="Colin at work"
            style={m({ y: imgY, scale: imgScale })}
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div className="text-center lg:text-left" style={m({ y: textY })}>
          <h2 className="mb-6 text-4xl font-semibold sm:text-5xl" aria-label={title}>
            {reduce ? title : [...title].map((c, i) => <Letter key={i} char={c} i={i} progress={scrollYProgress} />)}
          </h2>

          <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
            I am a CMGT student at Saxion University of Applied Sciences, specializing in web development and design.
            With a passion for creating visually stunning and user-friendly websites,
            I have honed my skills in HTML, CSS, JavaScript, and various web development frameworks.
            I am dedicated to delivering high-quality work and continuously expanding my knowledge in the ever-evolving field of web development.
          </p>

          <dl className="grid grid-cols-3 gap-4 border-t border-border pt-6">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} className="flex flex-col" style={m({ y: statYs[i] })}>
                <dt className="text-sm text-muted-foreground">{stat.label}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight">{stat.value}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  )
}

export default About
