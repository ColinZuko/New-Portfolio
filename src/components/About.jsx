import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import about from '../assets/about.jpg'

const stats = [
  { value: '3+', label: 'Years of Education' },
  { value: '3+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Completed' },
]

const About = () => {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  // the photo drifts slightly inside its frame: a quiet parallax
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section id="about" className="bg-card py-20 sm:py-28">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div ref={ref} className="mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl" data-aos="fade-up">
          <motion.img
            src={about}
            alt="Colin at work"
            style={reduce ? undefined : { y: imgY, scale: 1.18 }}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="text-center lg:text-left" data-aos="fade-up">
          <h2 className="mb-6 text-4xl font-semibold sm:text-5xl">About Me</h2>

          <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
            I am a CMGT student at Saxion University of Applied Sciences, specializing in web development and design.
            With a passion for creating visually stunning and user-friendly websites,
            I have honed my skills in HTML, CSS, JavaScript, and various web development frameworks.
            I am dedicated to delivering high-quality work and continuously expanding my knowledge in the ever-evolving field of web development.
          </p>

          <dl className="grid grid-cols-3 gap-4 border-t border-border pt-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="text-sm text-muted-foreground">{stat.label}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default About
