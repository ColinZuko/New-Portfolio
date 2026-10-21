import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue, useReducedMotion } from 'framer-motion'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'
import youtube from '../assets/youtube.png'
import hero from '../assets/realcracker.png'
import CV from '../assets/Colin.pdf'
import figma from '../assets/figma.png'
import html from '../assets/HTML.png'
import css from '../assets/css.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import php from '../assets/php.svg'
import photoshop from '../assets/photoshop.png'
import indesign from '../assets/indesign.png'
import { DownloadIcon, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"

// depth: how hard each icon reacts to scroll and mouse (bigger = closer to the camera)
const floaters = [
  { icon: figma, top: '14%', left: '8%', depth: 2.2, size: 'size-14' },
  { icon: react, top: '22%', left: '84%', depth: 3, size: 'size-20' },
  { icon: html, top: '62%', left: '4%', depth: 1.4, size: 'size-12' },
  { icon: css, top: '70%', left: '90%', depth: 2.6, size: 'size-16' },
  { icon: tailwind, top: '8%', left: '55%', depth: 1, size: 'size-10' },
  { icon: php, top: '82%', left: '30%', depth: 3.6, size: 'size-24' },
  { icon: photoshop, top: '40%', left: '94%', depth: 1.8, size: 'size-12' },
  { icon: indesign, top: '46%', left: '2%', depth: 3.2, size: 'size-16' },
]

const stars = Array.from({ length: 70 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  top: `${(i * 61) % 100}%`,
  size: (i % 3) + 1,
}))

const Floater = ({ f, progress, mx, my }) => {
  const y = useTransform(progress, [0, 1], ['0vh', `${-f.depth * 60}vh`])
  const rotate = useTransform(progress, [0, 1], [0, f.depth * 180])
  const x = useTransform(mx, (v) => v * f.depth * 30)
  const yMouse = useTransform(my, (v) => v * f.depth * 30)
  return (
    <motion.div className="absolute" style={{ top: f.top, left: f.left, x, y: yMouse }}>
      <motion.img
        src={f.icon}
        alt=""
        style={{ y, rotate, filter: `blur(${Math.max(0, f.depth - 2.8) * 3}px)` }}
        className={`${f.size} object-contain drop-shadow-2xl`}
      />
    </motion.div>
  )
}

const Hero = () => {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })

  // Mouse position in -1..1, smoothed
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const mx = useSpring(rawX, { stiffness: 60, damping: 20 })
  const my = useSpring(rawY, { stiffness: 60, damping: 20 })
  const onMouseMove = (e) => {
    if (reduce) return
    rawX.set(e.clientX / window.innerWidth * 2 - 1)
    rawY.set(e.clientY / window.innerHeight * 2 - 1)
  }

  const starsY = useTransform(p, [0, 1], ['0%', '-15%'])
  const nameScale = useTransform(p, [0, 0.7], [1, 9])
  const nameOpacity = useTransform(p, [0, 0.5, 0.7], [0.12, 0.25, 0])
  const nameX = useTransform(mx, (v) => v * -15)
  const portraitY = useTransform(p, [0, 1], ['0%', '-90%'])
  const portraitScale = useTransform(p, [0, 1], [1, 0.4])
  const portraitRotate = useTransform(p, [0, 1], [0, -25])
  const portraitX = useTransform(mx, (v) => v * 40)
  const introY = useTransform(p, [0, 0.3], ['0%', '-60%'])
  const introOpacity = useTransform(p, [0, 0.25], [1, 0])
  const farY = useTransform(p, [0, 1], ['30%', '-5%'])
  const midY = useTransform(p, [0, 1], ['55%', '-25%'])
  const nearY = useTransform(p, [0, 1], ['80%', '-55%'])
  const farX = useTransform(mx, (v) => v * -10)
  const midX = useTransform(mx, (v) => v * -25)
  const nearX = useTransform(mx, (v) => v * -50)
  const tagline = useTransform(p, [0.35, 0.55, 0.8], [0, 1, 0])
  const taglineScale = useTransform(p, [0.35, 0.8], [0.6, 1.4])

  if (reduce) return <StaticHero />

  return (
    <section id="home" ref={ref} className="relative h-[400vh]" onMouseMove={onMouseMove}>
      <div className="sticky top-0 h-screen overflow-hidden bg-[radial-gradient(ellipse_at_top,var(--card),var(--background)_70%)]">
        {/* stars */}
        <motion.div className="absolute inset-0" style={{ y: starsY }} aria-hidden="true">
          {stars.map((s, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-foreground/40"
              style={{ left: s.left, top: s.top, width: s.size, height: s.size }}
            />
          ))}
        </motion.div>

        {/* giant name zooming through the camera */}
        <motion.h2
          aria-hidden="true"
          style={{ scale: nameScale, opacity: nameOpacity, x: nameX }}
          className="pointer-events-none absolute inset-0 flex items-center justify-center text-[28vw] font-black leading-none tracking-tighter text-primary select-none"
        >
          COLIN
        </motion.h2>

        {floaters.map((f, i) => <Floater key={i} f={f} progress={p} mx={mx} my={my} />)}

        {/* portrait */}
        <motion.div
          style={{ y: portraitY, scale: portraitScale, rotate: portraitRotate, x: portraitX }}
          className="absolute inset-x-0 bottom-0 flex justify-center lg:justify-end lg:pr-[10vw]"
        >
          <img src={hero} alt="Portrait of Colin Delsink" className="w-64 sm:w-80 lg:w-[28rem] h-auto" />
        </motion.div>

        {/* intro text */}
        <motion.div
          style={{ y: introY, opacity: introOpacity }}
          className="relative z-10 mx-auto flex h-full max-w-5xl flex-col justify-center px-4 pb-40 sm:px-6 lg:pb-0"
        >
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:max-w-xl">
            <p className="mb-3 text-lg font-medium text-primary">Creative Media &amp; Game Technology</p>
            <h1 className="mb-6 text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
              Hi, I'm Colin Delsink.
            </h1>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button asChild className="h-12 rounded-full px-6 text-base">
                <a href={CV} download><DownloadIcon className="size-5" />Download CV</a>
              </Button>
              <Button asChild variant="secondary" className="h-12 rounded-full px-6 text-base">
                <a href="#contact"><Mail className="size-5" />Contact Me</a>
              </Button>
            </div>
            <Socials />
            <p className="mt-10 animate-bounce text-sm text-muted-foreground">Scroll ↓</p>
          </div>
        </motion.div>

        {/* mid-flight tagline */}
        <motion.p
          aria-hidden="true"
          style={{ opacity: tagline, scale: taglineScale }}
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-4 text-center text-5xl font-bold tracking-tight sm:text-7xl"
        >
          Web dev. <span className="text-primary">&nbsp;Design.&nbsp;</span> Games.
        </motion.p>

        {/* mountains, back to front; the front one is bg-card so it melts into About */}
        <Mountain y={farY} x={farX} className="text-primary/20" d="M0 220 L180 90 L320 180 L520 40 L700 170 L880 70 L1060 190 L1240 60 L1440 160 V400 H0Z" />
        <Mountain y={midY} x={midX} className="text-primary/45" d="M0 260 L140 160 L300 240 L470 120 L640 230 L820 140 L1000 250 L1180 130 L1440 220 V400 H0Z" />
        <Mountain y={nearY} x={nearX} className="text-card" d="M0 300 L200 210 L380 290 L600 190 L820 300 L1020 220 L1240 300 L1440 230 V400 H0Z" />
      </div>
    </section>
  )
}

const Mountain = ({ d, className, y, x }) => (
  <motion.svg
    aria-hidden="true"
    viewBox="0 0 1440 400"
    preserveAspectRatio="none"
    style={{ y, x }}
    className={`pointer-events-none absolute -inset-x-16 bottom-0 h-[60vh] w-[calc(100%+8rem)] ${className}`}
  >
    <path d={d} fill="currentColor" />
  </motion.svg>
)

const Socials = () => (
  <div className="mt-8 flex gap-2">
    {[
      { icon: instagram, alt: 'Instagram', url: 'https://www.instagram.com/colindelsink/?hl=en' },
      { icon: github, alt: 'GitHub', url: 'https://github.com/ColinZuko' },
      { icon: youtube, alt: 'YouTube', url: 'https://www.youtube.com/@dubbeld6894/videos' },
    ].map((social) => (
      <a
        key={social.alt}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.alt}
        className="flex size-11 items-center justify-center rounded-full transition-colors hover:bg-secondary"
      >
        <img src={social.icon} alt="" className="size-7 object-contain brightness-75 dark:brightness-100" />
      </a>
    ))}
  </div>
)

// Reduced-motion users get the original calm hero
const StaticHero = () => (
  <section id="home" className="pt-28 pb-20 sm:pt-36 sm:pb-28">
    <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-12 px-4 sm:px-6 lg:flex-row lg:justify-between">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:max-w-xl">
        <p className="mb-3 text-lg font-medium text-primary">Creative Media &amp; Game Technology</p>
        <h1 className="mb-6 text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">Hi, I'm Colin Delsink.</h1>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button asChild className="h-12 rounded-full px-6 text-base">
            <a href={CV} download><DownloadIcon className="size-5" />Download CV</a>
          </Button>
          <Button asChild variant="secondary" className="h-12 rounded-full px-6 text-base">
            <a href="#contact"><Mail className="size-5" />Contact Me</a>
          </Button>
        </div>
        <Socials />
      </div>
      <img src={hero} alt="Portrait of Colin Delsink" className="w-64 sm:w-80 lg:w-96 h-auto" />
    </div>
  </section>
)

export default Hero
