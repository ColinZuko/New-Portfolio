import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

const socials = [
  { label: 'GitHub', url: 'https://github.com/ColinZuko', icon: <FaGithub className="size-5" /> },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/colin-delsink-001bb0202/', icon: <FaLinkedin className="size-5" /> },
  { label: 'Instagram', url: 'https://www.instagram.com/colindelsink/?hl=en', icon: <FaInstagram className="size-5" /> },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-semibold">Colin Delsink</p>
          <p className="text-sm text-muted-foreground">Frontend Developer &amp; UI/UX Designer</p>
        </div>

        <div className="flex gap-1">
          {socials.map(({ label, url, icon }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex size-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {icon}
            </a>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">© {currentYear} Colin Delsink</p>
      </div>
    </footer>
  )
}

export default Footer
