import instagram from '../assets/instagram.png'
import github from '../assets/github.png'
import youtube from '../assets/youtube.png'
import hero from '../assets/realcracker.png'
import CV from '../assets/Colin.pdf'
import figma from '../assets/figma.png'
import htmlCssJs from '../assets/html-css-js.webp'
import git from '../assets/git-bash.svg'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import php from '../assets/php.svg'
import photoshop from '../assets/photoshop.png'
import indesign from '../assets/indesign.png'
import { DownloadIcon, Mail } from 'lucide-react'
import { motion, useScroll, useTransform, useSpring, useMotionValue, useReducedMotion } from 'framer-motion'
import { Button } from "@/components/ui/button"

// depth: how strongly a logo reacts to scroll and mouse (bigger = closer to you)
// mobileHidden: keeps the phone layout from getting crowded
const floaters = [
  { icon: figma, top: '14%', left: '3%', depth: 1.6, size: 'size-12 sm:size-14' },
  { icon: react, top: '10%', left: '88%', depth: 2.4, size: 'size-12 sm:size-16' },
  { icon: htmlCssJs, top: '44%', left: '1%', depth: 1, size: 'size-12', mobileHidden: true },
  { icon: tailwind, top: '6%', left: '46%', depth: 0.8, size: 'size-10', mobileHidden: true },
  { icon: php, top: '80%', left: '6%', depth: 2.8, size: 'size-14 sm:size-20' },
  { icon: photoshop, top: '52%', left: '93%', depth: 1.4, size: 'size-10 sm:size-12', mobileHidden: true },
  { icon: indesign, top: '84%', left: '86%', depth: 2, size: 'size-12 sm:size-14', mobileHidden: true },
  { icon: git, top: '30%', left: '58%', depth: 1.2, size: 'size-10', mobileHidden: true },
]

const Floater = ({ f, i, scrollY, mx, my }) => {
  // closer logos rise faster than the page while you scroll, and shift more with the mouse
  const y = useTransform(scrollY, [0, 700], [0, -f.depth * 110], { clamp: true })
  const rotate = useTransform(scrollY, [0, 700], [0, f.depth * 25], { clamp: true })
  const x = useTransform(mx, (v) => v * f.depth * 18)
  const yMouse = useTransform(my, (v) => v * f.depth * 18)
  return (
    <motion.div
      className={`absolute ${f.mobileHidden ? 'hidden lg:block' : ''}`}
      style={{ top: f.top, left: f.left, x, y: yMouse }}
    >
      <motion.div style={{ y, rotate }}>
        {/* idle bob, each logo on its own rhythm */}
        <motion.img
          src={f.icon}
          alt=""
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3 + (i % 3), repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
          className={`${f.size} object-contain opacity-80 drop-shadow-xl`}
        />
      </motion.div>
    </motion.div>
  )
}

const Hero = () => {
  const socialIcons = [
    { icon: instagram, alt: 'Instagram', url: 'https://www.instagram.com/colindelsink/?hl=en' },
    { icon: github, alt: 'GitHub', url: 'https://github.com/ColinZuko' },
    { icon: youtube, alt: 'YouTube', url: 'https://www.youtube.com/@dubbeld6894/videos' },
  ]

  // Calculate age dynamically
  const today = new Date();
  const birthDate = new Date(2004, 1, 12); // February 12, 2004
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  // the portrait scrolls a bit slower than the page, so it feels further back
  const portraitY = useTransform(scrollY, [0, 600], [0, 90], { clamp: true })

  // mouse position as -1..1, with a short, snappy spring
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const mx = useSpring(rawX, { stiffness: 150, damping: 20 })
  const my = useSpring(rawY, { stiffness: 150, damping: 20 })
  const onMouseMove = (e) => {
    rawX.set((e.clientX / window.innerWidth) * 2 - 1)
    rawY.set((e.clientY / window.innerHeight) * 2 - 1)
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
      onMouseMove={reduce ? undefined : onMouseMove}
    >
      {!reduce && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {floaters.map((f, i) => (
            <Floater key={i} f={f} i={i} scrollY={scrollY} mx={mx} my={my} />
          ))}
        </div>
      )}

      <div className="relative mx-auto flex max-w-5xl flex-col-reverse items-center gap-12 px-4 sm:px-6 lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:max-w-xl" data-aos="fade-up">
          <p className="mb-3 text-lg font-medium text-primary">
            Creative Media &amp; Game Technology
          </p>

          <h1 className="mb-6 text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
            Hi, I'm Colin Delsink.
          </h1>

          <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
            I am a {age} year old student from the Netherlands, currently studying Creative Media and Game Technology
            at Saxion University of applied sciences in Enschede.
            I have an interest in web development and UI/UX design.
            I am comfortable using programs such as Photoshop, InDesign, Premiere pro, Figma and I know HTML, CSS, JavaScript and the MERN stack basics.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button asChild className="h-12 rounded-full px-6 text-base">
              <a href={CV} download>
                <DownloadIcon className="size-5" />
                Download CV
              </a>
            </Button>
            <Button asChild variant="secondary" className="h-12 rounded-full px-6 text-base">
              <a href="#contact">
                <Mail className="size-5" />
                Contact Me
              </a>
            </Button>
          </div>

          <div className="mt-8 flex gap-2">
            {socialIcons.map((social) => (
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
        </div>

        <div data-aos="fade-in">
          <motion.img
            src={hero}
            alt="Portrait of Colin Delsink"
            style={reduce ? undefined : { y: portraitY }}
            className="w-64 sm:w-80 lg:w-96 h-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
