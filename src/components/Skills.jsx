import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import Figma from '../assets/figma.png'
import HTML from '../assets/HTML.png'
import CSS from '../assets/css.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import PHP from '../assets/php.svg'
import photoshop from '../assets/photoshop.png'
import indesign from '../assets/indesign.png'

const skills = [
  { name: 'Figma', icon: Figma, level: 95 },
  { name: 'HTML', icon: HTML, level: 90 },
  { name: 'CSS', icon: CSS, level: 88 },
  { name: 'React', icon: react, level: 60 },
  { name: 'Tailwind CSS', icon: tailwind, level: 50 },
  { name: 'PHP', icon: PHP, level: 60 },
  { name: 'Photoshop', icon: photoshop, level: 80 },
  { name: 'InDesign', icon: indesign, level: 85 },
]

// columns drift at different speeds, so the grid shears apart while scrolling
const depths = [1, 2.4, 0.4, 1.8]

const SkillCard = ({ skill, i, progress, reduce }) => {
  const d = depths[i % 4]
  const y = useTransform(progress, [0, 1], [d * 220, -d * 220])
  const rotateX = useTransform(progress, [0, 0.5, 1], [50, 0, -50])
  const rotateZ = useTransform(progress, [0, 0.5, 1], [(i % 2 ? 1 : -1) * 12, 0, (i % 2 ? -1 : 1) * 12])
  const iconRotate = useTransform(progress, [0, 1], [-360 * d, 360 * d])
  const bar = useTransform(progress, [0.15, 0.5], ['0%', `${skill.level}%`])

  return (
    <motion.li style={reduce ? undefined : { y, rotateX, rotateZ }} className="rounded-2xl bg-card p-5 shadow-xl">
      <div className="mb-5 flex items-center gap-3">
        <motion.img src={skill.icon} alt="" style={reduce ? undefined : { rotate: iconRotate }} className="size-10 object-contain" />
        <h3 className="text-lg font-semibold">{skill.name}</h3>
      </div>

      <div className="mb-2 flex justify-between text-sm">
        <span className="text-muted-foreground">Proficiency</span>
        <span className="font-medium tabular-nums">{skill.level}%</span>
      </div>
      <div
        role="progressbar"
        aria-label={`${skill.name} proficiency`}
        aria-valuenow={skill.level}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-1.5 w-full overflow-hidden rounded-full bg-secondary"
      >
        <motion.div className="h-full rounded-full bg-primary" style={{ width: reduce ? `${skill.level}%` : bar }} />
      </div>
    </motion.li>
  )
}

const Skills = () => {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgX = useTransform(scrollYProgress, [0, 1], ['-40%', '10%'])
  const headScale = useTransform(scrollYProgress, [0, 0.4], [3, 1])
  const headOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section id="skills" ref={ref} className="relative overflow-hidden py-40 sm:py-56 [perspective:1200px]">
      <motion.p
        aria-hidden="true"
        style={reduce ? undefined : { x: bgX }}
        className="pointer-events-none absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-[25vw] font-black leading-none tracking-tighter text-primary/10 select-none"
      >
        SKILLS SKILLS SKILLS
      </motion.p>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div className="mb-24 text-center" style={reduce ? undefined : { scale: headScale, opacity: headOpacity }}>
          <h2 className="mb-3 text-4xl font-semibold sm:text-5xl">Skills</h2>
          <p className="text-lg text-muted-foreground">My skillset in design and web development</p>
        </motion.div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 [transform-style:preserve-3d]">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} i={i} progress={scrollYProgress} reduce={reduce} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
