import instagram from '../assets/instagram.png'
import github from '../assets/github.png'
import youtube from '../assets/youtube.png'
import hero from '../assets/RealCracker.png'
import CV from '../assets/Colin.pdf'
import { DownloadIcon, Import, Mail } from 'lucide-react'

const Hero = ({ darkMode }) => {
  const socialIcons = [
    { icon: instagram, alt: 'Instagram', url: 'https://www.instagram.com/colindelsink/?hl=en' },
    { icon: github, alt: 'github', url: 'https://github.com/ColinZuko' },
    { icon: youtube, alt: 'youtube', url: 'https://www.youtube.com/@dubbeld6894/videos' },
  ]

  const darkTheme = {
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
    buttonSecondary: `
      text-white border-2 border-green-500 
      hover:bg-green-600
    `,
    decorativeCircle: 'bg-green-500 opacity-10',
  }

  const lightTheme = {
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-700',
    buttonSecondary: `
      text-gray-800 border-2 border-green-500 
      hover:bg-green-600 hover:text-white
    `,
    decorativeCircle: 'bg-green-400 opacity-20',
  }

  const theme = darkMode ? darkTheme : lightTheme

  // Calculate age dynamically
  const today = new Date();
  const birthDate = new Date(2004, 2, 12); // February 12, 2004
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col">
      <section
        id="home"
        data-aos="fade-up"
        data-aos-delat="250"
        className="body-font z-10"
      >
        <div className="container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-14 flex-col lg:flex-row items-center justify-between lg:mt-14 mt-14">
          {/* Text Content */}
          <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0">
            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos-delay={`${400 + index * 100}`}
                  className="transform hover:scale-110 transition-transform duration-300"
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className={`w-8 h-8 sm:w-10 sm:h-10 object-contain ${
                      darkMode ? '' : 'filter brightness-75'
                    }`}
                  />
                </a>
              ))}
            </div>

            <h1
              className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Hi, I'm Colin Delsink
            </h1>

            <p
              className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}
              data-aos="fade-up"
              data-aos-dela="600"
            >
              I am a {age} year old student from the Netherlands, currently studying Creative Media and Game Technology 
              at Saxion University of applied sciences in Enschede. 
              I have an interest in web development and UI/UX design. 
              I am comfortable using programs such as Photoshop, InDesign, Premiere pro, Figma and I know HTML, CSS, JavaScript and the MERN stack basics.
            </p>

            {/* Buttons */}
            <div className="w-full pt-4 sm:pt-6">
              <div
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <a href={CV} download className="w-full sm:w-auto">
                  <button
                    className="w-full sm:w-auto inline-flex items-center justify-center text-white bg-linear-to-r from-green-500 to-green-700 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(0,100,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform"
                  >
                    <DownloadIcon className="w-4 h-4 sm:h-5 sm:w-5 mr-2" />
                    Download CV
                  </button>
                </a>

                <a href="#contact" className="w-full sm:w-auto">
                  <button
                    className={`w-full sm:w-auto inline-flex items-center justify-center ${theme.buttonSecondary} border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(0,100,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform`}
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Contact Me
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className="lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0 flex justify-center"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="relative w-4/5 sm:w-3/4 lg:w-full">
              <div className="relative overflow-hidden">
                <img
                  src={hero}
                  alt="Hero Image"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>


            </div>
          </div>
        </div>

        {/* Decorative Circle */}
        <div
          className={`absolute -top-20 -left-20 w-40 h-40 sm:w-64 sm:h-64 ${theme.decorativeCircle} rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000 hidden sm:block`}
        />
      </section>
    </div>
  )
}

export default Hero
