import instagram from '../assets/instagram.png'
import github from '../assets/github.png'
import youtube from '../assets/youtube.png'
import hero from '../assets/realcracker.png'
import CV from '../assets/Colin.pdf'
import { DownloadIcon, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"

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

  return (
    <section id="home" className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-12 px-4 sm:px-6 lg:flex-row lg:justify-between">
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

        <img
          src={hero}
          alt="Portrait of Colin Delsink"
          className="w-64 sm:w-80 lg:w-96 h-auto"
          data-aos="fade-in"
        />
      </div>
    </section>
  )
}

export default Hero
