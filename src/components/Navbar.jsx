import { Menu, X } from "lucide-react"
import { useState } from "react"

const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Skills', link: '#skills' },
  { name: 'Projects', link: '#projects' },
  { name: 'Contact', link: '#contact' },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-border/60 bg-background/75 backdrop-blur-xl backdrop-saturate-150">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="text-base font-semibold tracking-tight">
          Colin Delsink
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
          >
            Hire Me
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          className="md:hidden -mr-2 flex size-11 items-center justify-center rounded-full hover:bg-secondary"
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border/60 px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setIsMenuOpen(false)}
              className="block border-b border-border/60 py-3 text-lg"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 block rounded-full bg-primary py-3 text-center font-medium text-primary-foreground"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar
