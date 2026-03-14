import about from '../assets/about.jpg'

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <figure
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-wrap justify-center gap-4 relative order-2 lg:order-1"
        >
          <div className="relative w-75 h-75 lg:w-96 lg:h-96">
 
            <img
              src={about}
              alt="About Image"
              className="absolute inset-0 w-full h-full object-cover z-10 transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="400"
            />
          </div>
        </figure>

        <article
          data-aos="fade-left"
          data-aos-delay="300"
          className="text-center lg:text-left relative order-1 lg:order-2"
        >
          <header>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-linear-to-r from-green-400 to-green-600 bg-clip-text"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              About Me
            </h1>
          </header>

          <p
            className={`text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 leading-relaxed bg-linear-to-r from-green-900/10 to-green-900/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            I am a CMGT student at Saxion University of Applied Sciences, specializing in web development and design. 
            With a passion for creating visually stunning and user-friendly websites, 
            I have honed my skills in HTML, CSS, JavaScript, and various web development frameworks. 
            I am dedicated to delivering high-quality work and continuously expanding my knowledge in the ever-evolving field of web development.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            <div className="text-center" data-aos="zoom-in" data-aos-delay="600">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-500">
                3+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                Years of Education
              </div>
            </div>

            <div className="text-center" data-aos="zoom-in" data-aos-delay="650">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-500">
                3+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                Years Experience
              </div>
            </div>

            <div className="text-center" data-aos="zoom-in" data-aos-delay="700">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-500">
                10+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                Projects Completed
              </div>
            </div>
          </div>

        </article>
      </div>
    </section>
  )
}

export default About
