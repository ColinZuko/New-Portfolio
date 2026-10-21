import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Marquee from "./components/Marquee"

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      offset: 80,
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Marquee />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
export default App
