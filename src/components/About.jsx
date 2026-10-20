import about from '../assets/about.jpg'

const stats = [
  { value: '3+', label: 'Years of Education' },
  { value: '3+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Completed' },
]

const About = () => {
  return (
    <section id="about" className="bg-card py-20 sm:py-28">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <img
          src={about}
          alt="Colin at work"
          className="mx-auto aspect-square w-full max-w-sm rounded-3xl object-cover"
          data-aos="fade-up"
        />

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
